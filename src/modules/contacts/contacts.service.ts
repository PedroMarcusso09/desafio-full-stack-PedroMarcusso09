import { Injectable } from "@nestjs/common";
import { CreateContactDTO } from "./dtos/create-contact.dto";
import { UpdateContactDto } from "./dtos/update-contact.dto";
import { PrismaService } from "src/database/prisma.service";
import { Contact } from "./entities/contacts.entity";
import { randomUUID } from "crypto";


@Injectable()
export class ContactsService {
  constructor(private prisma: PrismaService) {}

  async create(createContactDTO: CreateContactDTO): Promise<Contact> {
    const { fullName, email, telephone, clientId } = createContactDTO;

    const newContact = await this.prisma.contact.create({
      data: {
        id: randomUUID(),
        fullName,
        email,
        telephone,
        clientId,
      },
    });

    return newContact;
  }

  async findOne(id: string) {
        const contact = await this.prisma.contact.findFirst({
          where: { id }
        });
        return contact;
    }

  async findAll() {
      const contacts = await this.prisma.contact.findMany()
        return contacts;
    }

  async update(id: string, updateContactDto: UpdateContactDto) {
        const updatedContact = await this.prisma.contact.update({
          where: { id },
          data: updateContactDto
        })
    
        return updatedContact
      }
    
  async remove(id: string) {
      await this.prisma.contact.delete({
        where: { id }
      });
    }
}