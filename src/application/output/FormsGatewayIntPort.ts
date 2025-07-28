export interface FormsGatewayIntPort <T> {
    createForm(activo: T): Promise<T>;
    getIDForm(stuID:string, roomID:string): Promise<T | null>;
    updateForm(stuID:string, roomID:string, activo: T): Promise<T>;
}