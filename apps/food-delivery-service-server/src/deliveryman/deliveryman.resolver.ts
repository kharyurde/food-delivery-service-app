import * as graphql from "@nestjs/graphql";
import { DeliverymanResolverBase } from "./base/deliveryman.resolver.base";
import { Deliveryman } from "./base/Deliveryman";
import { DeliverymanService } from "./deliveryman.service";

@graphql.Resolver(() => Deliveryman)
export class DeliverymanResolver extends DeliverymanResolverBase {
  constructor(protected readonly service: DeliverymanService) {
    super(service);
  }
}
