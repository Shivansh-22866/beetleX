import { http, HttpResponse } from "msw";
import { db } from "../db";
import { API } from "../../api/endpoints";

export const eventHandlers = [
  http.get(API.EVENTS, async ({ request }) => {

    const url = new URL(request.url);

    const search = url.searchParams.get("search");
    const status = url.searchParams.get("status");

    let events = [...await db.events];

    if (status) {
      events = events.filter(
        (event) => event.status === status
      );
    }

    if (search) {
      const term = search.toLowerCase();

      events = events.filter(
        (event) =>
          event.title.toLowerCase().includes(term) ||
          event.description
            .toLowerCase()
            .includes(term)
      );
    }

    return HttpResponse.json(events);
  }),

  http.get(`${API.EVENTS}/:id`, async ({ params }) => {

    const event = (await db.events).find(
      (event) => event.id === params.id
    );

    if (!event) {
      return HttpResponse.json(
        { message: "Event not found" },
        { status: 404 }
      );
    }

    return HttpResponse.json(event);
  }),
];