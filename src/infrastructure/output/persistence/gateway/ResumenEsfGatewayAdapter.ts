import prisma from "../../../../config/database";
import { FormResumenEsferi } from "../../../../domain/models/FormResumenEsferiModel";
import { FormsGatewayIntPort } from "../../../../application/output/FormsGatewayIntPort";

export class ResumenEsfGatewayAdapter
  implements FormsGatewayIntPort<FormResumenEsferi>
{
  async getIDForm(
    stuID: string,
    roomID: string
  ): Promise<FormResumenEsferi | null> {
    const report = await prisma.report.findFirst({
      where: { stuID: stuID, roomID: roomID },
    });
    const resumenEsf = await prisma.formresumenesferi.findUnique({
      where: { resID: report?.resID },
    });
    return resumenEsf;
  }

  async createForm(resumenEsf: FormResumenEsferi): Promise<FormResumenEsferi> {
    return prisma.formresumenesferi.create({
      data: {
        resContent: { ...resumenEsf.resContent },
      },
    });
  }

  async updateForm(
    stuID: string,
    roomID: string,
    resumenEsf: FormResumenEsferi
  ): Promise<FormResumenEsferi> {
    const report = await prisma.report.findFirst({
      where: { stuID: stuID, roomID: roomID },
    });
    return prisma.formresumenesferi.update({
      where: { resID: report?.resID },
      data: {
        resContent: { ...resumenEsf },
      },
    });
  }
  async calculateReference(
    stuID: string,
    roomID: string
  ): Promise<FormResumenEsferi | null> {
    const report = await prisma.report.findFirst({
      where: { stuID: stuID, roomID: roomID },
    });
    const resumenEsf = await prisma.formresumenesferi.findUnique({
      where: { resID: report?.resID },
    });

    const esfPatrimonio = await prisma.formesfpatrimonio.findUnique({
      where: { esfID: report?.esfID },
    });

    const rentaLiquida = await prisma.formrentaliquida.findUnique({
      where: { renID: report?.renID },
    });

    if (
      resumenEsf &&
      typeof resumenEsf.resContent === "object" &&
      resumenEsf.resContent !== null
    ) {
      const content = resumenEsf?.resContent as any;
      const esfContent = esfPatrimonio?.esfContent as any;
      const renContent = rentaLiquida?.renContent as any;

      //---------------Activos
      //valor contable
      content.EstadoDeSituacionFinancieraPatrimonio.Activos.EfectivoYEquivalentesAlEfectivo.ValorContable = esfContent?.Activos?.ActivosEquivalentesEfectivo?.Total?.ValorContable || 0;

      content.EstadoDeSituacionFinancieraPatrimonio.Activos.InversionesEInstrumentosFinancierosDerivados.ValorContable = esfContent?.Activos?.InversionesInstrumentosFinancierosDerivadosVN?.Total?.ValorContable || 0;

      content.EstadoDeSituacionFinancieraPatrimonio.Activos.CuentasPorCobrar.ValorContable = esfContent?.Activos?.CuentasComercialesCobrarOtrasPorCobrar?.Total?.ValorContable || 0;

      content.EstadoDeSituacionFinancieraPatrimonio.Activos.Inventarios.ValorContable = esfContent?.Activos?.Inventarios?.Total?.ValorContable || 0;

      content.EstadoDeSituacionFinancieraPatrimonio.Activos.GastosPagadosPorAnticipado.ValorContable = esfContent?.Activos?.GastosPagadosPorAnticipado?.Total?.ValorContable || 0;

      content.EstadoDeSituacionFinancieraPatrimonio.Activos.ActivosPorImpuestosCorrientes.ValorContable = esfContent?.Activos?.ActivosImpuestosCorrientes?.Total?.ValorContable || 0;

        content.EstadoDeSituacionFinancieraPatrimonio.Activos.ActivosPorImpuestosDiferidos.ValorContable = esfContent?.Activos?.ActivosImpuestosDiferidos?.Total?.ValorContable || 0;

        content.EstadoDeSituacionFinancieraPatrimonio.Activos.PropiedadesPlantaYEquipo.ValorContable = esfContent?.Activos?.PropiedadesPlantaEquipo?.Total?.ValorContable || 0;

        content.EstadoDeSituacionFinancieraPatrimonio.Activos.ActivosIntangibles.ValorContable = esfContent?.Activos?.ActivosIntangibles?.Total?.ValorContable || 0;

        content.EstadoDeSituacionFinancieraPatrimonio.Activos.PropiedadesDeInversion.ValorContable = esfContent?.Activos?.PropiedadesInversion?.Total?.ValorContable || 0;

        content.EstadoDeSituacionFinancieraPatrimonio.Activos.ActivosNoCorrientesMantenidosParaLaVentaDistribuirALosPropietarios.ValorContable = esfContent?.Activos?.ActivosNoCorrientes?.Total?.ValorContable || 0;

        content.EstadoDeSituacionFinancieraPatrimonio.Activos.ActivosBiologicos.ValorContable = esfContent?.Activos?.ActivosBiologicos?.Total?.ValorContable || 0;

        content.EstadoDeSituacionFinancieraPatrimonio.Activos.OtrosActivos.ValorContable = esfContent?.Activos?.OtrosActivos?.Total?.ValorContable || 0;

        content.EstadoDeSituacionFinancieraPatrimonio.Activos.TotalActivos.ValorContable = esfContent?.Activos?.Total?.ValorContable || 0;

        //valor fiscal
        content.EstadoDeSituacionFinancieraPatrimonio.Activos.EfectivoYEquivalentesAlEfectivo.ValorFiscal = esfContent?.Activos?.ActivosEquivalentesEfectivo?.Total?.ValorFiscal || 0;

        content.EstadoDeSituacionFinancieraPatrimonio.Activos.InversionesEInstrumentosFinancierosDerivados.ValorFiscal = esfContent?.Activos?.InversionesInstrumentosFinancierosDerivadosVN?.Total?.ValorFiscal || 0;

        content.EstadoDeSituacionFinancieraPatrimonio.Activos.CuentasPorCobrar.ValorFiscal = esfContent?.Activos?.CuentasComercialesCobrarOtrasPorCobrar?.Total?.ValorFiscal || 0;

        content.EstadoDeSituacionFinancieraPatrimonio.Activos.Inventarios.ValorFiscal = esfContent?.Activos?.Inventarios?.Total?.ValorFiscal || 0;

        content.EstadoDeSituacionFinancieraPatrimonio.Activos.GastosPagadosPorAnticipado.ValorFiscal = esfContent?.Activos?.GastosPagadosPorAnticipado?.Total?.ValorFiscal || 0;

        content.EstadoDeSituacionFinancieraPatrimonio.Activos.ActivosPorImpuestosCorrientes.ValorFiscal = esfContent?.Activos?.ActivosImpuestosCorrientes?.Total?.ValorFiscal || 0;

        content.EstadoDeSituacionFinancieraPatrimonio.Activos.ActivosPorImpuestosDiferidos.ValorFiscal = esfContent?.Activos?.ActivosImpuestosDiferidos?.Total?.ValorFiscal || 0;

        content.EstadoDeSituacionFinancieraPatrimonio.Activos.PropiedadesPlantaYEquipo.ValorFiscal = esfContent?.Activos?.PropiedadesPlantaEquipo?.Total?.ValorFiscal || 0;

        content.EstadoDeSituacionFinancieraPatrimonio.Activos.ActivosIntangibles.ValorFiscal = esfContent?.Activos?.ActivosIntangibles?.Total?.ValorFiscal || 0;

        content.EstadoDeSituacionFinancieraPatrimonio.Activos.PropiedadesDeInversion.ValorFiscal = esfContent?.Activos?.PropiedadesInversion?.Total?.ValorFiscal || 0;

        content.EstadoDeSituacionFinancieraPatrimonio.Activos.ActivosNoCorrientesMantenidosParaLaVentaDistribuirALosPropietarios.ValorFiscal = esfContent?.Activos?.ActivosNoCorrientes?.Total?.ValorFiscal || 0;

        content.EstadoDeSituacionFinancieraPatrimonio.Activos.ActivosBiologicos.ValorFiscal = esfContent?.Activos?.ActivosBiologicos?.Total?.ValorFiscal || 0;

        content.EstadoDeSituacionFinancieraPatrimonio.Activos.OtrosActivos.ValorFiscal = esfContent?.Activos?.OtrosActivos?.Total?.ValorFiscal || 0;

        content.EstadoDeSituacionFinancieraPatrimonio.Activos.TotalActivos.ValorFiscal = esfContent?.Activos?.Total?.ValorFiscal || 0;

        //variacion
        content.EstadoDeSituacionFinancieraPatrimonio.Activos.EfectivoYEquivalentesAlEfectivo.Variacion = (esfContent?.Activos?.ActivosEquivalentesEfectivo?.Total?.ValorContable || 0) - (esfContent?.Activos?.ActivosEquivalentesEfectivo?.Total?.ValorFiscal || 0);

        content.EstadoDeSituacionFinancieraPatrimonio.Activos.InversionesEInstrumentosFinancierosDerivados.Variacion = (esfContent?.Activos?.InversionesInstrumentosFinancierosDerivadosVN?.Total?.ValorContable || 0) - (esfContent?.Activos?.InversionesInstrumentosFinancierosDerivadosVN?.Total?.ValorFiscal || 0);

        content.EstadoDeSituacionFinancieraPatrimonio.Activos.CuentasPorCobrar.Variacion = (esfContent?.Activos?.CuentasComercialesCobrarOtrasPorCobrar?.Total?.ValorContable || 0) - (esfContent?.Activos?.CuentasComercialesCobrarOtrasPorCobrar?.Total?.ValorFiscal || 0);

        content.EstadoDeSituacionFinancieraPatrimonio.Activos.Inventarios.Variacion = (esfContent?.Activos?.Inventarios?.Total?.ValorContable || 0) - (esfContent?.Activos?.Inventarios?.Total?.ValorFiscal || 0);

        content.EstadoDeSituacionFinancieraPatrimonio.Activos.GastosPagadosPorAnticipado.Variacion = (esfContent?.Activos?.GastosPagadosPorAnticipado?.Total?.ValorContable || 0) - (esfContent?.Activos?.GastosPagadosPorAnticipado?.Total?.ValorFiscal || 0);

        content.EstadoDeSituacionFinancieraPatrimonio.Activos.ActivosPorImpuestosCorrientes.Variacion = (esfContent?.Activos?.ActivosImpuestosCorrientes?.Total?.ValorContable || 0) - (esfContent?.Activos?.ActivosImpuestosCorrientes?.Total?.ValorFiscal || 0);

        content.EstadoDeSituacionFinancieraPatrimonio.Activos.ActivosPorImpuestosDiferidos.Variacion = (esfContent?.Activos?.ActivosImpuestosDiferidos?.Total?.ValorContable || 0) - (esfContent?.Activos?.ActivosImpuestosDiferidos?.Total?.ValorFiscal || 0);

        content.EstadoDeSituacionFinancieraPatrimonio.Activos.PropiedadesPlantaYEquipo.Variacion = (esfContent?.Activos?.PropiedadesPlantaEquipo?.Total?.ValorContable || 0) - (esfContent?.Activos?.PropiedadesPlantaEquipo?.Total?.ValorFiscal || 0);

        content.EstadoDeSituacionFinancieraPatrimonio.Activos.ActivosIntangibles.Variacion = (esfContent?.Activos?.ActivosIntangibles?.Total?.ValorContable || 0) - (esfContent?.Activos?.ActivosIntangibles?.Total?.ValorFiscal || 0);

        content.EstadoDeSituacionFinancieraPatrimonio.Activos.PropiedadesDeInversion.Variacion = (esfContent?.Activos?.PropiedadesInversion?.Total?.ValorContable || 0) - (esfContent?.Activos?.PropiedadesInversion?.Total?.ValorFiscal || 0);

        content.EstadoDeSituacionFinancieraPatrimonio.Activos.ActivosNoCorrientesMantenidosParaLaVentaDistribuirALosPropietarios.Variacion = (esfContent?.Activos?.ActivosNoCorrientes?.Total?.ValorContable || 0) - (esfContent?.Activos?.ActivosNoCorrientes?.Total?.ValorFiscal || 0);

        content.EstadoDeSituacionFinancieraPatrimonio.Activos.ActivosBiologicos.Variacion = (esfContent?.Activos?.ActivosBiologicos?.Total?.ValorContable || 0) - (esfContent?.Activos?.ActivosBiologicos?.Total?.ValorFiscal || 0);

        content.EstadoDeSituacionFinancieraPatrimonio.Activos.OtrosActivos.Variacion = (esfContent?.Activos?.OtrosActivos?.Total?.ValorContable || 0) - (esfContent?.Activos?.OtrosActivos?.Total?.ValorFiscal || 0);

        content.EstadoDeSituacionFinancieraPatrimonio.Activos.TotalActivos.Variacion = (esfContent?.Activos?.Total?.ValorContable || 0) - (esfContent?.Activos?.Total?.ValorFiscal || 0);

        //---------------Pasivos
        //valor contable
        content.EstadoDeSituacionFinancieraPatrimonio.Pasivos.ObligacionesFinancierasYCuentasPorPagar.ValorContable = esfContent?.Pasivos?.ArrendamientosPorPagar?.Total?.ValorContable || 0;

        content.EstadoDeSituacionFinancieraPatrimonio.Pasivos.ArrendamientosPorPagar.ValorContable = esfContent?.Pasivos?.ArrendamientosPorPagar?.Total?.ValorContable || 0;

        content.EstadoDeSituacionFinancieraPatrimonio.Pasivos.OtrosPasivosFinancieros.ValorContable = esfContent?.Pasivos?.OtrosPasivosFinancieros?.Total?.ValorContable || 0;

        content.EstadoDeSituacionFinancieraPatrimonio.Pasivos.ImpuestosGravamenesYTasasPorPagar.ValorContable = esfContent?.Pasivos?.ImpuestosGravamenesTasasPorPagar?.Total?.ValorContable || 0;

        content.EstadoDeSituacionFinancieraPatrimonio.Pasivos.PasivosPorImpuestosDiferidos.ValorContable = esfContent?.Pasivos?.PasivosImpuestosDiferidos?.Total?.ValorContable || 0;

        content.EstadoDeSituacionFinancieraPatrimonio.Pasivos.PasivosPorBeneficiosALosEmpleados.ValorContable = esfContent?.Pasivos?.PasivosBeneficiosEmpleados?.Total?.ValorContable || 0;

        content.EstadoDeSituacionFinancieraPatrimonio.Pasivos.Provisiones.ValorContable = esfContent?.Pasivos?.Provisiones?.Total?.ValorContable || 0;

        content.EstadoDeSituacionFinancieraPatrimonio.Pasivos.PasivosPorIngresosDiferidos.ValorContable = esfContent?.Pasivos?.PasivosIngresosDiferidos?.Total?.ValorContable || 0;

        content.EstadoDeSituacionFinancieraPatrimonio.Pasivos.OtrosPasivos.ValorContable = esfContent?.Pasivos?.OtrosPasivos?.Total?.ValorContable || 0;

        content.EstadoDeSituacionFinancieraPatrimonio.Pasivos.TotalPasivos.ValorContable = esfContent?.Pasivos?.Total?.ValorContable || 0;

        //valor fiscal
        content.EstadoDeSituacionFinancieraPatrimonio.Pasivos.ObligacionesFinancierasYCuentasPorPagar.ValorFiscal = esfContent?.Pasivos?.ArrendamientosPorPagar?.Total?.ValorFiscal || 0;

        content.EstadoDeSituacionFinancieraPatrimonio.Pasivos.ArrendamientosPorPagar.ValorFiscal = esfContent?.Pasivos?.ArrendamientosPorPagar?.Total?.ValorFiscal || 0;

        content.EstadoDeSituacionFinancieraPatrimonio.Pasivos.OtrosPasivosFinancieros.ValorFiscal = esfContent?.Pasivos?.OtrosPasivosFinancieros?.Total?.ValorFiscal || 0;

        content.EstadoDeSituacionFinancieraPatrimonio.Pasivos.ImpuestosGravamenesYTasasPorPagar.ValorFiscal = esfContent?.Pasivos?.ImpuestosGravamenesTasasPorPagar?.Total?.ValorFiscal || 0;

        content.EstadoDeSituacionFinancieraPatrimonio.Pasivos.PasivosPorImpuestosDiferidos.ValorFiscal = esfContent?.Pasivos?.PasivosImpuestosDiferidos?.Total?.ValorFiscal || 0;

        content.EstadoDeSituacionFinancieraPatrimonio.Pasivos.PasivosPorBeneficiosALosEmpleados.ValorFiscal = esfContent?.Pasivos?.PasivosBeneficiosEmpleados?.Total?.ValorFiscal || 0;

        content.EstadoDeSituacionFinancieraPatrimonio.Pasivos.Provisiones.ValorFiscal = esfContent?.Pasivos?.Provisiones?.Total?.ValorFiscal || 0;

        content.EstadoDeSituacionFinancieraPatrimonio.Pasivos.PasivosPorIngresosDiferidos.ValorFiscal = esfContent?.Pasivos?.PasivosIngresosDiferidos?.Total?.ValorFiscal || 0;

        content.EstadoDeSituacionFinancieraPatrimonio.Pasivos.OtrosPasivos.ValorFiscal = esfContent?.Pasivos?.OtrosPasivos?.Total?.ValorFiscal || 0;

        content.EstadoDeSituacionFinancieraPatrimonio.Pasivos.TotalPasivos.ValorFiscal = esfContent?.Pasivos?.Total?.ValorFiscal || 0;

        //variacion
        content.EstadoDeSituacionFinancieraPatrimonio.Pasivos.ObligacionesFinancierasYCuentasPorPagar.Variacion = (esfContent?.Pasivos?.ArrendamientosPorPagar?.Total?.ValorContable || 0) - (esfContent?.Pasivos?.ArrendamientosPorPagar?.Total?.ValorFiscal || 0);

        content.EstadoDeSituacionFinancieraPatrimonio.Pasivos.ArrendamientosPorPagar.Variacion = (esfContent?.Pasivos?.ArrendamientosPorPagar?.Total?.ValorContable || 0) - (esfContent?.Pasivos?.ArrendamientosPorPagar?.Total?.ValorFiscal || 0);

        content.EstadoDeSituacionFinancieraPatrimonio.Pasivos.OtrosPasivosFinancieros.Variacion = (esfContent?.Pasivos?.OtrosPasivosFinancieros?.Total?.ValorContable || 0) - (esfContent?.Pasivos?.OtrosPasivosFinancieros?.Total?.ValorFiscal || 0);

        content.EstadoDeSituacionFinancieraPatrimonio.Pasivos.ImpuestosGravamenesYTasasPorPagar.Variacion = (esfContent?.Pasivos?.ImpuestosGravamenesTasasPorPagar?.Total?.ValorContable || 0) - (esfContent?.Pasivos?.ImpuestosGravamenesTasasPorPagar?.Total?.ValorFiscal || 0);

        content.EstadoDeSituacionFinancieraPatrimonio.Pasivos.PasivosPorImpuestosDiferidos.Variacion = (esfContent?.Pasivos?.PasivosImpuestosDiferidos?.Total?.ValorContable || 0) - (esfContent?.Pasivos?.PasivosImpuestosDiferidos?.Total?.ValorFiscal || 0);

        content.EstadoDeSituacionFinancieraPatrimonio.Pasivos.PasivosPorBeneficiosALosEmpleados.Variacion = (esfContent?.Pasivos?.PasivosBeneficiosEmpleados?.Total?.ValorContable || 0) - (esfContent?.Pasivos?.PasivosBeneficiosEmpleados?.Total?.ValorFiscal || 0);

        content.EstadoDeSituacionFinancieraPatrimonio.Pasivos.Provisiones.Variacion = (esfContent?.Pasivos?.Provisiones?.Total?.ValorContable || 0) - (esfContent?.Pasivos?.Provisiones?.Total?.ValorFiscal || 0);

        content.EstadoDeSituacionFinancieraPatrimonio.Pasivos.PasivosPorIngresosDiferidos.Variacion = (esfContent?.Pasivos?.PasivosIngresosDiferidos?.Total?.ValorContable || 0) - (esfContent?.Pasivos?.PasivosIngresosDiferidos?.Total?.ValorFiscal || 0);

        content.EstadoDeSituacionFinancieraPatrimonio.Pasivos.OtrosPasivos.Variacion = (esfContent?.Pasivos?.OtrosPasivos?.Total?.ValorContable || 0) - (esfContent?.Pasivos?.OtrosPasivos?.Total?.ValorFiscal || 0);

        content.EstadoDeSituacionFinancieraPatrimonio.Pasivos.TotalPasivos.Variacion = (esfContent?.Pasivos?.Total?.ValorContable || 0) - (esfContent?.Pasivos?.Total?.ValorFiscal || 0);

        //---------------Patrimonio
        //valor contable
        content.EstadoDeSituacionFinancieraPatrimonio.Patrimonio.CapitalSocialYReservas.ValorContable = esfContent?.PatrimonioContable?.CapitalSocialReservas?.Total?.ValorContable || 0;

        content.EstadoDeSituacionFinancieraPatrimonio.Patrimonio.ResultadosDelEjercicio.ValorContable = esfContent?.PatrimonioContable?.ResultadoEjercicio?.Total?.ValorContable || 0;

        content.EstadoDeSituacionFinancieraPatrimonio.Patrimonio.ResultadosAcumulados.ValorContable = esfContent?.PatrimonioContable?.ResultadosAcumulados?.Total?.ValorContable || 0;

        content.EstadoDeSituacionFinancieraPatrimonio.Patrimonio.GananciasPerdidasAcumuladasPorLaAdopcionPorPrimera.ValorContable = esfContent?.PatrimonioContable?.GananciasPerdidasAcumuladasRetenidasAdopcionPrimera?.Total?.ValorContable || 0;

        content.EstadoDeSituacionFinancieraPatrimonio.Patrimonio.OtroResultadoIntegralAcumulado.ValorContable = esfContent?.PatrimonioContable?.OtroResultadoIntegralAcumulado?.Total?.ValorContable || 0;

        content.EstadoDeSituacionFinancieraPatrimonio.Patrimonio.TotalPatrimonio.ValorContable = esfContent?.TotalPatrimonio?.ValorContable || 0;

        //valor fiscal
        content.EstadoDeSituacionFinancieraPatrimonio.Patrimonio.TotalPatrimonio.ValorFiscal = esfContent?.TotalPatrimonio?.ValorFiscal || 0;

        //---------------Ingresos
        //valor contable
        content.EstadoDeResultadoIntegralImpuestosDeRenta.Ingresos.IngresosNetosActividadIndustrialComercialYServicios.ValorContable = renContent?.Ingresos?.IngresosNetosActividadIndustrialComercialYServicios?.IngresosNetosActividadIndustrialComercialYServicios?.Total?.ValorContable || 0;

        content.EstadoDeResultadoIntegralImpuestosDeRenta.Ingresos.DevolucionesRebajasYDescuentos.ValorContable = renContent?.Ingresos?.IngresosNetosActividadIndustrialComercialYServicios?.DevolucionesRebajasYDescuentos?.Total?.ValorContable || 0;

        content.EstadoDeResultadoIntegralImpuestosDeRenta.Ingresos.IngresosFinancieros.ValorContable = renContent?.Ingresos?.IngresosFinancieros?.Total?.ValorContable || 0;

        content.EstadoDeResultadoIntegralImpuestosDeRenta.Ingresos.GananciasPorInversionesEnSubsidiariasAsociadasYONegociosConjuntos.ValorContable = renContent?.Ingresos?.GananciasPorInversionesEnSubsidiariasAsociadasYONegociosConjuntos?.Total?.ValorContable || 0;

        content.EstadoDeResultadoIntegralImpuestosDeRenta.Ingresos.IngresosPorMedicionesAValorRazonable.ValorContable = renContent?.Ingresos?.IngresosPorMedicionesAValorRazonable?.Total?.ValorContable || 0;

        content.EstadoDeResultadoIntegralImpuestosDeRenta.Ingresos.UtilidadEnLaVentaOEnajenacionDeActivosBienesPoseidosPorMenosDeDoAnios.ValorContable = renContent?.Ingresos?.UtilidadEnLaVentaOEnajenacionDeActivosBienesPoseidosPorMenosDeDoAnios?.Total?.ValorContable || 0;

        content.EstadoDeResultadoIntegralImpuestosDeRenta.Ingresos.UtilidadPorVentaOEnajenacionDeActivosBienesPoseidosPorDosAniosOMasGananciaOcasional.ValorContable = renContent?.Ingresos?.UtilidadPorVentaOEnajenacionDeActivosBienesPoseidosPorDosAniosOMasGananciaOcasional?.Total?.ValorContable || 0;

        content.EstadoDeResultadoIntegralImpuestosDeRenta.Ingresos.IngresosPorReversionDeDeterioroDelValor.ValorContable = renContent?.Ingresos?.IngresosPorReversionDeDeterioroDelValor?.Total?.ValorContable || 0;
        
        content.EstadoDeResultadoIntegralImpuestosDeRenta.Ingresos.IngresosPorReversionDeProvisionesPasivosDeMontoOFechaInciertos.ValorContable = renContent?.Ingresos?.IngresosPorReversionDeProvisionesPasivosDeMontoOFechaInciertos?.Total?.ValorContable || 0;

        content.EstadoDeResultadoIntegralImpuestosDeRenta.Ingresos.IngresosPorReversionDePasivosPorBeneficiosALosEmpleados.ValorContable = renContent?.Ingresos?.IngresosPorReversionDePasivosPorBeneficiosALosEmpleados?.Total?.ValorContable || 0;

        content.EstadoDeResultadoIntegralImpuestosDeRenta.Ingresos.OtrosIngresos.ValorContable = renContent?.Ingresos?.OtrosIngresos?.Total?.ValorContable || 0;

        content.EstadoDeResultadoIntegralImpuestosDeRenta.Ingresos.GananciasNetasEnOperacionesDiscontinuadas.ValorContable = renContent?.Ingresos?.GananciasNetasEnOperacionesDiscontinuas?.Total?.ValorContable || 0;

        content.EstadoDeResultadoIntegralImpuestosDeRenta.Ingresos.AjustesFiscales.ValorContable = 0;

        content.EstadoDeResultadoIntegralImpuestosDeRenta.Ingresos.IngresosNoGravados.ValorContable = 0;

        content.EstadoDeResultadoIntegralImpuestosDeRenta.Ingresos.TotalIngresos.ValorContable = renContent?.Ingresos?.TotalIngresos?.ValorContable || 0;

        //valor fiscal
        content.EstadoDeResultadoIntegralImpuestosDeRenta.Ingresos.IngresosNetosActividadIndustrialComercialYServicios.ValorFiscal = renContent?.Ingresos?.IngresosNetosActividadIndustrialComercialYServicios?.IngresosNetosActividadIndustrialComercialYServicios?.Total?.ValorFiscal || 0;

        content.EstadoDeResultadoIntegralImpuestosDeRenta.Ingresos.DevolucionesRebajasYDescuentos.ValorFiscal = renContent?.Ingresos?.IngresosNetosActividadIndustrialComercialYServicios?.DevolucionesRebajasYDescuentos?.Total?.ValorFiscal || 0;

        content.EstadoDeResultadoIntegralImpuestosDeRenta.Ingresos.IngresosFinancieros.ValorFiscal = renContent?.Ingresos?.IngresosFinancieros?.Total?.ValorFiscal || 0;

        content.EstadoDeResultadoIntegralImpuestosDeRenta.Ingresos.GananciasPorInversionesEnSubsidiariasAsociadasYONegociosConjuntos.ValorFiscal = renContent?.Ingresos?.GananciasPorInversionesEnSubsidiariasAsociadasYONegociosConjuntos?.Total?.ValorFiscal || 0;

        content.EstadoDeResultadoIntegralImpuestosDeRenta.Ingresos.IngresosPorMedicionesAValorRazonable.ValorFiscal = renContent?.Ingresos?.IngresosPorMedicionesAValorRazonable?.Total?.ValorFiscal || 0;

        content.EstadoDeResultadoIntegralImpuestosDeRenta.Ingresos.UtilidadEnLaVentaOEnajenacionDeActivosBienesPoseidosPorMenosDeDoAnios.ValorFiscal = renContent?.Ingresos?.UtilidadEnLaVentaOEnajenacionDeActivosBienesPoseidosPorMenosDeDoAnios?.Total?.ValorFiscal || 0;

        content.EstadoDeResultadoIntegralImpuestosDeRenta.Ingresos.UtilidadPorVentaOEnajenacionDeActivosBienesPoseidosPorDosAniosOMasGananciaOcasional.ValorFiscal = renContent?.Ingresos?.UtilidadPorVentaOEnajenacionDeActivosBienesPoseidosPorDosAniosOMasGananciaOcasional?.Total?.ValorFiscal || 0;

        content.EstadoDeResultadoIntegralImpuestosDeRenta.Ingresos.IngresosPorReversionDeDeterioroDelValor.ValorFiscal = renContent?.Ingresos?.IngresosPorReversionDeDeterioroDelValor?.Total?.ValorFiscal || 0;

        content.EstadoDeResultadoIntegralImpuestosDeRenta.Ingresos.IngresosPorReversionDeProvisionesPasivosDeMontoOFechaInciertos.ValorFiscal = renContent?.Ingresos?.IngresosPorReversionDeProvisionesPasivosDeMontoOFechaInciertos?.Total?.ValorFiscal || 0;

        content.EstadoDeResultadoIntegralImpuestosDeRenta.Ingresos.IngresosPorReversionDePasivosPorBeneficiosALosEmpleados.ValorFiscal = renContent?.Ingresos?.IngresosPorReversionDePasivosPorBeneficiosALosEmpleados?.Total?.ValorFiscal || 0;

        content.EstadoDeResultadoIntegralImpuestosDeRenta.Ingresos.OtrosIngresos.ValorFiscal = renContent?.Ingresos?.OtrosIngresos?.Total?.ValorFiscal || 0;

        content.EstadoDeResultadoIntegralImpuestosDeRenta.Ingresos.GananciasNetasEnOperacionesDiscontinuadas.ValorFiscal = renContent?.Ingresos?.GananciasNetasEnOperacionesDiscontinuas?.Total?.ValorFiscal || 0;

        content.EstadoDeResultadoIntegralImpuestosDeRenta.Ingresos.AjustesFiscales.ValorFiscal = renContent?.Ingresos?.AjustesFiscales?.Total?.ValorFiscal || 0;

        content.EstadoDeResultadoIntegralImpuestosDeRenta.Ingresos.IngresosNoGravados.ValorFiscal = renContent?.Ingresos?.MenosIngresosNoConstitutivosDeRentaNiGananciaOcasional?.Total?.ValorFiscal || 0;

        content.EstadoDeResultadoIntegralImpuestosDeRenta.Ingresos.TotalIngresos.ValorFiscal = renContent?.Ingresos?.TotalIngresos?.ValorFiscal || 0;

        //variacion
        content.EstadoDeResultadoIntegralImpuestosDeRenta.Ingresos.IngresosNetosActividadIndustrialComercialYServicios.Variacion = (renContent?.Ingresos?.IngresosNetosActividadIndustrialComercialYServicios?.IngresosNetosActividadIndustrialComercialYServicios?.Total?.ValorContable || 0) - (renContent?.Ingresos?.IngresosNetosActividadIndustrialComercialYServicios?.IngresosNetosActividadIndustrialComercialYServicios?.Total?.ValorFiscal || 0);

        content.EstadoDeResultadoIntegralImpuestosDeRenta.Ingresos.DevolucionesRebajasYDescuentos.Variacion = (renContent?.Ingresos?.IngresosNetosActividadIndustrialComercialYServicios?.DevolucionesRebajasYDescuentos?.Total?.ValorContable || 0) - (renContent?.Ingresos?.IngresosNetosActividadIndustrialComercialYServicios?.DevolucionesRebajasYDescuentos?.Total?.ValorFiscal || 0);

        content.EstadoDeResultadoIntegralImpuestosDeRenta.Ingresos.IngresosFinancieros.Variacion = (renContent?.Ingresos?.IngresosFinancieros?.Total?.ValorContable || 0) - (renContent?.Ingresos?.IngresosFinancieros?.Total?.ValorFiscal || 0);

        content.EstadoDeResultadoIntegralImpuestosDeRenta.Ingresos.GananciasPorInversionesEnSubsidiariasAsociadasYONegociosConjuntos.Variacion = (renContent?.Ingresos?.GananciasPorInversionesEnSubsidiariasAsociadasYONegociosConjuntos?.Total?.ValorContable || 0) - (renContent?.Ingresos?.GananciasPorInversionesEnSubsidiariasAsociadasYONegociosConjuntos?.Total?.ValorFiscal || 0);

        content.EstadoDeResultadoIntegralImpuestosDeRenta.Ingresos.IngresosPorMedicionesAValorRazonable.Variacion = (renContent?.Ingresos?.IngresosPorMedicionesAValorRazonable?.Total?.ValorContable || 0) - (renContent?.Ingresos?.IngresosPorMedicionesAValorRazonable?.Total?.ValorFiscal || 0);

        content.EstadoDeResultadoIntegralImpuestosDeRenta.Ingresos.UtilidadEnLaVentaOEnajenacionDeActivosBienesPoseidosPorMenosDeDoAnios.Variacion = (renContent?.Ingresos?.UtilidadEnLaVentaOEnajenacionDeActivosBienesPoseidosPorMenosDeDoAnios?.Total?.ValorContable || 0) - (renContent?.Ingresos?.UtilidadEnLaVentaOEnajenacionDeActivosBienesPoseidosPorMenosDeDoAnios?.Total?.ValorFiscal || 0);

        content.EstadoDeResultadoIntegralImpuestosDeRenta.Ingresos.UtilidadPorVentaOEnajenacionDeActivosBienesPoseidosPorDosAniosOMasGananciaOcasional.Variacion = (renContent?.Ingresos?.UtilidadPorVentaOEnajenacionDeActivosBienesPoseidosPorDosAniosOMasGananciaOcasional?.Total?.ValorContable || 0) - (renContent?.Ingresos?.UtilidadPorVentaOEnajenacionDeActivosBienesPoseidosPorDosAniosOMasGananciaOcasional?.Total?.ValorFiscal || 0);

        content.EstadoDeResultadoIntegralImpuestosDeRenta.Ingresos.IngresosPorReversionDeDeterioroDelValor.Variacion = (renContent?.Ingresos?.IngresosPorReversionDeDeterioroDelValor?.Total?.ValorContable || 0) - (renContent?.Ingresos?.IngresosPorReversionDeDeterioroDelValor?.Total?.ValorFiscal || 0);

        content.EstadoDeResultadoIntegralImpuestosDeRenta.Ingresos.IngresosPorReversionDeProvisionesPasivosDeMontoOFechaInciertos.Variacion = (renContent?.Ingresos?.IngresosPorReversionDeProvisionesPasivosDeMontoOFechaInciertos?.Total?.ValorContable || 0) - (renContent?.Ingresos?.IngresosPorReversionDeProvisionesPasivosDeMontoOFechaInciertos?.Total?.ValorFiscal || 0);

        content.EstadoDeResultadoIntegralImpuestosDeRenta.Ingresos.IngresosPorReversionDePasivosPorBeneficiosALosEmpleados.Variacion = (renContent?.Ingresos?.IngresosPorReversionDePasivosPorBeneficiosALosEmpleados?.Total?.ValorContable || 0) - (renContent?.Ingresos?.IngresosPorReversionDePasivosPorBeneficiosALosEmpleados?.Total?.ValorFiscal || 0);

        content.EstadoDeResultadoIntegralImpuestosDeRenta.Ingresos.OtrosIngresos.Variacion = (renContent?.Ingresos?.OtrosIngresos?.Total?.ValorContable || 0) - (renContent?.Ingresos?.OtrosIngresos?.Total?.ValorFiscal || 0);

        content.EstadoDeResultadoIntegralImpuestosDeRenta.Ingresos.GananciasNetasEnOperacionesDiscontinuadas.Variacion = (renContent?.Ingresos?.GananciasNetasEnOperacionesDiscontinuas?.Total?.ValorContable || 0) - (renContent?.Ingresos?.GananciasNetasEnOperacionesDiscontinuas?.Total?.ValorFiscal || 0);

        content.EstadoDeResultadoIntegralImpuestosDeRenta.Ingresos.AjustesFiscales.Variacion = (0) - (renContent?.Ingresos?.AjustesFiscales?.Total?.ValorFiscal || 0);

        content.EstadoDeResultadoIntegralImpuestosDeRenta.Ingresos.IngresosNoGravados.Variacion = (0) - (renContent?.Ingresos?.MenosIngresosNoConstitutivosDeRentaNiGananciaOcasional?.Total?.ValorFiscal || 0);

        content.EstadoDeResultadoIntegralImpuestosDeRenta.Ingresos.TotalIngresos.Variacion = (renContent?.Ingresos?.TotalIngresos?.ValorContable || 0) - (renContent?.Ingresos?.TotalIngresos?.ValorFiscal || 0);

        //---------------Costos
        //valor contable
        content.EstadoDeResultadoIntegralImpuestosDeRenta.Costos.MateriasPrimasReventaDeBienesTerminadosYServicios.ValorContable = renContent?.Costos?.MateriasPrimasReventaDeBienesTerminadosYServicios?.Total?.ValorContable || 0;

        content.EstadoDeResultadoIntegralImpuestosDeRenta.Costos.ManoDeObra.ValorContable = renContent?.Costos?.ManoObra?.Total?.ValorContable || 0;

        content.EstadoDeResultadoIntegralImpuestosDeRenta.Costos.DepreciacionesAmortizacionesYDeterioros.ValorContable = renContent?.Costos?.DepresionacionesAmortizacionesYDeterioros?.Total?.ValorContable || 0;

        content.EstadoDeResultadoIntegralImpuestosDeRenta.Costos.OtrosCostos.ValorContable = renContent?.Costos?.OtrosCostos?.Total?.ValorContable || 0;

        content.EstadoDeResultadoIntegralImpuestosDeRenta.Costos.MenorCostoAjusteDePreciosDeTransferencia.ValorContable = renContent?.Costos?.MenosCostoAjustePreciosDeTrasferencia?.Total?.ValorContable || 0;

        content.EstadoDeResultadoIntegralImpuestosDeRenta.Costos.TotalCostos.ValorContable = renContent?.Costos?.TotalCostos?.ValorContable || 0;

        //valor fiscal
        content.EstadoDeResultadoIntegralImpuestosDeRenta.Costos.MateriasPrimasReventaDeBienesTerminadosYServicios.ValorFiscal = renContent?.Costos?.MateriasPrimasReventaDeBienesTerminadosYServicios?.Total?.ValorFiscal || 0

        content.EstadoDeResultadoIntegralImpuestosDeRenta.Costos.ManoDeObra.ValorFiscal = renContent?.Costos?.ManoObra?.Total?.ValorFiscal || 0;

        content.EstadoDeResultadoIntegralImpuestosDeRenta.Costos.DepreciacionesAmortizacionesYDeterioros.ValorFiscal = renContent?.Costos?.DepresionacionesAmortizacionesYDeterioros?.Total?.ValorFiscal || 0;

        content.EstadoDeResultadoIntegralImpuestosDeRenta.Costos.OtrosCostos.ValorFiscal = renContent?.Costos?.OtrosCostos?.Total?.ValorFiscal || 0;

        content.EstadoDeResultadoIntegralImpuestosDeRenta.Costos.MenorCostoAjusteDePreciosDeTransferencia.ValorFiscal = renContent?.Costos?.MenosCostoAjustePreciosDeTrasferencia?.Total?.ValorFiscal || 0;

        content.EstadoDeResultadoIntegralImpuestosDeRenta.Costos.TotalCostos.ValorFiscal = renContent?.Costos?.TotalCostos?.ValorFiscal || 0;

        //variacion
        content.EstadoDeResultadoIntegralImpuestosDeRenta.Costos.MateriasPrimasReventaDeBienesTerminadosYServicios.Variacion = (renContent?.Costos?.MateriasPrimasReventaDeBienesTerminadosYServicios?.Total?.ValorContable || 0) - (renContent?.Costos?.MateriasPrimasReventaDeBienesTerminadosYServicios?.Total?.ValorFiscal || 0);

        content.EstadoDeResultadoIntegralImpuestosDeRenta.Costos.ManoDeObra.Variacion = (renContent?.Costos?.ManoObra?.Total?.ValorContable || 0) - (renContent?.Costos?.ManoObra?.Total?.ValorFiscal || 0);

        content.EstadoDeResultadoIntegralImpuestosDeRenta.Costos.DepreciacionesAmortizacionesYDeterioros.Variacion = (renContent?.Costos?.DepresionacionesAmortizacionesYDeterioros?.Total?.ValorContable || 0) - (renContent?.Costos?.DepresionacionesAmortizacionesYDeterioros?.Total?.ValorFiscal || 0);

        content.EstadoDeResultadoIntegralImpuestosDeRenta.Costos.OtrosCostos.Variacion = (renContent?.Costos?.OtrosCostos?.Total?.ValorContable || 0) - (renContent?.Costos?.OtrosCostos?.Total?.ValorFiscal || 0);

        content.EstadoDeResultadoIntegralImpuestosDeRenta.Costos.MenorCostoAjusteDePreciosDeTransferencia.Variacion = (renContent?.Costos?.MenosCostoAjustePreciosDeTrasferencia?.Total?.ValorContable || 0) - (renContent?.Costos?.MenosCostoAjustePreciosDeTrasferencia?.Total?.ValorFiscal || 0);

        content.EstadoDeResultadoIntegralImpuestosDeRenta.Costos.TotalCostos.Variacion = (renContent?.Costos?.TotalCostos?.ValorContable || 0) - (renContent?.Costos?.TotalCostos?.ValorFiscal || 0);

        //---------------Gastos
        //valor contable
        content.EstadoDeResultadoIntegralImpuestosDeRenta.Gastos.DeAdministracion.ManoDeObra.ValorContable = renContent?.Gastos?.DeAdministracion?.ManoDeObra?.Total?.ValorContable || 0;

        content.EstadoDeResultadoIntegralImpuestosDeRenta.Gastos.DeAdministracion.OtrosGastosDeAdministracion.ValorContable = renContent?.Gastos?.DeAdministracion?.OtrosGastosDeAdministracion?.Total?.ValorContable || 0;

        content.EstadoDeResultadoIntegralImpuestosDeRenta.Gastos.DeAdministracion.DepreciacionesAmortizacionesYDeterioros.ValorContable = renContent?.Gastos?.DeAdministracion?.DepreciacionesAmortizacionesDeterioros?.Total?.ValorContable || 0;

        content.EstadoDeResultadoIntegralImpuestosDeRenta.Gastos.DeAdministracion.TotalGastosDeAdministracion.ValorContable = renContent?.Gastos?.DeAdministracion?.Total?.ValorContable || 0;

        content.EstadoDeResultadoIntegralImpuestosDeRenta.Gastos.DeDistribucionYVentas.ManoDeObra.ValorContable = renContent?.Gastos?.GastosDeDistribucionYVentas?.ManoDeObra?.Total?.ValorContable || 0;

        content.EstadoDeResultadoIntegralImpuestosDeRenta.Gastos.DeDistribucionYVentas.OtrosGastosDeDistribucionYVentas.ValorContable = renContent?.Gastos?.GastosDeDistribucionYVentas?.OtrosGastosDeDistribucionYVentas?.Total?.ValorContable || 0;

        content.EstadoDeResultadoIntegralImpuestosDeRenta.Gastos.DeDistribucionYVentas.DepreciacionesAmortizacionesYDeterioros.ValorContable = renContent?.Gastos?.GastosDeDistribucionYVentas?.DepreciacionesAmortizacionesYDeterioros?.Total?.ValorContable || 0;

        content.EstadoDeResultadoIntegralImpuestosDeRenta.Gastos.DeDistribucionYVentas.TotalGastosDeDistribucionYVentas.ValorContable = renContent?.Gastos?.GastosDeDistribucionYVentas?.Total?.ValorContable || 0;

        //
        content.EstadoDeResultadoIntegralImpuestosDeRenta.Gastos.GastosFinancieros.ValorContable = renContent?.Gastos?.GastosFinancieros?.Total?.ValorContable || 0;

        content.EstadoDeResultadoIntegralImpuestosDeRenta.Gastos.PerdidasPorInversionesEnSubsidiariasAsociadasYONegociosConjuntos.ValorContable = renContent?.Gastos?.PerdidasPorInversionesEnSubsidiariasAsociadasYONegociosConjuntos?.Total?.ValorContable || 0;

        content.EstadoDeResultadoIntegralImpuestosDeRenta.Gastos.PerdidasPorMedicionesAValorRazonable.ValorContable = renContent?.Gastos?.PerdidasPorMedicionesAValorRazonable?.Total?.ValorContable || 0;

        content.EstadoDeResultadoIntegralImpuestosDeRenta.Gastos.PerdidaEnLaVentaOEnajenacionDeActivosFijos.ValorContable = renContent?.Gastos?.PerdidaEnLaVentaOEnajenacionDeActivosFijos?.Total?.ValorContable || 0;

        content.EstadoDeResultadoIntegralImpuestosDeRenta.Gastos.GastosPorProvisionesPasivosDeMontoOFechaInciertos.ValorContable = renContent?.Gastos?.GastosPorProvisionesPasivosDeMontoOFechaInciertos?.Total?.ValorContable || 0;

        content.EstadoDeResultadoIntegralImpuestosDeRenta.Gastos.OtrosGastos.ValorContable = renContent?.Gastos?.OtrosGastos?.Total?.ValorContable || 0;

        content.EstadoDeResultadoIntegralImpuestosDeRenta.Gastos.PerdidasNetasEnOperacionesDiscontinuadas.ValorContable = renContent?.Gastos?.PerdidasNetasEnOperacionesDiscontinuas?.ValorContable || 0;

        content.EstadoDeResultadoIntegralImpuestosDeRenta.Gastos.MenorGastoODeduccionAjustePreciosTransferencia.ValorContable = renContent?.Gastos?.MenorGastoODeduccionAjustePreciosDeTransferencia?.ValorContable || 0;

        content.EstadoDeResultadoIntegralImpuestosDeRenta.Gastos.TotalGastos.ValorContable = renContent?.Gastos?.TotalGastos?.ValorContable || 0;

        //valor fiscal
        content.EstadoDeResultadoIntegralImpuestosDeRenta.Gastos.DeAdministracion.ManoDeObra.ValorFiscal = renContent?.Gastos?.DeAdministracion?.ManoDeObra?.Total?.ValorFiscal || 0;

        content.EstadoDeResultadoIntegralImpuestosDeRenta.Gastos.DeAdministracion.OtrosGastosDeAdministracion.ValorFiscal = renContent?.Gastos?.DeAdministracion?.OtrosGastosDeAdministracion?.Total?.ValorFiscal || 0;

        content.EstadoDeResultadoIntegralImpuestosDeRenta.Gastos.DeAdministracion.DepreciacionesAmortizacionesYDeterioros.ValorFiscal = renContent?.Gastos?.DeAdministracion?.DepreciacionesAmortizacionesDeterioros?.Total?.ValorFiscal || 0;

        content.EstadoDeResultadoIntegralImpuestosDeRenta.Gastos.DeAdministracion.TotalGastosDeAdministracion.ValorFiscal = renContent?.Gastos?.DeAdministracion?.Total?.ValorFiscal || 0;

        content.EstadoDeResultadoIntegralImpuestosDeRenta.Gastos.DeDistribucionYVentas.ManoDeObra.ValorFiscal = renContent?.Gastos?.GastosDeDistribucionYVentas?.ManoDeObra?.Total?.ValorFiscal || 0;

        content.EstadoDeResultadoIntegralImpuestosDeRenta.Gastos.DeDistribucionYVentas.OtrosGastosDeDistribucionYVentas.ValorFiscal = renContent?.Gastos?.GastosDeDistribucionYVentas?.OtrosGastosDeDistribucionYVentas?.Total?.ValorFiscal || 0;

        content.EstadoDeResultadoIntegralImpuestosDeRenta.Gastos.DeDistribucionYVentas.DepreciacionesAmortizacionesYDeterioros.ValorFiscal = renContent?.Gastos?.GastosDeDistribucionYVentas?.DepreciacionesAmortizacionesYDeterioros?.Total?.ValorFiscal || 0;

        content.EstadoDeResultadoIntegralImpuestosDeRenta.Gastos.DeDistribucionYVentas.TotalGastosDeDistribucionYVentas.ValorFiscal = renContent?.Gastos?.GastosDeDistribucionYVentas?.Total?.ValorFiscal || 0;

        content.EstadoDeResultadoIntegralImpuestosDeRenta.Gastos.GastosFinancieros.ValorFiscal = renContent?.Gastos?.GastosFinancieros?.Total?.ValorFiscal || 0;

        content.EstadoDeResultadoIntegralImpuestosDeRenta.Gastos.PerdidasPorInversionesEnSubsidiariasAsociadasYONegociosConjuntos.ValorFiscal = renContent?.Gastos?.PerdidasPorInversionesEnSubsidiariasAsociadasYONegociosConjuntos?.Total?.ValorFiscal || 0;

        content.EstadoDeResultadoIntegralImpuestosDeRenta.Gastos.PerdidasPorMedicionesAValorRazonable.ValorFiscal = renContent?.Gastos?.PerdidasPorMedicionesAValorRazonable?.Total?.ValorFiscal || 0;

        content.EstadoDeResultadoIntegralImpuestosDeRenta.Gastos.PerdidaEnLaVentaOEnajenacionDeActivosFijos.ValorFiscal = renContent?.Gastos?.PerdidaEnLaVentaOEnajenacionDeActivosFijos?.Total?.ValorFiscal || 0;

        content.EstadoDeResultadoIntegralImpuestosDeRenta.Gastos.GastosPorProvisionesPasivosDeMontoOFechaInciertos.ValorFiscal = renContent?.Gastos?.GastosPorProvisionesPasivosDeMontoOFechaInciertos?.Total?.ValorFiscal || 0;

        content.EstadoDeResultadoIntegralImpuestosDeRenta.Gastos.OtrosGastos.ValorFiscal = renContent?.Gastos?.OtrosGastos?.Total?.ValorFiscal || 0;

        content.EstadoDeResultadoIntegralImpuestosDeRenta.Gastos.PerdidasNetasEnOperacionesDiscontinuadas.ValorFiscal = renContent?.Gastos?.PerdidasNetasEnOperacionesDiscontinuas?.Total?.ValorFiscal || 0;

        content.EstadoDeResultadoIntegralImpuestosDeRenta.Gastos.MenorGastoODeduccionAjustePreciosTransferencia.ValorFiscal = renContent?.Gastos?.MenorGastoODeduccionAjustePreciosDeTransferencia?.Total?.ValorFiscal || 0;

        content.EstadoDeResultadoIntegralImpuestosDeRenta.Gastos.TotalGastos.ValorFiscal = renContent?.Gastos?.TotalGastos?.Total?.ValorFiscal || 0;

        //variacion
        content.EstadoDeResultadoIntegralImpuestosDeRenta.Gastos.DeAdministracion.ManoDeObra.Variacion = (renContent?.Gastos?.DeAdministracion?.ManoDeObra?.Total?.ValorContable || 0) - (renContent?.Gastos?.DeAdministracion?.ManoDeObra?.Total?.ValorFiscal || 0);

        content.EstadoDeResultadoIntegralImpuestosDeRenta.Gastos.DeAdministracion.OtrosGastosDeAdministracion.Variacion = (renContent?.Gastos?.DeAdministracion?.OtrosGastosDeAdministracion?.Total?.ValorContable || 0) - (renContent?.Gastos?.DeAdministracion?.OtrosGastosDeAdministracion?.Total?.ValorFiscal || 0);

        content.EstadoDeResultadoIntegralImpuestosDeRenta.Gastos.DeAdministracion.DepreciacionesAmortizacionesYDeterioros.Variacion = (renContent?.Gastos?.DeAdministracion?.DepreciacionesAmortizacionesDeterioros?.Total?.ValorContable || 0) - (renContent?.Gastos?.DeAdministracion?.DepreciacionesAmortizacionesDeterioros?.Total?.ValorFiscal || 0);

        content.EstadoDeResultadoIntegralImpuestosDeRenta.Gastos.DeAdministracion.TotalGastosDeAdministracion.Variacion = (renContent?.Gastos?.DeAdministracion?.Total?.ValorContable || 0) - (renContent?.Gastos?.DeAdministracion?.Total?.ValorFiscal || 0);

        content.EstadoDeResultadoIntegralImpuestosDeRenta.Gastos.DeDistribucionYVentas.ManoDeObra.Variacion = (renContent?.Gastos?.GastosDeDistribucionYVentas?.ManoDeObra?.Total?.ValorContable || 0) - (renContent?.Gastos?.GastosDeDistribucionYVentas?.ManoDeObra?.Total?.ValorFiscal || 0);

        content.EstadoDeResultadoIntegralImpuestosDeRenta.Gastos.DeDistribucionYVentas.OtrosGastosDeDistribucionYVentas.Variacion = (renContent?.Gastos?.GastosDeDistribucionYVentas?.OtrosGastosDeDistribucionYVentas?.Total?.ValorContable || 0) - (renContent?.Gastos?.GastosDeDistribucionYVentas?.OtrosGastosDeDistribucionYVentas?.Total?.ValorFiscal || 0);

        content.EstadoDeResultadoIntegralImpuestosDeRenta.Gastos.DeDistribucionYVentas.DepreciacionesAmortizacionesYDeterioros.Variacion = (renContent?.Gastos?.GastosDeDistribucionYVentas?.DepreciacionesAmortizacionesYDeterioros?.Total?.ValorContable || 0) - (renContent?.Gastos?.GastosDeDistribucionYVentas?.DepreciacionesAmortizacionesYDeterioros?.Total?.ValorFiscal || 0);

        content.EstadoDeResultadoIntegralImpuestosDeRenta.Gastos.DeDistribucionYVentas.TotalGastosDeDistribucionYVentas.Variacion = (renContent?.Gastos?.GastosDeDistribucionYVentas?.Total?.ValorContable || 0) - (renContent?.Gastos?.GastosDeDistribucionYVentas?.Total?.ValorFiscal || 0);

        content.EstadoDeResultadoIntegralImpuestosDeRenta.Gastos.GastosFinancieros.Variacion = (renContent?.Gastos?.GastosFinancieros?.Total?.ValorContable || 0) - (renContent?.Gastos?.GastosFinancieros?.Total?.ValorFiscal || 0);

        content.EstadoDeResultadoIntegralImpuestosDeRenta.Gastos.PerdidasPorInversionesEnSubsidiariasAsociadasYONegociosConjuntos.Variacion = (renContent?.Gastos?.PerdidasPorInversionesEnSubsidiariasAsociadasYONegociosConjuntos?.Total?.ValorContable || 0) - (renContent?.Gastos?.PerdidasPorInversionesEnSubsidiariasAsociadasYONegociosConjuntos?.Total?.ValorFiscal || 0);

        content.EstadoDeResultadoIntegralImpuestosDeRenta.Gastos.PerdidasPorMedicionesAValorRazonable.Variacion = (renContent?.Gastos?.PerdidasPorMedicionesAValorRazonable?.Total?.ValorContable || 0) - (renContent?.Gastos?.PerdidasPorMedicionesAValorRazonable?.Total?.ValorFiscal || 0);

        content.EstadoDeResultadoIntegralImpuestosDeRenta.Gastos.PerdidaEnLaVentaOEnajenacionDeActivosFijos.Variacion = (renContent?.Gastos?.PerdidaEnLaVentaOEnajenacionDeActivosFijos?.Total?.ValorContable || 0) - (renContent?.Gastos?.PerdidaEnLaVentaOEnajenacionDeActivosFijos?.Total?.ValorFiscal || 0);

        content.EstadoDeResultadoIntegralImpuestosDeRenta.Gastos.GastosPorProvisionesPasivosDeMontoOFechaInciertos.Variacion = (renContent?.Gastos?.GastosPorProvisionesPasivosDeMontoOFechaInciertos?.Total?.ValorContable || 0) - (renContent?.Gastos?.GastosPorProvisionesPasivosDeMontoOFechaInciertos?.Total?.ValorFiscal || 0);

        content.EstadoDeResultadoIntegralImpuestosDeRenta.Gastos.OtrosGastos.Variacion = (renContent?.Gastos?.OtrosGastos?.Total?.ValorContable || 0) - (renContent?.Gastos?.OtrosGastos?.Total?.ValorFiscal || 0);

        content.EstadoDeResultadoIntegralImpuestosDeRenta.Gastos.GastosPorProvisionesPasivosDeMontoOFechaInciertos.Variacion = (renContent?.Gastos?.GastosPorProvisionesPasivosDeMontoOFechaInciertos?.Total?.ValorContable || 0) - (renContent?.Gastos?.GastosPorProvisionesPasivosDeMontoOFechaInciertos?.Total?.ValorFiscal || 0);

        content.EstadoDeResultadoIntegralImpuestosDeRenta.Gastos.PerdidasNetasEnOperacionesDiscontinuadas.Variacion = (renContent?.Gastos?.PerdidasNetasEnOperacionesDiscontinuas?.ValorContable || 0) - (renContent?.Gastos?.PerdidasNetasEnOperacionesDiscontinuas?.ValorFiscal || 0);

        content.EstadoDeResultadoIntegralImpuestosDeRenta.Gastos.MenorGastoODeduccionAjustePreciosTransferencia.Variacion = (renContent?.Gastos?.MenorGastoODeduccionAjustePreciosDeTransferencia?.Total?.ValorContable || 0) - (renContent?.Gastos?.MenorGastoODeduccionAjustePreciosDeTransferencia?.Total?.ValorFiscal || 0);

        content.EstadoDeResultadoIntegralImpuestosDeRenta.Gastos.TotalGastos.Variacion = (renContent?.Gastos?.TotalGastos?.Total?.ValorContable || 0) - (renContent?.Gastos?.TotalGastos?.Total?.ValorFiscal || 0);

        //---------------Resultado
        content.ResultadoDelEjercicio.ValorContable = (renContent?.Ingresos?.TotalIngresos?.ValorContable || 0) - (renContent?.Costos?.TotalCostos?.ValorContable || 0) - (renContent?.Gastos?.TotalGastos?.ValorContable || 0);

        content.ResultadoDelEjercicio.ValorFiscal = (renContent?.Ingresos?.TotalIngresos?.ValorFiscal || 0) - (renContent?.Costos?.TotalCostos?.ValorFiscal || 0) - (renContent?.Gastos?.TotalGastos?.ValorFiscal || 0);

        content.ResultadoDelEjercicio.Variacion = content.ResultadoDelEjercicio.ValorContable - content.ResultadoDelEjercicio.ValorFiscal;
    }

    return resumenEsf;
  }
}
