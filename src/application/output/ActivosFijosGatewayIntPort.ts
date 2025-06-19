import { ActivosFijos } from "../input/ActivosFijosUCIntPort";

export interface ActivosFijosGatewayIntPort {
    listActivosFijos(): Promise<ActivosFijos[]>;
    getIDActivosFijos(id: string): Promise<ActivosFijos>;
    createActivoFijo(activo: ActivosFijos): Promise<ActivosFijos>;
    updateActivoFijo(id: string, activo: ActivosFijos): Promise<ActivosFijos>;
    deleteActivoFijo(id: string): Promise<void>;
}