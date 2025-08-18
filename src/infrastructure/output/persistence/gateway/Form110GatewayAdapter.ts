import prisma from "../../../../config/database";
import { FormR110 } from "../../../../domain/models/FormR110Model";
import { FormsGatewayIntPort } from "../../../../application/output/FormsGatewayIntPort";

export class Form110GatewayAdapter implements FormsGatewayIntPort<FormR110> {
  async getIDForm(stuID: string, roomID: string): Promise<FormR110 | null> {
    const report = await prisma.report.findFirst({
      where: { stuID: stuID, roomID: roomID },
    });
    const form110 = await prisma.formr110.findUnique({
      where: { r110ID: report?.r110ID },
    });
    return form110;
  }

  async createForm(form110: FormR110): Promise<FormR110> {
    return prisma.formr110.create({
      data: {
        r110Content: { ...form110.r110Content },
      },
    });
  }

  async updateForm(
    stuID: string,
    roomID: string,
    form110: FormR110
  ): Promise<FormR110> {
    const report = await prisma.report.findFirst({
      where: { stuID: stuID, roomID: roomID },
    });
    return prisma.formr110.update({
      where: { r110ID: report?.r110ID },
      data: {
        r110Content: { ...form110 },
      },
    });
  }
  async calculateReference(
    stuID: string,
    roomID: string
  ): Promise<FormR110 | null> {
    const report = await prisma.report.findFirst({
      where: { stuID: stuID, roomID: roomID },
    });
    const form110 = await prisma.formr110.findUnique({
      where: { r110ID: report?.r110ID },
    });

    const detalleRenglones = await prisma.formdetallerenglones.findUnique({
      where: { detID: report?.detID },
    });

    if (
      form110 &&
      typeof form110.r110Content === "object" &&
      form110.r110Content !== null
    ) {
      const content = form110?.r110Content as any;
      const detContent = detalleRenglones?.detContent as any;

      //Datos informativos
      content.DatosResumen.DatosInformativos.TotalCostosGastosDeNomina =
        detContent?.Renglon33
          ?.TotalCostosYGastosDeNominaSaldosFiscalesADiciembre31 || 0;

      content.DatosResumen.DatosInformativos.AportesAlSistemaDeSeguridadSocial =
        detContent?.Renglon34
          ?.TotalAportesAlSistemaDeSeguridadSocialSaldosFiscalesADiciembre31 ||
        0;

      content.DatosResumen.DatosInformativos.AportacionesSENAICBFCajasCompensacion =
        detContent?.Renglon35
          ?.TotalAportesAlSENAICBFCajaCompensacionSaldosFiscalesADiciembre31 ||
        0;

        //Datos de patrimonio
      content.DatosResumen.Patromonio.EfectivoYEquivalentesDeEfectivo =
        detContent?.Renglon36
          ?.TotalEfectivoYEquivalentesDeEfectivoSaldosFiscalesADiciembre31 || 0;

      content.DatosResumen.Patromonio.InversionesEInstrumentosFinancierosDerivados =
        detContent?.Renglon37
          ?.TotalInversionesEInstrumentosFinancierosDerivadosSaldosFiscalesADiciembre31 ||
        0;

      content.DatosResumen.Patromonio.CuentasDocumentosYArrendamientosFinancierosPorCobrar =
        detContent?.Renglon38
          ?.TotalCuentasDocumentosYArrendamientosFinancierosPorCobrarSaldosFiscalesADiciembre31 ||
        0;

      content.DatosResumen.Patromonio.Inventarios =
        detContent?.Renglon39?.TotalInventariosSaldosFiscalesADiciembre31 || 0;

        console.log(detContent?.Renglon40
          ?.TotalActivosIntangiblesSaldosFiscalesADiciembre31)
      content.DatosResumen.Patromonio.ActivosIntangibles =
        detContent?.Renglon40
          ?.TotalActivosIntangiblesSaldosFiscalesADiciembre31 || 0;

      content.DatosResumen.Patromonio.ActivosBiologicos =
        detContent?.Renglon41
          ?.TotalActivosBiologicosSaldosFiscalesADiciembre31 || 0;

      content.DatosResumen.Patromonio.PropiedadesPlantaYEquipoPropiedadesDeInversionYANCMV =
        detContent?.Renglon42
          ?.TotalPropiedadesPlantaEquipoPropiedadesDeInversionANCMVSaldosFiscalesADiciembre31 ||
        0;

      content.DatosResumen.Patromonio.OtrosActivos =
        detContent?.Renglon43?.TotalOtrosActivosSaldosFiscalesADiciembre31 || 0;

        content.DatosResumen.Patromonio.TotalPatrimonioBruto = detContent?.Renglon44TotalPatrimonioBruto?.TotalSaldosFiscalesADiciembre31 || 0

        content.DatosResumen.Patromonio.Pasivos = (detContent?.Renglon45?.TotalPasivosSaldosFiscalesADiciembre31 || 0);

        content.DatosResumen.Patromonio.TotalPatrimonioLiquido = detContent?.Renglon44TotalPatrimonioBruto?.TotalSaldosFiscalesADiciembre31 - (detContent?.Renglon45?.TotalPasivosSaldosFiscalesADiciembre31 || 0) || 0;

        //Datos de ingresos
        content.DatosResumen.Ingresos.IngresosBrutosDeActividadesOrdinarias = detContent?.Renglon47?.TotalIngresosBrutosDeACtividadesOrdinariasSaldosFiscalesADiciembre31 || 0;

        content.DatosResumen.Ingresos.IngresosFinancieros = detContent?.Renglon48?.TotalIngresosFinancierosSaldosFiscalesADiciembre31 || 0;

        content.DatosResumen.Ingresos.DividendosYOParticipacionesNoConstitutivosDeRentaNiGananciaOcasional =
          detContent?.Renglon49
            ?.TotalDividentosOParticipacionesGananciaOcasionalSaldosFiscalesADiciembre31 ||
          0;

        content.DatosResumen.Ingresos.DividendosYOParticipacionesGravadas2016YAnterioresRecibidosPorPersonasNaturalesSinResidenciaFiscal =
          detContent?.Renglon52
            ?.TotalDividendosYParticipacionesGravadasPorPersonasNaturalesSaldosFiscalesADiciembre3152 ||
          0;
        
        content.DatosResumen.Ingresos.DividendosYOParticipacionesGravadas2017YSiguientesRecibidosPorPersonasNaturalesSinResidenciaFiscal =
          detContent?.Renglon53
            ?.Total53SaldosFiscalesADiciembre31 ||
          0;
        content.DatosResumen.Ingresos.DividendosYOParticipacionesNoGravadasPeroQueTributaranAl10Porciento =
          detContent?.Renglon54
            ?.Total54SaldosFiscalesADiciembre31 ||
          0; 

        content.DatosResumen.Ingresos.DividendosYParticipacionesGravados2017YSiguientesRecibidosDeParteDeunasSociedadQueLlevoACaboMegainversiones =
          detContent?.Renglon56
            ?.Total56SaldosFiscalesADiciembre31 ||
          0;
        
        content.DatosResumen.Ingresos.OtrosIngresos =
          detContent?.Renglon57?.TotalOtrosIngresosSaldosFiscalesADiciembre31 || 0; 

        content.DatosResumen.Ingresos.TotalIngresosBrutos =
          detContent?.Renglon58?.TotalIngresosBrutosSaldosFiscalesADiciembre31 || 0;

        content.DatosResumen.Ingresos.DevolucionesRebajasYDescuentosEnVentas =
          detContent?.Renglon59?.TotalMenosDevolucionesDescuentosRebajasSaldosFiscalesADiciembre31 ||
          0;

        content.DatosResumen.Ingresos.IngresosNoConstitutivosDeRentaNiGananciaOcasional =
          detContent?.Renglon60
            ?.TotalIngresosNoConstituidosDeRentaNiGananciaOcasionalSaldosFiscalesADiciembre31 ||
          0;

        content.DatosResumen.Ingresos.TotalIngresosNetos =
          detContent?.Renglon61?.TotalIngresosNetosSaldosFiscalesADiciembre31 || 0;

        //Datos de costos y deducciones
        content.DatosResumen.CostosYDeducciones.Costos =
          detContent?.Renglon62?.TotalCostosSaldosFiscalesADiciembre31 || 0;

        content.DatosResumen.CostosYDeducciones.GastosDeAdministracion =
          detContent?.Renglon63?.TotalGastosDeAdministracionSaldosFiscalesADiciembre31 ||
          0;

        content.DatosResumen.CostosYDeducciones.GastosDeDistribucionYVentas =
          detContent?.Renglon64
            ?.TotalGastosDeDistribucionYVentasSaldosFiscalesADiciembre31 ||
          0;

        content.DatosResumen.CostosYDeducciones.GastosFinancieros =
          detContent?.Renglon65?.TotalesSaldosFiscalesADiciembre31 ||
          0;

        content.DatosResumen.CostosYDeducciones.OtrosGastosYDeducciones =
          detContent?.Renglon66
            ?.TotalOtrosGastosYDeduccionesSaldosFiscalesADiciembre31 ||
          0;

        content.DatosResumen.CostosYDeducciones.TotalCostosYGastosDeducibles =
          detContent?.Renglon67?.TotalCostosYGastosDeduciblesSaldosFiscalesADiciembre31 ||
          0;

        //Datos de Renta

        

        content.DatosResumen.Renta.RentaPorRecuperacionDeDeducciones =
          detContent?.Renglon70
            ?.TotalRentaPorRecuperacionDeDeduccionesSaldosFiscalesADiciembre31 ||
          0;

          content.DatosResumen.Renta.RentaLiquidaOrdinariaDelEjercicioSinCasillas52A56 =
          detContent?.Renglon72
            ?.TotalRentaLiquidaOrdinariaDelEjercicioSaldosFiscalesADiciembre31 ||
          0;

        content.DatosResumen.Renta.OPerdidaLiquidaDelEjercicioSinCasillas52A56 =
          detContent?.Renglon73
            ?.TotalPerdidaLiquidaDelEjercicioSaldosFiscalesADiciembre31 ||
          0;

        content.DatosResumen.Renta.Compensaciones =
          detContent?.Renglon74
            ?.TotalCompensacionesSaldosFiscalesADiciembre31 ||
          0; 

        content.DatosResumen.Renta.RentaLiquidaSinCasillas52A56 =
          detContent?.Renglon75
            ?.TotalRentaLiquidaSaldosFiscalesADiciembre31 ||
          0;

        content.DatosResumen.Renta.RentaPresuntiva =
          detContent?.Renglon76?.SaldosFiscalesADiciembre31Parciales ||
          0;

        content.DatosResumen.Renta.RentaExenta =
          detContent?.Renglon77?.TotalRentasExentasSaldosFiscalesADiciembre31 ||
          0;

        content.DatosResumen.Renta.RentasGravables = 
            detContent?.Renglon78?.TotalRentasGravablesSaldosFiscalesADiciembre31 ||
            0;

        content.DatosResumen.Renta.RentaLiquidaGravadaSinCasillas52A56 =
          detContent?.Renglon79
            ?.TotalesSaldosFiscalesADiciembre31 ||
          0;

        // Datos de ganancias ocasionales
        content.DatosResumen.GananciasOcasionales.IngresosParGananciasOcasionales = detContent?.Renglon80?.TotalesSaldosFiscalesADiciembre31 || 0;

        content.DatosResumen.GananciasOcasionales.RentasDeudoresRegimenLey1116De2006Decreto560YArt15Decreto772 = detContent?.Renglon81?.TotalRentaDeudoresSaldosFiscalesADiciembre31 || 0;

        content.DatosResumen.GananciasOcasionales.UtilizacionPerdidasFiscalesAcumuladasInciso2Articulo15Decreto772 = detContent?.Renglon82?.TotalUtilizacionPerdidasFiscalesAcumuladasSaldosFiscalesADiciembre31 || 0;

        content.DatosResumen.GananciasOcasionales.CostosPorGananciasOcasionales = detContent?.Renglon83?.TotalCostosYDeduccionesPorGananciasOcasionalesSaldosFiscalesADiciembre31 || 0;

        content.DatosResumen.GananciasOcasionales.GananciasOcasionalesNoGravadasYExentas = detContent?.Renglon84?.TotalGananciasOcasionalesNoGravadasYExentasSaldosFiscalesADiciembre31 || 0;

        content.DatosResumen.GananciasOcasionales.GananciasOcasionalesGravables = detContent?.Renglon85?.TotalGananciasOcasionalesGravablesSaldosFiscalesADiciembre31 || 0;

        //Liquidacion privada - Impuestos sobre las rentas liquidas gravables
        content.DatosResumen.LiquidacionPrivada.ImpuestosSobreLasRentasLiquidasGravables.ImpuestoSobreLaRentaLiquidaGravableSinCasillas52A56 = detContent?.Renglon86?.TotalImpuestoSobreLaRentaLiquidaSaldosFiscalesADiciembre31 || 0;

        content.DatosResumen.LiquidacionPrivada.ImpuestosSobreLasRentasLiquidasGravables.DeDividendosYOParticipacionesGravadasALaTarifaDel10Porciento = detContent?.Renglon87?.TotalDeDividendosYParticipacionesGravadasALaTarifaSaldosFiscalesADiciembre31 || 0;

        content.DatosResumen.LiquidacionPrivada.ImpuestosSobreLasRentasLiquidasGravables.DeDividendosYOParticipacionesGravadasALaTarifaDel27Porciento = detContent?.Renglon89?.Total89SaldosFiscalesADiciembre31 || 0;

        content.DatosResumen.LiquidacionPrivada.ImpuestosSobreLasRentasLiquidasGravables.DeDividendosYOParticipacionesGravadasALaTarifaDelArt240 = detContent?.Renglon90?.Total90SaldosFiscalesADiciembre31 || 0;

        content.DatosResumen.LiquidacionPrivada.ImpuestosSobreLasRentasLiquidasGravables.DeDividendosYOParticipacionesGravadasALaTarifaDel33Porciento = detContent?.Renglon91?.Total91SaldosFiscalesADiciembre31 || 0;

        // Total impuesto sobre las rentas liquidas gravables
        content.DatosResumen.LiquidacionPrivada.TotalImpuestoSobreLasRentasLiquidasGravables =
          detContent?.Renglon92?.Total92SaldosFiscalesADiciembre31 ||
          0;

        // Lo demás campos de liquidación privada
        content.DatosResumen.LiquidacionPrivada.DescuentosTributarios =
          detContent?.Renglon93?.TotalDescuentosTributariosSaldosFiscalesADiciembre31 ||
          0;

        content.DatosResumen.LiquidacionPrivada.ImpuestoNetoDeRenta =
          detContent?.Renglon94?.TotalImpuestoNetoRentaSaldosFiscalesADiciembre31 ||
          0;

        content.DatosResumen.LiquidacionPrivada.ImpuestoDeGananciasOcasionales =
          detContent?.Renglon95ImpuestoDeGananciasOcasionales?.TotalImpuestoDeGananciasOcasionalesSaldosFiscalesADiciembre31 ||
          0;

        content.DatosResumen.LiquidacionPrivada.TotalImpuestoACargo =
          detContent?.Renglon97?.TotalSaldosFiscalesADiciembre31 ||
          0;

        content.DatosResumen.LiquidacionPrivada.MenosAnticipoRentaLiquidadoAnioGravableAnterior =
          detContent?.Renglon101MenosAnticipoRentaLiquidadiGravableAnterior?.TotalesSaldosFiscalesADiciembre31 ||
          0;
        
        content.DatosResumen.LiquidacionPrivada.MenosSaldoAFavorAnioGravableAnteriorSinSolicitudDeDevolucion = 
            detContent?.Renglon102MenosSaldoAFavorRentaSinSolicitudDeDevolucionNiCompensacion?.TotalesSaldosFiscalesADiciembre31 ||
            0;
        
        // Retenciones
        content.DatosResumen.LiquidacionPrivada.Retenciones.OtrasRetenciones =
          detContent?.Renglon104?.TotalOtrasRetencionesSaldosFiscalesADiciembre31 ||
          0;

        content.DatosResumen.LiquidacionPrivada.Retenciones.TotalRetencionesAnioGravableADeclarar =
          detContent?.Renglon105?.TotalSaldosFiscalesADiciembre31 ||
          0;

        content.DatosResumen.LiquidacionPrivada.MasAnticipoRentaParaElAnioGravableSiguiente =
          detContent?.Renglon106?.TotalSaldosFiscalesADiciembre31 ||
          0;

        
        content.DatosResumen.LiquidacionPrivada.SaldoAPagarPorImpuesto = detContent?.Renglon110?.TotalSaldosFiscalesADiciembre31 || 0;

        content.DatosResumen.LiquidacionPrivada.Sanciones =
          detContent?.Renglon111Sanciones?.TotalesSaldosFiscalesADiciembre31 ||
          0;
        
        content.DatosResumen.LiquidacionPrivada.TotalSaldoAPagar =
          detContent?.Renglon112?.TotalSaldosFiscalesADiciembre31 ||
          0;

        content.DatosResumen.LiquidacionPrivada.OTotalSaldoAFavor =
          detContent?.Renglon113?.TotalSaldosFiscalesADiciembre31 ||
          0;

    }

    return form110;
  }
}
