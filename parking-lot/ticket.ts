import type ParkingSlot from "./parking-slot";
import type Vehicle from "./vehicle";

export default class Ticket {
  id: string;
  entry: Date;
  exit: Date | null;
  vehicle: Vehicle;
  parkingSlot: ParkingSlot;

  constructor(vehicle: Vehicle, parkingSlot: ParkingSlot) {
    // TODO: replace this with uuid generator
    this.id = "test_uuid";
    this.entry = new Date();
    this.exit = null;
    this.vehicle = vehicle;
    this.parkingSlot = parkingSlot;
  }
}
