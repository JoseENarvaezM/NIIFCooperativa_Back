export interface AuthIntPort {
  createAccessToken(data: any): Promise<string>;
  verifyAccessToken(token: string): Promise<any | null>;
}