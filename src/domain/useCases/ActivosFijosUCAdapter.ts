import { ActivosFijosUCIntPort } from "../../application/input/ActivosFijosUCIntPort";
import { ActivosFijosGatewayIntPort } from "../../application/output/ActivosFijosGatewayIntPort";
import { FormActivosFijos } from "../models/FormActivosFijosModel";

export class ActivosFijosUCAdapter implements ActivosFijosUCIntPort {
    constructor(
        private activosFijosGateway: ActivosFijosGatewayIntPort
    ) {}
    listActivosFijos(): Promise<FormActivosFijos[]> {
        return this.activosFijosGateway.listActivosFijos();
    }
    getIDActivosFijos(id:string): Promise<FormActivosFijos> {
        return this.activosFijosGateway.getIDActivosFijos(id);
    }
    createActivoFijo(activo: FormActivosFijos): Promise<FormActivosFijos> {
        return this.activosFijosGateway.createActivoFijo(activo);
    }
    updateActivoFijo(id: string, activo: FormActivosFijos): Promise<FormActivosFijos> {
        if (this.getIDActivosFijos(id) != null) {
            return this.activosFijosGateway.updateActivoFijo(id, activo);
        }
        throw new Error(`Activo Fijo with id ${id} does not exist.`);
    }
   
}