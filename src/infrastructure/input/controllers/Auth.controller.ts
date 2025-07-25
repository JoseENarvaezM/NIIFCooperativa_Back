import { Request, Response, NextFunction } from "express";
import { AuthUCIntPort } from "../../../application/input/AuthUCIntPort";

export class AuthController {
    constructor(private readonly authUseCases: AuthUCIntPort) { }

    login = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { email, password } = req.body;
            const token = await this.authUseCases.login(email, password);
            if (token) {
                res.cookie("token", token, { httpOnly: true, secure: true });
                res.status(204).send();
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
            const token = req.cookies.token;
            await this.authUseCases.logout(token);
            res.clearCookie("token");
            res.status(204).send();
        } catch (error) {
            next(error);
        }
    };
}