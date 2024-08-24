import * as graphql from "@nestjs/graphql";
import { GenerateOtpInput } from "../orderProcessing/GenerateOtpInput";
import { OrderProcessingService } from "./orderprocessing.service";

export class OrderProcessingResolver {
  constructor(protected readonly service: OrderProcessingService) {}

  @graphql.Mutation(() => String)
  async GenerateOtpForOrder(
    @graphql.Args()
    args: GenerateOtpInput
  ): Promise<string> {
    return this.service.GenerateOtpForOrder(args);
  }

  @graphql.Mutation(() => String)
  async NotifyDeliveryman(
    @graphql.Args()
    args: GenerateOtpInput
  ): Promise<string> {
    return this.service.NotifyDeliveryman(args);
  }

  @graphql.Mutation(() => String)
  async NotifyRestaurant(
    @graphql.Args()
    args: GenerateOtpInput
  ): Promise<string> {
    return this.service.NotifyRestaurant(args);
  }
}
