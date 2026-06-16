import { useMutation } from "@tanstack/react-query";
import { createTeam, joinTeam } from "../api/teams";

export const useCreateTeam =
  () =>
    useMutation({
      mutationFn:
        createTeam,
    });

export const useJoinTeam =
 () =>
   useMutation({
     mutationFn:
       joinTeam,
   });