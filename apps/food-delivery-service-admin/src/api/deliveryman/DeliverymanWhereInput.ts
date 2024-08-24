import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type DeliverymanWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  phone?: StringNullableFilter;
  vehicleType?: StringNullableFilter;
};
