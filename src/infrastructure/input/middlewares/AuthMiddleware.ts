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
  constructor(private readonly authUseCases: AuthUCIntPort) {}

  authenticate = (...allowedRoles: string[]) => {
    return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
      try {
        const token = req.cookies.token;
        if (!token) {
          res.status(401).json({ message: "No token provided" });
          return;
        }

        const user = await this.authUseCases.verifyToken(token);
        if (!user) {
          res.status(401).json({ message: "Invalid token" });
          return;
        }

        if (allowedRoles.length > 0 && !allowedRoles.includes(user.usuRole)) {
          res.status(403).json({ message: "Forbidden - insufficient role" });
          return;
        }

        req.user = user;
        next();
      } catch (error) {
        console.error("Authentication error:", error);
        res.status(500).json({ message: "Internal server error" });
      }
    };
  };
}
