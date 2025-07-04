export class Student {
  // static id: any;
  
  id: number;
  name: string;
  email: string;
  phone: string;
  createTimeStamp?: string;
  status?: boolean;
  password?: string;
  constructor(id: number, name: string, email: string, phone: string) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
  }
}