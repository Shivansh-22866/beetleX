import { http, HttpResponse } from "msw";
import { db } from "../db";
import type {Announcement} from "../../../types/Announcement"
import { API } from "../../api/endpoints";

export const announcementHandlers =
  [
    http.get(
      `${API.ANNOUNCEMENTS}`,
      async () => {

        return HttpResponse.json(
          db.announcements
        );
      }
    ),

    http.post(
      `${API.ANNOUNCEMENTS}`,
      async ({ request }) => {

        const body =
          await request.json() as Announcement;

        const announcement = {
          id: crypto.randomUUID(),
          ...body,
          created_at:
            new Date().toISOString(),
        };

        db.announcements.push(
          announcement as never
        );

        return HttpResponse.json(
          announcement,
          {
            status: 201,
          }
        );
      }
    ),
  ];