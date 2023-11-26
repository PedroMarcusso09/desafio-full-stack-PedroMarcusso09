import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post, Request } from "@nestjs/common";
import { CreateContactDTO } from "./dtos/create-contact.dto";
import { ContactsService } from "./contacts.service";
import { UpdateContactDto } from "./dtos/update-contact.dto";


@Controller("contacts")
export class ContactsController {
    constructor(private contactsService: ContactsService) {}

    @Post("")
    create(@Body() createContactDTO: CreateContactDTO){
        return this.contactsService.create(createContactDTO);
    }

    @Get("")
    findall() {
        return this.contactsService.findAll();
    }

    @Get(":id")
    findOne(@Param("id") id: string) {
        return this.contactsService.findOne(id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateContactDto: UpdateContactDto) {
      return this.contactsService.update(id, updateContactDto);
    }
  
    @HttpCode(204)
    @Delete(':id')
    remove(@Param('id') id: string) {
      return this.contactsService.remove(id);
    }

}