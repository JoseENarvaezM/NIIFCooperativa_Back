import { FormDetalleRenglones } from "../models/FormDetallerEnglonesModel";
import { FormsUCIntPort } from "../../application/input/FormsUCIntPort";
import { FormsGatewayIntPort } from "../../application/output/FormsGatewayIntPort";

export class DetalleRenglonesUCAdapter implements FormsUCIntPort<FormDetalleRenglones> {
    constructor(
        private detalleRenglonesGateway: FormsGatewayIntPort<FormDetalleRenglones>
    ) {}

    async listForms(): Promise<FormDetalleRenglones[]> {
        return this.detalleRenglonesGateway.listForms();
    }
    async getIDForm(id: string): Promise<FormDetalleRenglones | null> {
        return this.detalleRenglonesGateway.getIDForm(id);
    }
    async createForm(detalleRenglones: FormDetalleRenglones): Promise<FormDetalleRenglones> {
        return this.detalleRenglonesGateway.createForm(detalleRenglones);
    }
    async updateForm(id: string, detalleRenglones: FormDetalleRenglones): Promise<FormDetalleRenglones> {
        return this.detalleRenglonesGateway.updateForm(id, detalleRenglones);
    }
}