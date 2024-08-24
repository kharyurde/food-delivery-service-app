import { DeliverymanWhereInput } from "./DeliverymanWhereInput";
import { DeliverymanOrderByInput } from "./DeliverymanOrderByInput";

export type DeliverymanFindManyArgs = {
  where?: DeliverymanWhereInput;
  orderBy?: Array<DeliverymanOrderByInput>;
  skip?: number;
  take?: number;
};
