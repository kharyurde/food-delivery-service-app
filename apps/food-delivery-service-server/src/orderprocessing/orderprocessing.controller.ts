import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { OrderProcessingService } from "./orderprocessing.service";
import { GenerateOtpInput } from "../orderProcessing/GenerateOtpInput";

@swagger.ApiTags("orderProcessings")
@common.Controller("orderProcessings")
export class OrderProcessingController {
  constructor(protected readonly service: OrderProcessingService) {}

  @common.Post("/generate-otp")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GenerateOtpForOrder(
    @common.Body()
    body: GenerateOtpInput
  ): Promise<string> {
        return this.service.GenerateOtpForOrder(body);
      }

  @common.Post("/notify-deliveryman")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async NotifyDeliveryman(
    @common.Body()
    body: GenerateOtpInput
  ): Promise<string> {
        return this.service.NotifyDeliveryman(body);
      }

  @common.Post("/notify-restaurant")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async NotifyRestaurant(
    @common.Body()
    body: GenerateOtpInput
  ): Promise<string> {
        return this.service.NotifyRestaurant(body);
      }
}
