import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Client } from './entities/client.entity';

@Injectable()
export class ClientsService {
  private database: Client[] = []
  create(createClientDto: CreateClientDto) {
    const client = new Client()
    Object.assign(client, {
      ...createClientDto
    });
    this.database.push(client)
    return client
  }

  findOne(id: string) {
    const client = this.database.find((client) => client.id === id);
    return client;
  }

  findAll() {
    return this.database;
  }

  update(id: string, updateClientDto: UpdateClientDto) {
    const clientIndex = this.database.findIndex((client) => client.id === id);
    this.database[clientIndex] = {
      ...this.database[clientIndex], 
      ...updateClientDto,
    };

    return this.database[clientIndex]
  }

  remove(id: string) {
    const clientIndex = this.database.findIndex((client) => client.id === id);
    return this.database.splice(clientIndex, 1);
  }
}
