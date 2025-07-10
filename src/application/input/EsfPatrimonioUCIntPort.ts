import { FormEsfPatrimonio } from "../../domain/models/FormEsfPatrimonioModel";

export interface EsfPatrimonioUCIntPort {
    listEsfPatrimonio(): Promise<FormEsfPatrimonio[]>;
    getIDEsfPatrimonio(id: string): Promise<FormEsfPatrimonio>;
    createEsfPatrimonio(esfPatrimonio: FormEsfPatrimonio): Promise<FormEsfPatrimonio>;
    updateEsfPatrimonio(id: string, esfPatrimonio: FormEsfPatrimonio): Promise<FormEsfPatrimonio>;  
}
