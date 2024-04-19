import { Filiacao } from '../filiacao/filiacao.entity';
export declare class User {
    id_user: number;
    email: string;
    senha: string;
    nome: string;
    filiacao: Filiacao[];
}
