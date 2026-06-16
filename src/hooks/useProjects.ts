import { useMutation, useQuery } from "@tanstack/react-query";
import { getProjects, submitProject, updateProject } from "../api/projects";
import type { Project } from "../../types/Project";
import { queryKeys } from "../lib/queryKeys";

export const useSubmitProject =
 () =>
   useMutation({
     mutationFn:
       submitProject,
   });

export const useGetProjects = () =>
  useQuery({
    queryKey: queryKeys.projects,
    queryFn: getProjects,
  });

export const useUpdateProject =
  (id: string) =>
    useMutation({
      mutationFn:
        (body: Partial<Project>) =>
          updateProject(id, body),
    });