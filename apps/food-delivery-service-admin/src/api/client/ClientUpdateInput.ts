import { OrderUpdateManyWithoutClientsInput } from "./OrderUpdateManyWithoutClientsInput";

export type ClientUpdateInput = {
  address?: string | null;
  email?: string | null;
  name?: string | null;
  orders?: OrderUpdateManyWithoutClientsInput;
  phone?: string | null;
};
