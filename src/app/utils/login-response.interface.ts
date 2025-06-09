import { Student } from "../services/Student";

export interface LoginResponse {
  token: string;
  role: string;
  message: string;
  status: string;
  data: Student;
  name: string;
  picture: string;
}