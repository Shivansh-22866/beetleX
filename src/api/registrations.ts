import type { Registration } from "../../types/Registration";
import { post } from "./client";
import { API } from "./endpoints";

export const createRegistration =
(
  body: Registration
) =>
  post<
    Registration,
    Registration
  >(
    API.REGISTRATIONS,
    body
  );