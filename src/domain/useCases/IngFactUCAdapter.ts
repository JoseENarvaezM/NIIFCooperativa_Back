import { FormIngresosFancturacion } from "../models/FormIngresosFancturacionModel";
import { FormsUCIntPort } from "../../application/input/FormsUCIntPort";
import { FormsGatewayIntPort } from "../../application/output/FormsGatewayIntPort";

export class IngFactUCAdapter implements FormsUCIntPort<FormIngresosFancturacion> {
    constructor(
        private ingFactGateway: FormsGatewayIntPort<FormIngresosFancturacion>
    ) {}

    async listForms(): Promise<FormIngresosFancturacion[]> {
        return this.ingFactGateway.listForms();
    }
    async getIDForm(id: string): Promise<FormIngresosFancturacion | null> {
        return this.ingFactGateway.getIDForm(id);
    }
    async createForm(ingFact: FormIngresosFancturacion): Promise<FormIngresosFancturacion> {
        return this.ingFactGateway.createForm(ingFact);
    }
    async updateForm(id: string, ingFact: FormIngresosFancturacion): Promise<FormIngresosFancturacion> {
        return this.ingFactGateway.updateForm(id, ingFact);
    }
}