import { z } from "zod";

export const ImpuestoDiferidoSchema = z.object({
  ImpuestosDiferidosProvenientesDeDiferenciasTemporarias: z.object({
    ActivoDiferidoDiferenciasTemporariasDeducibles: z.object({
      EfectivoYEquivalentesAlEfectivo: z.object({
        BaseContable: z.number(),
        BaseFiscal: z.number(),
        DiferenciaTemporaria: z.number(),
        DiferenciaPermanente: z.number(),
        SaldoImpuestoDiferidoActual: z.number(),
        SaldoImpuestoDiferidoAnterior: z.number(),
        Variacion: z.number(),
        TasaFiscalAplicada: z.number()
      }),
      InversionesEInstrumentosDerivados: z.object({
        BaseContable: z.number(),
        BaseFiscal: z.number(),
        DiferenciaTemporaria: z.number(),
        DiferenciaPermanente: z.number(),
        SaldoImpuestoDiferidoActual: z.number(),
        SaldoImpuestoDiferidoAnterior: z.number(),
        Variacion: z.number(),
        TasaFiscalAplicada: z.number()
      }),
      CuentasPorCobrar: z.object({
        BaseContable: z.number(),
        BaseFiscal: z.number(),
        DiferenciaTemporaria: z.number(),
        DiferenciaPermanente: z.number(),
        SaldoImpuestoDiferidoActual: z.number(),
        SaldoImpuestoDiferidoAnterior: z.number(),
        Variacion: z.number(),
        TasaFiscalAplicada: z.number()
      }),
      Inventarios: z.object({
        BaseContable: z.number(),
        BaseFiscal: z.number(),
        DiferenciaTemporaria: z.number(),
        DiferenciaPermanente: z.number(),
        SaldoImpuestoDiferidoActual: z.number(),
        SaldoImpuestoDiferidoAnterior: z.number(),
        Variacion: z.number(),
        TasaFiscalAplicada: z.number()
      }),
      PropiedadesPlantaYEquipo: z.object({
        BaseContable: z.number(),
        BaseFiscal: z.number(),
        DiferenciaTemporaria: z.number(),
        DiferenciaPermanente: z.number(),
        SaldoImpuestoDiferidoActual: z.number(),
        SaldoImpuestoDiferidoAnterior: z.number(),
        Variacion: z.number(),
        TasaFiscalAplicada: z.number()
      }),
      ActivosIntangibles: z.object({
        BaseContable: z.number(),
        BaseFiscal: z.number(),
        DiferenciaTemporaria: z.number(),
        DiferenciaPermanente: z.number(),
        SaldoImpuestoDiferidoActual: z.number(),
        SaldoImpuestoDiferidoAnterior: z.number(),
        Variacion: z.number(),
        TasaFiscalAplicada: z.number()
      }),
      PropiedadesDeInversion: z.object({
        BaseContable: z.number(),
        BaseFiscal: z.number(),
        DiferenciaTemporaria: z.number(),
        DiferenciaPermanente: z.number(),
        SaldoImpuestoDiferidoActual: z.number(),
        SaldoImpuestoDiferidoAnterior: z.number(),
        Variacion: z.number(),
        TasaFiscalAplicada: z.number()
      }),
      ActivosBiologicos: z.object({
        BaseContable: z.number(),
        BaseFiscal: z.number(),
        DiferenciaTemporaria: z.number(),
        DiferenciaPermanente: z.number(),
        SaldoImpuestoDiferidoActual: z.number(),
        SaldoImpuestoDiferidoAnterior: z.number(),
        Variacion: z.number(),
        TasaFiscalAplicada: z.number()
      }),
      ActivosNoCorrientesMantenidosParaLaVentaEntregarAPropietarios: z.object({
        BaseContable: z.number(),
        BaseFiscal: z.number(),
        DiferenciaTemporaria: z.number(),
        DiferenciaPermanente: z.number(),
        SaldoImpuestoDiferidoActual: z.number(),
        SaldoImpuestoDiferidoAnterior: z.number(),
        Variacion: z.number(),
        TasaFiscalAplicada: z.number()
      }),
      PasivosFinancierosYCuentasPorPagar: z.object({
        BaseContable: z.number(),
        BaseFiscal: z.number(),
        DiferenciaTemporaria: z.number(),
        DiferenciaPermanente: z.number(),
        SaldoImpuestoDiferidoActual: z.number(),
        SaldoImpuestoDiferidoAnterior: z.number(),
        Variacion: z.number(),
        TasaFiscalAplicada: z.number()
      }),
      ImpuestosGravamenesYTasas: z.object({
        BaseContable: z.number(),
        BaseFiscal: z.number(),
        DiferenciaTemporaria: z.number(),
        DiferenciaPermanente: z.number(),
        SaldoImpuestoDiferidoActual: z.number(),
        SaldoImpuestoDiferidoAnterior: z.number(),
        Variacion: z.number(),
        TasaFiscalAplicada: z.number()
      }),
      BeneficiosAEmpleados: z.object({
        BaseContable: z.number(),
        BaseFiscal: z.number(),
        DiferenciaTemporaria: z.number(),
        DiferenciaPermanente: z.number(),
        SaldoImpuestoDiferidoActual: z.number(),
        SaldoImpuestoDiferidoAnterior: z.number(),
        Variacion: z.number(),
        TasaFiscalAplicada: z.number()
      }),
      Provisiones: z.object({
        BaseContable: z.number(),
        BaseFiscal: z.number(),
        DiferenciaTemporaria: z.number(),
        DiferenciaPermanente: z.number(),
        SaldoImpuestoDiferidoActual: z.number(),
        SaldoImpuestoDiferidoAnterior: z.number(),
        Variacion: z.number(),
        TasaFiscalAplicada: z.number()
      }),
      OtrosPasivosAnticiposYAvancesRecibidos: z.object({
        BaseContable: z.number(),
        BaseFiscal: z.number(),
        DiferenciaTemporaria: z.number(),
        DiferenciaPermanente: z.number(),
        SaldoImpuestoDiferidoActual: z.number(),
        SaldoImpuestoDiferidoAnterior: z.number(),
        Variacion: z.number(),
        TasaFiscalAplicada: z.number()
      }),
      OperacionesConTitulosYDerivados: z.object({
        BaseContable: z.number(),
        BaseFiscal: z.number(),
        DiferenciaTemporaria: z.number(),
        DiferenciaPermanente: z.number(),
        SaldoImpuestoDiferidoActual: z.number(),
        SaldoImpuestoDiferidoAnterior: z.number(),
        Variacion: z.number(),
        TasaFiscalAplicada: z.number()
      }),
      PerdidasFiscalesYExcesosDeRentaPresuntiva: z.object({
        BaseContable: z.number(),
        BaseFiscal: z.number(),
        DiferenciaTemporaria: z.number(),
        DiferenciaPermanente: z.number(),
        SaldoImpuestoDiferidoActual: z.number(),
        SaldoImpuestoDiferidoAnterior: z.number(),
        Variacion: z.number(),
        TasaFiscalAplicada: z.number()
      }),
      ActivosReconocidosSolamenteParaFinesFiscales: z.object({
        BaseContable: z.number(),
        BaseFiscal: z.number(),
        DiferenciaTemporaria: z.number(),
        DiferenciaPermanente: z.number(),
        SaldoImpuestoDiferidoActual: z.number(),
        SaldoImpuestoDiferidoAnterior: z.number(),
        Variacion: z.number(),
        TasaFiscalAplicada: z.number()
      }),
      OtrosActivos: z.object({
        BaseContable: z.number(),
        BaseFiscal: z.number(),
        DiferenciaTemporaria: z.number(),
        DiferenciaPermanente: z.number(),
        SaldoImpuestoDiferidoActual: z.number(),
        SaldoImpuestoDiferidoAnterior: z.number(),
        Variacion: z.number(),
        TasaFiscalAplicada: z.number()
      }),
      ValorTotal: z.object({
        BaseContable: z.number(),
        BaseFiscal: z.number(),
        DiferenciaTemporaria: z.number(),
        DiferenciaPermanente: z.number(),
        SaldoImpuestoDiferidoActual: z.number(),
        SaldoImpuestoDiferidoAnterior: z.number(),
        Variacion: z.number(),
        TasaFiscalAplicada: z.number()
      })
    }),
    PasivoDiferidoDiferenciasTemporariasImponibles: z.object({
      EfectivoYEquivalentesAlEfectivo: z.object({
        BaseContable: z.number(),
        BaseFiscal: z.number(),
        DiferenciaTemporaria: z.number(),
        DiferenciaPermanente: z.number(),
        SaldoImpuestoDiferidoActual: z.number(),
        SaldoImpuestoDiferidoAnterior: z.number(),
        Variacion: z.number(),
        TasaFiscalAplicada: z.number()
      }),
      InversionesEInstrumentosDerivados: z.object({
        BaseContable: z.number(),
        BaseFiscal: z.number(),
        DiferenciaTemporaria: z.number(),
        DiferenciaPermanente: z.number(),
        SaldoImpuestoDiferidoActual: z.number(),
        SaldoImpuestoDiferidoAnterior: z.number(),
        Variacion: z.number(),
        TasaFiscalAplicada: z.number()
      }),
      CuentasPorCobrar: z.object({
        BaseContable: z.number(),
        BaseFiscal: z.number(),
        DiferenciaTemporaria: z.number(),
        DiferenciaPermanente: z.number(),
        SaldoImpuestoDiferidoActual: z.number(),
        SaldoImpuestoDiferidoAnterior: z.number(),
        Variacion: z.number(),
        TasaFiscalAplicada: z.number()
      }),
      Inventarios: z.object({
        BaseContable: z.number(),
        BaseFiscal: z.number(),
        DiferenciaTemporaria: z.number(),
        DiferenciaPermanente: z.number(),
        SaldoImpuestoDiferidoActual: z.number(),
        SaldoImpuestoDiferidoAnterior: z.number(),
        Variacion: z.number(),
        TasaFiscalAplicada: z.number()
      }),
      PropiedadesPlantaYEquipo: z.object({
        BaseContable: z.number(),
        BaseFiscal: z.number(),
        DiferenciaTemporaria: z.number(),
        DiferenciaPermanente: z.number(),
        SaldoImpuestoDiferidoActual: z.number(),
        SaldoImpuestoDiferidoAnterior: z.number(),
        Variacion: z.number(),
        TasaFiscalAplicada: z.number()
      }),
      ActivosIntangibles: z.object({
        BaseContable: z.number(),
        BaseFiscal: z.number(),
        DiferenciaTemporaria: z.number(),
        DiferenciaPermanente: z.number(),
        SaldoImpuestoDiferidoActual: z.number(),
        SaldoImpuestoDiferidoAnterior: z.number(),
        Variacion: z.number(),
        TasaFiscalAplicada: z.number()
      }),
      PropiedadesDeInversion: z.object({
        BaseContable: z.number(),
        BaseFiscal: z.number(),
        DiferenciaTemporaria: z.number(),
        DiferenciaPermanente: z.number(),
        SaldoImpuestoDiferidoActual: z.number(),
        SaldoImpuestoDiferidoAnterior: z.number(),
        Variacion: z.number(),
        TasaFiscalAplicada: z.number()
      }),
      ActivosBiologicos: z.object({
        BaseContable: z.number(),
        BaseFiscal: z.number(),
        DiferenciaTemporaria: z.number(),
        DiferenciaPermanente: z.number(),
        SaldoImpuestoDiferidoActual: z.number(),
        SaldoImpuestoDiferidoAnterior: z.number(),
        Variacion: z.number(),
        TasaFiscalAplicada: z.number()
      }),
      ActivosNoCorrientesMantenidosParaLaVentaEntregarAPropietarios: z.object({
        BaseContable: z.number(),
        BaseFiscal: z.number(),
        DiferenciaTemporaria: z.number(),
        DiferenciaPermanente: z.number(),
        SaldoImpuestoDiferidoActual: z.number(),
        SaldoImpuestoDiferidoAnterior: z.number(),
        Variacion: z.number(),
        TasaFiscalAplicada: z.number()
      }),
      PasivosFinancierosYCuentasPorPagar: z.object({
        BaseContable: z.number(),
        BaseFiscal: z.number(),
        DiferenciaTemporaria: z.number(),
        DiferenciaPermanente: z.number(),
        SaldoImpuestoDiferidoActual: z.number(),
        SaldoImpuestoDiferidoAnterior: z.number(),
        Variacion: z.number(),
        TasaFiscalAplicada: z.number()
      }),
      ImpuestosGravamenesYTasas: z.object({
        BaseContable: z.number(),
        BaseFiscal: z.number(),
        DiferenciaTemporaria: z.number(),
        DiferenciaPermanente: z.number(),
        SaldoImpuestoDiferidoActual: z.number(),
        SaldoImpuestoDiferidoAnterior: z.number(),
        Variacion: z.number(),
        TasaFiscalAplicada: z.number()
      }),
      BeneficiosAEmpleados: z.object({
        BaseContable: z.number(),
        BaseFiscal: z.number(),
        DiferenciaTemporaria: z.number(),
        DiferenciaPermanente: z.number(),
        SaldoImpuestoDiferidoActual: z.number(),
        SaldoImpuestoDiferidoAnterior: z.number(),
        Variacion: z.number(),
        TasaFiscalAplicada: z.number()
      }),
      Provisiones: z.object({
        BaseContable: z.number(),
        BaseFiscal: z.number(),
        DiferenciaTemporaria: z.number(),
        DiferenciaPermanente: z.number(),
        SaldoImpuestoDiferidoActual: z.number(),
        SaldoImpuestoDiferidoAnterior: z.number(),
        Variacion: z.number(),
        TasaFiscalAplicada: z.number()
      }),
      OtrosPasivosAnticiposYAvancesRecibidos: z.object({
        BaseContable: z.number(),
        BaseFiscal: z.number(),
        DiferenciaTemporaria: z.number(),
        DiferenciaPermanente: z.number(),
        SaldoImpuestoDiferidoActual: z.number(),
        SaldoImpuestoDiferidoAnterior: z.number(),
        Variacion: z.number(),
        TasaFiscalAplicada: z.number()
      }),
      OperacionesConTitulosYDerivados: z.object({
        BaseContable: z.number(),
        BaseFiscal: z.number(),
        DiferenciaTemporaria: z.number(),
        DiferenciaPermanente: z.number(),
        SaldoImpuestoDiferidoActual: z.number(),
        SaldoImpuestoDiferidoAnterior: z.number(),
        Variacion: z.number(),
        TasaFiscalAplicada: z.number()
      }),
      PerdidasFiscalesYExcesosDeRentaPresuntiva: z.object({
        BaseContable: z.number(),
        BaseFiscal: z.number(),
        DiferenciaTemporaria: z.number(),
        DiferenciaPermanente: z.number(),
        SaldoImpuestoDiferidoActual: z.number(),
        SaldoImpuestoDiferidoAnterior: z.number(),
        Variacion: z.number(),
        TasaFiscalAplicada: z.number()
      }),
      ActivosReconocidosSolamenteParaFinesFiscales: z.object({
        BaseContable: z.number(),
        BaseFiscal: z.number(),
        DiferenciaTemporaria: z.number(),
        DiferenciaPermanente: z.number(),
        SaldoImpuestoDiferidoActual: z.number(),
        SaldoImpuestoDiferidoAnterior: z.number(),
        Variacion: z.number(),
        TasaFiscalAplicada: z.number()
      }),
      OtrosActivos: z.object({
        BaseContable: z.number(),
        BaseFiscal: z.number(),
        DiferenciaTemporaria: z.number(),
        DiferenciaPermanente: z.number(),
        SaldoImpuestoDiferidoActual: z.number(),
        SaldoImpuestoDiferidoAnterior: z.number(),
        Variacion: z.number(),
        TasaFiscalAplicada: z.number()
      }),
      ValorTotal: z.object({
        BaseContable: z.number(),
        BaseFiscal: z.number(),
        DiferenciaTemporaria: z.number(),
        DiferenciaPermanente: z.number(),
        SaldoImpuestoDiferidoActual: z.number(),
        SaldoImpuestoDiferidoAnterior: z.number(),
        Variacion: z.number(),
        TasaFiscalAplicada: z.number()
      })
    })
  }),
  ActivosPorCreditosTributariosSaldosAfavorEImpuestosPagadosEnElEsterior: z.object(
    {
      SaldosAFavor: z.object({
        Saldo31VigenciaActual: z.number(),
        Saldo31VigenciaAnterior: z.number(),
        Variacion: z.number(),
        ExplicacionDeLaVariacion: z.object({
          ReduccionCompensacionApliacion: z.number(),
          CorreccionEnDeclaracionesAnterioresMayorValor: z.number(),
          CorreccionEnDeclaracionesAnterioresMenorValor: z.number(),
          AjustesContablesPorCorrecionesValorativasMayorValor: z.number(),
          AjustesContablesPorCorrecionesValorativasMenorValor: z.number()
        })
      }),
      ImpuestosPagadosEnELExterior: z.object({
        Saldo31VigenciaActual: z.number(),
        Saldo31VigenciaAnterior: z.number(),
        Variacion: z.number(),
        ExplicacionDeLaVariacion: z.object({
          ReduccionCompensacionApliacion: z.number(),
          CorreccionEnDeclaracionesAnterioresMayorValor: z.number(),
          CorreccionEnDeclaracionesAnterioresMenorValor: z.number(),
          AjustesContablesPorCorrecionesValorativasMayorValor: z.number(),
          AjustesContablesPorCorrecionesValorativasMenorValor: z.number()
        })
      })
    }
  ),
  DetalleCompensacionPerdidasFiscales: z.object({
    AñoAnterior: z.object({
      Anio: z.number(),
      perdidasFiscalesAcumuladasPorCompensarAlInicioDelPeriodo: z.number(),
      PerdidaFiscalGeneradaEnElPeriodo: z.number(),
      PerdidaFiscalCompensadaEnElPeriodo: z.number(),
      ValoresNoCompensadosPorCaducidad: z.number(),
      AjustesPorCorreccionDeLaDeclaracionMayorValor: z.number(),
      AjustesPorCorreccionDeLaDeclaracionMenorValor: z.number(),
      PerdidaFiscalAcumuladaPorCompensarAlFinalDelPeriodo: z.number(),
      SaldoActivoPorImpuestoDiferidoAlFinalDelPeriodo: z.number()
    }),
    AñoActual: z.object({
      Anio: z.number(),
      perdidasFiscalesAcumuladasPorCompensarAlInicioDelPeriodo: z.number(),
      PerdidaFiscalGeneradaEnElPeriodo: z.number(),
      PerdidaFiscalCompensadaEnElPeriodo: z.number(),
      ValoresNoCompensadosPorCaducidad: z.number(),
      AjustesPorCorreccionDeLaDeclaracionMayorValor: z.number(),
      AjustesPorCorreccionDeLaDeclaracionMenorValor: z.number(),
      PerdidaFiscalAcumuladaPorCompensarAlFinalDelPeriodo: z.number(),
      SaldoActivoPorImpuestoDiferidoAlFinalDelPeriodo: z.number()
    })
  }),
  DetalleDeLaCompensacionPorExcesoDeRentaPresuntiva: z.object({
    AñoAnterior: z.object({
      Anio: z.number(),
      ValorAcumuladoPorCompensarAlInicioDelPeriodo: z.number(),
      ValorGeneradoEnElPeriodo: z.number(),
      ValorCompensadoEnElPeriodo: z.number(),
      ValoresNoCompensadosPorCaducidad: z.number(),
      AjustesPorCorreccionDeLaDeclaracionMayorValor: z.number(),
      AjustesPorCorreccionDeLaDeclaracionMenorValor: z.number(),
      ValorAcumuladoPorCompensarAlFinalDelPeriodo: z.number(),
      SaldoActivoPorImpuestoDiferidoAlFinalDelPeriodo: z.number()
    }),
    AñoActual: z.object({
      Anio: z.number(),
      ValorAcumuladoPorCompensarAlInicioDelPeriodo: z.number(),
      ValorGeneradoEnElPeriodo: z.number(),
      ValorCompensadoEnElPeriodo: z.number(),
      ValoresNoCompensadosPorCaducidad: z.number(),
      AjustesPorCorreccionDeLaDeclaracionMayorValor: z.number(),
      AjustesPorCorreccionDeLaDeclaracionMenorValor: z.number(),
      ValorAcumuladoPorCompensarAlFinalDelPeriodo: z.number(),
      SaldoActivoPorImpuestoDiferidoAlFinalDelPeriodo: z.number()
    })
  })
})



