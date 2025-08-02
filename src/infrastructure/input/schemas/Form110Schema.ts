import { z } from "zod";

export const Formulario110Schema = z.object({
  DeclaracionDeRentaYComplementarioParaPersonasJuridicasYAsimiladas: z.object({
    Año: z.number(),
    NumeroDeFormulario: z.number(),
    DatosDelDeclarante: z.object({
      NIT: z.number(),
      DV: z.number(),
      PrimerApellido: z.string(),
      SegundoApellido: z.string(),
      PrimerNombre: z.string(),
      OtrosNombres: z.string(),
      RazonSocial: z.string(),
      CodigoDireccionSeccional: z.string(),
      ActividadEconomicaPrincipal: z.string(),
      SiEsUnaCorrecionIndique: z.object({
        Cod: z.number(),
        CodigoFormularioAnterior: z.number()
      })
    }),
    FraccionAñoGravableSiguiente: z.boolean(),
    RenuncioAPertenecerAlRegimenTributarioEspecial: z.boolean(),
    VinculadoAlPagoDeObrasPorImpuestos: z.boolean(),
    PerdidasFiscalesAcumuladasAñosAnterioresSinCompensar: z.number()
  }),
  DatosResumen: z.object({
    DatosInformativos: z.object({
      TotalCostosGastosDeNomina: z.number(),
      AportesAlSistemaDeSeguridadSocial: z.number(),
      AportacionesSENAICBFCajasCompensacion: z.number()
    }),
    Patromonio: z.object({
      EfectivoYEquivalentesDeEfectivo: z.number(),
      InversionesEInstrumentosFinancierosDerivados: z.number(),
      CuentasDocumentosYArrendamientosFinancierosPorCobrar: z.number(),
      Inventarios: z.number(),
      ActivosIntangibles: z.number(),
      ActivosBiologicos: z.number(),
      PropiedadesPlantaYEquipoPropiedadesDeInversionYANCMV: z.number(),
      OtrosActivos: z.number(),
      TotalPatrimonioBruto: z.number(),
      Pasivos: z.number(),
      TotalPatrimonioLiquido: z.number()
    }),
    Ingresos: z.object({
      IngresosBrutosDeActividadesOrdinarias: z.number(),
      IngresosFinancieros: z.number(),
      DividendosYOParticipacionesNoConstitutivosDeRentaNiGananciaOcasional: z.number(),
      DividendosYOParticipacionesDistribuidasPorEntidadesNoResidentesEnColombiaAUnaCHC: z.number(),
      DividendosYOParticipacionesGravadas2016YAnterioresRecibidosPorSociedadesExtranjeras: z.number(),
      DividendosYOParticipacionesGravadas2016YAnterioresRecibidosPorPersonasNaturalesSinResidenciaFiscal: z.number(),
      DividendosYOParticipacionesGravadas2017YSiguientesRecibidosPorPersonasNaturalesSinResidenciaFiscal: z.number(),
      DividendosYOParticipacionesNoGravadasPeroQueTributaranAl10Porciento: z.number(),
      DividendosYOParticipacionesGravadas2017YSiguientesRecibidosPorEstablecimientosPermanentes: z.number(),
      DividendosYParticipacionesGravados2017YSiguientesRecibidosDeParteDeunasSociedadQueLlevoACaboMegainversiones: z.number(),
      OtrosIngresos: z.number(),
      TotalIngresosBrutos: z.number(),
      DevolucionesRebajasYDescuentosEnVentas: z.number(),
      IngresosNoConstitutivosDeRentaNiGananciaOcasional: z.number(),
      TotalIngresosNetos: z.number()
    }),
    CostosYDeducciones: z.object({
      Costos: z.number(),
      GastosDeAdministracion: z.number(),
      GastosDeDistribucionYVentas: z.number(),
      GastosFinancieros: z.number(),
      OtrosGastosYDeducciones: z.number(),
      TotalCostosYGastosDeducibles: z.number()
    }),
    ESAL: z.object({
      InversionesEfectuadasEnElAnio: z.number(),
      InversionesLiquidadasDePeriodosGravablesAnteriores: z.number()
    }),
    Renta: z.object({
      RentaPorRecuperacionDeDeducciones: z.number(),
      RentaPasivaECESinResidenciaFiscalEnColombia: z.number(),
      RentaLiquidaOrdinariaDelEjercicioSinCasillas52A56: z.number(),
      OPerdidaLiquidaDelEjercicioSinCasillas52A56: z.number(),
      Compensaciones: z.number(),
      RentaLiquidaSinCasillas52A56: z.number(),
      RentaPresuntiva: z.number(),
      RentaExenta: z.number(),
      RentasGravables: z.number(),
      RentaLiquidaGravadaSinCasillas52A56: z.number()
    }),
    GananciasOcasionales: z.object({
      IngresosParGananciasOcasionales: z.number(),
      RentasDeudoresRegimenLey1116De2006Decreto560YArt15Decreto772: z.number(),
      UtilizacionPerdidasFiscalesAcumuladasInciso2Articulo15Decreto772: z.number(),
      CostosPorGananciasOcasionales: z.number(),
      GananciasOcasionalesNoGravadasYExentas: z.number(),
      GananciasOcasionalesGravables: z.number()
    }),
    LiquidacionPrivada: z.object({
      ImpuestosSobreLasRentasLiquidasGravables: z.object({
        ImpuestoSobreLaRentaLiquidaGravableSinCasillas52A56: z.number(),
        DeDividendosYOParticipacionesGravadasALaTarifaDel10Porciento: z.number(),
        DeDividendosYOParticipacionesGravadasALaTarifaDelArticulo240DelET: z.number(),
        DeDividendosYOParticipacionesGravadasALaTarifaDel27Porciento: z.number(),
        DeDividendosYOParticipacionesGravadasALaTarifaDelArt240: z.number(),
        DeDividendosYOParticipacionesGravadasALaTarifaDel33Porciento: z.number()
      }),
      TotalImpuestoSobreLasRentasLiquidasGravables: z.number(),
      DescuentosTributarios: z.number(),
      ImpuestoNetoDeRenta: z.number(),
      ImpuestoDeGananciasOcasionales: z.number(),
      DescuentosPorImpuestosPagadosEnElExteriorPorGananciasOcasionales: z.number(),
      TotalImpuestoACargo: z.number(),
      MenosValorInversionObrasPorImpuestosHastaDelal50Porciento: z.number(),
      MenosDescuentoEfectivoInversionObrasPorImpuestos: z.number(),
      CreditoFiscalArticulo256: z.number(),
      MenosAnticipoRentaLiquidadoAnioGravableAnterior: z.number(),
      MenosSaldoAFavorAnioGravableAnteriorSinSolicitudDeDevolucion: z.number(),
      Retenciones: z.object({
        Autorretenciones: z.number(),
        OtrasRetenciones: z.number(),
        TotalRetencionesAnioGravableADeclarar: z.number()
      }),
      MasAnticipoRentaParaElAnioGravableSiguiente: z.number(),
      SobretasaInstucionesFinancieras: z.object({
        MenosAnticipoSobretasaInstitucionesFinancierasAnioGravableAnterior: z.number(),
        MasSobretasaInstitucionesFinancieras: z.number(),
        MasAnticipoSobretasaInstitucionesFinancierasAnioGravableSiguiente: z.number()
      }),
      SaldoAPagarPorImpuesto: z.number(),
      Sanciones: z.number(),
      TotalSaldoAPagar: z.number(),
      OTotalSaldoAFavor: z.number()
    })
  }),
  Totales: z.object({
    ValorTotalImpuestoExigiblePorObrasPorImpuestosModalidadDePago1: z.number(),
    ValorTotalProyectoObrasPorImpuestosModalidadDePago2: z.number(),
    CodigoRepresentacion: z.number(),
    CodigoContratadorORevisorFiscal: z.number(),
    ConSalvedades: z.boolean(),
    NumeroDeTarjetaProfesional: z.number(),
    PagoTotal: z.number()
  })
})
