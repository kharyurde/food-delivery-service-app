import { Module } from "@nestjs/common";
import { OrderProcessingService } from "./orderprocessing.service";
import { OrderProcessingController } from "./orderprocessing.controller";
import { OrderProcessingResolver } from "./orderprocessing.resolver";

@Module({
  controllers: [OrderProcessingController],
  providers: [OrderProcessingService, OrderProcessingResolver],
  exports: [OrderProcessingService],
})
export class OrderProcessingModule {}
