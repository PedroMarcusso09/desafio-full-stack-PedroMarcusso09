import { IsOptional, IsString } from "class-validator";

export class CreateContactDTO {
    @IsString()
    fullName: string;

    @IsString()
    email: string;
    
    @IsString()
    telephone: string;
    
    @IsString()
    clientId: string;
  contactId: any;
}
