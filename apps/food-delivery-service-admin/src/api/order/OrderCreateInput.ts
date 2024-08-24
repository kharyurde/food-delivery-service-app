import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { PaymentCreateNestedManyWithoutOrdersInput } from "./PaymentCreateNestedManyWithoutOrdersInput";
import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";

export type OrderCreateInput = {
  client?: ClientWhereUniqueInput | null;
  orderDate?: Date | null;
  otp?: string | null;
  payments?: PaymentCreateNestedManyWithoutOrdersInput;
  restaurant?: RestaurantWhereUniqueInput | null;
  status?: "Option1" | null;
  totalAmount?: number | null;
};
