import { FormActivosFijos } from "../../domain/models/FormActivosFijosModel";
export interface ActivosFijosUCIntPort {
    listActivosFijos(): Promise<FormActivosFijos[]>;
    getIDActivosFijos(id:string): Promise<FormActivosFijos>;
    createActivoFijo(activo: FormActivosFijos): Promise<FormActivosFijos>;
    updateActivoFijo(id: string, activo: FormActivosFijos): Promise<FormActivosFijos>;
};