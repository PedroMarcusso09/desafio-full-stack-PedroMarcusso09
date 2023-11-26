import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Client } from './entities/client.entity';
import { plainToInstance } from 'class-transformer';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class ClientsService {
  constructor(private prisma: PrismaService){}
  async create(createClientDto: CreateClientDto) {
    const findClient = await this.prisma.client.findFirst({
      where: {email: createClientDto.email}
    })

    if(findClient) {
      throw new ConflictException("Client already exists");
    }
    const client = new Client()
    Object.assign(client, {
      ...createClientDto
    });
    await this.prisma.client.create({
      data: {...client}
    });
    return plainToInstance(Client, client);
  }

  async findAll() {
    const findClients = await this.prisma.client.findMany()
    return plainToInstance(Client, findClients);
  }

  async findOne(id: string) {
    const findClient = await this.prisma.client.findUnique({
      where: { id }, 
    })    
    if(!findClient) {
      throw new NotFoundException("Client not found");
    }
    return plainToInstance(Client, findClient);
  }

  async update(id: string, updateClientDto: UpdateClientDto) {
    const client = await this.prisma.client.findUnique({
      where: { id }, 
    })    
    if(!client) {
      throw new NotFoundException("Client not found");
    }

    const updatedClient = await this.prisma.client.update({
      where: {id},
      data: {...updateClientDto}
    })

    return plainToInstance(Client, updatedClient);
  }

  async remove(id: string) {
    const findClient = await this.prisma.client.findUnique({
      where: { id }, 
    })    
    if(!Client) {
      throw new NotFoundException("Client not found");
    }
    await this.prisma.client.delete({where: { id }});
  }
}
