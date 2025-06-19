import { ActivosFijos, ActivosFijosUCIntPort } from "../../application/input/ActivosFijosUCIntPort";
import { ActivosFijosGatewayIntPort } from "../../application/output/ActivosFijosGatewayIntPort";

export class ActivosFijosUCAdapter implements ActivosFijosUCIntPort {
    constructor(
        private activosFijosGateway: ActivosFijosGatewayIntPort
    ) {}
    listActivosFijos(): Promise<ActivosFijos[]> {
        return this.activosFijosGateway.listActivosFijos();
    }
    getIDActivosFijos(id:string): Promise<ActivosFijos> {
        return this.activosFijosGateway.getIDActivosFijos(id);
    }
    createActivoFijo(activo: ActivosFijos): Promise<ActivosFijos> {
        return this.activosFijosGateway.createActivoFijo(activo);
    }
    updateActivoFijo(id: string, activo: ActivosFijos): Promise<ActivosFijos> {
        if (this.getIDActivosFijos(id) != null) {
            return this.activosFijosGateway.updateActivoFijo(id, activo);
        }
        throw new Error(`Activo Fijo with id ${id} does not exist.`);
    }
   
}