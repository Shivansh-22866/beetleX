export interface Registration {
  id: string;
  user_id: string;
  event_id: string;
  team_id?: string;
  track_id: string;
  status: "pending" | "confirmed" | "cancelled";
  registered_at: string;
}