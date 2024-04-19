import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../user/user.entity';

@Entity()
export class Filiacao {
  @PrimaryGeneratedColumn()
  id_perfil: number;

  @ManyToOne(() => User, (user) => user.filiacao)
  @JoinColumn({ name: 'id_user' })
  id_user: User;

  @Column({ length: 40 })
  nome: string;

  @Column({ length: 40 })
  endereco: string;

  @Column({ length: 30 })
  cidade: string;

  @Column({ length: 30 })
  bairro: string;

  @Column({ length: 2 })
  uf: string;
}
