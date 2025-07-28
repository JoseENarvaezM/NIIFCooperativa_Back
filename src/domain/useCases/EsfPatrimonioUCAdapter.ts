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
            this.errorFormatter.errorNotFound(`Form with stuID ${stuID} and roomID ${roomID} not found`);
        }
        return formEsfPatrimonio;
    }
    async updateForm(stuID: string, roomID: string, esfPatrimonio: FormEsfPatrimonio): Promise<FormEsfPatrimonio> {
        return this.esfPatrimonioGateway.updateForm(stuID, roomID, esfPatrimonio);
    }
}