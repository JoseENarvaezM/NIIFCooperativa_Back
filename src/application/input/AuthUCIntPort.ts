
export interface AuthUCIntPort {
    login(email: string, password: string): Promise<string | null>;
    logout(token: string): Promise<void>;
}
