import { FormsUCIntPort } from "../../application/input/FormsUCIntPort";
import { FormsGatewayIntPort } from "../../application/output/FormsGatewayIntPort";
import { FormActivosFijos } from "../models/FormActivosFijosModel";

export class ActivosFijosUCAdapter implements FormsUCIntPort <FormActivosFijos> {
    constructor(
        private activosFijosGateway: FormsGatewayIntPort<FormActivosFijos>
    ) {}
    async listForms(): Promise<FormActivosFijos[]> {
        return this.activosFijosGateway.listForms();
    }
    async getIDForm(id: string): Promise<FormActivosFijos | null> {
        return this.activosFijosGateway.getIDForm(id);
    }
    async createForm(activo: FormActivosFijos): Promise<FormActivosFijos> {
        return this.activosFijosGateway.createForm(activo);
    }
    async updateForm(id: string, activo: FormActivosFijos): Promise<FormActivosFijos> {
        return this.activosFijosGateway.updateForm(id, activo);
    }
}