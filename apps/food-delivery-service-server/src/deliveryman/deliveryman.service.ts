import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DeliverymanServiceBase } from "./base/deliveryman.service.base";

@Injectable()
export class DeliverymanService extends DeliverymanServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
