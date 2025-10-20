import type { VehicleType } from "./types";

export default class Vehicle {
  id: string;
  type: VehicleType;
  constructor(id: string, vehicleType: VehicleType) {
    this.id = id;
    this.type = vehicleType;
  }
}
