import { Order } from "../order/Order";

export type Payment = {
  amount: number | null;
  createdAt: Date;
  id: string;
  order?: Order | null;
  paymentDate: Date | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
