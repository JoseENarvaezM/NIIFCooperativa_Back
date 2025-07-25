import { Request, Response, NextFunction } from "express";
import { AuthUCIntPort } from "../../../application/input/AuthUCIntPort";

declare global {
    namespace Express {
        interface Request {
            user?: any;
        }
    }
}

export class AuthMiddleware {
    constructor(private readonly authUseCases: AuthUCIntPort) { }

    authenticateAdmin =  (req: Request, res: Response, next: NextFunction):void => {
        try {
            const token = req.cookies.token;
            if (!token) {
                res.status(401).json({ message: "No token provided" });
                return;

            }
            this.authUseCases.verifyToken(token).then(user => {
                if (!user) {
                    res.status(401).json({ message: "Invalid token" });
                    return;
                }

                if (user.usuRol !== "admin") {
                    res.status(403).json({ message: "Forbidden" });
                    return;
                }
                req.user = user;
                next();
            });
        } catch (error) {
            console.error("Authentication error:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    };
    authenticateProfesor =  (req: Request, res: Response, next: NextFunction):void => {
        try {
            const token = req.cookies.token;
            if (!token) {
                res.status(401).json({ message: "No token provided" });
                return;
            }
            this.authUseCases.verifyToken(token).then(user => {
                if (!user) {
                    res.status(401).json({ message: "Invalid token" });
                    return;
                }
                if (user.usuRol !== "profesor") {
                    res.status(403).json({ message: "Forbidden" });
                    return;
                }
                req.user = user;
                console.log("Authenticated user:", req.user);
                next();
            });
            
        } catch (error) {
            console.error("Authentication error:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    };


}