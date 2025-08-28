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

            //TODO: quedo en H109

        }


        return rentaLiquida;
    }
}