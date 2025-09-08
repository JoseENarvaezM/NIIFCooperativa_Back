import prisma from "../../../../config/database";
import { FormRentaLiquida } from "../../../../domain/models/FormRentaLiquidaModel";
import { FormsGatewayIntPort } from "../../../../application/output/FormsGatewayIntPort";
import { RentaLiquidaController } from "../../../input/controllers/RentaLiquida.controller";

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

            
            //aqui inicia lo que se sabe esta bien 


            // Ingresos - AjustesFiscales - AdicionDeIngresos - InteresesPresuntos

            renContent.Ingresos.AjustesFiscales.AdicionDeIngresos.InteresesPresuntos.MayorValorFiscalPorReconocimientoExencionesLimitaciones = (renContent?.Renglon48?.["InteresesPresuntivosPorHacerPrestamosEnDineroALosSociosDeEstaSociedad"]?.AjustesParaLlegarASaldosFiscales3 || 0);

            // Ingresos - AjustesFiscales - AdicionDeIngresos - InteresesPresuntos

            renContent.Ingresos.AjustesFiscales.AdicionDeIngresos.OtrosIngresosFiscalesYNoIncluidosContablemente.ValorFiscal = (renContent?.Renglon60?.["TotalIngresosNoConstituidosDeRentaNiGananciaOcasionalSaldosFiscalesADiciembre31"] || 0);

            // Costos - MateriasPrimasReventaDeBienesTerminadosYServicios - CostosDeVentasCalculadoPorElSistemaPermanente

            renContent.Costos.MateriasPrimasReventaDeBienesTerminadosYServicios.CostosDeVentasCalculadoPorElSistemaPermanente.ValorContable =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.CostoDeVentasParaComerciantesQueUtilizanSistemaPermanente?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Costos.MateriasPrimasReventaDeBienesTerminadosYServicios.CostosDeVentasCalculadoPorElSistemaPermanente.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.CostoDeVentasParaComerciantesQueUtilizanSistemaPermanente?.AjustesParaLlegarASaldosFiscales3 || 0;

            renContent.Costos.MateriasPrimasReventaDeBienesTerminadosYServicios.CostosDeVentasCalculadoPorElSistemaPermanente.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.CostoDeVentasParaComerciantesQueUtilizanSistemaPermanente?.AjustesParaLlegarASaldosFiscales1 || 0;

            //Costos - MateriasPrimasReventaDeBienesTerminadosYServicios - Materias primas (para procesos de producción) - Inventario inicial

            renContent.Costos.MateriasPrimasReventaDeBienesTerminadosYServicios.MateriasPrimasProduccion.InventarioInicial.ValorContable =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.InventarioInicialDeMateriaPrimas?.InventarioInicialDeMateriaPrimas?.SaldosContablesADiciembre31Parciales || 0;
                
            renContent.Costos.MateriasPrimasReventaDeBienesTerminadosYServicios.MateriasPrimasProduccion.InventarioInicial.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.InventarioInicialDeMateriaPrimas?.InventarioInicialDeMateriaPrimas?.AjustesParaLlegarASaldosFiscales3 || 0;

            renContent.Costos.MateriasPrimasReventaDeBienesTerminadosYServicios.MateriasPrimasProduccion.InventarioInicial.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.InventarioInicialDeMateriaPrimas?.InventarioInicialDeMateriaPrimas?.AjustesParaLlegarASaldosFiscales1 || 0;    
                
            //Costos - MateriasPrimasReventaDeBienesTerminadosYServicios - Materias primas (para procesos de producción) - compras locales

            renContent.Costos.MateriasPrimasReventaDeBienesTerminadosYServicios.MateriasPrimasProduccion.ComprasLocales.ValorContable =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.InventarioInicialDeMateriaPrimas?.MasComprasLocales?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Costos.MateriasPrimasReventaDeBienesTerminadosYServicios.MateriasPrimasProduccion.ComprasLocales.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.InventarioInicialDeMateriaPrimas?.MasComprasLocales?.AjustesParaLlegarASaldosFiscales3 || 0;

            renContent.Costos.MateriasPrimasReventaDeBienesTerminadosYServicios.MateriasPrimasProduccion.ComprasLocales.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.InventarioInicialDeMateriaPrimas?.MasComprasLocales?.AjustesParaLlegarASaldosFiscales1 || 0;

            //Costos - MateriasPrimasReventaDeBienesTerminadosYServicios - Materias primas (para procesos de producción) - Importaciones

            renContent.Costos.MateriasPrimasReventaDeBienesTerminadosYServicios.MateriasPrimasProduccion.Importaciones.ValorContable =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.InventarioInicialDeMateriaPrimas?.MasImportaciones?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Costos.MateriasPrimasReventaDeBienesTerminadosYServicios.MateriasPrimasProduccion.Importaciones.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.InventarioInicialDeMateriaPrimas?.MasImportaciones?.AjustesParaLlegarASaldosFiscales3 || 0;

            renContent.Costos.MateriasPrimasReventaDeBienesTerminadosYServicios.MateriasPrimasProduccion.Importaciones.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.InventarioInicialDeMateriaPrimas?.MasImportaciones?.AjustesParaLlegarASaldosFiscales1 || 0;

            //Costos - MateriasPrimasReventaDeBienesTerminadosYServicios - Materias primas (para procesos de producción) - Inventario final

            renContent.Costos.MateriasPrimasReventaDeBienesTerminadosYServicios.MateriasPrimasProduccion.InventarioFinal.ValorContable =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.InventarioInicialDeMateriaPrimas?.MenosInventarioFinalMateriasPrimas?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Costos.MateriasPrimasReventaDeBienesTerminadosYServicios.MateriasPrimasProduccion.InventarioFinal.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.InventarioInicialDeMateriaPrimas?.MenosInventarioFinalMateriasPrimas?.AjustesParaLlegarASaldosFiscales3 || 0;

            renContent.Costos.MateriasPrimasReventaDeBienesTerminadosYServicios.MateriasPrimasProduccion.InventarioFinal.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.InventarioInicialDeMateriaPrimas?.MenosInventarioFinalMateriasPrimas?.AjustesParaLlegarASaldosFiscales1 || 0;

            //Costos - MateriasPrimasReventaDeBienesTerminadosYServicios - Costos de los bienes vendidos (para comerciantes por reventa de bienes terminados) - Inventario inicial

            renContent.Costos.MateriasPrimasReventaDeBienesTerminadosYServicios.CostoBienesVendidos.InventarioInicial.ValorContable =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.CostoDeVentasParaComerciasntesQueUtilizanJuegoDeInventarios?.InventarioInicial?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Costos.MateriasPrimasReventaDeBienesTerminadosYServicios.CostoBienesVendidos.InventarioInicial.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.CostoDeVentasParaComerciasntesQueUtilizanJuegoDeInventarios?.InventarioInicial?.AjustesParaLlegarASaldosFiscales3 || 0;

            renContent.Costos.MateriasPrimasReventaDeBienesTerminadosYServicios.CostoBienesVendidos.InventarioInicial.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.CostoDeVentasParaComerciasntesQueUtilizanJuegoDeInventarios?.InventarioInicial?.AjustesParaLlegarASaldosFiscales1 || 0;
            
            //Costos - MateriasPrimasReventaDeBienesTerminadosYServicios - Costos de los bienes vendidos (para comerciantes por reventa de bienes terminados) - Compras locales 
            
            renContent.Costos.MateriasPrimasReventaDeBienesTerminadosYServicios.CostoBienesVendidos.ComprasLocales.ValorContable =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.CostoDeVentasParaComerciasntesQueUtilizanJuegoDeInventarios?.MasComprasLocales?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Costos.MateriasPrimasReventaDeBienesTerminadosYServicios.CostoBienesVendidos.ComprasLocales.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.CostoDeVentasParaComerciasntesQueUtilizanJuegoDeInventarios?.MasComprasLocales?.AjustesParaLlegarASaldosFiscales3 || 0;

            renContent.Costos.MateriasPrimasReventaDeBienesTerminadosYServicios.CostoBienesVendidos.ComprasLocales.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.CostoDeVentasParaComerciasntesQueUtilizanJuegoDeInventarios?.MasComprasLocales?.AjustesParaLlegarASaldosFiscales1 || 0;

            //Costos - MateriasPrimasReventaDeBienesTerminadosYServicios - Costos de los bienes vendidos (para comerciantes por reventa de bienes terminados) - Importaciones

            renContent.Costos.MateriasPrimasReventaDeBienesTerminadosYServicios.CostoBienesVendidos.Importaciones.ValorContable =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.CostoDeVentasParaComerciasntesQueUtilizanJuegoDeInventarios?.MasImportaciones?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Costos.MateriasPrimasReventaDeBienesTerminadosYServicios.CostoBienesVendidos.Importaciones.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.CostoDeVentasParaComerciasntesQueUtilizanJuegoDeInventarios?.MasImportaciones?.AjustesParaLlegarASaldosFiscales3 || 0;

            renContent.Costos.MateriasPrimasReventaDeBienesTerminadosYServicios.CostoBienesVendidos.Importaciones.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.CostoDeVentasParaComerciasntesQueUtilizanJuegoDeInventarios?.MasImportaciones?.AjustesParaLlegarASaldosFiscales1 || 0;

            //Costos - MateriasPrimasReventaDeBienesTerminadosYServicios - Costos de los bienes vendidos (para comerciantes por reventa de bienes terminados) - Inventario Final

            renContent.Costos.MateriasPrimasReventaDeBienesTerminadosYServicios.CostoBienesVendidos.InventarioFinal.ValorContable =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.CostoDeVentasParaComerciasntesQueUtilizanJuegoDeInventarios?.MenosInventarioFinal?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Costos.MateriasPrimasReventaDeBienesTerminadosYServicios.CostoBienesVendidos.InventarioFinal.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.CostoDeVentasParaComerciasntesQueUtilizanJuegoDeInventarios?.MenosInventarioFinal?.AjustesParaLlegarASaldosFiscales3 || 0;

            renContent.Costos.MateriasPrimasReventaDeBienesTerminadosYServicios.CostoBienesVendidos.InventarioFinal.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.CostoDeVentasParaComerciasntesQueUtilizanJuegoDeInventarios?.MenosInventarioFinal?.AjustesParaLlegarASaldosFiscales1 || 0;

            // Costos - MateriasPrimasReventaDeBienesTerminadosYServicios - Productos en proceso - Inventario inicial

            renContent.Costos.MateriasPrimasReventaDeBienesTerminadosYServicios.ProductosEnProceso.InventarioInicial.ValorContable =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.InventarioInicialDeTrabajoEnProceso?.SaldosContablesADiciembre31Parciales || 0;


            renContent.Costos.MateriasPrimasReventaDeBienesTerminadosYServicios.ProductosEnProceso.InventarioInicial.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.InventarioInicialDeTrabajoEnProceso?.AjustesParaLlegarASaldosFiscales3 || 0;

            renContent.Costos.MateriasPrimasReventaDeBienesTerminadosYServicios.ProductosEnProceso.InventarioInicial.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.InventarioInicialDeTrabajoEnProceso?.AjustesParaLlegarASaldosFiscales1 || 0;

            // Costos - MateriasPrimasReventaDeBienesTerminadosYServicios - Productos en proceso - Inventario final

            renContent.Costos.MateriasPrimasReventaDeBienesTerminadosYServicios.ProductosEnProceso.InventarioFinal.ValorContable =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.AsistenciaTecnica?.MenosInventarioFinalDeTrabajoEnProceso?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Costos.MateriasPrimasReventaDeBienesTerminadosYServicios.ProductosEnProceso.InventarioFinal.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.AsistenciaTecnica?.MenosInventarioFinalDeTrabajoEnProceso?.AjustesParaLlegarASaldosFiscales3 || 0;

            renContent.Costos.MateriasPrimasReventaDeBienesTerminadosYServicios.ProductosEnProceso.InventarioFinal.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.AsistenciaTecnica?.MenosInventarioFinalDeTrabajoEnProceso?.AjustesParaLlegarASaldosFiscales1 || 0;
            
            // Costos - MateriasPrimasReventaDeBienesTerminadosYServicios - Producto terminado - Inventario inicial

            renContent.Costos.MateriasPrimasReventaDeBienesTerminadosYServicios.ProductosEnProceso.InventarioInicial.ValorContable =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.AsistenciaTecnica?.MasInventarioInicialDeProductoTerminado?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Costos.MateriasPrimasReventaDeBienesTerminadosYServicios.ProductosEnProceso.InventarioInicial.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.AsistenciaTecnica?.MasInventarioInicialDeProductoTerminado?.AjustesParaLlegarASaldosFiscales3 || 0;

            renContent.Costos.MateriasPrimasReventaDeBienesTerminadosYServicios.ProductosEnProceso.InventarioInicial.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.AsistenciaTecnica?.MasInventarioInicialDeProductoTerminado?.AjustesParaLlegarASaldosFiscales1 || 0;

            // Costos - MateriasPrimasReventaDeBienesTerminadosYServicios - Producto terminado - Inventario final
            
            renContent.Costos.MateriasPrimasReventaDeBienesTerminadosYServicios.ProductosEnProceso.InventarioFinal.ValorContable =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.AsistenciaTecnica?.MenosInventarioFinalDeProductoTerminado?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Costos.MateriasPrimasReventaDeBienesTerminadosYServicios.ProductosEnProceso.InventarioFinal.MenorValorFiscalPorReconocimientoExencionesLimitaciones =    
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.AsistenciaTecnica?.MenosInventarioFinalDeProductoTerminado?.AjustesParaLlegarASaldosFiscales3 || 0;

            renContent.Costos.MateriasPrimasReventaDeBienesTerminadosYServicios.ProductosEnProceso.InventarioFinal.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.AsistenciaTecnica?.MenosInventarioFinalDeProductoTerminado?.AjustesParaLlegarASaldosFiscales1 || 0;

            //Costos - MateriasPrimasReventaDeBienesTerminadosYServicios - Costos en la prestación de servicios (para prestadores de servicios)

            renContent.Costos.MateriasPrimasReventaDeBienesTerminadosYServicios.CostosEnLaPrestacionDeServicios.ValorContable =
                renContent?.Renglon62?.["6140CostoDeLasActividadesQueFormanLasRentasExentas"]?.CostoDeLasActividadesQueFormanLasRentasExentas?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Costos.MateriasPrimasReventaDeBienesTerminadosYServicios.CostosEnLaPrestacionDeServicios.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon62?.["6140CostoDeLasActividadesQueFormanLasRentasExentas"]?.CostoDeLasActividadesQueFormanLasRentasExentas?.AjustesParaLlegarASaldosFiscales3 || 0;

            renContent.Costos.MateriasPrimasReventaDeBienesTerminadosYServicios.CostosEnLaPrestacionDeServicios.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon62?.["6140CostoDeLasActividadesQueFormanLasRentasExentas"]?.CostoDeLasActividadesQueFormanLasRentasExentas?.AjustesParaLlegarASaldosFiscales1 || 0;
 
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
            
            //Gastos - Gastos de distribución y ventas - Mano de Obra - De corto plazo
            renContent.Gastos.GastosDeDistribucionYVentas.ManoDeObra.DeCortoPlazo.ValorContable = 
                (renContent?.Renglon64?.["5205BeneficiosALosEmpleadosCortoPlayzo"]?.SalariosYOtros.SaldosContablesADiciembre31Parciales || 0) +
                (renContent?.Renglon64?.["5205BeneficiosALosEmpleadosCortoPlayzo"]?.AportesAEPS.SaldosContablesADiciembre31Parciales || 0) +
                (renContent?.Renglon64?.["5205BeneficiosALosEmpleadosCortoPlayzo"]?.AportesAARL.SaldosContablesADiciembre31Parciales || 0) +
                (renContent?.Renglon64?.["5205BeneficiosALosEmpleadosCortoPlayzo"]?.AportesAFondosDePensiones.SaldosContablesADiciembre31Parciales || 0) +
                (renContent?.Renglon64?.["5205BeneficiosALosEmpleadosCortoPlayzo"]?.AportesAlSENA.SaldosContablesADiciembre31Parciales || 0) +
                (renContent?.Renglon64?.["5205BeneficiosALosEmpleadosCortoPlayzo"]?.AportesAlICBF.SaldosContablesADiciembre31Parciales || 0) +
                (renContent?.Renglon64?.["5205BeneficiosALosEmpleadosCortoPlayzo"]?.AportesACajasDeCompensacion.SaldosContablesADiciembre31Parciales || 0);
            
            renContent.Gastos.GastosDeDistribucionYVentas.ManoDeObra.DeCortoPlazo.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                (renContent?.Renglon64?.["5205BeneficiosALosEmpleadosCortoPlayzo"]?.SalariosYOtros.AjustesParaLlegarASaldosFiscales3 || 0) +
                (renContent?.Renglon64?.["5205BeneficiosALosEmpleadosCortoPlayzo"]?.AportesAEPS.AjustesParaLlegarASaldosFiscales3 || 0) +
                (renContent?.Renglon64?.["5205BeneficiosALosEmpleadosCortoPlayzo"]?.AportesAARL.AjustesParaLlegarASaldosFiscales3 || 0) +
                (renContent?.Renglon64?.["5205BeneficiosALosEmpleadosCortoPlayzo"]?.AportesAFondosDePensiones.AjustesParaLlegarASaldosFiscales3 || 0) +
                (renContent?.Renglon64?.["5205BeneficiosALosEmpleadosCortoPlayzo"]?.AportesAlSENA.AjustesParaLlegarASaldosFiscales3 || 0) +
                (renContent?.Renglon64?.["5205BeneficiosALosEmpleadosCortoPlayzo"]?.AportesAlICBF.AjustesParaLlegarASaldosFiscales3 || 0) +
                (renContent?.Renglon64?.["5205BeneficiosALosEmpleadosCortoPlayzo"]?.AportesACajasDeCompensacion.AjustesParaLlegarASaldosFiscales3 || 0);

            renContent.Gastos.GastosDeDistribucionYVentas.ManoDeObra.DeCortoPlazo.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                (renContent?.Renglon64?.["5205BeneficiosALosEmpleadosCortoPlayzo"]?.SalariosYOtros.AjustesParaLlegarASaldosFiscales1 || 0) +
                (renContent?.Renglon64?.["5205BeneficiosALosEmpleadosCortoPlayzo"]?.AportesAEPS.AjustesParaLlegarASaldosFiscales1 || 0) +
                (renContent?.Renglon64?.["5205BeneficiosALosEmpleadosCortoPlayzo"]?.AportesAARL.AjustesParaLlegarASaldosFiscales1 || 0) +
                (renContent?.Renglon64?.["5205BeneficiosALosEmpleadosCortoPlayzo"]?.AportesAFondosDePensiones.AjustesParaLlegarASaldosFiscales1 || 0) +
                (renContent?.Renglon64?.["5205BeneficiosALosEmpleadosCortoPlayzo"]?.AportesAlSENA.AjustesParaLlegarASaldosFiscales1 || 0) +
                (renContent?.Renglon64?.["5205BeneficiosALosEmpleadosCortoPlayzo"]?.AportesAlICBF.AjustesParaLlegarASaldosFiscales1 || 0) +
                (renContent?.Renglon64?.["5205BeneficiosALosEmpleadosCortoPlayzo"]?.AportesACajasDeCompensacion.AjustesParaLlegarASaldosFiscales1 || 0);
            
            //Gastos - Gastos de distribución y ventas - Otros gastos de distribución y ventas - Impuestos distintos al impuestos de renta y complementarios

            renContent.Gastos.GastosDeDistribucionYVentas.OtrosGastosDeDistribucionYVentas.ImpuestosDistintosAlImpuestosDeRentaYComplementarios.ValorContable =
                renContent?.Renglon64?.["5215ImpuestosAlPatrimonioIndustriaYComercio"]?.SaldosContablesADiciembre31Parciales || 0;


            renContent.Gastos.GastosDeDistribucionYVentas.OtrosGastosDeDistribucionYVentas.ImpuestosDistintosAlImpuestosDeRentaYComplementarios.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon64?.["5215ImpuestosAlPatrimonioIndustriaYComercio"]?.AjustesParaLlegarASaldosFiscales3 || 0;

            renContent.Gastos.GastosDeDistribucionYVentas.OtrosGastosDeDistribucionYVentas.ImpuestosDistintosAlImpuestosDeRentaYComplementarios.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon64?.["5215ImpuestosAlPatrimonioIndustriaYComercio"]?.AjustesParaLlegarASaldosFiscales1 || 0;
            
            //Gastos - Gastos de distribución y ventas - Otros gastos de distribución y ventas - Arrendamientos operativos

            renContent.Gastos.GastosDeDistribucionYVentas.OtrosGastosDeDistribucionYVentas.ArrendamientosOperativos.ValorContable =
                renContent?.Renglon64?.["5220Arrendamientos"]?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Gastos.GastosDeDistribucionYVentas.OtrosGastosDeDistribucionYVentas.ArrendamientosOperativos.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon64?.["5220Arrendamientos"]?.AjustesParaLlegarASaldosFiscales3 || 0;

            renContent.Gastos.GastosDeDistribucionYVentas.OtrosGastosDeDistribucionYVentas.ArrendamientosOperativos.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon64?.["5220Arrendamientos"]?.AjustesParaLlegarASaldosFiscales1 || 0;

            //Gastos - Gastos de distribución y ventas - Otros gastos de distribución y ventas - Contribuciones y afiliaciones

            renContent.Gastos.GastosDeDistribucionYVentas.OtrosGastosDeDistribucionYVentas.ContribucionesYAfiliaciones.ValorContable =
                renContent?.Renglon64?.["5225Contribuciones"]?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Gastos.GastosDeDistribucionYVentas.OtrosGastosDeDistribucionYVentas.ContribucionesYAfiliaciones.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon64?.["5225Contribuciones"]?.AjustesParaLlegarASaldosFiscales3 || 0;

            renContent.Gastos.GastosDeDistribucionYVentas.OtrosGastosDeDistribucionYVentas.ContribucionesYAfiliaciones.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon64?.["5225Contribuciones"]?.AjustesParaLlegarASaldosFiscales1 || 0;

            //Gastos - Gastos de distribución y ventas - Otros gastos de distribución y ventas - Honorarios

            renContent.Gastos.GastosDeDistribucionYVentas.OtrosGastosDeDistribucionYVentas.Honorarios.ValorContable =
                renContent?.Renglon64?.["5210Honorarios"]?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Gastos.GastosDeDistribucionYVentas.OtrosGastosDeDistribucionYVentas.Honorarios.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon64?.["5210Honorarios"]?.AjustesParaLlegarASaldosFiscales3 || 0;

            renContent.Gastos.GastosDeDistribucionYVentas.OtrosGastosDeDistribucionYVentas.Honorarios.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon64?.["5210Honorarios"]?.AjustesParaLlegarASaldosFiscales1 || 0;

            //Gastos - Gastos de distribución y ventas - Otros gastos de distribución y ventas - Seguros

            renContent.Gastos.GastosDeDistribucionYVentas.OtrosGastosDeDistribucionYVentas.Seguros.ValorContable =
                renContent?.Renglon64?.["5230Seguros"]?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Gastos.GastosDeDistribucionYVentas.OtrosGastosDeDistribucionYVentas.Seguros.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon64?.["5230Seguros"]?.AjustesParaLlegarASaldosFiscales3 || 0;
            
            renContent.Gastos.GastosDeDistribucionYVentas.OtrosGastosDeDistribucionYVentas.Seguros.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon64?.["5230Seguros"]?.AjustesParaLlegarASaldosFiscales1 || 0;

            //Gastos - Gastos de distribución y ventas - Otros gastos de distribución y ventas - Servicios administrativos - Vinculados económicos

            renContent.Gastos.GastosDeDistribucionYVentas.OtrosGastosDeDistribucionYVentas.ServiciosAdministrativos.VinculadosEconomicos.ValorContable =
                renContent?.Renglon64?.["5235Servicios"]?.ServiciosAdministrativosConVinculadosEconomicos?.SaldosContablesADiciembre31Parciales || 0;
            
            renContent.Gastos.GastosDeDistribucionYVentas.OtrosGastosDeDistribucionYVentas.ServiciosAdministrativos.VinculadosEconomicos.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon64?.["5235Servicios"]?.ServiciosAdministrativosConVinculadosEconomicos?.AjustesParaLlegarASaldosFiscales3 || 0;
            
            renContent.Gastos.GastosDeDistribucionYVentas.OtrosGastosDeDistribucionYVentas.ServiciosAdministrativos.VinculadosEconomicos.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon64?.["5235Servicios"]?.ServiciosAdministrativosConVinculadosEconomicos?.AjustesParaLlegarASaldosFiscales1 || 0;

            //Gastos - Gastos de distribución y ventas - Otros gastos de distribución y ventas - Servicios administrativos - Jurisdicciones no cooperantes

            renContent.Gastos.GastosDeDistribucionYVentas.OtrosGastosDeDistribucionYVentas.ServiciosAdministrativos.JurisdiccionesNoCooperantesDeBajaONulaImposicionYRegimenesTributariosPreferenciales.ValorContable =
                renContent?.Renglon64?.["5235Servicios"]?.ServiciosAdministrativosConTercerosUbicadosEnJurisdiccionesNoCooperantes?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Gastos.GastosDeDistribucionYVentas.OtrosGastosDeDistribucionYVentas.ServiciosAdministrativos.JurisdiccionesNoCooperantesDeBajaONulaImposicionYRegimenesTributariosPreferenciales.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon64?.["5235Servicios"]?.ServiciosAdministrativosConTercerosUbicadosEnJurisdiccionesNoCooperantes?.AjustesParaLlegarASaldosFiscales3 || 0;
            
            renContent.Gastos.GastosDeDistribucionYVentas.OtrosGastosDeDistribucionYVentas.ServiciosAdministrativos.JurisdiccionesNoCooperantesDeBajaONulaImposicionYRegimenesTributariosPreferenciales.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon64?.["5235Servicios"]?.ServiciosAdministrativosConTercerosUbicadosEnJurisdiccionesNoCooperantes?.AjustesParaLlegarASaldosFiscales1 || 0;
        
            //Gastos - Gastos de distribución y ventas - Otros gastos de distribución y ventas - Servicios administrativos - No vinculados

            renContent.Gastos.GastosDeDistribucionYVentas.OtrosGastosDeDistribucionYVentas.ServiciosAdministrativos.NoVinculados.ValorContable =
                renContent?.Renglon64?.["5235Servicios"]?.ServiciosAdministrativosConNoVinculados?.SaldosContablesADiciembre31Parciales || 0;
            
            renContent.Gastos.GastosDeDistribucionYVentas.OtrosGastosDeDistribucionYVentas.ServiciosAdministrativos.NoVinculados.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon64?.["5235Servicios"]?.ServiciosAdministrativosConNoVinculados?.AjustesParaLlegarASaldosFiscales3 || 0;
            
            renContent.Gastos.GastosDeDistribucionYVentas.OtrosGastosDeDistribucionYVentas.ServiciosAdministrativos.NoVinculados.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon64?.["5235Servicios"]?.ServiciosAdministrativosConNoVinculados?.AjustesParaLlegarASaldosFiscales1 || 0;
            
            //Gastos - Gastos de distribución y ventas - Otros gastos de distribución y ventas - Regalías - Vinculados económicos

            renContent.Gastos.GastosDeDistribucionYVentas.OtrosGastosDeDistribucionYVentas.Regalias.VinculadosEconomicos.ValorContable =
                renContent?.Renglon64?.["5236Regalias"]?.ConVinculadosEconomicos?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Gastos.GastosDeDistribucionYVentas.OtrosGastosDeDistribucionYVentas.Regalias.VinculadosEconomicos.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon64?.["5236Regalias"]?.ConVinculadosEconomicos?.AjustesParaLlegarASaldosFiscales3 || 0;

            renContent.Gastos.GastosDeDistribucionYVentas.OtrosGastosDeDistribucionYVentas.Regalias.VinculadosEconomicos.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon64?.["5236Regalias"]?.ConVinculadosEconomicos?.AjustesParaLlegarASaldosFiscales1 || 0;
            
            //Gastos - Gastos de distribución y ventas - Otros gastos de distribución y ventas - Regalías - Jurisdicciones no cooperantes

            renContent.Gastos.GastosDeDistribucionYVentas.OtrosGastosDeDistribucionYVentas.Regalias.JurisdiccionesNoCooperantesDeBajaONulaImposicionYRegimenesTributariosPreferenciales.ValorContable =
                renContent?.Renglon64?.["5236Regalias"]?.ConTercerosUbicadosEnJurisdiccionesNoCooperantes?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Gastos.GastosDeDistribucionYVentas.OtrosGastosDeDistribucionYVentas.Regalias.JurisdiccionesNoCooperantesDeBajaONulaImposicionYRegimenesTributariosPreferenciales.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon64?.["5236Regalias"]?.ConTercerosUbicadosEnJurisdiccionesNoCooperantes?.AjustesParaLlegarASaldosFiscales3 || 0;

            renContent.Gastos.GastosDeDistribucionYVentas.OtrosGastosDeDistribucionYVentas.Regalias.JurisdiccionesNoCooperantesDeBajaONulaImposicionYRegimenesTributariosPreferenciales.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon64?.["5236Regalias"]?.ConTercerosUbicadosEnJurisdiccionesNoCooperantes?.AjustesParaLlegarASaldosFiscales1 || 0;

            //Gastos - Gastos de distribución y ventas - Otros gastos de distribución y ventas - Regalías - No vinculados

            renContent.Gastos.GastosDeDistribucionYVentas.OtrosGastosDeDistribucionYVentas.Regalias.NoVinculados.ValorContable =
                renContent?.Renglon64?.["5236Regalias"]?.ConNoVinculados?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Gastos.GastosDeDistribucionYVentas.OtrosGastosDeDistribucionYVentas.Regalias.NoVinculados.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon64?.["5236Regalias"]?.ConNoVinculados?.AjustesParaLlegarASaldosFiscales3 || 0;

            renContent.Gastos.GastosDeDistribucionYVentas.OtrosGastosDeDistribucionYVentas.Regalias.NoVinculados.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon64?.["5236Regalias"]?.ConNoVinculados?.AjustesParaLlegarASaldosFiscales1 || 0;

            //Gastos - Gastos de distribución y ventas - Otros gastos de distribución y ventas - Asistencia técnica - Vinculados económicos

            renContent.Gastos.GastosDeDistribucionYVentas.OtrosGastosDeDistribucionYVentas.AsistenciaTecnica.VinculadosEconomicos.ValorContable =
                renContent?.Renglon64?.["5235Servicios"]?.AsistenciaTecnicaConVinculadosEconomicos?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Gastos.GastosDeDistribucionYVentas.OtrosGastosDeDistribucionYVentas.AsistenciaTecnica.VinculadosEconomicos.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon64?.["5235Servicios"]?.AsistenciaTecnicaConVinculadosEconomicos?.AjustesParaLlegarASaldosFiscales3 || 0;

            renContent.Gastos.GastosDeDistribucionYVentas.OtrosGastosDeDistribucionYVentas.AsistenciaTecnica.VinculadosEconomicos.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon64?.["5235Servicios"]?.AsistenciaTecnicaConVinculadosEconomicos?.AjustesParaLlegarASaldosFiscales1 || 0;
            
            //Gastos - Gastos de distribución y ventas - Otros gastos de distribución y ventas - Asistencia técnica - Jurisdicciones no cooperantes
            
            renContent.Gastos.GastosDeDistribucionYVentas.OtrosGastosDeDistribucionYVentas.AsistenciaTecnica.JurisdiccionesNoCooperantesDeBajaONulaImposicionYRegimenesTributariosPreferenciales.ValorContable =
                renContent?.Renglon64?.["5235Servicios"]?.AsistenciaTecnicaConTercerosUbicadosEnJurisdiccionesNoCooperantes?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Gastos.GastosDeDistribucionYVentas.OtrosGastosDeDistribucionYVentas.AsistenciaTecnica.JurisdiccionesNoCooperantesDeBajaONulaImposicionYRegimenesTributariosPreferenciales.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon64?.["5235Servicios"]?.AsistenciaTecnicaConTercerosUbicadosEnJurisdiccionesNoCooperantes?.AjustesParaLlegarASaldosFiscales3 || 0;

            renContent.Gastos.GastosDeDistribucionYVentas.OtrosGastosDeDistribucionYVentas.AsistenciaTecnica.JurisdiccionesNoCooperantesDeBajaONulaImposicionYRegimenesTributariosPreferenciales.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon64?.["5235Servicios"]?.AsistenciaTecnicaConTercerosUbicadosEnJurisdiccionesNoCooperantes?.AjustesParaLlegarASaldosFiscales1 || 0;

            //Gastos - Gastos de distribución y ventas - Otros gastos de distribución y ventas - Asistencia técnica - No vinculados
            
            renContent.Gastos.GastosDeDistribucionYVentas.OtrosGastosDeDistribucionYVentas.AsistenciaTecnica.NoVinculados.ValorContable =
                renContent?.Renglon64?.["5235Servicios"]?.AsistenciaTecnicaConNoVinculados?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Gastos.GastosDeDistribucionYVentas.OtrosGastosDeDistribucionYVentas.AsistenciaTecnica.NoVinculados.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon64?.["5235Servicios"]?.AsistenciaTecnicaConNoVinculados?.AjustesParaLlegarASaldosFiscales3 || 0;

            renContent.Gastos.GastosDeDistribucionYVentas.OtrosGastosDeDistribucionYVentas.AsistenciaTecnica.NoVinculados.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon64?.["5235Servicios"]?.AsistenciaTecnicaConNoVinculados?.AjustesParaLlegarASaldosFiscales1 || 0;

            //Gastos - Gastos de distribución y ventas - Otros gastos de distribución y ventas - Otros servicios

            renContent.Gastos.GastosDeDistribucionYVentas.OtrosGastosDeDistribucionYVentas.OtrosServicios.ValorContable =
                renContent?.Renglon64?.["5235Servicios"]?.OtrosServicios?.SaldosContablesADiciembre31Parciales || 0;
            
            renContent.Gastos.GastosDeDistribucionYVentas.OtrosGastosDeDistribucionYVentas.OtrosServicios.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon64?.["5235Servicios"]?.OtrosServicios?.AjustesParaLlegarASaldosFiscales3 || 0;
            
            renContent.Gastos.GastosDeDistribucionYVentas.OtrosGastosDeDistribucionYVentas.OtrosServicios.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon64?.["5235Servicios"]?.OtrosServicios?.AjustesParaLlegarASaldosFiscales1 || 0;

            //Gastos - Gastos de distribución y ventas - Otros gastos de distribución y ventas - Investigación y desarrollo
            renContent.Gastos.GastosDeDistribucionYVentas.OtrosGastosDeDistribucionYVentas.InvestigacionYDesarrollo.ValorContable =
                renContent?.Renglon64?.["5241InvestigacionYDesarrollo"]?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Gastos.GastosDeDistribucionYVentas.OtrosGastosDeDistribucionYVentas.InvestigacionYDesarrollo.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon64?.["5241InvestigacionYDesarrollo"]?.AjustesParaLlegarASaldosFiscales3 || 0;

            renContent.Gastos.GastosDeDistribucionYVentas.OtrosGastosDeDistribucionYVentas.InvestigacionYDesarrollo.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon64?.["5241InvestigacionYDesarrollo"]?.AjustesParaLlegarASaldosFiscales1 || 0;

            //Gastos - Gastos de distribución y ventas - Otros gastos de distribución y ventas - Gastos legales

            renContent.Gastos.GastosDeDistribucionYVentas.OtrosGastosDeDistribucionYVentas.GastosLegales.ValorContable =
                renContent?.Renglon64?.["5240GastosLegales"]?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Gastos.GastosDeDistribucionYVentas.OtrosGastosDeDistribucionYVentas.GastosLegales.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon64?.["5240GastosLegales"]?.AjustesParaLlegarASaldosFiscales3 || 0;

            renContent.Gastos.GastosDeDistribucionYVentas.OtrosGastosDeDistribucionYVentas.GastosLegales.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon64?.["5240GastosLegales"]?.AjustesParaLlegarASaldosFiscales1 || 0;

            //Gastos - Gastos de distribución y ventas - Otros gastos de distribución y ventas - Reparación, mantenimiento, adecuación e instalaciones

            renContent.Gastos.GastosDeDistribucionYVentas.OtrosGastosDeDistribucionYVentas.ReparacionMantenimientoAdecuacionEInstalaciones.ValorContable =
                (renContent?.Renglon64?.["5245MantenimientoYReparacion"]?.SaldosContablesADiciembre31Parciales || 0) + 
                (renContent?.Renglon64?.["5250AdecuacionesEInstalaciones"]?.SaldosContablesADiciembre31Parciales || 0);

            renContent.Gastos.GastosDeDistribucionYVentas.OtrosGastosDeDistribucionYVentas.ReparacionMantenimientoAdecuacionEInstalaciones.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                (renContent?.Renglon64?.["5245MantenimientoYReparacion"]?.AjustesParaLlegarASaldosFiscales3 || 0) + 
                (renContent?.Renglon64?.["5250AdecuacionesEInstalaciones"]?.AjustesParaLlegarASaldosFiscales3 || 0 );

            renContent.Gastos.GastosDeDistribucionYVentas.OtrosGastosDeDistribucionYVentas.ReparacionMantenimientoAdecuacionEInstalaciones.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                (renContent?.Renglon64?.["5245MantenimientoYReparacion"]?.AjustesParaLlegarASaldosFiscales1 || 0) + 
                (renContent?.Renglon64?.["5250AdecuacionesEInstalaciones"]?.AjustesParaLlegarASaldosFiscales1 || 0 );

            //Gastos - Gastos de distribución y ventas - Otros gastos de distribución y ventas - Transporte

            renContent.Gastos.GastosDeDistribucionYVentas.OtrosGastosDeDistribucionYVentas.Transporte.ValorContable =
                renContent?.Renglon64?.["5255GastosDeTransportes"]?.SaldosContablesADiciembre31Parciales || 0;
            
            renContent.Gastos.GastosDeDistribucionYVentas.OtrosGastosDeDistribucionYVentas.Transporte.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon64?.["5255GastosDeTransportes"]?.AjustesParaLlegarASaldosFiscales3 || 0;

            renContent.Gastos.GastosDeDistribucionYVentas.OtrosGastosDeDistribucionYVentas.Transporte.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon64?.["5255GastosDeTransportes"]?.AjustesParaLlegarASaldosFiscales1 || 0;

            //Gastos - Gastos de distribución y ventas - Otros gastos de distribución y ventas - Constitución de reservas

            renContent.Gastos.GastosDeDistribucionYVentas.OtrosGastosDeDistribucionYVentas.ConstitucionReservasEmpresasAseguradoras.ValorContable =
                renContent?.Renglon64?.["5237ConstitucionDeReservasEmpresasAseguradoras"]?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Gastos.GastosDeDistribucionYVentas.OtrosGastosDeDistribucionYVentas.ConstitucionReservasEmpresasAseguradoras.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon64?.["5237ConstitucionDeReservasEmpresasAseguradoras"]?.AjustesParaLlegarASaldosFiscales3 || 0;

            renContent.Gastos.GastosDeDistribucionYVentas.OtrosGastosDeDistribucionYVentas.ConstitucionReservasEmpresasAseguradoras.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon64?.["5237ConstitucionDeReservasEmpresasAseguradoras"]?.AjustesParaLlegarASaldosFiscales1 || 0;

            //Gastos - Gastos de distribución y ventas - Otros gastos de distribución y ventas - Liquidación de siniestros

            renContent.Gastos.GastosDeDistribucionYVentas.OtrosGastosDeDistribucionYVentas.LiquidacionDeSiniestros.ValorContable =
                renContent?.Renglon64?.["5238LiquidacionDeSiniestros"]?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Gastos.GastosDeDistribucionYVentas.OtrosGastosDeDistribucionYVentas.LiquidacionDeSiniestros.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon64?.["5238LiquidacionDeSiniestros"]?.AjustesParaLlegarASaldosFiscales3 || 0;
            
            renContent.Gastos.GastosDeDistribucionYVentas.OtrosGastosDeDistribucionYVentas.LiquidacionDeSiniestros.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon64?.["5238LiquidacionDeSiniestros"]?.AjustesParaLlegarASaldosFiscales1 || 0;

            //Gastos - Gastos de distribución y ventas - Otros gastos de distribución y ventas - Primas de reaseguros

            renContent.Gastos.GastosDeDistribucionYVentas.OtrosGastosDeDistribucionYVentas.PrimasDeReaseguros.ValorContable =
                renContent?.Renglon64?.["5239PrimasDeReaseguros"]?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Gastos.GastosDeDistribucionYVentas.OtrosGastosDeDistribucionYVentas.PrimasDeReaseguros.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon64?.["5239PrimasDeReaseguros"]?.AjustesParaLlegarASaldosFiscales3 || 0;

            renContent.Gastos.GastosDeDistribucionYVentas.OtrosGastosDeDistribucionYVentas.PrimasDeReaseguros.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon64?.["5239PrimasDeReaseguros"]?.AjustesParaLlegarASaldosFiscales1 || 0;

            //Gastos - Gastos de distribución y ventas - Otros gastos de distribución y ventas - Otros gastos  

            renContent.Gastos.GastosDeDistribucionYVentas.OtrosGastosDeDistribucionYVentas.OtrosGastos.ValorContable =
                renContent?.Renglon64?.["5295Diversos"]?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Gastos.GastosDeDistribucionYVentas.OtrosGastosDeDistribucionYVentas.OtrosGastos.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon64?.["5295Diversos"]?.AjustesParaLlegarASaldosFiscales3 || 0;

            renContent.Gastos.GastosDeDistribucionYVentas.OtrosGastosDeDistribucionYVentas.OtrosGastos.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon64?.["5295Diversos"]?.AjustesParaLlegarASaldosFiscales1 || 0;
            
            //Gastos - Gastos de distribución y ventas - Depreciaciones, amortizaciones y deterioros - Depreciación propiedades, planta y equipo - Del costo  

            renContent.Gastos.GastosDeDistribucionYVentas.DepreciacionesAmortizacionesYDeterioros.DepreciacionPropiedadesPlantaYEquipo.DelCosto.ValorContable =
                renContent?.Renglon64?.["5260Depreciaciones"]?.DepreciacionPropiedadesPlantaYEquipo?.DelCosto?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Gastos.GastosDeDistribucionYVentas.DepreciacionesAmortizacionesYDeterioros.DepreciacionPropiedadesPlantaYEquipo.DelCosto.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon64?.["5260Depreciaciones"]?.DepreciacionPropiedadesPlantaYEquipo?.DelCosto?.AjustesParaLlegarASaldosFiscales3 || 0;

            renContent.Gastos.GastosDeDistribucionYVentas.DepreciacionesAmortizacionesYDeterioros.DepreciacionPropiedadesPlantaYEquipo.DelCosto.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon64?.["5260Depreciaciones"]?.DepreciacionPropiedadesPlantaYEquipo?.DelCosto?.AjustesParaLlegarASaldosFiscales1 || 0;

            //Gastos - Gastos de distribución y ventas - Depreciaciones, amortizaciones y deterioros - Depreciación propiedades, planta y equipo - Del ajuste acumulado por revaluaciones o re expresiones

            renContent.Gastos.GastosDeDistribucionYVentas.DepreciacionesAmortizacionesYDeterioros.DepreciacionPropiedadesPlantaYEquipo.DelAjusteAcumunladoPorRevaluacionesOReExpresiones.ValorContable =
                renContent?.Renglon64?.["5260Depreciaciones"]?.DepreciacionPropiedadesPlantaYEquipo?.DelAjusteAcumuladoPorRevaluacionesOReExpresiones?.SaldosContablesADiciembre31Parciales || 0;

            //Gastos - Gastos de distribución y ventas - Depreciaciones, amortizaciones y deterioros - Depreciación propiedades de inversión - Del costo

            renContent.Gastos.GastosDeDistribucionYVentas.DepreciacionesAmortizacionesYDeterioros.DepreciacionPropiedadesDeInversion.DelCosto.ValorContable =
                renContent?.Renglon64?.["5260Depreciaciones"]?.DepreciacionDePropiedadesDeInversion?.DelCosto?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Gastos.GastosDeDistribucionYVentas.DepreciacionesAmortizacionesYDeterioros.DepreciacionPropiedadesDeInversion.DelCosto.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon64?.["5260Depreciaciones"]?.DepreciacionDePropiedadesDeInversion?.DelCosto?.AjustesParaLlegarASaldosFiscales3 || 0;

            renContent.Gastos.GastosDeDistribucionYVentas.DepreciacionesAmortizacionesYDeterioros.DepreciacionPropiedadesDeInversion.DelCosto.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon64?.["5260Depreciaciones"]?.DepreciacionDePropiedadesDeInversion?.DelCosto?.AjustesParaLlegarASaldosFiscales1 || 0;

            //Gastos - Gastos de distribución y ventas - Depreciaciones, amortizaciones y deterioros - Depreciación propiedades de inversión - Del ajuste acumulado por revaluaciones o re expresiones

            renContent.Gastos.GastosDeDistribucionYVentas.DepreciacionesAmortizacionesYDeterioros.DepreciacionPropiedadesDeInversion.DelAjusteAcumunladoPorRevaluacionesOReExpresiones.ValorContable =
                renContent?.Renglon64?.["5260Depreciaciones"]?.DepreciacionDePropiedadesDeInversion?.DelAjusteAcumuladoPorRevaluacionesOReExpresiones?.SaldosContablesADiciembre31Parciales || 0;

            //Gastos - Gastos de distribución y ventas - Depreciaciones, amortizaciones y deterioros - Depreciación activos biológicos - Del costo

            renContent.Gastos.GastosDeDistribucionYVentas.DepreciacionesAmortizacionesYDeterioros.DepreciacionActivosBiologicos.DelCosto.ValorContable =
                renContent?.Renglon64?.["5260Depreciaciones"]?.DepreciacionDeActivosBiologicos?.DelCosto?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Gastos.GastosDeDistribucionYVentas.DepreciacionesAmortizacionesYDeterioros.DepreciacionActivosBiologicos.DelCosto.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon64?.["5260Depreciaciones"]?.DepreciacionDeActivosBiologicos?.DelCosto?.AjustesParaLlegarASaldosFiscales3 || 0;

            renContent.Gastos.GastosDeDistribucionYVentas.DepreciacionesAmortizacionesYDeterioros.DepreciacionActivosBiologicos.DelCosto.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon64?.["5260Depreciaciones"]?.DepreciacionDeActivosBiologicos?.DelCosto?.AjustesParaLlegarASaldosFiscales1 || 0;

            //Gastos - Gastos de distribución y ventas - Depreciaciones, amortizaciones y deterioros - Depreciación activos biológicos - Del ajuste acumulado por revaluaciones o re expresiones

            renContent.Gastos.GastosDeDistribucionYVentas.DepreciacionesAmortizacionesYDeterioros.DepreciacionActivosBiologicos.DelAjusteAcumunladoPorRevaluacionesOReExpresiones.ValorContable =
                renContent?.Renglon64?.["5260Depreciaciones"]?.DepreciacionDeActivosBiologicos?.DelAjusteAcumuladoPorRevaluacionesOReExpresiones?.SaldosContablesADiciembre31Parciales || 0;

            //Gastos - Gastos de distribución y ventas - Depreciaciones, amortizaciones y deterioros - Amortización activos intangibles - Del costo

            renContent.Gastos.GastosDeDistribucionYVentas.DepreciacionesAmortizacionesYDeterioros.AmortizacionActivosIntangibles.DelCosto.ValorContable =
                renContent?.Renglon64?.["5266AmortizacionDeActivosIntangibles"]?.AmortizacionDeActivosIntangibles?.DelCosto?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Gastos.GastosDeDistribucionYVentas.DepreciacionesAmortizacionesYDeterioros.AmortizacionActivosIntangibles.DelCosto.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon64?.["5266AmortizacionDeActivosIntangibles"]?.AmortizacionDeActivosIntangibles?.DelCosto?.AjustesParaLlegarASaldosFiscales3 || 0;

            renContent.Gastos.GastosDeDistribucionYVentas.DepreciacionesAmortizacionesYDeterioros.AmortizacionActivosIntangibles.DelCosto.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon64?.["5266AmortizacionDeActivosIntangibles"]?.AmortizacionDeActivosIntangibles?.DelCosto?.AjustesParaLlegarASaldosFiscales1 || 0;
            
            //Gastos - Gastos de distribución y ventas - Depreciaciones, amortizaciones y deterioros - Amortización activos intangibles - Del ajuste acumulado por revaluaciones o re expresiones

            renContent.Gastos.GastosDeDistribucionYVentas.DepreciacionesAmortizacionesYDeterioros.AmortizacionActivosIntangibles.DelAjusteAcumunladoPorRevaluacionesOReExpresiones.ValorContable =
                renContent?.Renglon64?.["5266AmortizacionDeActivosIntangibles"]?.AmortizacionDeActivosIntangibles?.DelAjusteAcumuladoPorRevaluacionesOReExpresiones?.SaldosContablesADiciembre31Parciales || 0;

            //Gastos - Gastos de distribución y ventas - Depreciaciones, amortizaciones y deterioros - Otras depreciaciones y amortizaciones - Del costo

            renContent.Gastos.GastosDeDistribucionYVentas.DepreciacionesAmortizacionesYDeterioros.OtrasDepreciacionesYAmortizaciones.DelCosto.ValorContable =
                (renContent?.Renglon64?.["5260Depreciaciones"]?.DepreciacionDeOtrosActivos?.DelCosto?.SaldosContablesADiciembre31Parciales || 0) +
                (renContent?.Renglon64?.["5266AmortizacionDeActivosIntangibles"]?.OtrasAmortizaciones?.DelCosto?.SaldosContablesADiciembre31Parciales || 0);

            renContent.Gastos.GastosDeDistribucionYVentas.DepreciacionesAmortizacionesYDeterioros.OtrasDepreciacionesYAmortizaciones.DelCosto.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                (renContent?.Renglon64?.["5260Depreciaciones"]?.DepreciacionDeOtrosActivos?.DelCosto?.AjustesParaLlegarASaldosFiscales3 || 0) +
                (renContent?.Renglon64?.["5266AmortizacionDeActivosIntangibles"]?.OtrasAmortizaciones?.DelCosto?.AjustesParaLlegarASaldosFiscales3 || 0);

            renContent.Gastos.GastosDeDistribucionYVentas.DepreciacionesAmortizacionesYDeterioros.OtrasDepreciacionesYAmortizaciones.DelCosto.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                (renContent?.Renglon64?.["5260Depreciaciones"]?.DepreciacionDeOtrosActivos?.DelCosto?.AjustesParaLlegarASaldosFiscales1 || 0) +
                (renContent?.Renglon64?.["5266AmortizacionDeActivosIntangibles"]?.OtrasAmortizaciones?.DelCosto?.AjustesParaLlegarASaldosFiscales1 || 0);
            
            //Gastos - Gastos de distribución y ventas - Depreciaciones, amortizaciones y deterioros - Otras depreciaciones y amortizaciones - Del ajuste acumulado por revaluaciones o re expresiones

            renContent.Gastos.GastosDeDistribucionYVentas.DepreciacionesAmortizacionesYDeterioros.OtrasDepreciacionesYAmortizaciones.DelAjusteAcumunladoPorRevaluacionesOReExpresiones.ValorContable =
                (renContent?.Renglon64?.["5260Depreciaciones"]?.DepreciacionDeOtrosActivos?.DelAjusteAcumuladoPorRevaluacionesOReExpresiones?.SaldosContablesADiciembre31Parciales || 0) +
                (renContent?.Renglon64?.["5266AmortizacionDeActivosIntangibles"]?.OtrasAmortizaciones?.DelAjusteAcumuladoPorRevaluacionesOReExpresiones?.SaldosContablesADiciembre31Parciales || 0);

            //Gastos - Gastos de distribución y ventas - Depreciaciones, amortizaciones y deterioros - Deterioro del valor de los activos - Inventarios 
            renContent.Gastos.GastosDeDistribucionYVentas.DepreciacionesAmortizacionesYDeterioros.DeterioroDelValorActivos.Inventarios.ValorContable =
                renContent?.Renglon64?.["5299Deterioros"]?.Inventarios?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Gastos.GastosDeDistribucionYVentas.DepreciacionesAmortizacionesYDeterioros.DeterioroDelValorActivos.Inventarios.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon64?.["5299Deterioros"]?.Inventarios?.AjustesParaLlegarASaldosFiscales3 || 0;

            renContent.Gastos.GastosDeDistribucionYVentas.DepreciacionesAmortizacionesYDeterioros.DeterioroDelValorActivos.Inventarios.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon64?.["5299Deterioros"]?.Inventarios?.AjustesParaLlegarASaldosFiscales1 || 0;

            //Gastos - Gastos de distribución y ventas - Depreciaciones, amortizaciones y deterioros - Deterioro del valor de los activos - Propiedades, planta y equipo

            renContent.Gastos.GastosDeDistribucionYVentas.DepreciacionesAmortizacionesYDeterioros.DeterioroDelValorActivos.PropiedadesPlantaYEquipo.ValorContable =
                renContent?.Renglon64?.["5299Deterioros"]?.PropiedadesPlantaYEquipo?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Gastos.GastosDeDistribucionYVentas.DepreciacionesAmortizacionesYDeterioros.DeterioroDelValorActivos.PropiedadesPlantaYEquipo.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon64?.["5299Deterioros"]?.PropiedadesPlantaYEquipo?.AjustesParaLlegarASaldosFiscales3 || 0;

            renContent.Gastos.GastosDeDistribucionYVentas.DepreciacionesAmortizacionesYDeterioros.DeterioroDelValorActivos.PropiedadesPlantaYEquipo.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon64?.["5299Deterioros"]?.PropiedadesPlantaYEquipo?.AjustesParaLlegarASaldosFiscales1 || 0;

            //Gastos - Gastos de distribución y ventas - Depreciaciones, amortizaciones y deterioros - Deterioro del valor de los activos - Activos intangibles

            renContent.Gastos.GastosDeDistribucionYVentas.DepreciacionesAmortizacionesYDeterioros.DeterioroDelValorActivos.ActivosIntangibles.ValorContable =
                renContent?.Renglon64?.["5299Deterioros"]?.ActivosIntangibles?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Gastos.GastosDeDistribucionYVentas.DepreciacionesAmortizacionesYDeterioros.DeterioroDelValorActivos.ActivosIntangibles.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon64?.["5299Deterioros"]?.ActivosIntangibles?.AjustesParaLlegarASaldosFiscales3 || 0;

            renContent.Gastos.GastosDeDistribucionYVentas.DepreciacionesAmortizacionesYDeterioros.DeterioroDelValorActivos.ActivosIntangibles.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon64?.["5299Deterioros"]?.ActivosIntangibles?.AjustesParaLlegarASaldosFiscales1 || 0;

            //Gastos - Gastos de distribución y ventas - Depreciaciones, amortizaciones y deterioros - Deterioro del valor de los activos - Activos de exploración y evaluación de recursos minerales
            
            renContent.Gastos.GastosDeDistribucionYVentas.DepreciacionesAmortizacionesYDeterioros.ActivosDeExploracionYEvaluacionDeRecursosMinerales.ValorContable =
                renContent?.Renglon64?.["5299Deterioros"]?.ActivosDeExploracionYEvaluacionDeRecursosMinerales?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Gastos.GastosDeDistribucionYVentas.DepreciacionesAmortizacionesYDeterioros.ActivosDeExploracionYEvaluacionDeRecursosMinerales.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon64?.["5299Deterioros"]?.ActivosDeExploracionYEvaluacionDeRecursosMinerales?.AjustesParaLlegarASaldosFiscales3 || 0;

            renContent.Gastos.GastosDeDistribucionYVentas.DepreciacionesAmortizacionesYDeterioros.ActivosDeExploracionYEvaluacionDeRecursosMinerales.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon64?.["5299Deterioros"]?.ActivosDeExploracionYEvaluacionDeRecursosMinerales?.AjustesParaLlegarASaldosFiscales1 || 0;

            //Gastos - Gastos de distribución y ventas - Depreciaciones, amortizaciones y deterioros - Deterioro del valor de los activos - Propiedades de inversión medidas al modelo de costo

            renContent.Gastos.GastosDeDistribucionYVentas.DepreciacionesAmortizacionesYDeterioros.PropiedadesDeInversionMedidasAlModeloDeCosto.ValorContable =
                renContent?.Renglon64?.["5299Deterioros"]?.PropiedadesDeInversionMedidasAlModeloDeCosto?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Gastos.GastosDeDistribucionYVentas.DepreciacionesAmortizacionesYDeterioros.PropiedadesDeInversionMedidasAlModeloDeCosto.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon64?.["5299Deterioros"]?.PropiedadesDeInversionMedidasAlModeloDeCosto?.AjustesParaLlegarASaldosFiscales3 || 0;

            renContent.Gastos.GastosDeDistribucionYVentas.DepreciacionesAmortizacionesYDeterioros.PropiedadesDeInversionMedidasAlModeloDeCosto.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon64?.["5299Deterioros"]?.PropiedadesDeInversionMedidasAlModeloDeCosto?.AjustesParaLlegarASaldosFiscales1 || 0;

            //Gastos - Gastos de distribución y ventas - Depreciaciones, amortizaciones y deterioros - Deterioro del valor de los activos - Activos no corrientes mantenidos...

            renContent.Gastos.GastosDeDistribucionYVentas.DepreciacionesAmortizacionesYDeterioros.ActivosNoCorrientesMantenidosParaLaVentaDistribuirALosPropietarios.ValorContable =
                renContent?.Renglon64?.["5299Deterioros"]?.ActivosNoCorrientesMantenidosParaLaVentaDistribuirALosPropietarios?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Gastos.GastosDeDistribucionYVentas.DepreciacionesAmortizacionesYDeterioros.ActivosNoCorrientesMantenidosParaLaVentaDistribuirALosPropietarios.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon64?.["5299Deterioros"]?.ActivosNoCorrientesMantenidosParaLaVentaDistribuirALosPropietarios?.AjustesParaLlegarASaldosFiscales3 || 0;

            renContent.Gastos.GastosDeDistribucionYVentas.DepreciacionesAmortizacionesYDeterioros.ActivosNoCorrientesMantenidosParaLaVentaDistribuirALosPropietarios.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon64?.["5299Deterioros"]?.ActivosNoCorrientesMantenidosParaLaVentaDistribuirALosPropietarios?.AjustesParaLlegarASaldosFiscales1 || 0;

            //Gastos - Gastos de distribución y ventas - Depreciaciones, amortizaciones y deterioros - Deterioro del valor de los activos - Bienes de arte y cultura medidos al modelo de costo

            renContent.Gastos.GastosDeDistribucionYVentas.DepreciacionesAmortizacionesYDeterioros.BienesDeArteYCulturaMedidosAlModeloDeCosto.ValorContable =
                renContent?.Renglon64?.["5299Deterioros"]?.BienesDeArteYCulturaMedidosAlModeloDeCosto?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Gastos.GastosDeDistribucionYVentas.DepreciacionesAmortizacionesYDeterioros.BienesDeArteYCulturaMedidosAlModeloDeCosto.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon64?.["5299Deterioros"]?.BienesDeArteYCulturaMedidosAlModeloDeCosto?.AjustesParaLlegarASaldosFiscales3 || 0;

            renContent.Gastos.GastosDeDistribucionYVentas.DepreciacionesAmortizacionesYDeterioros.BienesDeArteYCulturaMedidosAlModeloDeCosto.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon64?.["5299Deterioros"]?.BienesDeArteYCulturaMedidosAlModeloDeCosto?.AjustesParaLlegarASaldosFiscales1 || 0;
            
            //Gastos - Gastos de distribución y ventas - Depreciaciones, amortizaciones y deterioros - Deterioro del valor de los activos - Activos biológicos medidos al modelo de costo

            renContent.Gastos.GastosDeDistribucionYVentas.DepreciacionesAmortizacionesYDeterioros.ActivosBiologicosMedidosAlModeloDeCosto.ValorContable =
                renContent?.Renglon64?.["5299Deterioros"]?.ActivosBiologicosMedidosAlModeloDeCosto?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Gastos.GastosDeDistribucionYVentas.DepreciacionesAmortizacionesYDeterioros.ActivosBiologicosMedidosAlModeloDeCosto.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon64?.["5299Deterioros"]?.ActivosBiologicosMedidosAlModeloDeCosto?.AjustesParaLlegarASaldosFiscales3 || 0;

            renContent.Gastos.GastosDeDistribucionYVentas.DepreciacionesAmortizacionesYDeterioros.ActivosBiologicosMedidosAlModeloDeCosto.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon64?.["5299Deterioros"]?.ActivosBiologicosMedidosAlModeloDeCosto?.AjustesParaLlegarASaldosFiscales1 || 0;

            //Gastos - Gastos de distribución y ventas - Depreciaciones, amortizaciones y deterioros - Deterioro del valor de los activos - Activos financieros 

            renContent.Gastos.GastosDeDistribucionYVentas.DepreciacionesAmortizacionesYDeterioros.ActivosFinancierosDistintosACarteraDeCreditoYOperacionesDeLeasing.ValorContable =
                renContent?.Renglon64?.["5299Deterioros"]?.ActivosFinancierosDiferentesACarteraDeCredito?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Gastos.GastosDeDistribucionYVentas.DepreciacionesAmortizacionesYDeterioros.ActivosFinancierosDistintosACarteraDeCreditoYOperacionesDeLeasing.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon64?.["5299Deterioros"]?.ActivosFinancierosDiferentesACarteraDeCredito?.AjustesParaLlegarASaldosFiscales3 || 0;

            renContent.Gastos.GastosDeDistribucionYVentas.DepreciacionesAmortizacionesYDeterioros.ActivosFinancierosDistintosACarteraDeCreditoYOperacionesDeLeasing.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon64?.["5299Deterioros"]?.ActivosFinancierosDiferentesACarteraDeCredito?.AjustesParaLlegarASaldosFiscales1 || 0;
            
            //Gastos - Gastos de distribución y ventas - Depreciaciones, amortizaciones y deterioros - Deterioro del valor de los activos - Cartera de crédito y operaciones de leasing

            renContent.Gastos.GastosDeDistribucionYVentas.DepreciacionesAmortizacionesYDeterioros.CarteraDeCreditoYOperacionesDeLeasing.ValorContable =
                renContent?.Renglon64?.["5299Deterioros"]?.CarteraDeCreditoYOperacionesDeLeasing?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Gastos.GastosDeDistribucionYVentas.DepreciacionesAmortizacionesYDeterioros.CarteraDeCreditoYOperacionesDeLeasing.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon64?.["5299Deterioros"]?.CarteraDeCreditoYOperacionesDeLeasing?.AjustesParaLlegarASaldosFiscales3 || 0;

            renContent.Gastos.GastosDeDistribucionYVentas.DepreciacionesAmortizacionesYDeterioros.CarteraDeCreditoYOperacionesDeLeasing.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon64?.["5299Deterioros"]?.CarteraDeCreditoYOperacionesDeLeasing?.AjustesParaLlegarASaldosFiscales1 || 0;
            
            //Gastos - Gastos de distribución y ventas - Depreciaciones, amortizaciones y deterioros - Deterioro del valor de los activos - Otras inversiones medidas al costo o el método de la participación

            renContent.Gastos.GastosDeDistribucionYVentas.DepreciacionesAmortizacionesYDeterioros.OtrasInversionesMedidasAlCostoOPorElMetodoDeLaParticipacion.ValorContable =
                renContent?.Renglon64?.["5299Deterioros"]?.OtrasInversionesMedidasAlCostoOPorElMetodoDeLaParticipacion?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Gastos.GastosDeDistribucionYVentas.DepreciacionesAmortizacionesYDeterioros.OtrasInversionesMedidasAlCostoOPorElMetodoDeLaParticipacion.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon64?.["5299Deterioros"]?.OtrasInversionesMedidasAlCostoOPorElMetodoDeLaParticipacion?.AjustesParaLlegarASaldosFiscales3 || 0;

            renContent.Gastos.GastosDeDistribucionYVentas.DepreciacionesAmortizacionesYDeterioros.OtrasInversionesMedidasAlCostoOPorElMetodoDeLaParticipacion.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon64?.["5299Deterioros"]?.OtrasInversionesMedidasAlCostoOPorElMetodoDeLaParticipacion?.AjustesParaLlegarASaldosFiscales1 || 0;

            //Gastos - Gastos de distribución y ventas - Depreciaciones, amortizaciones y deterioros - Deterioro del valor de los activos - Derechos de uso en arrendamientos operativos (NIIF 16)

            renContent.Gastos.GastosDeDistribucionYVentas.DepreciacionesAmortizacionesYDeterioros.DerechosDeUsoEnArrendamientosOperativosNIIF16.ValorContable =
                renContent?.Renglon64?.["5299Deterioros"]?.DerechosDeUsoEnArrendamientosOperativos?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Gastos.GastosDeDistribucionYVentas.DepreciacionesAmortizacionesYDeterioros.DerechosDeUsoEnArrendamientosOperativosNIIF16.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon64?.["5299Deterioros"]?.DerechosDeUsoEnArrendamientosOperativos?.AjustesParaLlegarASaldosFiscales3 || 0;

            renContent.Gastos.GastosDeDistribucionYVentas.DepreciacionesAmortizacionesYDeterioros.DerechosDeUsoEnArrendamientosOperativosNIIF16.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon64?.["5299Deterioros"]?.DerechosDeUsoEnArrendamientosOperativos?.AjustesParaLlegarASaldosFiscales1 || 0;

            //Gastos - Gastos de distribución y ventas - Depreciaciones, amortizaciones y deterioros - Deterioro del valor de los activos - Otros deterioros

            renContent.Gastos.GastosDeDistribucionYVentas.DepreciacionesAmortizacionesYDeterioros.OtrosDeterioros.ValorContable =
                renContent?.Renglon64?.["5299Deterioros"]?.OtrosDeteriors?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Gastos.GastosDeDistribucionYVentas.DepreciacionesAmortizacionesYDeterioros.OtrosDeterioros.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon64?.["5299Deterioros"]?.OtrosDeteriors?.AjustesParaLlegarASaldosFiscales3 || 0;

            renContent.Gastos.GastosDeDistribucionYVentas.DepreciacionesAmortizacionesYDeterioros.OtrosDeterioros.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon64?.["5299Deterioros"]?.OtrosDeteriors?.AjustesParaLlegarASaldosFiscales1 || 0;

            //Gastos - Gastos financieros - Intereses  devengados - sector financiero

            renContent.Gastos.GastosFinancieros.InteresesDevengadosSectorFinanciero.ValorContable =
                renContent?.Renglon65?.["5305"]?.IntDevSecFin?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Gastos.GastosFinancieros.InteresesDevengadosSectorFinanciero.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon65?.["5305"]?.IntDevSecFin?.AjustesParaLlegarASaldosFiscales3 || 0;

            renContent.Gastos.GastosFinancieros.InteresesDevengadosSectorFinanciero.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon65?.["5305"]?.IntDevSecFin?.AjustesParaLlegarASaldosFiscales1 || 0;

            //Gastos - Gastos financieros - Intereses devengados por préstamos de terceros

            renContent.Gastos.GastosFinancieros.InteresesDevengadosPorPrestamosDeDistintoAlSectorFinanciero.ValorContable =
                renContent?.Renglon65?.["5305"]?.IntDevPrestTer?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Gastos.GastosFinancieros.InteresesDevengadosPorPrestamosDeDistintoAlSectorFinanciero.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon65?.["5305"]?.IntDevPrestTer?.AjustesParaLlegarASaldosFiscales3 || 0;

            renContent.Gastos.GastosFinancieros.InteresesDevengadosPorPrestamosDeDistintoAlSectorFinanciero.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon65?.["5305"]?.IntDevPrestTer?.AjustesParaLlegarASaldosFiscales1 || 0;

            //Gastos - Gastos financieros - Por instrumentos financieros medidos a costo amortizado distinto a préstamos

            renContent.Gastos.GastosFinancieros.PorInstrumentosFinancierosMedidosACostoAmortizadoDistintoAPrestamos.ValorContable =
                renContent?.Renglon65?.["5305"]?.InstFin?.SaldosContablesADiciembre31Parciales || 0;

            //Gastos - Gastos financieros - Costos de transacción

            renContent.Gastos.GastosFinancieros.CostosDeTransaccionComisionesBancariasTasasEntreOtros.ValorContable =
                renContent?.Renglon65?.["5305"]?.CstTrans?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Gastos.GastosFinancieros.CostosDeTransaccionComisionesBancariasTasasEntreOtros.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon65?.["5305"]?.CstTrans?.AjustesParaLlegarASaldosFiscales3 || 0;

            renContent.Gastos.GastosFinancieros.CostosDeTransaccionComisionesBancariasTasasEntreOtros.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon65?.["5305"]?.CstTrans?.AjustesParaLlegarASaldosFiscales1 || 0;

            //Gastos - Gastos financieros - Diferencia en cambio

            renContent.Gastos.GastosFinancieros.DiferenciaEnCambio.ValorContable =
                renContent?.Renglon65?.["5305"]?.DifCamb?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Gastos.GastosFinancieros.DiferenciaEnCambio.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon65?.["5305"]?.DifCamb?.AjustesParaLlegarASaldosFiscales3 || 0;

            renContent.Gastos.GastosFinancieros.DiferenciaEnCambio.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon65?.["5305"]?.DifCamb?.AjustesParaLlegarASaldosFiscales1 || 0;

            //Gastos - Gastos financieros - Intereses implícitos (transacciones de financiación)

            renContent.Gastos.GastosFinancieros.InteresesImplicitosTransaccionesDeFinanciacion.ValorContable =
                renContent?.Renglon65?.["5305"]?.IntImpl?.SaldosContablesADiciembre31Parciales || 0;

            //Gastos - Gastos financieros - Actualización de provisiones reconocidas a valor presente

            renContent.Gastos.GastosFinancieros.ActualizacionDeProvisionesReconocidasAValorPresente.ValorContable =
                renContent?.Renglon65?.["5305"]?.ActProvRecValPres?.SaldosContablesADiciembre31Parciales || 0;

            //Gastos - Gastos financieros - Intereses por acciones preferenciales

            renContent.Gastos.GastosFinancieros.InteresesPorAccionesPreferenciales.ValorContable =
                renContent?.Renglon65?.["5305"]?.IntAccPref?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Gastos.GastosFinancieros.InteresesPorAccionesPreferenciales.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon65?.["5305"]?.IntAccPref?.AjustesParaLlegarASaldosFiscales3 || 0;

            renContent.Gastos.GastosFinancieros.InteresesPorAccionesPreferenciales.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon65?.["5305"]?.IntAccPref?.AjustesParaLlegarASaldosFiscales1 || 0;


            //Gastos - Gastos financieros - Otros gastos financieros reconocidos como gasto en el estado de resultados

            renContent.Gastos.GastosFinancieros.OtrosGastosFinancierosReconocidosComoGastoEnElEstadoDeResultados.ValorContable =
                (renContent?.Renglon65?.["5305"]?.Otro?.SaldosContablesADiciembre31Parciales || 0) +
                (renContent?.Renglon65?.["5305"]?.IntDIANSegSoc?.SaldosContablesADiciembre31Parciales || 0);

            renContent.Gastos.GastosFinancieros.OtrosGastosFinancierosReconocidosComoGastoEnElEstadoDeResultados.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                (renContent?.Renglon65?.["5305"]?.Otro?.AjustesParaLlegarASaldosFiscales3 || 0) +
                (renContent?.Renglon65?.["5305"]?.IntDIANSegSoc?.AjustesParaLlegarASaldosFiscales3 || 0);

            renContent.Gastos.GastosFinancieros.OtrosGastosFinancierosReconocidosComoGastoEnElEstadoDeResultados.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                (renContent?.Renglon65?.["5305"]?.Otro?.AjustesParaLlegarASaldosFiscales1 || 0) +
                (renContent?.Renglon65?.["5305"]?.IntDIANSegSoc?.AjustesParaLlegarASaldosFiscales1 || 0);

            //Gastos - Pérdidas por inversiones en subsidiarias, asociadas y/o negocios conjuntos - Pérdidas por el método de participación

            renContent.Gastos.PerdidasPorInversionesEnSubsidiariasAsociadasYONegociosConjuntos.PerdidasPorElMetodoDeParticipacion.ValorContable =
                renContent?.Renglon66?.["5313PerdidaPorInversionesEnSubsidiariasAsociadasYONegociosConjuntos"]?.PerdidasPorElMetodoDeParticipacion?.SaldosContablesADiciembre31Parciales || 0;

            //Gastos - Pérdidas por inversiones en subsidiarias, asociadas y/o negocios conjuntos - Pérdidas por mediciones a valor razonable

            renContent.Gastos.PerdidasPorInversionesEnSubsidiariasAsociadasYONegociosConjuntos.PerdidasPorMedicionesAValorRazonable.ValorContable =
                renContent?.Renglon66?.["5313PerdidaPorInversionesEnSubsidiariasAsociadasYONegociosConjuntos"]?.PerdidasPorMedicionAValorRazonable?.SaldosContablesADiciembre31Parciales || 0;

            //Gastos - Pérdidas por mediciones a valor razonable - Activos biológicos

            renContent.Gastos.PerdidasPorMedicionesAValorRazonable.ActivosBiologicos.ValorContable =
                renContent?.Renglon66?.["5314PerdidasPorMedicionesAValorRazonable"]?.DeActivosBiologicos?.SaldosContablesADiciembre31Parciales || 0;

            //Gastos - Pérdidas por mediciones a valor razonable - Propiedades de inversión

            renContent.Gastos.PerdidasPorMedicionesAValorRazonable.PropiedadesDeInversion.ValorContable =
                renContent?.Renglon66?.["5314PerdidasPorMedicionesAValorRazonable"]?.DePropiedadesDeInversion?.SaldosContablesADiciembre31Parciales || 0;

            //Gastos - Pérdidas por mediciones a valor razonable - Instrumentos financieros

            renContent.Gastos.PerdidasPorMedicionesAValorRazonable.InstrumentosFinancieros.ValorContable =
                renContent?.Renglon66?.["5314PerdidasPorMedicionesAValorRazonable"]?.DeInstrumentosFinancieros?.SaldosContablesADiciembre31Parciales || 0;

            //Gastos - Pérdidas por mediciones a valor razonable - Instrumentos derivados

            renContent.Gastos.PerdidasPorMedicionesAValorRazonable.InstrumentosDerivados.ValorContable =
                renContent?.Renglon66?.["5314PerdidasPorMedicionesAValorRazonable"]?.DeInstrumentosDerivados?.SaldosContablesADiciembre31Parciales || 0;

            //Gastos - Pérdidas por mediciones a valor razonable - Otras 

            renContent.Gastos.PerdidasPorMedicionesAValorRazonable.Otras.ValorContable =
                renContent?.Renglon66?.["5314PerdidasPorMedicionesAValorRazonable"]?.DeOtrasActivos?.SaldosContablesADiciembre31Parciales || 0;

            //Gastos - Pérdida en la venta o enajenación de activos fijos - Propiedades, planta y equipo

            renContent.Gastos.PerdidaEnLaVentaOEnajenacionDeActivosFijos.PropiedadesPlantaYEquipo.ValorContable =
                (renContent?.Renglon66?.["5310PerdidaEnVentaYRetiroDeBienesPoseidosMenosDeDosAnios"]?.PerdidaEnVentaYRetiroDeBienesPoseidosMenosDeDosAnios?.DePropiedadesPlantaYEquipo?.SaldosContablesADiciembre31Parciales || 0) +
                (renContent?.Renglon66?.["5310PerdidaEnVentaYRetiroDeBienesPoseidosMenosDeDosAnios"]?.PerdidaEnVentaYRetiroDeBienesPoseidosMasDeDosAnios?.DePropiedadesPlantaYEquipo?.SaldosContablesADiciembre31Parciales || 0);

            renContent.Gastos.PerdidaEnLaVentaOEnajenacionDeActivosFijos.PropiedadesPlantaYEquipo.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                (renContent?.Renglon66?.["5310PerdidaEnVentaYRetiroDeBienesPoseidosMenosDeDosAnios"]?.PerdidaEnVentaYRetiroDeBienesPoseidosMenosDeDosAnios?.DePropiedadesPlantaYEquipo?.AjustesParaLlegarASaldosFiscales3 || 0) +
                (renContent?.Renglon66?.["5310PerdidaEnVentaYRetiroDeBienesPoseidosMenosDeDosAnios"]?.PerdidaEnVentaYRetiroDeBienesPoseidosMasDeDosAnios?.DePropiedadesPlantaYEquipo?.AjustesParaLlegarASaldosFiscales3 || 0);

            renContent.Gastos.PerdidaEnLaVentaOEnajenacionDeActivosFijos.PropiedadesPlantaYEquipo.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                (renContent?.Renglon66?.["5310PerdidaEnVentaYRetiroDeBienesPoseidosMenosDeDosAnios"]?.PerdidaEnVentaYRetiroDeBienesPoseidosMenosDeDosAnios?.DePropiedadesPlantaYEquipo?.AjustesParaLlegarASaldosFiscales1 || 0) +
                (renContent?.Renglon66?.["5310PerdidaEnVentaYRetiroDeBienesPoseidosMenosDeDosAnios"]?.PerdidaEnVentaYRetiroDeBienesPoseidosMasDeDosAnios?.DePropiedadesPlantaYEquipo?.AjustesParaLlegarASaldosFiscales1 || 0);

            //Gastos - Pérdida en la venta o enajenación de activos fijos - propiedades de inversión

            renContent.Gastos.PerdidaEnLaVentaOEnajenacionDeActivosFijos.PropiedadesDeInversion.ValorContable =
                (renContent?.Renglon66?.["5310PerdidaEnVentaYRetiroDeBienesPoseidosMenosDeDosAnios"]?.PerdidaEnVentaYRetiroDeBienesPoseidosMenosDeDosAnios?.DePropiedadesDeInversion?.SaldosContablesADiciembre31Parciales || 0) +
                (renContent?.Renglon66?.["5310PerdidaEnVentaYRetiroDeBienesPoseidosMenosDeDosAnios"]?.PerdidaEnVentaYRetiroDeBienesPoseidosMasDeDosAnios?.DePropiedadesDeInversion?.SaldosContablesADiciembre31Parciales || 0);

            renContent.Gastos.PerdidaEnLaVentaOEnajenacionDeActivosFijos.PropiedadesDeInversion.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                (renContent?.Renglon66?.["5310PerdidaEnVentaYRetiroDeBienesPoseidosMenosDeDosAnios"]?.PerdidaEnVentaYRetiroDeBienesPoseidosMenosDeDosAnios?.DePropiedadesDeInversion?.AjustesParaLlegarASaldosFiscales3 || 0) +
                (renContent?.Renglon66?.["5310PerdidaEnVentaYRetiroDeBienesPoseidosMenosDeDosAnios"]?.PerdidaEnVentaYRetiroDeBienesPoseidosMasDeDosAnios?.DePropiedadesDeInversion?.AjustesParaLlegarASaldosFiscales3 || 0);
            
            renContent.Gastos.PerdidaEnLaVentaOEnajenacionDeActivosFijos.PropiedadesDeInversion.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                (renContent?.Renglon66?.["5310PerdidaEnVentaYRetiroDeBienesPoseidosMenosDeDosAnios"]?.PerdidaEnVentaYRetiroDeBienesPoseidosMenosDeDosAnios?.DePropiedadesDeInversion?.AjustesParaLlegarASaldosFiscales1 || 0) +
                (renContent?.Renglon66?.["5310PerdidaEnVentaYRetiroDeBienesPoseidosMenosDeDosAnios"]?.PerdidaEnVentaYRetiroDeBienesPoseidosMasDeDosAnios?.DePropiedadesDeInversion?.AjustesParaLlegarASaldosFiscales1 || 0);

            //Gastos - Pérdida en la venta o enajenación de activos fijos - Activos no corrientes mantenidos para la venta / entregar a propietarios

            renContent.Gastos.PerdidaEnLaVentaOEnajenacionDeActivosFijos.ActivosNoCorrientesMantenidosParaLaVentaEntregarAPropietarios.ValorContable =
                (renContent?.Renglon66?.["5310PerdidaEnVentaYRetiroDeBienesPoseidosMenosDeDosAnios"]?.PerdidaEnVentaYRetiroDeBienesPoseidosMenosDeDosAnios?.DeActivosNoCorrientesMantenidosParaLaVentaEntregarAPropietarios?.SaldosContablesADiciembre31Parciales || 0) +
                (renContent?.Renglon66?.["5310PerdidaEnVentaYRetiroDeBienesPoseidosMenosDeDosAnios"]?.PerdidaEnVentaYRetiroDeBienesPoseidosMasDeDosAnios?.DeActivosNoCorrientesMantenidosParaLaVentaEntregarAPropietarios?.SaldosContablesADiciembre31Parciales || 0);

            renContent.Gastos.PerdidaEnLaVentaOEnajenacionDeActivosFijos.ActivosNoCorrientesMantenidosParaLaVentaEntregarAPropietarios.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                (renContent?.Renglon66?.["5310PerdidaEnVentaYRetiroDeBienesPoseidosMenosDeDosAnios"]?.PerdidaEnVentaYRetiroDeBienesPoseidosMenosDeDosAnios?.DeActivosNoCorrientesMantenidosParaLaVentaEntregarAPropietarios?.AjustesParaLlegarASaldosFiscales3 || 0) +
                (renContent?.Renglon66?.["5310PerdidaEnVentaYRetiroDeBienesPoseidosMenosDeDosAnios"]?.PerdidaEnVentaYRetiroDeBienesPoseidosMasDeDosAnios?.DeActivosNoCorrientesMantenidosParaLaVentaEntregarAPropietarios?.AjustesParaLlegarASaldosFiscales3 || 0);
            
            renContent.Gastos.PerdidaEnLaVentaOEnajenacionDeActivosFijos.ActivosNoCorrientesMantenidosParaLaVentaEntregarAPropietarios.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                (renContent?.Renglon66?.["5310PerdidaEnVentaYRetiroDeBienesPoseidosMenosDeDosAnios"]?.PerdidaEnVentaYRetiroDeBienesPoseidosMenosDeDosAnios?.DeActivosNoCorrientesMantenidosParaLaVentaEntregarAPropietarios?.AjustesParaLlegarASaldosFiscales1 || 0) +
                (renContent?.Renglon66?.["5310PerdidaEnVentaYRetiroDeBienesPoseidosMenosDeDosAnios"]?.PerdidaEnVentaYRetiroDeBienesPoseidosMasDeDosAnios?.DeActivosNoCorrientesMantenidosParaLaVentaEntregarAPropietarios?.AjustesParaLlegarASaldosFiscales1 || 0);
            
            //Gastos - Pérdida en la venta o enajenación de activos fijos - Valoración y venta de inversiones fondo de liquidez y títulos participativos, entre otros
            
            renContent.Gastos.PerdidaEnLaVentaOEnajenacionDeActivosFijos.ValoracionYVentaDeInversionesFondoDeLiquidezYTitulosParticipativos.ValorContable =
                (renContent?.Renglon66?.["5310PerdidaEnVentaYRetiroDeBienesPoseidosMenosDeDosAnios"]?.PerdidaEnVentaYRetiroDeBienesPoseidosMenosDeDosAnios?.DeValoracionYVentaDeInversionesFondoDeLiquidezYTitulosParticipativos?.SaldosContablesADiciembre31Parciales || 0) +
                (renContent?.Renglon66?.["5310PerdidaEnVentaYRetiroDeBienesPoseidosMenosDeDosAnios"]?.PerdidaEnVentaYRetiroDeBienesPoseidosMasDeDosAnios?.DeValoracionYVentaDeInversionesFondoDeLiquidezYTitulosParticipativos?.SaldosContablesADiciembre31Parciales || 0);

            renContent.Gastos.PerdidaEnLaVentaOEnajenacionDeActivosFijos.ValoracionYVentaDeInversionesFondoDeLiquidezYTitulosParticipativos.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                (renContent?.Renglon66?.["5310PerdidaEnVentaYRetiroDeBienesPoseidosMenosDeDosAnios"]?.PerdidaEnVentaYRetiroDeBienesPoseidosMenosDeDosAnios?.DeValoracionYVentaDeInversionesFondoDeLiquidezYTitulosParticipativos?.AjustesParaLlegarASaldosFiscales3 || 0) +
                (renContent?.Renglon66?.["5310PerdidaEnVentaYRetiroDeBienesPoseidosMenosDeDosAnios"]?.PerdidaEnVentaYRetiroDeBienesPoseidosMasDeDosAnios?.DeValoracionYVentaDeInversionesFondoDeLiquidezYTitulosParticipativos?.AjustesParaLlegarASaldosFiscales3 || 0);
            
            renContent.Gastos.PerdidaEnLaVentaOEnajenacionDeActivosFijos.ValoracionYVentaDeInversionesFondoDeLiquidezYTitulosParticipativos.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                (renContent?.Renglon66?.["5310PerdidaEnVentaYRetiroDeBienesPoseidosMenosDeDosAnios"]?.PerdidaEnVentaYRetiroDeBienesPoseidosMenosDeDosAnios?.DeValoracionYVentaDeInversionesFondoDeLiquidezYTitulosParticipativos?.AjustesParaLlegarASaldosFiscales1 || 0) +
                (renContent?.Renglon66?.["5310PerdidaEnVentaYRetiroDeBienesPoseidosMenosDeDosAnios"]?.PerdidaEnVentaYRetiroDeBienesPoseidosMasDeDosAnios?.DeValoracionYVentaDeInversionesFondoDeLiquidezYTitulosParticipativos?.AjustesParaLlegarASaldosFiscales1 || 0);
        
            //Gastos - Pérdida en la venta o enajenación de activos fijos - Por disposición de otros instrumentos financieros

            renContent.Gastos.PerdidaEnLaVentaOEnajenacionDeActivosFijos.PorDisposicionDeOtrosInstrumentosFinancieros.ValorContable =
                (renContent?.Renglon66?.["5310PerdidaEnVentaYRetiroDeBienesPoseidosMenosDeDosAnios"]?.PerdidaEnVentaYRetiroDeBienesPoseidosMenosDeDosAnios?.DePorDisposicionDeOtrosInstrumentosFinancieros?.SaldosContablesADiciembre31Parciales || 0) +
                (renContent?.Renglon66?.["5310PerdidaEnVentaYRetiroDeBienesPoseidosMenosDeDosAnios"]?.PerdidaEnVentaYRetiroDeBienesPoseidosMasDeDosAnios?.DePorDisposicionDeOtrosInstrumentosFinancieros?.SaldosContablesADiciembre31Parciales || 0);

            renContent.Gastos.PerdidaEnLaVentaOEnajenacionDeActivosFijos.PorDisposicionDeOtrosInstrumentosFinancieros.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                (renContent?.Renglon66?.["5310PerdidaEnVentaYRetiroDeBienesPoseidosMenosDeDosAnios"]?.PerdidaEnVentaYRetiroDeBienesPoseidosMenosDeDosAnios?.DePorDisposicionDeOtrosInstrumentosFinancieros?.AjustesParaLlegarASaldosFiscales3 || 0) +
                (renContent?.Renglon66?.["5310PerdidaEnVentaYRetiroDeBienesPoseidosMenosDeDosAnios"]?.PerdidaEnVentaYRetiroDeBienesPoseidosMasDeDosAnios?.DePorDisposicionDeOtrosInstrumentosFinancieros?.AjustesParaLlegarASaldosFiscales3 || 0);
            
            renContent.Gastos.PerdidaEnLaVentaOEnajenacionDeActivosFijos.PorDisposicionDeOtrosInstrumentosFinancieros.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                (renContent?.Renglon66?.["5310PerdidaEnVentaYRetiroDeBienesPoseidosMenosDeDosAnios"]?.PerdidaEnVentaYRetiroDeBienesPoseidosMenosDeDosAnios?.DePorDisposicionDeOtrosInstrumentosFinancieros?.AjustesParaLlegarASaldosFiscales1 || 0) +
                (renContent?.Renglon66?.["5310PerdidaEnVentaYRetiroDeBienesPoseidosMenosDeDosAnios"]?.PerdidaEnVentaYRetiroDeBienesPoseidosMasDeDosAnios?.DePorDisposicionDeOtrosInstrumentosFinancieros?.AjustesParaLlegarASaldosFiscales1 || 0);

            //Gastos - Pérdida en la venta o enajenación de activos fijos - Activos Intangibles

            renContent.Gastos.PerdidaEnLaVentaOEnajenacionDeActivosFijos.ActivosIntangibles.ValorContable =
                (renContent?.Renglon66?.["5310PerdidaEnVentaYRetiroDeBienesPoseidosMenosDeDosAnios"]?.PerdidaEnVentaYRetiroDeBienesPoseidosMenosDeDosAnios?.DeActivosIntangibles?.SaldosContablesADiciembre31Parciales || 0) +
                (renContent?.Renglon66?.["5310PerdidaEnVentaYRetiroDeBienesPoseidosMenosDeDosAnios"]?.PerdidaEnVentaYRetiroDeBienesPoseidosMasDeDosAnios?.DeActivosIntangibles?.SaldosContablesADiciembre31Parciales || 0);
            
            renContent.Gastos.PerdidaEnLaVentaOEnajenacionDeActivosFijos.ActivosIntangibles.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                (renContent?.Renglon66?.["5310PerdidaEnVentaYRetiroDeBienesPoseidosMenosDeDosAnios"]?.PerdidaEnVentaYRetiroDeBienesPoseidosMenosDeDosAnios?.DeActivosIntangibles?.AjustesParaLlegarASaldosFiscales3 || 0) +
                (renContent?.Renglon66?.["5310PerdidaEnVentaYRetiroDeBienesPoseidosMenosDeDosAnios"]?.PerdidaEnVentaYRetiroDeBienesPoseidosMasDeDosAnios?.DeActivosIntangibles?.AjustesParaLlegarASaldosFiscales3 || 0);

            renContent.Gastos.PerdidaEnLaVentaOEnajenacionDeActivosFijos.ActivosIntangibles.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                (renContent?.Renglon66?.["5310PerdidaEnVentaYRetiroDeBienesPoseidosMenosDeDosAnios"]?.PerdidaEnVentaYRetiroDeBienesPoseidosMenosDeDosAnios?.DeActivosIntangibles?.AjustesParaLlegarASaldosFiscales1 || 0) +
                (renContent?.Renglon66?.["5310PerdidaEnVentaYRetiroDeBienesPoseidosMenosDeDosAnios"]?.PerdidaEnVentaYRetiroDeBienesPoseidosMasDeDosAnios?.DeActivosIntangibles?.AjustesParaLlegarASaldosFiscales1 || 0);

            //Gastos - Pérdida en la venta o enajenación de activos fijos - Descuento en operaciones de factoring

            renContent.Gastos.PerdidaEnLaVentaOEnajenacionDeActivosFijos.DescuentoEnOperacionesDeFactoring.ValorContable =
                renContent?.Renglon66?.["5310PerdidaEnVentaYRetiroDeBienesPoseidosMenosDeDosAnios"]?.PerdidaEnVentaYRetiroDeBienesPoseidosMasDeDosAnios?.DescuentoEnOperacionesDeFactoring?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Gastos.PerdidaEnLaVentaOEnajenacionDeActivosFijos.DescuentoEnOperacionesDeFactoring.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon66?.["5310PerdidaEnVentaYRetiroDeBienesPoseidosMenosDeDosAnios"]?.PerdidaEnVentaYRetiroDeBienesPoseidosMasDeDosAnios?.DescuentoEnOperacionesDeFactoring?.AjustesParaLlegarASaldosFiscales3 || 0;

            renContent.Gastos.PerdidaEnLaVentaOEnajenacionDeActivosFijos.DescuentoEnOperacionesDeFactoring.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon66?.["5310PerdidaEnVentaYRetiroDeBienesPoseidosMenosDeDosAnios"]?.PerdidaEnVentaYRetiroDeBienesPoseidosMasDeDosAnios?.DescuentoEnOperacionesDeFactoring?.AjustesParaLlegarASaldosFiscales1 || 0;
    
            //Gastos - Pérdida en la venta o enajenación de activos fijos - Inversiones en acciones y otras participaciones

            renContent.Gastos.PerdidaEnLaVentaOEnajenacionDeActivosFijos.InversionesEnAccionesYOtrasParticipaciones.ValorContable =
                (renContent?.Renglon66?.["5310PerdidaEnVentaYRetiroDeBienesPoseidosMenosDeDosAnios"]?.PerdidaEnVentaYRetiroDeBienesPoseidosMenosDeDosAnios?.DeInversionesEnAccionesYOtrasParticipaciones?.SaldosContablesADiciembre31Parciales || 0) +
                (renContent?.Renglon66?.["5310PerdidaEnVentaYRetiroDeBienesPoseidosMenosDeDosAnios"]?.PerdidaEnVentaYRetiroDeBienesPoseidosMasDeDosAnios?.DeInversionesEnAccionesYOtrasParticipaciones?.SaldosContablesADiciembre31Parciales || 0);

            renContent.Gastos.PerdidaEnLaVentaOEnajenacionDeActivosFijos.InversionesEnAccionesYOtrasParticipaciones.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                (renContent?.Renglon66?.["5310PerdidaEnVentaYRetiroDeBienesPoseidosMenosDeDosAnios"]?.PerdidaEnVentaYRetiroDeBienesPoseidosMenosDeDosAnios?.DeInversionesEnAccionesYOtrasParticipaciones?.AjustesParaLlegarASaldosFiscales3 || 0) +
                (renContent?.Renglon66?.["5310PerdidaEnVentaYRetiroDeBienesPoseidosMenosDeDosAnios"]?.PerdidaEnVentaYRetiroDeBienesPoseidosMasDeDosAnios?.DeInversionesEnAccionesYOtrasParticipaciones?.AjustesParaLlegarASaldosFiscales3 || 0);

            renContent.Gastos.PerdidaEnLaVentaOEnajenacionDeActivosFijos.InversionesEnAccionesYOtrasParticipaciones.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                (renContent?.Renglon66?.["5310PerdidaEnVentaYRetiroDeBienesPoseidosMenosDeDosAnios"]?.PerdidaEnVentaYRetiroDeBienesPoseidosMenosDeDosAnios?.DeInversionesEnAccionesYOtrasParticipaciones?.AjustesParaLlegarASaldosFiscales1 || 0) +
                (renContent?.Renglon66?.["5310PerdidaEnVentaYRetiroDeBienesPoseidosMenosDeDosAnios"]?.PerdidaEnVentaYRetiroDeBienesPoseidosMasDeDosAnios?.DeInversionesEnAccionesYOtrasParticipaciones?.AjustesParaLlegarASaldosFiscales1 || 0);

            //Gastos - Pérdida en la venta o enajenación de activos fijos - Otros

            renContent.Gastos.PerdidaEnLaVentaOEnajenacionDeActivosFijos.Otros.ValorContable =
                (renContent?.Renglon66?.["5310PerdidaEnVentaYRetiroDeBienesPoseidosMenosDeDosAnios"]?.PerdidaEnVentaYRetiroDeBienesPoseidosMenosDeDosAnios?.DeOtrosActivos?.SaldosContablesADiciembre31Parciales || 0) +
                (renContent?.Renglon66?.["5310PerdidaEnVentaYRetiroDeBienesPoseidosMenosDeDosAnios"]?.PerdidaEnVentaYRetiroDeBienesPoseidosMasDeDosAnios?.DeOtrosActivos?.SaldosContablesADiciembre31Parciales || 0);

            renContent.Gastos.PerdidaEnLaVentaOEnajenacionDeActivosFijos.Otros.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                (renContent?.Renglon66?.["5310PerdidaEnVentaYRetiroDeBienesPoseidosMenosDeDosAnios"]?.PerdidaEnVentaYRetiroDeBienesPoseidosMenosDeDosAnios?.DeOtrosActivos?.AjustesParaLlegarASaldosFiscales3 || 0) +
                (renContent?.Renglon66?.["5310PerdidaEnVentaYRetiroDeBienesPoseidosMenosDeDosAnios"]?.PerdidaEnVentaYRetiroDeBienesPoseidosMasDeDosAnios?.DeOtrosActivos?.AjustesParaLlegarASaldosFiscales3 || 0);

            renContent.Gastos.PerdidaEnLaVentaOEnajenacionDeActivosFijos.Otros.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                (renContent?.Renglon66?.["5310PerdidaEnVentaYRetiroDeBienesPoseidosMenosDeDosAnios"]?.PerdidaEnVentaYRetiroDeBienesPoseidosMenosDeDosAnios?.DeOtrosActivos?.AjustesParaLlegarASaldosFiscales1 || 0) +
                (renContent?.Renglon66?.["5310PerdidaEnVentaYRetiroDeBienesPoseidosMenosDeDosAnios"]?.PerdidaEnVentaYRetiroDeBienesPoseidosMasDeDosAnios?.DeOtrosActivos?.AjustesParaLlegarASaldosFiscales1 || 0);
            
            //Gastos - Gastos por provisiones (pasivos de monto o fecha inciertos) - Garantías

            renContent.Gastos.GastosPorProvisionesPasivosDeMontoOFechaInciertos.Garantias.ValorContable =
                renContent?.Renglon66?.["5315GastosPorProvisionesPasivosDeMontoOFechaInciertos"]?.Garantias?.SaldosContablesADiciembre31Parciales || 0;

            //Gastos - Gastos por provisiones (pasivos de monto o fecha inciertos) - Contratos onerosos

            renContent.Gastos.GastosPorProvisionesPasivosDeMontoOFechaInciertos.ContratosOnerosos.ValorContable =
                renContent?.Renglon66?.["5315GastosPorProvisionesPasivosDeMontoOFechaInciertos"]?.ContratosOnerosos?.SaldosContablesADiciembre31Parciales || 0;

            //Gastos - Gastos por provisiones (pasivos de monto o fecha inciertos) - Litigios

            renContent.Gastos.GastosPorProvisionesPasivosDeMontoOFechaInciertos.Litigios.ValorContable =
                renContent?.Renglon66?.["5315GastosPorProvisionesPasivosDeMontoOFechaInciertos"]?.Litigios?.SaldosContablesADiciembre31Parciales || 0;

            //Gastos - Gastos por provisiones (pasivos de monto o fecha inciertos) - Reembolsos a clientes

            renContent.Gastos.GastosPorProvisionesPasivosDeMontoOFechaInciertos.ReembolsosAClientes.ValorContable =
                renContent?.Renglon66?.["5315GastosPorProvisionesPasivosDeMontoOFechaInciertos"]?.ReembolsosAClientes?.SaldosContablesADiciembre31Parciales || 0;

            //Gastos - Gastos por provisiones (pasivos de monto o fecha inciertos) - Reestructuraciones de negocios

            renContent.Gastos.GastosPorProvisionesPasivosDeMontoOFechaInciertos.ReestructuracionesDeNegocios.ValorContable =
                renContent?.Renglon66?.["5315GastosPorProvisionesPasivosDeMontoOFechaInciertos"]?.ReestNeg?.SaldosContablesADiciembre31Parciales || 0;

            //Gastos - Gastos por provisiones (pasivos de monto o fecha inciertos) - Pasivos contingentes asumidos en una combinación de negocios

            renContent.Gastos.GastosPorProvisionesPasivosDeMontoOFechaInciertos.PasivosContingentesAsumidosEnUnaCombinacionDeNegocios.ValorContable =
                renContent?.Renglon66?.["5315GastosPorProvisionesPasivosDeMontoOFechaInciertos"]?.PasivosContingentesAsumidosEnUnaCombinacionDeNegocios?.SaldosContablesADiciembre31Parciales || 0;

            //Gastos - Gastos por provisiones (pasivos de monto o fecha inciertos) - Otros

            renContent.Gastos.GastosPorProvisionesPasivosDeMontoOFechaInciertos.Otros.ValorContable =
                renContent?.Renglon66?.["5315GastosPorProvisionesPasivosDeMontoOFechaInciertos"]?.Otros?.SaldosContablesADiciembre31Parciales || 0;

            //Gastos - Otros gastos - Transferencias, subvenciones y ayudas gubernamentales

            renContent.Gastos.OtrosGastos.TransferenciasSubvencionesYAyudasGubernamentales.ValorContable =
                renContent?.Renglon66?.["5395GastosDiversos"]?.TransferenciasSubvencionesYAyudasGubernamentales?.SaldosContablesADiciembre31Parciales || 0;

            renContent.Gastos.OtrosGastos.TransferenciasSubvencionesYAyudasGubernamentales.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon66?.["5395GastosDiversos"]?.TransferenciasSubvencionesYAyudasGubernamentales?.AjustesParaLlegarASaldosFiscales3 || 0;

            renContent.Gastos.OtrosGastos.TransferenciasSubvencionesYAyudasGubernamentales.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon66?.["5395GastosDiversos"]?.TransferenciasSubvencionesYAyudasGubernamentales?.AjustesParaLlegarASaldosFiscales1 || 0;
            
            //Gastos - Otros gastos - Donaciones, aportaciones y similares

            renContent.Gastos.OtrosGastos.DonacionesAportacionesYSimilares.ValorContable =
                renContent?.Renglon66?.["5395GastosDiversos"]?.Donaciones?.SaldosContablesADiciembre31Parciales || 0;

            //Gastos - Otros gastos - Contribuciones a educación de los empleados (art.107-2 del ET)

            renContent.Gastos.OtrosGastos.ContribucionesAEducacionDeLosEmpleadosArt1072DelET.ValorContable =
                renContent?.Renglon64?.["521501IVAEnLaAdquisicionOImportacionDeBienesDeCapitalMedianteLeasing"]?.SaldosContablesADiciembre31Parciales || 0;
            
            renContent.Gastos.OtrosGastos.ContribucionesAEducacionDeLosEmpleadosArt1072DelET.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon64?.["521501IVAEnLaAdquisicionOImportacionDeBienesDeCapitalMedianteLeasing"]?.AjustesParaLlegarASaldosFiscales3 || 0;

            renContent.Gastos.OtrosGastos.ContribucionesAEducacionDeLosEmpleadosArt1072DelET.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                renContent?.Renglon64?.["521501IVAEnLaAdquisicionOImportacionDeBienesDeCapitalMedianteLeasing"]?.AjustesParaLlegarASaldosFiscales1 || 0;

            //Gastos - Otros gastos - 
            
            renContent.Gastos.OtrosGastos.Otros.ValorContable =
                (renContent?.Renglon66?.["5316GastosExtraordinarios"]?.SaldosContablesADiciembre31Parciales || 0) +
                (renContent?.Renglon66?.["5395GastosDiversos"]?.Otros?.SaldosContablesADiciembre31Parciales || 0);

            renContent.Gastos.OtrosGastos.Otros.MenorValorFiscalPorReconocimientoExencionesLimitaciones =
                (renContent?.Renglon66?.["5316GastosExtraordinarios"]?.AjustesParaLlegarASaldosFiscales3 || 0) +
                (renContent?.Renglon66?.["5395GastosDiversos"]?.Otros?.AjustesParaLlegarASaldosFiscales3 || 0);

            renContent.Gastos.OtrosGastos.Otros.MayorValorFiscalPorReconocimientoExencionesLimitaciones =
                (renContent?.Renglon66?.["5316GastosExtraordinarios"]?.AjustesParaLlegarASaldosFiscales1 || 0) +
                (renContent?.Renglon66?.["5395GastosDiversos"]?.Otros?.AjustesParaLlegarASaldosFiscales1 || 0);

            //INFORMATIVO-CLASIFICACIÓN DE DIFERENCIAS - Diferencias permanentes que disminuyen la Renta Liquida (-) - Ingresos no constitutivos de renta ni ganancia ocasional

            renContent.InformativoClasificacionDiferencias.DiferenciasPermanentesQueDisminuyenLaRentaLiquida.IngresosNoConstitutivosRenta.ValorFiscalAlQueTieneDerecho =
                renContent?.Gastos?.DeAdministracion?.DepreciacionesAmortizacionesDeterioros?.OtrasDepreciaciones?.DelCosto?.ValorFiscal || 0;

            //AJUSTES PARA LIQUIDACIÓN - Menos: Valor inversiones realizadas en el periodo

            renContent.AjustesParaLiquidacion.MenosValorInversionesRealizadasEnElPeriodo =
                renContent?.Renglon68?.SaldosFiscalesADiciembre31Totales || 0;

            //AJUSTES PARA LIQUIDACIÓN - Más: Valor inversiones liquidadas en el periodo

            renContent.AjustesParaLiquidacion.MasValorInversionesLiquidasEnElPeriodo =
                renContent?.Renglon69?.SaldosFiscalesADiciembre31Totales || 0;

            //Renta líquida por recuperación de deducciones
            renContent.RentaLiquidaPorRecuperacionDeDeducciones.ValorFiscal =
                renContent?.Renglon70?.TotalRentaPorRecuperacionDeDeduccionesSaldosFiscalesADiciembre31 || 0;

            //Compensaciones - De pérdidas fiscales

            renContent.Compensaciones.DePerdidasFiscales.ValorFiscal =
                renContent?.Renglon74?.CompenPerFisc?.SaldosFiscalesADiciembre31Parciales || 0;

            //Compensaciones - Del exceso de renta presuntiva sobre renta ordinaria

            renContent.Compensaciones.DelExcesoDeRentaPresuntivaSobreRentaOrdinaria.ValorFiscal = 
                renContent?.Renglon74?.CompensacionesDeExcesosDeRentaPresuntiva?.SubRentPres?.SaldosFiscalesADiciembre31Parciales || 0;

            //Renta Exenta

            renContent.RentaExenta.ValorFiscal =
                renContent?.Renglon77?.TotalRentasExentasSaldosFiscalesADiciembre31 || 0;

            //Rentas gravables (renta líquida) - Pérdidas compensadas modificadas por Liquidación Oficial

            renContent.RentasGravablesRentaLiquida.PerdidasCompensadasModificadasPorLiquidacionOficial.ValorFiscal =
                renContent?.Renglon78?.RentLiq?.SaldosFiscalesADiciembre31Parciales || 0;

            //Rentas gravables (renta líquida) - Pasivos inexistentes
            
            renContent.RentasGravablesRentaLiquida.PasivosInexistentes.ValorFiscal =
                renContent?.Renglon78?.PasivNoReal?.SaldosFiscalesADiciembre31Parciales || 0;

            //Rentas gravables (renta líquida) - Omisión de activos

            renContent.RentasGravablesRentaLiquida.OmisionDeActivos.ValorFiscal =
                renContent?.Renglon78?.ActOmi?.SaldosFiscalesADiciembre31Parciales || 0;

            //Rentas gravables (renta líquida) - Comparación patrimonial

            renContent.RentasGravablesRentaLiquida.ComparacionPatrimonial.ValorFiscal =
                renContent?.Renglon78?.RentComp?.SaldosFiscalesADiciembre31Parciales || 0;

            //Impuesto sobre la renta líquida gravable

            renContent.ImpuestoSobreLaRentaLiquidaGravable.ValorFiscal =
                renContent?.Renglon92?.Total92SaldosFiscalesADiciembre31 || 0;

            //Ganancias Ocasionales gravables
            renContent.GananciasOcasionalesGravables.TotalGananciasOcasionalesGravables.ValorFiscal =
                renContent?.Renglon85?.TotalGananciasOcasionalesGravablesSaldosFiscalesADiciembre31 || 0;

            //Ganancias Ocasionales gravables - Ingresos por ganancia ocasional en venta de activos fijos

            renContent.GananciasOcasionalesGravables.IngresosPorGananciaOcasionalEnVentaDeActivosFijos.ValorFiscal =
                renContent?.Renglon80?.["429543PremiosRifasYLoterias"]?.PrecioDeVentaActivosFijosPoseidosMasDeDosAnios?.AjustesParaLlegarASaldosFiscales3 || 0;

            //Ganancias Ocasionales gravables - Otros ingresos por ganancia ocasional

            //renContent.GananciasOcasionalesGravables.OtrosIngresosPorGananciaOcasional.ValorFiscal =
                //(renContent?.Renglon80?.TotalesSaldosFiscalesADiciembre31 || 0) -
                //(renContent?.Renglon62?.["61CostosDeLasMercanciasFabricadasYVendidas"]?.InventarioInicialDeTrabajoEnProceso?. || 0); 

            //Ganancias Ocasionales gravables - Costos por ganancia ocasional en venta de activos fijos

            renContent.GananciasOcasionalesGravables.CostosPorGananciaOcasionalEnVentaDeActivosFijos.ValorFiscal =
                renContent?.Renglon83?.CostoFiscalDeActivoFijoOBiologicoVendidoYPoseidoPorMasDeDosAños?.SaldosFiscalesADiciembre31Parciales || 0;

            //Ganancias Ocasionales gravables - Otras ganancias ocasionales no gravadas y exentas

            renContent.GananciasOcasionalesGravables.OtrasGananciasOcasionalesNoGravadasYExentas.ValorFiscal =
                renContent?.Renglon84?.TotalGananciasOcasionalesNoGravadasYExentasSaldosFiscalesADiciembre31 || 0;


            //Ganancias Ocasionales gravables - Rentas deudores régimen Ley 1116 de 2006, Decretos 560 y 772

            renContent.GananciasOcasionalesGravables.RentasDeudoresRegimenLey1116De2006Decretos560Y772De2020.ValorFiscal =
                renContent?.Renglon81?.TotalRentaDeudoresSaldosFiscalesADiciembre31 || 0;

            //Ganancias Ocasionales gravables - Utilización pérdidas fiscales acumuladas (Inc. 2, Art 15 Decreto

            renContent.GananciasOcasionalesGravables.UtilizacionPerdidasFiscalesAcumuladasInc2Art15Decreto772De2020.ValorFiscal =
                renContent?.Renglon82?.TotalUtilizacionPerdidasFiscalesAcumuladasSaldosFiscalesADiciembre31 || 0;

            //Ganancias Ocasionales gravables - Impuesto de ganancia ocasional

            renContent.GananciasOcasionalesGravables.ImpuestoDeGananciaOcasional.ValorFiscal =
                renContent?.Renglon95ImpuestoDeGananciasOcasionales?.TotalImpuestoDeGananciasOcasionalesSaldosFiscalesADiciembre31 || 0;

            //Descuentos tributarios

            renContent.DescuentosTributarios.ValorFiscal =
                renContent?.Renglon93?.TotalDescuentosTributariosSaldosFiscalesADiciembre31 || 0;

            //Descuentos por impuestos pagados en el exterior por ganancias ocasionales

            renContent.DescuentosPorImpuestosPagadosEnElExteriorPorGananciasOcasionales.ValorFiscal =
                renContent?.Renglon96?.SaldosFiscalesADiciembre31Totales || 0;

            //Valor inversión obras por impuestos hasta del 50% del valor del impuesto a cargo (Modalidad de pago 1)

            renContent.ValorInversionObrasPorImpuestosHastaEl50PorcientoDelValorDelImpuestoACargoModalidadDePago1.ValorFiscal =
                renContent?.Renglon98?.TotalSaldosFiscalesADiciembre31 || 0;

            //Descuento efectivo inversión obras por impuestos (Modalidad de pago 2)

            renContent.DescuentoEfectivoInversionObrasPorImpuestosModalidadDePago2.ValorFiscal =
                renContent?.Renglon99?.TotalSaldosFiscalesADiciembre31 || 0;

            //Anticipo renta liquidado año anterior
            
            renContent.AnticipoRentaLiquidadoAnioAnterior.ValorFiscal =
                renContent?.Renglon101MenosAnticipoRentaLiquidadiGravableAnterior?.TotalesSaldosFiscalesADiciembre31 || 0;

            //Anticipo sobretasa liquidado año gravable anterior

            renContent.AnticipoSobretasaLiquidadoAnioGravableAnterior.ValorFiscal =
                renContent?.Renglon107?.TotalSaldosFiscalesADiciembre31 || 0;

            //Saldo a favor año gravable anterior sin solicitud de devolución o compensación - Otras retenciones - Por ventas

            renContent.SaldoAFavorAnioGravableAnteriorSinSolicitudDeDevolucionOCompensacion.OtrasRetenciones.PorVentas.ValorFiscal =
                renContent?.Renglon104?.PorVentas?.TotalPorVentasSaldosFiscalesADiciembre31 || 0;

            //Saldo a favor año gravable anterior sin solicitud de devolución o compensación - Otras retenciones - Por servicios

            renContent.SaldoAFavorAnioGravableAnteriorSinSolicitudDeDevolucionOCompensacion.OtrasRetenciones.PorServicios.ValorFiscal =
                renContent?.Renglon104?.PorServicios?.TotalPorServiciosSaldosFiscalesADiciembre31 || 0;
            //Saldo a favor año gravable anterior sin solicitud de devolución o compensación - Otras retenciones - Por honorarios y comisiones

            renContent.SaldoAFavorAnioGravableAnteriorSinSolicitudDeDevolucionOCompensacion.OtrasRetenciones.PorHonorariosYComisiones.ValorFiscal =
                renContent?.Renglon104?.PorHonorariosYComisiones?.TotalPorHonorariosYComisionesSaldosFiscalesADiciembre31 || 0;

            //Saldo a favor año gravable anterior sin solicitud de devolución o compensación - Otras retenciones - Por rendimientos financieros

            renContent.SaldoAFavorAnioGravableAnteriorSinSolicitudDeDevolucionOCompensacion.OtrasRetenciones.PorRendimientosFinancieros.ValorFiscal =
                renContent?.Renglon104?.PorRendimientoFinanciero?.TotalPorRendimientoFinancieroSaldosFiscalesADiciembre31 || 0;

            //Saldo a favor año gravable anterior sin solicitud de devolución o compensación - Otras retenciones - Por dividendos y participaciones

            renContent.SaldoAFavorAnioGravableAnteriorSinSolicitudDeDevolucionOCompensacion.OtrasRetenciones.PorDividendosYParticipaciones.ValorFiscal =
                renContent?.Renglon104?.PorDividendosYParticipaciones?.TotalPorDividendosYParticipacionesSaldosFiscalesADiciembre31 || 0;

            //Saldo a favor año gravable anterior sin solicitud de devolución o compensación - Otras retenciones - Otras retenciones
            //TODO: Verificar este campo

            renContent.SaldoAFavorAnioGravableAnteriorSinSolicitudDeDevolucionOCompensacion.OtrasRetenciones.OtrasRetenciones.ValorFiscal =
                (renContent?.Renglon104?.PorOtrosConceptosInteresesLoteriasYRifas?.TotalPorOtrosConceptosInteresesLoteriasYRifasSaldosFiscalesADiciembre31 || 0)


            //Anticipo renta por el año gravable siguiente

            renContent.AnticipoRentaPorElAnioGravableSiguiente.ValorFiscal =
                renContent?.Renglon106?.TotalSaldosFiscalesADiciembre31 || 0;

            //Anticipo sobretasa instituciones financieras año gravable anterior

            renContent.AnticipoSobretasaInstitucionesFinancierasAnioGravableAnterior.ValorFiscal =
                renContent?.Renglon107?.TotalSaldosFiscalesADiciembre31 || 0;

            //Sobretasa instituciones financieras

            renContent.SobretasaInstitucionesFinancieras.ValorFiscal =
                renContent?.Renglon108?.TotalSaldosFiscalesADiciembre31 || 0;

            //Anticipo sobretasa instituciones financieras año gravable siguiente

            renContent.AnticipoSobretasaInstitucionesFinancierasAnioGravableSiguiente.ValorFiscal =
                renContent?.Renglon109?.TotalSaldosFiscalesADiciembre31 || 0;

            //Crédito fiscal para inversiones en proyectos de investigación, desarrollo tecnológico

            renContent.CreditoFiscalParaInversionesEnProyectosDeInvestigacionDesarrolloTecnologicoEInnovacionOVinculacionDeCapitalHumanoDeAltoNivelArt2561DelETCreadoConArt168Ley1955MayoDe2019.ValorFiscal =
                renContent?.Renglon100?.TotalSaldosFiscalesADiciembre31 || 0;

            //Sanciones
            renContent.Sanciones.ValorFiscal =
                renContent?.Renglon111Sanciones?.TotalesSaldosFiscalesADiciembre31 || 0;

            //DatosInformativosConcepto - OTROS DATOS INFORMATIVOS - Total costos y gastos de nómina

            renContent.DatosInformativosConcepto.OtrosDatosInformativos.TotalCostosYGastosDeNomina.ValorContable =
                renContent?.Renglon33?.TotalCostosYGastosDeNominaSaldosContablesADiciembre31 || 0;

            renContent.DatosInformativosConcepto.OtrosDatosInformativos.TotalCostosYGastosDeNomina.ValorFiscal =
                renContent?.Renglon33?.TotalCostosYGastosDeNominaSaldosFiscalesADiciembre31 || 0;

            //DatosInformativosConcepto - OTROS DATOS INFORMATIVOS - Aportes al sistema de seguridad social

            renContent.DatosInformativosConcepto.OtrosDatosInformativos.AportesAlSistemaDeSecuridadSocial.ValorContable =
                renContent?.Renglon34?.TotalAportesAlSistemaDeSeguridadSocialSaldosContablesADiciembre31 || 0;

            renContent.DatosInformativosConcepto.OtrosDatosInformativos.AportesAlSistemaDeSecuridadSocial.ValorFiscal =
                renContent?.Renglon34?.TotalAportesAlSistemaDeSeguridadSocialSaldosFiscalesADiciembre31 || 0;

            //DatosInformativosConcepto - OTROS DATOS INFORMATIVOS - Aportes al SENA, ICBF, cajas de compensación

            renContent.DatosInformativosConcepto.OtrosDatosInformativos.AportesAlSENAICBFCajasDeCompensacion.ValorContable =
                renContent?.Renglon35?.TotalAportesAlSENAICBFCajaCompensacionSaldosContablesADiciembre31 || 0;
            
            renContent.DatosInformativosConcepto.OtrosDatosInformativos.AportesAlSENAICBFCajasDeCompensacion.ValorFiscal =
                renContent?.Renglon35?.TotalAportesAlSENAICBFCajaCompensacionSaldosFiscalesADiciembre31 || 0;

        }   



        return rentaLiquida;
    }
}