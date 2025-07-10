import { Request, Response, NextFunction } from "express";
import { AuthUCIntPort } from "../../../application/input/AuthUCIntPort";

export class AuthController {
    constructor(private readonly authUseCases: AuthUCIntPort) { }

    login = async (req: Request, res: Response, next: NextFunction) => {
        try {
            console.log("Login request received:", req.body);
            const { email, password } = req.body;
            const token = await this.authUseCases.login(email, password);
            if (token) {
                res.status(200).json({ token });
            } else {
                res.status(401).json({ message: "Invalid credentials" });
            }
        } catch (error) {
            console.error("Login error:", error);
            next(error);
        }
    };

    logout = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const token = req.headers.authorization?.split(" ")[1];
            await this.authUseCases.logout(token!);
            res.status(204).send();
        } catch (error) {
            next(error);
        }
    };
}