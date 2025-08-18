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

            //referencias y calculos
            renContent.Ingresos.IngresosNetosActividadIndustrialComercialYServicios.IngresosNetosActividadIndustrialComercialYServicios.VentaDeBienesAlTerritorioNacional.ValorContable =
                detContent.Renglon47.VentaDeBienes.AClientesNacionalesPorFueraDeZonaFranca.SaldosContablesADiciembre31Parciales;
            renContent.Ingresos.IngresosNetosActividadIndustrialComercialYServicios.IngresosNetosActividadIndustrialComercialYServicios.VentaDeBienesAOtrosPaises.ValorContable =
                detContent.Renglon47.VentaDeBienes.ExportacionesSinIncluirLasExportacionesATerritoriosOPaisesNoCooperantes.SaldosContablesADiciembre31Parciales;
            renContent.Ingresos.IngresosNetosActividadIndustrialComercialYServicios.IngresosNetosActividadIndustrialComercialYServicios.VentaDeBienesZonaFranca.ValorContable =
                detContent.Renglon47.VentaDeBienes.AClientesEnZonasFrancasQueNoSeanVinculadosEconomicos.SaldosContablesADiciembre31Parciales;
            renContent.Ingresos.IngresosNetosActividadIndustrialComercialYServicios.IngresosNetosActividadIndustrialComercialYServicios.VentaDeBienesComercializadorasInternacionales.ValorContable =
                detContent.Renglon47.VentaDeBienes.ASociedadesDeComercializacionInternacional.SaldosContablesADiciembre31Parciales;            
            renContent.Ingresos.IngresosNetosActividadIndustrialComercialYServicios.IngresosNetosActividadIndustrialComercialYServicios.VentaDeBienesJurisdiccionesNoCooperantesDeBajaONulaImposicionYRegiminesTributariosPreferenciales.ValorContable =
                detContent.Renglon47.VentaDeBienes.AClientesEnJurisdiccionesNoCooperantesPeroQueNoSeanVinculadosEconomicos.SaldosContablesADiciembre31Parciales;
            renContent.Ingresos.IngresosNetosActividadIndustrialComercialYServicios.IngresosNetosActividadIndustrialComercialYServicios.VentaDeBienesVinculadoEconomicosZonaFrancaYExterior.ValorContable =
                detContent.Renglon47.VentaDeBienes.AVinculadosEconomicosUbicadosEnZonaFrancaOUbicadosEnCualquierOtroPais.SaldosContablesADiciembre31Parciales;
            //
            renContent.Ingresos.IngresosNetosActividadIndustrialComercialYServicios.IngresosNetosActividadIndustrialComercialYServicios.PrestacionDeServiciosAlTerritorioNacional.ValorContable =
                detContent.Renglon47.ServiciosGeneralesSinIncluirHonorariosProfesionales.AClientesNacionalesPorFueraDeZonaFranca.SaldosContablesADiciembre31Parciales;
            renContent.Ingresos.IngresosNetosActividadIndustrialComercialYServicios.IngresosNetosActividadIndustrialComercialYServicios.PrestacionDeServiciosExportacionAOtrosPaises.ValorContable =
                detContent.Renglon47.ServiciosGeneralesSinIncluirHonorariosProfesionales.ExportacionesSinIncluirLasExportacionesATerritoriosOPaisesNoCooperantes.SaldosContablesADiciembre31Parciales;
            renContent.Ingresos.IngresosNetosActividadIndustrialComercialYServicios.IngresosNetosActividadIndustrialComercialYServicios.PrestacionDeServiciosZonaFranca.ValorContable =
                detContent.Renglon47.ServiciosGeneralesSinIncluirHonorariosProfesionales.AClientesEnZonasFrancasQueNoSeanVinculadosEconomicos.SaldosContablesADiciembre31Parciales;
            renContent.Ingresos.IngresosNetosActividadIndustrialComercialYServicios.IngresosNetosActividadIndustrialComercialYServicios.PrestacionDeServiciosComercializadorasInternacionales.ValorContable =
                detContent.Renglon47.ServiciosGeneralesSinIncluirHonorariosProfesionales.ASociedadesDeComercializacionInternacional.SaldosContablesADiciembre31Parciales;
            renContent.Ingresos.IngresosNetosActividadIndustrialComercialYServicios.IngresosNetosActividadIndustrialComercialYServicios.PrestacionDeServiciosJurisdiccionesNoCooperantesDeBajaONulaImposicionYRegiminesTributariosPreferenciales.ValorContable =
                detContent.Renglon47.ServiciosGeneralesSinIncluirHonorariosProfesionales.AClientesEnJurisdiccionesNoCooperantesPeroQueNoSeanVinculadosEconomicos.SaldosContablesADiciembre31Parciales;            
            renContent.Ingresos.IngresosNetosActividadIndustrialComercialYServicios.IngresosNetosActividadIndustrialComercialYServicios.PrestacionDeServiciosVinculadoEconomicosZonaFrancaYExterior.ValorContable =
                detContent.Renglon47.ServiciosGeneralesSinIncluirHonorariosProfesionales.AVinculadosEconomicosUbicadosEnZonaFrancaOUbicadosEnCualquierOtroPais.SaldosContablesADiciembre31Parciales;
            //
            renContent.Ingresos.IngresosNetosActividadIndustrialComercialYServicios.IngresosNetosActividadIndustrialComercialYServicios.ServiciosDeConstruccion.ValorContable =
                detContent.Renglon47.ServiciosDeConstruccion.SaldosContablesADiciembre31Parciales;
            renContent.Ingresos.IngresosNetosActividadIndustrialComercialYServicios.IngresosNetosActividadIndustrialComercialYServicios.AcuerdosDeConcesionDeServicios.ValorContable =
                detContent.Renglon47.AcuerdosDeConcesionDeServicios.SaldosContablesADiciembre31Parciales;
            renContent.Ingresos.IngresosNetosActividadIndustrialComercialYServicios.IngresosNetosActividadIndustrialComercialYServicios.ArrendamientosOperativos.ValorContable =
                detContent.Renglon47.ArrendamientosOperativos.SaldosContablesADiciembre31Parciales;
            renContent.Ingresos.IngresosNetosActividadIndustrialComercialYServicios.IngresosNetosActividadIndustrialComercialYServicios.Regalías.ValorContable =
                detContent.Renglon47.Regalias.SaldosContablesADiciembre31Parciales;
            renContent.Ingresos.IngresosNetosActividadIndustrialComercialYServicios.IngresosNetosActividadIndustrialComercialYServicios.ComisionesRelacionesDeAgencia.ValorContable =
                detContent.Renglon47.ComisionesRelacionesDeAgencia.SaldosContablesADiciembre31Parciales;
            renContent.Ingresos.IngresosNetosActividadIndustrialComercialYServicios.IngresosNetosActividadIndustrialComercialYServicios.HonorariosProfesionales.ValorContable =
                detContent.Renglon47.HonorariosProfesionales.SaldosContablesADiciembre31Parciales;
            renContent.Ingresos.IngresosNetosActividadIndustrialComercialYServicios.IngresosNetosActividadIndustrialComercialYServicios.ActividadesDeSegurosYDeCapitalizacion.ValorContable =
                detContent.Renglon47.ActividadesDeSegurosYDeCapitalizacion.SaldosContablesADiciembre31Parciales;
            renContent.Ingresos.IngresosNetosActividadIndustrialComercialYServicios.IngresosNetosActividadIndustrialComercialYServicios.LiberacionDeReservasEnContratosDeSeguros.ValorContable =
                detContent.Renglon47.LiberacionDeReservasEnContratosDeSegunos.SaldosContablesADiciembre31Parciales;
            renContent.Ingresos.IngresosNetosActividadIndustrialComercialYServicios.IngresosNetosActividadIndustrialComercialYServicios.ComisionesBancariasCostosDeTransaccionEntroOtros.ValorContable =
                detContent.Renglon47.ComisionesBancariasCostosDeTransaccionEntreOtros.SaldosContablesADiciembre31Parciales;
            renContent.Ingresos.IngresosNetosActividadIndustrialComercialYServicios.IngresosNetosActividadIndustrialComercialYServicios.OtrosIngresos.ValorContable =
                detContent.Renglon47.OtrosIngresos.SaldosContablesADiciembre31Parciales;
            //
            renContent.Ingresos.IngresosNetosActividadIndustrialComercialYServicios.DevolucionesRebajasYDescuentos.EnVentaDeBienes.ValorContable =
                renContent.Renglon59["4175DevolucionesYRebajasEnVentas"].EnVentaDeBienes.SaldosContablesADiciembre31Parciales;
            renContent.Ingresos.IngresosNetosActividadIndustrialComercialYServicios.DevolucionesRebajasYDescuentos.EnPrestacionDeServicios.ValorContable =
                renContent.Renglon59["4175DevolucionesYRebajasEnVentas"].EnPrestacionDeServicios.SaldosContablesADiciembre31Parciales;
            renContent.Ingresos.IngresosNetosActividadIndustrialComercialYServicios.DevolucionesRebajasYDescuentos.OtrasDevolucionesRebajasYDescuentos.ValorContable =
                renContent.Renglon59["4175DevolucionesYRebajasEnVentas"].OtrasDevolucionesRebajasYDescuentos.SaldosContablesADiciembre31Parciales;
            //
            
        }


        return rentaLiquida;
    }
}