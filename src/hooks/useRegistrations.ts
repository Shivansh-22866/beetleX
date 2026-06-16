import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { createRegistration } from "../api/registrations";
import { queryKeys } from "../lib/queryKeys";

export const useCreateRegistration =
  () => {
    const queryClient =
      useQueryClient();

    return useMutation({
      mutationFn:
        createRegistration,

      onSuccess: () => {
        queryClient.invalidateQueries(
          {
            queryKey: [
              queryKeys.registrations,
            ],
          }
        );
      },
    });
  };