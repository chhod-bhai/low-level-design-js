import type ParkingFloor from "./parking-floor";
import type { ParkingStrategy } from "./parking-strategy";
import BasicParkingStrategy from "./parking-strategy/basic-strategy";
import type { PricingStrategy } from "./pricing-strategy";
import BasicPricingStrategy from "./pricing-strategy/basic-strategy";
import Ticket from "./ticket";
import type Vehicle from "./vehicle";

export default class ParkingLot {
  static #instance: ParkingLot;

  #activeTickets: Array<Ticket>;
  #floors: Array<ParkingFloor>;
  #pricingStrategy: PricingStrategy;
  #parkingStrategy: ParkingStrategy;

  static getInstance() {
    if (!this.#instance) {
      this.#instance = new ParkingLot(
        [],
        new BasicPricingStrategy(new Map()),
        new BasicParkingStrategy()
      );
    } else {
      return this.#instance;
    }
  }

  private constructor(
    floors: Array<ParkingFloor>,
    pricingStrategy: PricingStrategy,
    parkingStrategy: ParkingStrategy
  ) {
    this.#activeTickets = [];
    this.#floors = floors;
    this.#pricingStrategy = pricingStrategy;
    this.#parkingStrategy = parkingStrategy;
  }

  park(vehicle: Vehicle) {
    const parkingSlot = this.#parkingStrategy.getAvailableSlot(
      this.#floors,
      vehicle
    );
    if (!parkingSlot) {
      throw new Error("Parking is full. Sorry for the inconvenience");
    }

    parkingSlot.park(vehicle);
    const ticket = new Ticket(vehicle, parkingSlot);

    this.#activeTickets.push(ticket);
    return ticket;
  }

  private removeActiveTicket(ticket: Ticket) {
    this.#activeTickets = this.#activeTickets.filter(
      (tkt) => tkt.id !== ticket.id
    );
  }

  exit(ticket: Ticket) {
    const activeTkt = this.#activeTickets.find((tkt) => tkt.id === ticket.id);
    if (!activeTkt) {
      throw new Error("Invalid parking ticket, contact customer support!");
    }
    activeTkt.exit = new Date();
    activeTkt.parkingSlot.exit();

    this.removeActiveTicket(activeTkt);
    return this.#pricingStrategy.getPrice(activeTkt);
  }
}
