import { Order as TOrder } from "../api/order/Order";

export const ORDER_TITLE_FIELD = "otp";

export const OrderTitle = (record: TOrder): string => {
  return record.otp?.toString() || String(record.id);
};
