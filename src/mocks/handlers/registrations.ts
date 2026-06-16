import { http, HttpResponse } from "msw";
import { db } from "../db";

import type { Registration } from "../../../types/Registration";
import { API } from "../../api/endpoints";

export const registrationHandlers = [
  http.get(API.REGISTRATIONS, async () => {

    return HttpResponse.json(
      db.registrations
    );
  }),

  http.post(
    API.REGISTRATIONS,
    async ({ request }) => {

      const body = await request.json() as Registration;

      const exists =
        db.registrations.find(
          (registration) =>
            registration.user_id ===
              body.user_id &&
            registration.event_id ===
              body.event_id
        );

      if (exists) {
        return HttpResponse.json(
          {
            code: "ALREADY_REGISTERED",
            registrationId: exists.id,
            exists: exists
          },
          {
            status: 409,
          }
        );
      }

      const registration = {
        id: crypto.randomUUID(),
        ...body,
        status: "confirmed",
        registered_at:
          new Date().toISOString(),
      };

      db.registrations.push(
        registration
      );

      console.log("REgistrations: ", db.registrations)

      return HttpResponse.json(
        registration,
        {
          status: 201,
        }
      );
    }
  ),
];