import { IsString, Length, IsOptional } from 'class-validator';

export class CreateFiliacaoDto {
  @IsString()
  @Length(1, 40)
  readonly nome: string; 

  @IsString()
  @Length(1, 40)
  readonly endereco: string;

  @IsString()
  @Length(1, 30)
  readonly cidade: string;

  @IsString()
  @Length(1, 30)
  readonly bairro: string;

  @IsString()
  @Length(2, 2)
  readonly uf: string;
}

export class UpdateFiliacaoDto {
  @IsOptional()
  @IsString()
  @Length(1, 40)
  readonly nome?: string;

  @IsOptional()
  @IsString()
  @Length(1, 40)
  readonly endereco?: string;

  @IsOptional()
  @IsString()
  @Length(1, 30)
  readonly cidade?: string;

  @IsOptional()
  @IsString()
  @Length(1, 30)
  readonly bairro?: string;

  @IsOptional()
  @IsString()
  @Length(2, 2)
  readonly uf?: string;
}
