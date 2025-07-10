import { FormIngresosFancturacion } from "../models/FormIngresosFancturacionModel";
import { IngFactUCIntPort } from "../../application/input/IngFactUCIntPort";
import { IngFactGatewayIntPort } from "../../application/output/IngFactGatewayIntPort";

export class IngFactUCAdapter implements IngFactUCIntPort {
    constructor(
        private ingFactGateway: IngFactGatewayIntPort
    ) {}

    listIngresosFacturacion(): Promise<FormIngresosFancturacion[]> {
        return this.ingFactGateway.listIngresosFacturacion();
    }

    getIDIngresosFacturacion(id: string): Promise<FormIngresosFancturacion> {
        return this.ingFactGateway.getIDIngresosFacturacion(id);
    }

    createIngresosFacturacion(ingresosFacturacion: FormIngresosFancturacion): Promise<FormIngresosFancturacion> {
        return this.ingFactGateway.createIngresosFacturacion(ingresosFacturacion);
    }

    updateIngresosFacturacion(id: string, ingresosFacturacion: FormIngresosFancturacion): Promise<FormIngresosFancturacion> {
        if (this.getIDIngresosFacturacion(id) != null) {
            return this.ingFactGateway.updateIngresosFacturacion(id, ingresosFacturacion);
        }
        throw new Error(`Ingresos Facturacion with id ${id} does not exist.`);
    }
}