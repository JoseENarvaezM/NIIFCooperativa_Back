import { FormActivosFijos } from "./FormActivosFijosModel";
import { FormCaratula } from "./FormCaratulaModel";
import { FormDetalleRenglones } from "./FormDetallerEnglonesModel";
import { FormEsfPatrimonio } from "./FormEsfPatrimonioModel";
import { FormImpuestoDiferido } from "./FormImpuestoDiferidoModel";
import { FormIngresosFancturacion } from "./FormIngresosFancturacionModel";
import { FormR110 } from "./FormR110Model";
import { FormRentaLiquida } from "./FormRentaLiquidaModel";
import { FormResumenEsferi } from "./FormResumenEsferiModel";
import { Room } from "./RoomModel";
import { Student } from "./StudentModel";


export class Report {
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

    public formactivosfijos?: FormActivosFijos,
    public formcaratula?: FormCaratula,
    public formdetallerenglones?: FormDetalleRenglones,
    public formesfpatrimonio?: FormEsfPatrimonio,
    public formimpuestodiferido?: FormImpuestoDiferido,
    public formingresosfancturacion?: FormIngresosFancturacion,
    public formr110?: FormR110,
    public formrentaliquida?: FormRentaLiquida,
    public formresumenesferi?: FormResumenEsferi,
    public room?: Room,
    public student?: Student
  ) {}
}