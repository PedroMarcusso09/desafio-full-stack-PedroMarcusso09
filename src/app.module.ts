import { Module } from '@nestjs/common';
import { ContactsModule } from './modules/contacts/contacts.module';
import { ClientsModule } from './modules/clients/clients.module';
import { AuthModule } from './modules/auth/auth.module';


@Module({
  imports: [ContactsModule, ClientsModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}