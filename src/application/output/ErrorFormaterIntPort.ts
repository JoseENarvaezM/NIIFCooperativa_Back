export interface ErrorFormatterIntPort {
  errorExistsEntity(message: string): void;
  errorNotFound(message: string): void;
}