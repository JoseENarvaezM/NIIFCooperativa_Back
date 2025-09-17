import { FormEsfPatrimonio } from "../models/FormEsfPatrimonioModel";
import { FormsUCIntPort } from "../../application/input/FormsUCIntPort";
import { FormsGatewayIntPort } from "../../application/output/FormsGatewayIntPort";
import { ErrorFormatterIntPort } from "../../application/output/ErrorFormaterIntPort";

export class EsfPatrimonioUCAdapter implements FormsUCIntPort<FormEsfPatrimonio> {
    constructor(
        private esfPatrimonioGateway: FormsGatewayIntPort<FormEsfPatrimonio>,
        private errorFormatter: ErrorFormatterIntPort
    ) {}

    async getIDForm(stuID: string, roomID: string): Promise<FormEsfPatrimonio | null> {
        const formEsfPatrimonio = await this.esfPatrimonioGateway.getIDForm(stuID, roomID);
        if (!formEsfPatrimonio) {
            this.errorFormatter.errorNotFound(`Formulario con stuID ${stuID} y roomID ${roomID} no se encontró.`);
        }

        const formEsfPatrimonioCalculated = this.esfPatrimonioGateway.calculateReference(stuID, roomID);

        return formEsfPatrimonioCalculated || formEsfPatrimonio;
    }
    async updateForm(stuID: string, roomID: string, esfPatrimonio: FormEsfPatrimonio): Promise<FormEsfPatrimonio> {
        return this.esfPatrimonioGateway.updateForm(stuID, roomID, esfPatrimonio);
    }
}