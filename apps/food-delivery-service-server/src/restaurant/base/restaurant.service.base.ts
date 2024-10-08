/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Restaurant as PrismaRestaurant,
  Order as PrismaOrder,
} from "@prisma/client";

export class RestaurantServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.RestaurantCountArgs, "select">
  ): Promise<number> {
    return this.prisma.restaurant.count(args);
  }

  async restaurants(
    args: Prisma.RestaurantFindManyArgs
  ): Promise<PrismaRestaurant[]> {
    return this.prisma.restaurant.findMany(args);
  }
  async restaurant(
    args: Prisma.RestaurantFindUniqueArgs
  ): Promise<PrismaRestaurant | null> {
    return this.prisma.restaurant.findUnique(args);
  }
  async createRestaurant(
    args: Prisma.RestaurantCreateArgs
  ): Promise<PrismaRestaurant> {
    return this.prisma.restaurant.create(args);
  }
  async updateRestaurant(
    args: Prisma.RestaurantUpdateArgs
  ): Promise<PrismaRestaurant> {
    return this.prisma.restaurant.update(args);
  }
  async deleteRestaurant(
    args: Prisma.RestaurantDeleteArgs
  ): Promise<PrismaRestaurant> {
    return this.prisma.restaurant.delete(args);
  }

  async findOrders(
    parentId: string,
    args: Prisma.OrderFindManyArgs
  ): Promise<PrismaOrder[]> {
    return this.prisma.restaurant
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .orders(args);
  }
}
