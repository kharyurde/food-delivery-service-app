import { OrderUpdateManyWithoutRestaurantsInput } from "./OrderUpdateManyWithoutRestaurantsInput";

export type RestaurantUpdateInput = {
  address?: string | null;
  email?: string | null;
  name?: string | null;
  orders?: OrderUpdateManyWithoutRestaurantsInput;
  phone?: string | null;
};
