import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DeliverymanService } from "./deliveryman.service";
import { DeliverymanControllerBase } from "./base/deliveryman.controller.base";

@swagger.ApiTags("deliverymen")
@common.Controller("deliverymen")
export class DeliverymanController extends DeliverymanControllerBase {
  constructor(protected readonly service: DeliverymanService) {
    super(service);
  }
}
