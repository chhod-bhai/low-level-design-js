import type ParkingSlot from "./parking-slot";
import type Vehicle from "./vehicle";

export default class ParkingFloor {
  #id: string;
  #slots: Array<ParkingSlot>;

  constructor(slots: Array<ParkingSlot>, id: string) {
    this.#id = id;
    this.#slots = slots;
  }

  availableSlots(vehicle: Vehicle) {
    return this.#slots.filter((slot) => slot.isAvailable(vehicle.type));
  }
}
