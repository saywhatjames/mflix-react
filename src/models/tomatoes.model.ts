import { Rating } from "./rating.model";

export interface Tomatoes {
    viewer: Rating;
    website?: string;
    production?: string;
    lastUpdated: string;
    critic?: Rating;
    fresh?: number;
    rotten?: number;
    dvd?: string;
    consensus?: string;
    boxOffice?: string;
}

