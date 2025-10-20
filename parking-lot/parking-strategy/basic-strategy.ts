import type { ParkingStrategy } from ".";
import type ParkingFloor from "../parking-floor";
import type ParkingSlot from "../parking-slot";
import type Vehicle from "../vehicle";

export default class BasicStrategy implements ParkingStrategy {
  constructor() {}

  getAvailableSlot(floors: Array<ParkingFloor>, vehicle: Vehicle) {
    for (const floor of floors) {
      const availableSlots = floor.availableSlots(vehicle);
      if (availableSlots?.length) return availableSlots[0] || null;
    }
    return null;
  }
}
