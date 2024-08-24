import { Injectable } from "@nestjs/common";
import { GenerateOtpInput } from "../orderProcessing/GenerateOtpInput";

@Injectable()
export class OrderProcessingService {
  constructor() {}
  async GenerateOtpForOrder(args: GenerateOtpInput): Promise<string> {
    throw new Error("Not implemented");
  }
  async NotifyDeliveryman(args: GenerateOtpInput): Promise<string> {
    throw new Error("Not implemented");
  }
  async NotifyRestaurant(args: GenerateOtpInput): Promise<string> {
    throw new Error("Not implemented");
  }
}
