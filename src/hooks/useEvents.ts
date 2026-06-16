import { useQuery }
from "@tanstack/react-query";

import { getEvent, getEvents } from "../api/events";
import { queryKeys } from "../lib/queryKeys";

export const useEvents =
  () =>
    useQuery({
      queryKey: queryKeys.events,
      queryFn: getEvents,
    });

export const useEvent = (
  id: string
) =>
  useQuery({
    queryKey: queryKeys.event(id),
    queryFn: () =>
      getEvent(id),
    enabled: !!id,
  });

