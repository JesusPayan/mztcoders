export interface PaymentObjetc {
    id?: number;
    user?: string | number;
    paymentAmount?: number;
    paymentDate?: Date;
    datos?: File | null;
    paymentStatus?: string;
    paymentDif?: number;
    nextPaymentDate?: Date;
}