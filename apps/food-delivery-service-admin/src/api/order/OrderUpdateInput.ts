import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { PaymentUpdateManyWithoutOrdersInput } from "./PaymentUpdateManyWithoutOrdersInput";
import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";

export type OrderUpdateInput = {
  client?: ClientWhereUniqueInput | null;
  orderDate?: Date | null;
  otp?: string | null;
  payments?: PaymentUpdateManyWithoutOrdersInput;
  restaurant?: RestaurantWhereUniqueInput | null;
  status?: "Option1" | null;
  totalAmount?: number | null;
};
