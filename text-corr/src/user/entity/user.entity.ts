import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'; // foi incluida importação de ManyToOne
import { Filiacao } from './filiacao.entity'; // esta linha foi adicionada

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id_user: number;

  @Column({ length: 40 })
  nome: string;

  @Column({ unique: true, length: 40 })
  email: string;

  @Column()
  senha: string;

  @OneToMany(() => Filiacao, (filiacao) => filiacao.user) // esta linha foi adicionada
  filiacoes: Filiacao[]; // esta linha foi adicionada
}
