import { OrderCreateNestedManyWithoutClientsInput } from "./OrderCreateNestedManyWithoutClientsInput";

export type ClientCreateInput = {
  address?: string | null;
  email?: string | null;
  name?: string | null;
  orders?: OrderCreateNestedManyWithoutClientsInput;
  phone?: string | null;
};
