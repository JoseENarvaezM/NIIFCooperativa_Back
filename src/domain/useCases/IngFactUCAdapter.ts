import { FormIngresosFancturacion } from "../models/FormIngresosFancturacionModel";
import { FormsUCIntPort } from "../../application/input/FormsUCIntPort";
import { FormsGatewayIntPort } from "../../application/output/FormsGatewayIntPort";
import { ErrorFormatterIntPort } from "../../application/output/ErrorFormaterIntPort";

export class IngFactUCAdapter implements FormsUCIntPort<FormIngresosFancturacion> {
    constructor(
        private ingFactGateway: FormsGatewayIntPort<FormIngresosFancturacion>,
        private errorFormatter: ErrorFormatterIntPort
    ) {}
    async getIDForm(stuID: string, roomID: string): Promise<FormIngresosFancturacion | null> {
        const formIngresos = await this.ingFactGateway.getIDForm(stuID, roomID);
        if (!formIngresos) {
            this.errorFormatter.errorNotFound(`Formulario con stuID ${stuID} y roomID ${roomID} no se encontró.`);
        }
        return formIngresos;
    }
    async updateForm(stuID: string, roomID: string, ingFact: FormIngresosFancturacion): Promise<FormIngresosFancturacion> {
        return this.ingFactGateway.updateForm(stuID, roomID, ingFact);
    }
}