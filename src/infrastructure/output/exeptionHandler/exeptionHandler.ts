import { ErrorFormatterIntPort } from "../../../application/output/ErrorFormaterIntPort";
import { CustumError } from "./customErrors/CustomErrors";

export class ExceptionHandler implements ErrorFormatterIntPort {
    errorExistsEntity(message: string): never {
        throw CustumError.notFound(message);
    }
}