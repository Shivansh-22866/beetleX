import { http, HttpResponse } from "msw";
import { db } from "../db";
import { API } from "../../api/endpoints";

export const projectHandlers = [
  http.get(API.PROJECTS, async () => {

    return HttpResponse.json(
      db.projects
    );
  }),

  http.patch(
    `${API.PROJECTS}/:id`,
    async ({ params, request }) => {

      const body = await request.json();

      const project =
        db.projects.find(
          (project) =>
            project.id === params.id
        );

      if (!project) {
        return HttpResponse.json(
          {
            message:
              "Project not found",
          },
          {
            status: 404,
          }
        );
      }

      Object.assign(project, body);

      return HttpResponse.json(
        project
      );
    }
  ),

  http.post(
    `${API.PROJECTS}/:id/submit`,
    async ({ params }) => {

      const project =
        db.projects.find(
          (project) =>
            project.id === params.id
        );

      if (!project) {
        return HttpResponse.json(
          {
            message:
              "Project not found",
          },
          {
            status: 404,
          }
        );
      }

      project.status =
        "submitted";

      project.submitted_at =
        new Date().toISOString();

      return HttpResponse.json(
        project
      );
    }
  ),
];