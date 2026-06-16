export interface Announcement {
    id: string;
    event_id: string;
    created_by: string;
    title: string;
    body: string;
    target_type: "broadcast" | "team" | "user" | "role";
    target_id: string;
    created_at: string;
}