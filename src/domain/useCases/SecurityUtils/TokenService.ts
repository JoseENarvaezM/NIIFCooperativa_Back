import jwt from 'jsonwebtoken';
import { env } from '../../../config/env';

export class TokenService {
  static createAccessToken(data: any): Promise<string> {
    return new Promise((resolve, reject) => {
      jwt.sign(data, env.jwtSecret, { expiresIn: "1d" }, (err, token) => {
        if (err || !token) {
          return reject(err || new Error("Token generation failed"));
        }
        resolve(token);
      });
    });
  }
  static verifyAccessToken(token: string): Promise<any | null> {
    return new Promise((resolve, reject) => {
      jwt.verify(token, env.jwtSecret, (err, decoded) => {
        if (err) {
          return resolve(null);
        }
        resolve(decoded);
      });
    });
  }
}
