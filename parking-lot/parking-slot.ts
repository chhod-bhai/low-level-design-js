import type { VehicleType } from "./types";
import type Vehicle from "./vehicle";

export default class ParkingSlot {
  slotId: string;
  occupied: boolean;
  vehicleType: VehicleType;
  vehicle: Vehicle | null;

  constructor(vehicleType: VehicleType) {
    this.slotId = "test";
    this.occupied = false;
    this.vehicleType = vehicleType;
    this.vehicle = null;
  }

  park(vehicle: Vehicle) {
    this.vehicle = vehicle;
    this.occupied = true;
  }

  exit() {
    this.vehicle = null;
    this.occupied = false;
  }

  isAvailable(vehicleType: VehicleType) {
    if (!this.occupied && this.vehicleType == vehicleType) return true;
    return false;
  }
}
