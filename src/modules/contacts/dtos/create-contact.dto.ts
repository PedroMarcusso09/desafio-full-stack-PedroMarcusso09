import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";
import { randomUUID } from "crypto";

export class CreateContactDTO {
    
    @ApiProperty()
    @IsString()
    fullName: string;

    @ApiProperty()
    @IsString()
    email: string;
    
    @ApiProperty()
    @IsString()
    telephone: string;

    @ApiProperty()
    @IsString()
    clientId: string;
};