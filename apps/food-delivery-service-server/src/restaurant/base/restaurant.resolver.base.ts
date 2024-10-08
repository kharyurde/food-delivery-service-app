/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Restaurant } from "./Restaurant";
import { RestaurantCountArgs } from "./RestaurantCountArgs";
import { RestaurantFindManyArgs } from "./RestaurantFindManyArgs";
import { RestaurantFindUniqueArgs } from "./RestaurantFindUniqueArgs";
import { CreateRestaurantArgs } from "./CreateRestaurantArgs";
import { UpdateRestaurantArgs } from "./UpdateRestaurantArgs";
import { DeleteRestaurantArgs } from "./DeleteRestaurantArgs";
import { OrderFindManyArgs } from "../../order/base/OrderFindManyArgs";
import { Order } from "../../order/base/Order";
import { RestaurantService } from "../restaurant.service";
@graphql.Resolver(() => Restaurant)
export class RestaurantResolverBase {
  constructor(protected readonly service: RestaurantService) {}

  async _restaurantsMeta(
    @graphql.Args() args: RestaurantCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Restaurant])
  async restaurants(
    @graphql.Args() args: RestaurantFindManyArgs
  ): Promise<Restaurant[]> {
    return this.service.restaurants(args);
  }

  @graphql.Query(() => Restaurant, { nullable: true })
  async restaurant(
    @graphql.Args() args: RestaurantFindUniqueArgs
  ): Promise<Restaurant | null> {
    const result = await this.service.restaurant(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Restaurant)
  async createRestaurant(
    @graphql.Args() args: CreateRestaurantArgs
  ): Promise<Restaurant> {
    return await this.service.createRestaurant({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Restaurant)
  async updateRestaurant(
    @graphql.Args() args: UpdateRestaurantArgs
  ): Promise<Restaurant | null> {
    try {
      return await this.service.updateRestaurant({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Restaurant)
  async deleteRestaurant(
    @graphql.Args() args: DeleteRestaurantArgs
  ): Promise<Restaurant | null> {
    try {
      return await this.service.deleteRestaurant(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Order], { name: "orders" })
  async findOrders(
    @graphql.Parent() parent: Restaurant,
    @graphql.Args() args: OrderFindManyArgs
  ): Promise<Order[]> {
    const results = await this.service.findOrders(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
