import { Presence } from './presence';

export class Pessoa {
    id: number;
    name: string;
    cpf: string;
    cnpj: string;
    dateBirth: string;
    phoneNumber: string;
    presences: Presence[];

}