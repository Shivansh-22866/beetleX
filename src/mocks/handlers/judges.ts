import { http, HttpResponse } from "msw";
import { db } from "../db";
import type {Judge} from "../../../types/Judge"
import { API } from "../../api/endpoints";

export const judgeHandlers = [
  http.get(
    `${API.JUDGES}/:id/projects`,
    async ({ params }) => {
      const judge =
        db.judges.find(
          (judge) =>
            judge.id === params.id
        );

      if (!judge) {
        return HttpResponse.json(
          {
            message:
              "Judge not found",
          },
          {
            status: 404,
          }
        );
      }

      const projects =
        db.projects.filter(
          (project) =>
            judge.assigned_tracks.includes(
              project.track_id
            )
        );

      return HttpResponse.json(
        projects
      );
    }
  ),

  http.post(
    `${API.SCORES}`,
    async ({ request }) => {

      const body = await request.json() as Judge;

      const score = {
        id: crypto.randomUUID(),
        ...body,
        review_status: "scored",
        scored_at:
          new Date().toISOString(),
      };

      db.scores.push(score as never);

      return HttpResponse.json(
        score,
        {
          status: 201,
        }
      );
    }
  ),
];