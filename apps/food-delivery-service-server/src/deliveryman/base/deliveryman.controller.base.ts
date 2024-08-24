/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { DeliverymanService } from "../deliveryman.service";
import { DeliverymanCreateInput } from "./DeliverymanCreateInput";
import { Deliveryman } from "./Deliveryman";
import { DeliverymanFindManyArgs } from "./DeliverymanFindManyArgs";
import { DeliverymanWhereUniqueInput } from "./DeliverymanWhereUniqueInput";
import { DeliverymanUpdateInput } from "./DeliverymanUpdateInput";

export class DeliverymanControllerBase {
  constructor(protected readonly service: DeliverymanService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Deliveryman })
  async createDeliveryman(
    @common.Body() data: DeliverymanCreateInput
  ): Promise<Deliveryman> {
    return await this.service.createDeliveryman({
      data: data,
      select: {
        createdAt: true,
        id: true,
        name: true,
        phone: true,
        updatedAt: true,
        vehicleType: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Deliveryman] })
  @ApiNestedQuery(DeliverymanFindManyArgs)
  async deliverymen(@common.Req() request: Request): Promise<Deliveryman[]> {
    const args = plainToClass(DeliverymanFindManyArgs, request.query);
    return this.service.deliverymen({
      ...args,
      select: {
        createdAt: true,
        id: true,
        name: true,
        phone: true,
        updatedAt: true,
        vehicleType: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Deliveryman })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deliveryman(
    @common.Param() params: DeliverymanWhereUniqueInput
  ): Promise<Deliveryman | null> {
    const result = await this.service.deliveryman({
      where: params,
      select: {
        createdAt: true,
        id: true,
        name: true,
        phone: true,
        updatedAt: true,
        vehicleType: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Deliveryman })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateDeliveryman(
    @common.Param() params: DeliverymanWhereUniqueInput,
    @common.Body() data: DeliverymanUpdateInput
  ): Promise<Deliveryman | null> {
    try {
      return await this.service.updateDeliveryman({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          name: true,
          phone: true,
          updatedAt: true,
          vehicleType: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Deliveryman })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteDeliveryman(
    @common.Param() params: DeliverymanWhereUniqueInput
  ): Promise<Deliveryman | null> {
    try {
      return await this.service.deleteDeliveryman({
        where: params,
        select: {
          createdAt: true,
          id: true,
          name: true,
          phone: true,
          updatedAt: true,
          vehicleType: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
