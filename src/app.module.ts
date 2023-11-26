import { Module } from '@nestjs/common';
import { ContactsModule } from './modules/contacts/contacts.module';
import { ClientsModule } from './modules/clients/clients.module';

@Module({
  imports: [ContactsModule, ClientsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
