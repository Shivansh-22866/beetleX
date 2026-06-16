import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../lib/queryKeys";
import { getJudgeProjects } from "../api/judges";

export const useJudgeProjects =
  (judgeId: string) =>
    useQuery({
      queryKey: queryKeys.judges,
      queryFn: () => getJudgeProjects(judgeId),
    });