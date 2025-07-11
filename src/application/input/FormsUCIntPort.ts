export interface FormsUCIntPort <T>{
    listForms(): Promise<T[]>;
    getIDForm(id:string): Promise<T | null>;
    createForm(activo: T): Promise<T>;
    updateForm(id: string, activo: T): Promise<T>;
};