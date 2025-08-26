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

            //TODO: quedo en H50

        }


        return rentaLiquida;
    }
}