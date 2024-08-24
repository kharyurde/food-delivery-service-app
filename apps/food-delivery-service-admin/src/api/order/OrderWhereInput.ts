import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PaymentListRelationFilter } from "../payment/PaymentListRelationFilter";
import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type OrderWhereInput = {
  client?: ClientWhereUniqueInput;
  id?: StringFilter;
  orderDate?: DateTimeNullableFilter;
  otp?: StringNullableFilter;
  payments?: PaymentListRelationFilter;
  restaurant?: RestaurantWhereUniqueInput;
  status?: "Option1";
  totalAmount?: FloatNullableFilter;
};
