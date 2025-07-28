export interface FormsUCIntPort <T>{
    getIDForm(stuID:string, roomID:string): Promise<T | null>;
    updateForm(stuID:string, roomID:string, activo: T): Promise<T>;
};