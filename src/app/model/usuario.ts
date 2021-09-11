import { Url } from "./url";

export class Usuario{
  id?: number;
  login?: string;
  senha?: string;
  urls: Url[]=[];
}
