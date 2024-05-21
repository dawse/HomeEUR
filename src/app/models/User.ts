import { Client } from "./Client";
export class User{
  id!: number;
  firstname!: string;
  lastname!: string;
  email!: string;
  password!: string;
  statusUser!: string;
address!:string;
role!: string;
  fidelity!: number;
  code!: number;
  isSubscribed!: boolean;
  Client!: Client;


}

export interface AuthenticationRequest {
  email: string;
  password: string;
}

export interface AuthenticationResponse {
  token: string;
}
