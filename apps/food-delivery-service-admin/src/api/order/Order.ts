import { Client } from "../client/Client";
import { Payment } from "../payment/Payment";
import { Restaurant } from "../restaurant/Restaurant";

export type Order = {
  client?: Client | null;
  createdAt: Date;
  id: string;
  orderDate: Date | null;
  otp: string | null;
  payments?: Array<Payment>;
  restaurant?: Restaurant | null;
  status?: "Option1" | null;
  totalAmount: number | null;
  updatedAt: Date;
};
