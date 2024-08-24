import { OrderCreateNestedManyWithoutRestaurantsInput } from "./OrderCreateNestedManyWithoutRestaurantsInput";

export type RestaurantCreateInput = {
  address?: string | null;
  email?: string | null;
  name?: string | null;
  orders?: OrderCreateNestedManyWithoutRestaurantsInput;
  phone?: string | null;
};
