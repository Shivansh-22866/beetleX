import { get } from "./client";
import { API } from "./endpoints";

import type {Event} from "../../types/Event"

export const getEvents =
  () =>
    get<Event[]>(
      API.EVENTS
    );


export const getEvent =
  (id: string) =>
    get<Event>(
      `${API.EVENTS}/${id}`
    );

export const searchEvents = (
  search: string
) =>
  get<Event[]>(
    `${API.EVENTS}?search=${search}`
  );

export const filterEvents = (
  status: string
) =>
  get<Event[]>(
    `${API.EVENTS}?status=${status}`
  );