import type Ticket from "../ticket";

interface PricingStrategy {
  getPrice: (ticket: Ticket) => number;
}
