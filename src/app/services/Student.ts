export class Student {
  constructor(name: string, email: string, phone: string) {
    this.name = name;
    this.email = email;
    this.phone = phone;
  }
  id?: number;
  name: string;
  email: string;
  phone: string;
  createTimeStamp?: string;
  status?: boolean;
  password?: string;
}