import prisma from "../../../../config/database";
import { FormRentaLiquida } from "../../../../domain/models/FormRentaLiquidaModel";
import { FormsGatewayIntPort } from "../../../../application/output/FormsGatewayIntPort";

export class RentaLiquidaGatewayAdapter implements FormsGatewayIntPort<FormRentaLiquida> {

    async getIDForm(stuID: string, roomID: string): Promise<FormRentaLiquida | null> {
        const report = await prisma.report.findFirst({
            where: { stuID: stuID, roomID: roomID }
        });
        const rentaLiquida = await prisma.formrentaliquida.findUnique({
            where: { renID: report?.renID }
        });
        return rentaLiquida;
    }

    async createForm(rentaLiquida: FormRentaLiquida): Promise<FormRentaLiquida> {
        return prisma.formrentaliquida.create({
            data: {
                renContent: { ...rentaLiquida.renContent },
            }
        });
    }

    async updateForm(stuID: string, roomID: string, rentaLiquida: FormRentaLiquida): Promise<FormRentaLiquida> {
        const report = await prisma.report.findFirst({
            where: { stuID: stuID, roomID: roomID }
        });
        return prisma.formrentaliquida.update({
            where: { renID: report?.renID },
            data: {
                renContent: { ...rentaLiquida },
            }
        });
    }
    async calculateReference(stuID: string, roomID: string): Promise<FormRentaLiquida | null> {
        const report = await prisma.report.findFirst({
            where: { stuID: stuID, roomID: roomID }
        });
        const rentaLiquida = await prisma.formrentaliquida.findUnique({
            where: { renID: report?.renID }
        });
        const detalleRenglones = await prisma.formdetallerenglones.findUnique({
            where: { detID: report?.detID }
        });
        if (
            rentaLiquida &&
            typeof rentaLiquida.renContent === "object" &&
            rentaLiquida.renContent !== null 
        ) {
            const renContent = rentaLiquida?.renContent as any;
            const detContent = detalleRenglones?.detContent as any;

            // Ingresos - IngresosNetosActividadIndustrialComercialYServicios - IngresosNetosActividadIndustrialComercialYServicios - VentaDeBienesAlTerritorioNacional

            renContent.Ingresos.IngresosNetosActividadIndustrialComercialYServicios.IngresosNetosActividadIndustrialComercialYServicios.VentaDeBienesAlTerritorioNacional.ValorContable =
                detContent?.Renglon47?.VentaDeBienes?.AClientesNacionalesPorFueraDeZonaFranca?.SaldosContablesADiciembre31Parciales || 0;
            
            renContent.Ingresos.IngresosNetosActividadIndustrialComercialYServicios.IngresosNetosActividadIndustrialComercialYServicios.VentaDeBienesAlTerritorioNacional.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                detContent?.Renglon47?.VentaDeBienes?.AClientesNacionalesPorFueraDeZonaFranca?.AjustesParaLlegarASaldosFiscales1 || 0;

            renContent.Ingresos.IngresosNetosActividadIndustrialComercialYServicios.IngresosNetosActividadIndustrialComercialYServicios.VentaDeBienesAlTerritorioNacional.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                detContent?.Renglon47?.VentaDeBienes?.AClientesNacionalesPorFueraDeZonaFranca?.AjustesParaLlegarASaldosFiscales3 || 0;

            // Ingresos - IngresosNetosActividadIndustrialComercialYServicios - IngresosNetosActividadIndustrialComercialYServicios - VentaDeBienesAOtrosPaises

            renContent.Ingresos.IngresosNetosActividadIndustrialComercialYServicios.IngresosNetosActividadIndustrialComercialYServicios.VentaDeBienesAOtrosPaises.ValorContable =
                detContent?.Renglon47?.VentaDeBienes?.ExportacionesSinIncluirLasExportacionesATerritoriosOPaisesNoCooperantes?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Ingresos.IngresosNetosActividadIndustrialComercialYServicios.IngresosNetosActividadIndustrialComercialYServicios.VentaDeBienesAOtrosPaises.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                detContent?.Renglon47?.VentaDeBienes?.ExportacionesSinIncluirLasExportacionesATerritoriosOPaisesNoCooperantes?.AjustesParaLlegarASaldosFiscales1 || 0;

            renContent.Ingresos.IngresosNetosActividadIndustrialComercialYServicios.IngresosNetosActividadIndustrialComercialYServicios.VentaDeBienesAOtrosPaises.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                detContent?.Renglon47?.VentaDeBienes?.ExportacionesSinIncluirLasExportacionesATerritoriosOPaisesNoCooperantes?.AjustesParaLlegarASaldosFiscales3 || 0;

            // Ingresos - IngresosNetosActividadIndustrialComercialYServicios - IngresosNetosActividadIndustrialComercialYServicios - VentaDeBienesZonaFranca

            renContent.Ingresos.IngresosNetosActividadIndustrialComercialYServicios.IngresosNetosActividadIndustrialComercialYServicios.VentaDeBienesZonaFranca.ValorContable =
                detContent?.Renglon47?.VentaDeBienes?.AClientesEnZonasFrancasQueNoSeanVinculadosEconomicos?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Ingresos.IngresosNetosActividadIndustrialComercialYServicios.IngresosNetosActividadIndustrialComercialYServicios.VentaDeBienesZonaFranca.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                detContent?.Renglon47?.VentaDeBienes?.AClientesEnZonasFrancasQueNoSeanVinculadosEconomicos?.AjustesParaLlegarASaldosFiscales1 || 0;

            renContent.Ingresos.IngresosNetosActividadIndustrialComercialYServicios.IngresosNetosActividadIndustrialComercialYServicios.VentaDeBienesZonaFranca.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                detContent?.Renglon47?.VentaDeBienes?.AClientesEnZonasFrancasQueNoSeanVinculadosEconomicos?.AjustesParaLlegarASaldosFiscales3 || 0;

            // Ingresos - IngresosNetosActividadIndustrialComercialYServicios - IngresosNetosActividadIndustrialComercialYServicios - VentaDeBienesComercializadorasInternacionales

            renContent.Ingresos.IngresosNetosActividadIndustrialComercialYServicios.IngresosNetosActividadIndustrialComercialYServicios.VentaDeBienesComercializadorasInternacionales.ValorContable =
                detContent?.Renglon47?.VentaDeBienes?.ASociedadesDeComercializacionInternacional?.SaldosContablesADiciembre31Parciales || 0;
                
            renContent.Ingresos.IngresosNetosActividadIndustrialComercialYServicios.IngresosNetosActividadIndustrialComercialYServicios.VentaDeBienesComercializadorasInternacionales.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                detContent?.Renglon47?.VentaDeBienes?.ASociedadesDeComercializacionInternacional?.AjustesParaLlegarASaldosFiscales1 || 0;

            renContent.Ingresos.IngresosNetosActividadIndustrialComercialYServicios.IngresosNetosActividadIndustrialComercialYServicios.VentaDeBienesComercializadorasInternacionales.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                detContent?.Renglon47?.VentaDeBienes?.ASociedadesDeComercializacionInternacional?.AjustesParaLlegarASaldosFiscales3 || 0;

            // Ingresos - IngresosNetosActividadIndustrialComercialYServicios - IngresosNetosActividadIndustrialComercialYServicios - VentaDeBienesJurisdiccionesNoCooperantesDeBajaONulaImposicionYRegiminesTributariosPreferenciales

            renContent.Ingresos.IngresosNetosActividadIndustrialComercialYServicios.IngresosNetosActividadIndustrialComercialYServicios.VentaDeBienesJurisdiccionesNoCooperantesDeBajaONulaImposicionYRegiminesTributariosPreferenciales.ValorContable =
                detContent?.Renglon47?.VentaDeBienes?.AClientesEnJurisdiccionesNoCooperantesPeroQueNoSeanVinculadosEconomicos?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Ingresos.IngresosNetosActividadIndustrialComercialYServicios.IngresosNetosActividadIndustrialComercialYServicios.VentaDeBienesJurisdiccionesNoCooperantesDeBajaONulaImposicionYRegiminesTributariosPreferenciales.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                detContent?.Renglon47?.VentaDeBienes?.AClientesEnJurisdiccionesNoCooperantesPeroQueNoSeanVinculadosEconomicos?.AjustesParaLlegarASaldosFiscales1 || 0;

            renContent.Ingresos.IngresosNetosActividadIndustrialComercialYServicios.IngresosNetosActividadIndustrialComercialYServicios.VentaDeBienesJurisdiccionesNoCooperantesDeBajaONulaImposicionYRegiminesTributariosPreferenciales.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                detContent?.Renglon47?.VentaDeBienes?.AClientesEnJurisdiccionesNoCooperantesPeroQueNoSeanVinculadosEconomicos?.AjustesParaLlegarASaldosFiscales3 || 0;

            // Ingresos - IngresosNetosActividadIndustrialComercialYServicios - IngresosNetosActividadIndustrialComercialYServicios - VentaDeBienesVinculadoEconomicosZonaFrancaYExterior

            renContent.Ingresos.IngresosNetosActividadIndustrialComercialYServicios.IngresosNetosActividadIndustrialComercialYServicios.VentaDeBienesVinculadoEconomicosZonaFrancaYExterior.ValorContable =
                detContent?.Renglon47?.VentaDeBienes?.AVinculadosEconomicosUbicadosEnZonaFrancaOUbicadosEnCualquierOtroPais?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Ingresos.IngresosNetosActividadIndustrialComercialYServicios.IngresosNetosActividadIndustrialComercialYServicios.VentaDeBienesVinculadoEconomicosZonaFrancaYExterior.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                detContent?.Renglon47?.VentaDeBienes?.AVinculadosEconomicosUbicadosEnZonaFrancaOUbicadosEnCualquierOtroPais?.AjustesParaLlegarASaldosFiscales1 || 0;

            renContent.Ingresos.IngresosNetosActividadIndustrialComercialYServicios.IngresosNetosActividadIndustrialComercialYServicios.VentaDeBienesVinculadoEconomicosZonaFrancaYExterior.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                detContent?.Renglon47?.VentaDeBienes?.AVinculadosEconomicosUbicadosEnZonaFrancaOUbicadosEnCualquierOtroPais?.AjustesParaLlegarASaldosFiscales3 || 0;

            // Ingresos - IngresosNetosActividadIndustrialComercialYServicios - IngresosNetosActividadIndustrialComercialYServicios - PrestacionDeServiciosAlTerritorioNacional

            renContent.Ingresos.IngresosNetosActividadIndustrialComercialYServicios.IngresosNetosActividadIndustrialComercialYServicios.PrestacionDeServiciosAlTerritorioNacional.ValorContable =
                detContent?.Renglon47?.ServiciosGeneralesSinIncluirHonorariosProfesionales?.AClientesNacionalesPorFueraDeZonaFranca?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Ingresos.IngresosNetosActividadIndustrialComercialYServicios.IngresosNetosActividadIndustrialComercialYServicios.PrestacionDeServiciosAlTerritorioNacional.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                detContent?.Renglon47?.ServiciosGeneralesSinIncluirHonorariosProfesionales?.AClientesNacionalesPorFueraDeZonaFranca?.AjustesParaLlegarASaldosFiscales1 || 0;

            renContent.Ingresos.IngresosNetosActividadIndustrialComercialYServicios.IngresosNetosActividadIndustrialComercialYServicios.PrestacionDeServiciosAlTerritorioNacional.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                detContent?.Renglon47?.ServiciosGeneralesSinIncluirHonorariosProfesionales?.AClientesNacionalesPorFueraDeZonaFranca?.AjustesParaLlegarASaldosFiscales3 || 0;

            // Ingresos - IngresosNetosActividadIndustrialComercialYServicios - IngresosNetosActividadIndustrialComercialYServicios - PrestacionDeServiciosExportacionAOtrosPaises
            
            renContent.Ingresos.IngresosNetosActividadIndustrialComercialYServicios.IngresosNetosActividadIndustrialComercialYServicios.PrestacionDeServiciosExportacionAOtrosPaises.ValorContable =
                detContent?.Renglon47?.ServiciosGeneralesSinIncluirHonorariosProfesionales?.ExportacionesSinIncluirLasExportacionesATerritoriosOPaisesNoCooperantes?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Ingresos.IngresosNetosActividadIndustrialComercialYServicios.IngresosNetosActividadIndustrialComercialYServicios.PrestacionDeServiciosExportacionAOtrosPaises.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                detContent?.Renglon47?.ServiciosGeneralesSinIncluirHonorariosProfesionales?.ExportacionesSinIncluirLasExportacionesATerritoriosOPaisesNoCooperantes?.AjustesParaLlegarASaldosFiscales1 || 0;

            renContent.Ingresos.IngresosNetosActividadIndustrialComercialYServicios.IngresosNetosActividadIndustrialComercialYServicios.PrestacionDeServiciosExportacionAOtrosPaises.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                detContent?.Renglon47?.ServiciosGeneralesSinIncluirHonorariosProfesionales?.ExportacionesSinIncluirLasExportacionesATerritoriosOPaisesNoCooperantes?.AjustesParaLlegarASaldosFiscales3 || 0;

            // Ingresos - IngresosNetosActividadIndustrialComercialYServicios - IngresosNetosActividadIndustrialComercialYServicios - PrestacionDeServiciosZonaFranca

            renContent.Ingresos.IngresosNetosActividadIndustrialComercialYServicios.IngresosNetosActividadIndustrialComercialYServicios.PrestacionDeServiciosZonaFranca.ValorContable =
                detContent?.Renglon47?.ServiciosGeneralesSinIncluirHonorariosProfesionales?.AClientesEnZonasFrancasQueNoSeanVinculadosEconomicos?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Ingresos.IngresosNetosActividadIndustrialComercialYServicios.IngresosNetosActividadIndustrialComercialYServicios.PrestacionDeServiciosZonaFranca.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                detContent?.Renglon47?.ServiciosGeneralesSinIncluirHonorariosProfesionales?.AClientesEnZonasFrancasQueNoSeanVinculadosEconomicos?.AjustesParaLlegarASaldosFiscales1 || 0;

            renContent.Ingresos.IngresosNetosActividadIndustrialComercialYServicios.IngresosNetosActividadIndustrialComercialYServicios.PrestacionDeServiciosZonaFranca.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                detContent?.Renglon47?.ServiciosGeneralesSinIncluirHonorariosProfesionales?.AClientesEnZonasFrancasQueNoSeanVinculadosEconomicos?.AjustesParaLlegarASaldosFiscales3 || 0;

            // Ingresos - IngresosNetosActividadIndustrialComercialYServicios - IngresosNetosActividadIndustrialComercialYServicios - PrestacionDeServiciosComercializadorasInternacionales

            renContent.Ingresos.IngresosNetosActividadIndustrialComercialYServicios.IngresosNetosActividadIndustrialComercialYServicios.PrestacionDeServiciosComercializadorasInternacionales.ValorContable =
                detContent?.Renglon47?.ServiciosGeneralesSinIncluirHonorariosProfesionales?.ASociedadesDeComercializacionInternacional?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Ingresos.IngresosNetosActividadIndustrialComercialYServicios.IngresosNetosActividadIndustrialComercialYServicios.PrestacionDeServiciosComercializadorasInternacionales.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                detContent?.Renglon47?.ServiciosGeneralesSinIncluirHonorariosProfesionales?.ASociedadesDeComercializacionInternacional?.AjustesParaLlegarASaldosFiscales1 || 0;

            renContent.Ingresos.IngresosNetosActividadIndustrialComercialYServicios.IngresosNetosActividadIndustrialComercialYServicios.PrestacionDeServiciosComercializadorasInternacionales.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                detContent?.Renglon47?.ServiciosGeneralesSinIncluirHonorariosProfesionales?.ASociedadesDeComercializacionInternacional?.AjustesParaLlegarASaldosFiscales3 || 0;

            // Ingresos - IngresosNetosActividadIndustrialComercialYServicios - IngresosNetosActividadIndustrialComercialYServicios - PrestacionDeServiciosJurisdiccionesNoCooperantesDeBajaONulaImposicionYRegiminesTributariosPreferenciales

            renContent.Ingresos.IngresosNetosActividadIndustrialComercialYServicios.IngresosNetosActividadIndustrialComercialYServicios.PrestacionDeServiciosJurisdiccionesNoCooperantesDeBajaONulaImposicionYRegiminesTributariosPreferenciales.ValorContable =
                detContent?.Renglon47?.ServiciosGeneralesSinIncluirHonorariosProfesionales?.AClientesEnJurisdiccionesNoCooperantesPeroQueNoSeanVinculadosEconomicos?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Ingresos.IngresosNetosActividadIndustrialComercialYServicios.IngresosNetosActividadIndustrialComercialYServicios.PrestacionDeServiciosJurisdiccionesNoCooperantesDeBajaONulaImposicionYRegiminesTributariosPreferenciales.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                detContent?.Renglon47?.ServiciosGeneralesSinIncluirHonorariosProfesionales?.AClientesEnJurisdiccionesNoCooperantesPeroQueNoSeanVinculadosEconomicos?.AjustesParaLlegarASaldosFiscales1 || 0;

            renContent.Ingresos.IngresosNetosActividadIndustrialComercialYServicios.IngresosNetosActividadIndustrialComercialYServicios.PrestacionDeServiciosJurisdiccionesNoCooperantesDeBajaONulaImposicionYRegiminesTributariosPreferenciales.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                detContent?.Renglon47?.ServiciosGeneralesSinIncluirHonorariosProfesionales?.AClientesEnJurisdiccionesNoCooperantesPeroQueNoSeanVinculadosEconomicos?.AjustesParaLlegarASaldosFiscales3 || 0;

            // Ingresos - IngresosNetosActividadIndustrialComercialYServicios - IngresosNetosActividadIndustrialComercialYServicios - PrestacionDeServiciosVinculadoEconomicosZonaFrancaYExterior

            renContent.Ingresos.IngresosNetosActividadIndustrialComercialYServicios.IngresosNetosActividadIndustrialComercialYServicios.PrestacionDeServiciosVinculadoEconomicosZonaFrancaYExterior.ValorContable =
                detContent?.Renglon47?.ServiciosGeneralesSinIncluirHonorariosProfesionales?.AVinculadosEconomicosUbicadosEnZonaFrancaOUbicadosEnCualquierOtroPais?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Ingresos.IngresosNetosActividadIndustrialComercialYServicios.IngresosNetosActividadIndustrialComercialYServicios.PrestacionDeServiciosVinculadoEconomicosZonaFrancaYExterior.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                detContent?.Renglon47?.ServiciosGeneralesSinIncluirHonorariosProfesionales?.AVinculadosEconomicosUbicadosEnZonaFrancaOUbicadosEnCualquierOtroPais?.AjustesParaLlegarASaldosFiscales1 || 0;

            renContent.Ingresos.IngresosNetosActividadIndustrialComercialYServicios.IngresosNetosActividadIndustrialComercialYServicios.PrestacionDeServiciosVinculadoEconomicosZonaFrancaYExterior.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                detContent?.Renglon47?.ServiciosGeneralesSinIncluirHonorariosProfesionales?.AVinculadosEconomicosUbicadosEnZonaFrancaOUbicadosEnCualquierOtroPais?.AjustesParaLlegarASaldosFiscales3 || 0;

            // Ingresos - IngresosNetosActividadIndustrialComercialYServicios - IngresosNetosActividadIndustrialComercialYServicios - ServiciosDeConstruccion

            renContent.Ingresos.IngresosNetosActividadIndustrialComercialYServicios.IngresosNetosActividadIndustrialComercialYServicios.ServiciosDeConstruccion.ValorContable =
                detContent?.Renglon47?.ServiciosDeConstruccion?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Ingresos.IngresosNetosActividadIndustrialComercialYServicios.IngresosNetosActividadIndustrialComercialYServicios.ServiciosDeConstruccion.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                detContent?.Renglon47?.ServiciosDeConstruccion?.AjustesParaLlegarASaldosFiscales1 || 0;

            renContent.Ingresos.IngresosNetosActividadIndustrialComercialYServicios.IngresosNetosActividadIndustrialComercialYServicios.ServiciosDeConstruccion.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                detContent?.Renglon47?.ServiciosDeConstruccion?.AjustesParaLlegarASaldosFiscales3 || 0;

            // Ingresos - IngresosNetosActividadIndustrialComercialYServicios - IngresosNetosActividadIndustrialComercialYServicios - AcuerdosDeConcesionDeServicios

            renContent.Ingresos.IngresosNetosActividadIndustrialComercialYServicios.IngresosNetosActividadIndustrialComercialYServicios.AcuerdosDeConcesionDeServicios.ValorContable =
                detContent?.Renglon47?.AcuerdosDeConcesionDeServicios?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Ingresos.IngresosNetosActividadIndustrialComercialYServicios.IngresosNetosActividadIndustrialComercialYServicios.AcuerdosDeConcesionDeServicios.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                detContent?.Renglon47?.AcuerdosDeConcesionDeServicios?.AjustesParaLlegarASaldosFiscales1 || 0;

            renContent.Ingresos.IngresosNetosActividadIndustrialComercialYServicios.IngresosNetosActividadIndustrialComercialYServicios.AcuerdosDeConcesionDeServicios.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                detContent?.Renglon47?.AcuerdosDeConcesionDeServicios?.AjustesParaLlegarASaldosFiscales3 || 0;

            // Ingresos - IngresosNetosActividadIndustrialComercialYServicios - IngresosNetosActividadIndustrialComercialYServicios - ArrendamientosOperativos

            renContent.Ingresos.IngresosNetosActividadIndustrialComercialYServicios.IngresosNetosActividadIndustrialComercialYServicios.ArrendamientosOperativos.ValorContable =
                detContent?.Renglon47?.ArrendamientosOperativos?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Ingresos.IngresosNetosActividadIndustrialComercialYServicios.IngresosNetosActividadIndustrialComercialYServicios.ArrendamientosOperativos.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                detContent?.Renglon47?.ArrendamientosOperativos?.AjustesParaLlegarASaldosFiscales1 || 0;

            renContent.Ingresos.IngresosNetosActividadIndustrialComercialYServicios.IngresosNetosActividadIndustrialComercialYServicios.ArrendamientosOperativos.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                detContent?.Renglon47?.ArrendamientosOperativos?.AjustesParaLlegarASaldosFiscales3 || 0;

            // Ingresos - IngresosNetosActividadIndustrialComercialYServicios - IngresosNetosActividadIndustrialComercialYServicios - Regalías

            renContent.Ingresos.IngresosNetosActividadIndustrialComercialYServicios.IngresosNetosActividadIndustrialComercialYServicios.Regalías.ValorContable =
                detContent?.Renglon47?.Regalias?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Ingresos.IngresosNetosActividadIndustrialComercialYServicios.IngresosNetosActividadIndustrialComercialYServicios.Regalías.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                detContent?.Renglon47?.Regalias?.AjustesParaLlegarASaldosFiscales1 || 0;

            renContent.Ingresos.IngresosNetosActividadIndustrialComercialYServicios.IngresosNetosActividadIndustrialComercialYServicios.Regalías.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                detContent?.Renglon47?.Regalias?.AjustesParaLlegarASaldosFiscales3 || 0;

            // Ingresos - IngresosNetosActividadIndustrialComercialYServicios - IngresosNetosActividadIndustrialComercialYServicios - ComisionesRelacionalesDeAgencia

            renContent.Ingresos.IngresosNetosActividadIndustrialComercialYServicios.IngresosNetosActividadIndustrialComercialYServicios.ComisionesRelacionesDeAgencia.ValorContable =
                detContent?.Renglon47?.ComisionesRelacionesDeAgencia?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Ingresos.IngresosNetosActividadIndustrialComercialYServicios.IngresosNetosActividadIndustrialComercialYServicios.ComisionesRelacionesDeAgencia.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                detContent?.Renglon47?.ComisionesRelacionesDeAgencia?.AjustesParaLlegarASaldosFiscales1 || 0;

            renContent.Ingresos.IngresosNetosActividadIndustrialComercialYServicios.IngresosNetosActividadIndustrialComercialYServicios.ComisionesRelacionesDeAgencia.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                detContent?.Renglon47?.ComisionesRelacionesDeAgencia?.AjustesParaLlegarASaldosFiscales3 || 0;

            // Ingresos - IngresosNetosActividadIndustrialComercialYServicios - IngresosNetosActividadIndustrialComercialYServicios - HonorariosProfesionales

            renContent.Ingresos.IngresosNetosActividadIndustrialComercialYServicios.IngresosNetosActividadIndustrialComercialYServicios.HonorariosProfesionales.ValorContable =
                detContent?.Renglon47?.HonorariosProfesionales?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Ingresos.IngresosNetosActividadIndustrialComercialYServicios.IngresosNetosActividadIndustrialComercialYServicios.HonorariosProfesionales.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                detContent?.Renglon47?.HonorariosProfesionales?.AjustesParaLlegarASaldosFiscales1 || 0;

            renContent.Ingresos.IngresosNetosActividadIndustrialComercialYServicios.IngresosNetosActividadIndustrialComercialYServicios.HonorariosProfesionales.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                detContent?.Renglon47?.HonorariosProfesionales?.AjustesParaLlegarASaldosFiscales3 || 0;

            // Ingresos - IngresosNetosActividadIndustrialComercialYServicios - IngresosNetosActividadIndustrialComercialYServicios - ActividadesDeSegurosYDeCapitalizacion

            renContent.Ingresos.IngresosNetosActividadIndustrialComercialYServicios.IngresosNetosActividadIndustrialComercialYServicios.ActividadesDeSegurosYDeCapitalizacion.ValorContable =
                detContent?.Renglon47?.ActividadesDeSegurosYDeCapitalizacion?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Ingresos.IngresosNetosActividadIndustrialComercialYServicios.IngresosNetosActividadIndustrialComercialYServicios.ActividadesDeSegurosYDeCapitalizacion.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                detContent?.Renglon47?.ActividadesDeSegurosYDeCapitalizacion?.AjustesParaLlegarASaldosFiscales1 || 0;

            renContent.Ingresos.IngresosNetosActividadIndustrialComercialYServicios.IngresosNetosActividadIndustrialComercialYServicios.ActividadesDeSegurosYDeCapitalizacion.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                detContent?.Renglon47?.ActividadesDeSegurosYDeCapitalizacion?.AjustesParaLlegarASaldosFiscales3 || 0;

            // Ingresos - IngresosNetosActividadIndustrialComercialYServicios - IngresosNetosActividadIndustrialComercialYServicios - LiberacionDeReservasEnContratosDeSeguros

            renContent.Ingresos.IngresosNetosActividadIndustrialComercialYServicios.IngresosNetosActividadIndustrialComercialYServicios.LiberacionDeReservasEnContratosDeSeguros.ValorContable =
                detContent?.Renglon47?.LiberacionDeReservasEnContratosDeSeguros?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Ingresos.IngresosNetosActividadIndustrialComercialYServicios.IngresosNetosActividadIndustrialComercialYServicios.LiberacionDeReservasEnContratosDeSeguros.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                detContent?.Renglon47?.LiberacionDeReservasEnContratosDeSeguros?.AjustesParaLlegarASaldosFiscales1 || 0;

            renContent.Ingresos.IngresosNetosActividadIndustrialComercialYServicios.IngresosNetosActividadIndustrialComercialYServicios.LiberacionDeReservasEnContratosDeSeguros.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                detContent?.Renglon47?.LiberacionDeReservasEnContratosDeSeguros?.AjustesParaLlegarASaldosFiscales3 || 0;

            // Ingresos - IngresosNetosActividadIndustrialComercialYServicios - IngresosNetosActividadIndustrialComercialYServicios - ComisionesBancariasCostosDeTransaccionEntroOtros

            renContent.Ingresos.IngresosNetosActividadIndustrialComercialYServicios.IngresosNetosActividadIndustrialComercialYServicios.ComisionesBancariasCostosDeTransaccionEntroOtros.ValorContable =
                detContent?.Renglon47?.ComisionesBancariasCostosDeTransaccionEntreOtros?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Ingresos.IngresosNetosActividadIndustrialComercialYServicios.IngresosNetosActividadIndustrialComercialYServicios.ComisionesBancariasCostosDeTransaccionEntreOtros.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                detContent?.Renglon47?.ComisionesBancariasCostosDeTransaccionEntreOtros?.AjustesParaLlegarASaldosFiscales1 || 0;

            renContent.Ingresos.IngresosNetosActividadIndustrialComercialYServicios.IngresosNetosActividadIndustrialComercialYServicios.ComisionesBancariasCostosDeTransaccionEntreOtros.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                detContent?.Renglon47?.ComisionesBancariasCostosDeTransaccionEntreOtros?.AjustesParaLlegarASaldosFiscales3 || 0;

            // Ingresos - IngresosNetosActividadIndustrialComercialYServicios - IngresosNetosActividadIndustrialComercialYServicios - OtrosIngresos

            renContent.Ingresos.IngresosNetosActividadIndustrialComercialYServicios.IngresosNetosActividadIndustrialComercialYServicios.OtrosIngresos.ValorContable =
                detContent?.Renglon47?.OtrosIngresos?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Ingresos.IngresosNetosActividadIndustrialComercialYServicios.IngresosNetosActividadIndustrialComercialYServicios.OtrosIngresos.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                detContent?.Renglon47?.OtrosIngresos?.AjustesParaLlegarASaldosFiscales1 || 0;

            renContent.Ingresos.IngresosNetosActividadIndustrialComercialYServicios.IngresosNetosActividadIndustrialComercialYServicios.OtrosIngresos.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                detContent?.Renglon47?.OtrosIngresos?.AjustesParaLlegarASaldosFiscales3 || 0;

            // Ingresos - IngresosNetosActividadIndustrialComercialYServicios - DevolucionesRebajasYDescuentos - EnVentaDeBienes

            renContent.Ingresos.IngresosNetosActividadIndustrialComercialYServicios.DevolucionesRebajasYDescuentos.EnVentaDeBienes.ValorContable =
                renContent?.Renglon59?.["4175DevolucionesYRebajasEnVentas"]?.EnVentaDeBienes?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Ingresos.IngresosNetosActividadIndustrialComercialYServicios.IngresosNetosActividadIndustrialComercialYServicios.PrestacionDeServiciosZonaFranca.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                detContent?.Renglon47?.ServiciosGeneralesSinIncluirHonorariosProfesionales?.AClientesEnZonasFrancasQueNoSeanVinculadosEconomicos?.AjustesParaLlegarASaldosFiscales1 || 0;

            renContent.Ingresos.IngresosNetosActividadIndustrialComercialYServicios.IngresosNetosActividadIndustrialComercialYServicios.PrestacionDeServiciosZonaFranca.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                detContent?.Renglon47?.ServiciosGeneralesSinIncluirHonorariosProfesionales?.AClientesEnZonasFrancasQueNoSeanVinculadosEconomicos?.AjustesParaLlegarASaldosFiscales3 || 0;

            // Ingresos - IngresosNetosActividadIndustrialComercialYServicios - DevolucionesRebajasYDescuentos - EnPrestacionDeServicios

            renContent.Ingresos.IngresosNetosActividadIndustrialComercialYServicios.DevolucionesRebajasYDescuentos.EnPrestacionDeServicios.ValorContable =
                renContent?.Renglon59?.["4175DevolucionesYRebajasEnVentas"]?.EnPrestacionDeServicios?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Ingresos.IngresosNetosActividadIndustrialComercialYServicios.DevolucionesRebajasYDescuentos.EnPrestacionDeServicios.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                detContent?.Renglon47?.ServiciosGeneralesSinIncluirHonorariosProfesionales?.AClientesEnZonasFrancasQueNoSeanVinculadosEconomicos?.AjustesParaLlegarASaldosFiscales1 || 0;

            renContent.Ingresos.IngresosNetosActividadIndustrialComercialYServicios.DevolucionesRebajasYDescuentos.EnPrestacionDeServicios.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                detContent?.Renglon47?.ServiciosGeneralesSinIncluirHonorariosProfesionales?.AClientesEnZonasFrancasQueNoSeanVinculadosEconomicos?.AjustesParaLlegarASaldosFiscales3 || 0;

            // Ingresos - IngresosNetosActividadIndustrialComercialYServicios - DevolucionesRebajasYDescuentos - OtrasDevolucionesRebajasYDescuentos

            renContent.Ingresos.IngresosNetosActividadIndustrialComercialYServicios.DevolucionesRebajasYDescuentos.OtrasDevolucionesRebajasYDescuentos.ValorContable =
                renContent?.Renglon59?.["4175DevolucionesYRebajasEnVentas"]?.OtrasDevolucionesRebajasYDescuentos?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Ingresos.IngresosNetosActividadIndustrialComercialYServicios.DevolucionesRebajasYDescuentos.OtrasDevolucionesRebajasYDescuentos.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                detContent?.Renglon47?.ServiciosGeneralesSinIncluirHonorariosProfesionales?.AClientesEnZonasFrancasQueNoSeanVinculadosEconomicos?.AjustesParaLlegarASaldosFiscales1 || 0;

            renContent.Ingresos.IngresosNetosActividadIndustrialComercialYServicios.DevolucionesRebajasYDescuentos.OtrasDevolucionesRebajasYDescuentos.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                detContent?.Renglon47?.ServiciosGeneralesSinIncluirHonorariosProfesionales?.AClientesEnZonasFrancasQueNoSeanVinculadosEconomicos?.AjustesParaLlegarASaldosFiscales3 || 0;

            // Ingresos - IngresosFinancieros - ArrendamientoFinancieroOMercantilLeasing

            renContent.Ingresos.IngresosFinancieros.ArrendamientoFinancieroOMercantilLeasing.ValorContable =
                renContent?.Renglon48?.["421005FinancierosIntereses"]?.ArrendamientoFinancieroOMercantilLeasing?.SaldosContablesADiciembre31Parciales || 0;
            
            renContent.Ingresos.IngresosFinancieros.ArrendamientoFinancieroOMercantilLeasing.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon48?.["421005FinancierosIntereses"]?.ArrendamientoFinancieroOMercantilLeasing?.AjustesParaLlegarASaldosFiscales1 || 0;

            renContent.Ingresos.IngresosFinancieros.ArrendamientoFinancieroOMercantilLeasing.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon48?.["421005FinancierosIntereses"]?.ArrendamientoFinancieroOMercantilLeasing?.AjustesParaLlegarASaldosFiscales1 || 0;

            // Ingresos - IngresosFinancieros - InteresesSectorFinanciero

            renContent.Ingresos.IngresosFinancieros.InteresesSectorFinanciero.ValorContable =
                renContent?.Renglon48?.["421005FinancierosIntereses"]?.InteresesSectorFinanciero?.SaldosContablesADiciembre31Parciales || 0;
            
            renContent.Ingresos.IngresosFinancieros.InteresesSectorFinanciero.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon48?.["421005FinancierosIntereses"]?.InteresesSectorFinanciero?.AjustesParaLlegarASaldosFiscales1 || 0;

            renContent.Ingresos.IngresosFinancieros.InteresesSectorFinanciero.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon48?.["421005FinancierosIntereses"]?.InteresesSectorFinanciero?.AjustesParaLlegarASaldosFiscales1 || 0;

            // Ingresos - IngresosFinancieros - InteresesPorPrestamosATercerosDistintosAlSectorFinanciero

            renContent.Ingresos.IngresosFinancieros.InteresesPorPrestamosATercerosDistintosAlSectorFinanciero.ValorContable =
                renContent?.Renglon48?.["421005FinancierosIntereses"]?.InteresesPorPrestamosATercerosDiferentesAlSectorFinanciero?.SaldosContablesADiciembre31Parciales || 0;
            
            renContent.Ingresos.IngresosFinancieros.InteresesPorPrestamosATercerosDistintosAlSectorFinanciero.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon48?.["421005FinancierosIntereses"]?.InteresesPorPrestamosATercerosDiferentesAlSectorFinanciero?.AjustesParaLlegarASaldosFiscales1 || 0;

            renContent.Ingresos.IngresosFinancieros.InteresesPorPrestamosATercerosDistintosAlSectorFinanciero.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon48?.["421005FinancierosIntereses"]?.InteresesPorPrestamosATercerosDiferentesAlSectorFinanciero?.AjustesParaLlegarASaldosFiscales1 || 0;

            // Ingresos - IngresosFinancieros - PorInstrumentosFinancierosMedidosACostoAmortizadoDistintoAPrestamos

            renContent.Ingresos.IngresosFinancieros.PorInstrumentosFinancierosMedidosACostoAmortizadoDistintoAPrestamos.ValorContable =
                renContent?.Renglon48?.["421005FinancierosIntereses"]?.PorInstrumentosFinancierosMedidosACostoAmortizadoDistintoAPrestamos?.SaldosContablesADiciembre31Parciales || 0;

            // Ingresos - IngresosFinancieros - InteresesImplicitosTransaccionesDeFinanciacion

            renContent.Ingresos.IngresosFinancieros.InteresesImplicitosTransaccionesDeFinanciacion.ValorContable =
                renContent?.Renglon48?.["421005FinancierosIntereses"]?.InteresesImplicitosTransaccionesDeFinanciacion?.SaldosContablesADiciembre31Parciales || 0;

            // Ingresos - IngresosFinancieros - DiferenciaEnCambio

            renContent.Ingresos.IngresosFinancieros.DiferenciaEnCambio.ValorContable =
                renContent?.Renglon48?.["421020DiferenciaEnCambio"]?.SaldosContablesADiciembre31Parciales || 0;
            
            renContent.Ingresos.IngresosFinancieros.DiferenciaEnCambio.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon48?.["421020DiferenciaEnCambio"]?.AjustesParaLlegarASaldosFiscales1 || 0;

            renContent.Ingresos.IngresosFinancieros.DiferenciaEnCambio.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon48?.["421020DiferenciaEnCambio"]?.AjustesParaLlegarASaldosFiscales1 || 0;

            // Ingresos - IngresosFinancieros - OtrosIngresosFinancieros

            renContent.Ingresos.IngresosFinancieros.OtrosIngresosFinancieros.ValorContable =
                renContent?.Renglon48?.["421021OtrosIngresosFinancieros"]?.SaldosContablesADiciembre31Parciales || 0;
            
            renContent.Ingresos.IngresosFinancieros.OtrosIngresosFinancieros.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon48?.["421021OtrosIngresosFinancieros"]?.AjustesParaLlegarASaldosFiscales1 || 0;

            // Ingresos - GananciasPorInversionesEnSubsidiariasAsociadasYONegociosConjuntos - GananciasPorElMetodoDeParticipacion

            renContent.Ingresos.GananciasPorInversionesEnSubsidiariasAsociadasYONegociosConjuntos.GananciasPorElMetodoDeParticipacion.ValorContable =
                renContent?.Renglon57?.["429501GananciasPorAplicacionMetodoDeParticipacion"]?.GananciasPorAplicacionMetodoDeParticipacion?.SaldosContablesADiciembre31Parciales || 0;

            // Ingresos - GananciasPorInversionesEnSubsidiariasAsociadasYONegociosConjuntos - GananciasCambiosEnElValorRazonable

            renContent.Ingresos.GananciasPorInversionesEnSubsidiariasAsociadasYONegociosConjuntos.GananciasCambiosEnElValorRazonable.ValorContable =
                renContent?.Renglon57?.["429501GananciasPorAplicacionMetodoDeParticipacion"]?.GananciasPorCambiosEnElValorRazonableDeActivos?.DeInversionesEnAsociadasSubsidiariasYNegociosConjuntos?.SaldosContablesADiciembre31Parciales || 0;

            // Ingresos - GananciasPorInversionesEnSubsidiariasAsociadasYONegociosConjuntos - DividendosYOParticipacionesNoConstitutivosDeRentaNiGananciaOcasionalIncluyeCapitalizacionesNoGravadas

            renContent.Ingresos.GananciasPorInversionesEnSubsidiariasAsociadasYONegociosConjuntos.DividendosYOParticipacionesNoConstitutivosDeRentaNiGananciaOcasionalIncluyeCapitalizacionesNoGravadas.ValorContable =
                renContent?.Renglon49?.TotalDividentosOParticipacionesGananciaOcasionalSaldosContablesADiciembre31 || 0;
            
            renContent.Ingresos.GananciasPorInversionesEnSubsidiariasAsociadasYONegociosConjuntos.DividendosYOParticipacionesNoConstitutivosDeRentaNiGananciaOcasionalIncluyeCapitalizacionesNoGravadas.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                (renContent?.Renglon49?.RecibidosDeSociedadNacionalDelRegimenOrdinarioQueSiLlevaACaboLasMegainversionesDelArt235?.AjustesParaLlegarASaldosFiscales1 || 0) + (renContent?.Renglon49?.RecibidosDeSociedadNacionalDelRegimenOrdinarioQueNoLlevaACaboLasMegainversionesDelArt235YQueNoEstaAcogidaAlRegimenDeSociedadesCHCDeLosArts894A898DelET?.AjustesParaLlegarASaldosFiscales1 || 0) + (renContent?.Renglon49?.RecibidosDeSociedadNacionalDelRegimenOrdinarioQueNoLlevaACaboLasMegainversionesDelArt235PeroQueSiEstaAcogidaAlRegimenDeSociedadesCHCDeLosArts894A898DelET?.AjustesParaLlegarASaldosFiscales1 || 0) + (renContent?.Renglon49?.RecibidosDeUnaSociedadNacionalDelRegimenSimple?.AjustesParaLlegarASaldosFiscales1 || 0);

            renContent.Ingresos.GananciasPorInversionesEnSubsidiariasAsociadasYONegociosConjuntos.DividendosYOParticipacionesNoConstitutivosDeRentaNiGananciaOcasionalIncluyeCapitalizacionesNoGravadas.MayorValorFiscalPorReconocimientoExencionesLimitaciones = (renContent?.Renglon49?.RecibidosDeSociedadNacionalDelRegimenOrdinarioQueSiLlevaACaboLasMegainversionesDelArt235?.AjustesParaLlegarASaldosFiscales3 || 0) + (renContent?.Renglon49?.RecibidosDeSociedadNacionalDelRegimenOrdinarioQueNoLlevaACaboLasMegainversionesDelArt235YQueNoEstaAcogidaAlRegimenDeSociedadesCHCDeLosArts894A898DelET?.AjustesParaLlegarASaldosFiscales3 || 0) + (renContent?.Renglon49?.RecibidosDeSociedadNacionalDelRegimenOrdinarioQueNoLlevaACaboLasMegainversionesDelArt235PeroQueSiEstaAcogidaAlRegimenDeSociedadesCHCDeLosArts894A898DelET?.AjustesParaLlegarASaldosFiscales3 || 0) + (renContent?.Renglon49?.RecibidosDeUnaSociedadNacionalDelRegimenSimple?.AjustesParaLlegarASaldosFiscales3 || 0);

            // Ingresos - GananciasPorInversionesEnSubsidiariasAsociadasYONegociosConjuntos - DividendosOParticipacionesDistribuidosPorEntidadesNoResidentesEnColombiaAUnaCHCYPrimaEnColocacionDeAcciones

            renContent.Ingresos.GananciasPorInversionesEnSubsidiariasAsociadasYONegociosConjuntos.DividendosOParticipacionesDistribuidosPorEntidadesNoResidentesEnColombiaAUnaCHCYPrimaEnColocacionDeAcciones.ValorContable =
                renContent?.Renglon50DividendosOParticipacionesDistribuidosPorEntidadesResidentesEnColombia?.TotalSaldosContablesADiciembre31Parciales || 0;

            // Ingresos - GananciasPorInversionesEnSubsidiariasAsociadasYONegociosConjuntos - DividendosYOParticipacionesNoConstitutivosDeRentaNiGananciaOcasionalIncluyeCapitalizacionesNoGravadas

            renContent.Ingresos.GananciasPorInversionesEnSubsidiariasAsociadasYONegociosConjuntos.DividendosYOParticipacionesGravadasALaTarifaGeneralProvenientesDeSeciedadesYEntidadesExtranjerasODeSociedadesNacionales.ValorContable =
                renContent?.Renglon51DividendosOParticipacionesGravadasAñoRecibidosPorSociedadesExtranjeras?.TotalSaldosContablesADiciembre31Parciales || 0;

            // Ingresos - GananciasPorInversionesEnSubsidiariasAsociadasYONegociosConjuntos - DividendosYOParticipacionesGravadasRecibidasPorPersonasNaturalesSinResidenciaFiscalAnio2016YAnteriores

            renContent.Ingresos.GananciasPorInversionesEnSubsidiariasAsociadasYONegociosConjuntos.DividendosYOParticipacionesGravadasRecibidasPorPersonasNaturalesSinResidenciaFiscalAnio2016YAnteriores.ValorContable =
                renContent?.Renglon52?.TotalDividendosYParticipacionesGravadasPorPersonasNaturalesSaldosContablesADiciembre3152 || 0;

            renContent.Ingresos.GananciasPorInversionesEnSubsidiariasAsociadasYONegociosConjuntos.DividendosYOParticipacionesGravadasRecibidasPorPersonasNaturalesSinResidenciaFiscalAnio2016YAnteriores.MenorValorFiscalPorReconocimientoExencionesLimitaciones = (renContent?.Renglon52?.RecibidosDeSociedadNacionalDelRegimenOrdinarioQueSiLlevaACaboLasMegainversionesDelArt235?.AjustesParaLlegarASaldosFiscales1 || 0) + (renContent?.Renglon52?.RecibidosDeSociedadNacionalDelRegimenOrdinarioQueNoLlevaACaboLasMegainversionesDelArt235YQueNoEstaAcogidaAlRegimenDeSociedadesCHCDeLosArts894A898DelET?.AjustesParaLlegarASaldosFiscales1 || 0) + (renContent?.Renglon52?.RecibidosDeSociedadNacionalDelRegimenOrdinarioQueNoLlevaACaboLasMegainversionesDelArt235PeroQueSiEstaAcogidaAlRegimenDeSociedadesCHCDeLosArts894A898DelET?.AjustesParaLlegarASaldosFiscales1 || 0) + (renContent?.Renglon52?.RecibidosDeUnaSociedadNacionalDelRegimenSimple?.AjustesParaLlegarASaldosFiscales1 || 0);

            renContent.Ingresos.GananciasPorInversionesEnSubsidiariasAsociadasYONegociosConjuntos.DividendosYOParticipacionesGravadasRecibidasPorPersonasNaturalesSinResidenciaFiscalAnio2016YAnteriores.MenorValorFiscalPorReconocimientoExencionesLimitaciones = (renContent?.Renglon52?.RecibidosDeSociedadNacionalDelRegimenOrdinarioQueSiLlevaACaboLasMegainversionesDelArt235?.AjustesParaLlegarASaldosFiscales3 || 0) + (renContent?.Renglon52?.RecibidosDeSociedadNacionalDelRegimenOrdinarioQueNoLlevaACaboLasMegainversionesDelArt235YQueNoEstaAcogidaAlRegimenDeSociedadesCHCDeLosArts894A898DelET?.AjustesParaLlegarASaldosFiscales3 || 0) + (renContent?.Renglon52?.RecibidosDeSociedadNacionalDelRegimenOrdinarioQueNoLlevaACaboLasMegainversionesDelArt235PeroQueSiEstaAcogidaAlRegimenDeSociedadesCHCDeLosArts894A898DelET?.AjustesParaLlegarASaldosFiscales3 || 0) + +(renContent?.Renglon52?.RecibidosDeUnaSociedadNacionalDelRegimenSimple?.AjustesParaLlegarASaldosFiscales3 || 0);

            // Ingresos - GananciasPorInversionesEnSubsidiariasAsociadasYONegociosConjuntos - DividendosYOParticipacionesGravadasRecibidasPorPersonasNaturalesSinResidenciaFiscalAnio2017YSiguientes

            renContent.Ingresos.GananciasPorInversionesEnSubsidiariasAsociadasYONegociosConjuntos.DividendosYOParticipacionesGravadasRecibidasPorPersonasNaturalesSinResidenciaFiscalAnio2017YSiguientes.ValorContable =
                renContent?.Renglon53?.Total53SaldosContablesADiciembre31 || 0;

            renContent.Ingresos.GananciasPorInversionesEnSubsidiariasAsociadasYONegociosConjuntos.DividendosYOParticipacionesGravadasRecibidasPorPersonasNaturalesSinResidenciaFiscalAnio2017YSiguientes.MenorValorFiscalPorReconocimientoExencionesLimitaciones = (renContent?.Renglon53?.RecibidosDeSociedadNacionalDelRegimenOrdinarioQueNoLlevaACaboLasMegainversionesDelArt235YQueNoEstaAcogidaAlRegimenDeSociedadesCHCDeLosArts894A898DelET?.AjustesParaLlegarASaldosFiscales1 || 0) + (renContent?.Renglon53?.RecibidosDeSociedadNacionalDelRegimenOrdinarioQueNoLlevaACaboLasMegainversionesDelArt235PeroQueSiEstaAcogidaAlRegimenDeSociedadesCHCDeLosArts894A898DelET?.AjustesParaLlegarASaldosFiscales1 || 0) + (renContent?.Renglon53?.RecibidosDeUnaSociedadNacionalDelRegimenSimple?.AjustesParaLlegarASaldosFiscales1 || 0);

            renContent.Ingresos.GananciasPorInversionesEnSubsidiariasAsociadasYONegociosConjuntos.DividendosYOParticipacionesGravadasRecibidasPorPersonasNaturalesSinResidenciaFiscalAnio2017YSiguientes.MayorValorFiscalPorReconocimientoExencionesLimitaciones = (renContent?.Renglon53?.RecibidosDeSociedadNacionalDelRegimenOrdinarioQueNoLlevaACaboLasMegainversionesDelArt235YQueNoEstaAcogidaAlRegimenDeSociedadesCHCDeLosArts894A898DelET?.AjustesParaLlegarASaldosFiscales3 || 0) + (renContent?.Renglon53?.RecibidosDeSociedadNacionalDelRegimenOrdinarioQueNoLlevaACaboLasMegainversionesDelArt235PeroQueSiEstaAcogidaAlRegimenDeSociedadesCHCDeLosArts894A898DelET?.AjustesParaLlegarASaldosFiscales3 || 0) + (renContent?.Renglon53?.RecibidosDeUnaSociedadNacionalDelRegimenSimple?.AjustesParaLlegarASaldosFiscales3 || 0);

            // Ingresos - GananciasPorInversionesEnSubsidiariasAsociadasYONegociosConjuntos - DividendosYOParticipacionesGravadasAl10Porciento

            renContent.Ingresos.GananciasPorInversionesEnSubsidiariasAsociadasYONegociosConjuntos.DividendosYOParticipacionesGravadasAl10Porciento.ValorContable =
                renContent?.Renglon54?.Total54SaldosContablesADiciembre31 || 0;

            renContent.Ingresos.GananciasPorInversionesEnSubsidiariasAsociadasYONegociosConjuntos.DividendosYOParticipacionesGravadasAl10Porciento.MenorValorFiscalPorReconocimientoExencionesLimitaciones = (renContent?.Renglon54?.RecibidosDeSociedadNacionalDelRegimenOrdinarioQueNoLlevaACaboLasMegainversionesDelArt235YQueNoEstaAcogidaAlRegimenDeSociedadesCHCDeLosArts894A898DelET?.AjustesParaLlegarASaldosFiscales1 || 0) + (renContent?.Renglon54?.RecibidosDeSociedadNacionalDelRegimenOrdinarioQueNoLlevaACaboLasMegainversionesDelArt235PeroQueSiEstaAcogidaAlRegimenDeSociedadesCHCDeLosArts894A898DelET?.AjustesParaLlegarASaldosFiscales1 || 0) + (renContent?.Renglon54?.RecSocNacSim54?.AjustesParaLlegarASaldosFiscales1 || 0);

            renContent.Ingresos.GananciasPorInversionesEnSubsidiariasAsociadasYONegociosConjuntos.DividendosYOParticipacionesGravadasAl10Porciento.MenorValorFiscalPorReconocimientoExencionesLimitaciones = (renContent?.Renglon54?.RecibidosDeSociedadNacionalDelRegimenOrdinarioQueNoLlevaACaboLasMegainversionesDelArt235YQueNoEstaAcogidaAlRegimenDeSociedadesCHCDeLosArts894A898DelET?.AjustesParaLlegarASaldosFiscales3 || 0) + (renContent?.Renglon54?.RecibidosDeSociedadNacionalDelRegimenOrdinarioQueNoLlevaACaboLasMegainversionesDelArt235PeroQueSiEstaAcogidaAlRegimenDeSociedadesCHCDeLosArts894A898DelET?.AjustesParaLlegarASaldosFiscales3 || 0) + (renContent?.Renglon54?.RecSocNacSim54?.AjustesParaLlegarASaldosFiscales3 || 0);

            // Ingresos - GananciasPorInversionesEnSubsidiariasAsociadasYONegociosConjuntos - DividendosYOParticipacionesGravadasATarifaGeneralEPYSociedadesExtranjerasUtilidadesGeneradasAPartirDelAnio2017

            renContent.Ingresos.GananciasPorInversionesEnSubsidiariasAsociadasYONegociosConjuntos.DividendosYOParticipacionesGravadasATarifaGeneralEPYSociedadesExtranjerasUtilidadesGeneradasAPartirDelAnio2017.ValorContable =
                renContent?.Renglon55?.TotalSaldosContablesADiciembre31Parciales || 0;

            // Ingresos - GananciasPorInversionesEnSubsidiariasAsociadasYONegociosConjuntos - DividendosYParticipacionesProvenientesDeProyectosCalificadosComoMegaInversionGravadasAl27Porciento

            renContent.Ingresos.GananciasPorInversionesEnSubsidiariasAsociadasYONegociosConjuntos.DividendosYParticipacionesProvenientesDeProyectosCalificadosComoMegaInversionGravadasAl27Porciento.ValorContable =
                renContent?.Renglon56?.Total56SaldosContablesADiciembre31 || 0;

            renContent.Ingresos.GananciasPorInversionesEnSubsidiariasAsociadasYONegociosConjuntos.DividendosYParticipacionesProvenientesDeProyectosCalificadosComoMegaInversionGravadasAl27Porciento.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon56?.RecibidosDeSociedadNacionalDelRegimenOrdinarioQueSiLlevaACaboLasMegainversionesDelArt235?.AjustesParaLlegarASaldosFiscales1 || 0;

            renContent.Ingresos.GananciasPorInversionesEnSubsidiariasAsociadasYONegociosConjuntos.DividendosYParticipacionesProvenientesDeProyectosCalificadosComoMegaInversionGravadasAl27Porciento.MayorValorFiscalPorReconocimientoExencionesLimitaciones = renContent?.Renglon56?.RecibidosDeSociedadNacionalDelRegimenOrdinarioQueSiLlevaACaboLasMegainversionesDelArt235?.AjustesParaLlegarASaldosFiscales3 || 0;

            // Ingresos - IngresosPorMedicionesAValorRazonable - ActivosBiologicos

            renContent.Ingresos.IngresosPorMedicionesAValorRazonable.ActivosBiologicos.ValorContable =
                renContent?.Renglon57?.["429501GananciasPorAplicacionMetodoDeParticipacion"]?.GananciasPorCambiosEnElValorRazonableDeActivos?.DeActivosBiologicos?.SaldosContablesADiciembre31Parciales || 0;

            // Ingresos - IngresosPorMedicionesAValorRazonable - PropiedadesDeInversion

            renContent.Ingresos.IngresosPorMedicionesAValorRazonable.PropiedadesDeInversion.ValorContable =
                renContent?.Renglon57?.["429501GananciasPorAplicacionMetodoDeParticipacion"]?.GananciasPorCambiosEnElValorRazonableDeActivos?.DePropiedadesDeInversion?.SaldosContablesADiciembre31Parciales || 0;

            // Ingresos - IngresosPorMedicionesAValorRazonable - PropiedadesDeInversion

            renContent.Ingresos.IngresosPorMedicionesAValorRazonable.InstrumentosFinancierosDistintoAInversionesEnSubsidiariasAsociadasYONegociosConjuntos.ValorContable =
                renContent?.Renglon57?.["429501GananciasPorAplicacionMetodoDeParticipacion"]?.GananciasPorCambiosEnElValorRazonableDeActivos?.DeInstrumentosFinancierosDiferenteAInversiones?.SaldosContablesADiciembre31Parciales || 0;

            // Ingresos - IngresosPorMedicionesAValorRazonable - InstrumentosDerivados

            renContent.Ingresos.IngresosPorMedicionesAValorRazonable.InstrumentosDerivados.ValorContable =
                renContent?.Renglon57?.["429501GananciasPorAplicacionMetodoDeParticipacion"]?.GananciasPorCambiosEnElValorRazonableDeActivos?.DeInstrumentosDerivados?.SaldosContablesADiciembre31Parciales || 0;

            // Ingresos - IngresosPorMedicionesAValorRazonable - Otros

            renContent.Ingresos.IngresosPorMedicionesAValorRazonable.Otros.ValorContable =
                renContent?.Renglon57?.["429501GananciasPorAplicacionMetodoDeParticipacion"]?.GananciasPorCambiosEnElValorRazonableDeActivos?.DeOtrosActivos?.SaldosContablesADiciembre31Parciales || 0;

            // Ingresos - UtilidadEnLaVentaOEnajenacionDeActivosBienesPoseidosPorMenosDeDoAnios - PropiedadesPlantaYEquipo

            renContent.Ingresos.UtilidadEnLaVentaOEnajenacionDeActivosBienesPoseidosPorMenosDeDoAnios.PropiedadesPlantaYEquipo.ValorContable =
                renContent?.Renglon57?.["4245UtilidadEnVentaDeActivoFijo"]?.PorVentasDeActivosPoseidosMenosDe2Anios?.PropiedadesPlantaYEquipo?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Ingresos.UtilidadEnLaVentaOEnajenacionDeActivosBienesPoseidosPorMenosDeDoAnios.PropiedadesPlantaYEquipo.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon57?.["4245UtilidadEnVentaDeActivoFijo"]?.PorVentasDeActivosPoseidosMenosDe2Anios?.PropiedadesPlantaYEquipo?.AjustesParaLlegarASaldosFiscales1 || 0;

            renContent.Ingresos.UtilidadEnLaVentaOEnajenacionDeActivosBienesPoseidosPorMenosDeDoAnios.PropiedadesPlantaYEquipo.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon57?.["4245UtilidadEnVentaDeActivoFijo"]?.PorVentasDeActivosPoseidosMenosDe2Anios?.PropiedadesPlantaYEquipo?.AjustesParaLlegarASaldosFiscales3 || 0;
            
            // Ingresos - UtilidadEnLaVentaOEnajenacionDeActivosBienesPoseidosPorMenosDeDoAnios - PropiedadesDeInversion

            renContent.Ingresos.UtilidadEnLaVentaOEnajenacionDeActivosBienesPoseidosPorMenosDeDoAnios.PropiedadesDeInversion.ValorContable =
                renContent?.Renglon57?.["4245UtilidadEnVentaDeActivoFijo"]?.PorVentasDeActivosPoseidosMenosDe2Anios?.PropiedadesDeInversion?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Ingresos.UtilidadEnLaVentaOEnajenacionDeActivosBienesPoseidosPorMenosDeDoAnios.PropiedadesDeInversion.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon57?.["4245UtilidadEnVentaDeActivoFijo"]?.PorVentasDeActivosPoseidosMenosDe2Anios?.PropiedadesDeInversion?.AjustesParaLlegarASaldosFiscales1 || 0;

            renContent.Ingresos.UtilidadEnLaVentaOEnajenacionDeActivosBienesPoseidosPorMenosDeDoAnios.PropiedadesDeInversion.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon57?.["4245UtilidadEnVentaDeActivoFijo"]?.PorVentasDeActivosPoseidosMenosDe2Anios?.PropiedadesDeInversion?.AjustesParaLlegarASaldosFiscales3 || 0;

            // Ingresos - UtilidadEnLaVentaOEnajenacionDeActivosBienesPoseidosPorMenosDeDoAnios - ActivosBiologicosSinPlantasProductoras

            renContent.Ingresos.UtilidadEnLaVentaOEnajenacionDeActivosBienesPoseidosPorMenosDeDoAnios.ActivosBiologicosSinPlantasProductoras.ValorContable =
                renContent?.Renglon57?.["4245UtilidadEnVentaDeActivoFijo"]?.PorVentasDeActivosPoseidosMenosDe2Anios?.ActivosBiologicosSinPlantasProductoras?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Ingresos.UtilidadEnLaVentaOEnajenacionDeActivosBienesPoseidosPorMenosDeDoAnios.ActivosBiologicosSinPlantasProductoras.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon57?.["4245UtilidadEnVentaDeActivoFijo"]?.PorVentasDeActivosPoseidosMenosDe2Anios?.ActivosBiologicosSinPlantasProductoras?.AjustesParaLlegarASaldosFiscales1 || 0;

            renContent.Ingresos.UtilidadEnLaVentaOEnajenacionDeActivosBienesPoseidosPorMenosDeDoAnios.ActivosBiologicosSinPlantasProductoras.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon57?.["4245UtilidadEnVentaDeActivoFijo"]?.PorVentasDeActivosPoseidosMenosDe2Anios?.ActivosBiologicosSinPlantasProductoras?.AjustesParaLlegarASaldosFiscales3 || 0;

            // Ingresos - UtilidadEnLaVentaOEnajenacionDeActivosBienesPoseidosPorMenosDeDoAnios - ActivosNoCorrientesMantenidosParaLaVentaEntregarAPropietarios

            renContent.Ingresos.UtilidadEnLaVentaOEnajenacionDeActivosBienesPoseidosPorMenosDeDoAnios.ActivosNoCorrientesMantenidosParaLaVentaEntregarAPropietarios.ValorContable =
                renContent?.Renglon57?.["4245UtilidadEnVentaDeActivoFijo"]?.PorVentasDeActivosPoseidosMenosDe2Anios?.ActivosNoCorrientesMantenidosParaLaVentaEntregarAPropietarios?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Ingresos.UtilidadEnLaVentaOEnajenacionDeActivosBienesPoseidosPorMenosDeDoAnios.ActivosNoCorrientesMantenidosParaLaVentaEntregarAPropietarios.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon57?.["4245UtilidadEnVentaDeActivoFijo"]?.PorVentasDeActivosPoseidosMenosDe2Anios?.ActivosNoCorrientesMantenidosParaLaVentaEntregarAPropietarios?.AjustesParaLlegarASaldosFiscales1 || 0;

            renContent.Ingresos.UtilidadEnLaVentaOEnajenacionDeActivosBienesPoseidosPorMenosDeDoAnios.ActivosNoCorrientesMantenidosParaLaVentaEntregarAPropietarios.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon57?.["4245UtilidadEnVentaDeActivoFijo"]?.PorVentasDeActivosPoseidosMenosDe2Anios?.ActivosNoCorrientesMantenidosParaLaVentaEntregarAPropietarios?.AjustesParaLlegarASaldosFiscales3 || 0;

            // Ingresos - UtilidadEnLaVentaOEnajenacionDeActivosBienesPoseidosPorMenosDeDoAnios - ActivosIntangibles

            renContent.Ingresos.UtilidadEnLaVentaOEnajenacionDeActivosBienesPoseidosPorMenosDeDoAnios.ActivosIntangibles.ValorContable =
                renContent?.Renglon57?.["4245UtilidadEnVentaDeActivoFijo"]?.PorVentasDeActivosPoseidosMenosDe2Anios?.ActivosIntangibles?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Ingresos.UtilidadEnLaVentaOEnajenacionDeActivosBienesPoseidosPorMenosDeDoAnios.ActivosIntangibles.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon57?.["4245UtilidadEnVentaDeActivoFijo"]?.PorVentasDeActivosPoseidosMenosDe2Anios?.ActivosIntangibles?.AjustesParaLlegarASaldosFiscales1 || 0;

            renContent.Ingresos.UtilidadEnLaVentaOEnajenacionDeActivosBienesPoseidosPorMenosDeDoAnios.ActivosIntangibles.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon57?.["4245UtilidadEnVentaDeActivoFijo"]?.PorVentasDeActivosPoseidosMenosDe2Anios?.ActivosIntangibles?.AjustesParaLlegarASaldosFiscales3 || 0;

            // Ingresos - UtilidadEnLaVentaOEnajenacionDeActivosBienesPoseidosPorMenosDeDoAnios - InversionesEnAccionesYOtrasParticipaciones

            renContent.Ingresos.UtilidadEnLaVentaOEnajenacionDeActivosBienesPoseidosPorMenosDeDoAnios.InversionesEnAccionesYOtrasParticipaciones.ValorContable =
                renContent?.Renglon57?.["4245UtilidadEnVentaDeActivoFijo"]?.PorVentasDeActivosPoseidosMenosDe2Anios?.InversionesEnAccionesYOtrasParticipaciones?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Ingresos.UtilidadEnLaVentaOEnajenacionDeActivosBienesPoseidosPorMenosDeDoAnios.InversionesEnAccionesYOtrasParticipaciones.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon57?.["4245UtilidadEnVentaDeActivoFijo"]?.PorVentasDeActivosPoseidosMenosDe2Anios?.InversionesEnAccionesYOtrasParticipaciones?.AjustesParaLlegarASaldosFiscales1 || 0;

            renContent.Ingresos.UtilidadEnLaVentaOEnajenacionDeActivosBienesPoseidosPorMenosDeDoAnios.InversionesEnAccionesYOtrasParticipaciones.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon57?.["4245UtilidadEnVentaDeActivoFijo"]?.PorVentasDeActivosPoseidosMenosDe2Anios?.InversionesEnAccionesYOtrasParticipaciones?.AjustesParaLlegarASaldosFiscales3 || 0;

            // Ingresos - UtilidadEnLaVentaOEnajenacionDeActivosBienesPoseidosPorMenosDeDoAnios - PorDisposicionDeOtrosInstrumentosFinancieros

            renContent.Ingresos.UtilidadEnLaVentaOEnajenacionDeActivosBienesPoseidosPorMenosDeDoAnios.PorDisposicionDeOtrosInstrumentosFinancieros.ValorContable =
                renContent?.Renglon57?.["4245UtilidadEnVentaDeActivoFijo"]?.PorVentasDeActivosPoseidosMenosDe2Anios?.PorDisposicionDeOtrosInstrumentosFinancieros?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Ingresos.UtilidadEnLaVentaOEnajenacionDeActivosBienesPoseidosPorMenosDeDoAnios.PorDisposicionDeOtrosInstrumentosFinancieros.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon57?.["4245UtilidadEnVentaDeActivoFijo"]?.PorVentasDeActivosPoseidosMenosDe2Anios?.PorDisposicionDeOtrosInstrumentosFinancieros?.AjustesParaLlegarASaldosFiscales1 || 0;

            renContent.Ingresos.UtilidadEnLaVentaOEnajenacionDeActivosBienesPoseidosPorMenosDeDoAnios.PorDisposicionDeOtrosInstrumentosFinancieros.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon57?.["4245UtilidadEnVentaDeActivoFijo"]?.PorVentasDeActivosPoseidosMenosDe2Anios?.PorDisposicionDeOtrosInstrumentosFinancieros?.AjustesParaLlegarASaldosFiscales3 || 0;

            // Ingresos - UtilidadEnLaVentaOEnajenacionDeActivosBienesPoseidosPorMenosDeDoAnios - Otros

            renContent.Ingresos.UtilidadEnLaVentaOEnajenacionDeActivosBienesPoseidosPorMenosDeDoAnios.Otros.ValorContable =
                renContent?.Renglon57?.["4245UtilidadEnVentaDeActivoFijo"]?.PorVentasDeActivosPoseidosMenosDe2Anios?.Otros?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Ingresos.UtilidadEnLaVentaOEnajenacionDeActivosBienesPoseidosPorMenosDeDoAnios.Otros.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon57?.["4245UtilidadEnVentaDeActivoFijo"]?.PorVentasDeActivosPoseidosMenosDe2Anios?.Otros?.AjustesParaLlegarASaldosFiscales1 || 0;

            renContent.Ingresos.UtilidadEnLaVentaOEnajenacionDeActivosBienesPoseidosPorMenosDeDoAnios.Otros.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon57?.["4245UtilidadEnVentaDeActivoFijo"]?.PorVentasDeActivosPoseidosMenosDe2Anios?.Otros?.AjustesParaLlegarASaldosFiscales3 || 0;

            // Ingresos - UtilidadPorVentaOEnajenacionDeActivosBienesPoseidosPorDosAniosOMasGananciaOcasional - PropiedadesPlantaYEquipo

            renContent.Ingresos.UtilidadPorVentaOEnajenacionDeActivosBienesPoseidosPorDosAniosOMasGananciaOcasional.PropiedadesPlantaYEquipo.ValorContable =
                renContent?.Renglon57?.["4245UtilidadEnVentaDeActivoFijo"]?.PorVentasDeActivosPoseidosMasDe2Anios?.PropiedadesPlantaYEquipo?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Ingresos.UtilidadPorVentaOEnajenacionDeActivosBienesPoseidosPorDosAniosOMasGananciaOcasional.PropiedadesPlantaYEquipo.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon57?.["4245UtilidadEnVentaDeActivoFijo"]?.PorVentasDeActivosPoseidosMasDe2Anios?.PropiedadesPlantaYEquipo?.AjustesParaLlegarASaldosFiscales1 || 0;

            renContent.Ingresos.UtilidadPorVentaOEnajenacionDeActivosBienesPoseidosPorDosAniosOMasGananciaOcasional.PropiedadesPlantaYEquipo.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon57?.["4245UtilidadEnVentaDeActivoFijo"]?.PorVentasDeActivosPoseidosMasDe2Anios?.PropiedadesPlantaYEquipo?.AjustesParaLlegarASaldosFiscales3 || 0;

            // Ingresos - UtilidadPorVentaOEnajenacionDeActivosBienesPoseidosPorDosAniosOMasGananciaOcasional - PropiedadesDeInversion

            renContent.Ingresos.UtilidadPorVentaOEnajenacionDeActivosBienesPoseidosPorDosAniosOMasGananciaOcasional.PropiedadesDeInversion.ValorContable =
                renContent?.Renglon57?.["4245UtilidadEnVentaDeActivoFijo"]?.PorVentasDeActivosPoseidosMasDe2Anios?.PropiedadesDeInversion?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Ingresos.UtilidadPorVentaOEnajenacionDeActivosBienesPoseidosPorDosAniosOMasGananciaOcasional.PropiedadesDeInversion.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon57?.["4245UtilidadEnVentaDeActivoFijo"]?.PorVentasDeActivosPoseidosMasDe2Anios?.PropiedadesDeInversion?.AjustesParaLlegarASaldosFiscales1 || 0;

            renContent.Ingresos.UtilidadPorVentaOEnajenacionDeActivosBienesPoseidosPorDosAniosOMasGananciaOcasional.PropiedadesDeInversion.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon57?.["4245UtilidadEnVentaDeActivoFijo"]?.PorVentasDeActivosPoseidosMasDe2Anios?.PropiedadesDeInversion?.AjustesParaLlegarASaldosFiscales3 || 0;

            // Ingresos - UtilidadPorVentaOEnajenacionDeActivosBienesPoseidosPorDosAniosOMasGananciaOcasional - ActivosBiologicosSinPlantasProductoras

            renContent.Ingresos.UtilidadPorVentaOEnajenacionDeActivosBienesPoseidosPorDosAniosOMasGananciaOcasional.ActivosBiologicosSinPlantasProductoras.ValorContable =
                renContent?.Renglon57?.["4245UtilidadEnVentaDeActivoFijo"]?.PorVentasDeActivosPoseidosMasDe2Anios?.ActivosBiologicosSinPlantasProductoras?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Ingresos.UtilidadPorVentaOEnajenacionDeActivosBienesPoseidosPorDosAniosOMasGananciaOcasional.ActivosBiologicosSinPlantasProductoras.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon57?.["4245UtilidadEnVentaDeActivoFijo"]?.PorVentasDeActivosPoseidosMasDe2Anios?.ActivosBiologicosSinPlantasProductoras?.AjustesParaLlegarASaldosFiscales1 || 0;

            renContent.Ingresos.UtilidadPorVentaOEnajenacionDeActivosBienesPoseidosPorDosAniosOMasGananciaOcasional.ActivosBiologicosSinPlantasProductoras.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon57?.["4245UtilidadEnVentaDeActivoFijo"]?.PorVentasDeActivosPoseidosMasDe2Anios?.ActivosBiologicosSinPlantasProductoras?.AjustesParaLlegarASaldosFiscales3 || 0;

            // Ingresos - UtilidadPorVentaOEnajenacionDeActivosBienesPoseidosPorDosAniosOMasGananciaOcasional - ActivosNoCorrientesMantenidosParaLaVentaEntregarAPropietarios

            renContent.Ingresos.UtilidadPorVentaOEnajenacionDeActivosBienesPoseidosPorDosAniosOMasGananciaOcasional.ActivosNoCorrientesMantenidosParaLaVentaEntregarAPropietarios.ValorContable =
                renContent?.Renglon57?.["4245UtilidadEnVentaDeActivoFijo"]?.PorVentasDeActivosPoseidosMasDe2Anios?.ActivosNoCorrientesMantenidosParaLaVentaEntregarAPropietarios?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Ingresos.UtilidadPorVentaOEnajenacionDeActivosBienesPoseidosPorDosAniosOMasGananciaOcasional.ActivosNoCorrientesMantenidosParaLaVentaEntregarAPropietarios.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon57?.["4245UtilidadEnVentaDeActivoFijo"]?.PorVentasDeActivosPoseidosMasDe2Anios?.ActivosNoCorrientesMantenidosParaLaVentaEntregarAPropietarios?.AjustesParaLlegarASaldosFiscales1 || 0;

            renContent.Ingresos.UtilidadPorVentaOEnajenacionDeActivosBienesPoseidosPorDosAniosOMasGananciaOcasional.ActivosNoCorrientesMantenidosParaLaVentaEntregarAPropietarios.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon57?.["4245UtilidadEnVentaDeActivoFijo"]?.PorVentasDeActivosPoseidosMasDe2Anios?.ActivosNoCorrientesMantenidosParaLaVentaEntregarAPropietarios?.AjustesParaLlegarASaldosFiscales3 || 0;

            // Ingresos - UtilidadPorVentaOEnajenacionDeActivosBienesPoseidosPorDosAniosOMasGananciaOcasional - ActivosIntangibles

            renContent.Ingresos.UtilidadPorVentaOEnajenacionDeActivosBienesPoseidosPorDosAniosOMasGananciaOcasional.ActivosIntangibles.ValorContable =
                renContent?.Renglon57?.["4245UtilidadEnVentaDeActivoFijo"]?.PorVentasDeActivosPoseidosMasDe2Anios?.ActivosIntangibles?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Ingresos.UtilidadPorVentaOEnajenacionDeActivosBienesPoseidosPorDosAniosOMasGananciaOcasional.ActivosIntangibles.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon57?.["4245UtilidadEnVentaDeActivoFijo"]?.PorVentasDeActivosPoseidosMasDe2Anios?.ActivosIntangibles?.AjustesParaLlegarASaldosFiscales1 || 0;

            renContent.Ingresos.UtilidadPorVentaOEnajenacionDeActivosBienesPoseidosPorDosAniosOMasGananciaOcasional.ActivosIntangibles.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon57?.["4245UtilidadEnVentaDeActivoFijo"]?.PorVentasDeActivosPoseidosMasDe2Anios?.ActivosIntangibles?.AjustesParaLlegarASaldosFiscales3 || 0;

            // Ingresos - UtilidadPorVentaOEnajenacionDeActivosBienesPoseidosPorDosAniosOMasGananciaOcasional - InversionesEnAccionesYOtrasParticipaciones

            renContent.Ingresos.UtilidadPorVentaOEnajenacionDeActivosBienesPoseidosPorDosAniosOMasGananciaOcasional.InversionesEnAccionesYOtrasParticipaciones.ValorContable =
                renContent?.Renglon57?.["4245UtilidadEnVentaDeActivoFijo"]?.PorVentasDeActivosPoseidosMasDe2Anios?.InversionesEnAccionesYOtrasParticipaciones?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Ingresos.UtilidadPorVentaOEnajenacionDeActivosBienesPoseidosPorDosAniosOMasGananciaOcasional.InversionesEnAccionesYOtrasParticipaciones.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon57?.["4245UtilidadEnVentaDeActivoFijo"]?.PorVentasDeActivosPoseidosMasDe2Anios?.InversionesEnAccionesYOtrasParticipaciones?.AjustesParaLlegarASaldosFiscales1 || 0;

            renContent.Ingresos.UtilidadPorVentaOEnajenacionDeActivosBienesPoseidosPorDosAniosOMasGananciaOcasional.InversionesEnAccionesYOtrasParticipaciones.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon57?.["4245UtilidadEnVentaDeActivoFijo"]?.PorVentasDeActivosPoseidosMasDe2Anios?.InversionesEnAccionesYOtrasParticipaciones?.AjustesParaLlegarASaldosFiscales3 || 0;

            // Ingresos - UtilidadPorVentaOEnajenacionDeActivosBienesPoseidosPorDosAniosOMasGananciaOcasional - PorDisposicionDeOtrosInstrumentosFinancieros

            renContent.Ingresos.UtilidadPorVentaOEnajenacionDeActivosBienesPoseidosPorDosAniosOMasGananciaOcasional.PorDisposicionDeOtrosInstrumentosFinancieros.ValorContable =
                renContent?.Renglon57?.["4245UtilidadEnVentaDeActivoFijo"]?.PorVentasDeActivosPoseidosMasDe2Anios?.PorDisposicionDeOtrosInstrumentosFinancieros?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Ingresos.UtilidadPorVentaOEnajenacionDeActivosBienesPoseidosPorDosAniosOMasGananciaOcasional.PorDisposicionDeOtrosInstrumentosFinancieros.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon57?.["4245UtilidadEnVentaDeActivoFijo"]?.PorVentasDeActivosPoseidosMasDe2Anios?.PorDisposicionDeOtrosInstrumentosFinancieros?.AjustesParaLlegarASaldosFiscales1 || 0;

            renContent.Ingresos.UtilidadPorVentaOEnajenacionDeActivosBienesPoseidosPorDosAniosOMasGananciaOcasional.PorDisposicionDeOtrosInstrumentosFinancieros.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon57?.["4245UtilidadEnVentaDeActivoFijo"]?.PorVentasDeActivosPoseidosMasDe2Anios?.PorDisposicionDeOtrosInstrumentosFinancieros?.AjustesParaLlegarASaldosFiscales3 || 0;

            // Ingresos - UtilidadPorVentaOEnajenacionDeActivosBienesPoseidosPorDosAniosOMasGananciaOcasional - Otros

            renContent.Ingresos.UtilidadPorVentaOEnajenacionDeActivosBienesPoseidosPorDosAniosOMasGananciaOcasional.Otros.ValorContable =
                renContent?.Renglon57?.["4245UtilidadEnVentaDeActivoFijo"]?.PorVentasDeActivosPoseidosMasDe2Anios?.Otros?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Ingresos.UtilidadPorVentaOEnajenacionDeActivosBienesPoseidosPorDosAniosOMasGananciaOcasional.Otros.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon57?.["4245UtilidadEnVentaDeActivoFijo"]?.PorVentasDeActivosPoseidosMasDe2Anios?.Otros?.AjustesParaLlegarASaldosFiscales1 || 0;

            renContent.Ingresos.UtilidadPorVentaOEnajenacionDeActivosBienesPoseidosPorDosAniosOMasGananciaOcasional.Otros.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon57?.["4245UtilidadEnVentaDeActivoFijo"]?.PorVentasDeActivosPoseidosMasDe2Anios?.Otros?.AjustesParaLlegarASaldosFiscales3 || 0;

            // Ingresos - IngresosPorReversionDeDeterioroDelValor - Inventarios

            renContent.Ingresos.IngresosPorReversionDeDeterioroDelValor.Inventarios.ValorContable =
                renContent?.Renglon57?.["425035ReversionDeDeterioroDeValor"]?.Inventarios?.SaldosContablesADiciembre31Parciales || 0;

            // Ingresos - IngresosPorReversionDeDeterioroDelValor - PropiedadesPlantaYEquipo

            renContent.Ingresos.IngresosPorReversionDeDeterioroDelValor.PropiedadesPlantaYEquipo.ValorContable =
                renContent?.Renglon57?.["425035ReversionDeDeterioroDeValor"]?.PropiedadesPlantaYEquipo?.SaldosContablesADiciembre31Parciales || 0;

            // Ingresos - IngresosPorReversionDeDeterioroDelValor - ActivosIntangibles

            renContent.Ingresos.IngresosPorReversionDeDeterioroDelValor.ActivosIntangibles.ValorContable =
                renContent?.Renglon57?.["425035ReversionDeDeterioroDeValor"]?.ActivosIntangibles?.SaldosContablesADiciembre31Parciales || 0;

            // Ingresos - IngresosPorReversionDeDeterioroDelValor - ActivosDeExploracionYEvaluacionDeRecursosMinerales

            renContent.Ingresos.IngresosPorReversionDeDeterioroDelValor.ActivosDeExploracionYEvaluacionDeRecursosMinerales.ValorContable =
                renContent?.Renglon57?.["425035ReversionDeDeterioroDeValor"]?.ActivosDeExploracionYEvaluacionDeRecursosMinerales?.SaldosContablesADiciembre31Parciales || 0;

            // Ingresos - IngresosPorReversionDeDeterioroDelValor - PropiedadesDeInversionMedidasAlModeloDeCosto

            renContent.Ingresos.IngresosPorReversionDeDeterioroDelValor.PropiedadesDeInversionMedidasAlModeloDeCosto.ValorContable =
                renContent?.Renglon57?.["425035ReversionDeDeterioroDeValor"]?.PropiedadesDeInversionMedidasAlModeloDeCosto?.SaldosContablesADiciembre31Parciales || 0;

            // Ingresos - IngresosPorReversionDeDeterioroDelValor - ActivosNoCorrientesMantenidosParaLaVentaEntregarAPropietarios

            renContent.Ingresos.IngresosPorReversionDeDeterioroDelValor.ActivosNoCorrientesMantenidosParaLaVentaEntregarAPropietarios.ValorContable =
                renContent?.Renglon57?.["425035ReversionDeDeterioroDeValor"]?.ActivosNoCorrientesMantenidosParaLaVentaEntregarAPropietarios?.SaldosContablesADiciembre31Parciales || 0;

            // Ingresos - IngresosPorReversionDeDeterioroDelValor - ActivosBiologicosMedidosAlModeloDeCosto

            renContent.Ingresos.IngresosPorReversionDeDeterioroDelValor.ActivosBiologicosMedidosAlModeloDeCosto.ValorContable =
                renContent?.Renglon57?.["425035ReversionDeDeterioroDeValor"]?.ActivosBiologicosMedidosAlModeloDeCosto?.SaldosContablesADiciembre31Parciales || 0;

            // Ingresos - IngresosPorReversionDeDeterioroDelValor - BienesDeArteYCultura

            renContent.Ingresos.IngresosPorReversionDeDeterioroDelValor.BienesDeArteYCultura.ValorContable =
                renContent?.Renglon57?.["425035ReversionDeDeterioroDeValor"]?.BienesDeArteYCultura?.SaldosContablesADiciembre31Parciales || 0;

            // Ingresos - IngresosPorReversionDeDeterioroDelValor - ActivosFinancierosDistintosACarteraDeCrediroYOperacionesDeLeasing

            renContent.Ingresos.IngresosPorReversionDeDeterioroDelValor.ActivosFinancierosDistintosACarteraDeCrediroYOperacionesDeLeasing.ValorContable =
                renContent?.Renglon57?.["425035ReversionDeDeterioroDeValor"]?.ActivosFinancierosDiferentesACarteraDeCredito?.SaldosContablesADiciembre31Parciales || 0;

            // Ingresos - IngresosPorReversionDeDeterioroDelValor - CarteraDeCreditoYOperacionesDeLeasing

            renContent.Ingresos.IngresosPorReversionDeDeterioroDelValor.CarteraDeCreditoYOperacionesDeLeasing.ValorContable =
                renContent?.Renglon57?.["425035ReversionDeDeterioroDeValor"]?.CarteraDeCreditoYOperacionesDeLeasing?.SaldosContablesADiciembre31Parciales || 0;

            // Ingresos - IngresosPorReversionDeDeterioroDelValor - OtrasInversionesMedidasAlCostoOElMetodoDeLaParticipacion

            renContent.Ingresos.IngresosPorReversionDeDeterioroDelValor.OtrasInversionesMedidasAlCostoOElMetodoDeLaParticipacion.ValorContable =
                renContent?.Renglon57?.["425035ReversionDeDeterioroDeValor"]?.OtrasInversionesMedidasAlCostoOElMetodoDeLaParticipacion?.SaldosContablesADiciembre31Parciales || 0;

            // Ingresos - IngresosPorReversionDeDeterioroDelValor - OtrosDeterior

            renContent.Ingresos.IngresosPorReversionDeDeterioroDelValor.OtrosDeterior.ValorContable =
                renContent?.Renglon57?.["425035ReversionDeDeterioroDeValor"]?.OtrosDeterioros?.SaldosContablesADiciembre31Parciales || 0;

            // Ingresos - IngresosPorReversionDeProvisionesPasivosDeMontoOFechaInciertos - Garantias

            renContent.Ingresos.IngresosPorReversionDeProvisionesPasivosDeMontoOFechaInciertos.Garantias.ValorContable =
                renContent?.Renglon57?.["425036ReversionDeProvisionesMontoOFechaInciertos"]?.Garantias?.SaldosContablesADiciembre31Parciales || 0;

            // Ingresos - IngresosPorReversionDeProvisionesPasivosDeMontoOFechaInciertos - ContratosOnerosos

            renContent.Ingresos.IngresosPorReversionDeProvisionesPasivosDeMontoOFechaInciertos.ContratosOnerosos.ValorContable =
                renContent?.Renglon57?.["425036ReversionDeProvisionesMontoOFechaInciertos"]?.ContratosOnerosos?.SaldosContablesADiciembre31Parciales || 0;

            // Ingresos - IngresosPorReversionDeProvisionesPasivosDeMontoOFechaInciertos - Litigios

            renContent.Ingresos.IngresosPorReversionDeProvisionesPasivosDeMontoOFechaInciertos.Litigios.ValorContable =
                renContent?.Renglon57?.["425036ReversionDeProvisionesMontoOFechaInciertos"]?.Litigios?.SaldosContablesADiciembre31Parciales || 0;

            // Ingresos - IngresosPorReversionDeProvisionesPasivosDeMontoOFechaInciertos - ReembolsosAClientes

            renContent.Ingresos.IngresosPorReversionDeProvisionesPasivosDeMontoOFechaInciertos.ReembolsosAClientes.ValorContable =
                renContent?.Renglon57?.["425036ReversionDeProvisionesMontoOFechaInciertos"]?.ReembolsosAClientes?.SaldosContablesADiciembre31Parciales || 0;

            // Ingresos - IngresosPorReversionDeProvisionesPasivosDeMontoOFechaInciertos - ReestructuracionesDeNegocios

            renContent.Ingresos.IngresosPorReversionDeProvisionesPasivosDeMontoOFechaInciertos.ReestructuracionesDeNegocios.ValorContable =
                renContent?.Renglon57?.["425036ReversionDeProvisionesMontoOFechaInciertos"]?.ReestructuracionesDeNegocios?.SaldosContablesADiciembre31Parciales || 0;

            // Ingresos - IngresosPorReversionDeProvisionesPasivosDeMontoOFechaInciertos - PasivosContingentesAsumidosEnUnaCombinacionDeNegocios

            renContent.Ingresos.IngresosPorReversionDeProvisionesPasivosDeMontoOFechaInciertos.PasivosContingentesAsumidosEnUnaCombinacionDeNegocios.ValorContable =
                renContent?.Renglon57?.["425036ReversionDeProvisionesMontoOFechaInciertos"]?.PasivosContingentesAsumidosEnUnaCombinacionDeNegocios?.SaldosContablesADiciembre31Parciales || 0;

            // Ingresos - IngresosPorReversionDeProvisionesPasivosDeMontoOFechaInciertos - Otros

            renContent.Ingresos.IngresosPorReversionDeProvisionesPasivosDeMontoOFechaInciertos.Otros.ValorContable =
                renContent?.Renglon57?.["425036ReversionDeProvisionesMontoOFechaInciertos"]?.Otros?.SaldosContablesADiciembre31Parciales || 0;

            // Ingresos - IngresosPorReversionDePasivosPorBeneficiosALosEmpleados - BeneficiosDeCortoplazo

            renContent.Ingresos.IngresosPorReversionDePasivosPorBeneficiosALosEmpleados.BeneficiosDeCortoplazo.ValorContable =
                renContent?.Renglon57?.["425037ReversionDePasivosPorBeneficiosALosEmpleados"]?.BeneficiosDeCortoPlayaz?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Ingresos.IngresosPorReversionDePasivosPorBeneficiosALosEmpleados.BeneficiosDeCortoplazo.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon57?.["425037ReversionDePasivosPorBeneficiosALosEmpleados"]?.BeneficiosDeCortoPlayaz?.AjustesParaLlegarASaldosFiscales1 || 0;

            renContent.Ingresos.IngresosPorReversionDePasivosPorBeneficiosALosEmpleados.BeneficiosDeCortoplazo.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon57?.["425037ReversionDePasivosPorBeneficiosALosEmpleados"]?.BeneficiosDeCortoPlayaz?.AjustesParaLlegarASaldosFiscales3 || 0;

            // Ingresos - IngresosPorReversionDePasivosPorBeneficiosALosEmpleados - BeneficiosDeLargoPlazo

            renContent.Ingresos.IngresosPorReversionDePasivosPorBeneficiosALosEmpleados.BeneficiosDeLargoPlazo.ValorContable =
                renContent?.Renglon57?.["425037ReversionDePasivosPorBeneficiosALosEmpleados"]?.BeneficiosDeLargoPlaazo?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Ingresos.IngresosPorReversionDePasivosPorBeneficiosALosEmpleados.BeneficiosDeLargoPlazo.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon57?.["425037ReversionDePasivosPorBeneficiosALosEmpleados"]?.BeneficiosDeLargoPlaazo?.AjustesParaLlegarASaldosFiscales1 || 0;

            renContent.Ingresos.IngresosPorReversionDePasivosPorBeneficiosALosEmpleados.BeneficiosDeLargoPlazo.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon57?.["425037ReversionDePasivosPorBeneficiosALosEmpleados"]?.BeneficiosDeLargoPlaazo?.AjustesParaLlegarASaldosFiscales3 || 0;

            // Ingresos - IngresosPorReversionDePasivosPorBeneficiosALosEmpleados - BeneficiosAEmpleadosPorTerminacionDelVinculoLaboral

            renContent.Ingresos.IngresosPorReversionDePasivosPorBeneficiosALosEmpleados.BeneficiosAEmpleadosPorTerminacionDelVinculoLaboral.ValorContable =
                renContent?.Renglon57?.["425037ReversionDePasivosPorBeneficiosALosEmpleados"]?.BeneficiosAEmpleadosPorTerminacionDelVinculoLaboral?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Ingresos.IngresosPorReversionDePasivosPorBeneficiosALosEmpleados.BeneficiosAEmpleadosPorTerminacionDelVinculoLaboral.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon57?.["425037ReversionDePasivosPorBeneficiosALosEmpleados"]?.BeneficiosAEmpleadosPorTerminacionDelVinculoLaboral?.AjustesParaLlegarASaldosFiscales1 || 0;

            renContent.Ingresos.IngresosPorReversionDePasivosPorBeneficiosALosEmpleados.BeneficiosAEmpleadosPorTerminacionDelVinculoLaboral.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon57?.["425037ReversionDePasivosPorBeneficiosALosEmpleados"]?.BeneficiosAEmpleadosPorTerminacionDelVinculoLaboral?.AjustesParaLlegarASaldosFiscales3 || 0;

            // Ingresos - IngresosPorReversionDePasivosPorBeneficiosALosEmpleados - BeneficiosAEmpleadosPostEmpleo

            renContent.Ingresos.IngresosPorReversionDePasivosPorBeneficiosALosEmpleados.BeneficiosAEmpleadosPostEmpleo.ValorContable =
                renContent?.Renglon57?.["425037ReversionDePasivosPorBeneficiosALosEmpleados"]?.BeneficiosAEmpleadosPostEmpleo?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Ingresos.IngresosPorReversionDePasivosPorBeneficiosALosEmpleados.BeneficiosAEmpleadosPostEmpleo.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon57?.["425037ReversionDePasivosPorBeneficiosALosEmpleados"]?.BeneficiosAEmpleadosPostEmpleo?.AjustesParaLlegarASaldosFiscales1 || 0;

            renContent.Ingresos.IngresosPorReversionDePasivosPorBeneficiosALosEmpleados.BeneficiosAEmpleadosPostEmpleo.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon57?.["425037ReversionDePasivosPorBeneficiosALosEmpleados"]?.BeneficiosAEmpleadosPostEmpleo?.AjustesParaLlegarASaldosFiscales3 || 0;

            // Ingresos - OtrosIngresos - TransferenciasSubvencionesYAyudasGubernamentales

            renContent.Ingresos.OtrosIngresos.TransferenciasSubvencionesYAyudasGubernamentales.ValorContable =
                renContent?.Renglon57?.["429502TransferenciasSubvencionesYAyudasGubernamentales"]?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Ingresos.OtrosIngresos.TransferenciasSubvencionesYAyudasGubernamentales.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon57?.["429502TransferenciasSubvencionesYAyudasGubernamentales"]?.AjustesParaLlegarASaldosFiscales1 || 0;

            renContent.Ingresos.OtrosIngresos.TransferenciasSubvencionesYAyudasGubernamentales.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon57?.["429502TransferenciasSubvencionesYAyudasGubernamentales"]?.AjustesParaLlegarASaldosFiscales3 || 0;

            // Ingresos - OtrosIngresos - DonacionesAportacionesYSimilares

            renContent.Ingresos.OtrosIngresos.DonacionesAportacionesYSimilares.ValorContable =
                renContent?.Renglon57?.["429503DonacionesAportacionesYSimilares"]?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Ingresos.OtrosIngresos.DonacionesAportacionesYSimilares.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon57?.["429503DonacionesAportacionesYSimilares"]?.AjustesParaLlegarASaldosFiscales1 || 0;

            renContent.Ingresos.OtrosIngresos.DonacionesAportacionesYSimilares.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon57?.["429503DonacionesAportacionesYSimilares"]?.AjustesParaLlegarASaldosFiscales3 || 0;

            // Ingresos - OtrosIngresos - ReembolsosDeCompaniasDeSeguroIndemnizaciones

            renContent.Ingresos.OtrosIngresos.ReembolsosDeCompaniasDeSeguroIndemnizaciones.ValorContable =
                renContent?.Renglon57?.["4255Indemnizaciones"]?.ReembolsosDeCompaniasDeSegros?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Ingresos.OtrosIngresos.ReembolsosDeCompaniasDeSeguroIndemnizaciones.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon57?.["4255Indemnizaciones"]?.ReembolsosDeCompaniasDeSegros?.AjustesParaLlegarASaldosFiscales1 || 0;

            renContent.Ingresos.OtrosIngresos.ReembolsosDeCompaniasDeSeguroIndemnizaciones.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon57?.["4255Indemnizaciones"]?.ReembolsosDeCompaniasDeSegros?.AjustesParaLlegarASaldosFiscales3 || 0;

            // Ingresos - OtrosIngresos - OtrasIndemnizaciones

            renContent.Ingresos.OtrosIngresos.OtrasIndemnizaciones.ValorContable =
                renContent?.Renglon57?.["4255Indemnizaciones"]?.OtrasIndemnizaciones?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Ingresos.OtrosIngresos.OtrasIndemnizaciones.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon57?.["4255Indemnizaciones"]?.OtrasIndemnizaciones?.AjustesParaLlegarASaldosFiscales1 || 0;

            renContent.Ingresos.OtrosIngresos.OtrasIndemnizaciones.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon57?.["4255Indemnizaciones"]?.OtrasIndemnizaciones?.AjustesParaLlegarASaldosFiscales3 || 0;

            // Ingresos - OtrosIngresos - OtrasReversionesORecuperaciones

            renContent.Ingresos.OtrosIngresos.OtrasReversionesORecuperaciones.ValorContable =
                renContent?.Renglon57?.["429506OtrasReversionesORecuperaciones"]?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Ingresos.OtrosIngresos.OtrasReversionesORecuperaciones.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon57?.["429506OtrasReversionesORecuperaciones"]?.AjustesParaLlegarASaldosFiscales1 || 0;

            renContent.Ingresos.OtrosIngresos.OtrasReversionesORecuperaciones.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon57?.["429506OtrasReversionesORecuperaciones"]?.AjustesParaLlegarASaldosFiscales3 || 0;

            // Ingresos - OtrosIngresos - Otros

            renContent.Ingresos.OtrosIngresos.Otros.ValorContable =
                (renContent?.Renglon57?.["429507Otros"]?.SaldosContablesADiciembre31Parciales || 0) + (renContent?.Renglon57?.["4265IngresosDeEjerciciosAnteriores"]?.SaldosContablesADiciembre31Parciales || 0) + (renContent?.Renglon57?.["425050ReintegrodeOtrosCostosYGastos"]?.SaldosContablesADiciembre31Parciales || 0) + (renContent?.Renglon57?.["429543LoteriasRifasYSimilares"]?.SaldosContablesADiciembre31Parciales || 0);

            renContent.Ingresos.OtrosIngresos.Otros.MenorValorFiscalPorReconocimientoExencionesLimitaciones = (renContent?.Renglon57?.["429507Otros"]?.AjustesParaLlegarASaldosFiscales1 || 0) + (renContent?.Renglon57?.["4265IngresosDeEjerciciosAnteriores"]?.AjustesParaLlegarASaldosFiscales1 || 0) + (renContent?.Renglon57?.["425050ReintegrodeOtrosCostosYGastos"]?.AjustesParaLlegarASaldosFiscales1 || 0) + (renContent?.Renglon57?.["429543LoteriasRifasYSimilares"]?.AjustesParaLlegarASaldosFiscales1 || 0);

            renContent.Ingresos.OtrosIngresos.Otros.MayorValorFiscalPorReconocimientoExencionesLimitaciones = (renContent?.Renglon57?.["429507Otros"]?.AjustesParaLlegarASaldosFiscales3 || 0) + (renContent?.Renglon57?.["4265IngresosDeEjerciciosAnteriores"]?.AjustesParaLlegarASaldosFiscales3 || 0) + (renContent?.Renglon57?.["425050ReintegrodeOtrosCostosYGastos"]?.AjustesParaLlegarASaldosFiscales3 || 0) + (renContent?.Renglon57?.["429543LoteriasRifasYSimilares"]?.AjustesParaLlegarASaldosFiscales3 || 0);

            // Ingresos - AjustesFiscales - AdicionDeIngresos - InteresesPresuntos

            renContent.Ingresos.AjustesFiscales.AdicionDeIngresos.InteresesPresuntos.MayorValorFiscalPorReconocimientoExencionesLimitaciones = (renContent?.Renglon48?.["InteresesPresuntivosPorHacerPrestamosEnDineroALosSociosDeEstaSociedad"]?.AjustesParaLlegarASaldosFiscales3 || 0);

            // Ingresos - AjustesFiscales - AdicionDeIngresos - InteresesPresuntos

            renContent.Ingresos.AjustesFiscales.AdicionDeIngresos.OtrosIngresosFiscalesYNoIncluidosContablemente.ValorFiscal = (renContent?.Renglon60?.["TotalIngresosNoConstituidosDeRentaNiGananciaOcasionalSaldosFiscalesADiciembre31"] || 0);

            // Costos - MateriasPrimasReventaDeBienesTerminadosYServicios - CostosDeVentasCalculadoPorElSistemaPermanente

            renContent.Costos.MateriasPrimasReventaDeBienesTerminadosYServicios.CostosDeVentasCalculadoPorElSistemaPermanente.ValorContable =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.CostoDeVentasParaComerciantesQueUtilizanSistemaPermanente?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Costos.MateriasPrimasReventaDeBienesTerminadosYServicios.CostosDeVentasCalculadoPorElSistemaPermanente.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.CostoDeVentasParaComerciantesQueUtilizanSistemaPermanente?.AjustesParaLlegarASaldosFiscales1 || 0;

            renContent.Costos.MateriasPrimasReventaDeBienesTerminadosYServicios.CostosDeVentasCalculadoPorElSistemaPermanente.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.CostoDeVentasParaComerciantesQueUtilizanSistemaPermanente?.SaldosFiscalesADiciembre31Parciales || 0;

            //Costos - MateriasPrimasReventaDeBienesTerminadosYServicios - Materias primas (para procesos de producción) - Inventario inicial

            renContent.Costos.MateriasPrimasReventaDeBienesTerminadosYServicios.MateriasPrimasProduccion.InventarioInicial.ValorContable =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.InventarioInicialDeMateriaPrimas?.InventarioInicialDeMateriaPrimas?.SaldosContablesADiciembre31Parciales || 0;
                
            renContent.Costos.MateriasPrimasReventaDeBienesTerminadosYServicios.MateriasPrimasProduccion.InventarioInicial.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.InventarioInicialDeMateriaPrimas?.InventarioInicialDeMateriaPrimas?.AjustesParaLlegarASaldosFiscales3 || 0;

            renContent.Costos.MateriasPrimasReventaDeBienesTerminadosYServicios.MateriasPrimasProduccion.InventarioInicial.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.InventarioInicialDeMateriaPrimas?.InventarioInicialDeMateriaPrimas?.SaldosFiscalesADiciembre31Parciales || 0;    
                
            //Costos - MateriasPrimasReventaDeBienesTerminadosYServicios - Materias primas (para procesos de producción) - compras locales

            renContent.Costos.MateriasPrimasReventaDeBienesTerminadosYServicios.MateriasPrimasProduccion.ComprasLocales.ValorContable =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.InventarioInicialDeMateriaPrimas?.MasComprasLocales?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Costos.MateriasPrimasReventaDeBienesTerminadosYServicios.MateriasPrimasProduccion.ComprasLocales.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.InventarioInicialDeMateriaPrimas?.MasComprasLocales?.AjustesParaLlegarASaldosFiscales3 || 0;

            renContent.Costos.MateriasPrimasReventaDeBienesTerminadosYServicios.MateriasPrimasProduccion.ComprasLocales.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.InventarioInicialDeMateriaPrimas?.MasComprasLocales?.SaldosFiscalesADiciembre31Parciales || 0;

            //Costos - MateriasPrimasReventaDeBienesTerminadosYServicios - Materias primas (para procesos de producción) - Importaciones

            renContent.Costos.MateriasPrimasReventaDeBienesTerminadosYServicios.MateriasPrimasProduccion.Importaciones.ValorContable =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.InventarioInicialDeMateriaPrimas?.MasImportaciones?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Costos.MateriasPrimasReventaDeBienesTerminadosYServicios.MateriasPrimasProduccion.Importaciones.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.InventarioInicialDeMateriaPrimas?.MasImportaciones?.AjustesParaLlegarASaldosFiscales3 || 0;

            renContent.Costos.MateriasPrimasReventaDeBienesTerminadosYServicios.MateriasPrimasProduccion.Importaciones.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.InventarioInicialDeMateriaPrimas?.MasImportaciones?.SaldosFiscalesADiciembre31Parciales || 0;

            //Costos - MateriasPrimasReventaDeBienesTerminadosYServicios - Materias primas (para procesos de producción) - Inventario final

            renContent.Costos.MateriasPrimasReventaDeBienesTerminadosYServicios.MateriasPrimasProduccion.InventarioFinal.ValorContable =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.InventarioInicialDeMateriaPrimas?.MenosInventarioFinalMateriasPrimas?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Costos.MateriasPrimasReventaDeBienesTerminadosYServicios.MateriasPrimasProduccion.InventarioFinal.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.InventarioInicialDeMateriaPrimas?.MenosInventarioFinalMateriasPrimas?.AjustesParaLlegarASaldosFiscales3 || 0;

            renContent.Costos.MateriasPrimasReventaDeBienesTerminadosYServicios.MateriasPrimasProduccion.InventarioFinal.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.InventarioInicialDeMateriaPrimas?.MenosInventarioFinalMateriasPrimas?.SaldosFiscalesADiciembre31Parciales || 0;

            //Costos - MateriasPrimasReventaDeBienesTerminadosYServicios - Costos de los bienes vendidos (para comerciantes por reventa de bienes terminados) - Inventario inicial

            renContent.Costos.MateriasPrimasReventaDeBienesTerminadosYServicios.CostoBienesVendidos.InventarioInicial.ValorContable =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.CostoDeVentasParaComerciasntesQueUtilizanJuegoDeInventarios?.InventarioInicial?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Costos.MateriasPrimasReventaDeBienesTerminadosYServicios.CostoBienesVendidos.InventarioInicial.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.CostoDeVentasParaComerciasntesQueUtilizanJuegoDeInventarios?.InventarioInicial?.AjustesParaLlegarASaldosFiscales3 || 0;

            renContent.Costos.MateriasPrimasReventaDeBienesTerminadosYServicios.CostoBienesVendidos.InventarioInicial.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.CostoDeVentasParaComerciasntesQueUtilizanJuegoDeInventarios?.InventarioInicial?.SaldosFiscalesADiciembre31Parciales || 0;
            
            //Costos - MateriasPrimasReventaDeBienesTerminadosYServicios - Costos de los bienes vendidos (para comerciantes por reventa de bienes terminados) - Compras locales 
            
            renContent.Costos.MateriasPrimasReventaDeBienesTerminadosYServicios.CostoBienesVendidos.ComprasLocales.ValorContable =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.CostoDeVentasParaComerciasntesQueUtilizanJuegoDeInventarios?.MasComprasLocales?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Costos.MateriasPrimasReventaDeBienesTerminadosYServicios.CostoBienesVendidos.ComprasLocales.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.CostoDeVentasParaComerciasntesQueUtilizanJuegoDeInventarios?.MasComprasLocales?.AjustesParaLlegarASaldosFiscales3 || 0;

            renContent.Costos.MateriasPrimasReventaDeBienesTerminadosYServicios.CostoBienesVendidos.ComprasLocales.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.CostoDeVentasParaComerciasntesQueUtilizanJuegoDeInventarios?.MasComprasLocales?.SaldosFiscalesADiciembre31Parciales || 0;

            //Costos - MateriasPrimasReventaDeBienesTerminadosYServicios - Costos de los bienes vendidos (para comerciantes por reventa de bienes terminados) - Importaciones

            renContent.Costos.MateriasPrimasReventaDeBienesTerminadosYServicios.CostoBienesVendidos.Importaciones.ValorContable =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.CostoDeVentasParaComerciasntesQueUtilizanJuegoDeInventarios?.MasImportaciones?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Costos.MateriasPrimasReventaDeBienesTerminadosYServicios.CostoBienesVendidos.Importaciones.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.CostoDeVentasParaComerciasntesQueUtilizanJuegoDeInventarios?.MasImportaciones?.AjustesParaLlegarASaldosFiscales3 || 0;

            renContent.Costos.MateriasPrimasReventaDeBienesTerminadosYServicios.CostoBienesVendidos.Importaciones.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.CostoDeVentasParaComerciasntesQueUtilizanJuegoDeInventarios?.MasImportaciones?.SaldosFiscalesADiciembre31Parciales || 0;

            //Costos - MateriasPrimasReventaDeBienesTerminadosYServicios - Costos de los bienes vendidos (para comerciantes por reventa de bienes terminados) - Inventario Final

            renContent.Costos.MateriasPrimasReventaDeBienesTerminadosYServicios.CostoBienesVendidos.InventarioFinal.ValorContable =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.CostoDeVentasParaComerciasntesQueUtilizanJuegoDeInventarios?.MenosInventarioFinal?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Costos.MateriasPrimasReventaDeBienesTerminadosYServicios.CostoBienesVendidos.InventarioFinal.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.CostoDeVentasParaComerciasntesQueUtilizanJuegoDeInventarios?.MenosInventarioFinal?.AjustesParaLlegarASaldosFiscales3 || 0;

            renContent.Costos.MateriasPrimasReventaDeBienesTerminadosYServicios.CostoBienesVendidos.InventarioFinal.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.CostoDeVentasParaComerciasntesQueUtilizanJuegoDeInventarios?.MenosInventarioFinal?.SaldosFiscalesADiciembre31Parciales || 0;

            // Costos - MateriasPrimasReventaDeBienesTerminadosYServicios - Productos en proceso - Inventario inicial

            renContent.Costos.MateriasPrimasReventaDeBienesTerminadosYServicios.ProductosEnProceso.InventarioInicial.ValorContable =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.InventarioInicialDeTrabajoEnProceso?.SaldosContablesADiciembre31Parciales || 0;


            renContent.Costos.MateriasPrimasReventaDeBienesTerminadosYServicios.ProductosEnProceso.InventarioInicial.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.InventarioInicialDeTrabajoEnProceso?.AjustesParaLlegarASaldosFiscales3 || 0;

            renContent.Costos.MateriasPrimasReventaDeBienesTerminadosYServicios.ProductosEnProceso.InventarioInicial.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.InventarioInicialDeTrabajoEnProceso?.SaldosFiscalesADiciembre31Parciales || 0;

            // Costos - MateriasPrimasReventaDeBienesTerminadosYServicios - Productos en proceso - Inventario final

            renContent.Costos.MateriasPrimasReventaDeBienesTerminadosYServicios.ProductosEnProceso.InventarioFinal.ValorContable =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.AsistenciaTecnica?.MenosInventarioFinalDeTrabajoEnProceso?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Costos.MateriasPrimasReventaDeBienesTerminadosYServicios.ProductosEnProceso.InventarioFinal.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.AsistenciaTecnica?.MenosInventarioFinalDeTrabajoEnProceso?.AjustesParaLlegarASaldosFiscales3 || 0;

            renContent.Costos.MateriasPrimasReventaDeBienesTerminadosYServicios.ProductosEnProceso.InventarioFinal.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.AsistenciaTecnica?.MenosInventarioFinalDeTrabajoEnProceso?.SaldosFiscalesADiciembre31Parciales || 0;
            
            // Costos - MateriasPrimasReventaDeBienesTerminadosYServicios - Producto terminado - Inventario inicial

            renContent.Costos.MateriasPrimasReventaDeBienesTerminadosYServicios.ProductosEnProceso.InventarioInicial.ValorContable =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.AsistenciaTecnica?.MasInventarioInicialDeProductoTerminado?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Costos.MateriasPrimasReventaDeBienesTerminadosYServicios.ProductosEnProceso.InventarioInicial.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.AsistenciaTecnica?.MasInventarioInicialDeProductoTerminado?.AjustesParaLlegarASaldosFiscales3 || 0;

            renContent.Costos.MateriasPrimasReventaDeBienesTerminadosYServicios.ProductosEnProceso.InventarioInicial.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.AsistenciaTecnica?.MasInventarioInicialDeProductoTerminado?.SaldosFiscalesADiciembre31Parciales || 0;

            // Costos - MateriasPrimasReventaDeBienesTerminadosYServicios - Producto terminado - Inventario final
            
            renContent.Costos.MateriasPrimasReventaDeBienesTerminadosYServicios.ProductosEnProceso.InventarioFinal.ValorContable =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.AsistenciaTecnica?.MenosInventarioFinalDeProductoTerminado?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Costos.MateriasPrimasReventaDeBienesTerminadosYServicios.ProductosEnProceso.InventarioFinal.MenorValorFiscalPorReconocimientoExencionesLimitaciones =    
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.AsistenciaTecnica?.MenosInventarioFinalDeProductoTerminado?.AjustesParaLlegarASaldosFiscales3 || 0;

            renContent.Costos.MateriasPrimasReventaDeBienesTerminadosYServicios.ProductosEnProceso.InventarioFinal.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.AsistenciaTecnica?.MenosInventarioFinalDeProductoTerminado?.SaldosFiscalesADiciembre31Parciales || 0;

            //Costos - MateriasPrimasReventaDeBienesTerminadosYServicios - Costos en la prestación de servicios (para prestadores de servicios)

            renContent.Costos.MateriasPrimasReventaDeBienesTerminadosYServicios.CostosEnLaPrestacionDeServicios.ValorContable =
                renContent?.Renglon62?.["6140CostoDeLasActividadesQueFormanLasRentasExentas"]?.CostoDeLasActividadesQueFormanLasRentasExentas?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Costos.MateriasPrimasReventaDeBienesTerminadosYServicios.CostosEnLaPrestacionDeServicios.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon62?.["6140CostoDeLasActividadesQueFormanLasRentasExentas"]?.CostoDeLasActividadesQueFormanLasRentasExentas?.AjustesParaLlegarASaldosFiscales3 || 0;

            renContent.Costos.MateriasPrimasReventaDeBienesTerminadosYServicios.CostosEnLaPrestacionDeServicios.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon62?.["6140CostoDeLasActividadesQueFormanLasRentasExentas"]?.CostoDeLasActividadesQueFormanLasRentasExentas?.SaldosFiscalesADiciembre31Parciales || 0;

            //Costos - ManoObra - DeCortoPlazo

            renContent.Costos.ManoObra.DeCortoPlazo.ValorContable =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.MasCostoDeManoDeObra?.DeCortoPlayzo?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Costos.ManoObra.DeCortoPlazo.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.MasCostoDeManoDeObra?.DeCortoPlayzo?.AjustesParaLlegarASaldosFiscales3 || 0;

            renContent.Costos.ManoObra.DeCortoPlazo.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.MasCostoDeManoDeObra?.DeCortoPlayzo?.AjustesParaLlegarASaldosFiscales1 || 0;

            //Costos - ManoObra - DeLargoPlazo

            renContent.Costos.ManoObra.DeLargoPlazo.ValorContable =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.MasCostoDeManoDeObra?.DeLargoPlayzo?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Costos.ManoObra.DeLargoPlazo.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.MasCostoDeManoDeObra?.DeLargoPlayzo?.AjustesParaLlegarASaldosFiscales3 || 0;

            renContent.Costos.ManoObra.DeLargoPlazo.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.MasCostoDeManoDeObra?.DeLargoPlayzo?.AjustesParaLlegarASaldosFiscales1 || 0;

            //Costos - ManoObra - PorTerminacionDeVinculoLaboral

            renContent.Costos.ManoObra.PorTerminacionDeVinculoLaboral.ValorContable =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.MasCostoDeManoDeObra?.PorTerminacionDelVinculoLaboral?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Costos.ManoObra.PorTerminacionDeVinculoLaboral.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.MasCostoDeManoDeObra?.PorTerminacionDelVinculoLaboral?.AjustesParaLlegarASaldosFiscales3 || 0;

            renContent.Costos.ManoObra.PorTerminacionDeVinculoLaboral.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.MasCostoDeManoDeObra?.PorTerminacionDelVinculoLaboral?.AjustesParaLlegarASaldosFiscales1 || 0;

            //Costos - ManoObra - PostEmpleo

            renContent.Costos.ManoObra.PostEmpleo.ValorContable =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.MasCostoDeManoDeObra?.PostEmpleo?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Costos.ManoObra.PostEmpleo.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.MasCostoDeManoDeObra?.PostEmpleo?.AjustesParaLlegarASaldosFiscales3 || 0;

            renContent.Costos.ManoObra.PostEmpleo.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.MasCostoDeManoDeObra?.PostEmpleo?.AjustesParaLlegarASaldosFiscales1 || 0;

            //Costos - DepresionacionesAmortizacionesYDeterioros - DepreciacionPropiedadesPlantaYEquipo - DelCosto

            renContent.Costos.DepresionacionesAmortizacionesYDeterioros.DepreciacionPropiedadesPlantaYEquipo.DelCosto.ValorContable =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.MasCostosIndirectosDeFabricacion?.DepreciacionPropiedadesPlantaYEquipo?.DelCosto?.SaldosContablesADiciembre31Parciales || 0;
            
            renContent.Costos.DepresionacionesAmortizacionesYDeterioros.DepreciacionPropiedadesPlantaYEquipo.DelCosto.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.MasCostosIndirectosDeFabricacion?.DepreciacionPropiedadesPlantaYEquipo?.DelCosto?.AjustesParaLlegarASaldosFiscales3 || 0;

            renContent.Costos.DepresionacionesAmortizacionesYDeterioros.DepreciacionPropiedadesPlantaYEquipo.DelCosto.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.MasCostosIndirectosDeFabricacion?.DepreciacionPropiedadesPlantaYEquipo?.DelCosto?.AjustesParaLlegarASaldosFiscales1 || 0;

            //Costos - DepresionacionesAmortizacionesYDeterioros - DepreciacionPropiedadesPlantaYEquipo - DelAjusteAcumunladoPorAjusteAculudadoPorRevaluacionesOReExpresiones

            renContent.Costos.DepresionacionesAmortizacionesYDeterioros.DepreciacionPropiedadesPlantaYEquipo.DelAjusteAcumunladoPorAjusteAculudadoPorRevaluacionesOReExpresiones.ValorContable =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.MasCostosIndirectosDeFabricacion?.DepreciacionPropiedadesPlantaYEquipo?.DelAjusteAcumuladoPorRevaluacionesOReExpresiones?.SaldosContablesADiciembre31Parciales || 0;

            //Costos - DepresionacionesAmortizacionesYDeterioros - DepreciacionPropiedadesDeInversion - DelCosto

            renContent.Costos.DepresionacionesAmortizacionesYDeterioros.DepreciacionPropiedadesDeInversion.DelCosto.ValorContable =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.MasCostosIndirectosDeFabricacion?.DepreciacionDePropiedadesDeInversion?.Cost?.SaldosContablesADiciembre31Parciales || 0;
            
            renContent.Costos.DepresionacionesAmortizacionesYDeterioros.DepreciacionPropiedadesDeInversion.DelCosto.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.MasCostosIndirectosDeFabricacion?.DepreciacionDePropiedadesDeInversion?.Cost?.AjustesParaLlegarASaldosFiscales3 || 0;

            renContent.Costos.DepresionacionesAmortizacionesYDeterioros.DepreciacionPropiedadesDeInversion.DelCosto.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.MasCostosIndirectosDeFabricacion?.DepreciacionDePropiedadesDeInversion?.Cost?.AjustesParaLlegarASaldosFiscales1 || 0;

            //Costos - DepresionacionesAmortizacionesYDeterioros - DepreciacionPropiedadesDeInversion - DelAjusteAcumunladoPorAjusteAculudadoPorRevaluacionesOReExpresiones

            renContent.Costos.DepresionacionesAmortizacionesYDeterioros.DepreciacionPropiedadesDeInversion.DelAjusteAcumunladoPorAjusteAculudadoPorRevaluacionesOReExpresiones.ValorContable =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.MasCostosIndirectosDeFabricacion?.DepreciacionDePropiedadesDeInversion?.AjusAcum?.SaldosContablesADiciembre31Parciales || 0;

            //Costos - DepresionacionesAmortizacionesYDeterioros - DepreciacionActivosBiologicos - DelCosto

            renContent.Costos.DepresionacionesAmortizacionesYDeterioros.DepreciacionActivosBiologicos.DelCosto.ValorContable =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.MasCostosIndirectosDeFabricacion?.DeprActBio?.DelCosto?.SaldosContablesADiciembre31Parciales || 0;
            
            renContent.Costos.DepresionacionesAmortizacionesYDeterioros.DepreciacionActivosBiologicos.Cost.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.MasCostosIndirectosDeFabricacion?.DeprActBio?.DelCosto?.AjustesParaLlegarASaldosFiscales3 || 0;

            renContent.Costos.DepresionacionesAmortizacionesYDeterioros.DepreciacionActivosBiologicos.Cost.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.MasCostosIndirectosDeFabricacion?.DeprActBio?.DelCosto?.AjustesParaLlegarASaldosFiscales1 || 0;

            //Costos - DepresionacionesAmortizacionesYDeterioros - DepreciacionActivosBiologicos - DelAjusteAcumunladoPorAjusteAculudadoPorRevaluacionesOReExpresiones

            renContent.Costos.DepresionacionesAmortizacionesYDeterioros.DepreciacionActivosBiologicos.DelAjusteAcumunladoPorAjusteAculudadoPorRevaluacionesOReExpresiones.ValorContable =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.MasCostosIndirectosDeFabricacion?.DeprActBio?.DelAjusteAcumuladoPorRevaluacionesOReExpresiones?.SaldosContablesADiciembre31Parciales || 0;

            //Costos - DepresionacionesAmortizacionesYDeterioros - AmortizacionActivosIntangibles - DelCosto

            renContent.Costos.DepresionacionesAmortizacionesYDeterioros.AmortizacionActivosIntangibles.DelCosto.ValorContable =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.MasCostosIndirectosDeFabricacion?.AmortizacionDeActivosIntangibles?.DelCosto?.SaldosContablesADiciembre31Parciales || 0;
            
            renContent.Costos.DepresionacionesAmortizacionesYDeterioros.AmortizacionActivosIntangibles.DelCosto.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.MasCostosIndirectosDeFabricacion?.AmortizacionDeActivosIntangibles?.DelCosto?.AjustesParaLlegarASaldosFiscales3 || 0;

            renContent.Costos.DepresionacionesAmortizacionesYDeterioros.AmortizacionActivosIntangibles.DelCosto.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.MasCostosIndirectosDeFabricacion?.AmortizacionDeActivosIntangibles?.DelCosto?.AjustesParaLlegarASaldosFiscales1 || 0;

            //Costos - DepresionacionesAmortizacionesYDeterioros - AmortizacionActivosIntangibles - DelAjusteAcumunladoPorAjusteAculudadoPorRevaluacionesOReExpresiones

            renContent.Costos.DepresionacionesAmortizacionesYDeterioros.AmortizacionActivosIntangibles.DelAjusteAcumunladoPorAjusteAculudadoPorRevaluacionesOReExpresiones.ValorContable =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.MasCostosIndirectosDeFabricacion?.AmortizacionDeActivosIntangibles?.DelAjusteAcumuladoPorRevaluacionesOReExpresiones?.SaldosContablesADiciembre31Parciales || 0;

            //Costos - DepresionacionesAmortizacionesYDeterioros - OtrasDepreciacionesYAmortizaciones - DelCosto

            renContent.Costos.DepresionacionesAmortizacionesYDeterioros.OtrasDepreciacionesYAmortizaciones.DelCosto.ValorContable =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.MasCostosIndirectosDeFabricacion?.OtrasDepreciacionesYAmortizaciones?.DelCosto?.SaldosContablesADiciembre31Parciales || 0;
            
            renContent.Costos.DepresionacionesAmortizacionesYDeterioros.OtrasDepreciacionesYAmortizaciones.DelCosto.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.MasCostosIndirectosDeFabricacion?.OtrasDepreciacionesYAmortizaciones?.DelCosto?.AjustesParaLlegarASaldosFiscales3 || 0;

            renContent.Costos.DepresionacionesAmortizacionesYDeterioros.OtrasDepreciacionesYAmortizaciones.DelCosto.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.MasCostosIndirectosDeFabricacion?.OtrasDepreciacionesYAmortizaciones?.DelCosto?.AjustesParaLlegarASaldosFiscales1 || 0;

            //Costos - DepresionacionesAmortizacionesYDeterioros - OtrasDepreciacionesYAmortizaciones - DelAjusteAcumunladoPorAjusteAculudadoPorRevaluacionesOReExpresiones

            renContent.Costos.DepresionacionesAmortizacionesYDeterioros.OtrasDepreciacionesYAmortizaciones.DelAjusteAcumunladoPorAjusteAculudadoPorRevaluacionesOReExpresiones.ValorContable =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.MasCostosIndirectosDeFabricacion?.OtrasDepreciacionesYAmortizaciones?.DelAjusteAcumuladoPorRevaluacionesOReExpresiones?.SaldosContablesADiciembre31Parciales || 0;

            //Costos - DepresionacionesAmortizacionesYDeterioros - DeterioroDelValorDeLosActivos - Inventarios

            renContent.Costos.DepresionacionesAmortizacionesYDeterioros.DeterioroDelValorDeLosActivos.Inventarios.ValorContable =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.Deterioros?.DeInventarios?.SaldosContablesADiciembre31Parciales || 0;

            //Costos - DepresionacionesAmortizacionesYDeterioros - DeterioroDelValorDeLosActivos - PropiedadesPlantaYEquipo

            renContent.Costos.DepresionacionesAmortizacionesYDeterioros.DeterioroDelValorDeLosActivos.PropiedadesPlantaYEquipo.ValorContable =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.Deterioros?.DePropiedadesPlantaYEquipo?.SaldosContablesADiciembre31Parciales || 0;

            //Costos - DepresionacionesAmortizacionesYDeterioros - DeterioroDelValorDeLosActivos - ActivosIntangibles

            renContent.Costos.DepresionacionesAmortizacionesYDeterioros.DeterioroDelValorDeLosActivos.ActivosIntangibles.ValorContable =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.Deterioros?.DeActivosIntangibles?.SaldosContablesADiciembre31Parciales || 0;

            //Costos - DepresionacionesAmortizacionesYDeterioros - DeterioroDelValorDeLosActivos - ActivosDeExploracionYEvaluacionDeRecursosMinerales

            renContent.Costos.DepresionacionesAmortizacionesYDeterioros.DeterioroDelValorDeLosActivos.ActivosDeExploracionYEvaluacionDeRecursosMinerales.ValorContable =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.Deterioros?.DeActivosDeExploracionYEvaluacionDeRecursosMinerales?.SaldosContablesADiciembre31Parciales || 0;

            //Costos - DepresionacionesAmortizacionesYDeterioros - DeterioroDelValorDeLosActivos - PropiedadesDeInversionMedidasAlModeloDeCosto

            renContent.Costos.DepresionacionesAmortizacionesYDeterioros.DeterioroDelValorDeLosActivos.PropiedadesDeInversionMedidasAlModeloDeCosto.ValorContable =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.Deterioros?.DePropiedadesDeInversionMedidasAlModeloDeCosto?.SaldosContablesADiciembre31Parciales || 0;

            //Costos - DepresionacionesAmortizacionesYDeterioros - DeterioroDelValorDeLosActivos - ActivosNoCorrientesMantenidosParaLaVentaDistribuirALosPropietarios

            renContent.Costos.DepresionacionesAmortizacionesYDeterioros.DeterioroDelValorDeLosActivos.ActivosNoCorrientesMantenidosParaLaVentaDistribuirALosPropietarios.ValorContable =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.Deterioros?.DeActivosNoCorrientesMantenidosParaLaVentaDistribuirALosPropietarios?.SaldosContablesADiciembre31Parciales || 0;

            //Costos - DepresionacionesAmortizacionesYDeterioros - DeterioroDelValorDeLosActivos - ActivosBiologicosMedidosAlModeloDeCosto

            renContent.Costos.DepresionacionesAmortizacionesYDeterioros.DeterioroDelValorDeLosActivos.ActivosBiologicosMedidosAlModeloDeCosto.ValorContable =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.Deterioros?.DeActivosBiologicosMedidosAlModeloDeCosto?.SaldosContablesADiciembre31Parciales || 0;

            //Costos - DepresionacionesAmortizacionesYDeterioros - DeterioroDelValorDeLosActivos - BienesDeArteYCulturaMedidosAlModeloDeCosto

            renContent.Costos.DepresionacionesAmortizacionesYDeterioros.DeterioroDelValorDeLosActivos.BienesDeArteYCulturaMedidosAlModeloDeCosto.ValorContable =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.Deterioros?.DeBienesDeArteYCulturaMedidosAlModeloDeCosto?.SaldosContablesADiciembre31Parciales || 0;

            //Costos - DepresionacionesAmortizacionesYDeterioros - DeterioroDelValorDeLosActivos - ActivosFinancierosDistintosACarteraDeCreditoYOperacionesDeLeasing

            renContent.Costos.DepresionacionesAmortizacionesYDeterioros.DeterioroDelValorDeLosActivos.ActivosFinancierosDistintosACarteraDeCreditoYOperacionesDeLeasing.ValorContable =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.Deterioros?.DeActivosFinancierosDiferentesACarteraDeCredito?.SaldosContablesADiciembre31Parciales || 0;

            //Costos - DepresionacionesAmortizacionesYDeterioros - DeterioroDelValorDeLosActivos - CarteraDeCreditoYOperacionesDeLeasing

            renContent.Costos.DepresionacionesAmortizacionesYDeterioros.DeterioroDelValorDeLosActivos.CarteraDeCreditoYOperacionesDeLeasing.ValorContable =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.Deterioros?.DeCarteraDeCreditoYOperacionesDeLeasing?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Costos.DepresionacionesAmortizacionesYDeterioros.DeterioroDelValorDeLosActivos.CarteraDeCreditoYOperacionesDeLeasing.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.Deterioros?.DeCarteraDeCreditoYOperacionesDeLeasing?.AjustesParaLlegarASaldosFiscales3 || 0;

            renContent.Costos.DepresionacionesAmortizacionesYDeterioros.DeterioroDelValorDeLosActivos.CarteraDeCreditoYOperacionesDeLeasing.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.Deterioros?.DeCarteraDeCreditoYOperacionesDeLeasing?.AjustesParaLlegarASaldosFiscales1 || 0;

            //Costos - DepresionacionesAmortizacionesYDeterioros - DeterioroDelValorDeLosActivos - OtrasInversionesMedidasAlCostoOPorElMetodoDeLaParticipacion

            renContent.Costos.DepresionacionesAmortizacionesYDeterioros.DeterioroDelValorDeLosActivos.OtrasInversionesMedidasAlCostoOPorElMetodoDeLaParticipacion.ValorContable =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.Deterioros?.DeOtrasInversionesMedidasAlCostoOPorElMetodoDeLaParticipacion?.SaldosContablesADiciembre31Parciales || 0;

            //Costos - DepresionacionesAmortizacionesYDeterioros - DeterioroDelValorDeLosActivos - DerechosDeUsoEnArrendamientosOperativosNIIF16

            renContent.Costos.DepresionacionesAmortizacionesYDeterioros.DeterioroDelValorDeLosActivos.DerechosDeUsoEnArrendamientosOperativosNIIF16.ValorContable =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.Deterioros?.DeDerechosDeUsoEnArrendamientosOperativos?.SaldosContablesADiciembre31Parciales || 0;

            //Costos - DepresionacionesAmortizacionesYDeterioros - DeterioroDelValorDeLosActivos - OtrosDeteriroros

            renContent.Costos.DepresionacionesAmortizacionesYDeterioros.DeterioroDelValorDeLosActivos.OtrosDeteriroros.ValorContable =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.Deterioros?.DeOtrosActivos?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Costos.DepresionacionesAmortizacionesYDeterioros.DeterioroDelValorDeLosActivos.OtrosDeteriroros.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.Deterioros?.DeOtrosActivos?.AjustesParaLlegarASaldosFiscales3 || 0;

            renContent.Costos.DepresionacionesAmortizacionesYDeterioros.DeterioroDelValorDeLosActivos.OtrosDeteriroros.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.Deterioros?.DeOtrosActivos?.AjustesParaLlegarASaldosFiscales1 || 0;

            //Costos - OtrosCostos - Arrendamientos

            renContent.Costos.OtrosCostos.Arrendamientos.ValorContable =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.OtrosCostos?.Arrendamientos?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Costos.OtrosCostos.Arrendamientos.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.OtrosCostos?.Arrendamientos?.AjustesParaLlegarASaldosFiscales3 || 0;

            renContent.Costos.OtrosCostos.Arrendamientos.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.OtrosCostos?.Arrendamientos?.AjustesParaLlegarASaldosFiscales1 || 0;

            //Costos - OtrosCostos - Seguros

            renContent.Costos.OtrosCostos.Seguros.ValorContable =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.OtrosCostos?.Seguros?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Costos.OtrosCostos.Seguros.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.OtrosCostos?.Seguros?.AjustesParaLlegarASaldosFiscales3 || 0;

            renContent.Costos.OtrosCostos.Seguros.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.OtrosCostos?.Seguros?.AjustesParaLlegarASaldosFiscales1 || 0;

            //Costos - OtrosCostos - Servicios

            renContent.Costos.OtrosCostos.Servicios.ValorContable =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.OtrosCostos?.Servicios?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Costos.OtrosCostos.Servicios.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.OtrosCostos?.Servicios?.AjustesParaLlegarASaldosFiscales3 || 0;

            renContent.Costos.OtrosCostos.Servicios.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.OtrosCostos?.Servicios?.AjustesParaLlegarASaldosFiscales1 || 0;

            //Costos - OtrosCostos - Honorarios

            renContent.Costos.OtrosCostos.Honorarios.ValorContable =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.OtrosCostos?.Honorarios?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Costos.OtrosCostos.Honorarios.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.OtrosCostos?.Honorarios?.AjustesParaLlegarASaldosFiscales3 || 0;

            renContent.Costos.OtrosCostos.Honorarios.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.OtrosCostos?.Honorarios?.AjustesParaLlegarASaldosFiscales1 || 0;

            //Costos - OtrosCostos - ServiciosTecnicos - VinculadosEconomicos

            renContent.Costos.OtrosCostos.ServiciosTecnicos.VinculadosEconomicos.ValorContable =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.ServiciosTecnicos?.ConVinculadosEconomicos?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Costos.OtrosCostos.ServiciosTecnicos.VinculadosEconomicos.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.ServiciosTecnicos?.ConVinculadosEconomicos?.AjustesParaLlegarASaldosFiscales3 || 0;

            renContent.Costos.OtrosCostos.ServiciosTecnicos.VinculadosEconomicos.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.ServiciosTecnicos?.ConVinculadosEconomicos?.AjustesParaLlegarASaldosFiscales1 || 0;

            //Costos - OtrosCostos - ServiciosTecnicos - JurisdiccionesNoCooperantesDeBajaONulaImposicionYRegimenesTributariosPreferenciales

            renContent.Costos.OtrosCostos.ServiciosTecnicos.JurisdiccionesNoCooperantesDeBajaONulaImposicionYRegimenesTributariosPreferenciales.ValorContable =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.ServiciosTecnicos?.ConJurisdiccionesNoCooperantesDeBajaONulaImposicion?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Costos.OtrosCostos.ServiciosTecnicos.JurisdiccionesNoCooperantesDeBajaONulaImposicionYRegimenesTributariosPreferenciales.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.ServiciosTecnicos?.ConJurisdiccionesNoCooperantesDeBajaONulaImposicion?.AjustesParaLlegarASaldosFiscales3 || 0;

            renContent.Costos.OtrosCostos.ServiciosTecnicos.JurisdiccionesNoCooperantesDeBajaONulaImposicionYRegimenesTributariosPreferenciales.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.ServiciosTecnicos?.ConJurisdiccionesNoCooperantesDeBajaONulaImposicion?.AjustesParaLlegarASaldosFiscales1 || 0;

            //Costos - OtrosCostos - ServiciosTecnicos - NoVinculados

            renContent.Costos.OtrosCostos.ServiciosTecnicos.NoVinculados.ValorContable =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.ServiciosTecnicos?.ConNoVinculados?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Costos.OtrosCostos.ServiciosTecnicos.NoVinculados.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.ServiciosTecnicos?.ConNoVinculados?.AjustesParaLlegarASaldosFiscales3 || 0;

            renContent.Costos.OtrosCostos.ServiciosTecnicos.NoVinculados.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.ServiciosTecnicos?.ConNoVinculados?.AjustesParaLlegarASaldosFiscales1 || 0;

            //Costos - OtrosCostos - AsistenciaTecnica - VinculadosEconomicos

            renContent.Costos.OtrosCostos.AsistenciaTecnica.VinculadosEconomicos.ValorContable =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.AsistenciaTecnica?.ConVinculadosEconomicos?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Costos.OtrosCostos.AsistenciaTecnica.VinculadosEconomicos.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.AsistenciaTecnica?.ConVinculadosEconomicos?.AjustesParaLlegarASaldosFiscales3 || 0;

            renContent.Costos.OtrosCostos.AsistenciaTecnica.VinculadosEconomicos.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.AsistenciaTecnica?.ConVinculadosEconomicos?.AjustesParaLlegarASaldosFiscales1 || 0;

            //Costos - OtrosCostos - AsistenciaTecnica - JurisdiccionesNoCooperantesDeBajaONulaImposicionYRegimenesTributariosPreferenciales

            renContent.Costos.OtrosCostos.AsistenciaTecnica.JurisdiccionesNoCooperantesDeBajaONulaImposicionYRegimenesTributariosPreferenciales.ValorContable =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.AsistenciaTecnica?.ConJurisdiccionesNoCooperantesDeBajaONulaImposicion?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Costos.OtrosCostos.AsistenciaTecnica.JurisdiccionesNoCooperantesDeBajaONulaImposicionYRegimenesTributariosPreferenciales.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.AsistenciaTecnica?.ConJurisdiccionesNoCooperantesDeBajaONulaImposicion?.AjustesParaLlegarASaldosFiscales3 || 0;

            renContent.Costos.OtrosCostos.AsistenciaTecnica.JurisdiccionesNoCooperantesDeBajaONulaImposicionYRegimenesTributariosPreferenciales.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.AsistenciaTecnica?.ConJurisdiccionesNoCooperantesDeBajaONulaImposicion?.AjustesParaLlegarASaldosFiscales1 || 0;
            
            //Costos - OtrosCostos - AsistenciaTecnica - NoVinculados

            renContent.Costos.OtrosCostos.AsistenciaTecnica.NoVinculados.ValorContable =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.AsistenciaTecnica?.ConNoVinculados?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Costos.OtrosCostos.AsistenciaTecnica.NoVinculados.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.AsistenciaTecnica?.ConNoVinculados?.AjustesParaLlegarASaldosFiscales3 || 0;

            renContent.Costos.OtrosCostos.AsistenciaTecnica.NoVinculados.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.AsistenciaTecnica?.ConNoVinculados?.AjustesParaLlegarASaldosFiscales1 || 0;

            //Costos - OtrosCostos - OtrosConceptosReconocidosComoCostosEnElEstadoDeResultados

            renContent.Costos.OtrosCostos.OtrosConceptosReconocidosComoCostosEnElEstadoDeResultados.ValorContable =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.AsistenciaTecnica?.Otros?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Costos.OtrosCostos.OtrosConceptosReconocidosComoCostosEnElEstadoDeResultados.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.AsistenciaTecnica?.Otros?.AjustesParaLlegarASaldosFiscales3 || 0;

            renContent.Costos.OtrosCostos.OtrosConceptosReconocidosComoCostosEnElEstadoDeResultados.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.AsistenciaTecnica?.Otros?.AjustesParaLlegarASaldosFiscales1 || 0;

            //Costos - OtrosCostos - OtrosCostosFiscalesNoReconocidosContablemente

            renContent.Costos.OtrosCostos.OtrosCostosFiscalesNoReconocidosContablemente.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon62?.["6140CostoDeLasActividadesQueFormanLasRentasExentas"]?.CostoFiscalDeActivosFijosOBiologicosVendidosYPoseidosMenosDeDosAnios?.SaldosFiscalesADiciembre31Parciales || 0;

            //Gastos - DeAdministracion - ManoDeObra - DeCortoPlazo

            renContent.Gastos.DeAdministracion.ManoDeObra.DeCortoPlazo.ValorContable =
                (renContent?.Renglon63?.["5105BeneficiosAEmpleadosDeCortoPlayzo"]?.SalariosYOtros?.SaldosContablesADiciembre31Parciales || 0) + (renContent?.Renglon63?.["5105BeneficiosAEmpleadosDeCortoPlayzo"]?.AportesAEPS?.SaldosContablesADiciembre31Parciales || 0) + (renContent?.Renglon63?.["5105BeneficiosAEmpleadosDeCortoPlayzo"]?.AportesAARL?.SaldosContablesADiciembre31Parciales || 0) + (renContent?.Renglon63?.["5105BeneficiosAEmpleadosDeCortoPlayzo"]?.AportesAFondosDePensiones?.SaldosContablesADiciembre31Parciales || 0) + (renContent?.Renglon63?.["5105BeneficiosAEmpleadosDeCortoPlayzo"]?.AportesAlSENA?.SaldosContablesADiciembre31Parciales || 0) + (renContent?.Renglon63?.["5105BeneficiosAEmpleadosDeCortoPlayzo"]?.AportesAlICBF?.SaldosContablesADiciembre31Parciales || 0) + (renContent?.Renglon63?.["5105BeneficiosAEmpleadosDeCortoPlayzo"]?.AportesACajasDeCompensacion?.SaldosContablesADiciembre31Parciales || 0);

            renContent.Gastos.DeAdministracion.ManoDeObra.DeCortoPlazo.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                (renContent?.Renglon63?.["5105BeneficiosAEmpleadosDeCortoPlayzo"]?.SalariosYOtros?.AjustesParaLlegarASaldosFiscales3 || 0) + (renContent?.Renglon63?.["5105BeneficiosAEmpleadosDeCortoPlayzo"]?.AportesAEPS?.AjustesParaLlegarASaldosFiscales3 || 0) + (renContent?.Renglon63?.["5105BeneficiosAEmpleadosDeCortoPlayzo"]?.AportesAARL?.AjustesParaLlegarASaldosFiscales3 || 0) + (renContent?.Renglon63?.["5105BeneficiosAEmpleadosDeCortoPlayzo"]?.AportesAFondosDePensiones?.AjustesParaLlegarASaldosFiscales3 || 0) + (renContent?.Renglon63?.["5105BeneficiosAEmpleadosDeCortoPlayzo"]?.AportesAlSENA?.AjustesParaLlegarASaldosFiscales3 || 0) + (renContent?.Renglon63?.["5105BeneficiosAEmpleadosDeCortoPlayzo"]?.AportesAlICBF?.AjustesParaLlegarASaldosFiscales3 || 0) + (renContent?.Renglon63?.["5105BeneficiosAEmpleadosDeCortoPlayzo"]?.AportesACajasDeCompensacion?.AjustesParaLlegarASaldosFiscales3 || 0);

            renContent.Gastos.DeAdministracion.ManoDeObra.DeCortoPlazo.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                (renContent?.Renglon63?.["5105BeneficiosAEmpleadosDeCortoPlayzo"]?.SalariosYOtros?.AjustesParaLlegarASaldosFiscales1 || 0) + (renContent?.Renglon63?.["5105BeneficiosAEmpleadosDeCortoPlayzo"]?.AportesAEPS?.AjustesParaLlegarASaldosFiscales1 || 0) + (renContent?.Renglon63?.["5105BeneficiosAEmpleadosDeCortoPlayzo"]?.AportesAARL?.AjustesParaLlegarASaldosFiscales1 || 0) + (renContent?.Renglon63?.["5105BeneficiosAEmpleadosDeCortoPlayzo"]?.AportesAFondosDePensiones?.AjustesParaLlegarASaldosFiscales1 || 0) + (renContent?.Renglon63?.["5105BeneficiosAEmpleadosDeCortoPlayzo"]?.AportesAlSENA?.AjustesParaLlegarASaldosFiscales1 || 0) + (renContent?.Renglon63?.["5105BeneficiosAEmpleadosDeCortoPlayzo"]?.AportesAlICBF?.AjustesParaLlegarASaldosFiscales1 || 0) + (renContent?.Renglon63?.["5105BeneficiosAEmpleadosDeCortoPlayzo"]?.AportesACajasDeCompensacion?.AjustesParaLlegarASaldosFiscales1 || 0);

            //Gastos - DeAdministracion - OtrosGastosDeAdministracion - ImpuestosDistintosAlImpuestosDeRentaYComplementarios

            renContent.Gastos.DeAdministracion.OtrosGastosDeAdministracion.ImpuestosDistintosAlImpuestosDeRentaYComplementarios.ValorContable =
                renContent?.Renglon63?.["5115ImpuestosAlPatrimonioIndustriaYComercio"]?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Gastos.DeAdministracion.OtrosGastosDeAdministracion.ImpuestosDistintosAlImpuestosDeRentaYComplementarios.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon63?.["5115ImpuestosAlPatrimonioIndustriaYComercio"]?.AjustesParaLlegarASaldosFiscales3 || 0;

            renContent.Gastos.DeAdministracion.OtrosGastosDeAdministracion.ImpuestosDistintosAlImpuestosDeRentaYComplementarios.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon63?.["5115ImpuestosAlPatrimonioIndustriaYComercio"]?.AjustesParaLlegarASaldosFiscales1 || 0;

            //Gastos - DeAdministracion - OtrosGastosDeAdministracion - ArrendamientosOperativos

            renContent.Gastos.DeAdministracion.OtrosGastosDeAdministracion.ArrendamientosOperativos.ValorContable =
                renContent?.Renglon63?.["5120Arrendamientos"]?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Gastos.DeAdministracion.OtrosGastosDeAdministracion.ArrendamientosOperativos.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon63?.["5120Arrendamientos"]?.AjustesParaLlegarASaldosFiscales3 || 0;

            renContent.Gastos.DeAdministracion.OtrosGastosDeAdministracion.ArrendamientosOperativos.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon63?.["5120Arrendamientos"]?.AjustesParaLlegarASaldosFiscales1 || 0;

            //Gastos - DeAdministracion - OtrosGastosDeAdministracion - ContribucionesYAfiliaciones

            renContent.Gastos.DeAdministracion.OtrosGastosDeAdministracion.ContribucionesYAfiliaciones.ValorContable =
                renContent?.Renglon63?.["5125Contribuciones"]?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Gastos.DeAdministracion.OtrosGastosDeAdministracion.ContribucionesYAfiliaciones.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon63?.["5125Contribuciones"]?.AjustesParaLlegarASaldosFiscales3 || 0;

            renContent.Gastos.DeAdministracion.OtrosGastosDeAdministracion.ContribucionesYAfiliaciones.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon63?.["5125Contribuciones"]?.AjustesParaLlegarASaldosFiscales1 || 0;

            //Gastos - DeAdministracion - OtrosGastosDeAdministracion - Honorarios

            renContent.Gastos.DeAdministracion.OtrosGastosDeAdministracion.Honorarios.ValorContable =
                renContent?.Renglon63?.["5110Honorarios"]?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Gastos.DeAdministracion.OtrosGastosDeAdministracion.Honorarios.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon63?.["5110Honorarios"]?.AjustesParaLlegarASaldosFiscales3 || 0;

            renContent.Gastos.DeAdministracion.OtrosGastosDeAdministracion.Honorarios.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon63?.["5110Honorarios"]?.AjustesParaLlegarASaldosFiscales1 || 0;

            //Gastos - DeAdministracion - OtrosGastosDeAdministracion - Seguros

            renContent.Gastos.DeAdministracion.OtrosGastosDeAdministracion.Seguros.ValorContable =
                renContent?.Renglon63?.["5130Seguros"]?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Gastos.DeAdministracion.OtrosGastosDeAdministracion.Seguros.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon63?.["5130Seguros"]?.AjustesParaLlegarASaldosFiscales3 || 0;

            renContent.Gastos.DeAdministracion.OtrosGastosDeAdministracion.Seguros.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon63?.["5130Seguros"]?.AjustesParaLlegarASaldosFiscales1 || 0;

            //Gastos - DeAdministracion - OtrosGastosDeAdministracion - ServiciosAdministrativos - VinculadosEconomicos

            renContent.Gastos.DeAdministracion.OtrosGastosDeAdministracion.ServiciosAdministrativos.VinculadosEconomicos.ValorContable =
                renContent?.Renglon63?.["5135Servicios"]?.ServiciosAdministrativosConVinculadosEconomicos?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Gastos.DeAdministracion.OtrosGastosDeAdministracion.ServiciosAdministrativos.VinculadosEconomicos.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon63?.["5135Servicios"]?.ServiciosAdministrativosConVinculadosEconomicos?.AjustesParaLlegarASaldosFiscales3 || 0;

            renContent.Gastos.DeAdministracion.OtrosGastosDeAdministracion.ServiciosAdministrativos.VinculadosEconomicos.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon63?.["5135Servicios"]?.ServiciosAdministrativosConVinculadosEconomicos?.AjustesParaLlegarASaldosFiscales1 || 0;

            //Gastos - DeAdministracion - OtrosGastosDeAdministracion - ServiciosAdministrativos - VinculadosEconomicos

            renContent.Gastos.DeAdministracion.OtrosGastosDeAdministracion.ServiciosAdministrativos.VinculadosEconomicos.ValorContable =
                renContent?.Renglon63?.["5135Servicios"]?.ServiciosAdministrativosConVinculadosEconomicos?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Gastos.DeAdministracion.OtrosGastosDeAdministracion.ServiciosAdministrativos.VinculadosEconomicos.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon63?.["5135Servicios"]?.ServiciosAdministrativosConVinculadosEconomicos?.AjustesParaLlegarASaldosFiscales3 || 0;

            renContent.Gastos.DeAdministracion.OtrosGastosDeAdministracion.ServiciosAdministrativos.VinculadosEconomicos.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon63?.["5135Servicios"]?.ServiciosAdministrativosConVinculadosEconomicos?.AjustesParaLlegarASaldosFiscales1 || 0;

            //Gastos - DeAdministracion - OtrosGastosDeAdministracion - ServiciosAdministrativos - JurisdiccionesNoCooperantesBajaNulaImposicionDeBajaONulaImposicionYRegimenesTributariosPreferenciales

            renContent.Gastos.DeAdministracion.OtrosGastosDeAdministracion.ServiciosAdministrativos.JurisdiccionesNoCooperantesBajaNulaImposicionDeBajaONulaImposicionYRegimenesTributariosPreferenciales.ValorContable =
                renContent?.Renglon63?.["5135Servicios"]?.ServiciosAdministrativosConTercerosUbicadosEnJurisdiccionesNoCooperantes?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Gastos.DeAdministracion.OtrosGastosDeAdministracion.ServiciosAdministrativos.JurisdiccionesNoCooperantesBajaNulaImposicionDeBajaONulaImposicionYRegimenesTributariosPreferenciales.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon63?.["5135Servicios"]?.ServiciosAdministrativosConTercerosUbicadosEnJurisdiccionesNoCooperantes?.AjustesParaLlegarASaldosFiscales3 || 0;

            renContent.Gastos.DeAdministracion.OtrosGastosDeAdministracion.ServiciosAdministrativos.JurisdiccionesNoCooperantesBajaNulaImposicionDeBajaONulaImposicionYRegimenesTributariosPreferenciales.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon63?.["5135Servicios"]?.ServiciosAdministrativosConTercerosUbicadosEnJurisdiccionesNoCooperantes?.AjustesParaLlegarASaldosFiscales1 || 0;

            //Gastos - DeAdministracion - OtrosGastosDeAdministracion - ServiciosAdministrativos - NoVinculados

            renContent.Gastos.DeAdministracion.OtrosGastosDeAdministracion.ServiciosAdministrativos.NoVinculados.ValorContable =
                renContent?.Renglon63?.["5135Servicios"]?.ServiciosAdministrativosConNoVinculados?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Gastos.DeAdministracion.OtrosGastosDeAdministracion.ServiciosAdministrativos.NoVinculados.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon63?.["5135Servicios"]?.ServiciosAdministrativosConNoVinculados?.AjustesParaLlegarASaldosFiscales3 || 0;

            renContent.Gastos.DeAdministracion.OtrosGastosDeAdministracion.ServiciosAdministrativos.NoVinculados.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon63?.["5135Servicios"]?.ServiciosAdministrativosConNoVinculados?.AjustesParaLlegarASaldosFiscales1 || 0;

            //Gastos - DeAdministracion - OtrosGastosDeAdministracion - Regalias - VinculadosEconomicos

            renContent.Gastos.DeAdministracion.OtrosGastosDeAdministracion.Regalias.VinculadosEconomicos.ValorContable =
                renContent?.Renglon63?.["5136Regalias"]?.ConVinculadosEconomicos?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Gastos.DeAdministracion.OtrosGastosDeAdministracion.Regalias.VinculadosEconomicos.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon63?.["5136Regalias"]?.ConVinculadosEconomicos?.AjustesParaLlegarASaldosFiscales3 || 0;

            renContent.Gastos.DeAdministracion.OtrosGastosDeAdministracion.Regalias.VinculadosEconomicos.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon63?.["5136Regalias"]?.ConVinculadosEconomicos?.AjustesParaLlegarASaldosFiscales1 || 0;

            //Gastos - DeAdministracion - OtrosGastosDeAdministracion - Regalias - JurisdiccionesNoCooperantesBajaNulaImposicionDeBajaONulaImposicionYRegimenesTributariosPreferenciales

            renContent.Gastos.DeAdministracion.OtrosGastosDeAdministracion.Regalias.JurisdiccionesNoCooperantesBajaNulaImposicionDeBajaONulaImposicionYRegimenesTributariosPreferenciales.ValorContable =
                renContent?.Renglon63?.["5136Regalias"]?.ConTercerosUbicadosEnJurisdiccionesNoCooperantes?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Gastos.DeAdministracion.OtrosGastosDeAdministracion.Regalias.JurisdiccionesNoCooperantesBajaNulaImposicionDeBajaONulaImposicionYRegimenesTributariosPreferenciales.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon63?.["5136Regalias"]?.ConTercerosUbicadosEnJurisdiccionesNoCooperantes?.AjustesParaLlegarASaldosFiscales3 || 0;

            renContent.Gastos.DeAdministracion.OtrosGastosDeAdministracion.Regalias.JurisdiccionesNoCooperantesBajaNulaImposicionDeBajaONulaImposicionYRegimenesTributariosPreferenciales.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon63?.["5136Regalias"]?.ConTercerosUbicadosEnJurisdiccionesNoCooperantes?.AjustesParaLlegarASaldosFiscales1 || 0;

            //Gastos - DeAdministracion - OtrosGastosDeAdministracion - Regalias - NoVinculados

            renContent.Gastos.DeAdministracion.OtrosGastosDeAdministracion.Regalias.NoVinculados.ValorContable =
                renContent?.Renglon63?.["5136Regalias"]?.ConNoVinculados?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Gastos.DeAdministracion.OtrosGastosDeAdministracion.Regalias.NoVinculados.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon63?.["5136Regalias"]?.ConNoVinculados?.AjustesParaLlegarASaldosFiscales3 || 0;

            renContent.Gastos.DeAdministracion.OtrosGastosDeAdministracion.Regalias.NoVinculados.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon63?.["5136Regalias"]?.ConNoVinculados?.AjustesParaLlegarASaldosFiscales1 || 0;

            //Gastos - DeAdministracion - OtrosGastosDeAdministracion - AsistenciaTecnica - VinculadosEconomicos

            renContent.Gastos.DeAdministracion.OtrosGastosDeAdministracion.AsistenciaTecnica.VinculadosEconomicos.ValorContable =
                renContent?.Renglon63?.["5135Servicios"]?.AsistenciaTecnicaConVinculadosEconomicos?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Gastos.DeAdministracion.OtrosGastosDeAdministracion.AsistenciaTecnica.VinculadosEconomicos.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon63?.["5135Servicios"]?.AsistenciaTecnicaConVinculadosEconomicos?.AjustesParaLlegarASaldosFiscales3 || 0;

            renContent.Gastos.DeAdministracion.OtrosGastosDeAdministracion.AsistenciaTecnica.VinculadosEconomicos.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon63?.["5135Servicios"]?.AsistenciaTecnicaConVinculadosEconomicos?.AjustesParaLlegarASaldosFiscales1 || 0;

            //Gastos - DeAdministracion - OtrosGastosDeAdministracion - AsistenciaTecnica - JurisdiccionesNoCooperantesBajaNulaImposicionDeBajaONulaImposicionYRegimenesTributariosPreferenciales

            renContent.Gastos.DeAdministracion.OtrosGastosDeAdministracion.AsistenciaTecnica.JurisdiccionesNoCooperantesBajaNulaImposicionDeBajaONulaImposicionYRegimenesTributariosPreferenciales.ValorContable =
                renContent?.Renglon63?.["5135Servicios"]?.AsistenciaTecnicaConTercerosUbicadosEnJurisdiccionesNoCooperantes?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Gastos.DeAdministracion.OtrosGastosDeAdministracion.AsistenciaTecnica.JurisdiccionesNoCooperantesBajaNulaImposicionDeBajaONulaImposicionYRegimenesTributariosPreferenciales.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon63?.["5135Servicios"]?.AsistenciaTecnicaConTercerosUbicadosEnJurisdiccionesNoCooperantes?.AjustesParaLlegarASaldosFiscales3 || 0;

            renContent.Gastos.DeAdministracion.OtrosGastosDeAdministracion.AsistenciaTecnica.JurisdiccionesNoCooperantesBajaNulaImposicionDeBajaONulaImposicionYRegimenesTributariosPreferenciales.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon63?.["5135Servicios"]?.AsistenciaTecnicaConTercerosUbicadosEnJurisdiccionesNoCooperantes?.AjustesParaLlegarASaldosFiscales1 || 0;

            //Gastos - DeAdministracion - OtrosGastosDeAdministracion - AsistenciaTecnica - NoVinculados

            renContent.Gastos.DeAdministracion.OtrosGastosDeAdministracion.AsistenciaTecnica.NoVinculados.ValorContable =
                renContent?.Renglon63?.["5135Servicios"]?.AsistenciaTecnicaConNoVinculados?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Gastos.DeAdministracion.OtrosGastosDeAdministracion.AsistenciaTecnica.NoVinculados.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon63?.["5135Servicios"]?.AsistenciaTecnicaConNoVinculados?.AjustesParaLlegarASaldosFiscales3 || 0;

            renContent.Gastos.DeAdministracion.OtrosGastosDeAdministracion.AsistenciaTecnica.NoVinculados.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon63?.["5135Servicios"]?.AsistenciaTecnicaConNoVinculados?.AjustesParaLlegarASaldosFiscales1 || 0;

            //Gastos - DeAdministracion - OtrosGastosDeAdministracion - OtrosServicios

            renContent.Gastos.DeAdministracion.OtrosGastosDeAdministracion.OtrosServicios.ValorContable =
                renContent?.Renglon63?.["5135Servicios"]?.OtrosServicios?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Gastos.DeAdministracion.OtrosGastosDeAdministracion.OtrosServicios.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon63?.["5135Servicios"]?.OtrosServicios?.AjustesParaLlegarASaldosFiscales3 || 0;

            renContent.Gastos.DeAdministracion.OtrosGastosDeAdministracion.OtrosServicios.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon63?.["5135Servicios"]?.OtrosServicios?.AjustesParaLlegarASaldosFiscales1 || 0;

            //Gastos - DeAdministracion - OtrosGastosDeAdministracion - InvestigacionYDesarrollo

            renContent.Gastos.DeAdministracion.OtrosGastosDeAdministracion.InvestigacionYDesarrollo.ValorContable =
                renContent?.Renglon63?.["5137GastosDeInvestigacion"]?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Gastos.DeAdministracion.OtrosGastosDeAdministracion.InvestigacionYDesarrollo.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon63?.["5137GastosDeInvestigacion"]?.AjustesParaLlegarASaldosFiscales3 || 0;

            renContent.Gastos.DeAdministracion.OtrosGastosDeAdministracion.InvestigacionYDesarrollo.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon63?.["5137GastosDeInvestigacion"]?.AjustesParaLlegarASaldosFiscales1 || 0;

            //Gastos - DeAdministracion - OtrosGastosDeAdministracion - GastosLegales

            renContent.Gastos.DeAdministracion.OtrosGastosDeAdministracion.GastosLegales.ValorContable =
                renContent?.Renglon63?.["5140GastosLegales"]?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Gastos.DeAdministracion.OtrosGastosDeAdministracion.GastosLegales.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon63?.["5140GastosLegales"]?.AjustesParaLlegarASaldosFiscales3 || 0;

            renContent.Gastos.DeAdministracion.OtrosGastosDeAdministracion.GastosLegales.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon63?.["5140GastosLegales"]?.AjustesParaLlegarASaldosFiscales1 || 0;

            //Gastos - DeAdministracion - OtrosGastosDeAdministracion - ReparacionMantenimientoAdecuacionEInstalaciones

            renContent.Gastos.DeAdministracion.OtrosGastosDeAdministracion.ReparacionMantenimientoAdecuacionEInstalaciones.ValorContable =
                (renContent?.Renglon63?.["5145MantenimientoYReparacion"]?.SaldosContablesADiciembre31Parciales || 0) + (renContent?.Renglon63?.["5150AdecuacionesEInstalaciones"]?.SaldosContablesADiciembre31Parciales || 0);
            
            renContent.Gastos.DeAdministracion.OtrosGastosDeAdministracion.ReparacionMantenimientoAdecuacionEInstalaciones.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                (renContent?.Renglon63?.["5145MantenimientoYReparacion"]?.AjustesParaLlegarASaldosFiscales3 || 0) + (renContent?.Renglon63?.["5150AdecuacionesEInstalaciones"]?.AjustesParaLlegarASaldosFiscales3 || 0);
                
            renContent.Gastos.DeAdministracion.OtrosGastosDeAdministracion.ReparacionMantenimientoAdecuacionEInstalaciones.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                (renContent?.Renglon63?.["5145MantenimientoYReparacion"]?.AjustesParaLlegarASaldosFiscales1 || 0) + (renContent?.Renglon63?.["5150AdecuacionesEInstalaciones"]?.AjustesParaLlegarASaldosFiscales1 || 0);
            
            //Gastos - DeAdministracion - OtrosGastosDeAdministracion - Transporte

            renContent.Gastos.DeAdministracion.OtrosGastosDeAdministracion.Transporte.ValorContable =
                renContent?.Renglon63?.["5155GastosDeTransportes"]?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Gastos.DeAdministracion.OtrosGastosDeAdministracion.Transporte.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon63?.["5155GastosDeTransportes"]?.AjustesParaLlegarASaldosFiscales3 || 0;

            renContent.Gastos.DeAdministracion.OtrosGastosDeAdministracion.Transporte.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon63?.["5155GastosDeTransportes"]?.AjustesParaLlegarASaldosFiscales1 || 0;

            //Gastos - DeAdministracion - OtrosGastosDeAdministracion - OtrosGastos

            renContent.Gastos.DeAdministracion.OtrosGastosDeAdministracion.OtrosGastos.ValorContable =
                renContent?.Renglon63?.["5195Diversos"]?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Gastos.DeAdministracion.OtrosGastosDeAdministracion.OtrosGastos.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon63?.["5195Diversos"]?.AjustesParaLlegarASaldosFiscales3 || 0;

            renContent.Gastos.DeAdministracion.OtrosGastosDeAdministracion.OtrosGastos.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon63?.["5195Diversos"]?.AjustesParaLlegarASaldosFiscales1 || 0;

            //Gastos - DeAdministracion - DepreciacionesAmortizacionesDeterioros - DepreciacionPropiedadesPlantaYEquipo - DelCosto

            renContent.Gastos.DeAdministracion.DepreciacionesAmortizacionesDeterioros.DepreciacionPropiedadesPlantaYEquipo.DelCosto.ValorContable =
                renContent?.Renglon63?.["5160Depreciaciones"]?.DepreciacionPropiedadesPlantaYEquipo?.DelCosto?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Gastos.DeAdministracion.DepreciacionesAmortizacionesDeterioros.DepreciacionPropiedadesPlantaYEquipo.DelCosto.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon63?.["5160Depreciaciones"]?.DepreciacionPropiedadesPlantaYEquipo?.DelCosto?.AjustesParaLlegarASaldosFiscales3 || 0;

            renContent.Gastos.DeAdministracion.DepreciacionesAmortizacionesDeterioros.DepreciacionPropiedadesPlantaYEquipo.DelCosto.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon63?.["5160Depreciaciones"]?.DepreciacionPropiedadesPlantaYEquipo?.DelCosto?.AjustesParaLlegarASaldosFiscales1 || 0;

            //Gastos - DeAdministracion - DepreciacionesAmortizacionesDeterioros - DepreciacionPropiedadesPlantaYEquipo - DelAjusteAcumuladoPorRevaliacionesOReExpresiones

            renContent.Gastos.DeAdministracion.DepreciacionesAmortizacionesDeterioros.DepreciacionPropiedadesPlantaYEquipo.DelAjusteAcumuladoPorRevaliacionesOReExpresiones.ValorContable =
                renContent?.Renglon63?.["5160Depreciaciones"]?.DepreciacionPropiedadesPlantaYEquipo?.DelAjusteAcumuladoPorRevaluacionesOReExpresiones?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Gastos.DeAdministracion.DepreciacionesAmortizacionesDeterioros.DepreciacionPropiedadesPlantaYEquipo.DelAjusteAcumuladoPorRevaliacionesOReExpresiones.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon63?.["5160Depreciaciones"]?.DepreciacionPropiedadesPlantaYEquipo?.DelAjusteAcumuladoPorRevaluacionesOReExpresiones?.AjustesParaLlegarASaldosFiscales3 || 0;

            renContent.Gastos.DeAdministracion.DepreciacionesAmortizacionesDeterioros.DepreciacionPropiedadesPlantaYEquipo.DelAjusteAcumuladoPorRevaliacionesOReExpresiones.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon63?.["5160Depreciaciones"]?.DepreciacionPropiedadesPlantaYEquipo?.DelAjusteAcumuladoPorRevaluacionesOReExpresiones?.AjustesParaLlegarASaldosFiscales1 || 0;

            //Gastos - DeAdministracion - DepreciacionesAmortizacionesDeterioros - DepreciacionPropiedadesDeInversion - DelCosto

            renContent.Gastos.DeAdministracion.DepreciacionesAmortizacionesDeterioros.DepreciacionPropiedadesDeInversion.DelCosto.ValorContable =
                renContent?.Renglon63?.["5160Depreciaciones"]?.DepreciacionDePropiedadesDeInversion?.DelCosto?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Gastos.DeAdministracion.DepreciacionesAmortizacionesDeterioros.DepreciacionPropiedadesDeInversion.DelCosto.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon63?.["5160Depreciaciones"]?.DepreciacionDePropiedadesDeInversion?.DelCosto?.AjustesParaLlegarASaldosFiscales3 || 0;

            renContent.Gastos.DeAdministracion.DepreciacionesAmortizacionesDeterioros.DepreciacionPropiedadesDeInversion.DelCosto.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon63?.["5160Depreciaciones"]?.DepreciacionDePropiedadesDeInversion?.DelCosto?.AjustesParaLlegarASaldosFiscales1 || 0;

            //Gastos - DeAdministracion - DepreciacionesAmortizacionesDeterioros - DepreciacionPropiedadesDeInversion - DelAjusteAcumuladoPorRevaliacionesOReExpresiones

            renContent.Gastos.DeAdministracion.DepreciacionesAmortizacionesDeterioros.DepreciacionPropiedadesDeInversion.DelAjusteAcumuladoPorRevaliacionesOReExpresiones.ValorContable =
                renContent?.Renglon63?.["5160Depreciaciones"]?.DepreciacionDePropiedadesDeInversion?.DelAjusteAcumuladoPorRevaluacionesOReExpresiones?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Gastos.DeAdministracion.DepreciacionesAmortizacionesDeterioros.DepreciacionPropiedadesDeInversion.DelAjusteAcumuladoPorRevaliacionesOReExpresiones.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon63?.["5160Depreciaciones"]?.DepreciacionDePropiedadesDeInversion?.DelAjusteAcumuladoPorRevaluacionesOReExpresiones?.AjustesParaLlegarASaldosFiscales3 || 0;

            renContent.Gastos.DeAdministracion.DepreciacionesAmortizacionesDeterioros.DepreciacionPropiedadesDeInversion.DelAjusteAcumuladoPorRevaliacionesOReExpresiones.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon63?.["5160Depreciaciones"]?.DepreciacionDePropiedadesDeInversion?.DelAjusteAcumuladoPorRevaluacionesOReExpresiones?.AjustesParaLlegarASaldosFiscales1 || 0;

            //Gastos - DeAdministracion - DepreciacionesAmortizacionesDeterioros - OtrasDepreciaciones - DelCosto

            renContent.Gastos.DeAdministracion.DepreciacionesAmortizacionesDeterioros.OtrasDepreciaciones.DelCosto.ValorContable =
                renContent?.Renglon63?.["5160Depreciaciones"]?.DepreciacionDeOtrosActivos?.DelCosto?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Gastos.DeAdministracion.DepreciacionesAmortizacionesDeterioros.OtrasDepreciaciones.DelCosto.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon63?.["5160Depreciaciones"]?.DepreciacionDeOtrosActivos?.DelCosto?.AjustesParaLlegarASaldosFiscales3 || 0;

            renContent.Gastos.DeAdministracion.DepreciacionesAmortizacionesDeterioros.OtrasDepreciaciones.DelCosto.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon63?.["5160Depreciaciones"]?.DepreciacionDeOtrosActivos?.DelCosto?.AjustesParaLlegarASaldosFiscales1 || 0;

            //Gastos - DeAdministracion - DepreciacionesAmortizacionesDeterioros - OtrasDepreciaciones - DelAjusteAcumuladoPorRevaliacionesOReExpresiones

            renContent.Gastos.DeAdministracion.DepreciacionesAmortizacionesDeterioros.OtrasDepreciaciones.DelAjusteAcumuladoPorRevaliacionesOReExpresiones.ValorContable =
                renContent?.Renglon63?.["5160Depreciaciones"]?.DepreciacionDeOtrosActivos?.DelAjusteAcumuladoPorRevaluacionesOReExpresiones?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Gastos.DeAdministracion.DepreciacionesAmortizacionesDeterioros.OtrasDepreciaciones.DelAjusteAcumuladoPorRevaliacionesOReExpresiones.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon63?.["5160Depreciaciones"]?.DepreciacionDeOtrosActivos?.DelAjusteAcumuladoPorRevaluacionesOReExpresiones?.AjustesParaLlegarASaldosFiscales3 || 0;

            renContent.Gastos.DeAdministracion.DepreciacionesAmortizacionesDeterioros.OtrasDepreciaciones.DelAjusteAcumuladoPorRevaliacionesOReExpresiones.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon63?.["5160Depreciaciones"]?.DepreciacionDeOtrosActivos?.DelAjusteAcumuladoPorRevaluacionesOReExpresiones?.AjustesParaLlegarASaldosFiscales1 || 0;

            //Gastos - DeAdministracion - DepreciacionesAmortizacionesDeterioros - AmortizacionActivosIntangibles - DelCosto

            renContent.Gastos.DeAdministracion.DepreciacionesAmortizacionesDeterioros.AmortizacionActivosIntangibles.DelCosto.ValorContable =
                renContent?.Renglon63?.["5166AmortizacionDeActivosIntangibles"]?.AmortizacionDeActivosIntangibles?.DelCosto?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Gastos.DeAdministracion.DepreciacionesAmortizacionesDeterioros.AmortizacionActivosIntangibles.DelCosto.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon63?.["5166AmortizacionDeActivosIntangibles"]?.AmortizacionDeActivosIntangibles?.DelCosto?.AjustesParaLlegarASaldosFiscales3 || 0;

            renContent.Gastos.DeAdministracion.DepreciacionesAmortizacionesDeterioros.AmortizacionActivosIntangibles.DelCosto.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon63?.["5166AmortizacionDeActivosIntangibles"]?.AmortizacionDeActivosIntangibles?.DelCosto?.AjustesParaLlegarASaldosFiscales1 || 0;

            //Gastos - DeAdministracion - DepreciacionesAmortizacionesDeterioros - AmortizacionActivosIntangibles - DelAjusteAcumuladoPorRevaliacionesOReExpresiones

            renContent.Gastos.DeAdministracion.DepreciacionesAmortizacionesDeterioros.AmortizacionActivosIntangibles.DelAjusteAcumuladoPorRevaliacionesOReExpresiones.ValorContable =
                renContent?.Renglon63?.["5166AmortizacionDeActivosIntangibles"]?.AmortizacionDeActivosIntangibles?.DelAjusteAcumuladoPorRevaluacionesOReExpresiones?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Gastos.DeAdministracion.DepreciacionesAmortizacionesDeterioros.AmortizacionActivosIntangibles.DelAjusteAcumuladoPorRevaliacionesOReExpresiones.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon63?.["5166AmortizacionDeActivosIntangibles"]?.AmortizacionDeActivosIntangibles?.DelAjusteAcumuladoPorRevaluacionesOReExpresiones?.AjustesParaLlegarASaldosFiscales3 || 0;

            renContent.Gastos.DeAdministracion.DepreciacionesAmortizacionesDeterioros.AmortizacionActivosIntangibles.DelAjusteAcumuladoPorRevaliacionesOReExpresiones.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon63?.["5166AmortizacionDeActivosIntangibles"]?.AmortizacionDeActivosIntangibles?.DelAjusteAcumuladoPorRevaluacionesOReExpresiones?.AjustesParaLlegarASaldosFiscales1 || 0;

            //Gastos - DeAdministracion - DepreciacionesAmortizacionesDeterioros - OtrasAmortizaciones - DelCosto

            renContent.Gastos.DeAdministracion.DepreciacionesAmortizacionesDeterioros.OtrasAmortizaciones.DelCosto.ValorContable =
                renContent?.Renglon63?.["5166AmortizacionDeActivosIntangibles"]?.OtrasAmortizaciones?.DelCosto?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Gastos.DeAdministracion.DepreciacionesAmortizacionesDeterioros.OtrasAmortizaciones.DelCosto.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon63?.["5166AmortizacionDeActivosIntangibles"]?.OtrasAmortizaciones?.DelCosto?.AjustesParaLlegarASaldosFiscales3 || 0;

            renContent.Gastos.DeAdministracion.DepreciacionesAmortizacionesDeterioros.OtrasAmortizaciones.DelCosto.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon63?.["5166AmortizacionDeActivosIntangibles"]?.OtrasAmortizaciones?.DelCosto?.AjustesParaLlegarASaldosFiscales1 || 0;

            //Gastos - DeAdministracion - DepreciacionesAmortizacionesDeterioros - OtrasAmortizaciones - DelAjusteAcumuladoPorRevaliacionesOReExpresiones

            renContent.Gastos.DeAdministracion.DepreciacionesAmortizacionesDeterioros.OtrasAmortizaciones.DelAjusteAcumuladoPorRevaliacionesOReExpresiones.ValorContable =
                renContent?.Renglon63?.["5166AmortizacionDeActivosIntangibles"]?.OtrasAmortizaciones?.DelAjusteAcumuladoPorRevaluacionesOReExpresiones?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Gastos.DeAdministracion.DepreciacionesAmortizacionesDeterioros.OtrasAmortizaciones.DelAjusteAcumuladoPorRevaliacionesOReExpresiones.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon63?.["5166AmortizacionDeActivosIntangibles"]?.OtrasAmortizaciones?.DelAjusteAcumuladoPorRevaluacionesOReExpresiones?.AjustesParaLlegarASaldosFiscales3 || 0;

            renContent.Gastos.DeAdministracion.DepreciacionesAmortizacionesDeterioros.OtrasAmortizaciones.DelAjusteAcumuladoPorRevaliacionesOReExpresiones.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon63?.["5166AmortizacionDeActivosIntangibles"]?.OtrasAmortizaciones?.DelAjusteAcumuladoPorRevaluacionesOReExpresiones?.AjustesParaLlegarASaldosFiscales1 || 0;

            //Gastos - DeAdministracion - DepreciacionesAmortizacionesDeterioros - DeterioroDelValorDeLosActivos - Inventarios

            renContent.Gastos.DeAdministracion.DepreciacionesAmortizacionesDeterioros.DeterioroDelValorDeLosActivos.Inventarios.ValorContable =
                renContent?.Renglon63?.["5199Deterioros"]?.Inventarios?.SaldosContablesADiciembre31Parciales || 0;

            //Gastos - DeAdministracion - DepreciacionesAmortizacionesDeterioros - DeterioroDelValorDeLosActivos - PropiedadesPlantaYEquipo

            renContent.Gastos.DeAdministracion.DepreciacionesAmortizacionesDeterioros.DeterioroDelValorDeLosActivos.PropiedadesPlantaYEquipo.ValorContable =
                renContent?.Renglon63?.["5199Deterioros"]?.PropiedadesPlantaYEquipo?.SaldosContablesADiciembre31Parciales || 0;

            //Gastos - DeAdministracion - DepreciacionesAmortizacionesDeterioros - DeterioroDelValorDeLosActivos - ActivosIntangibles

            renContent.Gastos.DeAdministracion.DepreciacionesAmortizacionesDeterioros.DeterioroDelValorDeLosActivos.ActivosIntangibles.ValorContable =
                renContent?.Renglon63?.["5199Deterioros"]?.ActivosIntangibles?.SaldosContablesADiciembre31Parciales || 0;

            //Gastos - DeAdministracion - DepreciacionesAmortizacionesDeterioros - DeterioroDelValorDeLosActivos - ActivosDeExploracionYEvaluacionDeRecursosMinerales

            renContent.Gastos.DeAdministracion.DepreciacionesAmortizacionesDeterioros.DeterioroDelValorDeLosActivos.ActivosDeExploracionYEvaluacionDeRecursosMinerales.ValorContable =
                renContent?.Renglon63?.["5199Deterioros"]?.ActivosDeExploracionYEvaluacionDeRecursosMinerales?.SaldosContablesADiciembre31Parciales || 0;

            //Gastos - DeAdministracion - DepreciacionesAmortizacionesDeterioros - DeterioroDelValorDeLosActivos - PropiedadesDeInversionMedidasAlModeloDeCosto

            renContent.Gastos.DeAdministracion.DepreciacionesAmortizacionesDeterioros.DeterioroDelValorDeLosActivos.PropiedadesDeInversionMedidasAlModeloDeCosto.ValorContable =
                renContent?.Renglon63?.["5199Deterioros"]?.PropiedadesDeInversionMedidasAlModeloDeCosto?.SaldosContablesADiciembre31Parciales || 0;

            //Gastos - DeAdministracion - DepreciacionesAmortizacionesDeterioros - DeterioroDelValorDeLosActivos - ActivosNoCorrientesMantenidosParaLaVentaDistribuirALosPropietarios

            renContent.Gastos.DeAdministracion.DepreciacionesAmortizacionesDeterioros.DeterioroDelValorDeLosActivos.ActivosNoCorrientesMantenidosParaLaVentaDistribuirALosPropietarios.ValorContable =
                renContent?.Renglon63?.["5199Deterioros"]?.ActivosNoCorrientesMantenidosParaLaVentaDistribuirALosPropietarios?.SaldosContablesADiciembre31Parciales || 0;

            //Gastos - DeAdministracion - DepreciacionesAmortizacionesDeterioros - DeterioroDelValorDeLosActivos - BienesDeArteYCulturaMedidosAlModeloDeCosto

            renContent.Gastos.DeAdministracion.DepreciacionesAmortizacionesDeterioros.DeterioroDelValorDeLosActivos.BienesDeArteYCulturaMedidosAlModeloDeCosto.ValorContable =
                renContent?.Renglon63?.["5199Deterioros"]?.BienesDeArteYCulturaMedidosAlModeloDeCosto?.SaldosContablesADiciembre31Parciales || 0;

            //Gastos - DeAdministracion - DepreciacionesAmortizacionesDeterioros - DeterioroDelValorDeLosActivos - ActivosBiologicosMedidosAlModeloDeCosto

            renContent.Gastos.DeAdministracion.DepreciacionesAmortizacionesDeterioros.DeterioroDelValorDeLosActivos.ActivosBiologicosMedidosAlModeloDeCosto.ValorContable =
                renContent?.Renglon63?.["5199Deterioros"]?.ActivosBiologicosMedidosAlModeloDeCosto?.SaldosContablesADiciembre31Parciales || 0;

            //Gastos - DeAdministracion - DepreciacionesAmortizacionesDeterioros - DeterioroDelValorDeLosActivos - ActivosFinancierosDistintosACarteraDeCreditoYOperacionesDeLeasing

            renContent.Gastos.DeAdministracion.DepreciacionesAmortizacionesDeterioros.DeterioroDelValorDeLosActivos.ActivosFinancierosDistintosACarteraDeCreditoYOperacionesDeLeasing.ValorContable =
                renContent?.Renglon63?.["5199Deterioros"]?.ActivosFinancierosDiferentesACarteraDeCredito?.SaldosContablesADiciembre31Parciales || 0;

            //Gastos - DeAdministracion - DepreciacionesAmortizacionesDeterioros - DeterioroDelValorDeLosActivos - CarteraDeCreditoYOperacionesDeLeasing

            renContent.Gastos.DeAdministracion.DepreciacionesAmortizacionesDeterioros.DeterioroDelValorDeLosActivos.CarteraDeCreditoYOperacionesDeLeasing.ValorContable =
                renContent?.Renglon63?.["5199Deterioros"]?.CarteraDeCreditoYOperacionesDeLeasing?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Gastos.DeAdministracion.DepreciacionesAmortizacionesDeterioros.DeterioroDelValorDeLosActivos.CarteraDeCreditoYOperacionesDeLeasing.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon63?.["5199Deterioros"]?.CarteraDeCreditoYOperacionesDeLeasing?.AjustesParaLlegarASaldosFiscales3 || 0;

            renContent.Gastos.DeAdministracion.DepreciacionesAmortizacionesDeterioros.DeterioroDelValorDeLosActivos.CarteraDeCreditoYOperacionesDeLeasing.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon63?.["5199Deterioros"]?.CarteraDeCreditoYOperacionesDeLeasing?.AjustesParaLlegarASaldosFiscales1 || 0;

            //Gastos - DeAdministracion - DepreciacionesAmortizacionesDeterioros - DeterioroDelValorDeLosActivos - OtrasInversionesMedidasAlCostoOPorElMetodoDeLaParticipacion

            renContent.Gastos.DeAdministracion.DepreciacionesAmortizacionesDeterioros.DeterioroDelValorDeLosActivos.OtrasInversionesMedidasAlCostoOPorElMetodoDeLaParticipacion.ValorContable =
                renContent?.Renglon63?.["5199Deterioros"]?.OtrasInversionesMedidasAlCostoOPorElMetodoDeLaParticipacion?.SaldosContablesADiciembre31Parciales || 0;

            //Gastos - DeAdministracion - DepreciacionesAmortizacionesDeterioros - DeterioroDelValorDeLosActivos - DerechosDeUsoEnArrendamientosOperativosNIIF16

            renContent.Gastos.DeAdministracion.DepreciacionesAmortizacionesDeterioros.DeterioroDelValorDeLosActivos.DerechosDeUsoEnArrendamientosOperativosNIIF16.ValorContable =
                renContent?.Renglon63?.["5199Deterioros"]?.DerechosDeUsoEnArrendamientosOperativos?.SaldosContablesADiciembre31Parciales || 0;

            //Gastos - DeAdministracion - DepreciacionesAmortizacionesDeterioros - DeterioroDelValorDeLosActivos - OtrosDeterioros

            renContent.Gastos.DeAdministracion.DepreciacionesAmortizacionesDeterioros.DeterioroDelValorDeLosActivos.OtrosDeterioros.ValorContable =
                renContent?.Renglon63?.["5199Deterioros"]?.OtrosDeteriors?.SaldosContablesADiciembre31Parciales || 0;


        }


        return rentaLiquida;
    }
}