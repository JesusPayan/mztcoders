import { Student } from "../services/Student";

export interface LoginResponse {
  id?: number;
  token: string;
  role: string;
  message: string;
  status: string;
  data: Student;
  name: string;
  picture: string;
  email: string;
  paymentStatus?: string;
  userData?: string;
}