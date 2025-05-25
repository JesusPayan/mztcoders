
export class Payment {
    amount: number;
    date: Date;
    studentId: number;
    file?: File | null;
  constructor(amount: number, date: Date, studentId: number) {
      this.amount = amount;
      this.date = date;
      this.studentId = studentId;
  }
}