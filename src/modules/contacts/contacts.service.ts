import { unlink } from 'node:fs';
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { v2 as cloudinary } from 'cloudinary';
import { CreateContactDTO } from './dtos/create-contact.dto';
import { Contact } from './entities/contacts.entity';

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
        clientId: contact.clientId,
      },
    });

    return newContact;
  }

 async findOne(id: string) {
    const contact = await this.prisma.contact.findFirst({
      where: {id}
    });
    return contact;
  }

  async findAll() {
    const contacts = await this.prisma.contact.findMany();
    return contacts;
  }

}