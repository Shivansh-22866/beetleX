import { useMutation } from "@tanstack/react-query";
import { submitScore } from "../api/judges";

export const useSubmitScore =
 () =>
   useMutation({
     mutationFn:
       submitScore,
   });