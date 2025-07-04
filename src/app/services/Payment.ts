
export class Payment {
  showAppPayments() {
    throw new Error('Method not implemented.');
  }
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