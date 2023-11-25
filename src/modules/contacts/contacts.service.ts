import { Injectable } from "@nestjs/common";
import { CreateContactDTO } from "./dtos/create-contact.dto";
import { Contact } from "./entities/contacts.entity";
import { UpdateContactDto } from "./dtos/update-contact.dto";

@Injectable()
export class ContactsService {
    private database: Contact[]=[]
    async create(createContactDTO: CreateContactDTO) {
        const contact = new Contact()
        Object.assign(contact, {
            ...createContactDTO
        });

        this.database.push(contact)
        return contact;

    }

    async findOne(id: string) {
        const contact = this.database.find(contact => contact.id === id)
        return contact;
    }

    findAll() {
        return this.database;
    }

    update(id: string, updateContactDto: UpdateContactDto) {
        const conatctIndex = this.database.findIndex((contact) => contact.id === id);
        this.database[conatctIndex] = {
          ...this.database[conatctIndex], 
          ...updateContactDto,
        };
    
        return this.database[conatctIndex]
      }
    
      remove(id: string) {
        const conatctIndex = this.database.findIndex((contact) => contact.id === id);
        return this.database.splice(conatctIndex, 1);
      }
}