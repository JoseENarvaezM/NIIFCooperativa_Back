import { FormIngresosFancturacion } from "../../domain/models/FormIngresosFancturacionModel";

export interface IngFactGatewayIntPort {
    listIngresosFacturacion(): Promise<FormIngresosFancturacion[]>;
    getIDIngresosFacturacion(id: string): Promise<FormIngresosFancturacion>;
    createIngresosFacturacion(ingresosFacturacion: FormIngresosFancturacion): Promise<FormIngresosFancturacion>;
    updateIngresosFacturacion(id: string, ingresosFacturacion: FormIngresosFancturacion): Promise<FormIngresosFancturacion>;
}