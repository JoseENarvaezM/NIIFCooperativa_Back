import { FormDetalleRenglones } from "../../domain/models/FormDetallerEnglonesModel";

export interface DetalleRenglonesUCIntPort {
    listDetalleRenglones(): Promise<FormDetalleRenglones[]>;
    getIDDetalleRenglones(id: string): Promise<FormDetalleRenglones>;
    createDetalleRenglones(detalleRenglones: FormDetalleRenglones): Promise<FormDetalleRenglones>;
    updateDetalleRenglones(id: string, detalleRenglones: FormDetalleRenglones): Promise<FormDetalleRenglones>;
}