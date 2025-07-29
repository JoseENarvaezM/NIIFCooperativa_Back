import { z } from "zod";

export const RentaLiquidaSchema = z.object({
  Ingresos: z.object({
    IngresosNetosActividadIndustrialCoSer: z.object({
      IngresosNetosActividadIndustrialCoSer: z.object({
        VentaTerritorioNacional: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number(),
          Tarifa9: z.number(),
          Tarifa15: z.number(),
          Tarifa20: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27: z.number(),
          TarifaGeneral240: z.number(),
          Otras: z.number()
        }),
        VentaExportacion: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number(),
          Tarifa9: z.number(),
          Tarifa15: z.number(),
          Tarifa20: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27: z.number(),
          TarifaGeneral240: z.number(),
          Otras: z.number()
        }),
        VentaZonaFranca: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number(),
          Tarifa9: z.number(),
          Tarifa15: z.number(),
          Tarifa20: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27: z.number(),
          TarifaGeneral240: z.number(),
          Otras: z.number()
        }),
        VentaComercializadorasInternacionales: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number(),
          Tarifa9: z.number(),
          Tarifa15: z.number(),
          Tarifa20: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27: z.number(),
          TarifaGeneral240: z.number(),
          Otras: z.number()
        }),
        VentaJurisdiccionesNoCooperantes: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number(),
          Tarifa9: z.number(),
          Tarifa15: z.number(),
          Tarifa20: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27: z.number(),
          TarifaGeneral240: z.number(),
          Otras: z.number()
        }),
        VentaVinculadoEconomicosFranca: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number(),
          Tarifa9: z.number(),
          Tarifa15: z.number(),
          Tarifa20: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27: z.number(),
          TarifaGeneral240: z.number(),
          Otras: z.number()
        }),
        PrestacionServiciosTerritorioNacional: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number(),
          Tarifa9: z.number(),
          Tarifa15: z.number(),
          Tarifa20: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27: z.number(),
          TarifaGeneral240: z.number(),
          Otras: z.number()
        }),
        PrestacionServiciosExportacion: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number(),
          Tarifa9: z.number(),
          Tarifa15: z.number(),
          Tarifa20: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27: z.number(),
          TarifaGeneral240: z.number(),
          Otras: z.number()
        }),
        PrestacionServiciosZonaFranca: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number(),
          Tarifa9: z.number(),
          Tarifa15: z.number(),
          Tarifa20: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27: z.number(),
          TarifaGeneral240: z.number(),
          Otras: z.number()
        }),
        PrestacionServiciosComercializadorasInternacionales: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number(),
          Tarifa9: z.number(),
          Tarifa15: z.number(),
          Tarifa20: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27: z.number(),
          TarifaGeneral240: z.number(),
          Otras: z.number()
        }),
        PrestacionServiciosJurisdiccionesNoCooperantes: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number(),
          Tarifa9: z.number(),
          Tarifa15: z.number(),
          Tarifa20: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27: z.number(),
          TarifaGeneral240: z.number(),
          Otras: z.number()
        }),
        PrestacionServiciosVinculadoEconomicosFranca: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number(),
          Tarifa9: z.number(),
          Tarifa15: z.number(),
          Tarifa20: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27: z.number(),
          TarifaGeneral240: z.number(),
          Otras: z.number()
        }),
        ServiciosConstruccion: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number(),
          Tarifa9: z.number(),
          Tarifa15: z.number(),
          Tarifa20: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27: z.number(),
          TarifaGeneral240: z.number(),
          Otras: z.number()
        }),
        AcuerdosConcesion: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number(),
          Tarifa9: z.number(),
          Tarifa15: z.number(),
          Tarifa20: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27: z.number(),
          TarifaGeneral240: z.number(),
          Otras: z.number()
        }),
        ArrendamientosOperativos: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number(),
          Tarifa9: z.number(),
          Tarifa15: z.number(),
          Tarifa20: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27: z.number(),
          TarifaGeneral240: z.number(),
          Otras: z.number()
        }),
        Regalias: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number(),
          Tarifa9: z.number(),
          Tarifa15: z.number(),
          Tarifa20: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27: z.number(),
          TarifaGeneral240: z.number(),
          Otras: z.number()
        }),
        Comisiones: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number(),
          Tarifa9: z.number(),
          Tarifa15: z.number(),
          Tarifa20: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27: z.number(),
          TarifaGeneral240: z.number(),
          Otras: z.number()
        }),
        HonorariosProfesionales: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number(),
          Tarifa9: z.number(),
          Tarifa15: z.number(),
          Tarifa20: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27: z.number(),
          TarifaGeneral240: z.number(),
          Otras: z.number()
        }),
        ActividadesSegurosCapitalizacion: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number(),
          Tarifa9: z.number(),
          Tarifa15: z.number(),
          Tarifa20: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27: z.number(),
          TarifaGeneral240: z.number(),
          Otras: z.number()
        }),
        LiberacionReservasContratosSeguros: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number(),
          Tarifa9: z.number(),
          Tarifa15: z.number(),
          Tarifa20: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27: z.number(),
          TarifaGeneral240: z.number(),
          Otras: z.number()
        }),
        ComisionesBancarias: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number(),
          Tarifa9: z.number(),
          Tarifa15: z.number(),
          Tarifa20: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27: z.number(),
          TarifaGeneral240: z.number(),
          Otras: z.number()
        }),
        OtrosIngresos: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number(),
          Tarifa9: z.number(),
          Tarifa15: z.number(),
          Tarifa20: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27: z.number(),
          TarifaGeneral240: z.number(),
          Otras: z.number()
        }),
        Total: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number(),
          Tarifa9: z.number(),
          Tarifa15: z.number(),
          Tarifa20: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27: z.number(),
          TarifaGeneral240: z.number(),
          Otras: z.number()
        })
      }),
      DevolucionesRebajasDescuentos: z.object({
        VentaBienes: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number(),
          Tarifa9: z.number(),
          Tarifa15: z.number(),
          Tarifa20: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27: z.number(),
          TarifaGeneral240: z.number(),
          Otras: z.number()
        }),
        PrestacionServicios: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number(),
          Tarifa9: z.number(),
          Tarifa15: z.number(),
          Tarifa20: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27: z.number(),
          TarifaGeneral240: z.number(),
          Otras: z.number()
        }),
        OtrasDevoluciones: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number(),
          Tarifa9: z.number(),
          Tarifa15: z.number(),
          Tarifa20: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27: z.number(),
          TarifaGeneral240: z.number(),
          Otras: z.number()
        }),
        Total: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number(),
          Tarifa9: z.number(),
          Tarifa15: z.number(),
          Tarifa20: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27: z.number(),
          TarifaGeneral240: z.number(),
          Otras: z.number()
        })
      }),
      Total: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      })
    }),
    IngresosFinancieros: z.object({
      ArrendamientoFinanciero: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      InteresesSectorFinanciero: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      InteresesPrestamosTerceros: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      IntrumentosFinancierosMedidos: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      InteresesImplicitos: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      DiferenciaCambio: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      OtrosIngresos: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      Total: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      })
    }),
    GananciasInversionesSubsidiariasAsociadasNegocios: z.object({
      GananciasMetodoParticipacion: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      GananciasCambioValorRazonable: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      DividendosParticipacionesNoContribuyentes: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      DividendosParticipacionesDistribuidosEntidadesNoColombia: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      DividendosParticipacionesGravadasTarifaGeneral: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      DividendosParticipacionesGravadasPersonaNatural: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      DividendosParticipacionesGravadasPersonaNaturalSinResidencia: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      DividendosParticipaciones10: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      DividendosParticipacionesGravadasTarifaGeneralExtranjeras: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      DividendosProyectosMegainversion: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      Total: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      })
    }),
    IngresosPorMedicionesValorRazonable: z.object({
      ActivosBiologicos: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      PropiedadesInversion: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      InstrumentosFinancieros: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      InstrumentosDerivados: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      Otros: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      Total: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      })
    }),
    UtilidadVentaEnajenacionActivosMenos2Anos: z.object({
      PropiedadesPlanta: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      PropiedadesInversion: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      ActivosBiologicos: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      ActivosNoCorrientesMantenidosVentaEntregarPropietarios: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      ActivosIntangibles: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      InversionesAccionesOtrasParticipaciones: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      DisposicionOtrosInstrumentosFinancieros: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      Otros: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      Total: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      })
    }),
    UtilidadVentaEnajenacionActivosMas2Anos: z.object({
      PropiedadesPlanta: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      PropiedadesInversion: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      ActivosBiologicos: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      ActivosNoCorrientesMantenidosVentaEntregarPropietarios: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      ActivosIntangibles: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      InversionesAccionesOtrasParticipaciones: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      DisposicionOtrosInstrumentosFinancieros: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      Otros: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      Total: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      })
    }),
    IngresosReversionDeterioroValor: z.object({
      Inventarios: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      PropiedadesPlantaEquipo: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      ActivosIntangibles: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      ActivosExploracionEvaluacionRecursosMinerales: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      PropiedadesInversionMedidasCosto: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      ActivosNoCorrientesMantenidosVentaEntregarPropietarios: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      ActivosBiologicosMedidosCosto: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      BienesArteCultura: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      ActivosFinancieros: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      CarteraCreditoOperacionesLeasing: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      OtrasInversionesMedidasCostoMetodoParticipacion: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      OtrosDeterioros: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      Total: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      })
    }),
    IngresosReversionProvisiones: z.object({
      Garantias: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      ContratosOnerosos: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      Litigios: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      ReembolsosClientes: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      ReestructuracionesNegocios: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      PasivosContingentesCombinacionNegocios: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      Otros: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      Total: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      })
    }),
    IngresosReversionPasivosBeneficiosEmpleados: z.object({
      BeneficiosDeCortoPlazo: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      BeneficiosDeLargoPlazo: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      BeneficiosAEmpeladosPorTerminacionDelVinculoLaboral: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      BeneficiosAEmpeladosPostEmpleo: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      Total: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      })
    }),
    OtrosIngresos: z.object({
      TransferenciasSubvencionesAyudasGubernamentales: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      DonacionesAportacionesSimilares: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      ReembolsosCompaniasSegurosIndemnizaciones: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      OtrasIndemnizaciones: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      OtrasReversionesRecuperaciones: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      Otros: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      Total: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      })
    }),
    GananciasNetasOperacionesDiscontinuas: z.object({
      ValorContable: z.number(),
      EfectoConversion: z.number(),
      MenorValorFiscal: z.number()
    }),
    AjustesFiscales: z.object({
      AdicionIngresos: z.object({
        RecuperacionDeDeduccionesSinIncidenciaContable: z.object({
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number(),
          Tarifa9: z.number(),
          Tarifa15: z.number(),
          Tarifa20: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27: z.number(),
          TarifaGeneral240: z.number(),
          Otras: z.number()
        }),
        InteresesPresuntos: z.object({
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number(),
          Tarifa9: z.number(),
          Tarifa15: z.number(),
          Tarifa20: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27: z.number(),
          TarifaGeneral240: z.number(),
          Otras: z.number()
        }),
        MayorIngresoPreciosDeTransferencia: z.object({
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number(),
          Tarifa9: z.number(),
          Tarifa15: z.number(),
          Tarifa20: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27: z.number(),
          TarifaGeneral240: z.number(),
          Otras: z.number()
        }),
        OtrosIngresosFiscalesYNoIncluidosContablemente: z.object({
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number(),
          Tarifa9: z.number(),
          Tarifa15: z.number(),
          Tarifa20: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27: z.number(),
          TarifaGeneral240: z.number(),
          Otras: z.number()
        }),
        Total: z.object({
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number(),
          Tarifa9: z.number(),
          Tarifa15: z.number(),
          Tarifa20: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27: z.number(),
          TarifaGeneral240: z.number(),
          Otras: z.number()
        })
      }),
      Total: z.object({
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      })
    }),
    MenosIngresosNoConstitutivosRenta: z.object({
      MayorValorFiscal: z.number(),
      ValorFiscal: z.number(),
      Tarifa9: z.number(),
      Tarifa15: z.number(),
      Tarifa20: z.number(),
      MegaInversiones: z.number(),
      MegaInversiones27: z.number(),
      TarifaGeneral240: z.number(),
      Otras: z.number()
    }),
    TotalIngresos: z.object({
      ValorContable: z.number(),
      EfectoConversion: z.number(),
      MenorValorFiscal: z.number(),
      MayorValorFiscal: z.number(),
      ValorFiscal: z.number(),
      Tarifa9: z.number(),
      Tarifa15: z.number(),
      Tarifa20: z.number(),
      MegaInversiones: z.number(),
      MegaInversiones27: z.number(),
      TarifaGeneral240: z.number(),
      Otras: z.number()
    })
  }),
  Costos: z.object({
    MateriasPrimasReventaBienes: z.object({
      CostossVentasCalculadoSistemaPermanente: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      MateriasPrimasProduccion: z.object({
        InventarioInicial: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number(),
          Tarifa9: z.number(),
          Tarifa15: z.number(),
          Tarifa20: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27: z.number(),
          TarifaGeneral240: z.number(),
          Otras: z.number()
        }),
        ComprasLocales: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number(),
          Tarifa9: z.number(),
          Tarifa15: z.number(),
          Tarifa20: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27: z.number(),
          TarifaGeneral240: z.number(),
          Otras: z.number()
        }),
        Importaciones: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number(),
          Tarifa9: z.number(),
          Tarifa15: z.number(),
          Tarifa20: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27: z.number(),
          TarifaGeneral240: z.number(),
          Otras: z.number()
        }),
        InventarioFinal: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number(),
          Tarifa9: z.number(),
          Tarifa15: z.number(),
          Tarifa20: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27: z.number(),
          TarifaGeneral240: z.number(),
          Otras: z.number()
        })
      }),
      CostoBienesVendidos: z.object({
        InventarioInicial: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number(),
          Tarifa9: z.number(),
          Tarifa15: z.number(),
          Tarifa20: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27: z.number(),
          TarifaGeneral240: z.number(),
          Otras: z.number()
        }),
        ComprasLocales: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number(),
          Tarifa9: z.number(),
          Tarifa15: z.number(),
          Tarifa20: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27: z.number(),
          TarifaGeneral240: z.number(),
          Otras: z.number()
        }),
        Importaciones: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number(),
          Tarifa9: z.number(),
          Tarifa15: z.number(),
          Tarifa20: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27: z.number(),
          TarifaGeneral240: z.number(),
          Otras: z.number()
        }),
        InventarioFinal: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number(),
          Tarifa9: z.number(),
          Tarifa15: z.number(),
          Tarifa20: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27: z.number(),
          TarifaGeneral240: z.number(),
          Otras: z.number()
        })
      }),
      ProductosProceso: z.object({
        InventarioInicial: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number(),
          Tarifa9: z.number(),
          Tarifa15: z.number(),
          Tarifa20: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27: z.number(),
          TarifaGeneral240: z.number(),
          Otras: z.number()
        }),
        InventarioFinal: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number(),
          Tarifa9: z.number(),
          Tarifa15: z.number(),
          Tarifa20: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27: z.number(),
          TarifaGeneral240: z.number(),
          Otras: z.number()
        })
      }),
      ProductosTerminados: z.object({
        InventarioInicial: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number(),
          Tarifa9: z.number(),
          Tarifa15: z.number(),
          Tarifa20: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27: z.number(),
          TarifaGeneral240: z.number(),
          Otras: z.number()
        }),
        InventarioFinal: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number(),
          Tarifa9: z.number(),
          Tarifa15: z.number(),
          Tarifa20: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27: z.number(),
          TarifaGeneral240: z.number(),
          Otras: z.number()
        })
      }),
      CostosPrestacionServicios: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      OtrosSistemasDeterminacionCostoVentas: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      Ajustes: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      Total: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      })
    }),
    ManoObra: z.object({
      CortoPlazo: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      LargoPlazo: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      PostTerminacionVinculoLaboral: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      PostEmpleo: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      Total: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      })
    }),
    DepresionacionesAmortizacionesDeterioros: z.object({
      DepreciacionPropiedadesPlantaEquipo: z.object({
        Costo: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number(),
          Tarifa9: z.number(),
          Tarifa15: z.number(),
          Tarifa20: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27: z.number(),
          TarifaGeneral240: z.number(),
          Otras: z.number()
        }),
        AjusteAcumunlado: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number(),
          Tarifa9: z.number(),
          Tarifa15: z.number(),
          Tarifa20: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27: z.number(),
          TarifaGeneral240: z.number(),
          Otras: z.number()
        })
      }),
      DepreciacionPropiedadesInversion: z.object({
        Costo: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number(),
          Tarifa9: z.number(),
          Tarifa15: z.number(),
          Tarifa20: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27: z.number(),
          TarifaGeneral240: z.number(),
          Otras: z.number()
        }),
        AjusteAcumunlado: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number(),
          Tarifa9: z.number(),
          Tarifa15: z.number(),
          Tarifa20: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27: z.number(),
          TarifaGeneral240: z.number(),
          Otras: z.number()
        })
      }),
      DepreciacionActivosBiologicos: z.object({
        Costo: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number(),
          Tarifa9: z.number(),
          Tarifa15: z.number(),
          Tarifa20: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27: z.number(),
          TarifaGeneral240: z.number(),
          Otras: z.number()
        }),
        AjusteAcumunlado: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number(),
          Tarifa9: z.number(),
          Tarifa15: z.number(),
          Tarifa20: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27: z.number(),
          TarifaGeneral240: z.number(),
          Otras: z.number()
        })
      }),
      AmortizacionActivosIntangibles: z.object({
        Costo: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number(),
          Tarifa9: z.number(),
          Tarifa15: z.number(),
          Tarifa20: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27: z.number(),
          TarifaGeneral240: z.number(),
          Otras: z.number()
        }),
        AjusteAcumunlado: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number(),
          Tarifa9: z.number(),
          Tarifa15: z.number(),
          Tarifa20: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27: z.number(),
          TarifaGeneral240: z.number(),
          Otras: z.number()
        })
      }),
      DepreciacionDerechosUsoArrendamientos: z.object({}),
      OtrasDepreciacionesAmortizaciones: z.object({
        Costo: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number(),
          Tarifa9: z.number(),
          Tarifa15: z.number(),
          Tarifa20: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27: z.number(),
          TarifaGeneral240: z.number(),
          Otras: z.number()
        }),
        AjusteAcumunlado: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number(),
          Tarifa9: z.number(),
          Tarifa15: z.number(),
          Tarifa20: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27: z.number(),
          TarifaGeneral240: z.number(),
          Otras: z.number()
        })
      }),
      DeterioroValorActivos: z.object({
        Inventarios: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number(),
          Tarifa9: z.number(),
          Tarifa15: z.number(),
          Tarifa20: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27: z.number(),
          TarifaGeneral240: z.number(),
          Otras: z.number()
        }),
        PropiedadesPlantaEquipo: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number(),
          Tarifa9: z.number(),
          Tarifa15: z.number(),
          Tarifa20: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27: z.number(),
          TarifaGeneral240: z.number(),
          Otras: z.number()
        }),
        ActivosIntangibles: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number(),
          Tarifa9: z.number(),
          Tarifa15: z.number(),
          Tarifa20: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27: z.number(),
          TarifaGeneral240: z.number(),
          Otras: z.number()
        }),
        ActivosExploracionEvaluacionRecursosMinerales: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number(),
          Tarifa9: z.number(),
          Tarifa15: z.number(),
          Tarifa20: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27: z.number(),
          TarifaGeneral240: z.number(),
          Otras: z.number()
        }),
        PropiedadesInversionMedidasCosto: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number(),
          Tarifa9: z.number(),
          Tarifa15: z.number(),
          Tarifa20: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27: z.number(),
          TarifaGeneral240: z.number(),
          Otras: z.number()
        }),
        ActivosNoCorrientesMantenidosVentaEntregarPropietarios: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number(),
          Tarifa9: z.number(),
          Tarifa15: z.number(),
          Tarifa20: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27: z.number(),
          TarifaGeneral240: z.number(),
          Otras: z.number()
        }),
        ActivosBiologicosMedidosCosto: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number(),
          Tarifa9: z.number(),
          Tarifa15: z.number(),
          Tarifa20: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27: z.number(),
          TarifaGeneral240: z.number(),
          Otras: z.number()
        }),
        BienesArteCultura: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number(),
          Tarifa9: z.number(),
          Tarifa15: z.number(),
          Tarifa20: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27: z.number(),
          TarifaGeneral240: z.number(),
          Otras: z.number()
        }),
        ActivosFinancieros: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number(),
          Tarifa9: z.number(),
          Tarifa15: z.number(),
          Tarifa20: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27: z.number(),
          TarifaGeneral240: z.number(),
          Otras: z.number()
        }),
        CarteraCreditoOperacionesLeasing: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number(),
          Tarifa9: z.number(),
          Tarifa15: z.number(),
          Tarifa20: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27: z.number(),
          TarifaGeneral240: z.number(),
          Otras: z.number()
        }),
        OtrasInversionesMedidasCostoMetodoParticipacion: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number(),
          Tarifa9: z.number(),
          Tarifa15: z.number(),
          Tarifa20: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27: z.number(),
          TarifaGeneral240: z.number(),
          Otras: z.number()
        }),
        DerechosUsoArrendamientosOperativos: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number(),
          Tarifa9: z.number(),
          Tarifa15: z.number(),
          Tarifa20: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27: z.number(),
          TarifaGeneral240: z.number(),
          Otras: z.number()
        }),
        OtrosDeterioros: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number(),
          Tarifa9: z.number(),
          Tarifa15: z.number(),
          Tarifa20: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27: z.number(),
          TarifaGeneral240: z.number(),
          Otras: z.number()
        })
      }),
      Total: z.object({})
    }),
    OtrosCostos: z.object({
      Arrendamientos: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      Seguros: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      Servicios: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      Honorarios: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      ServiciosTecnicos: z.object({
        VinculadosEconomicos: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number(),
          Tarifa9: z.number(),
          Tarifa15: z.number(),
          Tarifa20: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27: z.number(),
          TarifaGeneral240: z.number(),
          Otras: z.number()
        }),
        JurisdiccionesNoCooperantesBajaNulaImposicion: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number(),
          Tarifa9: z.number(),
          Tarifa15: z.number(),
          Tarifa20: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27: z.number(),
          TarifaGeneral240: z.number(),
          Otras: z.number()
        }),
        NoVinculados: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number(),
          Tarifa9: z.number(),
          Tarifa15: z.number(),
          Tarifa20: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27: z.number(),
          TarifaGeneral240: z.number(),
          Otras: z.number()
        })
      }),
      AsistenciaTecnica: z.object({
        VinculadosEconomicos: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number(),
          Tarifa9: z.number(),
          Tarifa15: z.number(),
          Tarifa20: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27: z.number(),
          TarifaGeneral240: z.number(),
          Otras: z.number()
        }),
        JurisdiccionesNoCooperantesBajaNulaImposicion: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number(),
          Tarifa9: z.number(),
          Tarifa15: z.number(),
          Tarifa20: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27: z.number(),
          TarifaGeneral240: z.number(),
          Otras: z.number()
        }),
        NoVinculados: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number(),
          Tarifa9: z.number(),
          Tarifa15: z.number(),
          Tarifa20: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27: z.number(),
          TarifaGeneral240: z.number(),
          Otras: z.number()
        })
      }),
      OtrosConceptosReconocidosCostos: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      OtrosConceptosFiscalesNoReconocidos: z.object({
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      Total: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      })
    }),
    MenosCostoAjustePrecios: z.object({
      MayorValorFiscal: z.number(),
      ValorFiscal: z.number(),
      Tarifa9: z.number(),
      Tarifa15: z.number(),
      Tarifa20: z.number(),
      MegaInversiones: z.number(),
      MegaInversiones27: z.number(),
      TarifaGeneral240: z.number(),
      Otras: z.number()
    }),
    TotalCostos: z.object({
      ValorContable: z.number(),
      EfectoConversion: z.number(),
      MenorValorFiscal: z.number(),
      MayorValorFiscal: z.number(),
      ValorFiscal: z.number(),
      Tarifa9: z.number(),
      Tarifa15: z.number(),
      Tarifa20: z.number(),
      MegaInversiones: z.number(),
      MegaInversiones27: z.number(),
      TarifaGeneral240: z.number(),
      Otras: z.number()
    })
  }),
  Gastos: z.object({
    Administracion: z.object({
      ManoObra: z.object({
        CortoPlazo: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number(),
          Tarifa9: z.number(),
          Tarifa15: z.number(),
          Tarifa20: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27: z.number(),
          TarifaGeneral240: z.number(),
          Otras: z.number()
        }),
        LargoPlazo: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number(),
          Tarifa9: z.number(),
          Tarifa15: z.number(),
          Tarifa20: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27: z.number(),
          TarifaGeneral240: z.number(),
          Otras: z.number()
        }),
        PostTerminacionVinculoLaboral: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number(),
          Tarifa9: z.number(),
          Tarifa15: z.number(),
          Tarifa20: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27: z.number(),
          TarifaGeneral240: z.number(),
          Otras: z.number()
        }),
        PostEmpleo: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number(),
          Tarifa9: z.number(),
          Tarifa15: z.number(),
          Tarifa20: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27: z.number(),
          TarifaGeneral240: z.number(),
          Otras: z.number()
        }),
        Total: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number(),
          Tarifa9: z.number(),
          Tarifa15: z.number(),
          Tarifa20: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27: z.number(),
          TarifaGeneral240: z.number(),
          Otras: z.number()
        })
      }),
      OtrosGastosAdministracion: z.object({
        ImpuestosDistintosAlImpuestosDeRentaYComplementarios: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number(),
          Tarifa9: z.number(),
          Tarifa15: z.number(),
          Tarifa20: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27: z.number(),
          TarifaGeneral240: z.number(),
          Otras: z.number()
        }),
        ArrendamientosOperativos: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number(),
          Tarifa9: z.number(),
          Tarifa15: z.number(),
          Tarifa20: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27: z.number(),
          TarifaGeneral240: z.number(),
          Otras: z.number()
        }),
        ContribucionesYAfiliaciones: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number(),
          Tarifa9: z.number(),
          Tarifa15: z.number(),
          Tarifa20: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27: z.number(),
          TarifaGeneral240: z.number(),
          Otras: z.number()
        }),
        Honorarios: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number(),
          Tarifa9: z.number(),
          Tarifa15: z.number(),
          Tarifa20: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27: z.number(),
          TarifaGeneral240: z.number(),
          Otras: z.number()
        }),
        Seguros: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number(),
          Tarifa9: z.number(),
          Tarifa15: z.number(),
          Tarifa20: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27: z.number(),
          TarifaGeneral240: z.number(),
          Otras: z.number()
        }),
        ServiciosAdministrativos: z.object({
          VinculadosEconomicos: z.object({
            ValorContable: z.number(),
            EfectoConversion: z.number(),
            MenorValorFiscal: z.number(),
            MayorValorFiscal: z.number(),
            ValorFiscal: z.number(),
            Tarifa9: z.number(),
            Tarifa15: z.number(),
            Tarifa20: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27: z.number(),
            TarifaGeneral240: z.number(),
            Otras: z.number()
          }),
          JurisdiccionesNoCooperantesBajaNulaImposicion: z.object({
            ValorContable: z.number(),
            EfectoConversion: z.number(),
            MenorValorFiscal: z.number(),
            MayorValorFiscal: z.number(),
            ValorFiscal: z.number(),
            Tarifa9: z.number(),
            Tarifa15: z.number(),
            Tarifa20: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27: z.number(),
            TarifaGeneral240: z.number(),
            Otras: z.number()
          }),
          NoVinculados: z.object({
            ValorContable: z.number(),
            EfectoConversion: z.number(),
            MenorValorFiscal: z.number(),
            MayorValorFiscal: z.number(),
            ValorFiscal: z.number(),
            Tarifa9: z.number(),
            Tarifa15: z.number(),
            Tarifa20: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27: z.number(),
            TarifaGeneral240: z.number(),
            Otras: z.number()
          })
        }),
        Regalias: z.object({
          VinculadosEconomicos: z.object({
            ValorContable: z.number(),
            EfectoConversion: z.number(),
            MenorValorFiscal: z.number(),
            MayorValorFiscal: z.number(),
            ValorFiscal: z.number(),
            Tarifa9: z.number(),
            Tarifa15: z.number(),
            Tarifa20: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27: z.number(),
            TarifaGeneral240: z.number(),
            Otras: z.number()
          }),
          JurisdiccionesNoCooperantesBajaNulaImposicion: z.object({
            ValorContable: z.number(),
            EfectoConversion: z.number(),
            MenorValorFiscal: z.number(),
            MayorValorFiscal: z.number(),
            ValorFiscal: z.number(),
            Tarifa9: z.number(),
            Tarifa15: z.number(),
            Tarifa20: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27: z.number(),
            TarifaGeneral240: z.number(),
            Otras: z.number()
          }),
          NoVinculados: z.object({
            ValorContable: z.number(),
            EfectoConversion: z.number(),
            MenorValorFiscal: z.number(),
            MayorValorFiscal: z.number(),
            ValorFiscal: z.number(),
            Tarifa9: z.number(),
            Tarifa15: z.number(),
            Tarifa20: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27: z.number(),
            TarifaGeneral240: z.number(),
            Otras: z.number()
          })
        }),
        AsistenciaTecnica: z.object({
          VinculadosEconomicos: z.object({
            ValorContable: z.number(),
            EfectoConversion: z.number(),
            MenorValorFiscal: z.number(),
            MayorValorFiscal: z.number(),
            ValorFiscal: z.number(),
            Tarifa9: z.number(),
            Tarifa15: z.number(),
            Tarifa20: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27: z.number(),
            TarifaGeneral240: z.number(),
            Otras: z.number()
          }),
          JurisdiccionesNoCooperantesBajaNulaImposicion: z.object({
            ValorContable: z.number(),
            EfectoConversion: z.number(),
            MenorValorFiscal: z.number(),
            MayorValorFiscal: z.number(),
            ValorFiscal: z.number(),
            Tarifa9: z.number(),
            Tarifa15: z.number(),
            Tarifa20: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27: z.number(),
            TarifaGeneral240: z.number(),
            Otras: z.number()
          }),
          NoVinculados: z.object({
            ValorContable: z.number(),
            EfectoConversion: z.number(),
            MenorValorFiscal: z.number(),
            MayorValorFiscal: z.number(),
            ValorFiscal: z.number(),
            Tarifa9: z.number(),
            Tarifa15: z.number(),
            Tarifa20: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27: z.number(),
            TarifaGeneral240: z.number(),
            Otras: z.number()
          })
        }),
        OtrosServicios: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number(),
          Tarifa9: z.number(),
          Tarifa15: z.number(),
          Tarifa20: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27: z.number(),
          TarifaGeneral240: z.number(),
          Otras: z.number()
        }),
        InvestigacionYDesarrollo: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number(),
          Tarifa9: z.number(),
          Tarifa15: z.number(),
          Tarifa20: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27: z.number(),
          TarifaGeneral240: z.number(),
          Otras: z.number()
        }),
        GastosLegales: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number(),
          Tarifa9: z.number(),
          Tarifa15: z.number(),
          Tarifa20: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27: z.number(),
          TarifaGeneral240: z.number(),
          Otras: z.number()
        }),
        ReparacionMantenimientoAdecuacionInstalaciones: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number(),
          Tarifa9: z.number(),
          Tarifa15: z.number(),
          Tarifa20: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27: z.number(),
          TarifaGeneral240: z.number(),
          Otras: z.number()
        }),
        Transporte: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number(),
          Tarifa9: z.number(),
          Tarifa15: z.number(),
          Tarifa20: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27: z.number(),
          TarifaGeneral240: z.number(),
          Otras: z.number()
        }),
        OtrosGastos: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number(),
          Tarifa9: z.number(),
          Tarifa15: z.number(),
          Tarifa20: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27: z.number(),
          TarifaGeneral240: z.number(),
          Otras: z.number()
        }),
        Total: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number(),
          Tarifa9: z.number(),
          Tarifa15: z.number(),
          Tarifa20: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27: z.number(),
          TarifaGeneral240: z.number(),
          Otras: z.number()
        })
      }),
      DepreciacionesAmortizacionesDeterioros: z.object({
        DepreciacionPropiedadesPlantaEquipo: z.object({
          Costo: z.object({
            ValorContable: z.number(),
            EfectoConversion: z.number(),
            MenorValorFiscal: z.number(),
            MayorValorFiscal: z.number(),
            ValorFiscal: z.number(),
            Tarifa9: z.number(),
            Tarifa15: z.number(),
            Tarifa20: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27: z.number(),
            TarifaGeneral240: z.number(),
            Otras: z.number()
          }),
          AjusteAcumunlado: z.object({
            ValorContable: z.number(),
            EfectoConversion: z.number(),
            MenorValorFiscal: z.number(),
            MayorValorFiscal: z.number(),
            ValorFiscal: z.number(),
            Tarifa9: z.number(),
            Tarifa15: z.number(),
            Tarifa20: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27: z.number(),
            TarifaGeneral240: z.number(),
            Otras: z.number()
          })
        }),
        DepreciacionPropiedadesInversion: z.object({
          Costo: z.object({
            ValorContable: z.number(),
            EfectoConversion: z.number(),
            MenorValorFiscal: z.number(),
            MayorValorFiscal: z.number(),
            ValorFiscal: z.number(),
            Tarifa9: z.number(),
            Tarifa15: z.number(),
            Tarifa20: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27: z.number(),
            TarifaGeneral240: z.number(),
            Otras: z.number()
          }),
          AjusteAcumunlado: z.object({
            ValorContable: z.number(),
            EfectoConversion: z.number(),
            MenorValorFiscal: z.number(),
            MayorValorFiscal: z.number(),
            ValorFiscal: z.number(),
            Tarifa9: z.number(),
            Tarifa15: z.number(),
            Tarifa20: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27: z.number(),
            TarifaGeneral240: z.number(),
            Otras: z.number()
          })
        }),
        DepreciacionArrendamientosOperativos: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number(),
          Tarifa9: z.number(),
          Tarifa15: z.number(),
          Tarifa20: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27: z.number(),
          TarifaGeneral240: z.number(),
          Otras: z.number()
        }),
        OtrasDepreciaciones: z.object({
          Costo: z.object({
            ValorContable: z.number(),
            EfectoConversion: z.number(),
            MenorValorFiscal: z.number(),
            MayorValorFiscal: z.number(),
            ValorFiscal: z.number(),
            Tarifa9: z.number(),
            Tarifa15: z.number(),
            Tarifa20: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27: z.number(),
            TarifaGeneral240: z.number(),
            Otras: z.number()
          }),
          AjusteAcumunlado: z.object({
            ValorContable: z.number(),
            EfectoConversion: z.number(),
            MenorValorFiscal: z.number(),
            MayorValorFiscal: z.number(),
            ValorFiscal: z.number(),
            Tarifa9: z.number(),
            Tarifa15: z.number(),
            Tarifa20: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27: z.number(),
            TarifaGeneral240: z.number(),
            Otras: z.number()
          })
        }),
        AmortizacionActivosIntangibles: z.object({
          Costo: z.object({
            ValorContable: z.number(),
            EfectoConversion: z.number(),
            MenorValorFiscal: z.number(),
            MayorValorFiscal: z.number(),
            ValorFiscal: z.number(),
            Tarifa9: z.number(),
            Tarifa15: z.number(),
            Tarifa20: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27: z.number(),
            TarifaGeneral240: z.number(),
            Otras: z.number()
          }),
          AjusteAcumunlado: z.object({
            ValorContable: z.number(),
            EfectoConversion: z.number(),
            MenorValorFiscal: z.number(),
            MayorValorFiscal: z.number(),
            ValorFiscal: z.number(),
            Tarifa9: z.number(),
            Tarifa15: z.number(),
            Tarifa20: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27: z.number(),
            TarifaGeneral240: z.number(),
            Otras: z.number()
          })
        }),
        OtrasAmortizaciones: z.object({
          Costo: z.object({
            ValorContable: z.number(),
            EfectoConversion: z.number(),
            MenorValorFiscal: z.number(),
            MayorValorFiscal: z.number(),
            ValorFiscal: z.number(),
            Tarifa9: z.number(),
            Tarifa15: z.number(),
            Tarifa20: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27: z.number(),
            TarifaGeneral240: z.number(),
            Otras: z.number()
          }),
          AjusteAcumunlado: z.object({
            ValorContable: z.number(),
            EfectoConversion: z.number(),
            MenorValorFiscal: z.number(),
            MayorValorFiscal: z.number(),
            ValorFiscal: z.number(),
            Tarifa9: z.number(),
            Tarifa15: z.number(),
            Tarifa20: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27: z.number(),
            TarifaGeneral240: z.number(),
            Otras: z.number()
          })
        }),
        DeterioroValorActivos: z.object({
          Inventarios: z.object({
            ValorContable: z.number(),
            EfectoConversion: z.number(),
            MenorValorFiscal: z.number(),
            MayorValorFiscal: z.number(),
            ValorFiscal: z.number(),
            Tarifa9: z.number(),
            Tarifa15: z.number(),
            Tarifa20: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27: z.number(),
            TarifaGeneral240: z.number(),
            Otras: z.number()
          }),
          PropiedadesPlantaEquipo: z.object({
            ValorContable: z.number(),
            EfectoConversion: z.number(),
            MenorValorFiscal: z.number(),
            MayorValorFiscal: z.number(),
            ValorFiscal: z.number(),
            Tarifa9: z.number(),
            Tarifa15: z.number(),
            Tarifa20: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27: z.number(),
            TarifaGeneral240: z.number(),
            Otras: z.number()
          }),
          ActivosIntangibles: z.object({
            ValorContable: z.number(),
            EfectoConversion: z.number(),
            MenorValorFiscal: z.number(),
            MayorValorFiscal: z.number(),
            ValorFiscal: z.number(),
            Tarifa9: z.number(),
            Tarifa15: z.number(),
            Tarifa20: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27: z.number(),
            TarifaGeneral240: z.number(),
            Otras: z.number()
          }),
          ActivosExploracionEvaluacionRecursosMinerales: z.object({
            ValorContable: z.number(),
            EfectoConversion: z.number(),
            MenorValorFiscal: z.number(),
            MayorValorFiscal: z.number(),
            ValorFiscal: z.number(),
            Tarifa9: z.number(),
            Tarifa15: z.number(),
            Tarifa20: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27: z.number(),
            TarifaGeneral240: z.number(),
            Otras: z.number()
          }),
          PropiedadesInversionMedidasCosto: z.object({
            ValorContable: z.number(),
            EfectoConversion: z.number(),
            MenorValorFiscal: z.number(),
            MayorValorFiscal: z.number(),
            ValorFiscal: z.number(),
            Tarifa9: z.number(),
            Tarifa15: z.number(),
            Tarifa20: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27: z.number(),
            TarifaGeneral240: z.number(),
            Otras: z.number()
          }),
          ActivosNoCorrientesMantenidosVentaEntregarPropietarios: z.object({
            ValorContable: z.number(),
            EfectoConversion: z.number(),
            MenorValorFiscal: z.number(),
            MayorValorFiscal: z.number(),
            ValorFiscal: z.number(),
            Tarifa9: z.number(),
            Tarifa15: z.number(),
            Tarifa20: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27: z.number(),
            TarifaGeneral240: z.number(),
            Otras: z.number()
          }),
          BienesArteCultura: z.object({
            ValorContable: z.number(),
            EfectoConversion: z.number(),
            MenorValorFiscal: z.number(),
            MayorValorFiscal: z.number(),
            ValorFiscal: z.number(),
            Tarifa9: z.number(),
            Tarifa15: z.number(),
            Tarifa20: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27: z.number(),
            TarifaGeneral240: z.number(),
            Otras: z.number()
          }),
          ActivosBiologicosMedidosCosto: z.object({
            ValorContable: z.number(),
            EfectoConversion: z.number(),
            MenorValorFiscal: z.number(),
            MayorValorFiscal: z.number(),
            ValorFiscal: z.number(),
            Tarifa9: z.number(),
            Tarifa15: z.number(),
            Tarifa20: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27: z.number(),
            TarifaGeneral240: z.number(),
            Otras: z.number()
          }),
          ActivosFinancieros: z.object({
            ValorContable: z.number(),
            EfectoConversion: z.number(),
            MenorValorFiscal: z.number(),
            MayorValorFiscal: z.number(),
            ValorFiscal: z.number(),
            Tarifa9: z.number(),
            Tarifa15: z.number(),
            Tarifa20: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27: z.number(),
            TarifaGeneral240: z.number(),
            Otras: z.number()
          }),
          CarteraCreditoOperacionesLeasing: z.object({
            ValorContable: z.number(),
            EfectoConversion: z.number(),
            MenorValorFiscal: z.number(),
            MayorValorFiscal: z.number(),
            ValorFiscal: z.number(),
            Tarifa9: z.number(),
            Tarifa15: z.number(),
            Tarifa20: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27: z.number(),
            TarifaGeneral240: z.number(),
            Otras: z.number()
          }),
          OtrasInversionesMedidasCostoMetodoParticipacion: z.object({
            ValorContable: z.number(),
            EfectoConversion: z.number(),
            MenorValorFiscal: z.number(),
            MayorValorFiscal: z.number(),
            ValorFiscal: z.number(),
            Tarifa9: z.number(),
            Tarifa15: z.number(),
            Tarifa20: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27: z.number(),
            TarifaGeneral240: z.number(),
            Otras: z.number()
          }),
          DerechosUsoArrendamientosOperativos: z.object({
            ValorContable: z.number(),
            EfectoConversion: z.number(),
            MenorValorFiscal: z.number(),
            MayorValorFiscal: z.number(),
            ValorFiscal: z.number(),
            Tarifa9: z.number(),
            Tarifa15: z.number(),
            Tarifa20: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27: z.number(),
            TarifaGeneral240: z.number(),
            Otras: z.number()
          }),
          OtrosDeterioros: z.object({
            ValorContable: z.number(),
            EfectoConversion: z.number(),
            MenorValorFiscal: z.number(),
            MayorValorFiscal: z.number(),
            ValorFiscal: z.number(),
            Tarifa9: z.number(),
            Tarifa15: z.number(),
            Tarifa20: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27: z.number(),
            TarifaGeneral240: z.number(),
            Otras: z.number()
          })
        }),
        Total: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number(),
          Tarifa9: z.number(),
          Tarifa15: z.number(),
          Tarifa20: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27: z.number(),
          TarifaGeneral240: z.number(),
          Otras: z.number()
        })
      }),
      Total: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      })
    }),
    GastosDistribucionVentas: z.object({
      ManoObra: z.object({
        CortoPlazo: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number(),
          Tarifa9: z.number(),
          Tarifa15: z.number(),
          Tarifa20: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27: z.number(),
          TarifaGeneral240: z.number(),
          Otras: z.number()
        }),
        LargoPlazo: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number(),
          Tarifa9: z.number(),
          Tarifa15: z.number(),
          Tarifa20: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27: z.number(),
          TarifaGeneral240: z.number(),
          Otras: z.number()
        }),
        PostTerminacionVinculoLaboral: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number(),
          Tarifa9: z.number(),
          Tarifa15: z.number(),
          Tarifa20: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27: z.number(),
          TarifaGeneral240: z.number(),
          Otras: z.number()
        }),
        PostEmpleo: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number(),
          Tarifa9: z.number(),
          Tarifa15: z.number(),
          Tarifa20: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27: z.number(),
          TarifaGeneral240: z.number(),
          Otras: z.number()
        }),
        Total: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number(),
          Tarifa9: z.number(),
          Tarifa15: z.number(),
          Tarifa20: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27: z.number(),
          TarifaGeneral240: z.number(),
          Otras: z.number()
        })
      }),
      OtrosGastosDistribucion: z.object({
        ImpuestosDistintosAlImpuestosDeRentaYComplementarios: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number(),
          Tarifa9: z.number(),
          Tarifa15: z.number(),
          Tarifa20: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27: z.number(),
          TarifaGeneral240: z.number(),
          Otras: z.number()
        }),
        ArrendamientosOperativos: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number(),
          Tarifa9: z.number(),
          Tarifa15: z.number(),
          Tarifa20: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27: z.number(),
          TarifaGeneral240: z.number(),
          Otras: z.number()
        }),
        ContribucionesYAfiliaciones: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number(),
          Tarifa9: z.number(),
          Tarifa15: z.number(),
          Tarifa20: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27: z.number(),
          TarifaGeneral240: z.number(),
          Otras: z.number()
        }),
        Honorarios: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number(),
          Tarifa9: z.number(),
          Tarifa15: z.number(),
          Tarifa20: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27: z.number(),
          TarifaGeneral240: z.number(),
          Otras: z.number()
        }),
        Seguros: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number(),
          Tarifa9: z.number(),
          Tarifa15: z.number(),
          Tarifa20: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27: z.number(),
          TarifaGeneral240: z.number(),
          Otras: z.number()
        }),
        ServiciosAdministrativos: z.object({
          VinculadosEconomicos: z.object({
            ValorContable: z.number(),
            EfectoConversion: z.number(),
            MenorValorFiscal: z.number(),
            MayorValorFiscal: z.number(),
            ValorFiscal: z.number(),
            Tarifa9: z.number(),
            Tarifa15: z.number(),
            Tarifa20: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27: z.number(),
            TarifaGeneral240: z.number(),
            Otras: z.number()
          }),
          JurisdiccionesNoCooperantesBajaNulaImposicion: z.object({
            ValorContable: z.number(),
            EfectoConversion: z.number(),
            MenorValorFiscal: z.number(),
            MayorValorFiscal: z.number(),
            ValorFiscal: z.number(),
            Tarifa9: z.number(),
            Tarifa15: z.number(),
            Tarifa20: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27: z.number(),
            TarifaGeneral240: z.number(),
            Otras: z.number()
          }),
          NoVinculados: z.object({
            ValorContable: z.number(),
            EfectoConversion: z.number(),
            MenorValorFiscal: z.number(),
            MayorValorFiscal: z.number(),
            ValorFiscal: z.number(),
            Tarifa9: z.number(),
            Tarifa15: z.number(),
            Tarifa20: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27: z.number(),
            TarifaGeneral240: z.number(),
            Otras: z.number()
          })
        }),
        Regalias: z.object({
          VinculadosEconomicos: z.object({
            ValorContable: z.number(),
            EfectoConversion: z.number(),
            MenorValorFiscal: z.number(),
            MayorValorFiscal: z.number(),
            ValorFiscal: z.number(),
            Tarifa9: z.number(),
            Tarifa15: z.number(),
            Tarifa20: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27: z.number(),
            TarifaGeneral240: z.number(),
            Otras: z.number()
          }),
          JurisdiccionesNoCooperantesBajaNulaImposicion: z.object({
            ValorContable: z.number(),
            EfectoConversion: z.number(),
            MenorValorFiscal: z.number(),
            MayorValorFiscal: z.number(),
            ValorFiscal: z.number(),
            Tarifa9: z.number(),
            Tarifa15: z.number(),
            Tarifa20: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27: z.number(),
            TarifaGeneral240: z.number(),
            Otras: z.number()
          }),
          NoVinculados: z.object({
            ValorContable: z.number(),
            EfectoConversion: z.number(),
            MenorValorFiscal: z.number(),
            MayorValorFiscal: z.number(),
            ValorFiscal: z.number(),
            Tarifa9: z.number(),
            Tarifa15: z.number(),
            Tarifa20: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27: z.number(),
            TarifaGeneral240: z.number(),
            Otras: z.number()
          })
        }),
        AsistenciaTecnica: z.object({
          VinculadosEconomicos: z.object({
            ValorContable: z.number(),
            EfectoConversion: z.number(),
            MenorValorFiscal: z.number(),
            MayorValorFiscal: z.number(),
            ValorFiscal: z.number(),
            Tarifa9: z.number(),
            Tarifa15: z.number(),
            Tarifa20: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27: z.number(),
            TarifaGeneral240: z.number(),
            Otras: z.number()
          }),
          JurisdiccionesNoCooperantesBajaNulaImposicion: z.object({
            ValorContable: z.number(),
            EfectoConversion: z.number(),
            MenorValorFiscal: z.number(),
            MayorValorFiscal: z.number(),
            ValorFiscal: z.number(),
            Tarifa9: z.number(),
            Tarifa15: z.number(),
            Tarifa20: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27: z.number(),
            TarifaGeneral240: z.number(),
            Otras: z.number()
          }),
          NoVinculados: z.object({
            ValorContable: z.number(),
            EfectoConversion: z.number(),
            MenorValorFiscal: z.number(),
            MayorValorFiscal: z.number(),
            ValorFiscal: z.number(),
            Tarifa9: z.number(),
            Tarifa15: z.number(),
            Tarifa20: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27: z.number(),
            TarifaGeneral240: z.number(),
            Otras: z.number()
          })
        }),
        OtrosServicios: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number(),
          Tarifa9: z.number(),
          Tarifa15: z.number(),
          Tarifa20: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27: z.number(),
          TarifaGeneral240: z.number(),
          Otras: z.number()
        }),
        InvestigacionYDesarrollo: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number(),
          Tarifa9: z.number(),
          Tarifa15: z.number(),
          Tarifa20: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27: z.number(),
          TarifaGeneral240: z.number(),
          Otras: z.number()
        }),
        GastosLegales: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number(),
          Tarifa9: z.number(),
          Tarifa15: z.number(),
          Tarifa20: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27: z.number(),
          TarifaGeneral240: z.number(),
          Otras: z.number()
        }),
        ReparacionMantenimientoAdecuacionInstalaciones: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number(),
          Tarifa9: z.number(),
          Tarifa15: z.number(),
          Tarifa20: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27: z.number(),
          TarifaGeneral240: z.number(),
          Otras: z.number()
        }),
        Transporte: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number(),
          Tarifa9: z.number(),
          Tarifa15: z.number(),
          Tarifa20: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27: z.number(),
          TarifaGeneral240: z.number(),
          Otras: z.number()
        }),
        ConstitucionReservas: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number(),
          Tarifa9: z.number(),
          Tarifa15: z.number(),
          Tarifa20: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27: z.number(),
          TarifaGeneral240: z.number(),
          Otras: z.number()
        }),
        LiquidacionSiniestros: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number(),
          Tarifa9: z.number(),
          Tarifa15: z.number(),
          Tarifa20: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27: z.number(),
          TarifaGeneral240: z.number(),
          Otras: z.number()
        }),
        PrimasReaseguros: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number(),
          Tarifa9: z.number(),
          Tarifa15: z.number(),
          Tarifa20: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27: z.number(),
          TarifaGeneral240: z.number(),
          Otras: z.number()
        }),
        OtrosGastos: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number(),
          Tarifa9: z.number(),
          Tarifa15: z.number(),
          Tarifa20: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27: z.number(),
          TarifaGeneral240: z.number(),
          Otras: z.number()
        }),
        Total: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number(),
          Tarifa9: z.number(),
          Tarifa15: z.number(),
          Tarifa20: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27: z.number(),
          TarifaGeneral240: z.number(),
          Otras: z.number()
        })
      }),
      DepreciacionesAmortizacionesDeterioros: z.object({
        DepreciacionPropiedadesPlantaEquipo: z.object({
          Costo: z.object({
            ValorContable: z.number(),
            EfectoConversion: z.number(),
            MenorValorFiscal: z.number(),
            MayorValorFiscal: z.number(),
            ValorFiscal: z.number(),
            Tarifa9: z.number(),
            Tarifa15: z.number(),
            Tarifa20: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27: z.number(),
            TarifaGeneral240: z.number(),
            Otras: z.number()
          }),
          AjusteAcumunlado: z.object({
            ValorContable: z.number(),
            EfectoConversion: z.number(),
            MenorValorFiscal: z.number(),
            MayorValorFiscal: z.number(),
            ValorFiscal: z.number(),
            Tarifa9: z.number(),
            Tarifa15: z.number(),
            Tarifa20: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27: z.number(),
            TarifaGeneral240: z.number(),
            Otras: z.number()
          })
        }),
        DepreciacionPropiedadesInversion: z.object({
          Costo: z.object({
            ValorContable: z.number(),
            EfectoConversion: z.number(),
            MenorValorFiscal: z.number(),
            MayorValorFiscal: z.number(),
            ValorFiscal: z.number(),
            Tarifa9: z.number(),
            Tarifa15: z.number(),
            Tarifa20: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27: z.number(),
            TarifaGeneral240: z.number(),
            Otras: z.number()
          }),
          AjusteAcumunlado: z.object({
            ValorContable: z.number(),
            EfectoConversion: z.number(),
            MenorValorFiscal: z.number(),
            MayorValorFiscal: z.number(),
            ValorFiscal: z.number(),
            Tarifa9: z.number(),
            Tarifa15: z.number(),
            Tarifa20: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27: z.number(),
            TarifaGeneral240: z.number(),
            Otras: z.number()
          })
        }),
        DepreciacionArrendamientosOperativos: z.object({}),
        OtrasDepreciaciones: z.object({
          Costo: z.object({
            ValorContable: z.number(),
            EfectoConversion: z.number(),
            MenorValorFiscal: z.number(),
            MayorValorFiscal: z.number(),
            ValorFiscal: z.number(),
            Tarifa9: z.number(),
            Tarifa15: z.number(),
            Tarifa20: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27: z.number(),
            TarifaGeneral240: z.number(),
            Otras: z.number()
          }),
          AjusteAcumunlado: z.object({
            ValorContable: z.number(),
            EfectoConversion: z.number(),
            MenorValorFiscal: z.number(),
            MayorValorFiscal: z.number(),
            ValorFiscal: z.number(),
            Tarifa9: z.number(),
            Tarifa15: z.number(),
            Tarifa20: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27: z.number(),
            TarifaGeneral240: z.number(),
            Otras: z.number()
          })
        }),
        AmortizacionActivosIntangibles: z.object({
          Costo: z.object({
            ValorContable: z.number(),
            EfectoConversion: z.number(),
            MenorValorFiscal: z.number(),
            MayorValorFiscal: z.number(),
            ValorFiscal: z.number(),
            Tarifa9: z.number(),
            Tarifa15: z.number(),
            Tarifa20: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27: z.number(),
            TarifaGeneral240: z.number(),
            Otras: z.number()
          }),
          AjusteAcumunlado: z.object({
            ValorContable: z.number(),
            EfectoConversion: z.number(),
            MenorValorFiscal: z.number(),
            MayorValorFiscal: z.number(),
            ValorFiscal: z.number(),
            Tarifa9: z.number(),
            Tarifa15: z.number(),
            Tarifa20: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27: z.number(),
            TarifaGeneral240: z.number(),
            Otras: z.number()
          })
        }),
        OtrasAmortizaciones: z.object({
          Costo: z.object({
            ValorContable: z.number(),
            EfectoConversion: z.number(),
            MenorValorFiscal: z.number(),
            MayorValorFiscal: z.number(),
            ValorFiscal: z.number(),
            Tarifa9: z.number(),
            Tarifa15: z.number(),
            Tarifa20: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27: z.number(),
            TarifaGeneral240: z.number(),
            Otras: z.number()
          }),
          AjusteAcumunlado: z.object({
            ValorContable: z.number(),
            EfectoConversion: z.number(),
            MenorValorFiscal: z.number(),
            MayorValorFiscal: z.number(),
            ValorFiscal: z.number(),
            Tarifa9: z.number(),
            Tarifa15: z.number(),
            Tarifa20: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27: z.number(),
            TarifaGeneral240: z.number(),
            Otras: z.number()
          })
        }),
        DeterioroValorActivos: z.object({
          Inventarios: z.object({
            ValorContable: z.number(),
            EfectoConversion: z.number(),
            MenorValorFiscal: z.number(),
            MayorValorFiscal: z.number(),
            ValorFiscal: z.number(),
            Tarifa9: z.number(),
            Tarifa15: z.number(),
            Tarifa20: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27: z.number(),
            TarifaGeneral240: z.number(),
            Otras: z.number()
          }),
          PropiedadesPlantaEquipo: z.object({
            ValorContable: z.number(),
            EfectoConversion: z.number(),
            MenorValorFiscal: z.number(),
            MayorValorFiscal: z.number(),
            ValorFiscal: z.number(),
            Tarifa9: z.number(),
            Tarifa15: z.number(),
            Tarifa20: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27: z.number(),
            TarifaGeneral240: z.number(),
            Otras: z.number()
          }),
          ActivosIntangibles: z.object({
            ValorContable: z.number(),
            EfectoConversion: z.number(),
            MenorValorFiscal: z.number(),
            MayorValorFiscal: z.number(),
            ValorFiscal: z.number(),
            Tarifa9: z.number(),
            Tarifa15: z.number(),
            Tarifa20: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27: z.number(),
            TarifaGeneral240: z.number(),
            Otras: z.number()
          }),
          ActivosExploracionEvaluacionRecursosMinerales: z.object({
            ValorContable: z.number(),
            EfectoConversion: z.number(),
            MenorValorFiscal: z.number(),
            MayorValorFiscal: z.number(),
            ValorFiscal: z.number(),
            Tarifa9: z.number(),
            Tarifa15: z.number(),
            Tarifa20: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27: z.number(),
            TarifaGeneral240: z.number(),
            Otras: z.number()
          }),
          PropiedadesInversionMedidasCosto: z.object({
            ValorContable: z.number(),
            EfectoConversion: z.number(),
            MenorValorFiscal: z.number(),
            MayorValorFiscal: z.number(),
            ValorFiscal: z.number(),
            Tarifa9: z.number(),
            Tarifa15: z.number(),
            Tarifa20: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27: z.number(),
            TarifaGeneral240: z.number(),
            Otras: z.number()
          }),
          ActivosNoCorrientesMantenidosVentaEntregarPropietarios: z.object({
            ValorContable: z.number(),
            EfectoConversion: z.number(),
            MenorValorFiscal: z.number(),
            MayorValorFiscal: z.number(),
            ValorFiscal: z.number(),
            Tarifa9: z.number(),
            Tarifa15: z.number(),
            Tarifa20: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27: z.number(),
            TarifaGeneral240: z.number(),
            Otras: z.number()
          }),
          BienesArteCultura: z.object({
            ValorContable: z.number(),
            EfectoConversion: z.number(),
            MenorValorFiscal: z.number(),
            MayorValorFiscal: z.number(),
            ValorFiscal: z.number(),
            Tarifa9: z.number(),
            Tarifa15: z.number(),
            Tarifa20: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27: z.number(),
            TarifaGeneral240: z.number(),
            Otras: z.number()
          }),
          ActivosBiologicosMedidosCosto: z.object({
            ValorContable: z.number(),
            EfectoConversion: z.number(),
            MenorValorFiscal: z.number(),
            MayorValorFiscal: z.number(),
            ValorFiscal: z.number(),
            Tarifa9: z.number(),
            Tarifa15: z.number(),
            Tarifa20: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27: z.number(),
            TarifaGeneral240: z.number(),
            Otras: z.number()
          }),
          ActivosFinancieros: z.object({
            ValorContable: z.number(),
            EfectoConversion: z.number(),
            MenorValorFiscal: z.number(),
            MayorValorFiscal: z.number(),
            ValorFiscal: z.number(),
            Tarifa9: z.number(),
            Tarifa15: z.number(),
            Tarifa20: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27: z.number(),
            TarifaGeneral240: z.number(),
            Otras: z.number()
          }),
          CarteraCreditoOperacionesLeasing: z.object({
            ValorContable: z.number(),
            EfectoConversion: z.number(),
            MenorValorFiscal: z.number(),
            MayorValorFiscal: z.number(),
            ValorFiscal: z.number(),
            Tarifa9: z.number(),
            Tarifa15: z.number(),
            Tarifa20: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27: z.number(),
            TarifaGeneral240: z.number(),
            Otras: z.number()
          }),
          OtrasInversionesMedidasCostoMetodoParticipacion: z.object({
            ValorContable: z.number(),
            EfectoConversion: z.number(),
            MenorValorFiscal: z.number(),
            MayorValorFiscal: z.number(),
            ValorFiscal: z.number(),
            Tarifa9: z.number(),
            Tarifa15: z.number(),
            Tarifa20: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27: z.number(),
            TarifaGeneral240: z.number(),
            Otras: z.number()
          }),
          DerechosUsoArrendamientosOperativos: z.object({
            ValorContable: z.number(),
            EfectoConversion: z.number(),
            MenorValorFiscal: z.number(),
            MayorValorFiscal: z.number(),
            ValorFiscal: z.number(),
            Tarifa9: z.number(),
            Tarifa15: z.number(),
            Tarifa20: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27: z.number(),
            TarifaGeneral240: z.number(),
            Otras: z.number()
          }),
          OtrosDeterioros: z.object({
            ValorContable: z.number(),
            EfectoConversion: z.number(),
            MenorValorFiscal: z.number(),
            MayorValorFiscal: z.number(),
            ValorFiscal: z.number(),
            Tarifa9: z.number(),
            Tarifa15: z.number(),
            Tarifa20: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27: z.number(),
            TarifaGeneral240: z.number(),
            Otras: z.number()
          })
        }),
        Total: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number(),
          Tarifa9: z.number(),
          Tarifa15: z.number(),
          Tarifa20: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27: z.number(),
          TarifaGeneral240: z.number(),
          Otras: z.number()
        })
      }),
      Total: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      })
    }),
    GastosFinancieros: z.object({
      Arrendamiento: z.object({
        Financiero: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number(),
          Tarifa9: z.number(),
          Tarifa15: z.number(),
          Tarifa20: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27: z.number(),
          TarifaGeneral240: z.number(),
          Otras: z.number()
        }),
        Operativo: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          MenorValorFiscal: z.number(),
          MayorValorFiscal: z.number(),
          ValorFiscal: z.number(),
          Tarifa9: z.number(),
          Tarifa15: z.number(),
          Tarifa20: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27: z.number(),
          TarifaGeneral240: z.number(),
          Otras: z.number()
        })
      }),
      InteresesDevengadosSectorFinanciero: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      InteresesDevengadosPrestamosTerceros: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      IntrumentosFinancierosMedidos: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      CostosTransaccion: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      DiferenciaCambio: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      InteresesImplicitos: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      ActualizacionProvisiones: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      AccionesPreferenciales: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      OtrosGastosFinancieros: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      Total: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      })
    }),
    PredidasPorInversionesSubsidiariasAsociadasNegocios: z.object({
      PerdidaMetodoParticipacion: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number()
      }),
      PerdidaMetodoValorRazonable: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number()
      }),
      Total: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number()
      })
    }),
    PerdidasPorMedicionesValorRazonable: z.object({
      ActivosBiologicos: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      PropiedadesInversion: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      InstrumentosFinancieros: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      InstrumentosDerivados: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      Otros: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      Total: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      })
    }),
    PerdidaVentaEnajenacionActivosFijos: z.object({
      PropiedadesPlanta: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      PropiedadesInversion: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      ActivosNoCorrientesMantenidosVentaEntregarPropietarios: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      ValoracionVentaInversionesFondoLiquidez: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      DisposicionInstrumentosFinancieros: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      ActivosIntangibles: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      DescuentoOperacionesFactoring: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      InversionesAccionesOtrasParticipaciones: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      Otros: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      Total: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      })
    }),
    GastosPorProviciones: z.object({
      Garantias: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      ContratosOnerosos: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      Litigios: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      ReembolsosClientes: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      ReestructuracionesNegocios: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      PasivosContingentesCombinacionNegocios: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      Otros: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      Total: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      })
    }),
    OtrosGastos: z.object({
      TransferenciasSubvencionesAyudasGubernamentales: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      DonacionesAportacionesSimilares: z.object({
        ValorContable: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      ContribucionesEducacionEmpleados: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      Otros: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      DeduccionesFiscalesNoReconocidas: z.object({}),
      Total: z.object({})
    }),
    PerdidasNetasOperacionesDiscontinuas: z.object({
      ValorContable: z.number(),
      EfectoConversion: z.number(),
      MenorValorFiscal: z.number()
    }),
    MenorGastoDeduccionPrecioTransferencia: z.object({
      MayorValorFiscal: z.number(),
      ValorFiscal: z.number(),
      Tarifa9: z.number(),
      Tarifa15: z.number(),
      Tarifa20: z.number(),
      MegaInversiones: z.number(),
      MegaInversiones27: z.number(),
      TarifaGeneral240: z.number(),
      Otras: z.number()
    }),
    Total: z.object({
      ValorContable: z.number(),
      EfectoConversion: z.number(),
      MenorValorFiscal: z.number(),
      MayorValorFiscal: z.number(),
      ValorFiscal: z.number(),
      Tarifa9: z.number(),
      Tarifa15: z.number(),
      Tarifa20: z.number(),
      MegaInversiones: z.number(),
      MegaInversiones27: z.number(),
      TarifaGeneral240: z.number(),
      Otras: z.number()
    })
  }),
  GanaciaPerdidaAntesImpuestos: z.object({
    ValorContable: z.number(),
    EfectoConversion: z.number(),
    MenorValorFiscal: z.number(),
    MayorValorFiscal: z.number(),
    ValorFiscal: z.number(),
    Tarifa9: z.number(),
    Tarifa15: z.number(),
    Tarifa20: z.number(),
    MegaInversiones: z.number(),
    MegaInversiones27: z.number(),
    TarifaGeneral240: z.number(),
    Otras: z.number()
  }),
  InformativoClasificacionDiferencias: z.object({
    DiferenciasPermanentesDisminuyenRentaLiquida: z.object({
      IngresosNoConstitutivosRenta: z.object({
        ValorFiscalTieneDerecho: z.number(),
        ValorFiscalSolicitado: z.number()
      }),
      UtilidadVentaEnajenacionActivosMas2Anos: z.object({
        ValorFiscalTieneDerecho: z.number(),
        ValorFiscalSolicitado: z.number()
      }),
      GananciasMetodoParticipacion: z.object({
        ValorFiscalTieneDerecho: z.number(),
        ValorFiscalSolicitado: z.number()
      }),
      DeduccionEspecialeesInversionesAdquisicion: z.object({
        ValorFiscalTieneDerecho: z.number(),
        ValorFiscalSolicitado: z.number()
      }),
      InversionesInvestigacion: z.object({
        ValorFiscalTieneDerecho: z.number(),
        ValorFiscalSolicitado: z.number()
      }),
      MayorValorConstoActivosFijos: z.object({
        ValorFiscalTieneDerecho: z.number(),
        ValorFiscalSolicitado: z.number()
      }),
      RecuperacionDeducciones: z.object({
        ValorFiscalTieneDerecho: z.number(),
        ValorFiscalSolicitado: z.number()
      }),
      SalariosConDeduccionesEspeciales: z.object({
        ValorFiscalTieneDerecho: z.number(),
        ValorFiscalSolicitado: z.number()
      }),
      ReintegroProvisionesDiferencias: z.object({
        ValorFiscalTieneDerecho: z.number(),
        ValorFiscalSolicitado: z.number()
      }),
      AjusteAtribucionRentas: z.object({
        ValorFiscalTieneDerecho: z.number(),
        ValorFiscalSolicitado: z.number()
      }),
      Otros: z.object({
        ValorFiscalTieneDerecho: z.number(),
        ValorFiscalSolicitado: z.number()
      }),
      Total: z.object({
        ValorFiscalTieneDerecho: z.number(),
        ValorFiscalSolicitado: z.number()
      })
    }),
    DiferenciasPermanentesAumentanRentaLiquida: z.object({
      PerdidasGastosNoDeducibles: z.object({
        DeduccionesImpuestos: z.object({
          ValorFiscalTieneDerecho: z.number(),
          ValorFiscalSolicitado: z.number()
        }),
        GastosSinSoporte: z.object({
          ValorFiscalTieneDerecho: z.number(),
          ValorFiscalSolicitado: z.number()
        }),
        PagosExteriorSinRetencionFuente: z.object({
          ValorFiscalTieneDerecho: z.number(),
          ValorFiscalSolicitado: z.number()
        }),
        PagosExteriorExceden15PorcientoRentaLiquida: z.object({
          ValorFiscalTieneDerecho: z.number(),
          ValorFiscalSolicitado: z.number()
        }),
        DonacionesNoCumplenRequisitosLegales: z.object({
          ValorFiscalTieneDerecho: z.number(),
          ValorFiscalSolicitado: z.number()
        }),
        SalariosSinPagoAportesParafiscales: z.object({
          ValorFiscalTieneDerecho: z.number(),
          ValorFiscalSolicitado: z.number()
        }),
        GastosVigenciasAnteriores: z.object({
          ValorFiscalTieneDerecho: z.number(),
          ValorFiscalSolicitado: z.number()
        }),
        GastoFinancieroNoDeducibleSubcapitalizacion: z.object({
          ValorFiscalTieneDerecho: z.number(),
          ValorFiscalSolicitado: z.number()
        }),
        OtrosGastosFinancierosNoDeducibles: z.object({
          ValorFiscalTieneDerecho: z.number(),
          ValorFiscalSolicitado: z.number()
        }),
        DeterioroInversionesPerdidaEnajenacionAcciones: z.object({
          ValorFiscalTieneDerecho: z.number(),
          ValorFiscalSolicitado: z.number()
        }),
        PerdidaEnajenacionAccionesVentaInmuebles: z.object({
          ValorFiscalTieneDerecho: z.number(),
          ValorFiscalSolicitado: z.number()
        }),
        PerdidasNoDeduciblesFaltantesInventarios: z.object({
          ValorFiscalTieneDerecho: z.number(),
          ValorFiscalSolicitado: z.number()
        }),
        PerdidasMetodoParticipacion: z.object({
          ValorFiscalTieneDerecho: z.number(),
          ValorFiscalSolicitado: z.number()
        }),
        PagosRegaliasIntangiblesVinculadosExteriorZonasFrancas: z.object({
          ValorFiscalTieneDerecho: z.number(),
          ValorFiscalSolicitado: z.number()
        }),
        LimitacionCostosComprasProveedoresFicticiosInsolventes: z.object({
          ValorFiscalTieneDerecho: z.number(),
          ValorFiscalSolicitado: z.number()
        }),
        ImpuestosMultasSancionesInteresesMoratoriosCondenasNoDeducibles: z.object(
          {
            ValorFiscalTieneDerecho: z.number(),
            ValorFiscalSolicitado: z.number()
          }
        ),
        GastosNoRelacionCausalidadNecesidadActividadProductoraRenta: z.object({
          ValorFiscalTieneDerecho: z.number(),
          ValorFiscalSolicitado: z.number()
        }),
        MontoExcedeLimiteAtencionesClientesProveedoresEmpleados: z.object({
          ValorFiscalTieneDerecho: z.number(),
          ValorFiscalSolicitado: z.number()
        }),
        ImportacionTecnologiaPatentesMarcas: z.object({
          ValorFiscalTieneDerecho: z.number(),
          ValorFiscalSolicitado: z.number()
        }),
        GastosNoDeduciblesContratosArrendamientoPermanente: z.object({
          ValorFiscalTieneDerecho: z.number(),
          ValorFiscalSolicitado: z.number()
        }),
        GastosNoDeduciblesOperacionesIVAConNoInscritosRegimenComun: z.object({
          ValorFiscalTieneDerecho: z.number(),
          ValorFiscalSolicitado: z.number()
        }),
        GastoNoDeducibleDonaciones: z.object({
          ValorFiscalTieneDerecho: z.number(),
          ValorFiscalSolicitado: z.number()
        }),
        GastosNoDeduciblesAtribuiblesIngresosExentosNoConstitutivosRenta: z.object(
          {
            ValorFiscalTieneDerecho: z.number(),
            ValorFiscalSolicitado: z.number()
          }
        ),
        OtrosGastosNoDeduciblesPermanente: z.object({
          ValorFiscalTieneDerecho: z.number(),
          ValorFiscalSolicitado: z.number()
        })
      }),
      OtrosAjustes: z.object({
        DividendosDeclaradosContribuyentePeriodoFiscal: z.object({
          ValorFiscalTieneDerecho: z.number(),
          ValorFiscalSolicitado: z.number()
        }),
        RentasLiquidasVentasInversiones: z.object({
          ValorFiscalTieneDerecho: z.number(),
          ValorFiscalSolicitado: z.number()
        }),
        MayorIngresoAjustesPreciosTransferencia: z.object({
          ValorFiscalTieneDerecho: z.number(),
          ValorFiscalSolicitado: z.number()
        }),
        MenorCostoDeduccionAjustesPreciosTransferencia: z.object({
          ValorFiscalTieneDerecho: z.number(),
          ValorFiscalSolicitado: z.number()
        }),
        RentasLiquidasRecuperacionDeduccionesPermanente: z.object({
          ValorFiscalTieneDerecho: z.number(),
          ValorFiscalSolicitado: z.number()
        }),
        AjusteAtribucionRentasEstablecimientosPermanentesSucursales: z.object({
          ValorFiscalTieneDerecho: z.number(),
          ValorFiscalSolicitado: z.number()
        }),
        OtrosAjustes: z.object({
          ValorFiscalTieneDerecho: z.number(),
          ValorFiscalSolicitado: z.number()
        })
      }),
      Total: z.object({
        ValorFiscalTieneDerecho: z.number(),
        ValorFiscalSolicitado: z.number()
      })
    }),
    GananciaPerdidaContableDiferenciaPermanente: z.object({
      ValorFiscalTieneDerecho: z.number(),
      ValorFiscalSolicitado: z.number()
    }),
    AjustesResultadoContableDiferenciasTemporales: z.object({
      DiferenciasTemporalesDeducibles: z.object({
        PerdidasDeterioroValorActivos: z.object({
          Inventarios: z.object({
            Generaciones: z.number(),
            Reversiones: z.number()
          }),
          PropiedadesPlantaEquipo: z.object({
            Generaciones: z.number(),
            Reversiones: z.number()
          }),
          ActivosIntangibles: z.object({
            Generaciones: z.number(),
            Reversiones: z.number()
          }),
          ActivosExploracionEvaluacionRecursosMinerales: z.object({
            Generaciones: z.number(),
            Reversiones: z.number()
          }),
          PropiedadesInversionMedidasCosto: z.object({
            Generaciones: z.number(),
            Reversiones: z.number()
          }),
          ActivosNoCorrientesMantenidosVentaEntregarPropietarios: z.object({
            Generaciones: z.number(),
            Reversiones: z.number()
          }),
          ActivosBiologicosMedidosCosto: z.object({
            Generaciones: z.number(),
            Reversiones: z.number()
          }),
          BienesArteCultura: z.object({
            Generaciones: z.number(),
            Reversiones: z.number()
          }),
          ActivosFinancieros: z.object({
            Generaciones: z.number(),
            Reversiones: z.number()
          }),
          CarteraCreditoOperacionesLeasing: z.object({
            Generaciones: z.number(),
            Reversiones: z.number()
          }),
          OtrasInversionesMedidasCostoMetodoParticipacion: z.object({
            Generaciones: z.number(),
            Reversiones: z.number()
          }),
          OtrasPerdidasDeterioros: z.object({
            Generaciones: z.number(),
            Reversiones: z.number()
          })
        }),
        GastosDepreciacionExedidoLimiteFiscal: z.object({
          PropiedadesPlantaEquipo: z.object({
            Generaciones: z.number(),
            Reversiones: z.number()
          }),
          PropiedadesInversion: z.object({
            Generaciones: z.number(),
            Reversiones: z.number()
          }),
          ActivosBiologicos: z.object({
            Generaciones: z.number(),
            Reversiones: z.number()
          }),
          BienesArteCultura: z.object({
            Generaciones: z.number(),
            Reversiones: z.number()
          }),
          Otros: z.object({
            Generaciones: z.number(),
            Reversiones: z.number()
          })
        }),
        GastosAmortizacionExedidoLimiteFiscal: z.object({
          Generaciones: z.number(),
          Reversiones: z.number()
        }),
        PerdidasMedicionValorRazonable: z.object({
          PropiedadesInversion: z.object({
            Generaciones: z.number(),
            Reversiones: z.number()
          }),
          InstrumentosDerivados: z.object({
            Generaciones: z.number(),
            Reversiones: z.number()
          }),
          OtrosInstrumentosFinancieros: z.object({
            Generaciones: z.number(),
            Reversiones: z.number()
          })
        }),
        PerdidaDiferenciaCambio: z.object({
          Generaciones: z.number(),
          Reversiones: z.number()
        }),
        PerdidasEsperadasContratosConstruccionProvisionesContratosOnerosos: z.object(
          { Generaciones: z.number(), Reversiones: z.number() }
        ),
        InteresesImplicitosVentasPrestamosTerceros: z.object({
          Generaciones: z.number(),
          Reversiones: z.number()
        }),
        OtrasProvisionesPasivosMontoFechaInciertos: z.object({
          Generaciones: z.number(),
          Reversiones: z.number()
        }),
        BeneficiosEmpleados: z.object({
          Generaciones: z.number(),
          Reversiones: z.number()
        }),
        GastosActualizacionProvisionesValorPresente: z.object({
          Generaciones: z.number(),
          Reversiones: z.number()
        }),
        CostosPrestamosActivosAptosNIIFParaPYMES: z.object({
          Generaciones: z.number(),
          Reversiones: z.number()
        }),
        PasivosIngresosDiferidosProgramasFidelizacionClientes: z.object({
          Generaciones: z.number(),
          Reversiones: z.number()
        }),
        AjustesContratosConcesionConstruccionAdministracionOperacionMantenimiento: z.object(
          { Generaciones: z.number(), Reversiones: z.number() }
        ),
        GastosEstablecimiento: z.object({
          Generaciones: z.number(),
          Reversiones: z.number()
        }),
        GastosInvestigacionDesarrolloInnovacion: z.object({
          Generaciones: z.number(),
          Reversiones: z.number()
        }),
        PagosBasadosAcciones: z.object({
          Generaciones: z.number(),
          Reversiones: z.number()
        }),
        ExplotacionMinasPetroleoGas: z.object({
          Generaciones: z.number(),
          Reversiones: z.number()
        }),
        RentasDerechoCobroNoCumplieronCriteriosIngresosPeriodoGravable: z.object(
          { Generaciones: z.number(), Reversiones: z.number() }
        ),
        OtrasDiferenciasTemporalesDeducibles: z.object({
          Generaciones: z.number(),
          Reversiones: z.number()
        }),
        Total: z.object({ Generaciones: z.number(), Reversiones: z.number() })
      }),
      DiferenciasTemporalesImponiblesGravables: z.object({
        GastosDepreciacionesActivosFijosAceptadosTemporaria: z.object({
          CostosAtribuidosFechaTransicion: z.object({
            Generaciones: z.number(),
            Reversiones: z.number()
          }),
          ApliacionModeloRevaluacion: z.object({
            Generaciones: z.number(),
            Reversiones: z.number()
          }),
          CostosEstimadosDesmantelamiento: z.object({
            Generaciones: z.number(),
            Reversiones: z.number()
          }),
          Otros: z.object({
            Generaciones: z.number(),
            Reversiones: z.number()
          })
        }),
        GastosAmortizacionesActivosIntangiblesAceptadasFiscalmenteTemporaria: z.object(
          {
            CostosAtribuidosFechaTransicion: z.object({
              Generaciones: z.number(),
              Reversiones: z.number()
            }),
            ApliacionModeloRevaluacion: z.object({
              Generaciones: z.number(),
              Reversiones: z.number()
            }),
            Plusvalia: z.object({
              Generaciones: z.number(),
              Reversiones: z.number()
            }),
            Otros: z.object({
              Generaciones: z.number(),
              Reversiones: z.number()
            })
          }
        ),
        GananciasMedicionValorRazonable: z.object({
          PropiedadesInversion: z.object({
            Generaciones: z.number(),
            Reversiones: z.number()
          }),
          InstrumentosDerivados: z.object({
            Generaciones: z.number(),
            Reversiones: z.number()
          }),
          OtrosInstrumentosFinancieros: z.object({
            Generaciones: z.number(),
            Reversiones: z.number()
          })
        }),
        GananciaPorDiferenciaCambio: z.object({
          Generaciones: z.number(),
          Reversiones: z.number()
        }),
        IngresosProvenientesContraprestacionVariable: z.object({
          Generaciones: z.number(),
          Reversiones: z.number()
        }),
        InteresesImplicitos: z.object({
          Generaciones: z.number(),
          Reversiones: z.number()
        }),
        DeduccionEspecialImpuestoVentas: z.object({
          Generaciones: z.number(),
          Reversiones: z.number()
        }),
        OtrasDiferencias: z.object({
          Generaciones: z.number(),
          Reversiones: z.number()
        }),
        Total: z.object({ Generaciones: z.number(), Reversiones: z.number() })
      }),
      OtrasDiferenciasTemporales: z.object({
        MedicionesActivosBiologicosValorRazonable: z.object({
          CambiosValorRazonableMenosCostosVenta: z.object({
            GeneracionesDeducibles: z.number(),
            GeneracionesImponibles: z.number(),
            ReversionesDeducibles: z.number(),
            ReversionesImponibles: z.number()
          }),
          CostosProduccionTransformacionBiologica: z.object({
            GeneracionesDeducibles: z.number(),
            GeneracionesImponibles: z.number(),
            ReversionesDeducibles: z.number(),
            ReversionesImponibles: z.number()
          }),
          DepreciacionFiscalAnimalesProductores: z.object({
            GeneracionesDeducibles: z.number(),
            GeneracionesImponibles: z.number(),
            ReversionesDeducibles: z.number(),
            ReversionesImponibles: z.number()
          })
        }),
        AjustesTitulosRentaFijaModeloValorRazonable: z.object({
          AjustesValorRazonable: z.object({
            GeneracionesDeducibles: z.number(),
            GeneracionesImponibles: z.number(),
            ReversionesDeducibles: z.number(),
            ReversionesImponibles: z.number()
          }),
          AjusteRendimientosFinancieros: z.object({
            GeneracionesDeducibles: z.number(),
            GeneracionesImponibles: z.number(),
            ReversionesDeducibles: z.number(),
            ReversionesImponibles: z.number()
          })
        }),
        GastosAmortizacionFiscalAcelerada: z.object({
          GeneracionesDeducibles: z.number(),
          GeneracionesImponibles: z.number(),
          ReversionesDeducibles: z.number(),
          ReversionesImponibles: z.number()
        }),
        AjustesOperacionReporteRepo: z.object({
          GeneracionesDeducibles: z.number(),
          GeneracionesImponibles: z.number(),
          ReversionesDeducibles: z.number(),
          ReversionesImponibles: z.number()
        }),
        ContratosArrendamientos: z.object({
          GeneracionesDeducibles: z.number(),
          GeneracionesImponibles: z.number(),
          ReversionesDeducibles: z.number(),
          ReversionesImponibles: z.number()
        }),
        Total: z.object({
          GeneracionesDeducibles: z.number(),
          GeneracionesImponibles: z.number(),
          ReversionesDeducibles: z.number(),
          ReversionesImponibles: z.number()
        })
      }),
      Total: z.object({
        GeneracionesDeducibles: z.number(),
        GeneracionesImponibles: z.number(),
        ReversionesDeducibles: z.number(),
        ReversionesImponibles: z.number()
      })
    }),
    Total: z.object({
      GeneracionesDeducibles: z.number(),
      GeneracionesImponibles: z.number(),
      ReversionesDeducibles: z.number(),
      ReversionesImponibles: z.number()
    })
  }),
  RentaLiquidaOrdinariaEjercicio: z.number(),
  PerdidaLiquidaOrdinariaEjercicio: z.number(),
  AjustesParaLiquidacion: z.object({
    MenosValorInversionesRealizadas: z.number(),
    MasValorInversionesLiquidas: z.number()
  }),
  RentasPasivasECE: z.object({
    Ingresos: z.object({
      DividendosRetirosRepartos: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      InteresesRendimientosFinancieros: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      ProvenientesActivosIntangibles: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      EnajenacionCesionDerechos: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      EnajenacionArrendamientoInmuebles: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      CompraVentaBienesCorporales: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      PorServicios: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      Total: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        MenorValorFiscal: z.number(),
        MayorValorFiscal: z.number(),
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      })
    }),
    Costos: z.object({
      ValorContable: z.number(),
      EfectoConversion: z.number(),
      MenorValorFiscal: z.number(),
      MayorValorFiscal: z.number(),
      ValorFiscal: z.number(),
      Tarifa9: z.number(),
      Tarifa15: z.number(),
      Tarifa20: z.number(),
      MegaInversiones: z.number(),
      MegaInversiones27: z.number(),
      TarifaGeneral240: z.number(),
      Otras: z.number()
    }),
    Deducciones: z.object({
      ValorContable: z.number(),
      EfectoConversion: z.number(),
      MenorValorFiscal: z.number(),
      MayorValorFiscal: z.number(),
      ValorFiscal: z.number(),
      Tarifa9: z.number(),
      Tarifa15: z.number(),
      Tarifa20: z.number(),
      MegaInversiones: z.number(),
      MegaInversiones27: z.number(),
      TarifaGeneral240: z.number(),
      Otras: z.number()
    })
  }),
  RentasLiquidasPasivasECE: z.object({
    ValorContable: z.number(),
    EfectoConversion: z.number(),
    MenorValorFiscal: z.number(),
    MayorValorFiscal: z.number(),
    ValorFiscal: z.number(),
    Tarifa9: z.number(),
    Tarifa15: z.number(),
    Tarifa20: z.number(),
    MegaInversiones: z.number(),
    MegaInversiones27: z.number(),
    TarifaGeneral240: z.number(),
    Otras: z.number()
  }),
  RentaLiquidaRecuperaciónDeducciones: z.object({
    ValorFiscal: z.number(),
    Tarifa9: z.number(),
    Tarifa15: z.number(),
    Tarifa20: z.number(),
    MegaInversiones: z.number(),
    MegaInversiones27: z.number(),
    TarifaGeneral240: z.number(),
    Otras: z.number()
  }),
  RentaLiquidaOrdinariaEjercicioExcedenteNEto: z.object({
    ValorFiscal: z.number(),
    Tarifa9: z.number(),
    Tarifa15: z.number(),
    Tarifa20: z.number(),
    MegaInversiones: z.number(),
    MegaInversiones27: z.number(),
    TarifaGeneral240: z.number(),
    Otras: z.number()
  }),
  PerdidaLiquidaEjercicio: z.object({
    ValorFiscal: z.number(),
    Tarifa9: z.number(),
    Tarifa15: z.number(),
    Tarifa20: z.number(),
    MegaInversiones: z.number(),
    MegaInversiones27: z.number(),
    TarifaGeneral240: z.number(),
    Otras: z.number()
  }),
  Compensaciones: z.object({
    PerdidasFiscales: z.object({
      ValorFiscal: z.number(),
      Tarifa9: z.number(),
      Tarifa15: z.number(),
      Tarifa20: z.number(),
      MegaInversiones: z.number(),
      MegaInversiones27: z.number(),
      TarifaGeneral240: z.number(),
      Otras: z.number()
    }),
    ExcesoREntaPresuntivaRentaOrdinaria: z.object({
      ValorFiscal: z.number(),
      Tarifa9: z.number(),
      Tarifa15: z.number(),
      Tarifa20: z.number(),
      MegaInversiones: z.number(),
      MegaInversiones27: z.number(),
      TarifaGeneral240: z.number(),
      Otras: z.number()
    }),
    Total: z.object({
      ValorFiscal: z.number(),
      Tarifa9: z.number(),
      Tarifa15: z.number(),
      Tarifa20: z.number(),
      MegaInversiones: z.number(),
      MegaInversiones27: z.number(),
      TarifaGeneral240: z.number(),
      Otras: z.number()
    })
  }),
  RentaLquidaDividendosSociedadesNacionales: z.object({
    ValorFiscal: z.number(),
    Tarifa9: z.number(),
    Tarifa15: z.number(),
    Tarifa20: z.number(),
    MegaInversiones: z.number(),
    MegaInversiones27: z.number(),
    TarifaGeneral240: z.number(),
    Otras: z.number()
  }),
  RentaPresuntiva: z.object({
    PatrimoniLiquidoAñoPeriodoGravable: z.object({
      ValorFiscal: z.number(),
      Tarifa9: z.number(),
      Tarifa15: z.number(),
      Tarifa20: z.number(),
      MegaInversiones: z.number(),
      MegaInversiones27: z.number(),
      TarifaGeneral240: z.number(),
      Otras: z.number()
    }),
    ValorPatrimonialNeto: z.object({
      AccionesAportesPoseidosSociedadesNacionales: z.object({
        ValorFiscal: z.number()
      }),
      BienesAfectadosHecosConstitutivos: z.object({ ValorFiscal: z.number() }),
      BienesVinculadosEmpresasPeriodoImproductivo: z.object({
        ValorFiscal: z.number()
      }),
      BienesDestinadosExclusivamenteActividadesDeportivas: z.object({
        ValorFiscal: z.number()
      }),
      BienesVinculadosEmpresasExclusivamenteMineras: z.object({
        ValorFiscal: z.number()
      })
    }),
    Primeras19000UVTAgropecuario: z.object({ ValorFiscal: z.number() }),
    OtrasExclusiones: z.object({ ValorFiscal: z.number() }),
    BaseCalcykiRentaPresuntiva: z.object({ ValorFiscal: z.number() }),
    CalculoRantaPresuntiva: z.object({ ValorFiscal: z.number() }),
    RentaGravableGeneraActivosExcluidos: z.object({ ValorFiscal: z.number() }),
    Total: z.object({
      ValorFiscal: z.number(),
      Tarifa9: z.number(),
      Tarifa15: z.number(),
      Tarifa20: z.number(),
      MegaInversiones: z.number(),
      MegaInversiones27: z.number(),
      TarifaGeneral240: z.number(),
      Otras: z.number()
    })
  }),
  RenteExenta: z.object({
    ValorFiscal: z.number(),
    Tarifa9: z.number(),
    Tarifa15: z.number(),
    Tarifa20: z.number(),
    MegaInversiones: z.number(),
    MegaInversiones27: z.number(),
    TarifaGeneral240: z.number(),
    Otras: z.number()
  }),
  RentasGrvablesREntaLiquida: z.object({
    PerdidasCompensadasModificadasLiquidacionOfical: z.object({
      ValorFiscal: z.number(),
      Tarifa9: z.number(),
      Tarifa15: z.number(),
      Tarifa20: z.number(),
      MegaInversiones: z.number(),
      MegaInversiones27: z.number(),
      TarifaGeneral240: z.number(),
      Otras: z.number()
    }),
    PasivosInexistentes: z.object({
      ValorFiscal: z.number(),
      Tarifa9: z.number(),
      Tarifa15: z.number(),
      Tarifa20: z.number(),
      MegaInversiones: z.number(),
      MegaInversiones27: z.number(),
      TarifaGeneral240: z.number(),
      Otras: z.number()
    }),
    OmisionActivos: z.object({
      ValorFiscal: z.number(),
      Tarifa9: z.number(),
      Tarifa15: z.number(),
      Tarifa20: z.number(),
      MegaInversiones: z.number(),
      MegaInversiones27: z.number(),
      TarifaGeneral240: z.number(),
      Otras: z.number()
    }),
    ComparacionPatrimonial: z.object({
      ValorFiscal: z.number(),
      Tarifa9: z.number(),
      Tarifa15: z.number(),
      Tarifa20: z.number(),
      MegaInversiones: z.number(),
      MegaInversiones27: z.number(),
      TarifaGeneral240: z.number(),
      Otras: z.number()
    }),
    ESALRTE: z.object({
      ExedentesNoReinvertidos: z.object({
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      AsignacionesPermanentes: z.object({
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      }),
      InversionesLiquidas: z.object({
        ValorFiscal: z.number(),
        Tarifa9: z.number(),
        Tarifa15: z.number(),
        Tarifa20: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27: z.number(),
        TarifaGeneral240: z.number(),
        Otras: z.number()
      })
    }),
    Total: z.object({
      ValorFiscal: z.number(),
      Tarifa9: z.number(),
      Tarifa15: z.number(),
      Tarifa20: z.number(),
      MegaInversiones: z.number(),
      MegaInversiones27: z.number(),
      TarifaGeneral240: z.number(),
      Otras: z.number()
    })
  }),
  RentasLiquidasGravables: z.object({
    ValorFiscal: z.number(),
    Tarifa9: z.number(),
    Tarifa15: z.number(),
    Tarifa20: z.number(),
    MegaInversiones: z.number(),
    MegaInversiones27: z.number(),
    TarifaGeneral240: z.number(),
    Otras: z.number()
  }),
  ImpuestoSobreREntaLiquidaGravable: z.object({
    ValorFiscal: z.number(),
    Tarifa9: z.number(),
    Tarifa15: z.number(),
    Tarifa20: z.number(),
    MegaInversiones: z.number(),
    MegaInversiones27: z.number(),
    TarifaGeneral240: z.number(),
    Otras: z.number()
  }),
  GananciasOcasionalesGravables: z.object({
    IngresosGananciaOcasionalVentaActivosFijos: z.object({
      ValorFiscal: z.number()
    }),
    OtrosIngresosGananciaOcasional: z.object({ ValorFiscal: z.number() }),
    TotalIngresosGananciasOcasionales: z.object({ ValorFiscal: z.number() }),
    CostosGananciaOcasionalVentaActivosFijos: z.object({
      ValorFiscal: z.number()
    }),
    OtrosCostosGananciasOcasionales: z.object({ ValorFiscal: z.number() }),
    TotalCostosGananciasOcasionales: z.object({ ValorFiscal: z.number() }),
    GananciasOcasionalesNoGravadasVentaAccionesECE: z.object({
      ValorFiscal: z.number()
    }),
    OtrasGananciasOcasionalesNoGravadasExentas: z.object({
      ValorFiscal: z.number()
    }),
    RentasDeudoresRegimenLey11162006Decretos5607722020: z.object({
      ValorFiscal: z.number()
    }),
    UtilizacionPerdidasFiscalesAcumuladasArt15Decreto7722020: z.object({
      ValorFiscal: z.number()
    }),
    ImpuestoGananciaOcasional: z.object({ ValorFiscal: z.number() }),
    Total: z.object({ ValorFiscal: z.number() })
  }),
  DescuentosTributarios: z.object({ ValorFiscal: z.number() }),
  DescuentosImpuestosPAgadosExteriorGananciasOcacionales: z.object({
    ValorFiscal: z.number()
  }),
  ValorInversionObras50ValorImpuestoCargo: z.object({
    ValorFiscal: z.number()
  }),
  DescuentoEfectivoInversionObrasImpuestos: z.object({
    ValorFiscal: z.number()
  }),
  AnticipoRentaLiquidadoAnioAnterior: z.object({ ValorFiscal: z.number() }),
  AnticipoSobretasaLiquidadpAnioAnterior: z.object({ ValorFiscal: z.number() }),
  SaldoFavorAnioGravableAnteriorSinSolicitusDevolucion: z.object({
    Autorretenciones: z.object({
      PorVentas: z.object({ ValorFiscal: z.number() }),
      PorServicios: z.object({ ValorFiscal: z.number() }),
      PorRendimientos: z.object({ ValorFiscal: z.number() }),
      PorOtrosConceptos: z.object({ ValorFiscal: z.number() }),
      Total: z.object({ ValorFiscal: z.number() })
    }),
    OtrasReneciones: z.object({
      PorVentas: z.object({ ValorFiscal: z.number() }),
      PorServicios: z.object({ ValorFiscal: z.number() }),
      PorHonorarios: z.object({ ValorFiscal: z.number() }),
      PorRendimientos: z.object({ ValorFiscal: z.number() }),
      PorDividendos: z.object({ ValorFiscal: z.number() }),
      OtrasRetenciones: z.object({ ValorFiscal: z.number() }),
      Total: z.object({ ValorFiscal: z.number() })
    })
  }),
  TotalRetencionesAnioGravableDeclara: z.object({ ValorFiscal: z.number() }),
  AnticipoRentaAnioGravableSiguiente: z.object({ ValorFiscal: z.number() }),
  AnticipoSobretasaInstitucionesAnioGravableAnterior: z.object({
    ValorFiscal: z.number()
  }),
  SobretasaInstitucionesFinancieras: z.object({ ValorFiscal: z.number() }),
  AnticipoSobretasaIntitucionesFinancierasAnioGravableSiguiente: z.object({
    ValorFiscal: z.number()
  }),
  CreditoFiscalInversionesEnProyectosInvestigacion: z.object({
    ValorFiscal: z.number()
  }),
  Sanciones: z.object({ ValorFiscal: z.number() }),
  InformativoOtroResultadoIntegral: z.object({
    NoSeReclassificanAlResultado: z.object({
      CambiosSuperavitRevaluacion: z.object({
        Ganancia: z.number(),
        Perdida: z.number(),
        EfectoConversion: z.number()
      }),
      NuevasMedicionesPlanesBeneficiosDefinidos: z.object({
        Ganancia: z.number(),
        Perdida: z.number(),
        EfectoConversion: z.number()
      }),
      InversionesInstrumentosPatrimonio: z.object({
        Ganancia: z.number(),
        Perdida: z.number(),
        EfectoConversion: z.number()
      }),
      ParticipacionOtroResultadoIntegralAsociadasNegociosConjuntosMetodoParticipacion: z.object(
        {
          Ganancia: z.number(),
          Perdida: z.number(),
          EfectoConversion: z.number()
        }
      ),
      InstrumentosCoberturaInversionesInstrumentosPatrimonio: z.object({
        Ganancia: z.number(),
        Perdida: z.number(),
        EfectoConversion: z.number()
      }),
      CambioValorRazonablePasivosFinancierosRiesgoCreditoPasivo: z.object({
        Ganancia: z.number(),
        Perdida: z.number(),
        EfectoConversion: z.number()
      })
    }),
    SeReclassificanAlResultado: z.object({
      DiferenciasCambioConversion: z.object({
        Ganancia: z.number(),
        Perdida: z.number(),
        EfectoConversion: z.number()
      }),
      ActivosFinancierosDisponiblesVenta: z.object({
        Ganancia: z.number(),
        Perdida: z.number(),
        EfectoConversion: z.number()
      }),
      ActivosFinancierosValorRazonableCambiosORI: z.object({
        Ganancia: z.number(),
        Perdida: z.number(),
        EfectoConversion: z.number()
      }),
      CoberturaFlujosEfectivo: z.object({
        Ganancia: z.number(),
        Perdida: z.number(),
        EfectoConversion: z.number()
      }),
      CoberturasInversionesNetasNegociosExtranjero: z.object({
        Ganancia: z.number(),
        Perdida: z.number(),
        EfectoConversion: z.number()
      }),
      OtrasPartidasReconocidasORI: z.object({
        Ganancia: z.number(),
        Perdida: z.number(),
        EfectoConversion: z.number()
      })
    }),
    OtrpResultadoIntegralAntesImpuestos: z.object({
      Ganancia: z.number(),
      Perdida: z.number(),
      EfectoConversion: z.number()
    }),
    ResultadoIntegralTotalAnio: z.object({
      Ganancia: z.number(),
      Perdida: z.number(),
      EfectoConversion: z.number()
    })
  }),
  GastoIngresoImpuestoRentaComplementarioPeriodo: z.object({
    GastosImpuestoCorriente: z.object({
      SobreRentaLiquidaPresuntivaPeriodo: z.object({
        ValorContable: z.number()
      }),
      GastoAjustesPeriodosAnteriores: z.object({ ValorContable: z.number() }),
      IngresosAjustesPeriodosAnteriores: z.object({
        ValorContable: z.number()
      }),
      ImpuestosAsumidosExteriorConveniosTratados: z.object({
        ValorContable: z.number()
      })
    }),
    GastoImpuestoDiferido: z.object({ ValorContable: z.number() }),
    IngresoImpuestoDiferido: z.object({ ValorContable: z.number() }),
    ValorNetoGastoImpuesto: z.object({ ValorContable: z.number() })
  }),
  DatosInformativoConcepto: z.object({
    Ingresos: z.object({
      IngresosDevengadosFidelizacionClientes: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        ValorFiscal: z.number()
      }),
      IngresosFiscalesFidelizacionClientesSinDevengoContable: z.object({
        ValorFiscal: z.number()
      }),
      RetirosConsumoPublicidadPropagandaPromocion: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        ValorFiscal: z.number()
      }),
      DividendosDecretadosPeriodoGravable: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number()
      }),
      DividendosCobradosPeriodoGravable: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number()
      }),
      IngresosDevengadosFideicomisosEncargosFiduciariosFideicomitenteFiduciante: z.object(
        { ValorContable: z.number(), EfectoConversion: z.number() }
      ),
      IngresosDevengadosFideicomisosEncargosFiduciariosBeneficiario: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number()
      })
    }),
    CostosGastos: z.object({
      CostosGastosDevengadosFidelizacionClientes: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        ValorFiscal: z.number()
      }),
      BajasInventariosReconocidosCostoGastoEstadoResultados: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        ValorFiscal: z.number()
      }),
      CostosIndirectosProduccionNoDistribuidosCostoInventario: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number()
      }),
      MontoDescuentosObtenidosPeriodoCompraInventarios: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number()
      }),
      CostosGastosDevengadosFideicomisosEncargosFiduciariosFideicomitenteFiduciante: z.object(
        { ValorContable: z.number(), EfectoConversion: z.number() }
      ),
      CostosGastosDevengadosFideicomisosEncargosFiduciariosBeneficiario: z.object(
        { ValorContable: z.number(), EfectoConversion: z.number() }
      ),
      CostosDeduccionesNoProcedentesActividadMeritoriaRegimenTributarioEspecial: z.object(
        { ValorFiscal: z.number() }
      )
    }),
    OtrosDatosInformativos: z.object({
      TotalCostosGastosNomina: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        ValorFiscal: z.number()
      }),
      AportesSistemaSeguridadSocial: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        ValorFiscal: z.number()
      }),
      AportesSENAICBFCompensacion: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        ValorFiscal: z.number()
      }),
      AportesEmpleadorSegurosPrivadosPensionesFondosPensionesVoluntarias: z.object(
        {
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          ValorFiscal: z.number()
        }
      ),
      OperacionesVinculadosEconomicos: z.object({
        Ingresos: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          ValorFiscal: z.number()
        }),
        CostosDeducciones: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          ValorFiscal: z.number()
        }),
        CompraInventarios: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          ValorFiscal: z.number()
        }),
        CompraActivosFijos: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          ValorFiscal: z.number()
        }),
        Pasivo: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          ValorFiscal: z.number()
        })
      })
    })
  })
})
