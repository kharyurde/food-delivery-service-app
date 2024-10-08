/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Deliveryman as PrismaDeliveryman } from "@prisma/client";

export class DeliverymanServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.DeliverymanCountArgs, "select">
  ): Promise<number> {
    return this.prisma.deliveryman.count(args);
  }

  async deliverymen(
    args: Prisma.DeliverymanFindManyArgs
  ): Promise<PrismaDeliveryman[]> {
    return this.prisma.deliveryman.findMany(args);
  }
  async deliveryman(
    args: Prisma.DeliverymanFindUniqueArgs
  ): Promise<PrismaDeliveryman | null> {
    return this.prisma.deliveryman.findUnique(args);
  }
  async createDeliveryman(
    args: Prisma.DeliverymanCreateArgs
  ): Promise<PrismaDeliveryman> {
    return this.prisma.deliveryman.create(args);
  }
  async updateDeliveryman(
    args: Prisma.DeliverymanUpdateArgs
  ): Promise<PrismaDeliveryman> {
    return this.prisma.deliveryman.update(args);
  }
  async deleteDeliveryman(
    args: Prisma.DeliverymanDeleteArgs
  ): Promise<PrismaDeliveryman> {
    return this.prisma.deliveryman.delete(args);
  }
}
