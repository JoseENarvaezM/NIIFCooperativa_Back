import { FormDetalleRenglones } from "../../domain/models/FormDetallerEnglonesModel";

export interface DetalleRenglonesGatewayIntPort {
    listDetalleRenglones(): Promise<FormDetalleRenglones[]>;
    getIDDetalleRenglones(id: string): Promise<FormDetalleRenglones>;
    createDetalleRenglones(detalleRenglones: FormDetalleRenglones): Promise<FormDetalleRenglones>;
    updateDetalleRenglones(id: string, detalleRenglones: FormDetalleRenglones): Promise<FormDetalleRenglones>;
}