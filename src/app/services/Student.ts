export class Student {
  // static id: any;
  
  id?: number;
  name: string;
  email: string;
  phone: string;
  createTimeStamp?: string;
  status?: boolean;
  password?: string;
  role?: string;
  picture?: string;

  constructor(id: number, name: string, email: string, phone: string, password: string, role: string ) {
    this.id = 0; 
    this.name = name;
    this.email = email;
    this.phone = phone;
  
  }
  static fromJson(json: any): Student {
    return new Student(
      json.id,
      json.name,
      json.email,
      json.phone,
      json.password,
      json.role
    );
  }
}