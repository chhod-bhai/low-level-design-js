import type ParkingFloor from "../parking-floor";
import type ParkingSlot from "../parking-slot";
import type Vehicle from "../vehicle";

interface ParkingStrategy {
  getAvailableSlot: (
    floors: Array<ParkingFloor>,
    vehicle: Vehicle
  ) => ParkingSlot?;
}
