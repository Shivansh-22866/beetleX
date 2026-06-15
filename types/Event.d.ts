interface Resource {
    label: string;
    url: string;
}

interface Sponsor {
    name: string;
    url: string;
    logo_url: string;
}

export interface Event {
    id: string;
    title: string;
    tagline: string;
    description: string;
    rules: string;
    eligibility: string;
    start_date: Date;
    end_date: Date;
    registration_open: Date;  
    team_min_size: number;
    team_max_size: number;
    participant_count: number;
    status: "upcoming" | "ongoing" | "completed";
    resources: Resource[];
    sponsors: Sponsor[];
}