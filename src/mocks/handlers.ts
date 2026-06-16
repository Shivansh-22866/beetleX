import { eventHandlers } from "./handlers/events";
import { registrationHandlers } from "./handlers/registrations";

export const handlers = [
  ...eventHandlers,
  ...registrationHandlers
]