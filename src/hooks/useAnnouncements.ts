import { useMutation, useQuery } from "@tanstack/react-query";
import { createAnnouncement, getAnnouncements } from "../api/announcements";
import { queryKeys } from "../lib/queryKeys";

export const useAnnouncements =
 () =>
   useQuery({
     queryKey: [
       queryKeys.announcements,
     ],
     queryFn:
       getAnnouncements,
   });

export const useCreateAnnouncement =
 () =>
   useMutation({
     mutationFn:
       createAnnouncement,
   });