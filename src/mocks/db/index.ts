import usersData from "./users.json";
import eventsData from "./events.json";
import tracksData from "./tracks.json";
import teamsData from "./teams.json";
import projectsData from "./projects.json";
import registrationsData from "./registrations.json";
import judgesData from "./judges.json";
import scoresData from "./scores.json";
import announcementsData from "./announcements.json";

export const db = {
  users: [...usersData],
  events: [...eventsData],
  tracks: [...tracksData],
  teams: [...teamsData],
  projects: [...projectsData],
  registrations: [...registrationsData],
  judges: [...judgesData],
  scores: [...scoresData],
  announcements: [...announcementsData],
};