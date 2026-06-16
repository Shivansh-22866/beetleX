import type { Project } from "../../types/Project";
import { get, post } from "./client";
import { API } from "./endpoints";
import type {JudgeScore} from "../../types/JudgeScore"

export const getJudgeProjects =
(
 judgeId: string
) =>
 get<Project[]>(
   `${API.JUDGES}/${judgeId}/projects`
 );

export const submitScore =
(
 body: JudgeScore
) =>
 post(
   "/api/scores",
   body
 );