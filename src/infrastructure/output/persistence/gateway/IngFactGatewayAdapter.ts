import prisma from "../../../../config/database";
import { FormIngresosFancturacion } from "../../../../domain/models/FormIngresosFancturacionModel";
import { FormsGatewayIntPort } from "../../../../application/output/FormsGatewayIntPort";

export class IngFactGatewayAdapter implements FormsGatewayIntPort<FormIngresosFancturacion> {

    async getIDForm(stuID: string, roomID: string): Promise<FormIngresosFancturacion | null> {
        const report = await prisma.report.findFirst({
            where: { stuID: stuID, roomID: roomID }
        });
        const ingFact = await prisma.formingresosfancturacion.findUnique({
            where: { ingID: report?.ingID }
        });
        return ingFact;
    }

    async createForm(ingFact: FormIngresosFancturacion): Promise<FormIngresosFancturacion> {
        return prisma.formingresosfancturacion.create({
            data: {
                ingContent: { ...ingFact.ingContent },
            }
        });
    }

    async updateForm(stuID: string, roomID: string, ingFact: FormIngresosFancturacion): Promise<FormIngresosFancturacion> {
        const report = await prisma.report.findFirst({
            where: { stuID: stuID, roomID: roomID }
        });
        return prisma.formingresosfancturacion.update({
            where: { ingID: report?.ingID },
            data: {
                ingContent: { ...ingFact },
            }
        });
    }
    async calculateReference(stuID: string, roomID: string): Promise<FormIngresosFancturacion | null> {
        const report = await prisma.report.findFirst({
                where: { stuID: stuID, roomID: roomID }
            });
            const ingFact = await prisma.formingresosfancturacion.findUnique({
                where: { ingID: report?.ingID }
            });
            const detalleRenglones = await prisma.formdetallerenglones.findUnique({
                where: { detID: report?.detID }
            });

            if (ingFact && ingFact.ingContent && detalleRenglones && detalleRenglones.detContent) {
                const ingContent = ingFact.ingContent as any;
                const detContent = detalleRenglones.detContent as any;
                
                ingContent.VentaDeBienes.FacturacionEmitidaEnElPeriodo.DevengadaComoIngresosDelPeriodo = 
                    detContent.Renglon47.VentaDeBienes.AClientesNacionalesPorFueraDeZonaFranca.SaldosContablesADiciembre31Parciales + 
                    detContent.Renglon47.VentaDeBienes.ExportacionesSinIncluirLasExportacionesATerritoriosOPaisesNoCooperantes.SaldosContablesADiciembre31Parciales+
                    detContent.Renglon47.VentaDeBienes.AClientesEnZonasFrancasQueNoSeanVinculadosEconomicos.SaldosContablesADiciembre31Parciales +
                    detContent.Renglon47.VentaDeBienes.ASociedadesDeComercializacionInternacional.SaldosContablesADiciembre31Parciales +
                    detContent.Renglon47.VentaDeBienes.AClientesEnJurisdiccionesNoCooperantesPeroQueNoSeanVinculadosEconomicos.SaldosContablesADiciembre31Parciales +
                    detContent.Renglon47.VentaDeBienes.AVinculadosEconomicosUbicadosEnZonaFrancaOUbicadosEnCualquierOtroPais.SaldosContablesADiciembre31Parciales;
                
                ingContent.PrestacionDeServicios.FacturacionEmitidaEnElPeriodo.DevengadaComoIngresosDelPeriodo =
                    detContent.Renglon47.ServiciosGeneralesSinIncluirHonorariosProfesionales.AClientesNacionalesPorFueraDeZonaFranca.SaldosContablesADiciembre31Parciales +
                    detContent.Renglon47.ServiciosGeneralesSinIncluirHonorariosProfesionales.ExportacionesSinIncluirLasExportacionesATerritoriosOPaisesNoCooperantes.SaldosContablesADiciembre31Parciales +
                    detContent.Renglon47.ServiciosGeneralesSinIncluirHonorariosProfesionales.AClientesEnZonasFrancasQueNoSeanVinculadosEconomicos.SaldosContablesADiciembre31Parciales +
                    detContent.Renglon47.ServiciosGeneralesSinIncluirHonorariosProfesionales.ASociedadesDeComercializacionInternacional.SaldosContablesADiciembre31Parciales +
                    detContent.Renglon47.ServiciosGeneralesSinIncluirHonorariosProfesionales.AClientesEnJurisdiccionesNoCooperantesPeroQueNoSeanVinculadosEconomicos.SaldosContablesADiciembre31Parciales +
                    detContent.Renglon47.ServiciosGeneralesSinIncluirHonorariosProfesionales.AVinculadosEconomicosUbicadosEnZonaFrancaOUbicadosEnCualquierOtroPais.SaldosContablesADiciembre31Parciales +
                    detContent.Renglon47.ServiciosDeConstruccion.SaldosContablesADiciembre31Parciales +
                    detContent.Renglon47.AcuerdosDeConcesionDeServicios.SaldosContablesADiciembre31Parciales +
                    detContent.Renglon47.ArrendamientosOperativos.SaldosContablesADiciembre31Parciales +
                    detContent.Renglon47.Regalias.SaldosContablesADiciembre31Parciales +
                    detContent.Renglon47.ComisionesRelacionesDeAgencia.SaldosContablesADiciembre31Parciales +
                    detContent.Renglon47.HonorariosProfesionales.SaldosContablesADiciembre31Parciales +
                    detContent.Renglon47.ActividadesDeSegurosYDeCapitalizacion.SaldosContablesADiciembre31Parciales
                    detContent.Renglon47.LiberacionDeReservasEnContratosDeSegunos.SaldosContablesADiciembre31Parciales +
                    detContent.Renglon47.ComisionesBancariasCostosDeTransaccionEntreOtros.SaldosContablesADiciembre31Parciales +
                    detContent.Renglon47.OtrosIngresos.SaldosContablesADiciembre31Parciales;
                }
            return ingFact;
    }

}