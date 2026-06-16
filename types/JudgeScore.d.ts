export interface JudgeScore {
    id: string;
    judge_id: string;
    project_id: string;
    innovation: number;
    impact: number;
    presentation: number;
    comments: string | undefined;
    review_status: "pending" | "in_review" | "scored";
    scored_at: Date;
}