import type { Team } from "../../types/Team";
import { post } from "./client";
import { API } from "./endpoints";

export const createTeam =
(body: Team) =>
  post(API.TEAMS, body);

export const joinTeam =
(
 inviteCode: string
) =>
 post(
   `${API.TEAMS}/join`,
   { inviteCode }
 );