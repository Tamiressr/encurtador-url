import { Usuario } from "./usuario";

export class Url{
  id?: number;
  url?: string;
  urlEncurtada?: string;
  data?: string;
  usuario?: Usuario = new Usuario;
}
