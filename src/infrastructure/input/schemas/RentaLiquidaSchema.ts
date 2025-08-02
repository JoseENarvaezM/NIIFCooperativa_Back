import { z } from "zod";

export const RentaLiquidaSchema = z.object({
  Ingresos: z.object({
    IngresosNetosActividadIndustrialComercialYServicios: z.object({
      IngresosNetosActividadIndustrialComercialYServicios: z.object({
        VentaDeBienesAlTerritorioNacional: z.object({
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        }),
        VentaDeBienesAOtrosPaises: z.object({
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        }),
        VentaDeBienesZonaFranca: z.object({
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        }),
        VentaDeBienesComercializadorasInternacionales: z.object({
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        }),
        VentaDeBienesJurisdiccionesNoCooperantesDeBajaONulaImposicionYRegiminesTributariosPreferenciales: z.object(
          {
            ValorContable: z.number(),
            EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
            MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            ValorFiscal: z.number(),
            TarifaDel9Porciento: z.number(),
            TarifaDel15Porciento: z.number(),
            TarifaDel20Porciento: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27Porciento: z.number(),
            TarifaGeneralArticulo240ET: z.number(),
            Otras: z.number()
          }
        ),
        VentaDeBienesVinculadoEconomicosZonaFrancaYExterior: z.object({
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        }),
        PrestacionDeServiciosAlTerritorioNacional: z.object({
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        }),
        PrestacionDeServiciosExportacionAOtrosPaises: z.object({
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        }),
        PrestacionDeServiciosZonaFranca: z.object({
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        }),
        PrestacionDeServiciosComercializadorasInternacionales: z.object({
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        }),
        PrestacionDeServiciosJurisdiccionesNoCooperantesDeBajaONulaImposicionYRegiminesTributariosPreferenciales: z.object(
          {
            ValorContable: z.number(),
            EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
            MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            ValorFiscal: z.number(),
            TarifaDel9Porciento: z.number(),
            TarifaDel15Porciento: z.number(),
            TarifaDel20Porciento: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27Porciento: z.number(),
            TarifaGeneralArticulo240ET: z.number(),
            Otras: z.number()
          }
        ),
        PrestacionDeServiciosVinculadoEconomicosZonaFrancaYExterior: z.object({
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        }),
        ServiciosDeConstruccion: z.object({
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        }),
        AcuerdosDeConcesionDeServicios: z.object({
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        }),
        ArrendamientosOperativos: z.object({
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        }),
        Regalías: z.object({
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        }),
        ComisionesRelacionalesDeAgencia: z.object({
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        }),
        HonorariosProfesionales: z.object({
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        }),
        ActividadesDeSegurosYDeCapitalizacion: z.object({
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        }),
        LiberacionDeReservasEnContratosDeSeguros: z.object({
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        }),
        ComisionesBancariasCostosDeTransaccionEntroOtros: z.object({
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        }),
        OtrosIngresos: z.object({
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        }),
        Total: z.object({
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        })
      }),
      DevolucionesRebajasYDescuentos: z.object({
        EnVentaDeBienes: z.object({
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        }),
        EnPrestacionDeServicios: z.object({
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        }),
        OtrasDevolucionesRebajasYDescuentos: z.object({
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        }),
        Total: z.object({
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        })
      }),
      Total: z.object({
        ValorContable: z.number(),
        EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
        MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        ValorFiscal: z.number(),
        TarifaDel9Porciento: z.number(),
        TarifaDel15Porciento: z.number(),
        TarifaDel20Porciento: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27Porciento: z.number(),
        TarifaGeneralArticulo240ET: z.number(),
        Otras: z.number()
      })
    }),
    IngresosFinancieros: z.object({
      ArrendamientoFinancieroOMercantilLeasing: z.object({
        ValorContable: z.number(),
        EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
        MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        ValorFiscal: z.number(),
        TarifaDel9Porciento: z.number(),
        TarifaDel15Porciento: z.number(),
        TarifaDel20Porciento: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27Porciento: z.number(),
        TarifaGeneralArticulo240ET: z.number(),
        Otras: z.number()
      }),
      InteresesSectorFinanciero: z.object({
        ValorContable: z.number(),
        EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
        MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        ValorFiscal: z.number(),
        TarifaDel9Porciento: z.number(),
        TarifaDel15Porciento: z.number(),
        TarifaDel20Porciento: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27Porciento: z.number(),
        TarifaGeneralArticulo240ET: z.number(),
        Otras: z.number()
      }),
      InteresesPorPrestamosATercerosDistintosAlSectorFinanciero: z.object({
        ValorContable: z.number(),
        EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
        MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        ValorFiscal: z.number(),
        TarifaDel9Porciento: z.number(),
        TarifaDel15Porciento: z.number(),
        TarifaDel20Porciento: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27Porciento: z.number(),
        TarifaGeneralArticulo240ET: z.number(),
        Otras: z.number()
      }),
      PorInstrumentosFinancierosMedidosACostoAmortizadoDistintoAPrestamos: z.object(
        {
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        }
      ),
      InteresesImplicitosTransaccionesDeFinanciacion: z.object({
        ValorContable: z.number(),
        EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
        MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        ValorFiscal: z.number(),
        TarifaDel9Porciento: z.number(),
        TarifaDel15Porciento: z.number(),
        TarifaDel20Porciento: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27Porciento: z.number(),
        TarifaGeneralArticulo240ET: z.number(),
        Otras: z.number()
      }),
      DiferenciaEnCambio: z.object({
        ValorContable: z.number(),
        EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
        MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        ValorFiscal: z.number(),
        TarifaDel9Porciento: z.number(),
        TarifaDel15Porciento: z.number(),
        TarifaDel20Porciento: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27Porciento: z.number(),
        TarifaGeneralArticulo240ET: z.number(),
        Otras: z.number()
      }),
      OtrosIngresosFinancieros: z.object({
        ValorContable: z.number(),
        EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
        MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        ValorFiscal: z.number(),
        TarifaDel9Porciento: z.number(),
        TarifaDel15Porciento: z.number(),
        TarifaDel20Porciento: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27Porciento: z.number(),
        TarifaGeneralArticulo240ET: z.number(),
        Otras: z.number()
      }),
      Total: z.object({
        ValorContable: z.number(),
        EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
        MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        ValorFiscal: z.number(),
        TarifaDel9Porciento: z.number(),
        TarifaDel15Porciento: z.number(),
        TarifaDel20Porciento: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27Porciento: z.number(),
        TarifaGeneralArticulo240ET: z.number(),
        Otras: z.number()
      })
    }),
    GananciasPorInversionesEnSubsidiariasAsociadasYONegociosConjuntos: z.object(
      {
        GananciasPorElMetodoDeParticipacion: z.object({
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        }),
        GananciasCambiosEnElValorRazonable: z.object({
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        }),
        DividendosYOParticipacionesNoConstitutivosDeRentaNiGananciaOcasionalIncluyeCapitalizacionesNoGravadas: z.object(
          {
            ValorContable: z.number(),
            EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
            MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            ValorFiscal: z.number(),
            TarifaDel9Porciento: z.number(),
            TarifaDel15Porciento: z.number(),
            TarifaDel20Porciento: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27Porciento: z.number(),
            TarifaGeneralArticulo240ET: z.number(),
            Otras: z.number()
          }
        ),
        DividendosOParticipacionesDistribuidosPorEntidadesNoResidentesEnColombiaAUnaCHCYPrimaEnColocacionDeAcciones: z.object(
          {
            ValorContable: z.number(),
            EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
            MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            ValorFiscal: z.number(),
            TarifaDel9Porciento: z.number(),
            TarifaDel15Porciento: z.number(),
            TarifaDel20Porciento: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27Porciento: z.number(),
            TarifaGeneralArticulo240ET: z.number(),
            Otras: z.number()
          }
        ),
        DividendosYOParticipacionesGravadasALaTarifaGeneralProvenientesDeSeciedadesYEntidadesExtranjerasODeSociedadesNacionales: z.object(
          {
            ValorContable: z.number(),
            EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
            MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            ValorFiscal: z.number(),
            TarifaDel9Porciento: z.number(),
            TarifaDel15Porciento: z.number(),
            TarifaDel20Porciento: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27Porciento: z.number(),
            TarifaGeneralArticulo240ET: z.number(),
            Otras: z.number()
          }
        ),
        DividendosYOParticipacionesGravadasRecibidasPorPersonasNaturalesSinResidenciaFiscalAnio2016YAnteriores: z.object(
          {
            ValorContable: z.number(),
            EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
            MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            ValorFiscal: z.number(),
            TarifaDel9Porciento: z.number(),
            TarifaDel15Porciento: z.number(),
            TarifaDel20Porciento: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27Porciento: z.number(),
            TarifaGeneralArticulo240ET: z.number(),
            Otras: z.number()
          }
        ),
        DividendosYOParticipacionesGravadasRecibidasPorPersonasNaturalesSinResidenciaFiscalAnio2017YSiguientes: z.object(
          {
            ValorContable: z.number(),
            EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
            MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            ValorFiscal: z.number(),
            TarifaDel9Porciento: z.number(),
            TarifaDel15Porciento: z.number(),
            TarifaDel20Porciento: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27Porciento: z.number(),
            TarifaGeneralArticulo240ET: z.number(),
            Otras: z.number()
          }
        ),
        DividendosYOParticipacionesGravadasAl10Porciento: z.object({
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        }),
        DividendosYOParticipacionesGravadasATarifaGeneralEPYSociedadesExtranjerasUtilidadesGeneradasAPartirDelAnio2017: z.object(
          {
            ValorContable: z.number(),
            EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
            MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            ValorFiscal: z.number(),
            TarifaDel9Porciento: z.number(),
            TarifaDel15Porciento: z.number(),
            TarifaDel20Porciento: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27Porciento: z.number(),
            TarifaGeneralArticulo240ET: z.number(),
            Otras: z.number()
          }
        ),
        DividendosYParticipacionesProvenientesDeProyectosCalificadosComoMegaInversionGravadasAl27Porciento: z.object(
          {
            ValorContable: z.number(),
            EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
            MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            ValorFiscal: z.number(),
            TarifaDel9Porciento: z.number(),
            TarifaDel15Porciento: z.number(),
            TarifaDel20Porciento: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27Porciento: z.number(),
            TarifaGeneralArticulo240ET: z.number(),
            Otras: z.number()
          }
        ),
        Total: z.object({
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        })
      }
    ),
    IngresosPorMedicionesAValorRazonable: z.object({
      ActivosBiologicos: z.object({
        ValorContable: z.number(),
        EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
        MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        ValorFiscal: z.number(),
        TarifaDel9Porciento: z.number(),
        TarifaDel15Porciento: z.number(),
        TarifaDel20Porciento: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27Porciento: z.number(),
        TarifaGeneralArticulo240ET: z.number(),
        Otras: z.number()
      }),
      PropiedadesDeInversion: z.object({
        ValorContable: z.number(),
        EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
        MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        ValorFiscal: z.number(),
        TarifaDel9Porciento: z.number(),
        TarifaDel15Porciento: z.number(),
        TarifaDel20Porciento: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27Porciento: z.number(),
        TarifaGeneralArticulo240ET: z.number(),
        Otras: z.number()
      }),
      InstrumentosFinancierosDistintoAInversionesEnSubsidiariasAsociadasYONegociosConjuntos: z.object(
        {
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        }
      ),
      InstrumentosDerivados: z.object({
        ValorContable: z.number(),
        EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
        MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        ValorFiscal: z.number(),
        TarifaDel9Porciento: z.number(),
        TarifaDel15Porciento: z.number(),
        TarifaDel20Porciento: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27Porciento: z.number(),
        TarifaGeneralArticulo240ET: z.number(),
        Otras: z.number()
      }),
      Otros: z.object({
        ValorContable: z.number(),
        EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
        MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        ValorFiscal: z.number(),
        TarifaDel9Porciento: z.number(),
        TarifaDel15Porciento: z.number(),
        TarifaDel20Porciento: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27Porciento: z.number(),
        TarifaGeneralArticulo240ET: z.number(),
        Otras: z.number()
      }),
      Total: z.object({
        ValorContable: z.number(),
        EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
        MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        ValorFiscal: z.number(),
        TarifaDel9Porciento: z.number(),
        TarifaDel15Porciento: z.number(),
        TarifaDel20Porciento: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27Porciento: z.number(),
        TarifaGeneralArticulo240ET: z.number(),
        Otras: z.number()
      })
    }),
    UtilidadEnLaVentaOEnajenacionDeActivosBienesPoseidosPorMenosDeDoAnios: z.object(
      {
        PropiedadesPlantaYEquipo: z.object({
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        }),
        PropiedadesDeInversion: z.object({
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        }),
        ActivosBiologicosSinPlantasProductoras: z.object({
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        }),
        ActivosNoCorrientesMantenidosParaLaVentaEntregarAPropietarios: z.object(
          {
            ValorContable: z.number(),
            EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
            MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            ValorFiscal: z.number(),
            TarifaDel9Porciento: z.number(),
            TarifaDel15Porciento: z.number(),
            TarifaDel20Porciento: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27Porciento: z.number(),
            TarifaGeneralArticulo240ET: z.number(),
            Otras: z.number()
          }
        ),
        ActivosIntangibles: z.object({
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        }),
        InversionesEnAccionesYOtrasParticipaciones: z.object({
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        }),
        PorDisposicionDeOtrosInstrumentosFinancieros: z.object({
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        }),
        Otros: z.object({
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        }),
        Total: z.object({
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        })
      }
    ),
    UtilidadPorVentaOEnajenacionDeActivosBienesPoseidosPorDosAniosOMasGananciaOcasional: z.object(
      {
        PropiedadesPlantaYEquipo: z.object({
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        }),
        PropiedadesDeInversion: z.object({
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        }),
        ActivosBiologicosSinPlantasProductoras: z.object({
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        }),
        ActivosNoCorrientesMantenidosParaLaVentaEntregarAPropietarios: z.object(
          {
            ValorContable: z.number(),
            EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
            MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            ValorFiscal: z.number(),
            TarifaDel9Porciento: z.number(),
            TarifaDel15Porciento: z.number(),
            TarifaDel20Porciento: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27Porciento: z.number(),
            TarifaGeneralArticulo240ET: z.number(),
            Otras: z.number()
          }
        ),
        ActivosIntangibles: z.object({
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        }),
        InversionesEnAccionesYOtrasParticipaciones: z.object({
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        }),
        PorDisposicionDeOtrosInstrumentosFinancieros: z.object({
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        }),
        Otros: z.object({
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        }),
        Total: z.object({
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        })
      }
    ),
    IngresosPorReversionDeDeterioroDelValor: z.object({
      Inventarios: z.object({
        ValorContable: z.number(),
        EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
        MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        ValorFiscal: z.number(),
        TarifaDel9Porciento: z.number(),
        TarifaDel15Porciento: z.number(),
        TarifaDel20Porciento: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27Porciento: z.number(),
        TarifaGeneralArticulo240ET: z.number(),
        Otras: z.number()
      }),
      PropiedadesPlantaYEquipo: z.object({
        ValorContable: z.number(),
        EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
        MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        ValorFiscal: z.number(),
        TarifaDel9Porciento: z.number(),
        TarifaDel15Porciento: z.number(),
        TarifaDel20Porciento: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27Porciento: z.number(),
        TarifaGeneralArticulo240ET: z.number(),
        Otras: z.number()
      }),
      ActivosIntangibles: z.object({
        ValorContable: z.number(),
        EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
        MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        ValorFiscal: z.number(),
        TarifaDel9Porciento: z.number(),
        TarifaDel15Porciento: z.number(),
        TarifaDel20Porciento: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27Porciento: z.number(),
        TarifaGeneralArticulo240ET: z.number(),
        Otras: z.number()
      }),
      ActivosDeExploracionYEvaluacionDeRecursosMinerales: z.object({
        ValorContable: z.number(),
        EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
        MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        ValorFiscal: z.number(),
        TarifaDel9Porciento: z.number(),
        TarifaDel15Porciento: z.number(),
        TarifaDel20Porciento: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27Porciento: z.number(),
        TarifaGeneralArticulo240ET: z.number(),
        Otras: z.number()
      }),
      PropiedadesDeInversionMedidasAlModeloDeCosto: z.object({
        ValorContable: z.number(),
        EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
        MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        ValorFiscal: z.number(),
        TarifaDel9Porciento: z.number(),
        TarifaDel15Porciento: z.number(),
        TarifaDel20Porciento: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27Porciento: z.number(),
        TarifaGeneralArticulo240ET: z.number(),
        Otras: z.number()
      }),
      ActivosNoCorrientesMantenidosParaLaVentaEntregarAPropietarios: z.object({
        ValorContable: z.number(),
        EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
        MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        ValorFiscal: z.number(),
        TarifaDel9Porciento: z.number(),
        TarifaDel15Porciento: z.number(),
        TarifaDel20Porciento: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27Porciento: z.number(),
        TarifaGeneralArticulo240ET: z.number(),
        Otras: z.number()
      }),
      ActivosBiologicosMedidosAlModeloDeCosto: z.object({
        ValorContable: z.number(),
        EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
        MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        ValorFiscal: z.number(),
        TarifaDel9Porciento: z.number(),
        TarifaDel15Porciento: z.number(),
        TarifaDel20Porciento: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27Porciento: z.number(),
        TarifaGeneralArticulo240ET: z.number(),
        Otras: z.number()
      }),
      BienesDeArteYCultura: z.object({
        ValorContable: z.number(),
        EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
        MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        ValorFiscal: z.number(),
        TarifaDel9Porciento: z.number(),
        TarifaDel15Porciento: z.number(),
        TarifaDel20Porciento: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27Porciento: z.number(),
        TarifaGeneralArticulo240ET: z.number(),
        Otras: z.number()
      }),
      ActivosFinancierosDistintosACarteraDeCrediroYOperacionesDeLeasing: z.object(
        {
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        }
      ),
      CarteraDeCreditoYOperacionesDeLeasing: z.object({
        ValorContable: z.number(),
        EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
        MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        ValorFiscal: z.number(),
        TarifaDel9Porciento: z.number(),
        TarifaDel15Porciento: z.number(),
        TarifaDel20Porciento: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27Porciento: z.number(),
        TarifaGeneralArticulo240ET: z.number(),
        Otras: z.number()
      }),
      OtrasInversionesMedidasAlCostoOElMetodoDeLaParticipacion: z.object({
        ValorContable: z.number(),
        EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
        MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        ValorFiscal: z.number(),
        TarifaDel9Porciento: z.number(),
        TarifaDel15Porciento: z.number(),
        TarifaDel20Porciento: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27Porciento: z.number(),
        TarifaGeneralArticulo240ET: z.number(),
        Otras: z.number()
      }),
      OtrosDeterior: z.object({
        ValorContable: z.number(),
        EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
        MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        ValorFiscal: z.number(),
        TarifaDel9Porciento: z.number(),
        TarifaDel15Porciento: z.number(),
        TarifaDel20Porciento: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27Porciento: z.number(),
        TarifaGeneralArticulo240ET: z.number(),
        Otras: z.number()
      }),
      Total: z.object({
        ValorContable: z.number(),
        EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
        MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        ValorFiscal: z.number(),
        TarifaDel9Porciento: z.number(),
        TarifaDel15Porciento: z.number(),
        TarifaDel20Porciento: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27Porciento: z.number(),
        TarifaGeneralArticulo240ET: z.number(),
        Otras: z.number()
      })
    }),
    IngresosPorReversionDeProvisionesPasivosDeMontoOFechaInciertos: z.object({
      Garantias: z.object({
        ValorContable: z.number(),
        EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
        MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        ValorFiscal: z.number(),
        TarifaDel9Porciento: z.number(),
        TarifaDel15Porciento: z.number(),
        TarifaDel20Porciento: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27Porciento: z.number(),
        TarifaGeneralArticulo240ET: z.number(),
        Otras: z.number()
      }),
      ContratosOnerosos: z.object({
        ValorContable: z.number(),
        EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
        MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        ValorFiscal: z.number(),
        TarifaDel9Porciento: z.number(),
        TarifaDel15Porciento: z.number(),
        TarifaDel20Porciento: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27Porciento: z.number(),
        TarifaGeneralArticulo240ET: z.number(),
        Otras: z.number()
      }),
      Litigios: z.object({
        ValorContable: z.number(),
        EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
        MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        ValorFiscal: z.number(),
        TarifaDel9Porciento: z.number(),
        TarifaDel15Porciento: z.number(),
        TarifaDel20Porciento: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27Porciento: z.number(),
        TarifaGeneralArticulo240ET: z.number(),
        Otras: z.number()
      }),
      ReembolsosAClientes: z.object({
        ValorContable: z.number(),
        EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
        MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        ValorFiscal: z.number(),
        TarifaDel9Porciento: z.number(),
        TarifaDel15Porciento: z.number(),
        TarifaDel20Porciento: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27Porciento: z.number(),
        TarifaGeneralArticulo240ET: z.number(),
        Otras: z.number()
      }),
      ReestructuracionesDeNegocios: z.object({
        ValorContable: z.number(),
        EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
        MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        ValorFiscal: z.number(),
        TarifaDel9Porciento: z.number(),
        TarifaDel15Porciento: z.number(),
        TarifaDel20Porciento: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27Porciento: z.number(),
        TarifaGeneralArticulo240ET: z.number(),
        Otras: z.number()
      }),
      PasivosContingentesAsumidosEnUnaCombinacionDeNegocios: z.object({
        ValorContable: z.number(),
        EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
        MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        ValorFiscal: z.number(),
        TarifaDel9Porciento: z.number(),
        TarifaDel15Porciento: z.number(),
        TarifaDel20Porciento: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27Porciento: z.number(),
        TarifaGeneralArticulo240ET: z.number(),
        Otras: z.number()
      }),
      Otros: z.object({
        ValorContable: z.number(),
        EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
        MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        ValorFiscal: z.number(),
        TarifaDel9Porciento: z.number(),
        TarifaDel15Porciento: z.number(),
        TarifaDel20Porciento: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27Porciento: z.number(),
        TarifaGeneralArticulo240ET: z.number(),
        Otras: z.number()
      }),
      Total: z.object({
        ValorContable: z.number(),
        EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
        MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        ValorFiscal: z.number(),
        TarifaDel9Porciento: z.number(),
        TarifaDel15Porciento: z.number(),
        TarifaDel20Porciento: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27Porciento: z.number(),
        TarifaGeneralArticulo240ET: z.number(),
        Otras: z.number()
      })
    }),
    IngresosPorReversionDePasivosPorBeneficiosALosEmpleados: z.object({
      BeneficiosDeCortoplazo: z.object({
        ValorContable: z.number(),
        EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
        MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        ValorFiscal: z.number(),
        TarifaDel9Porciento: z.number(),
        TarifaDel15Porciento: z.number(),
        TarifaDel20Porciento: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27Porciento: z.number(),
        TarifaGeneralArticulo240ET: z.number(),
        Otras: z.number()
      }),
      BeneficiosDeLargoPlazo: z.object({
        ValorContable: z.number(),
        EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
        MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        ValorFiscal: z.number(),
        TarifaDel9Porciento: z.number(),
        TarifaDel15Porciento: z.number(),
        TarifaDel20Porciento: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27Porciento: z.number(),
        TarifaGeneralArticulo240ET: z.number(),
        Otras: z.number()
      }),
      BeneficiosAEmpleadosPorTerminacionDelVinculoLaboral: z.object({
        ValorContable: z.number(),
        EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
        MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        ValorFiscal: z.number(),
        TarifaDel9Porciento: z.number(),
        TarifaDel15Porciento: z.number(),
        TarifaDel20Porciento: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27Porciento: z.number(),
        TarifaGeneralArticulo240ET: z.number(),
        Otras: z.number()
      }),
      BeneficiosAEmpleadosPostEmpleo: z.object({
        ValorContable: z.number(),
        EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
        MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        ValorFiscal: z.number(),
        TarifaDel9Porciento: z.number(),
        TarifaDel15Porciento: z.number(),
        TarifaDel20Porciento: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27Porciento: z.number(),
        TarifaGeneralArticulo240ET: z.number(),
        Otras: z.number()
      }),
      Total: z.object({
        ValorContable: z.number(),
        EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
        MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        ValorFiscal: z.number(),
        TarifaDel9Porciento: z.number(),
        TarifaDel15Porciento: z.number(),
        TarifaDel20Porciento: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27Porciento: z.number(),
        TarifaGeneralArticulo240ET: z.number(),
        Otras: z.number()
      })
    }),
    OtrosIngresos: z.object({
      TransferenciasSubvencionesYAyudasGubernamentales: z.object({
        ValorContable: z.number(),
        EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
        MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        ValorFiscal: z.number(),
        TarifaDel9Porciento: z.number(),
        TarifaDel15Porciento: z.number(),
        TarifaDel20Porciento: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27Porciento: z.number(),
        TarifaGeneralArticulo240ET: z.number(),
        Otras: z.number()
      }),
      DonacionesAportacionesYSimilares: z.object({
        ValorContable: z.number(),
        EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
        MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        ValorFiscal: z.number(),
        TarifaDel9Porciento: z.number(),
        TarifaDel15Porciento: z.number(),
        TarifaDel20Porciento: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27Porciento: z.number(),
        TarifaGeneralArticulo240ET: z.number(),
        Otras: z.number()
      }),
      ReembolsosDeCompaniasDeSeguroIndemnizaciones: z.object({
        ValorContable: z.number(),
        EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
        MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        ValorFiscal: z.number(),
        TarifaDel9Porciento: z.number(),
        TarifaDel15Porciento: z.number(),
        TarifaDel20Porciento: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27Porciento: z.number(),
        TarifaGeneralArticulo240ET: z.number(),
        Otras: z.number()
      }),
      OtrasIndemnizaciones: z.object({
        ValorContable: z.number(),
        EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
        MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        ValorFiscal: z.number(),
        TarifaDel9Porciento: z.number(),
        TarifaDel15Porciento: z.number(),
        TarifaDel20Porciento: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27Porciento: z.number(),
        TarifaGeneralArticulo240ET: z.number(),
        Otras: z.number()
      }),
      OtrasReversionesORecuperaciones: z.object({
        ValorContable: z.number(),
        EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
        MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        ValorFiscal: z.number(),
        TarifaDel9Porciento: z.number(),
        TarifaDel15Porciento: z.number(),
        TarifaDel20Porciento: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27Porciento: z.number(),
        TarifaGeneralArticulo240ET: z.number(),
        Otras: z.number()
      }),
      Otros: z.object({
        ValorContable: z.number(),
        EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
        MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        ValorFiscal: z.number(),
        TarifaDel9Porciento: z.number(),
        TarifaDel15Porciento: z.number(),
        TarifaDel20Porciento: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27Porciento: z.number(),
        TarifaGeneralArticulo240ET: z.number(),
        Otras: z.number()
      }),
      Total: z.object({
        ValorContable: z.number(),
        EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
        MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        ValorFiscal: z.number(),
        TarifaDel9Porciento: z.number(),
        TarifaDel15Porciento: z.number(),
        TarifaDel20Porciento: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27Porciento: z.number(),
        TarifaGeneralArticulo240ET: z.number(),
        Otras: z.number()
      })
    }),
    GananciasNetasEnOperacionesDiscontinuas: z.object({
      ValorContable: z.number(),
      EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
      MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number()
    }),
    AjustesFiscales: z.object({
      AdicionDeIngresos: z.object({
        RecuperacionDeDeduccionesSinIncidenciaContable: z.object({
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        }),
        InteresesPresuntos: z.object({
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        }),
        MayorIngresosPreciosDeTransferencia: z.object({
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        }),
        OtrosIngresosFiscalesYNoIncluidosContablemente: z.object({
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        }),
        Total: z.object({
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        })
      }),
      Total: z.object({
        MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        ValorFiscal: z.number(),
        TarifaDel9Porciento: z.number(),
        TarifaDel15Porciento: z.number(),
        TarifaDel20Porciento: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27Porciento: z.number(),
        TarifaGeneralArticulo240ET: z.number(),
        Otras: z.number()
      })
    }),
    MenosIngresosNoConstitutivosDeRentaNiGananciaOcasional: z.object({
      MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
      ValorFiscal: z.number(),
      TarifaDel9Porciento: z.number(),
      TarifaDel15Porciento: z.number(),
      TarifaDel20Porciento: z.number(),
      MegaInversiones: z.number(),
      MegaInversiones27Porciento: z.number(),
      TarifaGeneralArticulo240ET: z.number(),
      Otras: z.number()
    }),
    TotalIngresos: z.object({
      ValorContable: z.number(),
      EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
      MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
      MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
      ValorFiscal: z.number(),
      TarifaDel9Porciento: z.number(),
      TarifaDel15Porciento: z.number(),
      TarifaDel20Porciento: z.number(),
      MegaInversiones: z.number(),
      MegaInversiones27Porciento: z.number(),
      TarifaGeneralArticulo240ET: z.number(),
      Otras: z.number()
    })
  }),
  Costos: z.object({
    MateriasPrimasReventaDeBienesTerminadosYServicios: z.object({
      CostosDeVentasCalculadoPorElSistemaPermanente: z.object({
        ValorContable: z.number(),
        EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
        MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        ValorFiscal: z.number(),
        TarifaDel9Porciento: z.number(),
        TarifaDel15Porciento: z.number(),
        TarifaDel20Porciento: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27Porciento: z.number(),
        TarifaGeneralArticulo240ET: z.number(),
        Otras: z.number()
      }),
      MateriasPrimasProduccion: z.object({
        InventarioInicial: z.object({
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        }),
        ComprasLocales: z.object({
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        }),
        Importaciones: z.object({
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        }),
        InventarioFinal: z.object({
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        })
      }),
      CostoBienesVendidos: z.object({
        InventarioInicial: z.object({
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        }),
        ComprasLocales: z.object({
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        }),
        Importaciones: z.object({
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        }),
        InventarioFinal: z.object({
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        })
      }),
      ProductosEnProceso: z.object({
        InventarioInicial: z.object({
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        }),
        InventarioFinal: z.object({
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        })
      }),
      ProductosTerminados: z.object({
        InventarioInicial: z.object({
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        }),
        InventarioFinal: z.object({
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        })
      }),
      CostosEnLaPrestacionDeServicios: z.object({
        ValorContable: z.number(),
        EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
        MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        ValorFiscal: z.number(),
        TarifaDel9Porciento: z.number(),
        TarifaDel15Porciento: z.number(),
        TarifaDel20Porciento: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27Porciento: z.number(),
        TarifaGeneralArticulo240ET: z.number(),
        Otras: z.number()
      }),
      OtrosSistemasDeDeterminacionDelCostoDeVentas: z.object({
        ValorContable: z.number(),
        EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
        MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        ValorFiscal: z.number(),
        TarifaDel9Porciento: z.number(),
        TarifaDel15Porciento: z.number(),
        TarifaDel20Porciento: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27Porciento: z.number(),
        TarifaGeneralArticulo240ET: z.number(),
        Otras: z.number()
      }),
      Ajustes: z.object({
        ValorContable: z.number(),
        EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
        MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        ValorFiscal: z.number(),
        TarifaDel9Porciento: z.number(),
        TarifaDel15Porciento: z.number(),
        TarifaDel20Porciento: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27Porciento: z.number(),
        TarifaGeneralArticulo240ET: z.number(),
        Otras: z.number()
      }),
      Total: z.object({
        ValorContable: z.number(),
        EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
        MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        ValorFiscal: z.number(),
        TarifaDel9Porciento: z.number(),
        TarifaDel15Porciento: z.number(),
        TarifaDel20Porciento: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27Porciento: z.number(),
        TarifaGeneralArticulo240ET: z.number(),
        Otras: z.number()
      })
    }),
    ManoObra: z.object({
      DeCortoPlazo: z.object({
        ValorContable: z.number(),
        EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
        MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        ValorFiscal: z.number(),
        TarifaDel9Porciento: z.number(),
        TarifaDel15Porciento: z.number(),
        TarifaDel20Porciento: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27Porciento: z.number(),
        TarifaGeneralArticulo240ET: z.number(),
        Otras: z.number()
      }),
      DeLargoPlazo: z.object({
        ValorContable: z.number(),
        EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
        MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        ValorFiscal: z.number(),
        TarifaDel9Porciento: z.number(),
        TarifaDel15Porciento: z.number(),
        TarifaDel20Porciento: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27Porciento: z.number(),
        TarifaGeneralArticulo240ET: z.number(),
        Otras: z.number()
      }),
      PorTerminacionDeVinculoLaboral: z.object({
        ValorContable: z.number(),
        EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
        MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        ValorFiscal: z.number(),
        TarifaDel9Porciento: z.number(),
        TarifaDel15Porciento: z.number(),
        TarifaDel20Porciento: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27Porciento: z.number(),
        TarifaGeneralArticulo240ET: z.number(),
        Otras: z.number()
      }),
      PostEmpleo: z.object({
        ValorContable: z.number(),
        EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
        MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        ValorFiscal: z.number(),
        TarifaDel9Porciento: z.number(),
        TarifaDel15Porciento: z.number(),
        TarifaDel20Porciento: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27Porciento: z.number(),
        TarifaGeneralArticulo240ET: z.number(),
        Otras: z.number()
      }),
      Total: z.object({
        ValorContable: z.number(),
        EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
        MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        ValorFiscal: z.number(),
        TarifaDel9Porciento: z.number(),
        TarifaDel15Porciento: z.number(),
        TarifaDel20Porciento: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27Porciento: z.number(),
        TarifaGeneralArticulo240ET: z.number(),
        Otras: z.number()
      })
    }),
    DepresionacionesAmortizacionesYDeterioros: z.object({
      DepreciacionPropiedadesPlantaYEquipo: z.object({
        DelCosto: z.object({
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        }),
        DelAjusteAcumunladoPorAjusteAculudadoPorRevaluacionesOReExpresiones: z.object(
          {
            ValorContable: z.number(),
            EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
            MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            ValorFiscal: z.number(),
            TarifaDel9Porciento: z.number(),
            TarifaDel15Porciento: z.number(),
            TarifaDel20Porciento: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27Porciento: z.number(),
            TarifaGeneralArticulo240ET: z.number(),
            Otras: z.number()
          }
        )
      }),
      DepreciacionPropiedadesDeInversion: z.object({
        DelCosto: z.object({
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        }),
        DelAjusteAcumunladoPorAjusteAculudadoPorRevaluacionesOReExpresiones: z.object(
          {
            ValorContable: z.number(),
            EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
            MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            ValorFiscal: z.number(),
            TarifaDel9Porciento: z.number(),
            TarifaDel15Porciento: z.number(),
            TarifaDel20Porciento: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27Porciento: z.number(),
            TarifaGeneralArticulo240ET: z.number(),
            Otras: z.number()
          }
        )
      }),
      DepreciacionActivosBiologicos: z.object({
        DelCosto: z.object({
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        }),
        DelAjusteAcumunladoPorAjusteAculudadoPorRevaluacionesOReExpresiones: z.object(
          {
            ValorContable: z.number(),
            EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
            MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            ValorFiscal: z.number(),
            TarifaDel9Porciento: z.number(),
            TarifaDel15Porciento: z.number(),
            TarifaDel20Porciento: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27Porciento: z.number(),
            TarifaGeneralArticulo240ET: z.number(),
            Otras: z.number()
          }
        )
      }),
      AmortizacionActivosIntangibles: z.object({
        DelCosto: z.object({
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        }),
        DelAjusteAcumunladoPorAjusteAculudadoPorRevaluacionesOReExpresiones: z.object(
          {
            ValorContable: z.number(),
            EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
            MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            ValorFiscal: z.number(),
            TarifaDel9Porciento: z.number(),
            TarifaDel15Porciento: z.number(),
            TarifaDel20Porciento: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27Porciento: z.number(),
            TarifaGeneralArticulo240ET: z.number(),
            Otras: z.number()
          }
        )
      }),
      DepreciacionDerechosUsoEnArrendamientosOperativosNIIF16: z.object({
        ValorContable: z.number(),
        EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
        MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        ValorFiscal: z.number(),
        TarifaDel9Porciento: z.number(),
        TarifaDel15Porciento: z.number(),
        TarifaDel20Porciento: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27Porciento: z.number(),
        TarifaGeneralArticulo240ET: z.number(),
        Otras: z.number()
      }),
      OtrasDepreciacionesYAmortizaciones: z.object({
        DelCosto: z.object({
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        }),
        DelAjusteAcumunladoPorAjusteAculudadoPorRevaluacionesOReExpresiones: z.object(
          {
            ValorContable: z.number(),
            EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
            MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            ValorFiscal: z.number(),
            TarifaDel9Porciento: z.number(),
            TarifaDel15Porciento: z.number(),
            TarifaDel20Porciento: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27Porciento: z.number(),
            TarifaGeneralArticulo240ET: z.number(),
            Otras: z.number()
          }
        )
      }),
      DeterioroDelValorDeLosActivos: z.object({
        Inventarios: z.object({
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        }),
        PropiedadesPlantaYEquipo: z.object({
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        }),
        ActivosIntangibles: z.object({
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        }),
        ActivosDeExploracionYEvaluacionDeRecursosMinerales: z.object({
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        }),
        PropiedadesDeInversionMedidasAlModeloDeCosto: z.object({
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        }),
        ActivosNoCorrientesMantenidosParaLaVentaDistribuirALosPropietarios: z.object(
          {
            ValorContable: z.number(),
            EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
            MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            ValorFiscal: z.number(),
            TarifaDel9Porciento: z.number(),
            TarifaDel15Porciento: z.number(),
            TarifaDel20Porciento: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27Porciento: z.number(),
            TarifaGeneralArticulo240ET: z.number(),
            Otras: z.number()
          }
        ),
        ActivosBiologicosMedidosAlModeloDeCosto: z.object({
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        }),
        BienesDeArteYCulturaMedidosAlModeloDeCosto: z.object({
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        }),
        ActivosFinancierosDistintosACarteraDeCreditoYOperacionesDeLeasing: z.object(
          {
            ValorContable: z.number(),
            EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
            MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            ValorFiscal: z.number(),
            TarifaDel9Porciento: z.number(),
            TarifaDel15Porciento: z.number(),
            TarifaDel20Porciento: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27Porciento: z.number(),
            TarifaGeneralArticulo240ET: z.number(),
            Otras: z.number()
          }
        ),
        CarteraDeCreditoYOperacionesDeLeasing: z.object({
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        }),
        OtrasInversionesMedidasAlCostoOPorElMetodoDeLaParticipacion: z.object({
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        }),
        DerechosDeUsoEnArrendamientosOperativosNIIF16: z.object({
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        }),
        OtrosDeteriroros: z.object({
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        })
      }),
      Total: z.object({
        ValorContable: z.number(),
        EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
        MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        ValorFiscal: z.number(),
        TarifaDel9Porciento: z.number(),
        TarifaDel15Porciento: z.number(),
        TarifaDel20Porciento: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27Porciento: z.number(),
        TarifaGeneralArticulo240ET: z.number(),
        Otras: z.number()
      })
    }),
    OtrosCostos: z.object({
      Arrendamientos: z.object({
        ValorContable: z.number(),
        EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
        MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        ValorFiscal: z.number(),
        TarifaDel9Porciento: z.number(),
        TarifaDel15Porciento: z.number(),
        TarifaDel20Porciento: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27Porciento: z.number(),
        TarifaGeneralArticulo240ET: z.number(),
        Otras: z.number()
      }),
      Seguros: z.object({
        ValorContable: z.number(),
        EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
        MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        ValorFiscal: z.number(),
        TarifaDel9Porciento: z.number(),
        TarifaDel15Porciento: z.number(),
        TarifaDel20Porciento: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27Porciento: z.number(),
        TarifaGeneralArticulo240ET: z.number(),
        Otras: z.number()
      }),
      Servicios: z.object({
        ValorContable: z.number(),
        EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
        MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        ValorFiscal: z.number(),
        TarifaDel9Porciento: z.number(),
        TarifaDel15Porciento: z.number(),
        TarifaDel20Porciento: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27Porciento: z.number(),
        TarifaGeneralArticulo240ET: z.number(),
        Otras: z.number()
      }),
      Honorarios: z.object({
        ValorContable: z.number(),
        EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
        MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        ValorFiscal: z.number(),
        TarifaDel9Porciento: z.number(),
        TarifaDel15Porciento: z.number(),
        TarifaDel20Porciento: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27Porciento: z.number(),
        TarifaGeneralArticulo240ET: z.number(),
        Otras: z.number()
      }),
      ServiciosTecnicos: z.object({
        VinculadosEconomicos: z.object({
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        }),
        JurisdiccionesNoCooperantesDeBajaONulaImposicionYRegimenesTributariosPreferenciales: z.object(
          {
            ValorContable: z.number(),
            EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
            MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            ValorFiscal: z.number(),
            TarifaDel9Porciento: z.number(),
            TarifaDel15Porciento: z.number(),
            TarifaDel20Porciento: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27Porciento: z.number(),
            TarifaGeneralArticulo240ET: z.number(),
            Otras: z.number()
          }
        ),
        NoVinculados: z.object({
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        })
      }),
      AsistenciaTecnica: z.object({
        VinculadosEconomicos: z.object({
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        }),
        JurisdiccionesNoCooperantesDeBajaONulaImposicionYRegimenesTributariosPreferenciales: z.object(
          {
            ValorContable: z.number(),
            EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
            MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            ValorFiscal: z.number(),
            TarifaDel9Porciento: z.number(),
            TarifaDel15Porciento: z.number(),
            TarifaDel20Porciento: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27Porciento: z.number(),
            TarifaGeneralArticulo240ET: z.number(),
            Otras: z.number()
          }
        ),
        NoVinculados: z.object({
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        })
      }),
      OtrosConceptosReconocidosComoCostosEnElEstadoDeResultados: z.object({
        ValorContable: z.number(),
        EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
        MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        ValorFiscal: z.number(),
        TarifaDel9Porciento: z.number(),
        TarifaDel15Porciento: z.number(),
        TarifaDel20Porciento: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27Porciento: z.number(),
        TarifaGeneralArticulo240ET: z.number(),
        Otras: z.number()
      }),
      OtrosCostosFiscalesNoReconocidosContablemente: z.object({
        MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        ValorFiscal: z.number(),
        TarifaDel9Porciento: z.number(),
        TarifaDel15Porciento: z.number(),
        TarifaDel20Porciento: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27Porciento: z.number(),
        TarifaGeneralArticulo240ET: z.number(),
        Otras: z.number()
      }),
      Total: z.object({
        ValorContable: z.number(),
        EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
        MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        ValorFiscal: z.number(),
        TarifaDel9Porciento: z.number(),
        TarifaDel15Porciento: z.number(),
        TarifaDel20Porciento: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27Porciento: z.number(),
        TarifaGeneralArticulo240ET: z.number(),
        Otras: z.number()
      })
    }),
    MenosCostoAjustePreciosDeTrasferencia: z.object({
      MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
      ValorFiscal: z.number(),
      TarifaDel9Porciento: z.number(),
      TarifaDel15Porciento: z.number(),
      TarifaDel20Porciento: z.number(),
      MegaInversiones: z.number(),
      MegaInversiones27Porciento: z.number(),
      TarifaGeneralArticulo240ET: z.number(),
      Otras: z.number()
    }),
    TotalCostos: z.object({
      ValorContable: z.number(),
      EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
      MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
      MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
      ValorFiscal: z.number(),
      TarifaDel9Porciento: z.number(),
      TarifaDel15Porciento: z.number(),
      TarifaDel20Porciento: z.number(),
      MegaInversiones: z.number(),
      MegaInversiones27Porciento: z.number(),
      TarifaGeneralArticulo240ET: z.number(),
      Otras: z.number()
    })
  }),
  Gastos: z.object({
    DeAdministracion: z.object({
      ManoDeObra: z.object({
        DeCortoPlazo: z.object({
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        }),
        DeLargoPlazo: z.object({
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        }),
        PorTerminacionDelVinculoLaboral: z.object({
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        }),
        PostEmpleo: z.object({
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        }),
        Total: z.object({
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        })
      }),
      OtrosGastosDeAdministracion: z.object({
        ImpuestosDistintosAlImpuestosDeRentaYComplementarios: z.object({
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        }),
        ArrendamientosOperativos: z.object({
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        }),
        ContribucionesYAfiliaciones: z.object({
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        }),
        Honorarios: z.object({
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        }),
        Seguros: z.object({
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        }),
        ServiciosAdministrativos: z.object({
          VinculadosEconomicos: z.object({
            ValorContable: z.number(),
            EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
            MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            ValorFiscal: z.number(),
            TarifaDel9Porciento: z.number(),
            TarifaDel15Porciento: z.number(),
            TarifaDel20Porciento: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27Porciento: z.number(),
            TarifaGeneralArticulo240ET: z.number(),
            Otras: z.number()
          }),
          JurisdiccionesNoCooperantesBajaNulaImposicionDeBajaONulaImposicionYRegimenesTributariosPreferenciales: z.object(
            {
              ValorContable: z.number(),
              EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
              MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
              MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
              ValorFiscal: z.number(),
              TarifaDel9Porciento: z.number(),
              TarifaDel15Porciento: z.number(),
              TarifaDel20Porciento: z.number(),
              MegaInversiones: z.number(),
              MegaInversiones27Porciento: z.number(),
              TarifaGeneralArticulo240ET: z.number(),
              Otras: z.number()
            }
          ),
          NoVinculados: z.object({
            ValorContable: z.number(),
            EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
            MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            ValorFiscal: z.number(),
            TarifaDel9Porciento: z.number(),
            TarifaDel15Porciento: z.number(),
            TarifaDel20Porciento: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27Porciento: z.number(),
            TarifaGeneralArticulo240ET: z.number(),
            Otras: z.number()
          })
        }),
        Regalias: z.object({
          VinculadosEconomicos: z.object({
            ValorContable: z.number(),
            EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
            MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            ValorFiscal: z.number(),
            TarifaDel9Porciento: z.number(),
            TarifaDel15Porciento: z.number(),
            TarifaDel20Porciento: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27Porciento: z.number(),
            TarifaGeneralArticulo240ET: z.number(),
            Otras: z.number()
          }),
          JurisdiccionesNoCooperantesBajaNulaImposicionDeBajaONulaImposicionYRegimenesTributariosPreferenciales: z.object(
            {
              ValorContable: z.number(),
              EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
              MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
              MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
              ValorFiscal: z.number(),
              TarifaDel9Porciento: z.number(),
              TarifaDel15Porciento: z.number(),
              TarifaDel20Porciento: z.number(),
              MegaInversiones: z.number(),
              MegaInversiones27Porciento: z.number(),
              TarifaGeneralArticulo240ET: z.number(),
              Otras: z.number()
            }
          ),
          NoVinculados: z.object({
            ValorContable: z.number(),
            EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
            MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            ValorFiscal: z.number(),
            TarifaDel9Porciento: z.number(),
            TarifaDel15Porciento: z.number(),
            TarifaDel20Porciento: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27Porciento: z.number(),
            TarifaGeneralArticulo240ET: z.number(),
            Otras: z.number()
          })
        }),
        AsistenciaTecnica: z.object({
          VinculadosEconomicos: z.object({
            ValorContable: z.number(),
            EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
            MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            ValorFiscal: z.number(),
            TarifaDel9Porciento: z.number(),
            TarifaDel15Porciento: z.number(),
            TarifaDel20Porciento: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27Porciento: z.number(),
            TarifaGeneralArticulo240ET: z.number(),
            Otras: z.number()
          }),
          JurisdiccionesNoCooperantesBajaNulaImposicionDeBajaONulaImposicionYRegimenesTributariosPreferenciales: z.object(
            {
              ValorContable: z.number(),
              EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
              MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
              MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
              ValorFiscal: z.number(),
              TarifaDel9Porciento: z.number(),
              TarifaDel15Porciento: z.number(),
              TarifaDel20Porciento: z.number(),
              MegaInversiones: z.number(),
              MegaInversiones27Porciento: z.number(),
              TarifaGeneralArticulo240ET: z.number(),
              Otras: z.number()
            }
          ),
          NoVinculados: z.object({
            ValorContable: z.number(),
            EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
            MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            ValorFiscal: z.number(),
            TarifaDel9Porciento: z.number(),
            TarifaDel15Porciento: z.number(),
            TarifaDel20Porciento: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27Porciento: z.number(),
            TarifaGeneralArticulo240ET: z.number(),
            Otras: z.number()
          })
        }),
        OtrosServicios: z.object({
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        }),
        InvestigacionYDesarrollo: z.object({
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        }),
        GastosLegales: z.object({
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        }),
        ReparacionMantenimientoAdecuacionEInstalaciones: z.object({
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        }),
        Transporte: z.object({
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        }),
        OtrosGastos: z.object({
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        }),
        Total: z.object({
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        })
      }),
      DepreciacionesAmortizacionesDeterioros: z.object({
        DepreciacionPropiedadesPlantaYEquipo: z.object({
          DelCosto: z.object({
            ValorContable: z.number(),
            EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
            MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            ValorFiscal: z.number(),
            TarifaDel9Porciento: z.number(),
            TarifaDel15Porciento: z.number(),
            TarifaDel20Porciento: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27Porciento: z.number(),
            TarifaGeneralArticulo240ET: z.number(),
            Otras: z.number()
          }),
          DelAjusteAcumuladoPorRevaliacionesOReExpresiones: z.object({
            ValorContable: z.number(),
            EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
            MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            ValorFiscal: z.number(),
            TarifaDel9Porciento: z.number(),
            TarifaDel15Porciento: z.number(),
            TarifaDel20Porciento: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27Porciento: z.number(),
            TarifaGeneralArticulo240ET: z.number(),
            Otras: z.number()
          })
        }),
        DepreciacionPropiedadesDeInversion: z.object({
          DelCosto: z.object({
            ValorContable: z.number(),
            EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
            MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            ValorFiscal: z.number(),
            TarifaDel9Porciento: z.number(),
            TarifaDel15Porciento: z.number(),
            TarifaDel20Porciento: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27Porciento: z.number(),
            TarifaGeneralArticulo240ET: z.number(),
            Otras: z.number()
          }),
          DelAjusteAcumuladoPorRevaliacionesOReExpresiones: z.object({
            ValorContable: z.number(),
            EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
            MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            ValorFiscal: z.number(),
            TarifaDel9Porciento: z.number(),
            TarifaDel15Porciento: z.number(),
            TarifaDel20Porciento: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27Porciento: z.number(),
            TarifaGeneralArticulo240ET: z.number(),
            Otras: z.number()
          })
        }),
        DepreciacionArrendamientosOperativosNIIF16: z.object({
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        }),
        OtrasDepreciaciones: z.object({
          DelCosto: z.object({
            ValorContable: z.number(),
            EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
            MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            ValorFiscal: z.number(),
            TarifaDel9Porciento: z.number(),
            TarifaDel15Porciento: z.number(),
            TarifaDel20Porciento: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27Porciento: z.number(),
            TarifaGeneralArticulo240ET: z.number(),
            Otras: z.number()
          }),
          DelAjusteAcumuladoPorRevaliacionesOReExpresiones: z.object({
            ValorContable: z.number(),
            EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
            MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            ValorFiscal: z.number(),
            TarifaDel9Porciento: z.number(),
            TarifaDel15Porciento: z.number(),
            TarifaDel20Porciento: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27Porciento: z.number(),
            TarifaGeneralArticulo240ET: z.number(),
            Otras: z.number()
          })
        }),
        AmortizacionActivosIntangibles: z.object({
          DelCosto: z.object({
            ValorContable: z.number(),
            EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
            MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            ValorFiscal: z.number(),
            TarifaDel9Porciento: z.number(),
            TarifaDel15Porciento: z.number(),
            TarifaDel20Porciento: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27Porciento: z.number(),
            TarifaGeneralArticulo240ET: z.number(),
            Otras: z.number()
          }),
          DelAjusteAcumuladoPorRevaliacionesOReExpresiones: z.object({
            ValorContable: z.number(),
            EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
            MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            ValorFiscal: z.number(),
            TarifaDel9Porciento: z.number(),
            TarifaDel15Porciento: z.number(),
            TarifaDel20Porciento: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27Porciento: z.number(),
            TarifaGeneralArticulo240ET: z.number(),
            Otras: z.number()
          })
        }),
        OtrasAmortizaciones: z.object({
          DelCosto: z.object({
            ValorContable: z.number(),
            EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
            MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            ValorFiscal: z.number(),
            TarifaDel9Porciento: z.number(),
            TarifaDel15Porciento: z.number(),
            TarifaDel20Porciento: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27Porciento: z.number(),
            TarifaGeneralArticulo240ET: z.number(),
            Otras: z.number()
          }),
          DelAjusteAcumuladoPorRevaliacionesOReExpresiones: z.object({
            ValorContable: z.number(),
            EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
            MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            ValorFiscal: z.number(),
            TarifaDel9Porciento: z.number(),
            TarifaDel15Porciento: z.number(),
            TarifaDel20Porciento: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27Porciento: z.number(),
            TarifaGeneralArticulo240ET: z.number(),
            Otras: z.number()
          })
        }),
        DeterioroDelValorDeLosActivos: z.object({
          Inventarios: z.object({
            ValorContable: z.number(),
            EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
            MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            ValorFiscal: z.number(),
            TarifaDel9Porciento: z.number(),
            TarifaDel15Porciento: z.number(),
            TarifaDel20Porciento: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27Porciento: z.number(),
            TarifaGeneralArticulo240ET: z.number(),
            Otras: z.number()
          }),
          PropiedadesPlantaYEquipo: z.object({
            ValorContable: z.number(),
            EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
            MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            ValorFiscal: z.number(),
            TarifaDel9Porciento: z.number(),
            TarifaDel15Porciento: z.number(),
            TarifaDel20Porciento: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27Porciento: z.number(),
            TarifaGeneralArticulo240ET: z.number(),
            Otras: z.number()
          }),
          ActivosIntangibles: z.object({
            ValorContable: z.number(),
            EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
            MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            ValorFiscal: z.number(),
            TarifaDel9Porciento: z.number(),
            TarifaDel15Porciento: z.number(),
            TarifaDel20Porciento: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27Porciento: z.number(),
            TarifaGeneralArticulo240ET: z.number(),
            Otras: z.number()
          }),
          ActivosDeExploracionYEvaluacionDeRecursosMinerales: z.object({
            ValorContable: z.number(),
            EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
            MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            ValorFiscal: z.number(),
            TarifaDel9Porciento: z.number(),
            TarifaDel15Porciento: z.number(),
            TarifaDel20Porciento: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27Porciento: z.number(),
            TarifaGeneralArticulo240ET: z.number(),
            Otras: z.number()
          }),
          PropiedadesDeInversionMedidasAlModeloDeCosto: z.object({
            ValorContable: z.number(),
            EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
            MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            ValorFiscal: z.number(),
            TarifaDel9Porciento: z.number(),
            TarifaDel15Porciento: z.number(),
            TarifaDel20Porciento: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27Porciento: z.number(),
            TarifaGeneralArticulo240ET: z.number(),
            Otras: z.number()
          }),
          ActivosNoCorrientesMantenidosParaLaVentaDistribuirALosPropietarios: z.object(
            {
              ValorContable: z.number(),
              EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
              MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
              MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
              ValorFiscal: z.number(),
              TarifaDel9Porciento: z.number(),
              TarifaDel15Porciento: z.number(),
              TarifaDel20Porciento: z.number(),
              MegaInversiones: z.number(),
              MegaInversiones27Porciento: z.number(),
              TarifaGeneralArticulo240ET: z.number(),
              Otras: z.number()
            }
          ),
          BienesDeArteYCulturaMedidosAlModeloDeCosto: z.object({
            ValorContable: z.number(),
            EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
            MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            ValorFiscal: z.number(),
            TarifaDel9Porciento: z.number(),
            TarifaDel15Porciento: z.number(),
            TarifaDel20Porciento: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27Porciento: z.number(),
            TarifaGeneralArticulo240ET: z.number(),
            Otras: z.number()
          }),
          ActivosBiologicosMedidosAlModeloDeCosto: z.object({
            ValorContable: z.number(),
            EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
            MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            ValorFiscal: z.number(),
            TarifaDel9Porciento: z.number(),
            TarifaDel15Porciento: z.number(),
            TarifaDel20Porciento: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27Porciento: z.number(),
            TarifaGeneralArticulo240ET: z.number(),
            Otras: z.number()
          }),
          ActivosFinancierosDistintosACarteraDeCreditoYOperacionesDeLeasing: z.object(
            {
              ValorContable: z.number(),
              EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
              MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
              MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
              ValorFiscal: z.number(),
              TarifaDel9Porciento: z.number(),
              TarifaDel15Porciento: z.number(),
              TarifaDel20Porciento: z.number(),
              MegaInversiones: z.number(),
              MegaInversiones27Porciento: z.number(),
              TarifaGeneralArticulo240ET: z.number(),
              Otras: z.number()
            }
          ),
          CarteraDeCreditoYOperacionesDeLeasing: z.object({
            ValorContable: z.number(),
            EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
            MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            ValorFiscal: z.number(),
            TarifaDel9Porciento: z.number(),
            TarifaDel15Porciento: z.number(),
            TarifaDel20Porciento: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27Porciento: z.number(),
            TarifaGeneralArticulo240ET: z.number(),
            Otras: z.number()
          }),
          OtrasInversionesMedidasAlCostoOPorElMetodoDeLaParticipacion: z.object(
            {
              ValorContable: z.number(),
              EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
              MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
              MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
              ValorFiscal: z.number(),
              TarifaDel9Porciento: z.number(),
              TarifaDel15Porciento: z.number(),
              TarifaDel20Porciento: z.number(),
              MegaInversiones: z.number(),
              MegaInversiones27Porciento: z.number(),
              TarifaGeneralArticulo240ET: z.number(),
              Otras: z.number()
            }
          ),
          DerechosDeUsoEnArrendamientosOperativosNIIF16: z.object({
            ValorContable: z.number(),
            EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
            MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            ValorFiscal: z.number(),
            TarifaDel9Porciento: z.number(),
            TarifaDel15Porciento: z.number(),
            TarifaDel20Porciento: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27Porciento: z.number(),
            TarifaGeneralArticulo240ET: z.number(),
            Otras: z.number()
          }),
          OtrosDeterioros: z.object({
            ValorContable: z.number(),
            EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
            MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            ValorFiscal: z.number(),
            TarifaDel9Porciento: z.number(),
            TarifaDel15Porciento: z.number(),
            TarifaDel20Porciento: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27Porciento: z.number(),
            TarifaGeneralArticulo240ET: z.number(),
            Otras: z.number()
          })
        }),
        Total: z.object({
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        })
      }),
      Total: z.object({
        ValorContable: z.number(),
        EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
        MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        ValorFiscal: z.number(),
        TarifaDel9Porciento: z.number(),
        TarifaDel15Porciento: z.number(),
        TarifaDel20Porciento: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27Porciento: z.number(),
        TarifaGeneralArticulo240ET: z.number(),
        Otras: z.number()
      })
    }),
    GastosDeDistribucionYVentas: z.object({
      ManoDeObra: z.object({
        DeCortoPlazo: z.object({
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        }),
        DeLargoPlazo: z.object({
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        }),
        PorTerminacionVinculoLaboral: z.object({
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        }),
        PostEmpleo: z.object({
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        }),
        Total: z.object({
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        })
      }),
      OtrosGastosDeDistribucionYVentas: z.object({
        ImpuestosDistintosAlImpuestosDeRentaYComplementarios: z.object({
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        }),
        ArrendamientosOperativos: z.object({
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        }),
        ContribucionesYAfiliaciones: z.object({
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        }),
        Honorarios: z.object({
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        }),
        Seguros: z.object({
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        }),
        ServiciosAdministrativos: z.object({
          VinculadosEconomicos: z.object({
            ValorContable: z.number(),
            EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
            MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            ValorFiscal: z.number(),
            TarifaDel9Porciento: z.number(),
            TarifaDel15Porciento: z.number(),
            TarifaDel20Porciento: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27Porciento: z.number(),
            TarifaGeneralArticulo240ET: z.number(),
            Otras: z.number()
          }),
          JurisdiccionesNoCooperantesDeBajaONulaImposicionYRegimenesTributariosPreferenciales: z.object(
            {
              ValorContable: z.number(),
              EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
              MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
              MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
              ValorFiscal: z.number(),
              TarifaDel9Porciento: z.number(),
              TarifaDel15Porciento: z.number(),
              TarifaDel20Porciento: z.number(),
              MegaInversiones: z.number(),
              MegaInversiones27Porciento: z.number(),
              TarifaGeneralArticulo240ET: z.number(),
              Otras: z.number()
            }
          ),
          NoVinculados: z.object({
            ValorContable: z.number(),
            EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
            MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            ValorFiscal: z.number(),
            TarifaDel9Porciento: z.number(),
            TarifaDel15Porciento: z.number(),
            TarifaDel20Porciento: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27Porciento: z.number(),
            TarifaGeneralArticulo240ET: z.number(),
            Otras: z.number()
          })
        }),
        Regalias: z.object({
          VinculadosEconomicos: z.object({
            ValorContable: z.number(),
            EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
            MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            ValorFiscal: z.number(),
            TarifaDel9Porciento: z.number(),
            TarifaDel15Porciento: z.number(),
            TarifaDel20Porciento: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27Porciento: z.number(),
            TarifaGeneralArticulo240ET: z.number(),
            Otras: z.number()
          }),
          JurisdiccionesNoCooperantesDeBajaONulaImposicionYRegimenesTributariosPreferenciales: z.object(
            {
              ValorContable: z.number(),
              EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
              MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
              MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
              ValorFiscal: z.number(),
              TarifaDel9Porciento: z.number(),
              TarifaDel15Porciento: z.number(),
              TarifaDel20Porciento: z.number(),
              MegaInversiones: z.number(),
              MegaInversiones27Porciento: z.number(),
              TarifaGeneralArticulo240ET: z.number(),
              Otras: z.number()
            }
          ),
          NoVinculados: z.object({
            ValorContable: z.number(),
            EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
            MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            ValorFiscal: z.number(),
            TarifaDel9Porciento: z.number(),
            TarifaDel15Porciento: z.number(),
            TarifaDel20Porciento: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27Porciento: z.number(),
            TarifaGeneralArticulo240ET: z.number(),
            Otras: z.number()
          })
        }),
        AsistenciaTecnica: z.object({
          VinculadosEconomicos: z.object({
            ValorContable: z.number(),
            EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
            MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            ValorFiscal: z.number(),
            TarifaDel9Porciento: z.number(),
            TarifaDel15Porciento: z.number(),
            TarifaDel20Porciento: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27Porciento: z.number(),
            TarifaGeneralArticulo240ET: z.number(),
            Otras: z.number()
          }),
          JurisdiccionesNoCooperantesDeBajaONulaImposicionYRegimenesTributariosPreferenciales: z.object(
            {
              ValorContable: z.number(),
              EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
              MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
              MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
              ValorFiscal: z.number(),
              TarifaDel9Porciento: z.number(),
              TarifaDel15Porciento: z.number(),
              TarifaDel20Porciento: z.number(),
              MegaInversiones: z.number(),
              MegaInversiones27Porciento: z.number(),
              TarifaGeneralArticulo240ET: z.number(),
              Otras: z.number()
            }
          ),
          NoVinculados: z.object({
            ValorContable: z.number(),
            EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
            MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            ValorFiscal: z.number(),
            TarifaDel9Porciento: z.number(),
            TarifaDel15Porciento: z.number(),
            TarifaDel20Porciento: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27Porciento: z.number(),
            TarifaGeneralArticulo240ET: z.number(),
            Otras: z.number()
          })
        }),
        OtrosServicios: z.object({
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        }),
        InvestigacionYDesarrollo: z.object({
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        }),
        GastosLegales: z.object({
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        }),
        ReparacionMantenimientoAdecuacionEInstalaciones: z.object({
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        }),
        Transporte: z.object({
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        }),
        ConstitucionReservasEmpresasAseguradoras: z.object({
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        }),
        LiquidacionDeSiniestros: z.object({
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        }),
        PrimasDeReaseguros: z.object({
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        }),
        OtrosGastos: z.object({
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        }),
        Total: z.object({
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        })
      }),
      DepreciacionesAmortizacionesYDeterioros: z.object({
        DepreciacionPropiedadesPlantaYEquipo: z.object({
          DelCosto: z.object({
            ValorContable: z.number(),
            EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
            MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            ValorFiscal: z.number(),
            TarifaDel9Porciento: z.number(),
            TarifaDel15Porciento: z.number(),
            TarifaDel20Porciento: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27Porciento: z.number(),
            TarifaGeneralArticulo240ET: z.number(),
            Otras: z.number()
          }),
          DelAjusteAcumunladoPorRevaluacionesOReExpresiones: z.object({
            ValorContable: z.number(),
            EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
            MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            ValorFiscal: z.number(),
            TarifaDel9Porciento: z.number(),
            TarifaDel15Porciento: z.number(),
            TarifaDel20Porciento: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27Porciento: z.number(),
            TarifaGeneralArticulo240ET: z.number(),
            Otras: z.number()
          })
        }),
        DepreciacionPropiedadesDeInversion: z.object({
          DelCosto: z.object({
            ValorContable: z.number(),
            EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
            MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            ValorFiscal: z.number(),
            TarifaDel9Porciento: z.number(),
            TarifaDel15Porciento: z.number(),
            TarifaDel20Porciento: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27Porciento: z.number(),
            TarifaGeneralArticulo240ET: z.number(),
            Otras: z.number()
          }),
          DelAjusteAcumunladoPorRevaluacionesOReExpresiones: z.object({
            ValorContable: z.number(),
            EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
            MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            ValorFiscal: z.number(),
            TarifaDel9Porciento: z.number(),
            TarifaDel15Porciento: z.number(),
            TarifaDel20Porciento: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27Porciento: z.number(),
            TarifaGeneralArticulo240ET: z.number(),
            Otras: z.number()
          })
        }),
        DepreciacionActivosBiologicos: z.object({
          DelCosto: z.object({
            ValorContable: z.number(),
            EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
            MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            ValorFiscal: z.number(),
            TarifaDel9Porciento: z.number(),
            TarifaDel15Porciento: z.number(),
            TarifaDel20Porciento: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27Porciento: z.number(),
            TarifaGeneralArticulo240ET: z.number(),
            Otras: z.number()
          }),
          DelAjusteAcumunladoPorRevaluacionesOReExpresiones: z.object({
            ValorContable: z.number(),
            EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
            MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            ValorFiscal: z.number(),
            TarifaDel9Porciento: z.number(),
            TarifaDel15Porciento: z.number(),
            TarifaDel20Porciento: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27Porciento: z.number(),
            TarifaGeneralArticulo240ET: z.number(),
            Otras: z.number()
          })
        }),
        AmortizacionActivosIntangibles: z.object({
          DelCosto: z.object({
            ValorContable: z.number(),
            EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
            MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            ValorFiscal: z.number(),
            TarifaDel9Porciento: z.number(),
            TarifaDel15Porciento: z.number(),
            TarifaDel20Porciento: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27Porciento: z.number(),
            TarifaGeneralArticulo240ET: z.number(),
            Otras: z.number()
          }),
          DelAjusteAcumunladoPorRevaluacionesOReExpresiones: z.object({
            ValorContable: z.number(),
            EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
            MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            ValorFiscal: z.number(),
            TarifaDel9Porciento: z.number(),
            TarifaDel15Porciento: z.number(),
            TarifaDel20Porciento: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27Porciento: z.number(),
            TarifaGeneralArticulo240ET: z.number(),
            Otras: z.number()
          })
        }),
        DepreciacionArrendamientosOperativosNIFF16: z.object({
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        }),
        OtrasDepreciacionesYAmortizaciones: z.object({
          DelCosto: z.object({
            ValorContable: z.number(),
            EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
            MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            ValorFiscal: z.number(),
            TarifaDel9Porciento: z.number(),
            TarifaDel15Porciento: z.number(),
            TarifaDel20Porciento: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27Porciento: z.number(),
            TarifaGeneralArticulo240ET: z.number(),
            Otras: z.number()
          }),
          DelAjusteAcumunladoPorRevaluacionesOReExpresiones: z.object({
            ValorContable: z.number(),
            EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
            MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            ValorFiscal: z.number(),
            TarifaDel9Porciento: z.number(),
            TarifaDel15Porciento: z.number(),
            TarifaDel20Porciento: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27Porciento: z.number(),
            TarifaGeneralArticulo240ET: z.number(),
            Otras: z.number()
          })
        }),
        DeterioroDelValorActivos: z.object({
          Inventarios: z.object({
            ValorContable: z.number(),
            EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
            MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            ValorFiscal: z.number(),
            TarifaDel9Porciento: z.number(),
            TarifaDel15Porciento: z.number(),
            TarifaDel20Porciento: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27Porciento: z.number(),
            TarifaGeneralArticulo240ET: z.number(),
            Otras: z.number()
          }),
          PropiedadesPlantaYEquipo: z.object({
            ValorContable: z.number(),
            EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
            MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            ValorFiscal: z.number(),
            TarifaDel9Porciento: z.number(),
            TarifaDel15Porciento: z.number(),
            TarifaDel20Porciento: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27Porciento: z.number(),
            TarifaGeneralArticulo240ET: z.number(),
            Otras: z.number()
          }),
          ActivosIntangibles: z.object({
            ValorContable: z.number(),
            EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
            MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            ValorFiscal: z.number(),
            TarifaDel9Porciento: z.number(),
            TarifaDel15Porciento: z.number(),
            TarifaDel20Porciento: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27Porciento: z.number(),
            TarifaGeneralArticulo240ET: z.number(),
            Otras: z.number()
          }),
          ActivosDeExploracionYEvaluacionDeRecursosMinerales: z.object({
            ValorContable: z.number(),
            EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
            MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            ValorFiscal: z.number(),
            TarifaDel9Porciento: z.number(),
            TarifaDel15Porciento: z.number(),
            TarifaDel20Porciento: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27Porciento: z.number(),
            TarifaGeneralArticulo240ET: z.number(),
            Otras: z.number()
          }),
          PropiedadesDeInversionMedidasAlModeloDeCosto: z.object({
            ValorContable: z.number(),
            EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
            MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            ValorFiscal: z.number(),
            TarifaDel9Porciento: z.number(),
            TarifaDel15Porciento: z.number(),
            TarifaDel20Porciento: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27Porciento: z.number(),
            TarifaGeneralArticulo240ET: z.number(),
            Otras: z.number()
          }),
          ActivosNoCorrientesMantenidosParaLaVentaDistribuirALosPropietarios: z.object(
            {
              ValorContable: z.number(),
              EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
              MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
              MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
              ValorFiscal: z.number(),
              TarifaDel9Porciento: z.number(),
              TarifaDel15Porciento: z.number(),
              TarifaDel20Porciento: z.number(),
              MegaInversiones: z.number(),
              MegaInversiones27Porciento: z.number(),
              TarifaGeneralArticulo240ET: z.number(),
              Otras: z.number()
            }
          ),
          BienesDeArteYCulturaMedidosAlModeloDeCosto: z.object({
            ValorContable: z.number(),
            EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
            MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            ValorFiscal: z.number(),
            TarifaDel9Porciento: z.number(),
            TarifaDel15Porciento: z.number(),
            TarifaDel20Porciento: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27Porciento: z.number(),
            TarifaGeneralArticulo240ET: z.number(),
            Otras: z.number()
          }),
          ActivosBiologicosMedidosAlModeloDeCosto: z.object({
            ValorContable: z.number(),
            EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
            MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            ValorFiscal: z.number(),
            TarifaDel9Porciento: z.number(),
            TarifaDel15Porciento: z.number(),
            TarifaDel20Porciento: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27Porciento: z.number(),
            TarifaGeneralArticulo240ET: z.number(),
            Otras: z.number()
          }),
          ActivosFinancierosDistintosACarteraDeCreditoYOperacionesDeLeasing: z.object(
            {
              ValorContable: z.number(),
              EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
              MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
              MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
              ValorFiscal: z.number(),
              TarifaDel9Porciento: z.number(),
              TarifaDel15Porciento: z.number(),
              TarifaDel20Porciento: z.number(),
              MegaInversiones: z.number(),
              MegaInversiones27Porciento: z.number(),
              TarifaGeneralArticulo240ET: z.number(),
              Otras: z.number()
            }
          ),
          CarteraDeCreditoYOperacionesDeLeasing: z.object({
            ValorContable: z.number(),
            EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
            MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            ValorFiscal: z.number(),
            TarifaDel9Porciento: z.number(),
            TarifaDel15Porciento: z.number(),
            TarifaDel20Porciento: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27Porciento: z.number(),
            TarifaGeneralArticulo240ET: z.number(),
            Otras: z.number()
          }),
          OtrasInversionesMedidasAlCostoOPorElMetodoDeLaParticipacion: z.object(
            {
              ValorContable: z.number(),
              EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
              MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
              MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
              ValorFiscal: z.number(),
              TarifaDel9Porciento: z.number(),
              TarifaDel15Porciento: z.number(),
              TarifaDel20Porciento: z.number(),
              MegaInversiones: z.number(),
              MegaInversiones27Porciento: z.number(),
              TarifaGeneralArticulo240ET: z.number(),
              Otras: z.number()
            }
          ),
          DerechosDeUsoEnArrendamientosOperativosNIIF16: z.object({
            ValorContable: z.number(),
            EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
            MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            ValorFiscal: z.number(),
            TarifaDel9Porciento: z.number(),
            TarifaDel15Porciento: z.number(),
            TarifaDel20Porciento: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27Porciento: z.number(),
            TarifaGeneralArticulo240ET: z.number(),
            Otras: z.number()
          }),
          OtrosDeterioros: z.object({
            ValorContable: z.number(),
            EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
            MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
            ValorFiscal: z.number(),
            TarifaDel9Porciento: z.number(),
            TarifaDel15Porciento: z.number(),
            TarifaDel20Porciento: z.number(),
            MegaInversiones: z.number(),
            MegaInversiones27Porciento: z.number(),
            TarifaGeneralArticulo240ET: z.number(),
            Otras: z.number()
          })
        }),
        Total: z.object({
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        })
      }),
      Total: z.object({
        ValorContable: z.number(),
        EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
        MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        ValorFiscal: z.number(),
        TarifaDel9Porciento: z.number(),
        TarifaDel15Porciento: z.number(),
        TarifaDel20Porciento: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27Porciento: z.number(),
        TarifaGeneralArticulo240ET: z.number(),
        Otras: z.number()
      })
    }),
    GastosFinancieros: z.object({
      Arrendamiento: z.object({
        FinancieroOMercantilLeasing: z.object({
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        }),
        OperativoNIIF16: z.object({
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        })
      }),
      InteresesDevengadosSectorFinanciero: z.object({
        ValorContable: z.number(),
        EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
        MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        ValorFiscal: z.number(),
        TarifaDel9Porciento: z.number(),
        TarifaDel15Porciento: z.number(),
        TarifaDel20Porciento: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27Porciento: z.number(),
        TarifaGeneralArticulo240ET: z.number(),
        Otras: z.number()
      }),
      InteresesDevengadosPorPrestamosDeDistintoAlSectorFinanciero: z.object({
        ValorContable: z.number(),
        EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
        MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        ValorFiscal: z.number(),
        TarifaDel9Porciento: z.number(),
        TarifaDel15Porciento: z.number(),
        TarifaDel20Porciento: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27Porciento: z.number(),
        TarifaGeneralArticulo240ET: z.number(),
        Otras: z.number()
      }),
      PorInstrumentosFinancierosMedidosACostoAmortizadoDistintoAPrestamos: z.object(
        {
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        }
      ),
      CostosDeTransaccionComisionesBancariasTasasEntreOtros: z.object({
        ValorContable: z.number(),
        EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
        MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        ValorFiscal: z.number(),
        TarifaDel9Porciento: z.number(),
        TarifaDel15Porciento: z.number(),
        TarifaDel20Porciento: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27Porciento: z.number(),
        TarifaGeneralArticulo240ET: z.number(),
        Otras: z.number()
      }),
      DiferenciaEnCambio: z.object({
        ValorContable: z.number(),
        EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
        MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        ValorFiscal: z.number(),
        TarifaDel9Porciento: z.number(),
        TarifaDel15Porciento: z.number(),
        TarifaDel20Porciento: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27Porciento: z.number(),
        TarifaGeneralArticulo240ET: z.number(),
        Otras: z.number()
      }),
      InteresesImplicitosTransaccionesDeFinanciacion: z.object({
        ValorContable: z.number(),
        EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
        MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        ValorFiscal: z.number(),
        TarifaDel9Porciento: z.number(),
        TarifaDel15Porciento: z.number(),
        TarifaDel20Porciento: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27Porciento: z.number(),
        TarifaGeneralArticulo240ET: z.number(),
        Otras: z.number()
      }),
      ActualizacionDeProvisionesReconocidasAValorPresente: z.object({
        ValorContable: z.number(),
        EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
        MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        ValorFiscal: z.number(),
        TarifaDel9Porciento: z.number(),
        TarifaDel15Porciento: z.number(),
        TarifaDel20Porciento: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27Porciento: z.number(),
        TarifaGeneralArticulo240ET: z.number(),
        Otras: z.number()
      }),
      InteresesPorAccionesPreferenciales: z.object({
        ValorContable: z.number(),
        EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
        MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        ValorFiscal: z.number(),
        TarifaDel9Porciento: z.number(),
        TarifaDel15Porciento: z.number(),
        TarifaDel20Porciento: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27Porciento: z.number(),
        TarifaGeneralArticulo240ET: z.number(),
        Otras: z.number()
      }),
      OtrosGastosFinancierosReconocidosComoGastoEnElEstadoDeResultados: z.object(
        {
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        }
      ),
      Total: z.object({
        ValorContable: z.number(),
        EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
        MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        ValorFiscal: z.number(),
        TarifaDel9Porciento: z.number(),
        TarifaDel15Porciento: z.number(),
        TarifaDel20Porciento: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27Porciento: z.number(),
        TarifaGeneralArticulo240ET: z.number(),
        Otras: z.number()
      })
    }),
    PerdidasPorInversionesEnSubsidiariasAsociadasYONegociosConjuntos: z.object({
      PerdidasPorElMetodoDeParticipacion: z.object({
        ValorContable: z.number(),
        EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
        MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number()
      }),
      PerdidasPorMedicionesAValorRazonable: z.object({
        ValorContable: z.number(),
        EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
        MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number()
      }),
      Total: z.object({
        ValorContable: z.number(),
        EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
        MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number()
      })
    }),
    PerdidasPorMedicionesAValorRazonable: z.object({
      ActivosBiologicos: z.object({
        ValorContable: z.number(),
        EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
        MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        ValorFiscal: z.number(),
        TarifaDel9Porciento: z.number(),
        TarifaDel15Porciento: z.number(),
        TarifaDel20Porciento: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27Porciento: z.number(),
        TarifaGeneralArticulo240ET: z.number(),
        Otras: z.number()
      }),
      PropiedadesDeInversion: z.object({
        ValorContable: z.number(),
        EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
        MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        ValorFiscal: z.number(),
        TarifaDel9Porciento: z.number(),
        TarifaDel15Porciento: z.number(),
        TarifaDel20Porciento: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27Porciento: z.number(),
        TarifaGeneralArticulo240ET: z.number(),
        Otras: z.number()
      }),
      InstrumentosFinancieros: z.object({
        ValorContable: z.number(),
        EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
        MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        ValorFiscal: z.number(),
        TarifaDel9Porciento: z.number(),
        TarifaDel15Porciento: z.number(),
        TarifaDel20Porciento: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27Porciento: z.number(),
        TarifaGeneralArticulo240ET: z.number(),
        Otras: z.number()
      }),
      InstrumentosDerivados: z.object({
        ValorContable: z.number(),
        EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
        MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        ValorFiscal: z.number(),
        TarifaDel9Porciento: z.number(),
        TarifaDel15Porciento: z.number(),
        TarifaDel20Porciento: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27Porciento: z.number(),
        TarifaGeneralArticulo240ET: z.number(),
        Otras: z.number()
      }),
      Otras: z.object({
        ValorContable: z.number(),
        EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
        MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        ValorFiscal: z.number(),
        TarifaDel9Porciento: z.number(),
        TarifaDel15Porciento: z.number(),
        TarifaDel20Porciento: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27Porciento: z.number(),
        TarifaGeneralArticulo240ET: z.number(),
        Otras: z.number()
      }),
      Total: z.object({
        ValorContable: z.number(),
        EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
        MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        ValorFiscal: z.number(),
        TarifaDel9Porciento: z.number(),
        TarifaDel15Porciento: z.number(),
        TarifaDel20Porciento: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27Porciento: z.number(),
        TarifaGeneralArticulo240ET: z.number(),
        Otras: z.number()
      })
    }),
    PerdidaEnLaVentaOEnajenacionDeActivosFijos: z.object({
      PropiedadesPlantaYEquipo: z.object({
        ValorContable: z.number(),
        EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
        MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        ValorFiscal: z.number(),
        TarifaDel9Porciento: z.number(),
        TarifaDel15Porciento: z.number(),
        TarifaDel20Porciento: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27Porciento: z.number(),
        TarifaGeneralArticulo240ET: z.number(),
        Otras: z.number()
      }),
      PropiedadesDeInversion: z.object({
        ValorContable: z.number(),
        EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
        MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        ValorFiscal: z.number(),
        TarifaDel9Porciento: z.number(),
        TarifaDel15Porciento: z.number(),
        TarifaDel20Porciento: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27Porciento: z.number(),
        TarifaGeneralArticulo240ET: z.number(),
        Otras: z.number()
      }),
      ActivosNoCorrientesMantenidosParaLaVentaEntregarAPropietarios: z.object({
        ValorContable: z.number(),
        EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
        MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        ValorFiscal: z.number(),
        TarifaDel9Porciento: z.number(),
        TarifaDel15Porciento: z.number(),
        TarifaDel20Porciento: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27Porciento: z.number(),
        TarifaGeneralArticulo240ET: z.number(),
        Otras: z.number()
      }),
      ValoracionYVentaDeInversionesFondoDeLiquidezYTitulosParticipativos: z.object(
        {
          ValorContable: z.number(),
          EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
          MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
          ValorFiscal: z.number(),
          TarifaDel9Porciento: z.number(),
          TarifaDel15Porciento: z.number(),
          TarifaDel20Porciento: z.number(),
          MegaInversiones: z.number(),
          MegaInversiones27Porciento: z.number(),
          TarifaGeneralArticulo240ET: z.number(),
          Otras: z.number()
        }
      ),
      PorDisposicionDeOtrosInstrumentosFinancieros: z.object({
        ValorContable: z.number(),
        EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
        MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        ValorFiscal: z.number(),
        TarifaDel9Porciento: z.number(),
        TarifaDel15Porciento: z.number(),
        TarifaDel20Porciento: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27Porciento: z.number(),
        TarifaGeneralArticulo240ET: z.number(),
        Otras: z.number()
      }),
      ActivosIntangibles: z.object({
        ValorContable: z.number(),
        EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
        MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        ValorFiscal: z.number(),
        TarifaDel9Porciento: z.number(),
        TarifaDel15Porciento: z.number(),
        TarifaDel20Porciento: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27Porciento: z.number(),
        TarifaGeneralArticulo240ET: z.number(),
        Otras: z.number()
      }),
      DescuentoEnOperacionesDeFactoring: z.object({
        ValorContable: z.number(),
        EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
        MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        ValorFiscal: z.number(),
        TarifaDel9Porciento: z.number(),
        TarifaDel15Porciento: z.number(),
        TarifaDel20Porciento: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27Porciento: z.number(),
        TarifaGeneralArticulo240ET: z.number(),
        Otras: z.number()
      }),
      InversionesEnAccionesYOtrasParticipaciones: z.object({
        ValorContable: z.number(),
        EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
        MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        ValorFiscal: z.number(),
        TarifaDel9Porciento: z.number(),
        TarifaDel15Porciento: z.number(),
        TarifaDel20Porciento: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27Porciento: z.number(),
        TarifaGeneralArticulo240ET: z.number(),
        Otras: z.number()
      }),
      Otros: z.object({
        ValorContable: z.number(),
        EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
        MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        ValorFiscal: z.number(),
        TarifaDel9Porciento: z.number(),
        TarifaDel15Porciento: z.number(),
        TarifaDel20Porciento: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27Porciento: z.number(),
        TarifaGeneralArticulo240ET: z.number(),
        Otras: z.number()
      }),
      Total: z.object({
        ValorContable: z.number(),
        EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
        MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        ValorFiscal: z.number(),
        TarifaDel9Porciento: z.number(),
        TarifaDel15Porciento: z.number(),
        TarifaDel20Porciento: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27Porciento: z.number(),
        TarifaGeneralArticulo240ET: z.number(),
        Otras: z.number()
      })
    }),
    GastosPorProvisionesPasivosDeMontoOFechaInciertos: z.object({
      Garantias: z.object({
        ValorContable: z.number(),
        EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
        MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        ValorFiscal: z.number(),
        TarifaDel9Porciento: z.number(),
        TarifaDel15Porciento: z.number(),
        TarifaDel20Porciento: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27Porciento: z.number(),
        TarifaGeneralArticulo240ET: z.number(),
        Otras: z.number()
      }),
      ContratosOnerosos: z.object({
        ValorContable: z.number(),
        EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
        MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        ValorFiscal: z.number(),
        TarifaDel9Porciento: z.number(),
        TarifaDel15Porciento: z.number(),
        TarifaDel20Porciento: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27Porciento: z.number(),
        TarifaGeneralArticulo240ET: z.number(),
        Otras: z.number()
      }),
      Litigios: z.object({
        ValorContable: z.number(),
        EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
        MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        ValorFiscal: z.number(),
        TarifaDel9Porciento: z.number(),
        TarifaDel15Porciento: z.number(),
        TarifaDel20Porciento: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27Porciento: z.number(),
        TarifaGeneralArticulo240ET: z.number(),
        Otras: z.number()
      }),
      ReembolsosAClientes: z.object({
        ValorContable: z.number(),
        EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
        MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        ValorFiscal: z.number(),
        TarifaDel9Porciento: z.number(),
        TarifaDel15Porciento: z.number(),
        TarifaDel20Porciento: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27Porciento: z.number(),
        TarifaGeneralArticulo240ET: z.number(),
        Otras: z.number()
      }),
      ReestructuracionesDeNegocios: z.object({
        ValorContable: z.number(),
        EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
        MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        ValorFiscal: z.number(),
        TarifaDel9Porciento: z.number(),
        TarifaDel15Porciento: z.number(),
        TarifaDel20Porciento: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27Porciento: z.number(),
        TarifaGeneralArticulo240ET: z.number(),
        Otras: z.number()
      }),
      PasivosContingentesAsumidosEnUnaCombinacionDeNegocios: z.object({
        ValorContable: z.number(),
        EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
        MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        ValorFiscal: z.number(),
        TarifaDel9Porciento: z.number(),
        TarifaDel15Porciento: z.number(),
        TarifaDel20Porciento: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27Porciento: z.number(),
        TarifaGeneralArticulo240ET: z.number(),
        Otras: z.number()
      }),
      Otros: z.object({
        ValorContable: z.number(),
        EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
        MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        ValorFiscal: z.number(),
        TarifaDel9Porciento: z.number(),
        TarifaDel15Porciento: z.number(),
        TarifaDel20Porciento: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27Porciento: z.number(),
        TarifaGeneralArticulo240ET: z.number(),
        Otras: z.number()
      }),
      Total: z.object({
        ValorContable: z.number(),
        EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
        MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        ValorFiscal: z.number(),
        TarifaDel9Porciento: z.number(),
        TarifaDel15Porciento: z.number(),
        TarifaDel20Porciento: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27Porciento: z.number(),
        TarifaGeneralArticulo240ET: z.number(),
        Otras: z.number()
      })
    }),
    OtrosGastos: z.object({
      TransferenciasSubvencionesYAyudasGubernamentales: z.object({
        ValorContable: z.number(),
        EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
        MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        ValorFiscal: z.number(),
        TarifaDel9Porciento: z.number(),
        TarifaDel15Porciento: z.number(),
        TarifaDel20Porciento: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27Porciento: z.number(),
        TarifaGeneralArticulo240ET: z.number(),
        Otras: z.number()
      }),
      DonacionesAportacionesYSimilares: z.object({
        ValorContable: z.number(),
        TarifaDel9Porciento: z.number(),
        TarifaDel15Porciento: z.number(),
        TarifaDel20Porciento: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27Porciento: z.number(),
        TarifaGeneralArticulo240ET: z.number(),
        Otras: z.number()
      }),
      ContribucionesAEducacionDeLosEmpleadosArt1072DelET: z.object({
        ValorContable: z.number(),
        EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
        MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        ValorFiscal: z.number(),
        TarifaDel9Porciento: z.number(),
        TarifaDel15Porciento: z.number(),
        TarifaDel20Porciento: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27Porciento: z.number(),
        TarifaGeneralArticulo240ET: z.number(),
        Otras: z.number()
      }),
      Otros: z.object({
        ValorContable: z.number(),
        EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
        MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        ValorFiscal: z.number(),
        TarifaDel9Porciento: z.number(),
        TarifaDel15Porciento: z.number(),
        TarifaDel20Porciento: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27Porciento: z.number(),
        TarifaGeneralArticulo240ET: z.number(),
        Otras: z.number()
      }),
      DeduccionesFiscalesNoReconocidosContablemente: z.object({
        MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        ValorFiscal: z.number(),
        TarifaDel9Porciento: z.number(),
        TarifaDel15Porciento: z.number(),
        TarifaDel20Porciento: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27Porciento: z.number(),
        TarifaGeneralArticulo240ET: z.number(),
        Otras: z.number()
      }),
      Total: z.object({
        ValorContable: z.number(),
        EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
        MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        ValorFiscal: z.number(),
        TarifaDel9Porciento: z.number(),
        TarifaDel15Porciento: z.number(),
        TarifaDel20Porciento: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27Porciento: z.number(),
        TarifaGeneralArticulo240ET: z.number(),
        Otras: z.number()
      })
    }),
    PerdidasNetasEnOperacionesDiscontinuas: z.object({
      ValorContable: z.number(),
      EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
      MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number()
    }),
    MenorGastoODeduccionAjustePreciosDeTransferencia: z.object({
      MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
      ValorFiscal: z.number(),
      TarifaDel9Porciento: z.number(),
      TarifaDel15Porciento: z.number(),
      TarifaDel20Porciento: z.number(),
      MegaInversiones: z.number(),
      MegaInversiones27Porciento: z.number(),
      TarifaGeneralArticulo240ET: z.number(),
      Otras: z.number()
    }),
    TotalGastos: z.object({
      ValorContable: z.number(),
      EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
      MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
      MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
      ValorFiscal: z.number(),
      TarifaDel9Porciento: z.number(),
      TarifaDel15Porciento: z.number(),
      TarifaDel20Porciento: z.number(),
      MegaInversiones: z.number(),
      MegaInversiones27Porciento: z.number(),
      TarifaGeneralArticulo240ET: z.number(),
      Otras: z.number()
    })
  }),
  GanaciaOPerdidaAntesDeImpuestoALaRentaORentaLiquida: z.object({
    ValorContable: z.number(),
    EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
    MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
    MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
    ValorFiscal: z.number(),
    TarifaDel9Porciento: z.number(),
    TarifaDel15Porciento: z.number(),
    TarifaDel20Porciento: z.number(),
    MegaInversiones: z.number(),
    MegaInversiones27Porciento: z.number(),
    TarifaGeneralArticulo240ET: z.number(),
    Otras: z.number()
  }),
  InformativoClasificacionDiferencias: z.object({
    IngresosNoConstitutivosDeRentaNiGananciaOcasional: z.object({
      IngresosNoConstitutivosRenta: z.object({
        ValorFiscalAlQueTieneDerecho: z.number(),
        ValorFiscalSolicitado: z.number()
      }),
      UtilidadEnLaVentaOEnajenacionDeActivosPoseidosPorDosAniosOMasGananciaOcasional: z.object(
        {
          ValorFiscalAlQueTieneDerecho: z.number(),
          ValorFiscalSolicitado: z.number()
        }
      ),
      GananciasPorElMetodoDeParticipacion: z.object({
        ValorFiscalAlQueTieneDerecho: z.number(),
        ValorFiscalSolicitado: z.number()
      }),
      OtrosBeneficiosFiscales: z.object({
        DeduccionEspecialesPorInversionesOEnAdquisicionDeActivosContratoDeEstabilidadJuridica: z.object(
          {
            ValorFiscalAlQueTieneDerecho: z.number(),
            ValorFiscalSolicitado: z.number()
          }
        ),
        InversionesEnInvestigacionDesarrolloTecnologicoEInnovacion: z.object({
          ValorFiscalAlQueTieneDerecho: z.number(),
          ValorFiscalSolicitado: z.number()
        }),
        MayorValorDelCostoDelosActivosFijosPorReajustesFiscalesOSaneamientosAnio1995: z.object(
          {
            ValorFiscalAlQueTieneDerecho: z.number(),
            ValorFiscalSolicitado: z.number()
          }
        ),
        RecuperacionDeDeduccionesValorFiscal: z.object({
          ValorFiscalAlQueTieneDerecho: z.number(),
          ValorFiscalSolicitado: z.number()
        }),
        SalariosConDeduccionesEspeciales: z.object({
          ValorFiscalAlQueTieneDerecho: z.number(),
          ValorFiscalSolicitado: z.number()
        }),
        ReintegroORecuperacionDeProvisionesQueConstituyandifernciasVermanentesEnPeriodosAnterioresProvisionesParaGastosNoDeducibles: z.object(
          {
            ValorFiscalAlQueTieneDerecho: z.number(),
            ValorFiscalSolicitado: z.number()
          }
        ),
        AjustePorAtribucionDeRentasEstablecimientosPermanentesYSucursales: z.object(
          {
            ValorFiscalAlQueTieneDerecho: z.number(),
            ValorFiscalSolicitado: z.number()
          }
        ),
        OtrosBeneficiosFiscalesDeNaturalezaPermanente: z.object({
          ValorFiscalAlQueTieneDerecho: z.number(),
          ValorFiscalSolicitado: z.number()
        })
      }),
      Total: z.object({
        ValorFiscalAlQueTieneDerecho: z.number(),
        ValorFiscalSolicitado: z.number()
      })
    }),
    DiferenciasPermanentesQueAumentanLaRentaLiquida: z.object({
      PerdidasYGastosNoDeducibles: z.object({
        DeduccionesDeImpuestosGMFPatrimonioVehiculosEntreOtros: z.object({
          ValorFiscalAlQueTieneDerecho: z.number(),
          ValorFiscalSolicitado: z.number()
        }),
        GastosSinSoporte: z.object({
          ValorFiscalAlQueTieneDerecho: z.number(),
          ValorFiscalSolicitado: z.number()
        }),
        PagosAlExteriorSinLaPruebaDelaretencionEnLaFuente: z.object({
          ValorFiscalAlQueTieneDerecho: z.number(),
          ValorFiscalSolicitado: z.number()
        }),
        PagosAlExteriorQueExcedenEl15PorcientoDeLaRentaLiquida: z.object({
          ValorFiscalAlQueTieneDerecho: z.number(),
          ValorFiscalSolicitado: z.number()
        }),
        DonacionesQueNoCumplanLosRequisitosLegales: z.object({
          ValorFiscalAlQueTieneDerecho: z.number(),
          ValorFiscalSolicitado: z.number()
        }),
        SalariosSinElPagoDelosAportesParafiscales: z.object({
          ValorFiscalAlQueTieneDerecho: z.number(),
          ValorFiscalSolicitado: z.number()
        }),
        GastosDeVigenciasAnteriores: z.object({
          ValorFiscalAlQueTieneDerecho: z.number(),
          ValorFiscalSolicitado: z.number()
        }),
        GastoFinancieroNoDeduciblePorReglaDeSubcapitalizacion: z.object({
          ValorFiscalAlQueTieneDerecho: z.number(),
          ValorFiscalSolicitado: z.number()
        }),
        OtrosGastosFinancierosNoDeducibles: z.object({
          ValorFiscalAlQueTieneDerecho: z.number(),
          ValorFiscalSolicitado: z.number()
        }),
        DeterioroDeInversionesParaCubrirUnaperdidaEnEnajenacionDeAcciones: z.object(
          {
            ValorFiscalAlQueTieneDerecho: z.number(),
            ValorFiscalSolicitado: z.number()
          }
        ),
        PerdidaEnLaEnajenacionDeAccionesYVentaDeBienesInmuebles: z.object({
          ValorFiscalAlQueTieneDerecho: z.number(),
          ValorFiscalSolicitado: z.number()
        }),
        PerdidasNoDeduciblesPorFaltantesDeInventarios: z.object({
          ValorFiscalAlQueTieneDerecho: z.number(),
          ValorFiscalSolicitado: z.number()
        }),
        PerdidasPorElMetodoDeParticipacion: z.object({
          ValorFiscalAlQueTieneDerecho: z.number(),
          ValorFiscalSolicitado: z.number()
        }),
        PagosDeRegaliasPorConceptoDeIntangiblesAVinculadosDelExteriorYZonasFrancas: z.object(
          {
            ValorFiscalAlQueTieneDerecho: z.number(),
            ValorFiscalSolicitado: z.number()
          }
        ),
        LimitacionDeCostosPorComprasAProveedoresFicticesOInsolventes: z.object({
          ValorFiscalAlQueTieneDerecho: z.number(),
          ValorFiscalSolicitado: z.number()
        }),
        ImpuestosMultasSancionesInteresesMoratoriosYLasCondneasNoDeducibles: z.object(
          {
            ValorFiscalAlQueTieneDerecho: z.number(),
            ValorFiscalSolicitado: z.number()
          }
        ),
        GastosQueNoGuardanRelacionDeCausalidadYNecesidadConLaActividadProductoraDeRenta: z.object(
          {
            ValorFiscalAlQueTieneDerecho: z.number(),
            ValorFiscalSolicitado: z.number()
          }
        ),
        MontoQueSuperaElLimitePermitidoParaAtencionesAClientesProveedoresYEmpleados: z.object(
          {
            ValorFiscalAlQueTieneDerecho: z.number(),
            ValorFiscalSolicitado: z.number()
          }
        ),
        ImportacionDeTecnologiaPatentesYMarcas: z.object({
          ValorFiscalAlQueTieneDerecho: z.number(),
          ValorFiscalSolicitado: z.number()
        }),
        GastosNoDeduciblesEnContratosDeArrendamientosDeNaturalezaPermanente: z.object(
          {
            ValorFiscalAlQueTieneDerecho: z.number(),
            ValorFiscalSolicitado: z.number()
          }
        ),
        GastosNoDeduciblesPorOperacionesGravadasConIVARealizadasConPersonasNoInscritasEnElRegimenComunDelImpuestosobreLasVentas: z.object(
          {
            ValorFiscalAlQueTieneDerecho: z.number(),
            ValorFiscalSolicitado: z.number()
          }
        ),
        GastoNoDeduciblePorDonaciones: z.object({
          ValorFiscalAlQueTieneDerecho: z.number(),
          ValorFiscalSolicitado: z.number()
        }),
        GastosNoDeduciblesAtribuiblesAIngresosExentosONoConstutivosDeRentaNiGananciaOcasional: z.object(
          {
            ValorFiscalAlQueTieneDerecho: z.number(),
            ValorFiscalSolicitado: z.number()
          }
        ),
        OtrosGastosNoDeduciblesDeNaturalezaPermanente: z.object({
          ValorFiscalAlQueTieneDerecho: z.number(),
          ValorFiscalSolicitado: z.number()
        })
      }),
      OtrosAjustes: z.object({
        DividendosDeclaradosAFavorDelContribuyenteEnElPeriodoFiscal: z.object({
          ValorFiscalAlQueTieneDerecho: z.number(),
          ValorFiscalSolicitado: z.number()
        }),
        RentasLiquidasPorVentasDeInversiones: z.object({
          ValorFiscalAlQueTieneDerecho: z.number(),
          ValorFiscalSolicitado: z.number()
        }),
        MayorIngresoAjustesPorPreciosDeTransferencia: z.object({
          ValorFiscalAlQueTieneDerecho: z.number(),
          ValorFiscalSolicitado: z.number()
        }),
        MenorCostoODeduccionAjustesPorPreciosDeTransferencia: z.object({
          ValorFiscalAlQueTieneDerecho: z.number(),
          ValorFiscalSolicitado: z.number()
        }),
        RentasLiquidasPorRecuperacionDeDeduccionesDeNaturalezaPermanente: z.object(
          {
            ValorFiscalAlQueTieneDerecho: z.number(),
            ValorFiscalSolicitado: z.number()
          }
        ),
        AjustePorAtribucionDeRentasEstablecimientosPermanentesYSucursales: z.object(
          {
            ValorFiscalAlQueTieneDerecho: z.number(),
            ValorFiscalSolicitado: z.number()
          }
        ),
        OtrosAjustes: z.object({
          ValorFiscalAlQueTieneDerecho: z.number(),
          ValorFiscalSolicitado: z.number()
        })
      }),
      Total: z.object({
        ValorFiscalAlQueTieneDerecho: z.number(),
        ValorFiscalSolicitado: z.number()
      })
    }),
    GananciaOPerdidaContableConDiferenciasPermanentes: z.object({
      ValorFiscalAlQueTieneDerecho: z.number(),
      ValorFiscalSolicitado: z.number()
    }),
    AjustesAlResultadoContablePorDiferenciasTemporalesQueAfectenAlResultado: z.object(
      {
        DiferenciasTemporalesDeducibles: z.object({
          PerdidasPorDeterioroDelValorDeLosActivos: z.object({
            Inventarios: z.object({
              Generaciones: z.number(),
              Reversiones: z.number()
            }),
            PropiedadesPlantaYEquipo: z.object({
              Generaciones: z.number(),
              Reversiones: z.number()
            }),
            ActivosIntangibles: z.object({
              Generaciones: z.number(),
              Reversiones: z.number()
            }),
            ActivosDeExploracionYEvaluacionDeRecursosMinerales: z.object({
              Generaciones: z.number(),
              Reversiones: z.number()
            }),
            PropiedadesDeInversionMedidasAlModeloDeCosto: z.object({
              Generaciones: z.number(),
              Reversiones: z.number()
            }),
            ActivosNoCorrientesMantenidosParaLaVentaDistribuirALosPropietarios: z.object(
              { Generaciones: z.number(), Reversiones: z.number() }
            ),
            ActivosBiologicosMedidosAlModeloDeCosto: z.object({
              Generaciones: z.number(),
              Reversiones: z.number()
            }),
            BienesDeArteYCulturaMedidosAlModeloDeCosto: z.object({
              Generaciones: z.number(),
              Reversiones: z.number()
            }),
            ActivosFinancierosDistintosACarteraDeCreditoYOperacionesDeLeasing: z.object(
              { Generaciones: z.number(), Reversiones: z.number() }
            ),
            CarteraDeCreditoYOperacionesDeLeasing: z.object({
              Generaciones: z.number(),
              Reversiones: z.number()
            }),
            OtrasInversionesMedidasAlCostoOPorElMetodoDeLaParticipacion: z.object(
              { Generaciones: z.number(), Reversiones: z.number() }
            ),
            OtrasPerdidasPorDeterioro: z.object({
              Generaciones: z.number(),
              Reversiones: z.number()
            })
          }),
          GastosPorDepreciacionQueHanExcedidoElLimiteMaximoFiscal: z.object({
            PropiedadesPlantaYEquipo: z.object({
              Generaciones: z.number(),
              Reversiones: z.number()
            }),
            PropiedadesDeInversion: z.object({
              Generaciones: z.number(),
              Reversiones: z.number()
            }),
            ActivosBiologicos: z.object({
              Generaciones: z.number(),
              Reversiones: z.number()
            }),
            BienesDeArteYCultura: z.object({
              Generaciones: z.number(),
              Reversiones: z.number()
            }),
            OtrosActivos: z.object({
              Generaciones: z.number(),
              Reversiones: z.number()
            })
          }),
          GastosPorAmortizacionQueHanExcedidoElLimiteMaximoFiscal: z.object({
            Generaciones: z.number(),
            Reversiones: z.number()
          }),
          PerdidasPorMedicionAValorRazonable: z.object({
            PropiedadesDeInversion: z.object({
              Generaciones: z.number(),
              Reversiones: z.number()
            }),
            InstrumentosDerivados: z.object({
              Generaciones: z.number(),
              Reversiones: z.number()
            }),
            OtrosInstrumentosFinancierosDistintosATitulosDeRentaFijaMedidosAlModeloDelValorRazonable: z.object(
              { Generaciones: z.number(), Reversiones: z.number() }
            )
          }),
          PerdidaPorDiferenciaEnCambio: z.object({
            Generaciones: z.number(),
            Reversiones: z.number()
          }),
          PerdidasEsperadasEnContratosDeconstruccionYOtrosServiciosProvisionesPorContratosOnerosos: z.object(
            { Generaciones: z.number(), Reversiones: z.number() }
          ),
          InteresesImplicitosVentasOPrestamosConcedidosATerceros: z.object({
            Generaciones: z.number(),
            Reversiones: z.number()
          }),
          OtrasProvisionesAsociadasAPasivosDeMontoOFechaInciertos: z.object({
            Generaciones: z.number(),
            Reversiones: z.number()
          }),
          PorBeneficiosAEmpleados: z.object({
            Generaciones: z.number(),
            Reversiones: z.number()
          }),
          GastosPorActualizacionDeProvisionesReconocidasAValorPresente: z.object(
            { Generaciones: z.number(), Reversiones: z.number() }
          ),
          CostosPorPrestamosAtribuiblesAActivosAptosParaEntidadesQueApliacanLaNIIFParaPYMES: z.object(
            { Generaciones: z.number(), Reversiones: z.number() }
          ),
          PasivosPorIngresosDiferidosProductoDeProgramasDeFidelizacionDeClientesQueNoHanSidoReversadosContablementePeroQueDebenSerGravadosFiscalmente: z.object(
            { Generaciones: z.number(), Reversiones: z.number() }
          ),
          AjustesPorContratosDeconcesionQueIncorporanLasEtapasDeconstruccionAdministracionOperacionYMantenimiento: z.object(
            { Generaciones: z.number(), Reversiones: z.number() }
          ),
          GastosDeEstablecimiento: z.object({
            Generaciones: z.number(),
            Reversiones: z.number()
          }),
          GastosDeInvestigacionDesarrolloEInnovacion: z.object({
            Generaciones: z.number(),
            Reversiones: z.number()
          }),
          PorPagosBasadosEnAcciones: z.object({
            Generaciones: z.number(),
            Reversiones: z.number()
          }),
          EnLaExplotacionDeMinasPetroleoYGas: z.object({
            Generaciones: z.number(),
            Reversiones: z.number()
          }),
          RentasConDerechoACobroCausadasQueNoCumplieronCriteriosParaSerContabilizadasComoIngresosDelPeriodoGravable: z.object(
            { Generaciones: z.number(), Reversiones: z.number() }
          ),
          OtrasDiferenciasTemporalesDeducibles: z.object({
            Generaciones: z.number(),
            Reversiones: z.number()
          }),
          TotalDiferenciasTemporalesDeducibles: z.object({
            Generaciones: z.number(),
            Reversiones: z.number()
          })
        }),
        DiferenciasTemporalesImponiblesGravables: z.object({
          GastosPorDepreciacionesDeActivosFijosNoAceptadasFiscalmenteDeNaturalezaTemporaria: z.object(
            {
              CostosAtribuidosEnLaFechaDeTransicionALosNuevosMarcosTecnicosNormativosContables: z.object(
                { Generaciones: z.number(), Reversiones: z.number() }
              ),
              AplicacionDelModeloDeRevaluacion: z.object({
                Generaciones: z.number(),
                Reversiones: z.number()
              }),
              CostosEstimadosDeDesmantelamiento: z.object({
                Generaciones: z.number(),
                Reversiones: z.number()
              }),
              Otros: z.object({
                Generaciones: z.number(),
                Reversiones: z.number()
              })
            }
          ),
          GastosPorAmortizacionesDeActivosIntangiblesNoAceptadasFiscalmenteDeNaturalezaTemporaria: z.object(
            {
              CostosAtribuidosEnLaFechaDeTransicionALosNuevosMarcosTecnicosNormativosContables: z.object(
                { Generaciones: z.number(), Reversiones: z.number() }
              ),
              AplicacionDelModeloDeRevaluacion: z.object({
                Generaciones: z.number(),
                Reversiones: z.number()
              }),
              PlusvaliaGoodWillFondoDeComercioYCreditoMercantil: z.object({
                Generaciones: z.number(),
                Reversiones: z.number()
              }),
              Otros: z.object({
                Generaciones: z.number(),
                Reversiones: z.number()
              })
            }
          ),
          GananciasPorLaMedicionAValorRazonable: z.object({
            PropiedadesDeInversion: z.object({
              Generaciones: z.number(),
              Reversiones: z.number()
            }),
            InstrumentosDerivados: z.object({
              Generaciones: z.number(),
              Reversiones: z.number()
            }),
            OtrosInstrumentosFinancierosDistintosATitulosDeRentaFijaMedidosAlValorRazonable: z.object(
              { Generaciones: z.number(), Reversiones: z.number() }
            )
          }),
          GananciaPorDiferenciaEnCambio: z.object({
            Generaciones: z.number(),
            Reversiones: z.number()
          }),
          IngresosProvenientesPorContraprestacionVariable: z.object({
            Generaciones: z.number(),
            Reversiones: z.number()
          }),
          InteresesImplicitosComprasOPrestamosObtenidos: z.object({
            Generaciones: z.number(),
            Reversiones: z.number()
          }),
          DeduccionEspecialDelImpuestoSobreLasVentas: z.object({
            Generaciones: z.number(),
            Reversiones: z.number()
          }),
          OtrasDiferenciasTemporalesImponiblesGravables: z.object({
            Generaciones: z.number(),
            Reversiones: z.number()
          }),
          TotalDiferenciasTemporalesImponibles: z.object({
            Generaciones: z.number(),
            Reversiones: z.number()
          })
        }),
        OtrasDiferenciasTemporales: z.object({
          MedicionesDeActivosBiologicosAlValorRazonableMenosCostosDeVenta: z.object(
            {
              CambiosEnElValorRazonableMenosCostosDeVenta: z.object({
                GeneracionesDeducibles: z.number(),
                GeneracionesImponibles: z.number(),
                ReversionesDeducibles: z.number(),
                ReversionesImponibles: z.number()
              }),
              CostosDeProduccionAtribuiblesALaTransformacionBiologicaOPerdidasCausadasEnCasoDeDestruccionDaniosMuerteYOtrosEventos: z.object(
                {
                  GeneracionesDeducibles: z.number(),
                  GeneracionesImponibles: z.number(),
                  ReversionesDeducibles: z.number(),
                  ReversionesImponibles: z.number()
                }
              ),
              DepreciacionFiscalDeAnimalesProductores: z.object({
                GeneracionesDeducibles: z.number(),
                GeneracionesImponibles: z.number(),
                ReversionesDeducibles: z.number(),
                ReversionesImponibles: z.number()
              })
            }
          ),
          AjustesPorTitulosDeRentaFijaActivosFinancierosMedidosAlModeloDelValorRazonable: z.object(
            {
              AjustesPorValorRazonable: z.object({
                GeneracionesDeducibles: z.number(),
                GeneracionesImponibles: z.number(),
                ReversionesDeducibles: z.number(),
                ReversionesImponibles: z.number()
              }),
              AjustePorRendimientosFinancierosCalculadosDeManerLinealParaEfectosFiscales: z.object(
                {
                  GeneracionesDeducibles: z.number(),
                  GeneracionesImponibles: z.number(),
                  ReversionesDeducibles: z.number(),
                  ReversionesImponibles: z.number()
                }
              )
            }
          ),
          GastosPorAmortizacionFiscalAcelerada: z.object({
            GeneracionesDeducibles: z.number(),
            GeneracionesImponibles: z.number(),
            ReversionesDeducibles: z.number(),
            ReversionesImponibles: z.number()
          }),
          AjustesPorOperacionesDeReportoORepoSimultaneasYDeTransferenciaTemporialDeValores: z.object(
            {
              GeneracionesDeducibles: z.number(),
              GeneracionesImponibles: z.number(),
              ReversionesDeducibles: z.number(),
              ReversionesImponibles: z.number()
            }
          ),
          ContratosDeArrendamientos: z.object({
            GeneracionesDeducibles: z.number(),
            GeneracionesImponibles: z.number(),
            ReversionesDeducibles: z.number(),
            ReversionesImponibles: z.number()
          }),
          TotalOtrasDiferenciasTemporales: z.object({
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
      }
    ),
    Total: z.object({
      GeneracionesDeducibles: z.number(),
      GeneracionesImponibles: z.number(),
      ReversionesDeducibles: z.number(),
      ReversionesImponibles: z.number()
    })
  }),
  RentaLiquidaOrdinariaDelEjercicioIncluyendeoDividendosYAntesDeLasRentasLiquidasPasivasECE: z.number(),
  OPerdidaLiquidaOrdinariaDelEjercicioIncluyendoDividendosYAntesDeLaRentasLiquidasPasivasECE: z.number(),
  AjustesParaLiquidacion: z.object({
    MenosValorInversionesRealizadasEnElPeriodo: z.number(),
    MasValorInversionesLiquidasEnElPeriodo: z.number()
  }),
  RentasPasivasECE: z.object({
    Ingresos: z.object({
      DividendosRetirosYRepartos: z.object({
        ValorContable: z.number(),
        EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
        MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        ValorFiscal: z.number(),
        TarifaDel9Porciento: z.number(),
        TarifaDel15Porciento: z.number(),
        TarifaDel20Porciento: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27Porciento: z.number(),
        TarifaGeneralArticulo240ET: z.number(),
        Otras: z.number()
      }),
      InteresesYRendimientosFinancieros: z.object({
        ValorContable: z.number(),
        EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
        MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        ValorFiscal: z.number(),
        TarifaDel9Porciento: z.number(),
        TarifaDel15Porciento: z.number(),
        TarifaDel20Porciento: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27Porciento: z.number(),
        TarifaGeneralArticulo240ET: z.number(),
        Otras: z.number()
      }),
      ProvenientesDeActivosIntangibles: z.object({
        ValorContable: z.number(),
        EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
        MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        ValorFiscal: z.number(),
        TarifaDel9Porciento: z.number(),
        TarifaDel15Porciento: z.number(),
        TarifaDel20Porciento: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27Porciento: z.number(),
        TarifaGeneralArticulo240ET: z.number(),
        Otras: z.number()
      }),
      EnajenacionOCesionDeDerechos: z.object({
        ValorContable: z.number(),
        EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
        MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        ValorFiscal: z.number(),
        TarifaDel9Porciento: z.number(),
        TarifaDel15Porciento: z.number(),
        TarifaDel20Porciento: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27Porciento: z.number(),
        TarifaGeneralArticulo240ET: z.number(),
        Otras: z.number()
      }),
      EnajenacionOArrendamientoDeInmuebles: z.object({
        ValorContable: z.number(),
        EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
        MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        ValorFiscal: z.number(),
        TarifaDel9Porciento: z.number(),
        TarifaDel15Porciento: z.number(),
        TarifaDel20Porciento: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27Porciento: z.number(),
        TarifaGeneralArticulo240ET: z.number(),
        Otras: z.number()
      }),
      CompraOVentaDeBienesCorporales: z.object({
        ValorContable: z.number(),
        EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
        MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        ValorFiscal: z.number(),
        TarifaDel9Porciento: z.number(),
        TarifaDel15Porciento: z.number(),
        TarifaDel20Porciento: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27Porciento: z.number(),
        TarifaGeneralArticulo240ET: z.number(),
        Otras: z.number()
      }),
      PorServicios: z.object({
        ValorContable: z.number(),
        EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
        MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        ValorFiscal: z.number(),
        TarifaDel9Porciento: z.number(),
        TarifaDel15Porciento: z.number(),
        TarifaDel20Porciento: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27Porciento: z.number(),
        TarifaGeneralArticulo240ET: z.number(),
        Otras: z.number()
      }),
      Total: z.object({
        ValorContable: z.number(),
        EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
        MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
        ValorFiscal: z.number(),
        TarifaDel9Porciento: z.number(),
        TarifaDel15Porciento: z.number(),
        TarifaDel20Porciento: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27Porciento: z.number(),
        TarifaGeneralArticulo240ET: z.number(),
        Otras: z.number()
      })
    }),
    Costos: z.object({
      ValorContable: z.number(),
      EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
      MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
      MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
      ValorFiscal: z.number(),
      TarifaDel9Porciento: z.number(),
      TarifaDel15Porciento: z.number(),
      TarifaDel20Porciento: z.number(),
      MegaInversiones: z.number(),
      MegaInversiones27Porciento: z.number(),
      TarifaGeneralArticulo240ET: z.number(),
      Otras: z.number()
    }),
    Deducciones: z.object({
      ValorContable: z.number(),
      EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
      MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
      MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
      ValorFiscal: z.number(),
      TarifaDel9Porciento: z.number(),
      TarifaDel15Porciento: z.number(),
      TarifaDel20Porciento: z.number(),
      MegaInversiones: z.number(),
      MegaInversiones27Porciento: z.number(),
      TarifaGeneralArticulo240ET: z.number(),
      Otras: z.number()
    })
  }),
  RentasLiquidasPasivasECE: z.object({
    ValorContable: z.number(),
    EfectoConversionMonedaFuncionalDiferenteAlPesoColombiano: z.number(),
    MenorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
    MayorValorFiscalPorReconocimientoExencionesLimitaciones: z.number(),
    ValorFiscal: z.number(),
    TarifaDel9Porciento: z.number(),
    TarifaDel15Porciento: z.number(),
    TarifaDel20Porciento: z.number(),
    MegaInversiones: z.number(),
    MegaInversiones27Porciento: z.number(),
    TarifaGeneralArticulo240ET: z.number(),
    Otras: z.number()
  }),
  RentaLiquidaPorRecuperacionDeDeducciones: z.object({
    ValorFiscal: z.number(),
    TarifaDel9Porciento: z.number(),
    TarifaDel15Porciento: z.number(),
    TarifaDel20Porciento: z.number(),
    MegaInversiones: z.number(),
    MegaInversiones27Porciento: z.number(),
    TarifaGeneralArticulo240ET: z.number(),
    Otras: z.number()
  }),
  RentaLiquidaOrdinariaDelEjercicioExcedenteNetoIncluyeUnicamenteDividendosDeSociedadesNacionalesATarifaGeneral: z.object(
    {
      ValorFiscal: z.number(),
      TarifaDel9Porciento: z.number(),
      TarifaDel15Porciento: z.number(),
      TarifaDel20Porciento: z.number(),
      MegaInversiones: z.number(),
      MegaInversiones27Porciento: z.number(),
      TarifaGeneralArticulo240ET: z.number(),
      Otras: z.number()
    }
  ),
  OPerdidaLiquidaDelEjercicioIncluyeUnicamenteDividendosDeSociedadesNacionalesATarifaGeneral: z.object(
    {
      ValorFiscal: z.number(),
      TarifaDel9Porciento: z.number(),
      TarifaDel15Porciento: z.number(),
      TarifaDel20Porciento: z.number(),
      MegaInversiones: z.number(),
      MegaInversiones27Porciento: z.number(),
      TarifaGeneralArticulo240ET: z.number(),
      Otras: z.number()
    }
  ),
  Compensaciones: z.object({
    DePerdidasFiscales: z.object({
      ValorFiscal: z.number(),
      TarifaDel9Porciento: z.number(),
      TarifaDel15Porciento: z.number(),
      TarifaDel20Porciento: z.number(),
      MegaInversiones: z.number(),
      MegaInversiones27Porciento: z.number(),
      TarifaGeneralArticulo240ET: z.number(),
      Otras: z.number()
    }),
    DelExcesoDeRentaPresuntivaSobreRentaOrdinaria: z.object({
      ValorFiscal: z.number(),
      TarifaDel9Porciento: z.number(),
      TarifaDel15Porciento: z.number(),
      TarifaDel20Porciento: z.number(),
      MegaInversiones: z.number(),
      MegaInversiones27Porciento: z.number(),
      TarifaGeneralArticulo240ET: z.number(),
      Otras: z.number()
    }),
    Total: z.object({
      ValorFiscal: z.number(),
      TarifaDel9Porciento: z.number(),
      TarifaDel15Porciento: z.number(),
      TarifaDel20Porciento: z.number(),
      MegaInversiones: z.number(),
      MegaInversiones27Porciento: z.number(),
      TarifaGeneralArticulo240ET: z.number(),
      Otras: z.number()
    })
  }),
  RentaLquidaIncluyeDividendosDeSociedadesNacionalesATarifaGeneral: z.object({
    ValorFiscal: z.number(),
    TarifaDel9Porciento: z.number(),
    TarifaDel15Porciento: z.number(),
    TarifaDel20Porciento: z.number(),
    MegaInversiones: z.number(),
    MegaInversiones27Porciento: z.number(),
    TarifaGeneralArticulo240ET: z.number(),
    Otras: z.number()
  }),
  RentaPresuntiva: z.object({
    PatrimonioLiquidoDelAnioOPeriodoGravableAnterior: z.object({
      ValorFiscal: z.number(),
      TarifaDel9Porciento: z.number(),
      TarifaDel15Porciento: z.number(),
      TarifaDel20Porciento: z.number(),
      MegaInversiones: z.number(),
      MegaInversiones27Porciento: z.number(),
      TarifaGeneralArticulo240ET: z.number(),
      Otras: z.number()
    }),
    ValorPatrimonialNeto: z.object({
      AccionesYAportesPoseidosEnSociedadesNacionales: z.object({
        ValorFiscal: z.number()
      }),
      BienesAfectadosPorHechosConstitutosDeFuerzaMayorOCasoFortuito: z.object({
        ValorFiscal: z.number()
      }),
      BienesVinculadosAEmpresasEnPeriodoImproductivo: z.object({
        ValorFiscal: z.number()
      }),
      BienesDestinadosExclusivamenteAActividadesDeportivas: z.object({
        ValorFiscal: z.number()
      }),
      BienesVinculadosAEmpresasExclusivamenteMineras: z.object({
        ValorFiscal: z.number()
      })
    }),
    Primeras19000UVTDeActivosDestinadosAlSectorAgropecuario: z.object({
      ValorFiscal: z.number()
    }),
    OtrasExclusiones: z.object({ ValorFiscal: z.number() }),
    BaseDeCalculoDeLaRentaPresuntiva: z.object({ ValorFiscal: z.number() }),
    CalculoRentaPresuntiva0PorcientoSalvoExcepciones: z.object({
      ValorFiscal: z.number()
    }),
    RentaGravableGeneradaPorLosActivosExcluidos: z.object({
      ValorFiscal: z.number()
    }),
    Total: z.object({
      ValorFiscal: z.number(),
      TarifaDel9Porciento: z.number(),
      TarifaDel15Porciento: z.number(),
      TarifaDel20Porciento: z.number(),
      MegaInversiones: z.number(),
      MegaInversiones27Porciento: z.number(),
      TarifaGeneralArticulo240ET: z.number(),
      Otras: z.number()
    })
  }),
  RentaExenta: z.object({
    ValorFiscal: z.number(),
    TarifaDel9Porciento: z.number(),
    TarifaDel15Porciento: z.number(),
    TarifaDel20Porciento: z.number(),
    MegaInversiones: z.number(),
    MegaInversiones27Porciento: z.number(),
    TarifaGeneralArticulo240ET: z.number(),
    Otras: z.number()
  }),
  RentasGravablesRentaLiquida: z.object({
    PerdidasCompensadasModificadasPorLiquidacionOficial: z.object({
      ValorFiscal: z.number(),
      TarifaDel9Porciento: z.number(),
      TarifaDel15Porciento: z.number(),
      TarifaDel20Porciento: z.number(),
      MegaInversiones: z.number(),
      MegaInversiones27Porciento: z.number(),
      TarifaGeneralArticulo240ET: z.number(),
      Otras: z.number()
    }),
    PasivosInexistentes: z.object({
      ValorFiscal: z.number(),
      TarifaDel9Porciento: z.number(),
      TarifaDel15Porciento: z.number(),
      TarifaDel20Porciento: z.number(),
      MegaInversiones: z.number(),
      MegaInversiones27Porciento: z.number(),
      TarifaGeneralArticulo240ET: z.number(),
      Otras: z.number()
    }),
    OmisionDeActivos: z.object({
      ValorFiscal: z.number(),
      TarifaDel9Porciento: z.number(),
      TarifaDel15Porciento: z.number(),
      TarifaDel20Porciento: z.number(),
      MegaInversiones: z.number(),
      MegaInversiones27Porciento: z.number(),
      TarifaGeneralArticulo240ET: z.number(),
      Otras: z.number()
    }),
    ComparacionPatrimonial: z.object({
      ValorFiscal: z.number(),
      TarifaDel9Porciento: z.number(),
      TarifaDel15Porciento: z.number(),
      TarifaDel20Porciento: z.number(),
      MegaInversiones: z.number(),
      MegaInversiones27Porciento: z.number(),
      TarifaGeneralArticulo240ET: z.number(),
      Otras: z.number()
    }),
    ESALRTE: z.object({
      ExcedentesNoReinvertidos: z.object({
        ValorFiscal: z.number(),
        TarifaDel9Porciento: z.number(),
        TarifaDel15Porciento: z.number(),
        TarifaDel20Porciento: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27Porciento: z.number(),
        TarifaGeneralArticulo240ET: z.number(),
        Otras: z.number()
      }),
      AsignacionesPermanentesNoEjecutadas: z.object({
        ValorFiscal: z.number(),
        TarifaDel9Porciento: z.number(),
        TarifaDel15Porciento: z.number(),
        TarifaDel20Porciento: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27Porciento: z.number(),
        TarifaGeneralArticulo240ET: z.number(),
        Otras: z.number()
      }),
      InversionesLiquidadasYNoReinvertidas: z.object({
        ValorFiscal: z.number(),
        TarifaDel9Porciento: z.number(),
        TarifaDel15Porciento: z.number(),
        TarifaDel20Porciento: z.number(),
        MegaInversiones: z.number(),
        MegaInversiones27Porciento: z.number(),
        TarifaGeneralArticulo240ET: z.number(),
        Otras: z.number()
      })
    }),
    Total: z.object({
      ValorFiscal: z.number(),
      TarifaDel9Porciento: z.number(),
      TarifaDel15Porciento: z.number(),
      TarifaDel20Porciento: z.number(),
      MegaInversiones: z.number(),
      MegaInversiones27Porciento: z.number(),
      TarifaGeneralArticulo240ET: z.number(),
      Otras: z.number()
    })
  }),
  RentasLiquidasGravables: z.object({
    ValorFiscal: z.number(),
    TarifaDel9Porciento: z.number(),
    TarifaDel15Porciento: z.number(),
    TarifaDel20Porciento: z.number(),
    MegaInversiones: z.number(),
    MegaInversiones27Porciento: z.number(),
    TarifaGeneralArticulo240ET: z.number(),
    Otras: z.number()
  }),
  ImpuestoSobreLaRentaLiquidaGravable: z.object({
    ValorFiscal: z.number(),
    TarifaDel9Porciento: z.number(),
    TarifaDel15Porciento: z.number(),
    TarifaDel20Porciento: z.number(),
    MegaInversiones: z.number(),
    MegaInversiones27Porciento: z.number(),
    TarifaGeneralArticulo240ET: z.number(),
    Otras: z.number()
  }),
  GananciasOcasionalesGravables: z.object({
    IngresosPorGananciaOcasionalEnVentaDeActivosFijos: z.object({
      ValorFiscal: z.number()
    }),
    OtrosIngresosPorGananciaOcasional: z.object({ ValorFiscal: z.number() }),
    TotalIngresosPorGananciasOcasionales: z.object({ ValorFiscal: z.number() }),
    CostosPorGananciaOcasionalEnVentaDeActivosFijos: z.object({
      ValorFiscal: z.number()
    }),
    OtrosCostosPorGananciasOcasionales: z.object({ ValorFiscal: z.number() }),
    TotalCostosPorGananciasOcasionales: z.object({ ValorFiscal: z.number() }),
    GananciasOcasionalesNoGravadasPorLaVentaDeAccionesECE: z.object({
      ValorFiscal: z.number()
    }),
    OtrasGananciasOcasionalesNoGravadasYExentas: z.object({
      ValorFiscal: z.number()
    }),
    RentasDeudoresRegimenLey1116De2006Decretos560Y772De2020: z.object({
      ValorFiscal: z.number()
    }),
    UtilizacionPerdidasFiscalesAcumuladasInc2Art15Decreto772De2020: z.object({
      ValorFiscal: z.number()
    }),
    ImpuestoDeGananciaOcasional: z.object({ ValorFiscal: z.number() }),
    Total: z.object({ ValorFiscal: z.number() })
  }),
  DescuentosTributarios: z.object({ ValorFiscal: z.number() }),
  DescuentosPorImpuestosPagadosEnElExteriorPorGananciasOcasionales: z.object({
    ValorFiscal: z.number()
  }),
  ValorInversionObrasPorImpuestosHastaEl50PorcientoDelValorDelImpuestoACargoModalidadDePago1: z.object(
    { ValorFiscal: z.number() }
  ),
  DescuentoEfectivoInversionObrasPorImpuestosModalidadDePago2: z.object({
    ValorFiscal: z.number()
  }),
  AnticipoRentaLiquidadoAnioAnterior: z.object({ ValorFiscal: z.number() }),
  AnticipoSobretasaLiquidadoAnioGravableAnterior: z.object({
    ValorFiscal: z.number()
  }),
  SaldoAFavorAnioGravableAnteriorSinSolicitudDeDevolucionOCompensacion: z.object(
    {
      Autorretenciones: z.object({
        PorVentas: z.object({ ValorFiscal: z.number() }),
        PorServicios: z.object({ ValorFiscal: z.number() }),
        PorRendimientosFinancieros: z.object({ ValorFiscal: z.number() }),
        PorOtrosConceptos: z.object({ ValorFiscal: z.number() }),
        TotalAutorretenciones: z.object({ ValorFiscal: z.number() })
      }),
      OtrasRetenciones: z.object({
        PorVentas: z.object({ ValorFiscal: z.number() }),
        PorServicios: z.object({ ValorFiscal: z.number() }),
        PorHonorariosYComisiones: z.object({ ValorFiscal: z.number() }),
        PorRendimientosFinancieros: z.object({ ValorFiscal: z.number() }),
        PorDividendosYParticipaciones: z.object({ ValorFiscal: z.number() }),
        OtrasRetenciones: z.object({ ValorFiscal: z.number() }),
        TotalOtrasRetenciones: z.object({ ValorFiscal: z.number() })
      })
    }
  ),
  TotalRetencionesAnioGravableQueDeclara: z.object({ ValorFiscal: z.number() }),
  AnticipoRentaPorElAnioGravableSiguiente: z.object({
    ValorFiscal: z.number()
  }),
  AnticipoSobretasaInstitucionesFinancierasAnioGravableAnterior: z.object({
    ValorFiscal: z.number()
  }),
  SobretasaInstitucionesFinancieras: z.object({ ValorFiscal: z.number() }),
  AnticipoSobretasaInstitucionesFinancierasAnioGravableSiguiente: z.object({
    ValorFiscal: z.number()
  }),
  CreditoFiscalParaInversionesEnProyectosDeInvestigacionDesarrolloTecnologicoEInnovacionOVinculacionDeCapitalHumanoDeAltoNivelArt2561DelETCreadoConArt168Ley1955MayoDe2019: z.object(
    { ValorFiscal: z.number() }
  ),
  Sanciones: z.object({ ValorFiscal: z.number() }),
  InformativoOtroResultadoIntegralORII: z.object({
    NoSeReclasificanAlResultado: z.object({
      CambiosEnElSuperavitDeRevaluacion: z.object({
        Ganancia: z.number(),
        Perdida: z.number(),
        EfectoConversion: z.number()
      }),
      NuevasMedicionesDeLosPlanesDeBeneficiosDefinidos: z.object({
        Ganancia: z.number(),
        Perdida: z.number(),
        EfectoConversion: z.number()
      }),
      InversionesEnInstrumentosDePatrimonio: z.object({
        Ganancia: z.number(),
        Perdida: z.number(),
        EfectoConversion: z.number()
      }),
      ParticipacionOtroResultadoIntegralDeAsociadasYNegociosConjuntosContabilizadosUtilizandoElMetodoDeLaParticipacion: z.object(
        {
          Ganancia: z.number(),
          Perdida: z.number(),
          EfectoConversion: z.number()
        }
      ),
      InstrumentosDeCoberturaCubreninversionesEnInstrumentosDePatrimonio: z.object(
        {
          Ganancia: z.number(),
          Perdida: z.number(),
          EfectoConversion: z.number()
        }
      ),
      CambioValorRazonableDePasivosFinancierosAtribuibleACambiosEnElRiesgoeDeCreditoDelPasivo: z.object(
        {
          Ganancia: z.number(),
          Perdida: z.number(),
          EfectoConversion: z.number()
        }
      )
    }),
    SeReclasificanAlResultado: z.object({
      DiferenciasDeCambioPorConversion: z.object({
        Ganancia: z.number(),
        Perdida: z.number(),
        EfectoConversion: z.number()
      }),
      ActivosFinancierosDisponiblesParaLaVenta: z.object({
        Ganancia: z.number(),
        Perdida: z.number(),
        EfectoConversion: z.number()
      }),
      ActivosFinancierosMedidosAlValorRazonableConCambiosEnElORI: z.object({
        Ganancia: z.number(),
        Perdida: z.number(),
        EfectoConversion: z.number()
      }),
      CoberturaDeFlujosDeEfectivo: z.object({
        Ganancia: z.number(),
        Perdida: z.number(),
        EfectoConversion: z.number()
      }),
      CoberturasDeInversionesNetasEnNegociosEnElExtranjero: z.object({
        Ganancia: z.number(),
        Perdida: z.number(),
        EfectoConversion: z.number()
      }),
      OtrasPartidasQueDebanSerReconocidasEnElORI: z.object({
        Ganancia: z.number(),
        Perdida: z.number(),
        EfectoConversion: z.number()
      })
    }),
    OTROResultadoIntegralAntesDeImpuestos: z.object({
      Ganancia: z.number(),
      Perdida: z.number(),
      EfectoConversion: z.number()
    }),
    ResultadoIntegralTotalDelAnio: z.object({
      Ganancia: z.number(),
      Perdida: z.number(),
      EfectoConversion: z.number()
    })
  }),
  GastoIngresoImpuestoDeRentaYComplementarioDelPeriodo: z.object({
    GastoPorImpuestoCorriente: z.object({
      SobreRentaLiquidaPresuntivaDelPeriodo: z.object({
        ValorContable: z.number()
      }),
      GastoPorAjustesRespectoAPeriodosAnteriores: z.object({
        ValorContable: z.number()
      }),
      IngresoPorAjustesRespectoAPeriodosAnteriores: z.object({
        ValorContable: z.number()
      }),
      ImpuestosAsumidosDelExteriorConveniosOTratados: z.object({
        ValorContable: z.number()
      })
    }),
    GastoPorImpuestoDiferido: z.object({ ValorContable: z.number() }),
    IngresoImpuestoDiferido: z.object({ ValorContable: z.number() }),
    ValorNetoGastoPorImpuesto: z.object({ ValorContable: z.number() })
  }),
  DatosInformativosConcepto: z.object({
    Ingresos: z.object({
      IngresosDevengadosContablesPorFidelizacionDeClientes: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        ValorFiscal: z.number()
      }),
      IngresosFiscalesPorFidelizacionDeClientesSinDevENgoContable: z.object({
        ValorFiscal: z.number()
      }),
      RetirosParaConsumoYPublicidadPropagandaYPromocion: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        ValorFiscal: z.number()
      }),
      DividendosDecretadosEnElPeriodoGravable: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number()
      }),
      DividendosCobradosEnElPeriodoGravable: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number()
      }),
      IngresosDevengadosDeFideicomisosOEncargosDecuariosCalidadDeFideicomitententeOFiduciante: z.object(
        { ValorContable: z.number(), EfectoConversion: z.number() }
      ),
      IngresosDevengadosDeFideicomisosOEncargosDecuariosCalidadDeBeneficiario: z.object(
        { ValorContable: z.number(), EfectoConversion: z.number() }
      )
    }),
    CostosYGastos: z.object({
      CostosYGastosDevengadosAsociadosAIngresosPorFidelizacionDeClientes: z.object(
        {
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          ValorFiscal: z.number()
        }
      ),
      BajasDeInventariosFaltantesCasoFortuitoOFuerzaMayorReconocidosComoCostoOGastoEnElEstadoDeResultadosDelEjercicio: z.object(
        {
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          ValorFiscal: z.number()
        }
      ),
      CostosIndirectosDeProduccionNoDistribuidosComoCostoDelInventarioReconocidosComoCostoOGastoEnElEstadoDeResultadosDelEjercicio: z.object(
        { ValorContable: z.number(), EfectoConversion: z.number() }
      ),
      MontoDescuentosObtenidosEnElPeriodoEnLaCompraDeInventarios: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number()
      }),
      CostosYGastosDevengadosDeFideicomisosOEncargosFiduciariosCalidadDeFideicomitenteOFiduciante: z.object(
        { ValorContable: z.number(), EfectoConversion: z.number() }
      ),
      CostosYGastosDevengadosDeFideicomisosOEncargosFiduciariosCalidadDeBeneficiario: z.object(
        { ValorContable: z.number(), EfectoConversion: z.number() }
      ),
      CostosYDeduccionesNoProcedentesActividadMeritoriaRegimenTributarioEspecial: z.object(
        { ValorFiscal: z.number() }
      )
    }),
    OtrosDatosInformativos: z.object({
      TotalCostosYGastosDeNomina: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        ValorFiscal: z.number()
      }),
      AportesAlSistemaDeSecuridadSocial: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        ValorFiscal: z.number()
      }),
      AportesAlSENAICBFCajasDeCompensacion: z.object({
        ValorContable: z.number(),
        EfectoConversion: z.number(),
        ValorFiscal: z.number()
      }),
      AportesDelEmpleadorALosSegurosPrivadosDePensionesYALosFondosDePensionesVoluntarias: z.object(
        {
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          ValorFiscal: z.number()
        }
      ),
      OperacionesConVinculadosEconomicos: z.object({
        Ingresos: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          ValorFiscal: z.number()
        }),
        CostosYDeducciones: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          ValorFiscal: z.number()
        }),
        CompraDeInventarios: z.object({
          ValorContable: z.number(),
          EfectoConversion: z.number(),
          ValorFiscal: z.number()
        }),
        CompraDeActivosFijos: z.object({
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

