import { get, post } from "./client";
import { API } from "./endpoints";
import type { Announcement } from "../../types/Announcement";

export const getAnnouncements =
() =>
 get<Announcement[]>(
   API.ANNOUNCEMENTS
 );

 export const createAnnouncement =
(body: Announcement) =>
 post(
   API.ANNOUNCEMENTS,
   body
 );