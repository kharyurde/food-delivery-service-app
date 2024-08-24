import { Deliveryman as TDeliveryman } from "../api/deliveryman/Deliveryman";

export const DELIVERYMAN_TITLE_FIELD = "name";

export const DeliverymanTitle = (record: TDeliveryman): string => {
  return record.name?.toString() || String(record.id);
};
