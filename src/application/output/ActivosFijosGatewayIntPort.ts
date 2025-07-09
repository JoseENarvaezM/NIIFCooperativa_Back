import { FormActivosFijos } from "../../domain/models/FormActivosFijosModel";

export interface ActivosFijosGatewayIntPort {
    listActivosFijos(): Promise<FormActivosFijos[]>;
    getIDActivosFijos(id: string): Promise<FormActivosFijos>;
    createActivoFijo(activo: FormActivosFijos): Promise<FormActivosFijos>;
    updateActivoFijo(id: string, activo: FormActivosFijos): Promise<FormActivosFijos>;
    deleteActivoFijo(id: string): Promise<void>;
}