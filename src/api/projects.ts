import { get, patch, post } from "./client";
import { API } from "./endpoints";
import type {Project} from "../../types/Project"

export const getProjects =
 () =>
   get<Project[]>(
     API.PROJECTS
   );

export const updateProject =
(
 id: string,
 body: Partial<Project>
) =>
 patch(
   `${API.PROJECTS}/${id}`,
   body
 );

 export const submitProject =
(id: string) =>
 post(
   `${API.PROJECTS}/${id}/submit`,
   {}
 );