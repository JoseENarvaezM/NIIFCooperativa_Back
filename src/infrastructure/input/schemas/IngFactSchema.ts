import { z } from "zod";

export const IngresosFacturacionSchema = z.object({
  VentaDeBienes: z.object({
    PasivoPorIngresoDiferido: z.object({
      SaldoAlInicioDelPeriodo: z.number(),
      RegistradoComoIngresoContableEnElPeriodo: z.number(),
      GeneradoEnElPeriodo: z.number(),
      SaldoAlFinalDelPeriodo: z.number()
    }),
    FacturacionEmitidaEnElPeriodo: z.object({
      DevengadaComoIngresoEnPeriodosAnteriores: z.number(),
      DevengadaComoIngresosDelPeriodo: z.number(),
      RegistradaComoIngresoDiferido: z.number(),
      SoloFacturadoNoHaGeneradoIngresoNiPasivoDiferido: z.number(),
      ValorTotal: z.number()
    }),
    IngresoContableDevengadoEnElPeriodo: z.object({
      SinFacturar: z.number(),
      FacturadoPeriodosAnteriores: z.number(),
      ValorTotal: z.number()
    })
  }),
  PrestacionDeServicios: z.object({
    PasivoPorIngresoDiferido: z.object({
      SaldoAlInicioDelPeriodo: z.number(),
      RegistradoComoIngresoContableEnElPeriodo: z.number(),
      GeneradoEnElPeriodo: z.number(),
      SaldoAlFinalDelPeriodo: z.number()
    }),
    FacturacionEmitidaEnElPeriodo: z.object({
      DevengadaComoIngresoEnPeriodosAnteriores: z.number(),
      DevengadaComoIngresosDelPeriodo: z.number(),
      RegistradaComoIngresoDiferido: z.number(),
      SoloFacturadoNoHaGeneradoIngresoNiPasivoDiferido: z.number(),
      ValorTotal: z.number()
    }),
    IngresoContableDevengadoEnElPeriodo: z.object({
      SinFacturar: z.number(),
      FacturadoPeriodosAnteriores: z.number(),
      ValorTotal: z.number()
    })
  }),
  OtrosIngresos: z.object({
    PasivoPorIngresoDiferido: z.object({
      SaldoAlInicioDelPeriodo: z.number(),
      RegistradoComoIngresoContableEnElPeriodo: z.number(),
      GeneradoEnElPeriodo: z.number(),
      SaldoAlFinalDelPeriodo: z.number()
    }),
    FacturacionEmitidaEnElPeriodo: z.object({
      DevengadaComoIngresoEnPeriodosAnteriores: z.number(),
      DevengadaComoIngresosDelPeriodo: z.number(),
      RegistradaComoIngresoDiferido: z.number(),
      SoloFacturadoNoHaGeneradoIngresoNiPasivoDiferido: z.number(),
      ValorTotal: z.number()
    }),
    IngresoContableDevengadoEnElPeriodo: z.object({
      SinFacturar: z.number(),
      FacturadoPeriodosAnteriores: z.number(),
      ValorTotal: z.number()
    })
  }),
  IngresosParaTerceros: z.object({
    FacturacionEmitidaEnElPeriodo: z.object({
      DevengadaComoIngresoEnPeriodosAnteriores: z.number(),
      DevengadaComoIngresosDelPeriodo: z.number(),
      RegistradaComoIngresoDiferido: z.number(),
      SoloFacturadoNoHaGeneradoIngresoNiPasivoDiferido: z.number(),
      ValorTotal: z.number()
    }),
    IngresoContableDevengadoEnElPeriodo: z.object({ ValorTotal: z.number() })
  }),
  AjustesAlValorFacturadoDescuentosNotas: z.object({
    FacturacionEmitidaEnElPeriodo: z.object({
      DevengadaComoIngresoEnPeriodosAnteriores: z.number(),
      DevengadaComoIngresosDelPeriodo: z.number(),
      RegistradaComoIngresoDiferido: z.number(),
      SoloFacturadoNoHaGeneradoIngresoNiPasivoDiferido: z.number(),
      ValorTotal: z.number()
    }),
    IngresoContableDevengadoEnElPeriodo: z.object({
      SinFacturar: z.number(),
      FacturadoPeriodosAnteriores: z.number(),
      ValorTotal: z.number()
    })
  }),
  Total: z.object({
    PasivoPorIngresoDiferido: z.object({
      SaldoAlInicioDelPeriodo: z.number(),
      RegistradoComoIngresoContableEnElPeriodo: z.number(),
      GeneradoEnElPeriodo: z.number(),
      SaldoAlFinalDelPeriodo: z.number()
    }),
    FacturacionEmitidaEnElPeriodo: z.object({
      DevengadaComoIngresoEnPeriodosAnteriores: z.number(),
      DevengadaComoIngresosDelPeriodo: z.number(),
      RegistradaComoIngresoDiferido: z.number(),
      SoloFacturadoNoHaGeneradoIngresoNiPasivoDiferido: z.number(),
      ValorTotal: z.number()
    }),
    IngresoContableDevengadoEnElPeriodo: z.object({
      SinFacturar: z.number(),
      FacturadoPeriodosAnteriores: z.number(),
      ValorTotal: z.number()
    })
  })
})

