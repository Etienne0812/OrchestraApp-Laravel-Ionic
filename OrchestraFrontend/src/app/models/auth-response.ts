export class AuthResponse {
    user: {
        id: number;
        password: string;
        email: string;
        role: number;
    }
    access_token: string
}