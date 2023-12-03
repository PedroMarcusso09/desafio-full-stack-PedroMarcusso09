import { unlink } from 'node:fs';
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { v2 as cloudinary } from 'cloudinary';
import { CreateContactDTO } from './dtos/create-contact.dto';
import { Contact } from './entities/contacts.entity';
import { UpdateContactDto } from './dtos/update-contact.dto';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class ContactsService {
  constructor(private prisma: PrismaService) {}

  async create(createContactDto: CreateContactDTO) {
    console.log('Dados recebidos:', createContactDto);

    const contact = new Contact();
    Object.assign(contact, createContactDto);

    const newContact = await this.prisma.contact.create({
      data: {
        id: contact.id,
        fullName: contact.fullName,
        email: contact.email,
        telephone: contact.telephone,
        clientId: contact.clientId
      },
    });

    return newContact;
  }

  async findContactsByClientId(clientId: string) {
    console.log(`Buscando contatos do cliente com ID: ${clientId}`);
    
    // Use o clientId para filtrar os contatos
    const contacts = await this.prisma.contact.findMany({
      where: { clientId }, // Filtrar contatos pelo clientId
    });
    
    console.log(`Contatos encontrados: ${contacts}`);
    
    return contacts;
  }
  

  async findAll() {
    const contacts = await this.prisma.contact.findMany();
    return contacts;
  }

  async update(id: string, updateContactDto: UpdateContactDto) {
    const contact = await this.prisma.contact.findUnique({
      where: { id },
    });
    if (!contact) {
      throw new NotFoundException('Contact not found');
    }

    const updatedContact = await this.prisma.contact.update({
      where: { id },
      data: { ...updateContactDto },
    });

    return plainToInstance(Contact, updatedContact);
  }

  async remove(id: string) {
    const contact = await this.prisma.contact.findUnique({
      where: { id },
    });
    if (!contact) {
      throw new NotFoundException('Contact not found');
    }
    await this.prisma.contact.delete({ where: { id } });
  }

}