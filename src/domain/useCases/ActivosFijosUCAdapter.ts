import { FormsUCIntPort } from "../../application/input/FormsUCIntPort";
import { FormsGatewayIntPort } from "../../application/output/FormsGatewayIntPort";
import { FormActivosFijos } from "../models/FormActivosFijosModel";
import { ErrorFormatterIntPort } from "../../application/output/ErrorFormaterIntPort";

export class ActivosFijosUCAdapter implements FormsUCIntPort <FormActivosFijos> {
    constructor(
        private activosFijosGateway: FormsGatewayIntPort<FormActivosFijos>,
        private errorFormatter: ErrorFormatterIntPort
    ) {}
    async listForms(): Promise<FormActivosFijos[]> {
        return this.activosFijosGateway.listForms();
    }
    async getIDForm(id: string): Promise<FormActivosFijos | null> {
        const formAF = await this.activosFijosGateway.getIDForm(id);
        if (!formAF) {
            this.errorFormatter.errorNotFound(`Form with ID ${id} not found`);
        }
        return formAF;
    }
    async createForm(activo: FormActivosFijos): Promise<FormActivosFijos> {
        return this.activosFijosGateway.createForm(activo);
    }
    async updateForm(id: string, activo: FormActivosFijos): Promise<FormActivosFijos> {
        return this.activosFijosGateway.updateForm(id, activo);
    }
}