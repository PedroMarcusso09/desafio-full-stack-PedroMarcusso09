import { IsEmail, IsNotEmpty, IsString, Min, MinLength, isNotEmpty, isString } from "class-validator"
import { Transform } from "class-transformer"
import { hashSync } from "bcryptjs";

export class CreateClientDto {
    @IsString()
    @IsNotEmpty()
    fullName: string;

    @IsString()
    @IsEmail()
    email: string;

    @IsString()
    @MinLength(8)
    @IsNotEmpty()
    @Transform(({value}: {value: string}) => hashSync(value, 10), {
        groups: ["transforms"],
    })
    password: string;

    @IsString()
    telephone: string;
}
