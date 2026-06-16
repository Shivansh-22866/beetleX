import { http, HttpResponse } from "msw";
import { db } from "../db";
import type {Team} from "../../../types/Team"
import { API } from "../../api/endpoints";

export const teamHandlers = [
  http.get("/api/teams", async () => {

    return HttpResponse.json(db.teams);
  }),

  http.post(
    API.TEAMS,
    async ({ request }) => {

      const body = await request.json() as Team;

      const team = {
        id: crypto.randomUUID(),
        ...body,
        invite_code: crypto.randomUUID()
          .slice(0, 8)
          .toUpperCase(),
        created_at:
          new Date().toISOString(),
      };

      db.teams.push(team as never);

      return HttpResponse.json(
        team,
        {
          status: 201,
        }
      );
    }
  ),

  http.post(
    `${API.TEAMS}/join`,
    async ({ request }) => {

      const body = await request.json() as Team;

      const team = db.teams.find(
        (team) =>
          team.invite_code ===
          body.invite_code
      );

      if (!team) {
        return HttpResponse.json(
          {
            message:
              "Invalid invite code",
          },
          {
            status: 404,
          }
        );
      }

      return HttpResponse.json(team);
    }
  ),
];