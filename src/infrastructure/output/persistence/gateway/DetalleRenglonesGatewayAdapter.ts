import prisma from "../../../../config/database";
import { FormDetalleRenglones } from "../../../../domain/models/FormDetallerEnglonesModel";
import { FormsGatewayIntPort } from "../../../../application/output/FormsGatewayIntPort";

export class DetalleRenglonesGatewayAdapter implements FormsGatewayIntPort<FormDetalleRenglones> {

    async getIDForm(stuID: string, roomID: string): Promise<FormDetalleRenglones | null> {
        const report = await prisma.report.findFirst({
            where: { stuID: stuID, roomID: roomID }
        });
        const detalleRenglones = await prisma.formdetallerenglones.findUnique({
            where: { detID: report?.detID }
        });
        return detalleRenglones;
    }

    async createForm(detalleRenglones: FormDetalleRenglones): Promise<FormDetalleRenglones> {
        return prisma.formdetallerenglones.create({
            data: {
                detContent: { ...detalleRenglones.detContent },
            }
        });
    }

    async updateForm(stuID: string, roomID: string, detalleRenglones: FormDetalleRenglones): Promise<FormDetalleRenglones> {
        const report = await prisma.report.findFirst({
            where: { stuID: stuID, roomID: roomID }
        });
        return prisma.formdetallerenglones.update({
            where: { detID: report?.detID },
            data: {
                detContent: { ...detalleRenglones },
            }
        });
    }
    async calculateReference(stuID: string, roomID: string): Promise<FormDetalleRenglones | null> {
        const report = await prisma.report.findFirst({
            where: { stuID: stuID, roomID: roomID }
        });
        const activosFijos = await prisma.formactivosfijos.findUnique({
            where: { actID: report?.actID }
        });
        const impuestoDiferido = await prisma.formimpuestodiferido.findUnique({
            where: { impID: report?.impID }
        });
        const detalleRenglones = await prisma.formdetallerenglones.findUnique({
            where: { detID: report?.detID }
        });
        const ingresoyFac = await prisma.formingresosfancturacion.findUnique({
            where: { ingID: report?.ingID }
        });

        if (
            detalleRenglones &&
            typeof detalleRenglones.detContent === 'object' &&
            detalleRenglones.detContent !== null 
            
        ) {
            const detContent = detalleRenglones?.detContent as any;
            const actFijosContent = activosFijos?.actContent as any;
            const impDiferidoContent = impuestoDiferido?.impContent as any;
            const ingresoyfacContent = ingresoyFac?.ingContent as any;
            //Calculos 
            detContent.Renglon40["1510MarcasPatentesYLicencias"].REFSaldCont = 
                actFijosContent.ActivosIntangibles.MarcasComerciales.DatosContables.ImporteAlComienzoDelPeriodo.Costo + 
                actFijosContent.ActivosIntangibles.MarcasComerciales.DatosContables.Incrementos.TransferenciasAdquisiciones - 
                actFijosContent.ActivosIntangibles.MarcasComerciales.DatosContables.Disminuciones.TransferenciasEliminaciones;

            detContent.Renglon40["1510MarcasPatentesYLicencias"].REFSaldFisc =
                actFijosContent.ActivosIntangibles.MarcasComerciales.DatosFiscales.ValorTotalIncluyendoArrendamientoFinancieroOLeasingFinanciero.SaldoAlComienzoDelPeriodo +
                actFijosContent.ActivosIntangibles.MarcasComerciales.DatosFiscales.ValorTotalIncluyendoArrendamientoFinancieroOLeasingFinanciero.IncrementosPorTransferenciasAdquisicionesYOtrosCambios -
                actFijosContent.ActivosIntangibles.MarcasComerciales.DatosFiscales.ValorTotalIncluyendoArrendamientoFinancieroOLeasingFinanciero.DisminucionesPorTransferenciasYOtrosCambios;
            
            detContent.Renglon42["1779PropiedadesDeInversionTerrenos"].ValorDelCosto.SaldosContablesADiciembre31Parciales =
                actFijosContent.PropiedadesDeInversión.Terrenos.DatosContables.ImporteAlComienzoDelPeriodo.Costo + 
                actFijosContent.PropiedadesDeInversión.Terrenos.DatosContables.Incrementos.TransferenciasAdquisiciones - 
                actFijosContent.PropiedadesDeInversión.Terrenos.DatosContables.Disminuciones.TransferenciasEliminaciones;
            
            detContent.Renglon42["1779PropiedadesDeInversionTerrenos"].Revaluaciones.SaldosContablesADiciembre31Parciales =
                actFijosContent.PropiedadesDeInversión.Terrenos.DatosContables.ImporteAlComienzoDelPeriodo.AjustePorRevaluacionesOReExpresiones +
                actFijosContent.PropiedadesDeInversión.Terrenos.DatosContables.Incrementos.CambiosEnValorRazonable -
                actFijosContent.PropiedadesDeInversión.Terrenos.DatosContables.Disminuciones.CambiosEnValorRazonable;
        
            detContent.Renglon42["1780PropiedadesDeInversionEdificaciones"].ValorDelCosto.SaldosContablesADiciembre31Parciales =
                actFijosContent.PropiedadesDeInversión.Edificios.DatosContables.ImporteAlComienzoDelPeriodo.Costo +
                actFijosContent.PropiedadesDeInversión.Edificios.DatosContables.Incrementos.TransferenciasAdquisiciones -
                actFijosContent.PropiedadesDeInversión.Edificios.DatosContables.Disminuciones.TransferenciasEliminaciones;

            //posible cambio    
            detContent.Renglon42["1780PropiedadesDeInversionEdificaciones"].Revaluaciones.SaldosContablesADiciembre31Parciales =
                actFijosContent.PropiedadesDeInversión.Edificios.DatosContables.ImporteAlComienzoDelPeriodo.AjustePorRevaluacionesOReExpresiones +
                actFijosContent.PropiedadesDeInversión.Edificios.DatosContables.Incrementos.CambiosEnValorRazonable -
                actFijosContent.PropiedadesDeInversión.Edificios.DatosContables.Disminuciones.CambiosEnValorRazonable;

            detContent.Renglon42["1788PropDeInversiDepreciacionAcumulada"].DelCosto.SaldosContablesADiciembre31Parciales =
                actFijosContent.PropiedadesDeInversión.Terrenos.DatosContables.Depreciacion.PorCosto +
                actFijosContent.PropiedadesDeInversión.Edificios.DatosContables.Depreciacion.PorCosto;

            detContent.Renglon42["1788PropDeInversiDepreciacionAcumulada"].DeLasRevaluaciones.SaldosContablesADiciembre31Parciales =
                actFijosContent.PropiedadesDeInversión.Terrenos.DatosContables.Depreciacion.AjustePorRevaluacionesOReExpresiones +
                actFijosContent.PropiedadesDeInversión.Edificios.DatosContables.Depreciacion.AjustePorRevaluacionesOReExpresiones;

            detContent.Renglon42["1789PropieDeInversDeterioAcumulado"].REFSaldCont =
                actFijosContent.PropiedadesDeInversión.Terrenos.DatosContables.DeterioroAcumuladoAlFinalDelPeriodo +
                actFijosContent.PropiedadesDeInversión.Edificios.DatosContables.DeterioroAcumuladoAlFinalDelPeriodo;
            
            detContent.Renglon42["1790ActivosNoCorrientesMantenidosParaLaVenta"].ValorDelCosto.REFSaldCont =
                actFijosContent.ANCMV.DatosContables.ImporteAlComienzoDelPeriodo.Costo +
                actFijosContent.ANCMV.DatosContables.Incrementos.TransferenciasAdquisiciones -
                actFijosContent.ANCMV.DatosContables.Disminuciones.TransferenciasEliminaciones;

            detContent.Renglon42["1790ActivosNoCorrientesMantenidosParaLaVenta"].MenosDepreciacionesAcumuladas.REFSaldCont =
                actFijosContent.ANCMV.DatosContables.Depreciacion.PorCosto +
                actFijosContent.ANCMV.DatosContables.Depreciacion.EfectoDeConversion +
                actFijosContent.ANCMV.DatosContables.Depreciacion.AjustePorRevaluacionesOReExpresiones;

            detContent.Renglon42["1790ActivosNoCorrientesMantenidosParaLaVenta"].MenosDeteroros.SaldosContablesADiciembre31Parciales =
                actFijosContent.ANCMV.DatosContables.DeterioroAcumuladoAlFinalDelPeriodo;

            detContent.Renglon42["1790ActivosNoCorrientesMantenidosParaLaVenta"].ValorDelCosto.REFSaldFisc =
                actFijosContent.ANCMV.DatosFiscales.ValorTotalIncluyendoArrendamientoFinancieroOLeasingFinanciero.SubtotalAlFinalPeriodo;

            detContent.Renglon42["1790ActivosNoCorrientesMantenidosParaLaVenta"].MenosDepreciacionesAcumuladas.REFSaldFisc =
                actFijosContent.ANCMV.DatosFiscales.ValorTotalIncluyendoArrendamientoFinancieroOLeasingFinanciero.DepreciacionYAmortizacionAcumuladaAlFinalDelPeriodo;

            detContent.Renglon43["1860ActivoPorImpuestoDiferido"].REFSaldCont =
                impDiferidoContent.ImpuestosDiferidosProvenientesDeDiferenciasTemporarias.ActivoDiferidoDiferenciasTemporariasDeducibles.ValorTotal.SaldoImpuestoDiferidoActual;

            detContent.Renglon45["2816PasivoPorIngresoDiferido"].SaldosContablesADiciembre31Parciales =
                ingresoyfacContent.Total.PasivoPorIngresoDiferido.SaldoAlFinalDelPeriodo;
            
            detContent.Renglon45["2826PasivoPorImpuestoDiferido"].SaldosContablesADiciembre31Parciales =
                impDiferidoContent.ImpuestosDiferidosProvenientesDeDiferenciasTemporarias.PasivoDiferidoDiferenciasTemporariasImponibles.ValorTotal.SaldoImpuestoDiferidoActual;
        }

        return null;
    }
}