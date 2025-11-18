import { ResumenEsfGatewayAdapter } from "../../../src/infrastructure/output/persistence/gateway/ResumenEsfGatewayAdapter";
import { FormResumenEsferi } from "../../../src/domain/models/FormResumenEsferiModel";
import prisma from "../../../src/config/database";

jest.mock("../../../src/config/database", () => ({
    __esModule: true,
    default: {
        report: {
            findFirst: jest.fn(),
        },
        formresumenesferi: {
            findUnique: jest.fn(),
            create: jest.fn(),
            update: jest.fn(),
        },
        formesfpatrimonio: {
            findUnique: jest.fn(),
        },
        formrentaliquida: {
            findUnique: jest.fn(),
        },
    },
}));

describe("ResumenEsfGatewayAdapter", () => {
    let adapter: ResumenEsfGatewayAdapter;
    const mockReport = { repID: "rep1", stuID: "stu1", roomID: "room1", resID: "res1", esfID: "esf1", renID: "ren1" };
    const mockResumenEsf: FormResumenEsferi = {
        resID: "res1",
        resContent: { EstadoDeSituacionFinancieraPatrimonio: {}, EstadoDeResultadoIntegralImpuestosDeRenta: {} },
    };

    beforeEach(() => {
        adapter = new ResumenEsfGatewayAdapter();
        jest.clearAllMocks();
    });

    describe("getIDForm", () => {
        it("debe retornar el formulario de resumen esf cuando existe", async () => {
            (prisma.report.findFirst as jest.Mock).mockResolvedValue(mockReport);
            (prisma.formresumenesferi.findUnique as jest.Mock).mockResolvedValue(mockResumenEsf);

            const result = await adapter.getIDForm("stu1", "room1");

            expect(result).toEqual(mockResumenEsf);
            expect(prisma.report.findFirst).toHaveBeenCalledWith({
                where: { stuID: "stu1", roomID: "room1" }
            });
            expect(prisma.formresumenesferi.findUnique).toHaveBeenCalledWith({
                where: { resID: "res1" }
            });
        });

        it("debe retornar null cuando no existe el formulario", async () => {
            (prisma.report.findFirst as jest.Mock).mockResolvedValue(mockReport);
            (prisma.formresumenesferi.findUnique as jest.Mock).mockResolvedValue(null);

            const result = await adapter.getIDForm("stu1", "room1");

            expect(result).toBeNull();
        });

        it("debe manejar IDs vacíos correctamente", async () => {
            const reportWithoutResID = { ...mockReport, resID: undefined };
            (prisma.report.findFirst as jest.Mock).mockResolvedValue(reportWithoutResID);
            (prisma.formresumenesferi.findUnique as jest.Mock).mockResolvedValue(null);

            const result = await adapter.getIDForm("stu1", "room1");

            expect(result).toBeNull();
            expect(prisma.formresumenesferi.findUnique).toHaveBeenCalledWith({
                where: { resID: undefined }
            });
        });
    });

    describe("createForm", () => {
        it("debe crear un formulario de resumen esf exitosamente", async () => {
            const newFormData: FormResumenEsferi = {
                resContent: { 
                    EstadoDeSituacionFinancieraPatrimonio: { Activos: {} },
                    EstadoDeResultadoIntegralImpuestosDeRenta: { Ingresos: {} }
                },
            };
            (prisma.formresumenesferi.create as jest.Mock).mockResolvedValue(mockResumenEsf);

            const result = await adapter.createForm(newFormData);

            expect(result).toEqual(mockResumenEsf);
            expect(prisma.formresumenesferi.create).toHaveBeenCalledWith({
                data: { resContent: { ...newFormData.resContent } }
            });
        });

        it("debe crear un formulario con contenido vacío", async () => {
            const emptyForm: FormResumenEsferi = { resContent: {} };
            (prisma.formresumenesferi.create as jest.Mock).mockResolvedValue({ resID: "new1", resContent: {} });

            const result = await adapter.createForm(emptyForm);

            expect(result.resContent).toEqual({});
            expect(prisma.formresumenesferi.create).toHaveBeenCalled();
        });

        it("debe crear un formulario con datos completos", async () => {
            const fullForm: FormResumenEsferi = {
                resContent: {
                    EstadoDeSituacionFinancieraPatrimonio: { 
                        Activos: { TotalActivos: { ValorContable: 0, ValorFiscal: 0, Variacion: 0 } },
                        Pasivos: {},
                        Patrimonio: {}
                    },
                    EstadoDeResultadoIntegralImpuestosDeRenta: { Ingresos: {}, Costos: {}, Gastos: {} },
                    ResultadoDelEjercicio: {}
                },
            };
            (prisma.formresumenesferi.create as jest.Mock).mockResolvedValue(fullForm);

            const result = await adapter.createForm(fullForm);

            expect(result).toEqual(fullForm);
        });
    });

    describe("updateForm", () => {
        it("debe actualizar un formulario de resumen esf exitosamente", async () => {
            const updateData: FormResumenEsferi = { 
                resContent: { 
                    EstadoDeSituacionFinancieraPatrimonio: {},
                    EstadoDeResultadoIntegralImpuestosDeRenta: {}
                } 
            };
            (prisma.report.findFirst as jest.Mock).mockResolvedValue(mockReport);
            (prisma.formresumenesferi.update as jest.Mock).mockResolvedValue({ ...mockResumenEsf, ...updateData });

            const result = await adapter.updateForm("stu1", "room1", updateData);

            expect(result).toEqual({ ...mockResumenEsf, ...updateData });
            expect(prisma.formresumenesferi.update).toHaveBeenCalledWith({
                where: { resID: "res1" },
                data: { resContent: { ...updateData } }
            });
        });

        it("debe manejar actualización cuando no existe reporte", async () => {
            const updateData: FormResumenEsferi = { resContent: {} };
            (prisma.report.findFirst as jest.Mock).mockResolvedValue(null);
            (prisma.formresumenesferi.update as jest.Mock).mockRejectedValue(new Error("Record not found"));

            await expect(adapter.updateForm("stu1", "room1", updateData)).rejects.toThrow();
        });

        it("debe actualizar parcialmente el contenido", async () => {
            const partialUpdate: FormResumenEsferi = { 
                resContent: { 
                    EstadoDeSituacionFinancieraPatrimonio: { Activos: { TotalActivos: { ValorContable: 1000 } } }
                } 
            };
            (prisma.report.findFirst as jest.Mock).mockResolvedValue(mockReport);
            (prisma.formresumenesferi.update as jest.Mock).mockResolvedValue(partialUpdate);

            const result = await adapter.updateForm("stu1", "room1", partialUpdate);

            expect(result).toEqual(partialUpdate);
        });
    });

    describe("calculateReference", () => {
        it("debe calcular referencias del resumen esf cuando existen los datos", async () => {
            const mockEsfPatrimonio = {
                esfID: "esf1",
                esfContent: {
                    Activos: {
                        ActivosEquivalentesEfectivo: { Total: { ValorContable: 1000, ValorFiscal: 900 } },
                        Total: { ValorContable: 5000, ValorFiscal: 4800 }
                    },
                    Pasivos: {
                        Total: { ValorContable: 3000, ValorFiscal: 2900 }
                    },
                    PatrimonioContable: {
                        CapitalSocialReservas: { Total: { ValorContable: 1500 } }
                    },
                    TotalPatrimonio: { ValorContable: 2000, ValorFiscal: 1900 }
                }
            };

            const mockRentaLiquida = {
                renID: "ren1",
                renContent: {
                    Ingresos: {
                        IngresosNetosActividadIndustrialComercialYServicios: {
                            IngresosNetosActividadIndustrialComercialYServicios: { Total: { ValorContable: 10000, ValorFiscal: 9500 } }
                        },
                        TotalIngresos: { ValorContable: 15000, ValorFiscal: 14500 }
                    },
                    Costos: {
                        TotalCostos: { ValorContable: 5000, ValorFiscal: 4800 }
                    },
                    Gastos: {
                        TotalGastos: { ValorContable: 3000, ValorFiscal: 2900 }
                    }
                }
            };

            const mockResumenEsfWithContent: FormResumenEsferi = {
                resID: "res1",
                resContent: {
                    EstadoDeSituacionFinancieraPatrimonio: {
                        Activos: {
                            EfectivoYEquivalentesAlEfectivo: { ValorContable: 0, ValorFiscal: 0, Variacion: 0 },
                            InversionesEInstrumentosFinancierosDerivados: { ValorContable: 0, ValorFiscal: 0, Variacion: 0 },
                            CuentasPorCobrar: { ValorContable: 0, ValorFiscal: 0, Variacion: 0 },
                            Inventarios: { ValorContable: 0, ValorFiscal: 0, Variacion: 0 },
                            GastosPagadosPorAnticipado: { ValorContable: 0, ValorFiscal: 0, Variacion: 0 },
                            ActivosPorImpuestosCorrientes: { ValorContable: 0, ValorFiscal: 0, Variacion: 0 },
                            ActivosPorImpuestosDiferidos: { ValorContable: 0, ValorFiscal: 0, Variacion: 0 },
                            PropiedadesPlantaYEquipo: { ValorContable: 0, ValorFiscal: 0, Variacion: 0 },
                            ActivosIntangibles: { ValorContable: 0, ValorFiscal: 0, Variacion: 0 },
                            PropiedadesDeInversion: { ValorContable: 0, ValorFiscal: 0, Variacion: 0 },
                            ActivosNoCorrientesMantenidosParaLaVentaDistribuirALosPropietarios: { ValorContable: 0, ValorFiscal: 0, Variacion: 0 },
                            ActivosBiologicos: { ValorContable: 0, ValorFiscal: 0, Variacion: 0 },
                            OtrosActivos: { ValorContable: 0, ValorFiscal: 0, Variacion: 0 },
                            TotalActivos: { ValorContable: 0, ValorFiscal: 0, Variacion: 0 }
                        },
                        Pasivos: {
                            ObligacionesFinancierasYCuentasPorPagar: { ValorContable: 0, ValorFiscal: 0, Variacion: 0 },
                            ArrendamientosPorPagar: { ValorContable: 0, ValorFiscal: 0, Variacion: 0 },
                            OtrosPasivosFinancieros: { ValorContable: 0, ValorFiscal: 0, Variacion: 0 },
                            ImpuestosGravamenesYTasasPorPagar: { ValorContable: 0, ValorFiscal: 0, Variacion: 0 },
                            PasivosPorImpuestosDiferidos: { ValorContable: 0, ValorFiscal: 0, Variacion: 0 },
                            PasivosPorBeneficiosALosEmpleados: { ValorContable: 0, ValorFiscal: 0, Variacion: 0 },
                            Provisiones: { ValorContable: 0, ValorFiscal: 0, Variacion: 0 },
                            PasivosPorIngresosDiferidos: { ValorContable: 0, ValorFiscal: 0, Variacion: 0 },
                            OtrosPasivos: { ValorContable: 0, ValorFiscal: 0, Variacion: 0 },
                            TotalPasivos: { ValorContable: 0, ValorFiscal: 0, Variacion: 0 }
                        },
                        Patrimonio: {
                            CapitalSocialYReservas: { ValorContable: 0 },
                            ResultadosDelEjercicio: { ValorContable: 0 },
                            ResultadosAcumulados: { ValorContable: 0 },
                            GananciasPerdidasAcumuladasPorLaAdopcionPorPrimera: { ValorContable: 0 },
                            OtroResultadoIntegralAcumulado: { ValorContable: 0 },
                            TotalPatrimonio: { ValorContable: 0, ValorFiscal: 0 }
                        }
                    },
                    EstadoDeResultadoIntegralImpuestosDeRenta: {
                        Ingresos: {
                            IngresosNetosActividadIndustrialComercialYServicios: { ValorContable: 0, ValorFiscal: 0, Variacion: 0 },
                            DevolucionesRebajasYDescuentos: { ValorContable: 0, ValorFiscal: 0, Variacion: 0 },
                            IngresosFinancieros: { ValorContable: 0, ValorFiscal: 0, Variacion: 0 },
                            GananciasPorInversionesEnSubsidiariasAsociadasYONegociosConjuntos: { ValorContable: 0, ValorFiscal: 0, Variacion: 0 },
                            IngresosPorMedicionesAValorRazonable: { ValorContable: 0, ValorFiscal: 0, Variacion: 0 },
                            UtilidadEnLaVentaOEnajenacionDeActivosBienesPoseidosPorMenosDeDoAnios: { ValorContable: 0, ValorFiscal: 0, Variacion: 0 },
                            UtilidadPorVentaOEnajenacionDeActivosBienesPoseidosPorDosAniosOMasGananciaOcasional: { ValorContable: 0, ValorFiscal: 0, Variacion: 0 },
                            IngresosPorReversionDeDeterioroDelValor: { ValorContable: 0, ValorFiscal: 0, Variacion: 0 },
                            IngresosPorReversionDeProvisionesPasivosDeMontoOFechaInciertos: { ValorContable: 0, ValorFiscal: 0, Variacion: 0 },
                            IngresosPorReversionDePasivosPorBeneficiosALosEmpleados: { ValorContable: 0, ValorFiscal: 0, Variacion: 0 },
                            OtrosIngresos: { ValorContable: 0, ValorFiscal: 0, Variacion: 0 },
                            GananciasNetasEnOperacionesDiscontinuadas: { ValorContable: 0, ValorFiscal: 0, Variacion: 0 },
                            AjustesFiscales: { ValorContable: 0, ValorFiscal: 0, Variacion: 0 },
                            IngresosNoGravados: { ValorContable: 0, ValorFiscal: 0, Variacion: 0 },
                            TotalIngresos: { ValorContable: 0, ValorFiscal: 0, Variacion: 0 }
                        },
                        Costos: {
                            MateriasPrimasReventaDeBienesTerminadosYServicios: { ValorContable: 0, ValorFiscal: 0, Variacion: 0 },
                            ManoDeObra: { ValorContable: 0, ValorFiscal: 0, Variacion: 0 },
                            DepreciacionesAmortizacionesYDeterioros: { ValorContable: 0, ValorFiscal: 0, Variacion: 0 },
                            OtrosCostos: { ValorContable: 0, ValorFiscal: 0, Variacion: 0 },
                            MenorCostoAjusteDePreciosDeTransferencia: { ValorContable: 0, ValorFiscal: 0, Variacion: 0 },
                            TotalCostos: { ValorContable: 0, ValorFiscal: 0, Variacion: 0 }
                        },
                        Gastos: {
                            DeAdministracion: {
                                ManoDeObra: { ValorContable: 0, ValorFiscal: 0, Variacion: 0 },
                                OtrosGastosDeAdministracion: { ValorContable: 0, ValorFiscal: 0, Variacion: 0 },
                                DepreciacionesAmortizacionesYDeterioros: { ValorContable: 0, ValorFiscal: 0, Variacion: 0 },
                                TotalGastosDeAdministracion: { ValorContable: 0, ValorFiscal: 0, Variacion: 0 }
                            },
                            DeDistribucionYVentas: {
                                ManoDeObra: { ValorContable: 0, ValorFiscal: 0, Variacion: 0 },
                                OtrosGastosDeDistribucionYVentas: { ValorContable: 0, ValorFiscal: 0, Variacion: 0 },
                                DepreciacionesAmortizacionesYDeterioros: { ValorContable: 0, ValorFiscal: 0, Variacion: 0 },
                                TotalGastosDeDistribucionYVentas: { ValorContable: 0, ValorFiscal: 0, Variacion: 0 }
                            },
                            GastosFinancieros: { ValorContable: 0, ValorFiscal: 0, Variacion: 0 },
                            PerdidasPorInversionesEnSubsidiariasAsociadasYONegociosConjuntos: { ValorContable: 0, ValorFiscal: 0, Variacion: 0 },
                            PerdidasPorMedicionesAValorRazonable: { ValorContable: 0, ValorFiscal: 0, Variacion: 0 },
                            PerdidaEnLaVentaOEnajenacionDeActivosFijos: { ValorContable: 0, ValorFiscal: 0, Variacion: 0 },
                            GastosPorProvisionesPasivosDeMontoOFechaInciertos: { ValorContable: 0, ValorFiscal: 0, Variacion: 0 },
                            OtrosGastos: { ValorContable: 0, ValorFiscal: 0, Variacion: 0 },
                            PerdidasNetasEnOperacionesDiscontinuadas: { ValorContable: 0, ValorFiscal: 0, Variacion: 0 },
                            MenorGastoODeduccionAjustePreciosTransferencia: { ValorContable: 0, ValorFiscal: 0, Variacion: 0 },
                            TotalGastos: { ValorContable: 0, ValorFiscal: 0, Variacion: 0 }
                        }
                    },
                    ResultadoDelEjercicio: { ValorContable: 0, ValorFiscal: 0, Variacion: 0 }
                }
            };

            (prisma.report.findFirst as jest.Mock).mockResolvedValue(mockReport);
            (prisma.formresumenesferi.findUnique as jest.Mock).mockResolvedValue(mockResumenEsfWithContent);
            (prisma.formesfpatrimonio.findUnique as jest.Mock).mockResolvedValue(mockEsfPatrimonio);
            (prisma.formrentaliquida.findUnique as jest.Mock).mockResolvedValue(mockRentaLiquida);

            const result = await adapter.calculateReference("stu1", "room1");

            expect(result).not.toBeNull();
            expect(prisma.formesfpatrimonio.findUnique).toHaveBeenCalledWith({ where: { esfID: "esf1" } });
            expect(prisma.formrentaliquida.findUnique).toHaveBeenCalledWith({ where: { renID: "ren1" } });
            
            // Verificar que se calcularon los valores correctamente
            const content = result?.resContent as any;
            expect(content.EstadoDeSituacionFinancieraPatrimonio.Activos.EfectivoYEquivalentesAlEfectivo.ValorContable).toBe(1000);
            expect(content.EstadoDeSituacionFinancieraPatrimonio.Activos.EfectivoYEquivalentesAlEfectivo.Variacion).toBe(100);
            expect(content.ResultadoDelEjercicio.ValorContable).toBe(7000); // 15000 - 5000 - 3000
        });

        it("debe retornar null cuando no existe el reporte", async () => {
            (prisma.report.findFirst as jest.Mock).mockResolvedValue(null);
            (prisma.formresumenesferi.findUnique as jest.Mock).mockResolvedValue(null);

            const result = await adapter.calculateReference("stu1", "room1");

            expect(result).toBeNull();
        });

        it("debe manejar contenido no válido correctamente", async () => {
            const invalidResumen = { resID: "res1", resContent: null };
            (prisma.report.findFirst as jest.Mock).mockResolvedValue(mockReport);
            (prisma.formresumenesferi.findUnique as jest.Mock).mockResolvedValue(invalidResumen);

            const result = await adapter.calculateReference("stu1", "room1");

            expect(result).toEqual(invalidResumen);
        });

        it("debe retornar el formulario sin cambios cuando el contenido no es un objeto válido", async () => {
            const stringContent = { resID: "res1", resContent: "invalid" };
            (prisma.report.findFirst as jest.Mock).mockResolvedValue(mockReport);
            (prisma.formresumenesferi.findUnique as jest.Mock).mockResolvedValue(stringContent);

            const result = await adapter.calculateReference("stu1", "room1");

            expect(result).toEqual(stringContent);
        });
    });
});
