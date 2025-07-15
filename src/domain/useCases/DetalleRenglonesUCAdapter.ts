import { FormDetalleRenglones } from "../models/FormDetallerEnglonesModel";
import { FormsUCIntPort } from "../../application/input/FormsUCIntPort";
import { FormsGatewayIntPort } from "../../application/output/FormsGatewayIntPort";
import { ErrorFormatterIntPort } from "../../application/output/ErrorFormaterIntPort";

export class DetalleRenglonesUCAdapter implements FormsUCIntPort<FormDetalleRenglones> {
    constructor(
        private detalleRenglonesGateway: FormsGatewayIntPort<FormDetalleRenglones>,
        private errorFormatter: ErrorFormatterIntPort
    ) {}

    async listForms(): Promise<FormDetalleRenglones[]> {
        return this.detalleRenglonesGateway.listForms();
    }
    async getIDForm(id: string): Promise<FormDetalleRenglones | null> {
        const formDetalleRenglones = await this.detalleRenglonesGateway.getIDForm(id);
        if (!formDetalleRenglones) {
            this.errorFormatter.errorNotFound(`Form with ID ${id} not found`);
        }
        return formDetalleRenglones;
    }
    async createForm(detalleRenglones: FormDetalleRenglones): Promise<FormDetalleRenglones> {
        return this.detalleRenglonesGateway.createForm(detalleRenglones);
    }
    async updateForm(id: string, detalleRenglones: FormDetalleRenglones): Promise<FormDetalleRenglones> {
        return this.detalleRenglonesGateway.updateForm(id, detalleRenglones);
    }
}