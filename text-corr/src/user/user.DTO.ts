import { IsEmail, IsOptional, IsString, Length } from 'class-validator';

export class LoginDto {
  @IsEmail()
  @Length(1, 40)
  email: string;
 
  @IsString()
  @Length(1, 60)
  senha: string;

  @IsString()
  @Length(1, 40)
  nome: string;
}

export class UpdateLoginDto {
  @IsEmail()
  @IsOptional()
  @Length(1, 40)
  email?: string;

  @IsString()
  @IsOptional()
  @Length(1, 60)
  senha?: string;

  @IsString()
  @IsOptional()
  @Length(1, 40)
  nome?: string;
}
