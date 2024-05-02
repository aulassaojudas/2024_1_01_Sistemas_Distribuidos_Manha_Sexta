import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'; // foi incluida importação de ManyToOne
import { User } from './user.entity'; // esta linha foi adicionada

@Entity('filiacao')
export class Filiacao {
  @PrimaryGeneratedColumn()
  id_perfil: number;

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

  @ManyToOne(() => User, (user) => user.filiacoes) // esta linha foi adicionada
  user: User; // esta linha foi adicionada
}
