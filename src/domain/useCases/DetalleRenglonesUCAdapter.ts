import { FormDetalleRenglones } from "../models/FormDetallerEnglonesModel";
import { DetalleRenglonesUCIntPort } from "../../application/input/DetalleRenglonesUCIntPort";
import { DetalleRenglonesGatewayIntPort } from "../../application/output/DetalleRenglonesGatewayIntPort";

export class DetalleRenglonesUCAdapter implements DetalleRenglonesUCIntPort {
    constructor(
        private detalleRenglonesGateway: DetalleRenglonesGatewayIntPort
    ) {}

    listDetalleRenglones(): Promise<FormDetalleRenglones[]> {
        return this.detalleRenglonesGateway.listDetalleRenglones();
    }

    getIDDetalleRenglones(id: string): Promise<FormDetalleRenglones> {
        return this.detalleRenglonesGateway.getIDDetalleRenglones(id);
    }

    createDetalleRenglones(detalleRenglones: FormDetalleRenglones): Promise<FormDetalleRenglones> {
        return this.detalleRenglonesGateway.createDetalleRenglones(detalleRenglones);
    }

    updateDetalleRenglones(id: string, detalleRenglones: FormDetalleRenglones): Promise<FormDetalleRenglones> {
        if (this.getIDDetalleRenglones(id) != null) {
            return this.detalleRenglonesGateway.updateDetalleRenglones(id, detalleRenglones);
        }
        throw new Error(`Detalle Renglones with id ${id} does not exist.`);
    }
}