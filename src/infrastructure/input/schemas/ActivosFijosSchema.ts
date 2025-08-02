import { z } from "zod";

export const ActivosFijosSchema = z.object({
  PropiedadesPlantasYEquipos: z.object({
    Terrenos: z.object({
      DatosContables: z.object({
        ImporteAlComienzoDelPeriodo: z.object({
          Costo: z.number(),
          EfectoDeConversion: z.number(),
          AjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        Incrementos: z.object({
          TransferenciasAdquisiciones: z.number(),
          CambiosEnValorRazonable: z.number(),
        }),
        Disminuciones: z.object({
          TransferenciasEliminaciones: z.number(),
          CambiosEnValorRazonable: z.number(),
        }),
        Depreciacion: z.object({
          PorCosto: z.number(),
          EfectoDeConversion: z.number(),
          AjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        DeterioroAcumuladoAlFinalDelPeriodo: z.number(),
        ImporteNetoAlFinalDelPeriodo: z.object({
          Costo: z.number(),
          AjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        GastoPeriodoPorDepreciacionOAmortizacion: z.object({
          PorCosto: z.number(),
          PorAjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        GastoDelPeriodoPorDeterioro: z.number(),
        IngresosDelPeriodoPorRecuperacionDelDeterioro: z.number(),
        ValorActivosAdquiridosMedianteArrendamientoFinancieroOLeasing:
          z.number(),
        DesmantelamientoRestauracion: z.number(),
        MayorValorPorRevaluacionAcumuladoAlFinalDelPeriodo: z.number(),
      }),
      DatosFiscales: z.object({
        ValorTotalIncluyendoArrendamientoFinancieroOLeasingFinanciero: z.object(
          {
            SaldoAlComienzoDelPeriodo: z.number(),
            IncrementosPorTransferenciasAdquisicionesYOtrosCambios: z.number(),
            DisminucionesPorTransferenciasYOtrosCambios: z.number(),
            SubtotalAlFinalPeriodo: z.number(),
            DepreciacionYAmortizacionAcumuladaAlFinalDelPeriodo: z.number(),
            TotalNetoAlFinalDelPeriodo: z.number(),
            GastoFiscalPorDepresiacionYAmortizacionDelPeriodo: z.number(),
          }
        ),
        DatosInformativosValorActivosAdquiridosMedianteArrendamientoFinancieroOLeasingFinanciero:
          z.object({
            ValorTotalAlFinalDelPeriodo: z.number(),
            DepreciacionYAmortizacionAcumuladaAlFinalDelPeriodo: z.number(),
            ValorNetoAlFinalDelPeriodo: z.number(),
            GastoFiscalDepreciacionYAmortizacionDelPeriodo: z.number(),
          }),
      }),
    }),
    Edificios: z.object({
      DatosContables: z.object({
        ImporteAlComienzoDelPeriodo: z.object({
          Costo: z.number(),
          EfectoDeConversion: z.number(),
          AjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        Incrementos: z.object({
          TransferenciasAdquisiciones: z.number(),
          CambiosEnValorRazonable: z.number(),
        }),
        Disminuciones: z.object({
          TransferenciasEliminaciones: z.number(),
          CambiosEnValorRazonable: z.number(),
        }),
        Depreciacion: z.object({
          PorCosto: z.number(),
          EfectoDeConversion: z.number(),
          AjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        DeterioroAcumuladoAlFinalDelPeriodo: z.number(),
        ImporteNetoAlFinalDelPeriodo: z.object({
          Costo: z.number(),
          AjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        GastoPeriodoPorDepreciacionOAmortizacion: z.object({
          PorCosto: z.number(),
          PorAjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        GastoDelPeriodoPorDeterioro: z.number(),
        IngresosDelPeriodoPorRecuperacionDelDeterioro: z.number(),
        ValorActivosAdquiridosMedianteArrendamientoFinancieroOLeasing:
          z.number(),
        DesmantelamientoRestauracion: z.number(),
        MayorValorPorRevaluacionAcumuladoAlFinalDelPeriodo: z.number(),
      }),
      DatosFiscales: z.object({
        ValorTotalIncluyendoArrendamientoFinancieroOLeasingFinanciero: z.object(
          {
            SaldoAlComienzoDelPeriodo: z.number(),
            IncrementosPorTransferenciasAdquisicionesYOtrosCambios: z.number(),
            DisminucionesPorTransferenciasYOtrosCambios: z.number(),
            SubtotalAlFinalPeriodo: z.number(),
            DepreciacionYAmortizacionAcumuladaAlFinalDelPeriodo: z.number(),
            TotalNetoAlFinalDelPeriodo: z.number(),
            GastoFiscalPorDepresiacionYAmortizacionDelPeriodo: z.number(),
          }
        ),
        DatosInformativosValorActivosAdquiridosMedianteArrendamientoFinancieroOLeasingFinanciero:
          z.object({
            ValorTotalAlFinalDelPeriodo: z.number(),
            DepreciacionYAmortizacionAcumuladaAlFinalDelPeriodo: z.number(),
            ValorNetoAlFinalDelPeriodo: z.number(),
            GastoFiscalDepreciacionYAmortizacionDelPeriodo: z.number(),
          }),
      }),
    }),
    Maquinaria: z.object({
      DatosContables: z.object({
        ImporteAlComienzoDelPeriodo: z.object({
          Costo: z.number(),
          EfectoDeConversion: z.number(),
          AjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        Incrementos: z.object({
          TransferenciasAdquisiciones: z.number(),
          CambiosEnValorRazonable: z.number(),
        }),
        Disminuciones: z.object({
          TransferenciasEliminaciones: z.number(),
          CambiosEnValorRazonable: z.number(),
        }),
        Depreciacion: z.object({
          PorCosto: z.number(),
          EfectoDeConversion: z.number(),
          AjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        DeterioroAcumuladoAlFinalDelPeriodo: z.number(),
        ImporteNetoAlFinalDelPeriodo: z.object({
          Costo: z.number(),
          AjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        GastoPeriodoPorDepreciacionOAmortizacion: z.object({
          PorCosto: z.number(),
          PorAjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        GastoDelPeriodoPorDeterioro: z.number(),
        IngresosDelPeriodoPorRecuperacionDelDeterioro: z.number(),
        ValorActivosAdquiridosMedianteArrendamientoFinancieroOLeasing:
          z.number(),
        DesmantelamientoRestauracion: z.number(),
        MayorValorPorRevaluacionAcumuladoAlFinalDelPeriodo: z.number(),
      }),
      DatosFiscales: z.object({
        ValorTotalIncluyendoArrendamientoFinancieroOLeasingFinanciero: z.object(
          {
            SaldoAlComienzoDelPeriodo: z.number(),
            IncrementosPorTransferenciasAdquisicionesYOtrosCambios: z.number(),
            DisminucionesPorTransferenciasYOtrosCambios: z.number(),
            SubtotalAlFinalPeriodo: z.number(),
            DepreciacionYAmortizacionAcumuladaAlFinalDelPeriodo: z.number(),
            TotalNetoAlFinalDelPeriodo: z.number(),
            GastoFiscalPorDepresiacionYAmortizacionDelPeriodo: z.number(),
          }
        ),
        DatosInformativosValorActivosAdquiridosMedianteArrendamientoFinancieroOLeasingFinanciero:
          z.object({
            ValorTotalAlFinalDelPeriodo: z.number(),
            DepreciacionYAmortizacionAcumuladaAlFinalDelPeriodo: z.number(),
            ValorNetoAlFinalDelPeriodo: z.number(),
            GastoFiscalDepreciacionYAmortizacionDelPeriodo: z.number(),
          }),
      }),
    }),
    Buques: z.object({
      DatosContables: z.object({
        ImporteAlComienzoDelPeriodo: z.object({
          Costo: z.number(),
          EfectoDeConversion: z.number(),
          AjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        Incrementos: z.object({
          TransferenciasAdquisiciones: z.number(),
          CambiosEnValorRazonable: z.number(),
        }),
        Disminuciones: z.object({
          TransferenciasEliminaciones: z.number(),
          CambiosEnValorRazonable: z.number(),
        }),
        Depreciacion: z.object({
          PorCosto: z.number(),
          EfectoDeConversion: z.number(),
          AjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        DeterioroAcumuladoAlFinalDelPeriodo: z.number(),
        ImporteNetoAlFinalDelPeriodo: z.object({
          Costo: z.number(),
          AjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        GastoPeriodoPorDepreciacionOAmortizacion: z.object({
          PorCosto: z.number(),
          PorAjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        GastoDelPeriodoPorDeterioro: z.number(),
        IngresosDelPeriodoPorRecuperacionDelDeterioro: z.number(),
        ValorActivosAdquiridosMedianteArrendamientoFinancieroOLeasing:
          z.number(),
        DesmantelamientoRestauracion: z.number(),
        MayorValorPorRevaluacionAcumuladoAlFinalDelPeriodo: z.number(),
      }),
      DatosFiscales: z.object({
        ValorTotalIncluyendoArrendamientoFinancieroOLeasingFinanciero: z.object(
          {
            SaldoAlComienzoDelPeriodo: z.number(),
            IncrementosPorTransferenciasAdquisicionesYOtrosCambios: z.number(),
            DisminucionesPorTransferenciasYOtrosCambios: z.number(),
            SubtotalAlFinalPeriodo: z.number(),
            DepreciacionYAmortizacionAcumuladaAlFinalDelPeriodo: z.number(),
            TotalNetoAlFinalDelPeriodo: z.number(),
            GastoFiscalPorDepresiacionYAmortizacionDelPeriodo: z.number(),
          }
        ),
        DatosInformativosValorActivosAdquiridosMedianteArrendamientoFinancieroOLeasingFinanciero:
          z.object({
            ValorTotalAlFinalDelPeriodo: z.number(),
            DepreciacionYAmortizacionAcumuladaAlFinalDelPeriodo: z.number(),
            ValorNetoAlFinalDelPeriodo: z.number(),
            GastoFiscalDepreciacionYAmortizacionDelPeriodo: z.number(),
          }),
      }),
    }),
    Aeronave: z.object({
      DatosContables: z.object({
        ImporteAlComienzoDelPeriodo: z.object({
          Costo: z.number(),
          EfectoDeConversion: z.number(),
          AjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        Incrementos: z.object({
          TransferenciasAdquisiciones: z.number(),
          CambiosEnValorRazonable: z.number(),
        }),
        Disminuciones: z.object({
          TransferenciasEliminaciones: z.number(),
          CambiosEnValorRazonable: z.number(),
        }),
        Depreciacion: z.object({
          PorCosto: z.number(),
          EfectoDeConversion: z.number(),
          AjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        DeterioroAcumuladoAlFinalDelPeriodo: z.number(),
        ImporteNetoAlFinalDelPeriodo: z.object({
          Costo: z.number(),
          AjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        GastoPeriodoPorDepreciacionOAmortizacion: z.object({
          PorCosto: z.number(),
          PorAjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        GastoDelPeriodoPorDeterioro: z.number(),
        IngresosDelPeriodoPorRecuperacionDelDeterioro: z.number(),
        ValorActivosAdquiridosMedianteArrendamientoFinancieroOLeasing:
          z.number(),
        DesmantelamientoRestauracion: z.number(),
        MayorValorPorRevaluacionAcumuladoAlFinalDelPeriodo: z.number(),
      }),
      DatosFiscales: z.object({
        ValorTotalIncluyendoArrendamientoFinancieroOLeasingFinanciero: z.object(
          {
            SaldoAlComienzoDelPeriodo: z.number(),
            IncrementosPorTransferenciasAdquisicionesYOtrosCambios: z.number(),
            DisminucionesPorTransferenciasYOtrosCambios: z.number(),
            SubtotalAlFinalPeriodo: z.number(),
            DepreciacionYAmortizacionAcumuladaAlFinalDelPeriodo: z.number(),
            TotalNetoAlFinalDelPeriodo: z.number(),
            GastoFiscalPorDepresiacionYAmortizacionDelPeriodo: z.number(),
          }
        ),
        DatosInformativosValorActivosAdquiridosMedianteArrendamientoFinancieroOLeasingFinanciero:
          z.object({
            ValorTotalAlFinalDelPeriodo: z.number(),
            DepreciacionYAmortizacionAcumuladaAlFinalDelPeriodo: z.number(),
            ValorNetoAlFinalDelPeriodo: z.number(),
            GastoFiscalDepreciacionYAmortizacionDelPeriodo: z.number(),
          }),
      }),
    }),
    EquiposDeTransporte: z.object({
      DatosContables: z.object({
        ImporteAlComienzoDelPeriodo: z.object({
          Costo: z.number(),
          EfectoDeConversion: z.number(),
          AjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        Incrementos: z.object({
          TransferenciasAdquisiciones: z.number(),
          CambiosEnValorRazonable: z.number(),
        }),
        Disminuciones: z.object({
          TransferenciasEliminaciones: z.number(),
          CambiosEnValorRazonable: z.number(),
        }),
        Depreciacion: z.object({
          PorCosto: z.number(),
          EfectoDeConversion: z.number(),
          AjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        DeterioroAcumuladoAlFinalDelPeriodo: z.number(),
        ImporteNetoAlFinalDelPeriodo: z.object({
          Costo: z.number(),
          AjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        GastoPeriodoPorDepreciacionOAmortizacion: z.object({
          PorCosto: z.number(),
          PorAjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        GastoDelPeriodoPorDeterioro: z.number(),
        IngresosDelPeriodoPorRecuperacionDelDeterioro: z.number(),
        ValorActivosAdquiridosMedianteArrendamientoFinancieroOLeasing:
          z.number(),
        DesmantelamientoRestauracion: z.number(),
        MayorValorPorRevaluacionAcumuladoAlFinalDelPeriodo: z.number(),
      }),
      DatosFiscales: z.object({
        ValorTotalIncluyendoArrendamientoFinancieroOLeasingFinanciero: z.object(
          {
            SaldoAlComienzoDelPeriodo: z.number(),
            IncrementosPorTransferenciasAdquisicionesYOtrosCambios: z.number(),
            DisminucionesPorTransferenciasYOtrosCambios: z.number(),
            SubtotalAlFinalPeriodo: z.number(),
            DepreciacionYAmortizacionAcumuladaAlFinalDelPeriodo: z.number(),
            TotalNetoAlFinalDelPeriodo: z.number(),
            GastoFiscalPorDepresiacionYAmortizacionDelPeriodo: z.number(),
          }
        ),
        DatosInformativosValorActivosAdquiridosMedianteArrendamientoFinancieroOLeasingFinanciero:
          z.object({
            ValorTotalAlFinalDelPeriodo: z.number(),
            DepreciacionYAmortizacionAcumuladaAlFinalDelPeriodo: z.number(),
            ValorNetoAlFinalDelPeriodo: z.number(),
            GastoFiscalDepreciacionYAmortizacionDelPeriodo: z.number(),
          }),
      }),
    }),
    EnseresYAccesorios: z.object({
      DatosContables: z.object({
        ImporteAlComienzoDelPeriodo: z.object({
          Costo: z.number(),
          EfectoDeConversion: z.number(),
          AjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        Incrementos: z.object({
          TransferenciasAdquisiciones: z.number(),
          CambiosEnValorRazonable: z.number(),
        }),
        Disminuciones: z.object({
          TransferenciasEliminaciones: z.number(),
          CambiosEnValorRazonable: z.number(),
        }),
        Depreciacion: z.object({
          PorCosto: z.number(),
          EfectoDeConversion: z.number(),
          AjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        DeterioroAcumuladoAlFinalDelPeriodo: z.number(),
        ImporteNetoAlFinalDelPeriodo: z.object({
          Costo: z.number(),
          AjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        GastoPeriodoPorDepreciacionOAmortizacion: z.object({
          PorCosto: z.number(),
          PorAjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        GastoDelPeriodoPorDeterioro: z.number(),
        IngresosDelPeriodoPorRecuperacionDelDeterioro: z.number(),
        ValorActivosAdquiridosMedianteArrendamientoFinancieroOLeasing:
          z.number(),
        DesmantelamientoRestauracion: z.number(),
        MayorValorPorRevaluacionAcumuladoAlFinalDelPeriodo: z.number(),
      }),
      DatosFiscales: z.object({
        ValorTotalIncluyendoArrendamientoFinancieroOLeasingFinanciero: z.object(
          {
            SaldoAlComienzoDelPeriodo: z.number(),
            IncrementosPorTransferenciasAdquisicionesYOtrosCambios: z.number(),
            DisminucionesPorTransferenciasYOtrosCambios: z.number(),
            SubtotalAlFinalPeriodo: z.number(),
            DepreciacionYAmortizacionAcumuladaAlFinalDelPeriodo: z.number(),
            TotalNetoAlFinalDelPeriodo: z.number(),
            GastoFiscalPorDepresiacionYAmortizacionDelPeriodo: z.number(),
          }
        ),
        DatosInformativosValorActivosAdquiridosMedianteArrendamientoFinancieroOLeasingFinanciero:
          z.object({
            ValorTotalAlFinalDelPeriodo: z.number(),
            DepreciacionYAmortizacionAcumuladaAlFinalDelPeriodo: z.number(),
            ValorNetoAlFinalDelPeriodo: z.number(),
            GastoFiscalDepreciacionYAmortizacionDelPeriodo: z.number(),
          }),
      }),
    }),
    EquiposInformaticos: z.object({
      DatosContables: z.object({
        ImporteAlComienzoDelPeriodo: z.object({
          Costo: z.number(),
          EfectoDeConversion: z.number(),
          AjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        Incrementos: z.object({
          TransferenciasAdquisiciones: z.number(),
          CambiosEnValorRazonable: z.number(),
        }),
        Disminuciones: z.object({
          TransferenciasEliminaciones: z.number(),
          CambiosEnValorRazonable: z.number(),
        }),
        Depreciacion: z.object({
          PorCosto: z.number(),
          EfectoDeConversion: z.number(),
          AjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        DeterioroAcumuladoAlFinalDelPeriodo: z.number(),
        ImporteNetoAlFinalDelPeriodo: z.object({
          Costo: z.number(),
          AjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        GastoPeriodoPorDepreciacionOAmortizacion: z.object({
          PorCosto: z.number(),
          PorAjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        GastoDelPeriodoPorDeterioro: z.number(),
        IngresosDelPeriodoPorRecuperacionDelDeterioro: z.number(),
        ValorActivosAdquiridosMedianteArrendamientoFinancieroOLeasing:
          z.number(),
        DesmantelamientoRestauracion: z.number(),
        MayorValorPorRevaluacionAcumuladoAlFinalDelPeriodo: z.number(),
      }),
      DatosFiscales: z.object({
        ValorTotalIncluyendoArrendamientoFinancieroOLeasingFinanciero: z.object(
          {
            SaldoAlComienzoDelPeriodo: z.number(),
            IncrementosPorTransferenciasAdquisicionesYOtrosCambios: z.number(),
            DisminucionesPorTransferenciasYOtrosCambios: z.number(),
            SubtotalAlFinalPeriodo: z.number(),
            DepreciacionYAmortizacionAcumuladaAlFinalDelPeriodo: z.number(),
            TotalNetoAlFinalDelPeriodo: z.number(),
            GastoFiscalPorDepresiacionYAmortizacionDelPeriodo: z.number(),
          }
        ),
        DatosInformativosValorActivosAdquiridosMedianteArrendamientoFinancieroOLeasingFinanciero:
          z.object({
            ValorTotalAlFinalDelPeriodo: z.number(),
            DepreciacionYAmortizacionAcumuladaAlFinalDelPeriodo: z.number(),
            ValorNetoAlFinalDelPeriodo: z.number(),
            GastoFiscalDepreciacionYAmortizacionDelPeriodo: z.number(),
          }),
      }),
    }),
    EquiposDeRedesYComunicacion: z.object({
      DatosContables: z.object({
        ImporteAlComienzoDelPeriodo: z.object({
          Costo: z.number(),
          EfectoDeConversion: z.number(),
          AjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        Incrementos: z.object({
          TransferenciasAdquisiciones: z.number(),
          CambiosEnValorRazonable: z.number(),
        }),
        Disminuciones: z.object({
          TransferenciasEliminaciones: z.number(),
          CambiosEnValorRazonable: z.number(),
        }),
        Depreciacion: z.object({
          PorCosto: z.number(),
          EfectoDeConversion: z.number(),
          AjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        DeterioroAcumuladoAlFinalDelPeriodo: z.number(),
        ImporteNetoAlFinalDelPeriodo: z.object({
          Costo: z.number(),
          AjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        GastoPeriodoPorDepreciacionOAmortizacion: z.object({
          PorCosto: z.number(),
          PorAjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        GastoDelPeriodoPorDeterioro: z.number(),
        IngresosDelPeriodoPorRecuperacionDelDeterioro: z.number(),
        ValorActivosAdquiridosMedianteArrendamientoFinancieroOLeasing:
          z.number(),
        DesmantelamientoRestauracion: z.number(),
        MayorValorPorRevaluacionAcumuladoAlFinalDelPeriodo: z.number(),
      }),
      DatosFiscales: z.object({
        ValorTotalIncluyendoArrendamientoFinancieroOLeasingFinanciero: z.object(
          {
            SaldoAlComienzoDelPeriodo: z.number(),
            IncrementosPorTransferenciasAdquisicionesYOtrosCambios: z.number(),
            DisminucionesPorTransferenciasYOtrosCambios: z.number(),
            SubtotalAlFinalPeriodo: z.number(),
            DepreciacionYAmortizacionAcumuladaAlFinalDelPeriodo: z.number(),
            TotalNetoAlFinalDelPeriodo: z.number(),
            GastoFiscalPorDepresiacionYAmortizacionDelPeriodo: z.number(),
          }
        ),
        DatosInformativosValorActivosAdquiridosMedianteArrendamientoFinancieroOLeasingFinanciero:
          z.object({
            ValorTotalAlFinalDelPeriodo: z.number(),
            DepreciacionYAmortizacionAcumuladaAlFinalDelPeriodo: z.number(),
            ValorNetoAlFinalDelPeriodo: z.number(),
            GastoFiscalDepreciacionYAmortizacionDelPeriodo: z.number(),
          }),
      }),
    }),
    InfraestructuraDeRed: z.object({
      DatosContables: z.object({
        ImporteAlComienzoDelPeriodo: z.object({
          Costo: z.number(),
          EfectoDeConversion: z.number(),
          AjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        Incrementos: z.object({
          TransferenciasAdquisiciones: z.number(),
          CambiosEnValorRazonable: z.number(),
        }),
        Disminuciones: z.object({
          TransferenciasEliminaciones: z.number(),
          CambiosEnValorRazonable: z.number(),
        }),
        Depreciacion: z.object({
          PorCosto: z.number(),
          EfectoDeConversion: z.number(),
          AjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        DeterioroAcumuladoAlFinalDelPeriodo: z.number(),
        ImporteNetoAlFinalDelPeriodo: z.object({
          Costo: z.number(),
          AjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        GastoPeriodoPorDepreciacionOAmortizacion: z.object({
          PorCosto: z.number(),
          PorAjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        GastoDelPeriodoPorDeterioro: z.number(),
        IngresosDelPeriodoPorRecuperacionDelDeterioro: z.number(),
        ValorActivosAdquiridosMedianteArrendamientoFinancieroOLeasing:
          z.number(),
        DesmantelamientoRestauracion: z.number(),
        MayorValorPorRevaluacionAcumuladoAlFinalDelPeriodo: z.number(),
      }),
      DatosFiscales: z.object({
        ValorTotalIncluyendoArrendamientoFinancieroOLeasingFinanciero: z.object(
          {
            SaldoAlComienzoDelPeriodo: z.number(),
            IncrementosPorTransferenciasAdquisicionesYOtrosCambios: z.number(),
            DisminucionesPorTransferenciasYOtrosCambios: z.number(),
            SubtotalAlFinalPeriodo: z.number(),
            DepreciacionYAmortizacionAcumuladaAlFinalDelPeriodo: z.number(),
            TotalNetoAlFinalDelPeriodo: z.number(),
            GastoFiscalPorDepresiacionYAmortizacionDelPeriodo: z.number(),
          }
        ),
        DatosInformativosValorActivosAdquiridosMedianteArrendamientoFinancieroOLeasingFinanciero:
          z.object({
            ValorTotalAlFinalDelPeriodo: z.number(),
            DepreciacionYAmortizacionAcumuladaAlFinalDelPeriodo: z.number(),
            ValorNetoAlFinalDelPeriodo: z.number(),
            GastoFiscalDepreciacionYAmortizacionDelPeriodo: z.number(),
          }),
      }),
    }),
    ActivosTangiblesDeExploracionYEvaluacion: z.object({
      DatosContables: z.object({
        ImporteAlComienzoDelPeriodo: z.object({
          Costo: z.number(),
          EfectoDeConversion: z.number(),
          AjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        Incrementos: z.object({
          TransferenciasAdquisiciones: z.number(),
          CambiosEnValorRazonable: z.number(),
        }),
        Disminuciones: z.object({
          TransferenciasEliminaciones: z.number(),
          CambiosEnValorRazonable: z.number(),
        }),
        Depreciacion: z.object({
          PorCosto: z.number(),
          EfectoDeConversion: z.number(),
          AjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        DeterioroAcumuladoAlFinalDelPeriodo: z.number(),
        ImporteNetoAlFinalDelPeriodo: z.object({
          Costo: z.number(),
          AjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        GastoPeriodoPorDepreciacionOAmortizacion: z.object({
          PorCosto: z.number(),
          PorAjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        GastoDelPeriodoPorDeterioro: z.number(),
        IngresosDelPeriodoPorRecuperacionDelDeterioro: z.number(),
        ValorActivosAdquiridosMedianteArrendamientoFinancieroOLeasing:
          z.number(),
        DesmantelamientoRestauracion: z.number(),
        MayorValorPorRevaluacionAcumuladoAlFinalDelPeriodo: z.number(),
      }),
      DatosFiscales: z.object({
        ValorTotalIncluyendoArrendamientoFinancieroOLeasingFinanciero: z.object(
          {
            SaldoAlComienzoDelPeriodo: z.number(),
            IncrementosPorTransferenciasAdquisicionesYOtrosCambios: z.number(),
            DisminucionesPorTransferenciasYOtrosCambios: z.number(),
            SubtotalAlFinalPeriodo: z.number(),
            DepreciacionYAmortizacionAcumuladaAlFinalDelPeriodo: z.number(),
            TotalNetoAlFinalDelPeriodo: z.number(),
            GastoFiscalPorDepresiacionYAmortizacionDelPeriodo: z.number(),
          }
        ),
        DatosInformativosValorActivosAdquiridosMedianteArrendamientoFinancieroOLeasingFinanciero:
          z.object({
            ValorTotalAlFinalDelPeriodo: z.number(),
            DepreciacionYAmortizacionAcumuladaAlFinalDelPeriodo: z.number(),
            ValorNetoAlFinalDelPeriodo: z.number(),
            GastoFiscalDepreciacionYAmortizacionDelPeriodo: z.number(),
          }),
      }),
    }),
    ActivosDeMineria: z.object({
      DatosContables: z.object({
        ImporteAlComienzoDelPeriodo: z.object({
          Costo: z.number(),
          EfectoDeConversion: z.number(),
          AjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        Incrementos: z.object({
          TransferenciasAdquisiciones: z.number(),
          CambiosEnValorRazonable: z.number(),
        }),
        Disminuciones: z.object({
          TransferenciasEliminaciones: z.number(),
          CambiosEnValorRazonable: z.number(),
        }),
        Depreciacion: z.object({
          PorCosto: z.number(),
          EfectoDeConversion: z.number(),
          AjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        DeterioroAcumuladoAlFinalDelPeriodo: z.number(),
        ImporteNetoAlFinalDelPeriodo: z.object({
          Costo: z.number(),
          AjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        GastoPeriodoPorDepreciacionOAmortizacion: z.object({
          PorCosto: z.number(),
          PorAjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        GastoDelPeriodoPorDeterioro: z.number(),
        IngresosDelPeriodoPorRecuperacionDelDeterioro: z.number(),
        ValorActivosAdquiridosMedianteArrendamientoFinancieroOLeasing:
          z.number(),
        DesmantelamientoRestauracion: z.number(),
        MayorValorPorRevaluacionAcumuladoAlFinalDelPeriodo: z.number(),
      }),
      DatosFiscales: z.object({
        ValorTotalIncluyendoArrendamientoFinancieroOLeasingFinanciero: z.object(
          {
            SaldoAlComienzoDelPeriodo: z.number(),
            IncrementosPorTransferenciasAdquisicionesYOtrosCambios: z.number(),
            DisminucionesPorTransferenciasYOtrosCambios: z.number(),
            SubtotalAlFinalPeriodo: z.number(),
            DepreciacionYAmortizacionAcumuladaAlFinalDelPeriodo: z.number(),
            TotalNetoAlFinalDelPeriodo: z.number(),
            GastoFiscalPorDepresiacionYAmortizacionDelPeriodo: z.number(),
          }
        ),
        DatosInformativosValorActivosAdquiridosMedianteArrendamientoFinancieroOLeasingFinanciero:
          z.object({
            ValorTotalAlFinalDelPeriodo: z.number(),
            DepreciacionYAmortizacionAcumuladaAlFinalDelPeriodo: z.number(),
            ValorNetoAlFinalDelPeriodo: z.number(),
            GastoFiscalDepreciacionYAmortizacionDelPeriodo: z.number(),
          }),
      }),
    }),
    ActivosDePetroleoYGas: z.object({
      DatosContables: z.object({
        ImporteAlComienzoDelPeriodo: z.object({
          Costo: z.number(),
          EfectoDeConversion: z.number(),
          AjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        Incrementos: z.object({
          TransferenciasAdquisiciones: z.number(),
          CambiosEnValorRazonable: z.number(),
        }),
        Disminuciones: z.object({
          TransferenciasEliminaciones: z.number(),
          CambiosEnValorRazonable: z.number(),
        }),
        Depreciacion: z.object({
          PorCosto: z.number(),
          EfectoDeConversion: z.number(),
          AjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        DeterioroAcumuladoAlFinalDelPeriodo: z.number(),
        ImporteNetoAlFinalDelPeriodo: z.object({
          Costo: z.number(),
          AjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        GastoPeriodoPorDepreciacionOAmortizacion: z.object({
          PorCosto: z.number(),
          PorAjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        GastoDelPeriodoPorDeterioro: z.number(),
        IngresosDelPeriodoPorRecuperacionDelDeterioro: z.number(),
        ValorActivosAdquiridosMedianteArrendamientoFinancieroOLeasing:
          z.number(),
        DesmantelamientoRestauracion: z.number(),
        MayorValorPorRevaluacionAcumuladoAlFinalDelPeriodo: z.number(),
      }),
      DatosFiscales: z.object({
        ValorTotalIncluyendoArrendamientoFinancieroOLeasingFinanciero: z.object(
          {
            SaldoAlComienzoDelPeriodo: z.number(),
            IncrementosPorTransferenciasAdquisicionesYOtrosCambios: z.number(),
            DisminucionesPorTransferenciasYOtrosCambios: z.number(),
            SubtotalAlFinalPeriodo: z.number(),
            DepreciacionYAmortizacionAcumuladaAlFinalDelPeriodo: z.number(),
            TotalNetoAlFinalDelPeriodo: z.number(),
            GastoFiscalPorDepresiacionYAmortizacionDelPeriodo: z.number(),
          }
        ),
        DatosInformativosValorActivosAdquiridosMedianteArrendamientoFinancieroOLeasingFinanciero:
          z.object({
            ValorTotalAlFinalDelPeriodo: z.number(),
            DepreciacionYAmortizacionAcumuladaAlFinalDelPeriodo: z.number(),
            ValorNetoAlFinalDelPeriodo: z.number(),
            GastoFiscalDepreciacionYAmortizacionDelPeriodo: z.number(),
          }),
      }),
    }),
    "PP&EEnArrendamientoOperativo": z.object({
      DatosContables: z.object({
        ImporteAlComienzoDelPeriodo: z.object({
          Costo: z.number(),
          EfectoDeConversion: z.number(),
          AjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        Incrementos: z.object({
          TransferenciasAdquisiciones: z.number(),
          CambiosEnValorRazonable: z.number(),
        }),
        Disminuciones: z.object({
          TransferenciasEliminaciones: z.number(),
          CambiosEnValorRazonable: z.number(),
        }),
        Depreciacion: z.object({
          PorCosto: z.number(),
          EfectoDeConversion: z.number(),
          AjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        DeterioroAcumuladoAlFinalDelPeriodo: z.number(),
        ImporteNetoAlFinalDelPeriodo: z.object({
          Costo: z.number(),
          AjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        GastoPeriodoPorDepreciacionOAmortizacion: z.object({
          PorCosto: z.number(),
          PorAjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        GastoDelPeriodoPorDeterioro: z.number(),
        IngresosDelPeriodoPorRecuperacionDelDeterioro: z.number(),
        ValorActivosAdquiridosMedianteArrendamientoFinancieroOLeasing:
          z.number(),
        DesmantelamientoRestauracion: z.number(),
        MayorValorPorRevaluacionAcumuladoAlFinalDelPeriodo: z.number(),
      }),
      DatosFiscales: z.object({
        ValorTotalIncluyendoArrendamientoFinancieroOLeasingFinanciero: z.object(
          {
            SaldoAlComienzoDelPeriodo: z.number(),
            IncrementosPorTransferenciasAdquisicionesYOtrosCambios: z.number(),
            DisminucionesPorTransferenciasYOtrosCambios: z.number(),
            SubtotalAlFinalPeriodo: z.number(),
            DepreciacionYAmortizacionAcumuladaAlFinalDelPeriodo: z.number(),
            TotalNetoAlFinalDelPeriodo: z.number(),
            GastoFiscalPorDepresiacionYAmortizacionDelPeriodo: z.number(),
          }
        ),
        DatosInformativosValorActivosAdquiridosMedianteArrendamientoFinancieroOLeasingFinanciero:
          z.object({
            ValorTotalAlFinalDelPeriodo: z.number(),
            DepreciacionYAmortizacionAcumuladaAlFinalDelPeriodo: z.number(),
            ValorNetoAlFinalDelPeriodo: z.number(),
            GastoFiscalDepreciacionYAmortizacionDelPeriodo: z.number(),
          }),
      }),
    }),
    PlantasProductoras: z.object({
      DatosContables: z.object({
        ImporteAlComienzoDelPeriodo: z.object({
          Costo: z.number(),
          EfectoDeConversion: z.number(),
          AjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        Incrementos: z.object({
          TransferenciasAdquisiciones: z.number(),
          CambiosEnValorRazonable: z.number(),
        }),
        Disminuciones: z.object({
          TransferenciasEliminaciones: z.number(),
          CambiosEnValorRazonable: z.number(),
        }),
        Depreciacion: z.object({
          PorCosto: z.number(),
          EfectoDeConversion: z.number(),
          AjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        DeterioroAcumuladoAlFinalDelPeriodo: z.number(),
        ImporteNetoAlFinalDelPeriodo: z.object({
          Costo: z.number(),
          AjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        GastoPeriodoPorDepreciacionOAmortizacion: z.object({
          PorCosto: z.number(),
          PorAjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        GastoDelPeriodoPorDeterioro: z.number(),
        IngresosDelPeriodoPorRecuperacionDelDeterioro: z.number(),
        ValorActivosAdquiridosMedianteArrendamientoFinancieroOLeasing:
          z.number(),
        DesmantelamientoRestauracion: z.number(),
        MayorValorPorRevaluacionAcumuladoAlFinalDelPeriodo: z.number(),
      }),
      DatosFiscales: z.object({
        ValorTotalIncluyendoArrendamientoFinancieroOLeasingFinanciero: z.object(
          {
            SaldoAlComienzoDelPeriodo: z.number(),
            IncrementosPorTransferenciasAdquisicionesYOtrosCambios: z.number(),
            DisminucionesPorTransferenciasYOtrosCambios: z.number(),
            SubtotalAlFinalPeriodo: z.number(),
            DepreciacionYAmortizacionAcumuladaAlFinalDelPeriodo: z.number(),
            TotalNetoAlFinalDelPeriodo: z.number(),
            GastoFiscalPorDepresiacionYAmortizacionDelPeriodo: z.number(),
          }
        ),
        DatosInformativosValorActivosAdquiridosMedianteArrendamientoFinancieroOLeasingFinanciero:
          z.object({
            ValorTotalAlFinalDelPeriodo: z.number(),
            DepreciacionYAmortizacionAcumuladaAlFinalDelPeriodo: z.number(),
            ValorNetoAlFinalDelPeriodo: z.number(),
            GastoFiscalDepreciacionYAmortizacionDelPeriodo: z.number(),
          }),
      }),
    }),
    AnimalesProductores: z.object({
      DatosContables: z.object({
        ImporteAlComienzoDelPeriodo: z.object({
          Costo: z.number(),
          EfectoDeConversion: z.number(),
          AjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        Incrementos: z.object({
          TransferenciasAdquisiciones: z.number(),
          CambiosEnValorRazonable: z.number(),
        }),
        Disminuciones: z.object({
          TransferenciasEliminaciones: z.number(),
          CambiosEnValorRazonable: z.number(),
        }),
        Depreciacion: z.object({
          PorCosto: z.number(),
          EfectoDeConversion: z.number(),
          AjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        DeterioroAcumuladoAlFinalDelPeriodo: z.number(),
        ImporteNetoAlFinalDelPeriodo: z.object({
          Costo: z.number(),
          AjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        GastoPeriodoPorDepreciacionOAmortizacion: z.object({
          PorCosto: z.number(),
          PorAjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        GastoDelPeriodoPorDeterioro: z.number(),
        IngresosDelPeriodoPorRecuperacionDelDeterioro: z.number(),
        ValorActivosAdquiridosMedianteArrendamientoFinancieroOLeasing:
          z.number(),
        DesmantelamientoRestauracion: z.number(),
        MayorValorPorRevaluacionAcumuladoAlFinalDelPeriodo: z.number(),
      }),
      DatosFiscales: z.object({
        ValorTotalIncluyendoArrendamientoFinancieroOLeasingFinanciero: z.object(
          {
            SaldoAlComienzoDelPeriodo: z.number(),
            IncrementosPorTransferenciasAdquisicionesYOtrosCambios: z.number(),
            DisminucionesPorTransferenciasYOtrosCambios: z.number(),
            SubtotalAlFinalPeriodo: z.number(),
            DepreciacionYAmortizacionAcumuladaAlFinalDelPeriodo: z.number(),
            TotalNetoAlFinalDelPeriodo: z.number(),
            GastoFiscalPorDepresiacionYAmortizacionDelPeriodo: z.number(),
          }
        ),
        DatosInformativosValorActivosAdquiridosMedianteArrendamientoFinancieroOLeasingFinanciero:
          z.object({
            ValorTotalAlFinalDelPeriodo: z.number(),
            DepreciacionYAmortizacionAcumuladaAlFinalDelPeriodo: z.number(),
            ValorNetoAlFinalDelPeriodo: z.number(),
            GastoFiscalDepreciacionYAmortizacionDelPeriodo: z.number(),
          }),
      }),
    }),
    ConstruccionesEnProceso: z.object({
      DatosContables: z.object({
        ImporteAlComienzoDelPeriodo: z.object({
          Costo: z.number(),
          EfectoDeConversion: z.number(),
          AjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        Incrementos: z.object({
          TransferenciasAdquisiciones: z.number(),
          CambiosEnValorRazonable: z.number(),
        }),
        Disminuciones: z.object({
          TransferenciasEliminaciones: z.number(),
          CambiosEnValorRazonable: z.number(),
        }),
        Depreciacion: z.object({
          PorCosto: z.number(),
          EfectoDeConversion: z.number(),
          AjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        DeterioroAcumuladoAlFinalDelPeriodo: z.number(),
        ImporteNetoAlFinalDelPeriodo: z.object({
          Costo: z.number(),
          AjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        GastoPeriodoPorDepreciacionOAmortizacion: z.object({
          PorCosto: z.number(),
          PorAjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        GastoDelPeriodoPorDeterioro: z.number(),
        IngresosDelPeriodoPorRecuperacionDelDeterioro: z.number(),
        ValorActivosAdquiridosMedianteArrendamientoFinancieroOLeasing:
          z.number(),
        DesmantelamientoRestauracion: z.number(),
        MayorValorPorRevaluacionAcumuladoAlFinalDelPeriodo: z.number(),
      }),
      DatosFiscales: z.object({
        ValorTotalIncluyendoArrendamientoFinancieroOLeasingFinanciero: z.object(
          {
            SaldoAlComienzoDelPeriodo: z.number(),
            IncrementosPorTransferenciasAdquisicionesYOtrosCambios: z.number(),
            DisminucionesPorTransferenciasYOtrosCambios: z.number(),
            SubtotalAlFinalPeriodo: z.number(),
            DepreciacionYAmortizacionAcumuladaAlFinalDelPeriodo: z.number(),
            TotalNetoAlFinalDelPeriodo: z.number(),
            GastoFiscalPorDepresiacionYAmortizacionDelPeriodo: z.number(),
          }
        ),
        DatosInformativosValorActivosAdquiridosMedianteArrendamientoFinancieroOLeasingFinanciero:
          z.object({
            ValorTotalAlFinalDelPeriodo: z.number(),
            DepreciacionYAmortizacionAcumuladaAlFinalDelPeriodo: z.number(),
            ValorNetoAlFinalDelPeriodo: z.number(),
            GastoFiscalDepreciacionYAmortizacionDelPeriodo: z.number(),
          }),
      }),
    }),
    OtrasPropiedadesPlantasEquipo: z.object({
      DatosContables: z.object({
        ImporteAlComienzoDelPeriodo: z.object({
          Costo: z.number(),
          EfectoDeConversion: z.number(),
          AjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        Incrementos: z.object({
          TransferenciasAdquisiciones: z.number(),
          CambiosEnValorRazonable: z.number(),
        }),
        Disminuciones: z.object({
          TransferenciasEliminaciones: z.number(),
          CambiosEnValorRazonable: z.number(),
        }),
        Depreciacion: z.object({
          PorCosto: z.number(),
          EfectoDeConversion: z.number(),
          AjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        DeterioroAcumuladoAlFinalDelPeriodo: z.number(),
        ImporteNetoAlFinalDelPeriodo: z.object({
          Costo: z.number(),
          AjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        GastoPeriodoPorDepreciacionOAmortizacion: z.object({
          PorCosto: z.number(),
          PorAjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        GastoDelPeriodoPorDeterioro: z.number(),
        IngresosDelPeriodoPorRecuperacionDelDeterioro: z.number(),
        ValorActivosAdquiridosMedianteArrendamientoFinancieroOLeasing:
          z.number(),
        DesmantelamientoRestauracion: z.number(),
        MayorValorPorRevaluacionAcumuladoAlFinalDelPeriodo: z.number(),
      }),
      DatosFiscales: z.object({
        ValorTotalIncluyendoArrendamientoFinancieroOLeasingFinanciero: z.object(
          {
            SaldoAlComienzoDelPeriodo: z.number(),
            IncrementosPorTransferenciasAdquisicionesYOtrosCambios: z.number(),
            DisminucionesPorTransferenciasYOtrosCambios: z.number(),
            SubtotalAlFinalPeriodo: z.number(),
            DepreciacionYAmortizacionAcumuladaAlFinalDelPeriodo: z.number(),
            TotalNetoAlFinalDelPeriodo: z.number(),
            GastoFiscalPorDepresiacionYAmortizacionDelPeriodo: z.number(),
          }
        ),
        DatosInformativosValorActivosAdquiridosMedianteArrendamientoFinancieroOLeasingFinanciero:
          z.object({
            ValorTotalAlFinalDelPeriodo: z.number(),
            DepreciacionYAmortizacionAcumuladaAlFinalDelPeriodo: z.number(),
            ValorNetoAlFinalDelPeriodo: z.number(),
            GastoFiscalDepreciacionYAmortizacionDelPeriodo: z.number(),
          }),
      }),
    }),
    TotalPropiedadesPlantasEquipo: z.object({
      DatosContables: z.object({
        ImporteAlComienzoDelPeriodo: z.object({
          Costo: z.number(),
          EfectoDeConversion: z.number(),
          AjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        Incrementos: z.object({
          TransferenciasAdquisiciones: z.number(),
          CambiosEnValorRazonable: z.number(),
        }),
        Disminuciones: z.object({
          TransferenciasEliminaciones: z.number(),
          CambiosEnValorRazonable: z.number(),
        }),
        Depreciacion: z.object({
          PorCosto: z.number(),
          EfectoDeConversion: z.number(),
          AjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        DeterioroAcumuladoAlFinalDelPeriodo: z.number(),
        ImporteNetoAlFinalDelPeriodo: z.object({
          Costo: z.number(),
          AjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        GastoPeriodoPorDepreciacionOAmortizacion: z.object({
          PorCosto: z.number(),
          PorAjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        GastoDelPeriodoPorDeterioro: z.number(),
        IngresosDelPeriodoPorRecuperacionDelDeterioro: z.number(),
        ValorActivosAdquiridosMedianteArrendamientoFinancieroOLeasing:
          z.number(),
        DesmantelamientoRestauracion: z.number(),
        MayorValorPorRevaluacionAcumuladoAlFinalDelPeriodo: z.number(),
      }),
      DatosFiscales: z.object({
        ValorTotalIncluyendoArrendamientoFinancieroOLeasingFinanciero: z.object(
          {
            SaldoAlComienzoDelPeriodo: z.number(),
            IncrementosPorTransferenciasAdquisicionesYOtrosCambios: z.number(),
            DisminucionesPorTransferenciasYOtrosCambios: z.number(),
            SubtotalAlFinalPeriodo: z.number(),
            DepreciacionYAmortizacionAcumuladaAlFinalDelPeriodo: z.number(),
            TotalNetoAlFinalDelPeriodo: z.number(),
            GastoFiscalPorDepresiacionYAmortizacionDelPeriodo: z.number(),
          }
        ),
        DatosInformativosValorActivosAdquiridosMedianteArrendamientoFinancieroOLeasingFinanciero:
          z.object({
            ValorTotalAlFinalDelPeriodo: z.number(),
            DepreciacionYAmortizacionAcumuladaAlFinalDelPeriodo: z.number(),
            ValorNetoAlFinalDelPeriodo: z.number(),
            GastoFiscalDepreciacionYAmortizacionDelPeriodo: z.number(),
          }),
      }),
    }),
  }),
  PropiedadesDeInversión: z.object({
    Terrenos: z.object({
      DatosContables: z.object({
        ImporteAlComienzoDelPeriodo: z.object({
          Costo: z.number(),
          EfectoDeConversion: z.number(),
          AjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        Incrementos: z.object({
          TransferenciasAdquisiciones: z.number(),
          CambiosEnValorRazonable: z.number(),
        }),
        Disminuciones: z.object({
          TransferenciasEliminaciones: z.number(),
          CambiosEnValorRazonable: z.number(),
        }),
        Depreciacion: z.object({
          PorCosto: z.number(),
          EfectoDeConversion: z.number(),
          AjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        DeterioroAcumuladoAlFinalDelPeriodo: z.number(),
        ImporteNetoAlFinalDelPeriodo: z.object({
          Costo: z.number(),
          AjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        GastoPeriodoPorDepreciacionOAmortizacion: z.object({
          PorCosto: z.number(),
          PorAjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        GastoDelPeriodoPorDeterioro: z.number(),
        IngresosDelPeriodoPorRecuperacionDelDeterioro: z.number(),
        ValorActivosAdquiridosMedianteArrendamientoFinancieroOLeasing:
          z.number(),
        DesmantelamientoRestauracion: z.number(),
        MayorValorPorRevaluacionAcumuladoAlFinalDelPeriodo: z.number(),
      }),
      DatosFiscales: z.object({
        ValorTotalIncluyendoArrendamientoFinancieroOLeasingFinanciero: z.object(
          {
            SaldoAlComienzoDelPeriodo: z.number(),
            IncrementosPorTransferenciasAdquisicionesYOtrosCambios: z.number(),
            DisminucionesPorTransferenciasYOtrosCambios: z.number(),
            SubtotalAlFinalPeriodo: z.number(),
            DepreciacionYAmortizacionAcumuladaAlFinalDelPeriodo: z.number(),
            TotalNetoAlFinalDelPeriodo: z.number(),
            GastoFiscalPorDepresiacionYAmortizacionDelPeriodo: z.number(),
          }
        ),
        DatosInformativosValorActivosAdquiridosMedianteArrendamientoFinancieroOLeasingFinanciero:
          z.object({
            ValorTotalAlFinalDelPeriodo: z.number(),
            DepreciacionYAmortizacionAcumuladaAlFinalDelPeriodo: z.number(),
            ValorNetoAlFinalDelPeriodo: z.number(),
            GastoFiscalDepreciacionYAmortizacionDelPeriodo: z.number(),
          }),
      }),
    }),
    Edificios: z.object({
      DatosContables: z.object({
        ImporteAlComienzoDelPeriodo: z.object({
          Costo: z.number(),
          EfectoDeConversion: z.number(),
          AjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        Incrementos: z.object({
          TransferenciasAdquisiciones: z.number(),
          CambiosEnValorRazonable: z.number(),
        }),
        Disminuciones: z.object({
          TransferenciasEliminaciones: z.number(),
          CambiosEnValorRazonable: z.number(),
        }),
        Depreciacion: z.object({
          PorCosto: z.number(),
          EfectoDeConversion: z.number(),
          AjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        DeterioroAcumuladoAlFinalDelPeriodo: z.number(),
        ImporteNetoAlFinalDelPeriodo: z.object({
          Costo: z.number(),
          AjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        GastoPeriodoPorDepreciacionOAmortizacion: z.object({
          PorCosto: z.number(),
          PorAjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        GastoDelPeriodoPorDeterioro: z.number(),
        IngresosDelPeriodoPorRecuperacionDelDeterioro: z.number(),
        ValorActivosAdquiridosMedianteArrendamientoFinancieroOLeasing:
          z.number(),
        DesmantelamientoRestauracion: z.number(),
        MayorValorPorRevaluacionAcumuladoAlFinalDelPeriodo: z.number(),
      }),
      DatosFiscales: z.object({
        ValorTotalIncluyendoArrendamientoFinancieroOLeasingFinanciero: z.object(
          {
            SaldoAlComienzoDelPeriodo: z.number(),
            IncrementosPorTransferenciasAdquisicionesYOtrosCambios: z.number(),
            DisminucionesPorTransferenciasYOtrosCambios: z.number(),
            SubtotalAlFinalPeriodo: z.number(),
            DepreciacionYAmortizacionAcumuladaAlFinalDelPeriodo: z.number(),
            TotalNetoAlFinalDelPeriodo: z.number(),
            GastoFiscalPorDepresiacionYAmortizacionDelPeriodo: z.number(),
          }
        ),
        DatosInformativosValorActivosAdquiridosMedianteArrendamientoFinancieroOLeasingFinanciero:
          z.object({
            ValorTotalAlFinalDelPeriodo: z.number(),
            DepreciacionYAmortizacionAcumuladaAlFinalDelPeriodo: z.number(),
            ValorNetoAlFinalDelPeriodo: z.number(),
            GastoFiscalDepreciacionYAmortizacionDelPeriodo: z.number(),
          }),
      }),
    }),
    TotalPorpiedadesDeInversion: z.object({
      DatosContables: z.object({
        ImporteAlComienzoDelPeriodo: z.object({
          Costo: z.number(),
          EfectoDeConversion: z.number(),
          AjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        Incrementos: z.object({
          TransferenciasAdquisiciones: z.number(),
          CambiosEnValorRazonable: z.number(),
        }),
        Disminuciones: z.object({
          TransferenciasEliminaciones: z.number(),
          CambiosEnValorRazonable: z.number(),
        }),
        Depreciacion: z.object({
          PorCosto: z.number(),
          EfectoDeConversion: z.number(),
          AjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        DeterioroAcumuladoAlFinalDelPeriodo: z.number(),
        ImporteNetoAlFinalDelPeriodo: z.object({
          Costo: z.number(),
          AjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        GastoPeriodoPorDepreciacionOAmortizacion: z.object({
          PorCosto: z.number(),
          PorAjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        GastoDelPeriodoPorDeterioro: z.number(),
        IngresosDelPeriodoPorRecuperacionDelDeterioro: z.number(),
        ValorActivosAdquiridosMedianteArrendamientoFinancieroOLeasing:
          z.number(),
        DesmantelamientoRestauracion: z.number(),
        MayorValorPorRevaluacionAcumuladoAlFinalDelPeriodo: z.number(),
      }),
      DatosFiscales: z.object({
        ValorTotalIncluyendoArrendamientoFinancieroOLeasingFinanciero: z.object(
          {
            SaldoAlComienzoDelPeriodo: z.number(),
            IncrementosPorTransferenciasAdquisicionesYOtrosCambios: z.number(),
            DisminucionesPorTransferenciasYOtrosCambios: z.number(),
            SubtotalAlFinalPeriodo: z.number(),
            DepreciacionYAmortizacionAcumuladaAlFinalDelPeriodo: z.number(),
            TotalNetoAlFinalDelPeriodo: z.number(),
            GastoFiscalPorDepresiacionYAmortizacionDelPeriodo: z.number(),
          }
        ),
        DatosInformativosValorActivosAdquiridosMedianteArrendamientoFinancieroOLeasingFinanciero:
          z.object({
            ValorTotalAlFinalDelPeriodo: z.number(),
            DepreciacionYAmortizacionAcumuladaAlFinalDelPeriodo: z.number(),
            ValorNetoAlFinalDelPeriodo: z.number(),
            GastoFiscalDepreciacionYAmortizacionDelPeriodo: z.number(),
          }),
      }),
    }),
  }),
  ANCMV: z.object({
    DatosContables: z.object({
      ImporteAlComienzoDelPeriodo: z.object({
        Costo: z.number(),
        EfectoDeConversion: z.number(),
        AjustePorRevaluacionesOReExpresiones: z.number(),
      }),
      Incrementos: z.object({
        TransferenciasAdquisiciones: z.number(),
        CambiosEnValorRazonable: z.number(),
      }),
      Disminuciones: z.object({
        TransferenciasEliminaciones: z.number(),
        CambiosEnValorRazonable: z.number(),
      }),
      Depreciacion: z.object({
        PorCosto: z.number(),
        EfectoDeConversion: z.number(),
        AjustePorRevaluacionesOReExpresiones: z.number(),
      }),
      DeterioroAcumuladoAlFinalDelPeriodo: z.number(),
      ImporteNetoAlFinalDelPeriodo: z.object({
        Costo: z.number(),
        AjustePorRevaluacionesOReExpresiones: z.number(),
      }),
      GastoPeriodoPorDepreciacionOAmortizacion: z.object({
        PorCosto: z.number(),
        PorAjustePorRevaluacionesOReExpresiones: z.number(),
      }),
      GastoDelPeriodoPorDeterioro: z.number(),
      IngresosDelPeriodoPorRecuperacionDelDeterioro: z.number(),
      ValorActivosAdquiridosMedianteArrendamientoFinancieroOLeasing: z.number(),
      DesmantelamientoRestauracion: z.number(),
      MayorValorPorRevaluacionAcumuladoAlFinalDelPeriodo: z.number(),
    }),
    DatosFiscales: z.object({
      ValorTotalIncluyendoArrendamientoFinancieroOLeasingFinanciero: z.object({
        SaldoAlComienzoDelPeriodo: z.number(),
        IncrementosPorTransferenciasAdquisicionesYOtrosCambios: z.number(),
        DisminucionesPorTransferenciasYOtrosCambios: z.number(),
        SubtotalAlFinalPeriodo: z.number(),
        DepreciacionYAmortizacionAcumuladaAlFinalDelPeriodo: z.number(),
        TotalNetoAlFinalDelPeriodo: z.number(),
        GastoFiscalPorDepresiacionYAmortizacionDelPeriodo: z.number(),
      }),
      DatosInformativosValorActivosAdquiridosMedianteArrendamientoFinancieroOLeasingFinanciero:
        z.object({
          ValorTotalAlFinalDelPeriodo: z.number(),
          DepreciacionYAmortizacionAcumuladaAlFinalDelPeriodo: z.number(),
          ValorNetoAlFinalDelPeriodo: z.number(),
          GastoFiscalDepreciacionYAmortizacionDelPeriodo: z.number(),
        }),
    }),
  }),
  TotalPPEPIANCMV: z.object({
    DatosContables: z.object({
      ImporteAlComienzoDelPeriodo: z.object({
        Costo: z.number(),
        EfectoDeConversion: z.number(),
        AjustePorRevaluacionesOReExpresiones: z.number(),
      }),
      Incrementos: z.object({
        TransferenciasAdquisiciones: z.number(),
        CambiosEnValorRazonable: z.number(),
      }),
      Disminuciones: z.object({
        TransferenciasEliminaciones: z.number(),
        CambiosEnValorRazonable: z.number(),
      }),
      Depreciacion: z.object({
        PorCosto: z.number(),
        EfectoDeConversion: z.number(),
        AjustePorRevaluacionesOReExpresiones: z.number(),
      }),
      DeterioroAcumuladoAlFinalDelPeriodo: z.number(),
      ImporteNetoAlFinalDelPeriodo: z.object({
        Costo: z.number(),
        AjustePorRevaluacionesOReExpresiones: z.number(),
      }),
      GastoPeriodoPorDepreciacionOAmortizacion: z.object({
        PorCosto: z.number(),
        PorAjustePorRevaluacionesOReExpresiones: z.number(),
      }),
      GastoDelPeriodoPorDeterioro: z.number(),
      IngresosDelPeriodoPorRecuperacionDelDeterioro: z.number(),
      ValorActivosAdquiridosMedianteArrendamientoFinancieroOLeasing: z.number(),
      DesmantelamientoRestauracion: z.number(),
      MayorValorPorRevaluacionAcumuladoAlFinalDelPeriodo: z.number(),
    }),
    DatosFiscales: z.object({
      ValorTotalIncluyendoArrendamientoFinancieroOLeasingFinanciero: z.object({
        SaldoAlComienzoDelPeriodo: z.number(),
        IncrementosPorTransferenciasAdquisicionesYOtrosCambios: z.number(),
        DisminucionesPorTransferenciasYOtrosCambios: z.number(),
        SubtotalAlFinalPeriodo: z.number(),
        DepreciacionYAmortizacionAcumuladaAlFinalDelPeriodo: z.number(),
        TotalNetoAlFinalDelPeriodo: z.number(),
        GastoFiscalPorDepresiacionYAmortizacionDelPeriodo: z.number(),
      }),
      DatosInformativosValorActivosAdquiridosMedianteArrendamientoFinancieroOLeasingFinanciero:
        z.object({
          ValorTotalAlFinalDelPeriodo: z.number(),
          DepreciacionYAmortizacionAcumuladaAlFinalDelPeriodo: z.number(),
          ValorNetoAlFinalDelPeriodo: z.number(),
          GastoFiscalDepreciacionYAmortizacionDelPeriodo: z.number(),
        }),
    }),
  }),
  ActivosIntangibles: z.object({
    MarcasComerciales: z.object({
      DatosContables: z.object({
        ImporteAlComienzoDelPeriodo: z.object({
          Costo: z.number(),
          EfectoDeConversion: z.number(),
          AjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        Incrementos: z.object({
          TransferenciasAdquisiciones: z.number(),
          CambiosEnValorRazonable: z.number(),
        }),
        Disminuciones: z.object({
          TransferenciasEliminaciones: z.number(),
          CambiosEnValorRazonable: z.number(),
        }),
        Depreciacion: z.object({
          PorCosto: z.number(),
          EfectoDeConversion: z.number(),
          AjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        DeterioroAcumuladoAlFinalDelPeriodo: z.number(),
        ImporteNetoAlFinalDelPeriodo: z.object({
          Costo: z.number(),
          AjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        GastoPeriodoPorDepreciacionOAmortizacion: z.object({
          PorCosto: z.number(),
          PorAjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        GastoDelPeriodoPorDeterioro: z.number(),
        IngresosDelPeriodoPorRecuperacionDelDeterioro: z.number(),
        ValorActivosAdquiridosMedianteArrendamientoFinancieroOLeasing:
          z.number(),
        DesmantelamientoRestauracion: z.number(),
        MayorValorPorRevaluacionAcumuladoAlFinalDelPeriodo: z.number(),
      }),
      DatosFiscales: z.object({
        ValorTotalIncluyendoArrendamientoFinancieroOLeasingFinanciero: z.object(
          {
            SaldoAlComienzoDelPeriodo: z.number(),
            IncrementosPorTransferenciasAdquisicionesYOtrosCambios: z.number(),
            DisminucionesPorTransferenciasYOtrosCambios: z.number(),
            SubtotalAlFinalPeriodo: z.number(),
            DepreciacionYAmortizacionAcumuladaAlFinalDelPeriodo: z.number(),
            TotalNetoAlFinalDelPeriodo: z.number(),
            GastoFiscalPorDepresiacionYAmortizacionDelPeriodo: z.number(),
          }
        ),
        DatosInformativosValorActivosAdquiridosMedianteArrendamientoFinancieroOLeasingFinanciero:
          z.object({
            ValorTotalAlFinalDelPeriodo: z.number(),
            DepreciacionYAmortizacionAcumuladaAlFinalDelPeriodo: z.number(),
            ValorNetoAlFinalDelPeriodo: z.number(),
            GastoFiscalDepreciacionYAmortizacionDelPeriodo: z.number(),
          }),
      }),
    }),
    ActivosIntangiblesDeExploracionYEvaluacion: z.object({
      DatosContables: z.object({
        ImporteAlComienzoDelPeriodo: z.object({
          Costo: z.number(),
          EfectoDeConversion: z.number(),
          AjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        Incrementos: z.object({
          TransferenciasAdquisiciones: z.number(),
          CambiosEnValorRazonable: z.number(),
        }),
        Disminuciones: z.object({
          TransferenciasEliminaciones: z.number(),
          CambiosEnValorRazonable: z.number(),
        }),
        Depreciacion: z.object({
          PorCosto: z.number(),
          EfectoDeConversion: z.number(),
          AjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        DeterioroAcumuladoAlFinalDelPeriodo: z.number(),
        ImporteNetoAlFinalDelPeriodo: z.object({
          Costo: z.number(),
          AjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        GastoPeriodoPorDepreciacionOAmortizacion: z.object({
          PorCosto: z.number(),
          PorAjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        GastoDelPeriodoPorDeterioro: z.number(),
        IngresosDelPeriodoPorRecuperacionDelDeterioro: z.number(),
        ValorActivosAdquiridosMedianteArrendamientoFinancieroOLeasing:
          z.number(),
        DesmantelamientoRestauracion: z.number(),
        MayorValorPorRevaluacionAcumuladoAlFinalDelPeriodo: z.number(),
      }),
      DatosFiscales: z.object({
        ValorTotalIncluyendoArrendamientoFinancieroOLeasingFinanciero: z.object(
          {
            SaldoAlComienzoDelPeriodo: z.number(),
            IncrementosPorTransferenciasAdquisicionesYOtrosCambios: z.number(),
            DisminucionesPorTransferenciasYOtrosCambios: z.number(),
            SubtotalAlFinalPeriodo: z.number(),
            DepreciacionYAmortizacionAcumuladaAlFinalDelPeriodo: z.number(),
            TotalNetoAlFinalDelPeriodo: z.number(),
            GastoFiscalPorDepresiacionYAmortizacionDelPeriodo: z.number(),
          }
        ),
        DatosInformativosValorActivosAdquiridosMedianteArrendamientoFinancieroOLeasingFinanciero:
          z.object({
            ValorTotalAlFinalDelPeriodo: z.number(),
            DepreciacionYAmortizacionAcumuladaAlFinalDelPeriodo: z.number(),
            ValorNetoAlFinalDelPeriodo: z.number(),
            GastoFiscalDepreciacionYAmortizacionDelPeriodo: z.number(),
          }),
      }),
    }),
    CabecerasDePeriodicosRevistasOTitulosPublicaciones: z.object({
      DatosContables: z.object({
        ImporteAlComienzoDelPeriodo: z.object({
          Costo: z.number(),
          EfectoDeConversion: z.number(),
          AjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        Incrementos: z.object({
          TransferenciasAdquisiciones: z.number(),
          CambiosEnValorRazonable: z.number(),
        }),
        Disminuciones: z.object({
          TransferenciasEliminaciones: z.number(),
          CambiosEnValorRazonable: z.number(),
        }),
        Depreciacion: z.object({
          PorCosto: z.number(),
          EfectoDeConversion: z.number(),
          AjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        DeterioroAcumuladoAlFinalDelPeriodo: z.number(),
        ImporteNetoAlFinalDelPeriodo: z.object({
          Costo: z.number(),
          AjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        GastoPeriodoPorDepreciacionOAmortizacion: z.object({
          PorCosto: z.number(),
          PorAjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        GastoDelPeriodoPorDeterioro: z.number(),
        IngresosDelPeriodoPorRecuperacionDelDeterioro: z.number(),
        ValorActivosAdquiridosMedianteArrendamientoFinancieroOLeasing:
          z.number(),
        DesmantelamientoRestauracion: z.number(),
        MayorValorPorRevaluacionAcumuladoAlFinalDelPeriodo: z.number(),
      }),
      DatosFiscales: z.object({
        ValorTotalIncluyendoArrendamientoFinancieroOLeasingFinanciero: z.object(
          {
            SaldoAlComienzoDelPeriodo: z.number(),
            IncrementosPorTransferenciasAdquisicionesYOtrosCambios: z.number(),
            DisminucionesPorTransferenciasYOtrosCambios: z.number(),
            SubtotalAlFinalPeriodo: z.number(),
            DepreciacionYAmortizacionAcumuladaAlFinalDelPeriodo: z.number(),
            TotalNetoAlFinalDelPeriodo: z.number(),
            GastoFiscalPorDepresiacionYAmortizacionDelPeriodo: z.number(),
          }
        ),
        DatosInformativosValorActivosAdquiridosMedianteArrendamientoFinancieroOLeasingFinanciero:
          z.object({
            ValorTotalAlFinalDelPeriodo: z.number(),
            DepreciacionYAmortizacionAcumuladaAlFinalDelPeriodo: z.number(),
            ValorNetoAlFinalDelPeriodo: z.number(),
            GastoFiscalDepreciacionYAmortizacionDelPeriodo: z.number(),
          }),
      }),
    }),
    ProgramasYAplicacionesInformaticas: z.object({
      DatosContables: z.object({
        ImporteAlComienzoDelPeriodo: z.object({
          Costo: z.number(),
          EfectoDeConversion: z.number(),
          AjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        Incrementos: z.object({
          TransferenciasAdquisiciones: z.number(),
          CambiosEnValorRazonable: z.number(),
        }),
        Disminuciones: z.object({
          TransferenciasEliminaciones: z.number(),
          CambiosEnValorRazonable: z.number(),
        }),
        Depreciacion: z.object({
          PorCosto: z.number(),
          EfectoDeConversion: z.number(),
          AjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        DeterioroAcumuladoAlFinalDelPeriodo: z.number(),
        ImporteNetoAlFinalDelPeriodo: z.object({
          Costo: z.number(),
          AjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        GastoPeriodoPorDepreciacionOAmortizacion: z.object({
          PorCosto: z.number(),
          PorAjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        GastoDelPeriodoPorDeterioro: z.number(),
        IngresosDelPeriodoPorRecuperacionDelDeterioro: z.number(),
        ValorActivosAdquiridosMedianteArrendamientoFinancieroOLeasing:
          z.number(),
        DesmantelamientoRestauracion: z.number(),
        MayorValorPorRevaluacionAcumuladoAlFinalDelPeriodo: z.number(),
      }),
      DatosFiscales: z.object({
        ValorTotalIncluyendoArrendamientoFinancieroOLeasingFinanciero: z.object(
          {
            SaldoAlComienzoDelPeriodo: z.number(),
            IncrementosPorTransferenciasAdquisicionesYOtrosCambios: z.number(),
            DisminucionesPorTransferenciasYOtrosCambios: z.number(),
            SubtotalAlFinalPeriodo: z.number(),
            DepreciacionYAmortizacionAcumuladaAlFinalDelPeriodo: z.number(),
            TotalNetoAlFinalDelPeriodo: z.number(),
            GastoFiscalPorDepresiacionYAmortizacionDelPeriodo: z.number(),
          }
        ),
        DatosInformativosValorActivosAdquiridosMedianteArrendamientoFinancieroOLeasingFinanciero:
          z.object({
            ValorTotalAlFinalDelPeriodo: z.number(),
            DepreciacionYAmortizacionAcumuladaAlFinalDelPeriodo: z.number(),
            ValorNetoAlFinalDelPeriodo: z.number(),
            GastoFiscalDepreciacionYAmortizacionDelPeriodo: z.number(),
          }),
      }),
    }),
    LicenciasYFranquicias: z.object({
      DatosContables: z.object({
        ImporteAlComienzoDelPeriodo: z.object({
          Costo: z.number(),
          EfectoDeConversion: z.number(),
          AjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        Incrementos: z.object({
          TransferenciasAdquisiciones: z.number(),
          CambiosEnValorRazonable: z.number(),
        }),
        Disminuciones: z.object({
          TransferenciasEliminaciones: z.number(),
          CambiosEnValorRazonable: z.number(),
        }),
        Depreciacion: z.object({
          PorCosto: z.number(),
          EfectoDeConversion: z.number(),
          AjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        DeterioroAcumuladoAlFinalDelPeriodo: z.number(),
        ImporteNetoAlFinalDelPeriodo: z.object({
          Costo: z.number(),
          AjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        GastoPeriodoPorDepreciacionOAmortizacion: z.object({
          PorCosto: z.number(),
          PorAjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        GastoDelPeriodoPorDeterioro: z.number(),
        IngresosDelPeriodoPorRecuperacionDelDeterioro: z.number(),
        ValorActivosAdquiridosMedianteArrendamientoFinancieroOLeasing:
          z.number(),
        DesmantelamientoRestauracion: z.number(),
        MayorValorPorRevaluacionAcumuladoAlFinalDelPeriodo: z.number(),
      }),
      DatosFiscales: z.object({
        ValorTotalIncluyendoArrendamientoFinancieroOLeasingFinanciero: z.object(
          {
            SaldoAlComienzoDelPeriodo: z.number(),
            IncrementosPorTransferenciasAdquisicionesYOtrosCambios: z.number(),
            DisminucionesPorTransferenciasYOtrosCambios: z.number(),
            SubtotalAlFinalPeriodo: z.number(),
            DepreciacionYAmortizacionAcumuladaAlFinalDelPeriodo: z.number(),
            TotalNetoAlFinalDelPeriodo: z.number(),
            GastoFiscalPorDepresiacionYAmortizacionDelPeriodo: z.number(),
          }
        ),
        DatosInformativosValorActivosAdquiridosMedianteArrendamientoFinancieroOLeasingFinanciero:
          z.object({
            ValorTotalAlFinalDelPeriodo: z.number(),
            DepreciacionYAmortizacionAcumuladaAlFinalDelPeriodo: z.number(),
            ValorNetoAlFinalDelPeriodo: z.number(),
            GastoFiscalDepreciacionYAmortizacionDelPeriodo: z.number(),
          }),
      }),
    }),
    PropiedadIntelectualPatentesYOtraPropiedadIndustrialServiciosYDerechosOperacion:
      z.object({
        DatosContables: z.object({
          ImporteAlComienzoDelPeriodo: z.object({
            Costo: z.number(),
            EfectoDeConversion: z.number(),
            AjustePorRevaluacionesOReExpresiones: z.number(),
          }),
          Incrementos: z.object({
            TransferenciasAdquisiciones: z.number(),
            CambiosEnValorRazonable: z.number(),
          }),
          Disminuciones: z.object({
            TransferenciasEliminaciones: z.number(),
            CambiosEnValorRazonable: z.number(),
          }),
          Depreciacion: z.object({
            PorCosto: z.number(),
            EfectoDeConversion: z.number(),
            AjustePorRevaluacionesOReExpresiones: z.number(),
          }),
          DeterioroAcumuladoAlFinalDelPeriodo: z.number(),
          ImporteNetoAlFinalDelPeriodo: z.object({
            Costo: z.number(),
            AjustePorRevaluacionesOReExpresiones: z.number(),
          }),
          GastoPeriodoPorDepreciacionOAmortizacion: z.object({
            PorCosto: z.number(),
            PorAjustePorRevaluacionesOReExpresiones: z.number(),
          }),
          GastoDelPeriodoPorDeterioro: z.number(),
          IngresosDelPeriodoPorRecuperacionDelDeterioro: z.number(),
          ValorActivosAdquiridosMedianteArrendamientoFinancieroOLeasing:
            z.number(),
          DesmantelamientoRestauracion: z.number(),
          MayorValorPorRevaluacionAcumuladoAlFinalDelPeriodo: z.number(),
        }),
        DatosFiscales: z.object({
          ValorTotalIncluyendoArrendamientoFinancieroOLeasingFinanciero:
            z.object({
              SaldoAlComienzoDelPeriodo: z.number(),
              IncrementosPorTransferenciasAdquisicionesYOtrosCambios:
                z.number(),
              DisminucionesPorTransferenciasYOtrosCambios: z.number(),
              SubtotalAlFinalPeriodo: z.number(),
              DepreciacionYAmortizacionAcumuladaAlFinalDelPeriodo: z.number(),
              TotalNetoAlFinalDelPeriodo: z.number(),
              GastoFiscalPorDepresiacionYAmortizacionDelPeriodo: z.number(),
            }),
          DatosInformativosValorActivosAdquiridosMedianteArrendamientoFinancieroOLeasingFinanciero:
            z.object({
              ValorTotalAlFinalDelPeriodo: z.number(),
              DepreciacionYAmortizacionAcumuladaAlFinalDelPeriodo: z.number(),
              ValorNetoAlFinalDelPeriodo: z.number(),
              GastoFiscalDepreciacionYAmortizacionDelPeriodo: z.number(),
            }),
        }),
      }),
    RecetasFormulasModelosDiseñosYPrototipos: z.object({
      DatosContables: z.object({
        ImporteAlComienzoDelPeriodo: z.object({
          Costo: z.number(),
          EfectoDeConversion: z.number(),
          AjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        Incrementos: z.object({
          TransferenciasAdquisiciones: z.number(),
          CambiosEnValorRazonable: z.number(),
        }),
        Disminuciones: z.object({
          TransferenciasEliminaciones: z.number(),
          CambiosEnValorRazonable: z.number(),
        }),
        Depreciacion: z.object({
          PorCosto: z.number(),
          EfectoDeConversion: z.number(),
          AjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        DeterioroAcumuladoAlFinalDelPeriodo: z.number(),
        ImporteNetoAlFinalDelPeriodo: z.object({
          Costo: z.number(),
          AjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        GastoPeriodoPorDepreciacionOAmortizacion: z.object({
          PorCosto: z.number(),
          PorAjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        GastoDelPeriodoPorDeterioro: z.number(),
        IngresosDelPeriodoPorRecuperacionDelDeterioro: z.number(),
        ValorActivosAdquiridosMedianteArrendamientoFinancieroOLeasing:
          z.number(),
        DesmantelamientoRestauracion: z.number(),
        MayorValorPorRevaluacionAcumuladoAlFinalDelPeriodo: z.number(),
      }),
      DatosFiscales: z.object({
        ValorTotalIncluyendoArrendamientoFinancieroOLeasingFinanciero: z.object(
          {
            SaldoAlComienzoDelPeriodo: z.number(),
            IncrementosPorTransferenciasAdquisicionesYOtrosCambios: z.number(),
            DisminucionesPorTransferenciasYOtrosCambios: z.number(),
            SubtotalAlFinalPeriodo: z.number(),
            DepreciacionYAmortizacionAcumuladaAlFinalDelPeriodo: z.number(),
            TotalNetoAlFinalDelPeriodo: z.number(),
            GastoFiscalPorDepresiacionYAmortizacionDelPeriodo: z.number(),
          }
        ),
        DatosInformativosValorActivosAdquiridosMedianteArrendamientoFinancieroOLeasingFinanciero:
          z.object({
            ValorTotalAlFinalDelPeriodo: z.number(),
            DepreciacionYAmortizacionAcumuladaAlFinalDelPeriodo: z.number(),
            ValorNetoAlFinalDelPeriodo: z.number(),
            GastoFiscalDepreciacionYAmortizacionDelPeriodo: z.number(),
          }),
      }),
    }),
    Concesiones: z.object({
      DatosContables: z.object({
        ImporteAlComienzoDelPeriodo: z.object({
          Costo: z.number(),
          EfectoDeConversion: z.number(),
          AjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        Incrementos: z.object({
          TransferenciasAdquisiciones: z.number(),
          CambiosEnValorRazonable: z.number(),
        }),
        Disminuciones: z.object({
          TransferenciasEliminaciones: z.number(),
          CambiosEnValorRazonable: z.number(),
        }),
        Depreciacion: z.object({
          PorCosto: z.number(),
          EfectoDeConversion: z.number(),
          AjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        DeterioroAcumuladoAlFinalDelPeriodo: z.number(),
        ImporteNetoAlFinalDelPeriodo: z.object({
          Costo: z.number(),
          AjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        GastoPeriodoPorDepreciacionOAmortizacion: z.object({
          PorCosto: z.number(),
          PorAjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        GastoDelPeriodoPorDeterioro: z.number(),
        IngresosDelPeriodoPorRecuperacionDelDeterioro: z.number(),
        ValorActivosAdquiridosMedianteArrendamientoFinancieroOLeasing:
          z.number(),
        DesmantelamientoRestauracion: z.number(),
        MayorValorPorRevaluacionAcumuladoAlFinalDelPeriodo: z.number(),
      }),
      DatosFiscales: z.object({
        ValorTotalIncluyendoArrendamientoFinancieroOLeasingFinanciero: z.object(
          {
            SaldoAlComienzoDelPeriodo: z.number(),
            IncrementosPorTransferenciasAdquisicionesYOtrosCambios: z.number(),
            DisminucionesPorTransferenciasYOtrosCambios: z.number(),
            SubtotalAlFinalPeriodo: z.number(),
            DepreciacionYAmortizacionAcumuladaAlFinalDelPeriodo: z.number(),
            TotalNetoAlFinalDelPeriodo: z.number(),
            GastoFiscalPorDepresiacionYAmortizacionDelPeriodo: z.number(),
          }
        ),
        DatosInformativosValorActivosAdquiridosMedianteArrendamientoFinancieroOLeasingFinanciero:
          z.object({
            ValorTotalAlFinalDelPeriodo: z.number(),
            DepreciacionYAmortizacionAcumuladaAlFinalDelPeriodo: z.number(),
            ValorNetoAlFinalDelPeriodo: z.number(),
            GastoFiscalDepreciacionYAmortizacionDelPeriodo: z.number(),
          }),
      }),
    }),
    DesembolsosDeDesarrolloCapitalizados: z.object({
      DatosContables: z.object({
        ImporteAlComienzoDelPeriodo: z.object({
          Costo: z.number(),
          EfectoDeConversion: z.number(),
          AjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        Incrementos: z.object({
          TransferenciasAdquisiciones: z.number(),
          CambiosEnValorRazonable: z.number(),
        }),
        Disminuciones: z.object({
          TransferenciasEliminaciones: z.number(),
          CambiosEnValorRazonable: z.number(),
        }),
        Depreciacion: z.object({
          PorCosto: z.number(),
          EfectoDeConversion: z.number(),
          AjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        DeterioroAcumuladoAlFinalDelPeriodo: z.number(),
        ImporteNetoAlFinalDelPeriodo: z.object({
          Costo: z.number(),
          AjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        GastoPeriodoPorDepreciacionOAmortizacion: z.object({
          PorCosto: z.number(),
          PorAjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        GastoDelPeriodoPorDeterioro: z.number(),
        IngresosDelPeriodoPorRecuperacionDelDeterioro: z.number(),
        ValorActivosAdquiridosMedianteArrendamientoFinancieroOLeasing:
          z.number(),
        DesmantelamientoRestauracion: z.number(),
        MayorValorPorRevaluacionAcumuladoAlFinalDelPeriodo: z.number(),
      }),
      DatosFiscales: z.object({
        ValorTotalIncluyendoArrendamientoFinancieroOLeasingFinanciero: z.object(
          {
            SaldoAlComienzoDelPeriodo: z.number(),
            IncrementosPorTransferenciasAdquisicionesYOtrosCambios: z.number(),
            DisminucionesPorTransferenciasYOtrosCambios: z.number(),
            SubtotalAlFinalPeriodo: z.number(),
            DepreciacionYAmortizacionAcumuladaAlFinalDelPeriodo: z.number(),
            TotalNetoAlFinalDelPeriodo: z.number(),
            GastoFiscalPorDepresiacionYAmortizacionDelPeriodo: z.number(),
          }
        ),
        DatosInformativosValorActivosAdquiridosMedianteArrendamientoFinancieroOLeasingFinanciero:
          z.object({
            ValorTotalAlFinalDelPeriodo: z.number(),
            DepreciacionYAmortizacionAcumuladaAlFinalDelPeriodo: z.number(),
            ValorNetoAlFinalDelPeriodo: z.number(),
            GastoFiscalDepreciacionYAmortizacionDelPeriodo: z.number(),
          }),
      }),
    }),
    ActivosIntangiblesEnDesarrollo: z.object({
      DatosContables: z.object({
        ImporteAlComienzoDelPeriodo: z.object({
          Costo: z.number(),
          EfectoDeConversion: z.number(),
          AjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        Incrementos: z.object({
          TransferenciasAdquisiciones: z.number(),
          CambiosEnValorRazonable: z.number(),
        }),
        Disminuciones: z.object({
          TransferenciasEliminaciones: z.number(),
          CambiosEnValorRazonable: z.number(),
        }),
        Depreciacion: z.object({
          PorCosto: z.number(),
          EfectoDeConversion: z.number(),
          AjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        DeterioroAcumuladoAlFinalDelPeriodo: z.number(),
        ImporteNetoAlFinalDelPeriodo: z.object({
          Costo: z.number(),
          AjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        GastoPeriodoPorDepreciacionOAmortizacion: z.object({
          PorCosto: z.number(),
          PorAjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        GastoDelPeriodoPorDeterioro: z.number(),
        IngresosDelPeriodoPorRecuperacionDelDeterioro: z.number(),
        ValorActivosAdquiridosMedianteArrendamientoFinancieroOLeasing:
          z.number(),
        DesmantelamientoRestauracion: z.number(),
        MayorValorPorRevaluacionAcumuladoAlFinalDelPeriodo: z.number(),
      }),
      DatosFiscales: z.object({
        ValorTotalIncluyendoArrendamientoFinancieroOLeasingFinanciero: z.object(
          {
            SaldoAlComienzoDelPeriodo: z.number(),
            IncrementosPorTransferenciasAdquisicionesYOtrosCambios: z.number(),
            DisminucionesPorTransferenciasYOtrosCambios: z.number(),
            SubtotalAlFinalPeriodo: z.number(),
            DepreciacionYAmortizacionAcumuladaAlFinalDelPeriodo: z.number(),
            TotalNetoAlFinalDelPeriodo: z.number(),
            GastoFiscalPorDepresiacionYAmortizacionDelPeriodo: z.number(),
          }
        ),
        DatosInformativosValorActivosAdquiridosMedianteArrendamientoFinancieroOLeasingFinanciero:
          z.object({
            ValorTotalAlFinalDelPeriodo: z.number(),
            DepreciacionYAmortizacionAcumuladaAlFinalDelPeriodo: z.number(),
            ValorNetoAlFinalDelPeriodo: z.number(),
            GastoFiscalDepreciacionYAmortizacionDelPeriodo: z.number(),
          }),
      }),
    }),
    Plusvalia: z.object({
      DatosContables: z.object({
        ImporteAlComienzoDelPeriodo: z.object({
          Costo: z.number(),
          EfectoDeConversion: z.number(),
          AjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        Incrementos: z.object({
          TransferenciasAdquisiciones: z.number(),
          CambiosEnValorRazonable: z.number(),
        }),
        Disminuciones: z.object({
          TransferenciasEliminaciones: z.number(),
          CambiosEnValorRazonable: z.number(),
        }),
        Depreciacion: z.object({
          PorCosto: z.number(),
          EfectoDeConversion: z.number(),
          AjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        DeterioroAcumuladoAlFinalDelPeriodo: z.number(),
        ImporteNetoAlFinalDelPeriodo: z.object({
          Costo: z.number(),
          AjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        GastoPeriodoPorDepreciacionOAmortizacion: z.object({
          PorCosto: z.number(),
          PorAjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        GastoDelPeriodoPorDeterioro: z.number(),
        IngresosDelPeriodoPorRecuperacionDelDeterioro: z.number(),
        ValorActivosAdquiridosMedianteArrendamientoFinancieroOLeasing:
          z.number(),
        DesmantelamientoRestauracion: z.number(),
        MayorValorPorRevaluacionAcumuladoAlFinalDelPeriodo: z.number(),
      }),
      DatosFiscales: z.object({
        ValorTotalIncluyendoArrendamientoFinancieroOLeasingFinanciero: z.object(
          {
            SaldoAlComienzoDelPeriodo: z.number(),
            IncrementosPorTransferenciasAdquisicionesYOtrosCambios: z.number(),
            DisminucionesPorTransferenciasYOtrosCambios: z.number(),
            SubtotalAlFinalPeriodo: z.number(),
            DepreciacionYAmortizacionAcumuladaAlFinalDelPeriodo: z.number(),
            TotalNetoAlFinalDelPeriodo: z.number(),
            GastoFiscalPorDepresiacionYAmortizacionDelPeriodo: z.number(),
          }
        ),
        DatosInformativosValorActivosAdquiridosMedianteArrendamientoFinancieroOLeasingFinanciero:
          z.object({
            ValorTotalAlFinalDelPeriodo: z.number(),
            DepreciacionYAmortizacionAcumuladaAlFinalDelPeriodo: z.number(),
            ValorNetoAlFinalDelPeriodo: z.number(),
            GastoFiscalDepreciacionYAmortizacionDelPeriodo: z.number(),
          }),
      }),
    }),
    MejorasDeDerechosDeArrendamiento: z.object({
      DatosContables: z.object({
        ImporteAlComienzoDelPeriodo: z.object({
          Costo: z.number(),
          EfectoDeConversion: z.number(),
          AjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        Incrementos: z.object({
          TransferenciasAdquisiciones: z.number(),
          CambiosEnValorRazonable: z.number(),
        }),
        Disminuciones: z.object({
          TransferenciasEliminaciones: z.number(),
          CambiosEnValorRazonable: z.number(),
        }),
        Depreciacion: z.object({
          PorCosto: z.number(),
          EfectoDeConversion: z.number(),
          AjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        DeterioroAcumuladoAlFinalDelPeriodo: z.number(),
        ImporteNetoAlFinalDelPeriodo: z.object({
          Costo: z.number(),
          AjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        GastoPeriodoPorDepreciacionOAmortizacion: z.object({
          PorCosto: z.number(),
          PorAjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        GastoDelPeriodoPorDeterioro: z.number(),
        IngresosDelPeriodoPorRecuperacionDelDeterioro: z.number(),
        ValorActivosAdquiridosMedianteArrendamientoFinancieroOLeasing:
          z.number(),
        DesmantelamientoRestauracion: z.number(),
        MayorValorPorRevaluacionAcumuladoAlFinalDelPeriodo: z.number(),
      }),
      DatosFiscales: z.object({
        ValorTotalIncluyendoArrendamientoFinancieroOLeasingFinanciero: z.object(
          {
            SaldoAlComienzoDelPeriodo: z.number(),
            IncrementosPorTransferenciasAdquisicionesYOtrosCambios: z.number(),
            DisminucionesPorTransferenciasYOtrosCambios: z.number(),
            SubtotalAlFinalPeriodo: z.number(),
            DepreciacionYAmortizacionAcumuladaAlFinalDelPeriodo: z.number(),
            TotalNetoAlFinalDelPeriodo: z.number(),
            GastoFiscalPorDepresiacionYAmortizacionDelPeriodo: z.number(),
          }
        ),
        DatosInformativosValorActivosAdquiridosMedianteArrendamientoFinancieroOLeasingFinanciero:
          z.object({
            ValorTotalAlFinalDelPeriodo: z.number(),
            DepreciacionYAmortizacionAcumuladaAlFinalDelPeriodo: z.number(),
            ValorNetoAlFinalDelPeriodo: z.number(),
            GastoFiscalDepreciacionYAmortizacionDelPeriodo: z.number(),
          }),
      }),
    }),
    SubvencionesDelEstado: z.object({
      DatosContables: z.object({
        ImporteAlComienzoDelPeriodo: z.object({
          Costo: z.number(),
          EfectoDeConversion: z.number(),
          AjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        Incrementos: z.object({
          TransferenciasAdquisiciones: z.number(),
          CambiosEnValorRazonable: z.number(),
        }),
        Disminuciones: z.object({
          TransferenciasEliminaciones: z.number(),
          CambiosEnValorRazonable: z.number(),
        }),
        Depreciacion: z.object({
          PorCosto: z.number(),
          EfectoDeConversion: z.number(),
          AjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        DeterioroAcumuladoAlFinalDelPeriodo: z.number(),
        ImporteNetoAlFinalDelPeriodo: z.object({
          Costo: z.number(),
          AjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        GastoPeriodoPorDepreciacionOAmortizacion: z.object({
          PorCosto: z.number(),
          PorAjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        GastoDelPeriodoPorDeterioro: z.number(),
        IngresosDelPeriodoPorRecuperacionDelDeterioro: z.number(),
        ValorActivosAdquiridosMedianteArrendamientoFinancieroOLeasing:
          z.number(),
        DesmantelamientoRestauracion: z.number(),
        MayorValorPorRevaluacionAcumuladoAlFinalDelPeriodo: z.number(),
      }),
      DatosFiscales: z.object({
        ValorTotalIncluyendoArrendamientoFinancieroOLeasingFinanciero: z.object(
          {
            SaldoAlComienzoDelPeriodo: z.number(),
            IncrementosPorTransferenciasAdquisicionesYOtrosCambios: z.number(),
            DisminucionesPorTransferenciasYOtrosCambios: z.number(),
            SubtotalAlFinalPeriodo: z.number(),
            DepreciacionYAmortizacionAcumuladaAlFinalDelPeriodo: z.number(),
            TotalNetoAlFinalDelPeriodo: z.number(),
            GastoFiscalPorDepresiacionYAmortizacionDelPeriodo: z.number(),
          }
        ),
        DatosInformativosValorActivosAdquiridosMedianteArrendamientoFinancieroOLeasingFinanciero:
          z.object({
            ValorTotalAlFinalDelPeriodo: z.number(),
            DepreciacionYAmortizacionAcumuladaAlFinalDelPeriodo: z.number(),
            ValorNetoAlFinalDelPeriodo: z.number(),
            GastoFiscalDepreciacionYAmortizacionDelPeriodo: z.number(),
          }),
      }),
    }),
    OtrosActivosIntangibles: z.object({
      DatosContables: z.object({
        ImporteAlComienzoDelPeriodo: z.object({
          Costo: z.number(),
          EfectoDeConversion: z.number(),
          AjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        Incrementos: z.object({
          TransferenciasAdquisiciones: z.number(),
          CambiosEnValorRazonable: z.number(),
        }),
        Disminuciones: z.object({
          TransferenciasEliminaciones: z.number(),
          CambiosEnValorRazonable: z.number(),
        }),
        Depreciacion: z.object({
          PorCosto: z.number(),
          EfectoDeConversion: z.number(),
          AjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        DeterioroAcumuladoAlFinalDelPeriodo: z.number(),
        ImporteNetoAlFinalDelPeriodo: z.object({
          Costo: z.number(),
          AjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        GastoPeriodoPorDepreciacionOAmortizacion: z.object({
          PorCosto: z.number(),
          PorAjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        GastoDelPeriodoPorDeterioro: z.number(),
        IngresosDelPeriodoPorRecuperacionDelDeterioro: z.number(),
        ValorActivosAdquiridosMedianteArrendamientoFinancieroOLeasing:
          z.number(),
        DesmantelamientoRestauracion: z.number(),
        MayorValorPorRevaluacionAcumuladoAlFinalDelPeriodo: z.number(),
      }),
      DatosFiscales: z.object({
        ValorTotalIncluyendoArrendamientoFinancieroOLeasingFinanciero: z.object(
          {
            SaldoAlComienzoDelPeriodo: z.number(),
            IncrementosPorTransferenciasAdquisicionesYOtrosCambios: z.number(),
            DisminucionesPorTransferenciasYOtrosCambios: z.number(),
            SubtotalAlFinalPeriodo: z.number(),
            DepreciacionYAmortizacionAcumuladaAlFinalDelPeriodo: z.number(),
            TotalNetoAlFinalDelPeriodo: z.number(),
            GastoFiscalPorDepresiacionYAmortizacionDelPeriodo: z.number(),
          }
        ),
        DatosInformativosValorActivosAdquiridosMedianteArrendamientoFinancieroOLeasingFinanciero:
          z.object({
            ValorTotalAlFinalDelPeriodo: z.number(),
            DepreciacionYAmortizacionAcumuladaAlFinalDelPeriodo: z.number(),
            ValorNetoAlFinalDelPeriodo: z.number(),
            GastoFiscalDepreciacionYAmortizacionDelPeriodo: z.number(),
          }),
      }),
    }),
    TotalActivosIntangibles: z.object({
      DatosContables: z.object({
        ImporteAlComienzoDelPeriodo: z.object({
          Costo: z.number(),
          EfectoDeConversion: z.number(),
          AjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        Incrementos: z.object({
          TransferenciasAdquisiciones: z.number(),
          CambiosEnValorRazonable: z.number(),
        }),
        Disminuciones: z.object({
          TransferenciasEliminaciones: z.number(),
          CambiosEnValorRazonable: z.number(),
        }),
        Depreciacion: z.object({
          PorCosto: z.number(),
          EfectoDeConversion: z.number(),
          AjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        DeterioroAcumuladoAlFinalDelPeriodo: z.number(),
        ImporteNetoAlFinalDelPeriodo: z.object({
          Costo: z.number(),
          AjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        GastoPeriodoPorDepreciacionOAmortizacion: z.object({
          PorCosto: z.number(),
          PorAjustePorRevaluacionesOReExpresiones: z.number(),
        }),
        GastoDelPeriodoPorDeterioro: z.number(),
        IngresosDelPeriodoPorRecuperacionDelDeterioro: z.number(),
        ValorActivosAdquiridosMedianteArrendamientoFinancieroOLeasing:
          z.number(),
        DesmantelamientoRestauracion: z.number(),
        MayorValorPorRevaluacionAcumuladoAlFinalDelPeriodo: z.number(),
      }),
      DatosFiscales: z.object({
        ValorTotalIncluyendoArrendamientoFinancieroOLeasingFinanciero: z.object(
          {
            SaldoAlComienzoDelPeriodo: z.number(),
            IncrementosPorTransferenciasAdquisicionesYOtrosCambios: z.number(),
            DisminucionesPorTransferenciasYOtrosCambios: z.number(),
            SubtotalAlFinalPeriodo: z.number(),
            DepreciacionYAmortizacionAcumuladaAlFinalDelPeriodo: z.number(),
            TotalNetoAlFinalDelPeriodo: z.number(),
            GastoFiscalPorDepresiacionYAmortizacionDelPeriodo: z.number(),
          }
        ),
        DatosInformativosValorActivosAdquiridosMedianteArrendamientoFinancieroOLeasingFinanciero:
          z.object({
            ValorTotalAlFinalDelPeriodo: z.number(),
            DepreciacionYAmortizacionAcumuladaAlFinalDelPeriodo: z.number(),
            ValorNetoAlFinalDelPeriodo: z.number(),
            GastoFiscalDepreciacionYAmortizacionDelPeriodo: z.number(),
          }),
      }),
    }),
  }),
  TotalPPEPIANCMVYINTANGIBLES: z.object({
    DatosContables: z.object({
      ImporteAlComienzoDelPeriodo: z.object({
        Costo: z.number(),
        EfectoDeConversion: z.number(),
        AjustePorRevaluacionesOReExpresiones: z.number(),
      }),
      Incrementos: z.object({
        TransferenciasAdquisiciones: z.number(),
        CambiosEnValorRazonable: z.number(),
      }),
      Disminuciones: z.object({
        TransferenciasEliminaciones: z.number(),
        CambiosEnValorRazonable: z.number(),
      }),
      Depreciacion: z.object({
        PorCosto: z.number(),
        EfectoDeConversion: z.number(),
        AjustePorRevaluacionesOReExpresiones: z.number(),
      }),
      DeterioroAcumuladoAlFinalDelPeriodo: z.number(),
      ImporteNetoAlFinalDelPeriodo: z.object({
        Costo: z.number(),
        AjustePorRevaluacionesOReExpresiones: z.number(),
      }),
      GastoPeriodoPorDepreciacionOAmortizacion: z.object({
        PorCosto: z.number(),
        PorAjustePorRevaluacionesOReExpresiones: z.number(),
      }),
      GastoDelPeriodoPorDeterioro: z.number(),
      IngresosDelPeriodoPorRecuperacionDelDeterioro: z.number(),
      ValorActivosAdquiridosMedianteArrendamientoFinancieroOLeasing: z.number(),
      DesmantelamientoRestauracion: z.number(),
      MayorValorPorRevaluacionAcumuladoAlFinalDelPeriodo: z.number(),
    }),
    DatosFiscales: z.object({
      ValorTotalIncluyendoArrendamientoFinancieroOLeasingFinanciero: z.object({
        SaldoAlComienzoDelPeriodo: z.number(),
        IncrementosPorTransferenciasAdquisicionesYOtrosCambios: z.number(),
        DisminucionesPorTransferenciasYOtrosCambios: z.number(),
        SubtotalAlFinalPeriodo: z.number(),
        DepreciacionYAmortizacionAcumuladaAlFinalDelPeriodo: z.number(),
        TotalNetoAlFinalDelPeriodo: z.number(),
        GastoFiscalPorDepresiacionYAmortizacionDelPeriodo: z.number(),
      }),
      DatosInformativosValorActivosAdquiridosMedianteArrendamientoFinancieroOLeasingFinanciero:
        z.object({
          ValorTotalAlFinalDelPeriodo: z.number(),
          DepreciacionYAmortizacionAcumuladaAlFinalDelPeriodo: z.number(),
          ValorNetoAlFinalDelPeriodo: z.number(),
          GastoFiscalDepreciacionYAmortizacionDelPeriodo: z.number(),
        }),
    }),
  }),
});
