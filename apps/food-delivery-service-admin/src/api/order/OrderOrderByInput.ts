import { SortOrder } from "../../util/SortOrder";

export type OrderOrderByInput = {
  clientId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  orderDate?: SortOrder;
  otp?: SortOrder;
  restaurantId?: SortOrder;
  status?: SortOrder;
  totalAmount?: SortOrder;
  updatedAt?: SortOrder;
};
