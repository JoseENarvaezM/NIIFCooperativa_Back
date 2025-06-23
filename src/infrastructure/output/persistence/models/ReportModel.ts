import { FormActivosFijosEntity } from "./FormActivosFijosModel";
import { FormCaratulaEntity } from "./FormCaratulaModel";
import { FormDetalleRenglonesEntity } from "./FormDetallerEnglonesModel";
import { FormEsfPatrimonioEntity } from "./FormEsfPatrimonioModel";
import { FormImpuestoDiferidoEntity } from "./FormImpuestoDiferidoModel";
import { FormIngresosFancturacionEntity } from "./FormIngresosFancturacionModel";
import { FormR110Entity } from "./FormR110Model";
import { FormRentaLiquidaEntity } from "./FormRentaLiquidaModel";
import { FormResumenEsferiEntity } from "./FormResumenEsferiModel";
import { RoomEntity } from "./RoomModel";
import { StudentEntity } from "./StudentModel";


export class ReportEntity {
  constructor(
    public repID: string,
    public stuID: string,
    public roomID: string,
    public carID: string,
    public detID: string,
    public esfID: string,
    public renID: string,
    public impID: string,
    public ingID: string,
    public actID: string,
    public resID: string,
    public r110ID: string,

    public formactivosfijos?: FormActivosFijosEntity,
    public formcaratula?: FormCaratulaEntity,
    public formdetallerenglones?: FormDetalleRenglonesEntity,
    public formesfpatrimonio?: FormEsfPatrimonioEntity,
    public formimpuestodiferido?: FormImpuestoDiferidoEntity,
    public formingresosfancturacion?: FormIngresosFancturacionEntity,
    public formr110?: FormR110Entity,
    public formrentaliquida?: FormRentaLiquidaEntity,
    public formresumenesferi?: FormResumenEsferiEntity,
    public room?: RoomEntity,
    public student?: StudentEntity
  ) {}
}