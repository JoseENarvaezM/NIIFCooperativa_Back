import { User } from "../input/UserUCIntPort";

export interface ExistByEmail {
    existByEmail(email: string): Promise<boolean>;
}