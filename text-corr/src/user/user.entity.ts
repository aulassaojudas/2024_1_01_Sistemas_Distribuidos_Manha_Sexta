import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Filiacao } from '../filiacao/filiacao.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id_user: number; 

  @Column({ unique: true, length: 40 })
  email: string;

  @Column({ length: 60 })
  senha: string;

  @Column({ length: 40 })
  nome: string;

  @OneToMany(() => Filiacao, (filiacao) => filiacao.id_user)
  filiacao: Filiacao[];
}
