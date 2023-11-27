import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Request,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { CreateContactDTO } from './dtos/create-contact.dto';
import { ContactsService } from './contacts.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags("contacts")
@Controller('contacts')
export class ContactsController {
  constructor(private contactsService: ContactsService) {}
  @Post('')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  create(@Body() createContactDTO: CreateContactDTO) {
    return this.contactsService.create(createContactDTO);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contactsService.findOne(id);
  }

 @Get('')
  findAll() {
    return this.contactsService.findAll();
  } 
}