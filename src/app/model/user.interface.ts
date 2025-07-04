import { Role } from "./roles.type";
export interface User {
  username: string;
  role: Role;
  email: string;
  password: string;
  picture: string;
  id: number;
  paymentStatus?: string;
  name?: string;
  token?: string;  
}

export interface UserWithToken {
  email: string;
  token: string;
  role: string;
}