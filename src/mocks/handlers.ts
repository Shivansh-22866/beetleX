import { announcementHandlers } from "./handlers/announcements";
import { eventHandlers } from "./handlers/events";
import { judgeHandlers } from "./handlers/judges";
import { projectHandlers } from "./handlers/projects";
import { registrationHandlers } from "./handlers/registrations";
import { teamHandlers } from "./handlers/teams";

export const handlers = [
  ...eventHandlers,
  ...registrationHandlers,
  ...teamHandlers,
  ...projectHandlers,
  ...judgeHandlers,
  ...announcementHandlers
]