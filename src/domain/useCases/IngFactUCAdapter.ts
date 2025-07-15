import { FormIngresosFancturacion } from "../models/FormIngresosFancturacionModel";
import { FormsUCIntPort } from "../../application/input/FormsUCIntPort";
import { FormsGatewayIntPort } from "../../application/output/FormsGatewayIntPort";
import { ErrorFormatterIntPort } from "../../application/output/ErrorFormaterIntPort";

export class IngFactUCAdapter implements FormsUCIntPort<FormIngresosFancturacion> {
    constructor(
        private ingFactGateway: FormsGatewayIntPort<FormIngresosFancturacion>,
        private errorFormatter: ErrorFormatterIntPort
    ) {}

    async listForms(): Promise<FormIngresosFancturacion[]> {
        return this.ingFactGateway.listForms();
    }
    async getIDForm(id: string): Promise<FormIngresosFancturacion | null> {
        const formIngresos = await this.ingFactGateway.getIDForm(id);
        if (!formIngresos) {
            this.errorFormatter.errorNotFound(`Form with ID ${id} not found`);
        }
        return formIngresos;
    }
    async createForm(ingFact: FormIngresosFancturacion): Promise<FormIngresosFancturacion> {
        return this.ingFactGateway.createForm(ingFact);
    }
    async updateForm(id: string, ingFact: FormIngresosFancturacion): Promise<FormIngresosFancturacion> {
        return this.ingFactGateway.updateForm(id, ingFact);
    }
}