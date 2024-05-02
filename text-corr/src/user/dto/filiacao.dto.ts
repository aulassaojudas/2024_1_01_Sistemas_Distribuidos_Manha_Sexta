import { IsString, Length, IsInt } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateFiliacaoDto {
  @IsString()
  @Length(8, 40, { message: 'o tamanho minimo do nome é 8 caracteres' })
  nome: string;

  @IsString()
  @Length(12, 40, { message: 'o tamanho minimo do endereço é 12 caracteres' })
  endereco: string;

  @IsString()
  @Length(8, 30, { message: 'o tamanho minimo do cidade é 8 caracteres' })
  cidade: string;

  @IsString()
  @Length(8, 30, { message: 'o tamanho minimo do bairro é 8 caracteres' })
  bairro: string;

  @IsString()
  @Length(2, 2, { message: 'o tamanho minimo do nome é 2 caracteres' })
  uf: string;

  @IsInt()
  userId: number;
}

export class UpdateFiliacaoDto extends PartialType(CreateFiliacaoDto) {}

