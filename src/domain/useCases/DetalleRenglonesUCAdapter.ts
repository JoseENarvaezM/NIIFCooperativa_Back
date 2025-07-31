import { FormDetalleRenglones } from "../models/FormDetallerEnglonesModel";
import { FormsUCIntPort } from "../../application/input/FormsUCIntPort";
import { FormsGatewayIntPort } from "../../application/output/FormsGatewayIntPort";
import { ErrorFormatterIntPort } from "../../application/output/ErrorFormaterIntPort";

export class DetalleRenglonesUCAdapter implements FormsUCIntPort<FormDetalleRenglones> {
    constructor(
        private detalleRenglonesGateway: FormsGatewayIntPort<FormDetalleRenglones>,
        private errorFormatter: ErrorFormatterIntPort
    ) {}

    async getIDForm(stuID: string, roomID: string): Promise<FormDetalleRenglones | null> {
        const formDetalleRenglones = await this.detalleRenglonesGateway.getIDForm(stuID, roomID);
        if (!formDetalleRenglones) {
            this.errorFormatter.errorNotFound(`Formulario con stuID ${stuID} y roomID ${roomID} no se encontró.`);
        }
        return formDetalleRenglones;
    }
    async updateForm(stuID: string, roomID: string, detalleRenglones: FormDetalleRenglones): Promise<FormDetalleRenglones> {
        return this.detalleRenglonesGateway.updateForm(stuID, roomID, detalleRenglones);
    }
}