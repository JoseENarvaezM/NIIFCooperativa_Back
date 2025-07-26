import { ErrorFormatterIntPort } from "../../../application/output/ErrorFormaterIntPort";
import { CustumError } from "./customErrors/CustomErrors";

export class ExceptionHandler implements ErrorFormatterIntPort {
    errorExistsEntity(message: string): never {
        throw CustumError.existsEntity(message);
    }
    errorNotFound(message: string): never {
        throw CustumError.notFound(message);
    }
    genericError(message: string): never {
        throw CustumError.genericError(message);
    }
}