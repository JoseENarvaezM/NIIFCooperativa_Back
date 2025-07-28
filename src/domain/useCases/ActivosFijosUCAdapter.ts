import { FormsUCIntPort } from "../../application/input/FormsUCIntPort";
import { FormsGatewayIntPort } from "../../application/output/FormsGatewayIntPort";
import { FormActivosFijos } from "../models/FormActivosFijosModel";
import { ErrorFormatterIntPort } from "../../application/output/ErrorFormaterIntPort";

export class ActivosFijosUCAdapter implements FormsUCIntPort <FormActivosFijos> {
    constructor(
        private activosFijosGateway: FormsGatewayIntPort<FormActivosFijos>,
        private errorFormatter: ErrorFormatterIntPort
    ) {}
    async getIDForm(stuID: string, roomID: string): Promise<FormActivosFijos | null> {
        const formAF = await this.activosFijosGateway.getIDForm(stuID, roomID);
        if (!formAF) {
            this.errorFormatter.errorNotFound(`Form with stuID ${stuID} and roomID ${roomID} not found`);
        }
        return formAF;
    }
    async updateForm(stuID: string, roomID: string, activo: FormActivosFijos): Promise<FormActivosFijos> {
        return this.activosFijosGateway.updateForm(stuID, roomID, activo);
    }
}