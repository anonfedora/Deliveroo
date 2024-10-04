import { Field, InputType } from "@nestjs/graphql";
import { isEmail, IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator"

@InputType()
export class RegisterDto {
    @Field()
    @IsNotEmpty({message: "Name is required."})
    @IsString({message: "Name must be of a string type."})
    name: string;

    @Field()
    @IsNotEmpty({message: "Password is required"})
    @MinLength(8, {message: "Password must be at least 8 characters"})
    password: string;

    @Field()
    @IsNotEmpty({message: "Email is required"})
    @IsEmail({}, {message: "Email is Invalid"})
    email: string;

    @Field()
    @IsNotEmpty({message: "Phone Number is required"})
    phone_number: number;

    @Field()
    @IsNotEmpty({message: "Address is required"})
    address: string;
}

@InputType()
export class LoginDto {
    @Field()
    @IsNotEmpty({message: "Email is required."})
    @IsEmail({}, {message: "Email is Invalid"})
    email: string;

    @Field()
    @IsNotEmpty({message: "Password is required"})
    @IsString()
    password: string;
}