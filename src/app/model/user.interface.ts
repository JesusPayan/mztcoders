import { Role } from "./roles.type";
export interface User {
  username: string;
  role: Role;
}

export interface UserWithToken {
  email: string;
  token: string;
  role: string;
}