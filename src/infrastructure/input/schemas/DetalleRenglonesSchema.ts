import { z } from "zod";

export const DetalleRenglonesSchema = z.object({
  Renglon33: z.object({
    "510506Sueldos": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "510527AuxilioDeTransporte": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "510530Cesantias": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "510533InteresesSobreCesantias": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "510536PrimaDeServicios": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "510539Vacaciones": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "510548Bonificaciones": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "520506Sueldos": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "520518Comisiones": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "520527AuxilioDeTransporte": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "520530Cesantias": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "520533InteresesSobreCesantias": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "520536PrimaDeServicios": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "520539Vacaciones": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "520548Bonificaciones": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "720506Sueldos": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "720527AuxilioDeTransporte": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "720530Cesantias": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "720533InteresesSobreCesantias": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "720536PrimaDeServicios": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "720539Vacaciones": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "720548Bonificaciones": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    TotalCostosYGastosDeNominaSaldosContablesADiciembre31: z.number(),
    TotalCostosYGastosDeNominaSaldosFiscalesADiciembre31: z.number()
  }),
  Renglon34: z.object({
    "510568ARL": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "510569EPS": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "510570FondosPensiones": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "520568ARL": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "520569EPS": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "520570FondosPensiones": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "720568ARL": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "720569EPS": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "720570FondosPensiones": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    TotalAportesAlSistemaDeSeguridadSocialSaldosContablesADiciembre31: z.number(),
    TotalAportesAlSistemaDeSeguridadSocialSaldosFiscalesADiciembre31: z.number()
  }),
  Renglon35: z.object({
    "510572CajaComp": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "510575ICBF": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "510578SENA": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "520572CajaComp": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "520575ICBF": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "520578SENA": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "720572CajaComp": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "720575ICBF": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "720578SENA": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    TotalAportesAlSENAICBFCajaCompensacionSaldosContablesADiciembre31: z.number(),
    TotalAportesAlSENAICBFCajaCompensacionSaldosFiscalesADiciembre31: z.number()
  }),
  Renglon36: z.object({
    "1105CajaGeneral": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "1110Bancos": z.object({
      BancosMonedaNacional: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      BancosMonedaExtranjera: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      })
    }),
    "1115RemesasEnTransito": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "1120CuentasDeAhorro": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "1125Fondo": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "1140CertificadoDeDepositoATermino": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    TotalEfectivoYEquivalentesDeEfectivoSaldosContablesADiciembre31: z.number(),
    TotalEfectivoYEquivalentesDeEfectivoSaldosFiscalesADiciembre31: z.number()
  }),
  Renglon37: z.object({
    "1205InversionesEnAsociadasYSubsidiariasAccionesYAportesEnSociedades": z.object(
      {
        MedidasAlCosto: z.object({
          ValorDelCosto: z.object({
            SaldosContablesADiciembre31Parciales: z.number(),
            AjustesParaLlegarASaldosFiscales1: z.number(),
            AjustesParaLlegarASaldosFiscales2: z.string(),
            AjustesParaLlegarASaldosFiscales3: z.number(),
            SaldosFiscalesADiciembre31Parciales: z.number()
          }),
          DetrioroDelValor: z.object({
            SaldosContablesADiciembre31Parciales: z.number(),
            AjustesParaLlegarASaldosFiscales1: z.number(),
            AjustesParaLlegarASaldosFiscales2: z.string(),
            AjustesParaLlegarASaldosFiscales3: z.number(),
            SaldosFiscalesADiciembre31Parciales: z.number()
          })
        }),
        MedidasAlValorRazonableConCambiosEnResultados: z.object({
          ValorDeAdquisicion: z.object({
            SaldosContablesADiciembre31Parciales: z.number(),
            AjustesParaLlegarASaldosFiscales1: z.number(),
            AjustesParaLlegarASaldosFiscales2: z.string(),
            AjustesParaLlegarASaldosFiscales3: z.number(),
            SaldosFiscalesADiciembre31Parciales: z.number()
          }),
          EfectosPorMedicionesAlValorDeMercado: z.object({
            SaldosContablesADiciembre31Parciales: z.number(),
            AjustesParaLlegarASaldosFiscales1: z.number(),
            AjustesParaLlegarASaldosFiscales2: z.string(),
            AjustesParaLlegarASaldosFiscales3: z.number(),
            SaldosFiscalesADiciembre31Parciales: z.number()
          })
        }),
        MedidasAlValorRazonableConCambiosEnElORI: z.object({
          ValorDeAdquisicion: z.object({
            SaldosContablesADiciembre31Parciales: z.number(),
            AjustesParaLlegarASaldosFiscales1: z.number(),
            AjustesParaLlegarASaldosFiscales2: z.string(),
            AjustesParaLlegarASaldosFiscales3: z.number(),
            SaldosFiscalesADiciembre31Parciales: z.number()
          }),
          EfectosPorMedicionesAlValorDeMercado: z.object({
            SaldosContablesADiciembre31Parciales: z.number(),
            AjustesParaLlegarASaldosFiscales1: z.number(),
            AjustesParaLlegarASaldosFiscales2: z.string(),
            AjustesParaLlegarASaldosFiscales3: z.number(),
            SaldosFiscalesADiciembre31Parciales: z.number()
          })
        }),
        MedidasConMetodoDeParticipacion: z.object({
          ValorDeAdquisicion: z.object({
            SaldosContablesADiciembre31Parciales: z.number(),
            AjustesParaLlegarASaldosFiscales1: z.number(),
            AjustesParaLlegarASaldosFiscales2: z.string(),
            AjustesParaLlegarASaldosFiscales3: z.number(),
            SaldosFiscalesADiciembre31Parciales: z.number()
          }),
          EfectosDeAplicacionDelMetodoDeParticipacion: z.object({
            SaldosContablesADiciembre31Parciales: z.number(),
            AjustesParaLlegarASaldosFiscales1: z.number(),
            AjustesParaLlegarASaldosFiscales2: z.string(),
            AjustesParaLlegarASaldosFiscales3: z.number(),
            SaldosFiscalesADiciembre31Parciales: z.number()
          }),
          DetrioroDelValor: z.object({
            SaldosContablesADiciembre31Parciales: z.number(),
            AjustesParaLlegarASaldosFiscales1: z.number(),
            AjustesParaLlegarASaldosFiscales2: z.string(),
            AjustesParaLlegarASaldosFiscales3: z.number(),
            SaldosFiscalesADiciembre31Parciales: z.number()
          })
        })
      }
    ),
    "1210BonosYOtrosInstrumentosDeDeudaOPatrimonio": z.object({
      MedidasAlCosto: z.object({
        ValorDeAdquisicion: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        }),
        DetrioroDelValor: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        })
      }),
      MedidasAlValorRazonableConCambiosEnResultados: z.object({
        ValorDeAdquisicion: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        }),
        EfectosPorMedicionesAlValorDeMercado: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        })
      }),
      MedidasAlValorRazonableConCambiosEnElORI: z.object({
        ValorDeAdquisicion: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        }),
        EfectosPorMedicionesAlValorDeMercado: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        })
      })
    }),
    "1215InstrumentosFinancierosDerivadosConFinesDeNegociacion": z.object({
      MedidasAlCosto: z.object({
        ValorDeAdquisicion: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        }),
        DetrioroDelValor: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        })
      }),
      InstrumentosFinancierosDerivadosConFinesDeCobertura: z.object({
        MedidasAlCosto: z.object({
          ValorDeAdquisicion: z.object({
            SaldosContablesADiciembre31Parciales: z.number(),
            AjustesParaLlegarASaldosFiscales1: z.number(),
            AjustesParaLlegarASaldosFiscales2: z.string(),
            AjustesParaLlegarASaldosFiscales3: z.number(),
            SaldosFiscalesADiciembre31Parciales: z.number()
          }),
          DetrioroDelValor: z.object({
            SaldosContablesADiciembre31Parciales: z.number(),
            AjustesParaLlegarASaldosFiscales1: z.number(),
            AjustesParaLlegarASaldosFiscales2: z.string(),
            AjustesParaLlegarASaldosFiscales3: z.number(),
            SaldosFiscalesADiciembre31Parciales: z.number()
          })
        })
      })
    }),
    "1215DerechosFiduciarios": z.object({
      MedidasAlCosto: z.object({
        ValorDeAdquisicion: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        }),
        DetrioroDelValor: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        })
      })
    }),
    "1216DerechosDeRecompraDeInversiones": z.object({
      MedidasAlCosto: z.object({
        ValorDeAdquisicion: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        }),
        DetrioroDelValor: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        })
      })
    }),
    TotalInversionesEInstrumentosFinancierosDerivadosSaldosContablesADiciembre31: z.number(),
    TotalInversionesEInstrumentosFinancierosDerivadosSaldosFiscalesADiciembre31: z.number()
  }),
  Renglon38: z.object({
    "1305Clientes": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "1310ACompaniasVinculadas": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "1315CuentaPorCobrarACasaMatriz": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "1320CuentasPorCobrarAVinculadosEconomicos": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "1325CuentasPorCobrarASociosOAccionistas": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "1330AnticiposYAvances": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "1335Depositos": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "1340PromesasDeCompraventa": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "1345IngresosPorCobrar": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "1350RetencionesSebreContratos": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "1360Reclamaciones": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "1365CuentasPorCobrarATrabajadores": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "1380DeudoresVarios": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "1399DeterioroSobreClientesYOtrasCuentasQueSiTuvieronEnEsteAnioOEnLosAnterioresUnaContrapartidaEnElIngresoYSinIncluirLasCuentasPorCobrarQueSeamConVinculadosEconomicos": z.object(
      {
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }
    ),
    "1399DeterioroSobreLasDemasCtasPorCobrar": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    TotalCuentasDocumentosYArrendamientosFinancierosPorCobrarSaldosContablesADiciembre31: z.number(),
    TotalCuentasDocumentosYArrendamientosFinancierosPorCobrarSaldosFiscalesADiciembre31: z.number()
  }),
  Renglon39: z.object({
    "1405MateriasPrimas": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "1410ProductosEnProceso": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "1415ObrasDeConstriccionEnCurso": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "1430ProductosTerminados": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "1435MercanciasNoFabricadasPorLaEmpresa": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "1440BienesRaicesParaLaVenta": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "1455MaterialesRepuestosYAccesorios": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "1460EnvasesYEmpaques": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "1465InventariosEnTransito": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "1499DeterioroDeInventarios": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    TotalInventariosSaldosContablesADiciembre31: z.number(),
    TotalInventariosSaldosFiscalesADiciembre31: z.number()
  }),
  Renglon40: z.object({
    "1505AcuerdosDeConcesionModeloDelActivoIntangible": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "1507ActivosIntangiblesExploracionYEvaluacionDeRecursosMinerales": z.object(
      {
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }
    ),
    "1510MarcasPatentesYLicencias": z.object({
      REFSaldCont: z.number(),
      Ajust1: z.number(),
      Ajust2: z.string(),
      Ajust3: z.number(),
      REFSaldFisc: z.number()
    }),
    "1520OtrosActivosIntangibles": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "1558AmortizacionAcumulada": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "1569DeterioroDeIntangibles": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "1570PlusvaliaOGoodWill": z.object({
      PlusvaliaOGoodWill: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      AdquisicionDeEstablecimientoDeComercio: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      Fusiones: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      Escisiones: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      CompraDeAcciones: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      })
    }),
    "1578AmortizacionAcumuladaDeLaPlusvaliaOGoodWill": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "1579DeterioroAcumuladoDeLaPlusvaliaOGoodWill": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    TotalActivosIntangiblesSaldosContablesADiciembre31: z.number(),
    TotalActivosIntangiblesSaldosFiscalesADiciembre31: z.number()
  }),
  Renglon41: z.object({
    "1605AnimalesProductoresMedidosAlCosto": z.object({
      AnimalesProductoresMedidosAlCosto: z.object({
        ValorDelCosto: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        }),
        DepreciacionAcumulada: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        }),
        DeterioroAcumulado: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        })
      }),
      AnimalesProductoresMedidosAlValorRazonable: z.object({
        ValorDelCosto: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        }),
        Revaluaciones: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        })
      })
    }),
    "1610AnimalesConsumiblesMedidosAlCosto": z.object({
      AnimalesConsumiblesMedidosAlCosto: z.object({
        ValorDelCosto: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        }),
        DeterioroDeAnimalesConsumiblesMedidosAlCosto: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        })
      }),
      AnimalesConsumiblesMedidosAlValorRazonable: z.object({
        ValorDelCosto: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        }),
        Revaluaciones: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        })
      })
    }),
    "1615PlantasProductorasMedidasAlCosto": z.object({
      PlantasProductorasMedidasAlCosto: z.object({
        ValorDelCosto: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        }),
        DepreciacionAcumulada: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        }),
        DeterioroAcumulado: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        })
      }),
      PlantasProductorasMedidasAlValorRazonable: z.object({
        ValorDelCosto: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        }),
        Revaluaciones: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        })
      })
    }),
    "1620PlantasConsumiblesMedidosAlCosto": z.object({
      PlantasConsumiblesMedidosAlCosto: z.object({
        ValorDelCosto: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        }),
        DeterioroDeConsumiblesMedidosAlCosto: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        })
      }),
      PlantasConsumiblesMedidosAlValorRazonable: z.object({
        ValorDelCosto: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        }),
        Revaluaciones: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        })
      })
    }),
    TotalActivosBiologicosSaldosContablesADiciembre31: z.number(),
    TotalActivosBiologicosSaldosFiscalesADiciembre31: z.number()
  }),
  Renglon42: z.object({
    "1704Terrenos": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "1708ConstruccionesEnCurso": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "1716Edificaciones": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "1720MaquinariaYEquipo": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "1724EquipoDeOficinaMueblesYEnseres": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "1728EquipoDeComunicacionYComputo": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "1732EquipoMedicoYCientifico": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "1736EquipoDeHotelesYRestaurantes": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "1740FlotaYEquipoDeTransporte": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "1745BienesRecibidosEnLeasing": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "1768DepreciacionAcumulada": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "1769Deterioro": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "1779PropiedadesDeInversionTerrenos": z.object({
      ValorDelCosto: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      Revaluaciones: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      })
    }),
    "1780PropiedadesDeInversionEdificaciones": z.object({
      ValorDelCosto: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      Revaluaciones: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      })
    }),
    "1788PropDeInversiDepreciacionAcumulada": z.object({
      DelCosto: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      DeLasRevaluaciones: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      })
    }),
    "1789PropieDeInversDeterioAcumulado": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "1790ActivosNoCorrientesMantenidosParaLaVenta": z.object({
      ValorDelCosto: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      MenosDepreciacionesAcumuladas: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      MenosDeteroros: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      })
    }),
    TotalPropiedadesPlantaEquipoPropiedadesDeInversionANCMVSaldosContablesADiciembre31: z.number(),
    TotalPropiedadesPlantaEquipoPropiedadesDeInversionANCMVSaldosFiscalesADiciembre31: z.number()
  }),
  Renglon43: z.object({
    "1805AnticiposPorImpuestosCorrientes": z.object({
      AnticipoDelImpuestoDeRentaYDeSobretasa: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      RetencionesYAutorretencionesEnLaFuente: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      RetencionesDeIVA: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      RetencionesDeICA: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      SaldoAFavorRenta: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      SaldosAFavorIVA: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      SaldoAFavorICA: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      })
    }),
    "1810GastosPagadosPorAnticipado": z.object({
      Publicidad: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      PrimasDeSegunos: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      Arrendamientos: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      Otros: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      })
    }),
    "1850OtrosActivosPlanDeBeneficiosAEmpleados": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "1860ActivoPorImpuestoDiferido": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    CargosDiferidosEIntangiblesQueSoloSonFiscales: z.object({
      ValorDelCosto: z.object({
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscales: z.number()
      }),
      AmortizacionAcumulada: z.object({
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscales: z.number()
      })
    }),
    TotalOtrosActivosSaldosContablesADiciembre31: z.number(),
    TotalOtrosActivosSaldosFiscalesADiciembre31: z.number()
  }),
  Renglon44TotalPatrimonioBruto: z.object({
    TotalSaldosContablesADiciembre31: z.number(),
    TotalSaldosFiscalesADiciembre31: z.number()
  }),
  Renglon45: z.object({
    "2105BancosNacionales": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "2110BancosDelExterior": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "2115CorporacionesFinancieras": z.object({
      EnColombia: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      EnElExterior: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      })
    }),
    "2205ProveedoresNacionales": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "2210ProveedoresExterior": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "2335CostosYGastosPorPagar": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "2355DeudasConSociedadesDondeSeSocioOAccionista": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "2365RetencionEnLaFuente": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "2367RetencionDeIVA": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "2368RetencionDeIndustriaYComercio": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "2370RetencionesYAportesEnNomina": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "2404ImpuestoPorPagarDeRentaYComplementarios": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "2408ImpuestosSobreLasVentas": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "2412OtrosImpuestosPorPagar": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "2505SalariosPorPagar": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "2510CesantiasConsolidadas": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "2515InteresdeCesantias": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "2525VacacionesConsolidadas": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "2530PrestacionesExtralegales": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "2605ProvisionParaCostosYGastos": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "2705IngresosRecibidosPorAnticipado": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "2710AbonosDiferidos": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "2715UtilidadDiferidaEnVentasAPlazos": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "2805AnticiposYAvancesRecibidos": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "2810DepositosRecibidos": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "2815IngresosRecibidosParaTerceros": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "2816PasivoPorIngresoDiferido": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "2820CuentasDeOperacionConjunta": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "2825RetencionesATercerosContratos": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "2826PasivoPorImpuestoDiferido": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "2835AcreedoresDelSistema": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "2840CuentasEnParticipacion": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "2895Diversos": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    PasivosReconocidoSolamenteParaFinesFiscales: z.object({
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    TotalPasivosSaldosContablesADiciembre31: z.number(),
    TotalPasivosSaldosFiscalesADiciembre31: z.number()
  }),
  Renglon46: z.object({
    TotalPatrimonioLiquidoPositivoSaldosContablesADiciembre31: z.number(),
    TotalPatrimonioLiquidoPositivoSaldosFiscalesADiciembre31: z.number(),
    "3130CapitalDePersonasNaturales": z.object({
      SaldosContablesADiciembre31Parciales: z.number()
    }),
    "3605ResultadoDelEjercicio": z.object({
      UtilidadDespuesDeImpuestos: z.object({
        SaldosContablesADiciembre31Parciales: z.number()
      }),
      PerdidaDespuesDeImpuestos: z.object({
        SaldosContablesADiciembre31Parciales: z.number()
      })
    }),
    "3705UtilidadesDePeriodosAnteriores": z.object({
      SaldosContablesADiciembre31Parciales: z.number()
    }),
    "3710PerdidasDeEjerciciosAnteriores": z.object({
      SaldosContablesADiciembre31Parciales: z.number()
    }),
    "3715GananciasPerdidasAcumuladasORetenidasPorLaAdopcionPorPrimera": z.object(
      {
        GananciasAcumuladas: z.object({
          SaldosContablesADiciembre31Parciales: z.number()
        }),
        PerdidasAcumuladas: z.object({
          SaldosContablesADiciembre31Parciales: z.number()
        })
      }
    ),
    "3720OtroResultadoIntegralAcumulado": z.object({
      GananciasAcumuladasORI: z.object({
        SaldosContablesADiciembre31Parciales: z.number()
      }),
      PerdidasAcumuladasORI: z.object({
        SaldosContablesADiciembre31Parciales: z.number()
      })
    }),
    "3805Superavit": z.object({
      PorRevaluaciones: z.object({
        SaldosContablesADiciembre31Parciales: z.number()
      }),
      PorMetodoDeParticipacion: z.object({
        SaldosContablesADiciembre31Parciales: z.number()
      })
    })
  }),
  Renglon47: z.object({
    VentaDeBienes: z.object({
      AClientesNacionalesPorFueraDeZonaFranca: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      ExportacionesSinIncluirLasExportacionesATerritoriosOPaisesNoCooperantes: z.object(
        {
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        }
      ),
      AClientesEnZonasFrancasQueNoSeanVinculadosEconomicos: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      ASociedadesDeComercializacionInternacional: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      AClientesEnJurisdiccionesNoCooperantesPeroQueNoSeanVinculadosEconomicos: z.object(
        {
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        }
      ),
      AVinculadosEconomicosUbicadosEnZonaFrancaOUbicadosEnCualquierOtroPais: z.object(
        {
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        }
      )
    }),
    ServiciosGeneralesSinIncluirHonorariosProfesionales: z.object({
      AClientesNacionalesPorFueraDeZonaFranca: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      ExportacionesSinIncluirLasExportacionesATerritoriosOPaisesNoCooperantes: z.object(
        {
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        }
      ),
      AClientesEnZonasFrancasQueNoSeanVinculadosEconomicos: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      ASociedadesDeComercializacionInternacional: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      AClientesEnJurisdiccionesNoCooperantesPeroQueNoSeanVinculadosEconomicos: z.object(
        {
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        }
      ),
      AVinculadosEconomicosUbicadosEnZonaFrancaOUbicadosEnCualquierOtroPais: z.object(
        {
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        }
      )
    }),
    ServiciosDeConstruccion: z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    AcuerdosDeConcesionDeServicios: z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    ArrendamientosOperativos: z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    Regalias: z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    ComisionesRelacionesDeAgencia: z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    HonorariosProfesionales: z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    ActividadesDeSegurosYDeCapitalizacion: z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    LiberacionDeReservasEnContratosDeSegunos: z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    ComisionesBancariasCostosDeTransaccionEntreOtros: z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    OtrosIngresos: z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    TotalIngresosBrutosDeActividadesOrdinariasSaldosContablesADiciembre31: z.number(),
    TotalIngresosBrutosDeACtividadesOrdinariasSaldosFiscalesADiciembre31: z.number()
  }),
  Renglon48: z.object({
    "421005FinancierosIntereses": z.object({
      ArrendamientoFinancieroOMercantilLeasing: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      InteresesSectorFinanciero: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      InteresesPorPrestamosATercerosDiferentesAlSectorFinanciero: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      PorInstrumentosFinancierosMedidosACostoAmortizadoDistintoAPrestamos: z.object(
        {
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        }
      ),
      InteresesImplicitosTransaccionesDeFinanciacion: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      })
    }),
    "421020DiferenciaEnCambio": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "421021OtrosIngresosFinancieros": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    InteresesPresuntivosPorHacerPrestamosEnDineroALosSociosDeEstaSociedad: z.object(
      {
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }
    ),
    TotalIngresosFinancierosSaldosContablesADiciembre31: z.number(),
    TotalIngresosFinancierosSaldosFiscalesADiciembre31: z.number()
  }),
  Renglon49: z.object({
    RecibidosDeSociedadNacionalDelRegimenOrdinarioQueSiLlevaACaboLasMegainversionesDelArt235: z.object(
      {
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }
    ),
    RecibidosDeSociedadNacionalDelRegimenOrdinarioQueNoLlevaACaboLasMegainversionesDelArt235YQueNoEstaAcogidaAlRegimenDeSociedadesCHCDeLosArts894A898DelET: z.object(
      {
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }
    ),
    RecibidosDeSociedadNacionalDelRegimenOrdinarioQueNoLlevaACaboLasMegainversionesDelArt235PeroQueSiEstaAcogidaAlRegimenDeSociedadesCHCDeLosArts894A898DelET: z.object(
      {
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }
    ),
    RecibidosDeUnaSociedadNacionalDelRegimenSimple: z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    TotalDividentosOParticipacionesGananciaOcasionalSaldosContablesADiciembre31: z.number(),
    TotalDividentosOParticipacionesGananciaOcasionalSaldosFiscalesADiciembre31: z.number()
  }),
  Renglon50DividendosOParticipacionesDistribuidosPorEntidadesResidentesEnColombia: z.object(
    {
      TotalSaldosContablesADiciembre31Parciales: z.number(),
      TotalSaldosFiscalesADiciembre31Parciales: z.number()
    }
  ),
  Renglon51DividendosOParticipacionesGravadasAñoRecibidosPorSociedadesExtranjeras: z.object(
    {
      TotalSaldosContablesADiciembre31Parciales: z.number(),
      TotalSaldosFiscalesADiciembre31Parciales: z.number(),
      Detalles: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      })
    }
  ),
  Renglon52: z.object({
    RecibidosDeSociedadNacionalDelRegimenOrdinarioQueSiLlevaACaboLasMegainversionesDelArt235: z.object(
      {
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }
    ),
    RecibidosDeSociedadNacionalDelRegimenOrdinarioQueNoLlevaACaboLasMegainversionesDelArt235YQueNoEstaAcogidaAlRegimenDeSociedadesCHCDeLosArts894A898DelET: z.object(
      {
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }
    ),
    RecibidosDeSociedadNacionalDelRegimenOrdinarioQueNoLlevaACaboLasMegainversionesDelArt235PeroQueSiEstaAcogidaAlRegimenDeSociedadesCHCDeLosArts894A898DelET: z.object(
      {
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }
    ),
    RecibidosDeUnaSociedadNacionalDelRegimenSimple: z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    TotalDividendosYParticipacionesGravadasPorPersonasNaturalesSaldosContablesADiciembre3152: z.number(),
    TotalDividendosYParticipacionesGravadasPorPersonasNaturalesSaldosFiscalesADiciembre3152: z.number()
  }),
  Renglon53: z.object({
    RecibidosDeSociedadNacionalDelRegimenOrdinarioQueNoLlevaACaboLasMegainversionesDelArt235YQueNoEstaAcogidaAlRegimenDeSociedadesCHCDeLosArts894A898DelET: z.object(
      {
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }
    ),
    RecibidosDeSociedadNacionalDelRegimenOrdinarioQueNoLlevaACaboLasMegainversionesDelArt235PeroQueSiEstaAcogidaAlRegimenDeSociedadesCHCDeLosArts894A898DelET: z.object(
      {
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }
    ),
    RecibidosDeUnaSociedadNacionalDelRegimenSimple: z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    Total53SaldosContablesADiciembre31: z.number(),
    Total53SaldosFiscalesADiciembre31: z.number()
  }),
  Renglon54: z.object({
    RecibidosDeSociedadNacionalDelRegimenOrdinarioQueNoLlevaACaboLasMegainversionesDelArt235YQueNoEstaAcogidaAlRegimenDeSociedadesCHCDeLosArts894A898DelET: z.object(
      {
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }
    ),
    RecibidosDeSociedadNacionalDelRegimenOrdinarioQueNoLlevaACaboLasMegainversionesDelArt235PeroQueSiEstaAcogidaAlRegimenDeSociedadesCHCDeLosArts894A898DelET: z.object(
      {
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }
    ),
    RecSocNacSim54: z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    Total54SaldosContablesADiciembre31: z.number(),
    Total54SaldosFiscalesADiciembre31: z.number()
  }),
  Renglon55: z.object({
    TotalSaldosContablesADiciembre31Parciales: z.number(),
    TotalSaldosFiscalesADiciembre31Parciales: z.number()
  }),
  Renglon56: z.object({
    Total56SaldosContablesADiciembre31: z.number(),
    Total56SaldosFiscalesADiciembre31: z.number(),
    RecibidosDeSociedadNacionalDelRegimenOrdinarioQueSiLlevaACaboLasMegainversionesDelArt235: z.object(
      {
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }
    )
  }),
  Renglon57: z.object({
    "4245UtilidadEnVentaDeActivoFijo": z.object({
      PorVentasDeActivosPoseidosMenosDe2Anios: z.object({
        PropiedadesPlantaYEquipo: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        }),
        PropiedadesDeInversion: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        }),
        ActivosBiologicosSinPlantasProductoras: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        }),
        ActivosNoCorrientesMantenidosParaLaVentaEntregarAPropietarios: z.object(
          {
            SaldosContablesADiciembre31Parciales: z.number(),
            AjustesParaLlegarASaldosFiscales1: z.number(),
            AjustesParaLlegarASaldosFiscales2: z.string(),
            AjustesParaLlegarASaldosFiscales3: z.number(),
            SaldosFiscalesADiciembre31Parciales: z.number()
          }
        ),
        ActivosIntangibles: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        }),
        InversionesEnAccionesYOtrasParticipaciones: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        }),
        PorDisposicionDeOtrosInstrumentosFinancieros: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        }),
        Otros: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        })
      }),
      PorVentasDeActivosPoseidosMasDe2Anios: z.object({
        PropiedadesPlantaYEquipo: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        }),
        PropiedadesDeInversion: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        }),
        ActivosBiologicosSinPlantasProductoras: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        }),
        ActivosNoCorrientesMantenidosParaLaVentaEntregarAPropietarios: z.object(
          {
            SaldosContablesADiciembre31Parciales: z.number(),
            AjustesParaLlegarASaldosFiscales1: z.number(),
            AjustesParaLlegarASaldosFiscales2: z.string(),
            AjustesParaLlegarASaldosFiscales3: z.number(),
            SaldosFiscalesADiciembre31Parciales: z.number()
          }
        ),
        ActivosIntangibles: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        }),
        InversionesEnAccionesYOtrasParticipaciones: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        }),
        PorDisposicionDeOtrosInstrumentosFinancieros: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        }),
        Otros: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        })
      })
    }),
    "4265IngresosDeEjerciciosAnteriores": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "425035ReversionDeDeterioroDeValor": z.object({
      Inventarios: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      PropiedadesPlantaYEquipo: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      ActivosIntangibles: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      ActivosDeExploracionYEvaluacionDeRecursosMinerales: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      PropiedadesDeInversionMedidasAlModeloDeCosto: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      ActivosNoCorrientesMantenidosParaLaVentaEntregarAPropietarios: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      ActivosBiologicosMedidosAlModeloDeCosto: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      BienesDeArteYCultura: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      ActivosFinancierosDiferentesACarteraDeCredito: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      CarteraDeCreditoYOperacionesDeLeasing: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      OtrasInversionesMedidasAlCostoOElMetodoDeLaParticipacion: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      OtrosDeterioros: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      })
    }),
    "425036ReversionDeProvisionesMontoOFechaInciertos": z.object({
      Garantias: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      ContratosOnerosos: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      Litigios: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      ReembolsosAClientes: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      ReestructuracionesDeNegocios: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      PasivosContingentesAsumidosEnUnaCombinacionDeNegocios: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      Otros: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      })
    }),
    "425037ReversionDePasivosPorBeneficiosALosEmpleados": z.object({
      BeneficiosDeCortoPlayaz: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      BeneficiosDeLargoPlaazo: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      BeneficiosAEmpleadosPorTerminacionDelVinculoLaboral: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      BeneficiosAEmpleadosPostEmpleo: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      })
    }),
    "425050ReintegrodeOtrosCostosYGastos": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "4255Indemnizaciones": z.object({
      ReembolsosDeCompaniasDeSegros: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      OtrasIndemnizaciones: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      })
    }),
    "4295Diversos": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "429501GananciasPorAplicacionMetodoDeParticipacion": z.object({
      GananciasPorAplicacionMetodoDeParticipacion: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      GananciasPorCambiosEnElValorRazonableDeActivos: z.object({
        DeInversionesEnAsociadasSubsidiariasYNegociosConjuntos: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        }),
        DeActivosBiologicos: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        }),
        DePropiedadesDeInversion: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        }),
        DeInstrumentosFinancierosDiferenteAInversiones: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        }),
        DeInstrumentosDerivados: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        }),
        DeOtrosActivos: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        })
      })
    }),
    "429502TransferenciasSubvencionesYAyudasGubernamentales": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "429503DonacionesAportacionesYSimilares": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "429506OtrasReversionesORecuperaciones": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "429507Otros": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "429543LoteriasRifasYSimilares": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    TotalOtrosIngresosSaldosContablesADiciembre31: z.number(),
    TotalOtrosIngresosSaldosFiscalesADiciembre31: z.number()
  }),
  Renglon58: z.object({
    TotalIngresosBrutosSaldosContablesADiciembre31: z.number(),
    TotalIngresosBrutosSaldosFiscalesADiciembre31: z.number()
  }),
  Renglon59: z.object({
    "4175DevolucionesYRebajasEnVentas": z.object({
      EnVentaDeBienes: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      EnPrestacionDeServicios: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      OtrasDevolucionesRebajasYDescuentos: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
    }),

      TotalMenosDevolucionesDescuentosRebajasSaldosContablesADiciembre31: z.number(),
      TotalMenosDevolucionesDescuentosRebajasSaldosFiscalesADiciembre31: z.number()
  }),
  Renglon60: z.object({
    DiviNoGrav: z.object({
      AjustesParaLlegarASaldosFiscales1: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    AprtObl: z.object({
      AjustesParaLlegarASaldosFiscales1: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    AprtVol: z.object({
      AjustesParaLlegarASaldosFiscales1: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    UtilEnaj: z.object({
      AjustesParaLlegarASaldosFiscales1: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    ValCap: z.object({
      AjustesParaLlegarASaldosFiscales1: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    Indem60: z.object({
      AjustesParaLlegarASaldosFiscales1: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    Recom60: z.object({
      AjustesParaLlegarASaldosFiscales1: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    Ganan60: z.object({
      AjustesParaLlegarASaldosFiscales1: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    SubsAgro: z.object({
      AjustesParaLlegarASaldosFiscales1: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    TotalIngresosNoConstituidosDeRentaNiGananciaOcasionalSaldosFiscalesADiciembre31: z.number()
  }),
  Renglon61: z.object({
    TotalIngresosNetosSaldosContablesADiciembre31: z.number(),
    TotalIngresosNetosSaldosFiscalesADiciembre31: z.number()
  }),
  Renglon62: z.object({
    "61CostosDeLasMercanciasFabricadasYVendidas": z.object({
      InventarioInicialDeTrabajoEnProceso: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      InventarioInicialDeMateriaPrimas: z.object({
        InventarioInicialDeMateriaPrimas: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        }),
        MasComprasLocales: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        }),
        MasImportaciones: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        }),
        MenosInventarioFinalMateriasPrimas: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        })
      }),
      MasCostoDeManoDeObra: z.object({
        DeCortoPlayzo: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        }),
        DeLargoPlayzo: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        }),
        PorTerminacionDelVinculoLaboral: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        }),
        PostEmpleo: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        })
      }),
      MasCostosIndirectosDeFabricacion: z.object({
        DepreciacionPropiedadesPlantaYEquipo: z.object({
          DelCosto: z.object({
            SaldosContablesADiciembre31Parciales: z.number(),
            AjustesParaLlegarASaldosFiscales1: z.number(),
            AjustesParaLlegarASaldosFiscales2: z.string(),
            AjustesParaLlegarASaldosFiscales3: z.number(),
            SaldosFiscalesADiciembre31Parciales: z.number()
          }),
          DelAjusteAcumuladoPorRevaluacionesOReExpresiones: z.object({
            SaldosContablesADiciembre31Parciales: z.number(),
            AjustesParaLlegarASaldosFiscales1: z.number(),
            AjustesParaLlegarASaldosFiscales2: z.string(),
            AjustesParaLlegarASaldosFiscales3: z.number(),
            SaldosFiscalesADiciembre31Parciales: z.number()
          })
        }),
        DepreciacionDePropiedadesDeInversion: z.object({
          Cost: z.object({
            SaldosContablesADiciembre31Parciales: z.number(),
            AjustesParaLlegarASaldosFiscales1: z.number(),
            AjustesParaLlegarASaldosFiscales2: z.string(),
            AjustesParaLlegarASaldosFiscales3: z.number(),
            SaldosFiscalesADiciembre31Parciales: z.number()
          }),
          AjusAcum: z.object({
            SaldosContablesADiciembre31Parciales: z.number(),
            AjustesParaLlegarASaldosFiscales1: z.number(),
            AjustesParaLlegarASaldosFiscales2: z.string(),
            AjustesParaLlegarASaldosFiscales3: z.number(),
            SaldosFiscalesADiciembre31Parciales: z.number()
          })
        }),
        DeprActBio: z.object({
          DelCosto: z.object({
            SaldosContablesADiciembre31Parciales: z.number(),
            AjustesParaLlegarASaldosFiscales1: z.number(),
            AjustesParaLlegarASaldosFiscales2: z.string(),
            AjustesParaLlegarASaldosFiscales3: z.number(),
            SaldosFiscalesADiciembre31Parciales: z.number()
          }),
          DelAjusteAcumuladoPorRevaluacionesOReExpresiones: z.object({
            SaldosContablesADiciembre31Parciales: z.number(),
            AjustesParaLlegarASaldosFiscales1: z.number(),
            AjustesParaLlegarASaldosFiscales2: z.string(),
            AjustesParaLlegarASaldosFiscales3: z.number(),
            SaldosFiscalesADiciembre31Parciales: z.number()
          })
        }),
        AmortizacionDeActivosIntangibles: z.object({
          DelCosto: z.object({
            SaldosContablesADiciembre31Parciales: z.number(),
            AjustesParaLlegarASaldosFiscales1: z.number(),
            AjustesParaLlegarASaldosFiscales2: z.string(),
            AjustesParaLlegarASaldosFiscales3: z.number(),
            SaldosFiscalesADiciembre31Parciales: z.number()
          }),
          DelAjusteAcumuladoPorRevaluacionesOReExpresiones: z.object({
            SaldosContablesADiciembre31Parciales: z.number(),
            AjustesParaLlegarASaldosFiscales1: z.number(),
            AjustesParaLlegarASaldosFiscales2: z.string(),
            AjustesParaLlegarASaldosFiscales3: z.number(),
            SaldosFiscalesADiciembre31Parciales: z.number()
          })
        }),
        OtrasDepreciacionesYAmortizaciones: z.object({
          DelCosto: z.object({
            SaldosContablesADiciembre31Parciales: z.number(),
            AjustesParaLlegarASaldosFiscales1: z.number(),
            AjustesParaLlegarASaldosFiscales2: z.string(),
            AjustesParaLlegarASaldosFiscales3: z.number(),
            SaldosFiscalesADiciembre31Parciales: z.number()
          }),
          DelAjusteAcumuladoPorRevaluacionesOReExpresiones: z.object({
            SaldosContablesADiciembre31Parciales: z.number(),
            AjustesParaLlegarASaldosFiscales1: z.number(),
            AjustesParaLlegarASaldosFiscales2: z.string(),
            AjustesParaLlegarASaldosFiscales3: z.number(),
            SaldosFiscalesADiciembre31Parciales: z.number()
          })
        })
      }),
      AmortizacionDeGastosPagadosPorAnticipado: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      Deterioros: z.object({
        DeInventarios: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        }),
        DePropiedadesPlantaYEquipo: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        }),
        DeActivosIntangibles: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        }),
        DeActivosDeExploracionYEvaluacionDeRecursosMinerales: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        }),
        DePropiedadesDeInversionMedidasAlModeloDeCosto: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        }),
        DeActivosNoCorrientesMantenidosParaLaVentaDistribuirALosPropietarios: z.object(
          {
            SaldosContablesADiciembre31Parciales: z.number(),
            AjustesParaLlegarASaldosFiscales1: z.number(),
            AjustesParaLlegarASaldosFiscales2: z.string(),
            AjustesParaLlegarASaldosFiscales3: z.number(),
            SaldosFiscalesADiciembre31Parciales: z.number()
          }
        ),
        DeActivosBiologicosMedidosAlModeloDeCosto: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        }),
        DeBienesDeArteYCulturaMedidosAlModeloDeCosto: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        }),
        DeActivosFinancierosDiferentesACarteraDeCredito: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        }),
        DeCarteraDeCreditoYOperacionesDeLeasing: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        }),
        DeOtrasInversionesMedidasAlCostoOPorElMetodoDeLaParticipacion: z.object(
          {
            SaldosContablesADiciembre31Parciales: z.number(),
            AjustesParaLlegarASaldosFiscales1: z.number(),
            AjustesParaLlegarASaldosFiscales2: z.string(),
            AjustesParaLlegarASaldosFiscales3: z.number(),
            SaldosFiscalesADiciembre31Parciales: z.number()
          }
        ),
        DeDerechosDeUsoEnArrendamientosOperativos: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        }),
        DeOtrosActivos: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        })
      }),
      OtrosCostos: z.object({
        Arrendamientos: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        }),
        Seguros: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        }),
        Servicios: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        }),
        Honorarios: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        })
      }),
      ServiciosTecnicos: z.object({
        ConVinculadosEconomicos: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        }),
        ConJurisdiccionesNoCooperantesDeBajaONulaImposicion: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        }),
        ConNoVinculados: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        })
      }),
      AsistenciaTecnica: z.object({
        ConVinculadosEconomicos: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        }),
        ConJurisdiccionesNoCooperantesDeBajaONulaImposicion: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        }),
        ConNoVinculados: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        }),
        Otros: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        }),
        MenosInventarioFinalDeTrabajoEnProceso: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        }),
        MasInventarioInicialDeProductoTerminado: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        }),
        MasCostoDeFabricacionDelPeriodo: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        }),
        MenosInventarioFinalDeProductoTerminado: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        })
      }),
      CostoDeVentasParaComerciasntesQueUtilizanJuegoDeInventarios: z.object({
        InventarioInicial: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        }),
        MasComprasLocales: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        }),
        MasImportaciones: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        }),
        MenosInventarioFinal: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        })
      }),
      CostoDeVentasParaComerciantesQueUtilizanSistemaPermanente: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      })
    }),
    "6140CostoDeLasActividadesQueFormanLasRentasExentas": z.object({
      CostoDeLasActividadesQueFormanLasRentasExentas: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      CostoFiscalDeActivosFijosOBiologicosVendidosYPoseidosMenosDeDosAnios: z.object(
        {
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        }
      )
    }),
    TotalCostosSaldosContablesADiciembre31: z.number(),
    TotalCostosSaldosFiscalesADiciembre31: z.number()
  }),
  Renglon63: z.object({
    "5105BeneficiosAEmpleadosDeCortoPlayzo": z.object({
      SalariosYOtros: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      AportesAEPS: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      AportesAARL: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      AportesAFondosDePensiones: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      AportesAlSENA: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      AportesAlICBF: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      AportesACajasDeCompensacion: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      })
    }),
    "5110Honorarios": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "5115ImpuestosAlPatrimonioIndustriaYComercio": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "5120Arrendamientos": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "5125Contribuciones": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "5130Seguros": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "5135Servicios": z.object({
      ServiciosAdministrativosConVinculadosEconomicos: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      ServiciosAdministrativosConTercerosUbicadosEnJurisdiccionesNoCooperantes: z.object(
        {
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        }
      ),
      ServiciosAdministrativosConNoVinculados: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      AsistenciaTecnicaConVinculadosEconomicos: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      AsistenciaTecnicaConTercerosUbicadosEnJurisdiccionesNoCooperantes: z.object(
        {
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        }
      ),
      AsistenciaTecnicaConNoVinculados: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      OtrosServicios: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      })
    }),
    "5136Regalias": z.object({
      ConVinculadosEconomicos: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      ConTercerosUbicadosEnJurisdiccionesNoCooperantes: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      ConNoVinculados: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      })
    }),
    "5137GastosDeInvestigacion": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "5140GastosLegales": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "5145MantenimientoYReparacion": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "5150AdecuacionesEInstalaciones": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "5155GastosDeTransportes": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "5160Depreciaciones": z.object({
      DepreciacionPropiedadesPlantaYEquipo: z.object({
        DelCosto: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        }),
        DelAjusteAcumuladoPorRevaluacionesOReExpresiones: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        })
      }),
      DepreciacionDePropiedadesDeInversion: z.object({
        DelCosto: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        }),
        DelAjusteAcumuladoPorRevaluacionesOReExpresiones: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        })
      }),
      DepreciacionDeOtrosActivos: z.object({
        DelCosto: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        }),
        DelAjusteAcumuladoPorRevaluacionesOReExpresiones: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        })
      })
    }),
    "5165AmortizacionDeGastosPagadosPorAnticipado": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "5166AmortizacionDeActivosIntangibles": z.object({
      AmortizacionDeActivosIntangibles: z.object({
        DelCosto: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        }),
        DelAjusteAcumuladoPorRevaluacionesOReExpresiones: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        })
      }),
      OtrasAmortizaciones: z.object({
        DelCosto: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        }),
        DelAjusteAcumuladoPorRevaluacionesOReExpresiones: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        })
      })
    }),
    "5195Diversos": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "5199Deterioros": z.object({
      Inventarios: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      PropiedadesPlantaYEquipo: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      ActivosIntangibles: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      ActivosDeExploracionYEvaluacionDeRecursosMinerales: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      PropiedadesDeInversionMedidasAlModeloDeCosto: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      ActivosNoCorrientesMantenidosParaLaVentaDistribuirALosPropietarios: z.object(
        {
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        }
      ),
      BienesDeArteYCulturaMedidosAlModeloDeCosto: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      ActivosBiologicosMedidosAlModeloDeCosto: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      ActivosFinancierosDiferentesACarteraDeCredito: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      CarteraDeCreditoYOperacionesDeLeasing: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      OtrasInversionesMedidasAlCostoOPorElMetodoDeLaParticipacion: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      DerechosDeUsoEnArrendamientosOperativos: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      OtrosDeteriors: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      })
    }),
    TotalGastosDeAdministracionSaldosContablesADiciembre31: z.number(),
    TotalGastosDeAdministracionSaldosFiscalesADiciembre31: z.number()
  }),
  Renglon64: z.object({
    "5205BeneficiosALosEmpleadosCortoPlayzo": z.object({
      SalariosYOtros: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      AportesAEPS: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      AportesAARL: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      AportesAFondosDePensiones: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      AportesAlSENA: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      AportesAlICBF: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      AportesACajasDeCompensacion: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      })
    }),
    "5210Honorarios": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "5215ImpuestosAlPatrimonioIndustriaYComercio": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "521501IVAEnLaAdquisicionOImportacionDeBienesDeCapitalMedianteLeasing": z.object(
      {
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }
    ),
    "5220Arrendamientos": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "5225Contribuciones": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "5230Seguros": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "5235Servicios": z.object({
      ServiciosAdministrativosConVinculadosEconomicos: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      ServiciosAdministrativosConTercerosUbicadosEnJurisdiccionesNoCooperantes: z.object(
        {
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        }
      ),
      ServiciosAdministrativosConNoVinculados: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      AsistenciaTecnicaConVinculadosEconomicos: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      AsistenciaTecnicaConTercerosUbicadosEnJurisdiccionesNoCooperantes: z.object(
        {
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        }
      ),
      AsistenciaTecnicaConNoVinculados: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      OtrosServicios: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      })
    }),
    "5236Regalias": z.object({
      ConVinculadosEconomicos: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      ConTercerosUbicadosEnJurisdiccionesNoCooperantes: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      ConNoVinculados: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      })
    }),
    "5237ConstitucionDeReservasEmpresasAseguradoras": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "5238LiquidacionDeSiniestros": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "5239PrimasDeReaseguros": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "5240GastosLegales": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "5241InvestigacionYDesarrollo": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "5245MantenimientoYReparacion": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "5250AdecuacionesEInstalaciones": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "5255GastosDeTransportes": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "5260Depreciaciones": z.object({
      DepreciacionPropiedadesPlantaYEquipo: z.object({
        DelCosto: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        }),
        DelAjusteAcumuladoPorRevaluacionesOReExpresiones: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        })
      }),
      DepreciacionDePropiedadesDeInversion: z.object({
        DelCosto: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        }),
        DelAjusteAcumuladoPorRevaluacionesOReExpresiones: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        })
      }),
      DepreciacionDeOtrosActivos: z.object({
        DelCosto: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        }),
        DelAjusteAcumuladoPorRevaluacionesOReExpresiones: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        })
      }),
      DepreciacionDeActivosBiologicos: z.object({
        DelCosto: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        }),
        DelAjusteAcumuladoPorRevaluacionesOReExpresiones: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        })
      })
    }),
    "5265AmortizacionDeGastosPagadosPorAnticipado": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "5266AmortizacionDeActivosIntangibles": z.object({
      AmortizacionDeActivosIntangibles: z.object({
        DelCosto: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        }),
        DelAjusteAcumuladoPorRevaluacionesOReExpresiones: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        })
      }),
      OtrasAmortizaciones: z.object({
        DelCosto: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        }),
        DelAjusteAcumuladoPorRevaluacionesOReExpresiones: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        })
      })
    }),
    "5295Diversos": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "5299Deterioros": z.object({
      Inventarios: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      PropiedadesPlantaYEquipo: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      ActivosIntangibles: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      ActivosDeExploracionYEvaluacionDeRecursosMinerales: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      PropiedadesDeInversionMedidasAlModeloDeCosto: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      ActivosNoCorrientesMantenidosParaLaVentaDistribuirALosPropietarios: z.object(
        {
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        }
      ),
      BienesDeArteYCulturaMedidosAlModeloDeCosto: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      ActivosBiologicosMedidosAlModeloDeCosto: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      ActivosFinancierosDiferentesACarteraDeCredito: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      CarteraDeCreditoYOperacionesDeLeasing: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      OtrasInversionesMedidasAlCostoOPorElMetodoDeLaParticipacion: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      DerechosDeUsoEnArrendamientosOperativos: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      OtrosDeteriors: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      })
    }),
    TotalGastosDeDistribucionYVentasSaldosContablesADiciembre31: z.number(),
    TotalGastosDeDistribucionYVentasSaldosFiscalesADiciembre31: z.number()
  }),
  Renglon65: z.object({
    5305: z.object({
      IntDevSecFin: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      IntDevPrestTer: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      InstFin: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      CstTrans: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      DifCamb: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      IntImpl: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      ActProvRecValPres: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      IntAccPref: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      Otro: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      IntDIANSegSoc: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      })
    }),
    TotalesSaldosContablesADiciembre31: z.number(),
    TotalesSaldosFiscalesADiciembre31: z.number()
  }),
  Renglon66: z.object({
    "5310PerdidaEnVentaYRetiroDeBienesPoseidosMenosDeDosAnios": z.object({
      PerdidaEnVentaYRetiroDeBienesPoseidosMenosDeDosAnios: z.object({
        DePropiedadesPlantaYEquipo: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        }),
        DePropiedadesDeInversion: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        }),
        DeActivosNoCorrientesMantenidosParaLaVentaEntregarAPropietarios: z.object(
          {
            SaldosContablesADiciembre31Parciales: z.number(),
            AjustesParaLlegarASaldosFiscales1: z.number(),
            AjustesParaLlegarASaldosFiscales2: z.string(),
            AjustesParaLlegarASaldosFiscales3: z.number(),
            SaldosFiscalesADiciembre31Parciales: z.number()
          }
        ),
        DeValoracionYVentaDeInversionesFondoDeLiquidezYTitulosParticipativos: z.object(
          {
            SaldosContablesADiciembre31Parciales: z.number(),
            AjustesParaLlegarASaldosFiscales1: z.number(),
            AjustesParaLlegarASaldosFiscales2: z.string(),
            AjustesParaLlegarASaldosFiscales3: z.number(),
            SaldosFiscalesADiciembre31Parciales: z.number()
          }
        ),
        DePorDisposicionDeOtrosInstrumentosFinancieros: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        }),
        DeActivosIntangibles: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        }),
        DeInversionesEnAccionesYOtrasParticipaciones: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        }),
        DeOtrosActivos: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        })
      }),
      PerdidaEnVentaYRetiroDeBienesPoseidosMasDeDosAnios: z.object({
        DePropiedadesPlantaYEquipo: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        }),
        DePropiedadesDeInversion: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        }),
        DeActivosNoCorrientesMantenidosParaLaVentaEntregarAPropietarios: z.object(
          {
            SaldosContablesADiciembre31Parciales: z.number(),
            AjustesParaLlegarASaldosFiscales1: z.number(),
            AjustesParaLlegarASaldosFiscales2: z.string(),
            AjustesParaLlegarASaldosFiscales3: z.number(),
            SaldosFiscalesADiciembre31Parciales: z.number()
          }
        ),
        DeValoracionYVentaDeInversionesFondoDeLiquidezYTitulosParticipativos: z.object(
          {
            SaldosContablesADiciembre31Parciales: z.number(),
            AjustesParaLlegarASaldosFiscales1: z.number(),
            AjustesParaLlegarASaldosFiscales2: z.string(),
            AjustesParaLlegarASaldosFiscales3: z.number(),
            SaldosFiscalesADiciembre31Parciales: z.number()
          }
        ),
        DePorDisposicionDeOtrosInstrumentosFinancieros: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        }),
        DeActivosIntangibles: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        }),
        DeInversionesEnAccionesYOtrasParticipaciones: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        }),
        DeOtrosActivos: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        }),
        DescuentoEnOperacionesDeFactoring: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        })
      })
    }),
    "5313PerdidaPorInversionesEnSubsidiariasAsociadasYONegociosConjuntos": z.object(
      {
        PerdidasPorElMetodoDeParticipacion: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        }),
        PerdidasPorMedicionAValorRazonable: z.object({
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        })
      }
    ),
    "5314PerdidasPorMedicionesAValorRazonable": z.object({
      DeActivosBiologicos: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      DePropiedadesDeInversion: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      DeInstrumentosFinancieros: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      DeInstrumentosDerivados: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      DeOtrasActivos: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      })
    }),
    "5315GastosPorProvisionesPasivosDeMontoOFechaInciertos": z.object({
      Garantias: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      ContratosOnerosos: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      Litigios: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      ReembolsosAClientes: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      ReestNeg: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      PasivosContingentesAsumidosEnUnaCombinacionDeNegocios: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      Otros: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      })
    }),
    "5316GastosExtraordinarios": z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    "5395GastosDiversos": z.object({
      TransferenciasSubvencionesYAyudasGubernamentales: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      Donaciones: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      Otros: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      DeduccionPorInversionEnEspectaculosPublicos: z.object({
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      DeduccionPorInversionEnActivosFijosProductoresDeRenta: z.object({
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales2: z.string(),
        AjustesParaLlegarASaldosFiscales3: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      })
    }),
    TotalOtrosGastosYDeduccionesSaldosContablesADiciembre31: z.number(),
    TotalOtrosGastosYDeduccionesSaldosFiscalesADiciembre31: z.number()
  }),
  Renglon67: z.object({
    TotalCostosYGastosDeduciblesSaldosContablesADiciembre31: z.number(),
    TotalCostosYGastosDeduciblesSaldosFiscalesADiciembre31: z.number()
  }),
  Renglon68: z.object({
    SaldosContablesADiciembre31Parciales: z.number(),
    SaldosFiscalesADiciembre31Parciales: z.number(),
    SaldosFiscalesADiciembre31Totales: z.number() //fix
  }),
  Renglon69: z.object({
    SaldosContablesADiciembre31Parciales: z.number(),
    SaldosFiscalesADiciembre31Parciales: z.number(),
    SaldosFiscalesADiciembre31Totales: z.number() //fix
  }),
  Renglon70: z.object({
    IndmnCompAseg: z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    RecCuen: z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    RecDepre: z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    TotalRentaPorRecuperacionDeDeduccionesSaldosContablesADiciembre31: z.number(),
    TotalRentaPorRecuperacionDeDeduccionesSaldosFiscalesADiciembre31: z.number()
  }),
  Renglon71ValorIngresosBrutosQueCorresponden: z.object({
    SaldosContablesADiciembre31Parciales: z.number(),
    SaldosFiscalesADiciembre31Parciales: z.number()
  }),
  Renglon72: z.object({
    TotalRentaLiquidaOrdinariaDelEjercicioSaldosContablesADiciembre31: z.number(),
    TotalRentaLiquidaOrdinariaDelEjercicioSaldosFiscalesADiciembre31: z.number()
  }),
  Renglon73: z.object({
    TotalPerdidaLiquidaDelEjercicioSaldosContablesADiciembre31: z.number(),
    TotalPerdidaLiquidaDelEjercicioSaldosFiscalesADiciembre31: z.number()
  }),
  Renglon74: z.object({
    CompenPerFisc: z.object({
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    CompensacionesDeExcesosDeRentaPresuntiva: z.object({
      ExcRentPres: z.object({
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      SubRentPres: z.object({
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      ValFinRentPres: z.object({
        SaldosFiscalesADiciembre31Parciales: z.number()
      })
    }),
    TotalCompensacionesSaldosFiscalesADiciembre31: z.number()
  }),
  Renglon75: z.object({
    TotalRentaLiquidaSaldosFiscalesADiciembre31: z.number()
  }),
  Renglon76: z.object({ SaldosFiscalesADiciembre31Parciales: z.number() }),
  Renglon77: z.object({
    Act235: z.object({ SaldosFiscalesADiciembre31Parciales: z.number() }),
    RentNet: z.object({ SaldosFiscalesADiciembre31Parciales: z.number() }),
    RentHot: z.object({ SaldosFiscalesADiciembre31Parciales: z.number() }),
    RentExent: z.object({ SaldosFiscalesADiciembre31Parciales: z.number() }),
    PensColom: z.object({ SaldosFiscalesADiciembre31Parciales: z.number() }),
    TotalRentasExentasSaldosFiscalesADiciembre31: z.number()
  }),
  Renglon78: z.object({
    ActOmi: z.object({ SaldosFiscalesADiciembre31Parciales: z.number() }),
    PasivNoReal: z.object({ SaldosFiscalesADiciembre31Parciales: z.number() }),
    RecEsp: z.object({ SaldosFiscalesADiciembre31Parciales: z.number() }),
    RentComp: z.object({ SaldosFiscalesADiciembre31Parciales: z.number() }),
    RentLiq: z.object({ SaldosFiscalesADiciembre31Parciales: z.number() }),
    TotalRentasGravablesSaldosFiscalesADiciembre31: z.number()
  }),
  Renglon79: z.object({ TotalesSaldosFiscalesADiciembre31: z.number() }),
  Renglon80: z.object({
    "429543PremiosRifasYLoterias": z.object({
      PremiosRifasYLoterias: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      PrecioDeVentaActivosFijosPoseidosMasDeDosAnios: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        AjustesParaLlegarASaldosFiscales3: z.number(),//fix
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      IngresosPorHerenciasLegadosYDonaciones: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      AprtSoc: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      LasDemásGananciasOcasionales: z.object({
        SaldosContablesADiciembre31Parciales: z.number(),
        AjustesParaLlegarASaldosFiscales1: z.number(),
        SaldosFiscalesADiciembre31Parciales: z.number()
      })
    }),
    TotalesSaldosContablesADiciembre31: z.number(),
    TotalesSaldosFiscalesADiciembre31: z.number()
  }),
  Renglon81: z.object({
    ValoresQuitasCap: z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    TotalRentaDeudoresSaldosContablesADiciembre31: z.number(),
    TotalRentaDeudoresSaldosFiscalesADiciembre31: z.number()
  }),
  Renglon82: z.object({
    VerLasInstruccionesAl: z.object({
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    TotalUtilizacionPerdidasFiscalesAcumuladasSaldosFiscalesADiciembre31: z.number()
  }),
  Renglon83: z.object({
    CostoFiscalDeActivoFijoOBiologicoVendidoYPoseidoPorMasDeDosAños: z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    OtrosCostos: z.object({
      SaldosContablesADiciembre31Parciales: z.number(),
      AjustesParaLlegarASaldosFiscales1: z.number(),
      AjustesParaLlegarASaldosFiscales2: z.string(),
      AjustesParaLlegarASaldosFiscales3: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    TotalCostosYDeduccionesPorGananciasOcasionalesSaldosContablesADiciembre31: z.number(),
    TotalCostosYDeduccionesPorGananciasOcasionalesSaldosFiscalesADiciembre31: z.number()
  }),
  Renglon84: z.object({
    UtilVent: z.object({
      AjustesParaLlegarASaldosFiscales1: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    HerLegDon: z.object({
      AjustesParaLlegarASaldosFiscales1: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    IndemnSeguVid: z.object({
      AjustesParaLlegarASaldosFiscales1: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    AprtSocLiq: z.object({
      AjustesParaLlegarASaldosFiscales1: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    TotalGananciasOcasionalesNoGravadasYExentasSaldosFiscalesADiciembre31: z.number()
  }),
  Renglon85: z.object({
    Esc1: z.object({ SaldosFiscalesADiciembre31Parciales: z.number() }),
    Esc2: z.object({ SaldosFiscalesADiciembre31Parciales: z.number() }),
    Esc3: z.object({ SaldosFiscalesADiciembre31Parciales: z.number() }),
    Esc4: z.object({ SaldosFiscalesADiciembre31Parciales: z.number() }),
    TotalGananciasOcasionalesGravablesSaldosFiscalesADiciembre31: z.number()
  }),
  Renglon86: z.object({
    TotalImpuestoSobreLaRentaLiquidaSaldosFiscalesADiciembre31: z.number()
  }),
  Renglon87: z.object({
    TotalDeDividendosYParticipacionesGravadasALaTarifaSaldosFiscalesADiciembre31: z.number()
  }),
  Renglon88: z.object({ Total88SaldosFiscalesADiciembre31: z.number() }),
  Renglon89: z.object({ Total89SaldosFiscalesADiciembre31: z.number() }),
  Renglon90: z.object({ Total90SaldosFiscalesADiciembre31: z.number() }),
  Renglon91: z.object({ Total91SaldosFiscalesADiciembre31: z.number() }),
  Renglon92: z.object({ Total92SaldosFiscalesADiciembre31: z.number() }),
  Renglon93: z.object({
    DescuentosTributarios: z.object({
      AjustesParaLlegarASaldosFiscales1: z.number(),
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    DescuentosDonacionesEntidades: z.object({
      DonacionHechaAFundacionPor: z.object({
          SaldosFiscalesADiciembre31Parciales: z.number()
        }),
        PorcentajeAplicable: z.object({
          SaldosFiscalesADiciembre31Parciales: z.number()
        }),
        ValorQueInicialmenteSePodriaTomarComoDescuento: z.object({
          SaldosFiscalesADiciembre31Parciales: z.number()
        }),
        LimiteAlCualSeDebeSometerEsteDescuento: z.object({
          SaldosFiscalesADiciembre31Parciales: z.number()
        }),
        ValorFinalQuePuedeTomarsePorEsteDescuento: z.object({
          SaldosFiscalesADiciembre31Parciales: z.number()
        })
    }),
    DescuentosOtros: z.object({
      PorIndustriaYComercioYAvisosYTablerosPagadosDuranteElAño: z.object({
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      PorIVACompra: z.object({
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      RetTrasladable: z.object({
        SaldosFiscalesADiciembre31Parciales: z.number()
      }),
      OtrosDescApliq: z.object({
        SaldosFiscalesADiciembre31Parciales: z.number()
      })
    }),
    TotalDescuentosTributariosSaldosFiscalesADiciembre31: z.number()
  }),
  Renglon94: z.object({
    TotalImpuestoNetoRentaSaldosFiscalesADiciembre31: z.number()
  }),
  Renglon95ImpuestoDeGananciasOcasionales: z.object({
    SobreLoteriasYSimilares: z.object({
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    SobreLasDemasGananciasOcasionales: z.object({
      SaldosFiscalesADiciembre31Parciales: z.number()
    }),
    TotalImpuestoDeGananciasOcasionalesSaldosFiscalesADiciembre31: z.number()
  }),
  Renglon96: z.object({
    SaldosFiscalesADiciembre31Parciales: z.number() ,
    SaldosFiscalesADiciembre31Totales: z.number() //fix
  }),
  Renglon97: z.object({ TotalSaldosFiscalesADiciembre31: z.number() }),
  Renglon98: z.object({ 
    TotalSaldosFiscalesADiciembre31: z.number() ,
  }),
  Renglon99: z.object({ 
    TotalSaldosFiscalesADiciembre31: z.number() ,
  }),
  Renglon100: z.object({ TotalSaldosFiscalesADiciembre31: z.number() }),
  Renglon101MenosAnticipoRentaLiquidadiGravableAnterior: z.object({
    TotalesSaldosFiscalesADiciembre31: z.number()
  }),
  Renglon102MenosSaldoAFavorRentaSinSolicitudDeDevolucionNiCompensacion: z.object(
    { TotalesSaldosFiscalesADiciembre31: z.number() }
  ),
  Renglon103Autocorretenciones: z.object({
    TotalesSaldosContablesADiciembre31: z.number(),
    TotalesSaldosFiscalesADiciembre31: z.number()
  }),
  Renglon104: z.object({
    PorVentas: z.object({
      InformacionPorEmpresa: z.array(
        z.object({
          NombreEmpresa: z.string(),
          NitEmpresa: z.string(),
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        })
      ),
      TotalPorVentasSaldosContablesADiciembre31: z.number(),
      TotalPorVentasSaldosFiscalesADiciembre31: z.number()
    }),
    PorServicios: z.object({
      InformacionPorEmpresa: z.array(
        z.object({
          NombreEmpresa: z.string(),
          NitEmpresa: z.string(),
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        })
      ),
      TotalPorServiciosSaldosContablesADiciembre31: z.number(),
      TotalPorServiciosSaldosFiscalesADiciembre31: z.number()
    }),
    PorHonorariosYComisiones: z.object({
      InformacionPorEmpresa: z.array(
        z.object({
          NombreEmpresa: z.string(),
          NitEmpresa: z.string(),
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        })
      ),
      TotalPorHonorariosYComisionesSaldosContablesADiciembre31: z.number(),
      TotalPorHonorariosYComisionesSaldosFiscalesADiciembre31: z.number()
    }),
    PorRendimientoFinanciero: z.object({
      InformacionPorEmpresa: z.array(
        z.object({
          NombreEmpresa: z.string(),
          NitEmpresa: z.string(),
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        })
      ),
      TotalPorRendimientoFinancieroSaldosContablesADiciembre31: z.number(),
      TotalPorRendimientoFinancieroSaldosFiscalesADiciembre31: z.number()
    }),
    PorDividendosYParticipaciones: z.object({
     InformacionPorEmpresa: z.array(
        z.object({
          NombreEmpresa: z.string(),
          NitEmpresa: z.string(),
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        })
      ),
      TotalPorDividendosYParticipacionesSaldosContablesADiciembre31: z.number(),
      TotalPorDividendosYParticipacionesSaldosFiscalesADiciembre31: z.number()
    }),
    PorOtrosConceptosInteresesLoteriasYRifas: z.object({
      InformacionPorEmpresa: z.array(
        z.object({
          NombreEmpresa: z.string(),
          NitEmpresa: z.string(),
          SaldosContablesADiciembre31Parciales: z.number(),
          AjustesParaLlegarASaldosFiscales1: z.number(),
          AjustesParaLlegarASaldosFiscales2: z.string(),
          AjustesParaLlegarASaldosFiscales3: z.number(),
          SaldosFiscalesADiciembre31Parciales: z.number()
        })
      ),
      TotalPorOtrosConceptosInteresesLoteriasYRifasSaldosContablesADiciembre31: z.number(),
      TotalPorOtrosConceptosInteresesLoteriasYRifasSaldosFiscalesADiciembre31: z.number()
    }),
    TotalOtrasRetencionesSaldosContablesADiciembre31: z.number(),
    TotalOtrasRetencionesSaldosFiscalesADiciembre31: z.number()
  }),
  Renglon105: z.object({ TotalSaldosFiscalesADiciembre31: z.number() }),
  Renglon106: z.object({ TotalSaldosFiscalesADiciembre31: z.number() }),
  Renglon107: z.object({ TotalSaldosFiscalesADiciembre31: z.number() }),
  Renglon108: z.object({ TotalSaldosFiscalesADiciembre31: z.number() }),
  Renglon109: z.object({ TotalSaldosFiscalesADiciembre31: z.number() }),
  Renglon110: z.object({ TotalSaldosFiscalesADiciembre31: z.number() }),
  Renglon111Sanciones: z.object({
    PorExtemporaneidad: z.number(),
    TotalesSaldosFiscalesADiciembre31: z.number()
  }),
  Renglon112: z.object({ TotalSaldosFiscalesADiciembre31: z.number() }),
  Renglon113: z.object({ TotalSaldosFiscalesADiciembre31: z.number() }),
  Renglon114: z.object({ TotalSaldosFiscalesADiciembre31: z.number() }),
  Renglon115: z.object({ TotalSaldosFiscalesADiciembre31: z.number() })
})
