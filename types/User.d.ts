export interface User {
  id: string;
  email: string;
  name: string;
  college_or_org: string;
  role: "participant" | "judge" | "organizer";
  avatar_url?: string;
  created_at: string;
}