import type { PricingStrategy } from ".";
import type Ticket from "../ticket";
import type { VehicleType } from "../types";

export default class BasicPricingStrategy implements PricingStrategy {
  pricePerHour: Map<VehicleType, number>;
  constructor(pricePerHour: Map<VehicleType, number>) {
    this.pricePerHour = pricePerHour;
  }

  getPrice(ticket: Ticket) {
    if (!ticket.exit || !ticket.entry) return 0;

    const hoursElapsed = Math.floor(
      ticket.exit.getTime() - ticket.entry.getTime() / (1000 * 60 * 60)
    );

    const hourlyRate = this.pricePerHour.get(ticket.vehicle.type);
    if (!hourlyRate) {
      throw new Error(`Hourly price not found for vehicle: ${ticket.vehicle}`);
    }

    return hoursElapsed * hourlyRate;
  }
}
