export class CustumError extends Error {
    constructor(public readonly statusCode: number, public readonly message: string) {
        super(message);
    }

    static notFound(message: string) {
        return new CustumError(404, message);
    }
    static existsEntity(message: string) {
        return new CustumError(500, message);
    }
}