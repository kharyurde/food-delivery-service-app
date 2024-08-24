import { Module } from "@nestjs/common";
import { DeliverymanModuleBase } from "./base/deliveryman.module.base";
import { DeliverymanService } from "./deliveryman.service";
import { DeliverymanController } from "./deliveryman.controller";
import { DeliverymanResolver } from "./deliveryman.resolver";

@Module({
  imports: [DeliverymanModuleBase],
  controllers: [DeliverymanController],
  providers: [DeliverymanService, DeliverymanResolver],
  exports: [DeliverymanService],
})
export class DeliverymanModule {}
