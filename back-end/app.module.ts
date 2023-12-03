import { Module } from '@nestjs/common';
import { ContactsModule } from '../back-end/database/modules/contacts/contacts.module';
import { ClientsModule } from '../back-end/database/modules/clients/clients.module';
import { AuthModule } from '../back-end/database/modules/auth/auth.module';


@Module({
  imports: [ContactsModule, ClientsModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule { }