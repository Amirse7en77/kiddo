import { User } from "./user";

export interface LoginCredentials {
    username?: string;
    password?: string;
}

export interface LoginResponse {
    token: string;
    user: User;
}