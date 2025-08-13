import { z } from "zod";

export const ResumenESFSchema = z.object({
  EstadoDeSituacionFinancieraPatrimonio: z.object({
    Activos: z.object({
      EfectivoYEquivalentesAlEfectivo: z.object({
        ValorContable: z.number(),
        ValorFiscal: z.number(),
        Variacion: z.number()
      }),
      InversionesEInstrumentosFinancierosDerivados: z.object({
        ValorContable: z.number(),
        ValorFiscal: z.number(),
        Variacion: z.number()
      }),
      CuentasPorCobrar: z.object({
        ValorContable: z.number(),
        ValorFiscal: z.number(),
        Variacion: z.number()
      }),
      Inventarios: z.object({
        ValorContable: z.number(),
        ValorFiscal: z.number(),
        Variacion: z.number()
      }),
      GastosPagadosPorAnticipado: z.object({
        ValorContable: z.number(),
        ValorFiscal: z.number(),
        Variacion: z.number()
      }),
      ActivosPorImpuestosCorrientes: z.object({
        ValorContable: z.number(),
        ValorFiscal: z.number(),
        Variacion: z.number()
      }),
      ActivosPorImpuestosDiferidos: z.object({
        ValorContable: z.number(),
        ValorFiscal: z.number(),
        Variacion: z.number()
      }),
      PropiedadesPlantaYEquipo: z.object({
        ValorContable: z.number(),
        ValorFiscal: z.number(),
        Variacion: z.number()
      }),
      ActivosIntangibles: z.object({
        ValorContable: z.number(),
        ValorFiscal: z.number(),
        Variacion: z.number()
      }),
      PropiedadesDeInversion: z.object({
        ValorContable: z.number(),
        ValorFiscal: z.number(),
        Variacion: z.number()
      }),
      ActivosNoCorrientesMantenidosParaLaVentaDistribuirALosPropietarios: z.object(
        {
          ValorContable: z.number(),
          ValorFiscal: z.number(),
          Variacion: z.number()
        }
      ),
      ActivosBiologicos: z.object({
        ValorContable: z.number(),
        ValorFiscal: z.number(),
        Variacion: z.number()
      }),
      OtrosActivos: z.object({
        ValorContable: z.number(),
        ValorFiscal: z.number(),
        Variacion: z.number()
      }),
      TotalActivos: z.object({
        ValorContable: z.number(),
        ValorFiscal: z.number(),
        Variacion: z.number()
      })
    }),
    Pasivos: z.object({
      ObligacionesFinancierasYCuentasPorPagar: z.object({
        ValorContable: z.number(),
        ValorFiscal: z.number(),
        Variacion: z.number()
      }),
      ArrendamientosPorPagar: z.object({
        ValorContable: z.number(),
        ValorFiscal: z.number(),
        Variacion: z.number()
      }),
      OtrosPasivosFinancieros: z.object({
        ValorContable: z.number(),
        ValorFiscal: z.number(),
        Variacion: z.number()
      }),
      ImpuestosGravamenesYTasasPorPagar: z.object({
        ValorContable: z.number(),
        ValorFiscal: z.number(),
        Variacion: z.number()
      }),
      PasivosPorImpuestosDiferidos: z.object({
        ValorContable: z.number(),
        ValorFiscal: z.number(),
        Variacion: z.number()
      }),
      PasivosPorBeneficiosALosEmpleados: z.object({
        ValorContable: z.number(),
        ValorFiscal: z.number(),
        Variacion: z.number()
      }),
      Provisiones: z.object({
        ValorContable: z.number(),
        ValorFiscal: z.number(),
        Variacion: z.number()
      }),
      PasivosPorIngresosDiferidos: z.object({
        ValorContable: z.number(),
        ValorFiscal: z.number(),
        Variacion: z.number()
      }),
      OtrosPasivos: z.object({
        ValorContable: z.number(),
        ValorFiscal: z.number(),
        Variacion: z.number()
      }),
      TotalPasivos: z.object({
        ValorContable: z.number(),
        ValorFiscal: z.number(),
        Variacion: z.number()
      })
    }),
    Patrimonio: z.object({
      CapitalSocialYReservas: z.object({ ValorContable: z.number() }),
      ResultadosDelEjercicio: z.object({ ValorContable: z.number() }),
      ResultadosAcumulados: z.object({ ValorContable: z.number() }),
      GananciasPerdidasAcumuladasPorLaAdopcionPorPrimera: z.object({
        ValorContable: z.number()
      }),
      OtroResultadoIntegralAcumulado: z.object({ ValorContable: z.number() }),
      TotalPatrimonio: z.object({
        ValorContable: z.number(),
        ValorFiscal: z.number()
      })
    })
  }),
  EstadoDeResultadoIntegralImpuestosDeRenta: z.object({
    Ingresos: z.object({
      IngresosNetosActividadIndustrialComercialYServicios: z.object({
        ValorContable: z.number(),
        ValorFiscal: z.number(),
        Variacion: z.number()
      }),
      DevolucionesRebajasYDescuentos: z.object({
        ValorContable: z.number(),
        ValorFiscal: z.number(),
        Variacion: z.number()
      }),
      IngresosFinancieros: z.object({
        ValorContable: z.number(),
        ValorFiscal: z.number(),
        Variacion: z.number()
      }),
      GananciasPorInversionesEnSubsidiariasAsociadasYONegociosConjuntos: z.object(
        {
          ValorContable: z.number(),
          ValorFiscal: z.number(),
          Variacion: z.number()
        }
      ),
      IngresosPorMedicionesAValorRazonable: z.object({
        ValorContable: z.number(),
        ValorFiscal: z.number(),
        Variacion: z.number()
      }),
      UtilidadEnLaVentaOEnajenacionDeActivosBienesPoseidosPorMenosDeDoAnios: z.object(
        {
          ValorContable: z.number(),
          ValorFiscal: z.number(),
          Variacion: z.number()
        }
      ),
      UtilidadPorVentaOEnajenacionDeActivosBienesPoseidosPorDosAniosOMasGananciaOcasional: z.object(
        {
          ValorContable: z.number(),
          ValorFiscal: z.number(),
          Variacion: z.number()
        }
      ),
      IngresosPorReversionDeDeterioroDelValor: z.object({
        ValorContable: z.number(),
        ValorFiscal: z.number(),
        Variacion: z.number()
      }),
      IngresosPorReversionDeProvisionesPasivosDeMontoOFechaInciertos: z.object({
        ValorContable: z.number(),
        ValorFiscal: z.number(),
        Variacion: z.number()
      }),
      IngresosPorReversionDePasivosPorBeneficiosALosEmpleados: z.object({
        ValorContable: z.number(),
        ValorFiscal: z.number(),
        Variacion: z.number()
      }),
      OtrosIngresos: z.object({
        ValorContable: z.number(),
        ValorFiscal: z.number(),
        Variacion: z.number()
      }),
      GananciasNetasEnOperacionesDiscontinuadas: z.object({
        ValorContable: z.number(),
        ValorFiscal: z.number(),
        Variacion: z.number()
      }),
      AjustesFiscales: z.object({
        ValorContable: z.number(),
        ValorFiscal: z.number(),
        Variacion: z.number()
      }),
      IngresosNoGravados: z.object({
        ValorContable: z.number(),
        ValorFiscal: z.number(),
        Variacion: z.number()
      }),
      TotalIngresos: z.object({
        ValorContable: z.number(),
        ValorFiscal: z.number(),
        Variacion: z.number()
      })
    }),
    Costos: z.object({
      MateriasPrimasReventaDeBienesTerminadosYServicios: z.object({
        ValorContable: z.number(),
        ValorFiscal: z.number(),
        Variacion: z.number()
      }),
      ManoDeObra: z.object({
        ValorContable: z.number(),
        ValorFiscal: z.number(),
        Variacion: z.number()
      }),
      DepreciacionesAmortizacionesYDeterioros: z.object({
        ValorContable: z.number(),
        ValorFiscal: z.number(),
        Variacion: z.number()
      }),
      OtrosCostos: z.object({
        ValorContable: z.number(),
        ValorFiscal: z.number(),
        Variacion: z.number()
      }),
      MenorCostoAjusteDePreciosDeTransferencia: z.object({
        ValorContable: z.number(),
        ValorFiscal: z.number(),
        Variacion: z.number()
      }),
      TotalCostos: z.object({
        ValorContable: z.number(),
        ValorFiscal: z.number(),
        Variacion: z.number()
      })
    }),
    Gastos: z.object({
      DeAdministracion: z.object({
        ManoDeObra: z.object({
          ValorContable: z.number(),
          ValorFiscal: z.number(),
          Variacion: z.number()
        }),
        OtrosGastosDeAdministracion: z.object({
          ValorContable: z.number(),
          ValorFiscal: z.number(),
          Variacion: z.number()
        }),
        DepreciacionesAmortizacionesYDeterioros: z.object({
          ValorContable: z.number(),
          ValorFiscal: z.number(),
          Variacion: z.number()
        }),
        TotalGastosDeAdministracion: z.object({
          ValorContable: z.number(),
          ValorFiscal: z.number(),
          Variacion: z.number()
        })
      }),
      DeDistribucionYVentas: z.object({
        ManoDeObra: z.object({
          ValorContable: z.number(),
          ValorFiscal: z.number(),
          Variacion: z.number()
        }),
        OtrosGastosDeDistribucionYVentas: z.object({
          ValorContable: z.number(),
          ValorFiscal: z.number(),
          Variacion: z.number()
        }),
        DepreciacionesAmortizacionesYDeterioros: z.object({
          ValorContable: z.number(),
          ValorFiscal: z.number(),
          Variacion: z.number()
        }),
        TotalGastosDeDistribucionYVentas: z.object({
          ValorContable: z.number(),
          ValorFiscal: z.number(),
          Variacion: z.number()
        })
      }),
      GastosFinancieros: z.object({
        ValorContable: z.number(),
        ValorFiscal: z.number(),
        Variacion: z.number()
      }),
      PerdidasPorInversionesEnSubsidiariasAsociadasYONegociosConjuntos: z.object(
        {
          ValorContable: z.number(),
          ValorFiscal: z.number(),
          Variacion: z.number()
        }
      ),
      PerdidasPorMedicionesAValorRazonable: z.object({
        ValorContable: z.number(),
        ValorFiscal: z.number(),
        Variacion: z.number()
      }),
      PerdidaEnLaVentaOEnajenacionDeActivosFijos: z.object({
        ValorContable: z.number(),
        ValorFiscal: z.number(),
        Variacion: z.number()
      }),
      GastosPorProvisionesPasivosDeMontoOFechaInciertos: z.object({
        ValorContable: z.number(),
        ValorFiscal: z.number(),
        Variacion: z.number()
      }),
      OtrosGastos: z.object({
        ValorContable: z.number(),
        ValorFiscal: z.number(),
        Variacion: z.number()
      }),
      PerdidasNetasEnOperacionesDiscontinuadas: z.object({
        ValorContable: z.number(),
        ValorFiscal: z.number(),
        Variacion: z.number()
      }),
      MenorGastoODeduccionAjustePreciosTransferencia: z.object({
        ValorContable: z.number(),
        ValorFiscal: z.number(),
        Variacion: z.number()
      }),
      TotalGastos: z.object({
        ValorContable: z.number(),
        ValorFiscal: z.number(),
        Variacion: z.number()
      })
    })
  }),
  ResultadoDelEjercicio: z.object({
    ValorContable: z.number(),
    ValorFiscal: z.number(),
    Variacion: z.number()
  })
})

