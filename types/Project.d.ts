export interface Project {
    id: string;
    team_id: string;
    event_id: string;
    title: string;
    description: string;
    tech_stack: string[];
    demo_url: string | undefined;
    github_url: string | undefined;
    pitch_deck: string | undefined;
    video_url: string | undefined;
    status: "not started" | "pending" | "submitted";
    locked: boolean;
    submitted_at: EpochTimeStamp | undefined;
}