import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type PaymentCreateInput = {
  amount?: number | null;
  order?: OrderWhereUniqueInput | null;
  paymentDate?: Date | null;
  status?: "Option1" | null;
};
