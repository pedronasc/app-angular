import {Type} from './Type'

export interface Pokemon {
    imagem : string;
    number: number;
    name: string;
    types: Type[];
  }