import { SortOrder } from "../../util/SortOrder";

export type PaymentOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  orderId?: SortOrder;
  paymentDate?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
