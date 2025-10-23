import { Request, Response, NextFunction } from "express";
import { AuthUCIntPort } from "../../../application/input/AuthUCIntPort";

export class AuthController {
    constructor(private readonly authUseCases: AuthUCIntPort) { }

    login = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { email, password } = req.body;
            const user = await this.authUseCases.login(email, password);
            if (user) {
                res.cookie("token", user.token, { httpOnly: true, secure: false, path: "/", sameSite: "strict" });//TODO: cambiar a una variable de entorno que indique si es producción o desarrollo
                res.status(200).json({
                    usuID: user.usuID,
                    usuRole: user.usuRole
                });
            } else {
                res.status(401).json({ message: "Invalid credentials" });
            }
        } catch (error) {
            next(error);
        }
    };

    logout = async (_: Request, res: Response, next: NextFunction) => {
        try {
            res.clearCookie("token", { httpOnly: true, secure: false, path: "/", sameSite: "strict" });//TODO: cambiar a una variable de entorno que indique si es producción o desarrollo
            res.status(204).send();
        } catch (error) {
            next(error);
        }
    };
    
    profile = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const user = req.user; // Assuming user is set by auth middleware
            res.status(200).json({
                usuID: user.usuID,
                usuRole: user.usuRole
            });
        } catch (error) {
            next(error);
        }
    };
    studentProfile = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const user = req.user; 
            res.status(200).json({
                stuID: user.stuID,
                roomID: user.roomID,
                usuRole: user.usuRole
            });
        } catch (error) {
            next(error);
        }
    };

}