import prisma from "../../../../config/database";
import { FormImpuestoDiferido } from "../../../../domain/models/FormImpuestoDiferidoModel";
import { FormsGatewayIntPort } from "../../../../application/output/FormsGatewayIntPort";

export class ImpuestoDiferidoGatewayAdapter implements FormsGatewayIntPort<FormImpuestoDiferido> {
 
    async getIDForm(stuID: string, roomID: string): Promise<FormImpuestoDiferido | null> {
        const report = await prisma.report.findFirst({
            where: { stuID: stuID, roomID: roomID }
        });
        const impuestoDiferido = await prisma.formimpuestodiferido.findUnique({
            where: { impID: report?.impID }
        });
        return impuestoDiferido;
    }

    async createForm(impuestoDiferido: FormImpuestoDiferido): Promise<FormImpuestoDiferido> {
        return prisma.formimpuestodiferido.create({
            data: {
                impContent: { ...impuestoDiferido.impContent },
            }
        });
    }

    async updateForm(stuID: string, roomID: string, impuestoDiferido: FormImpuestoDiferido): Promise<FormImpuestoDiferido> {
        const report = await prisma.report.findFirst({
            where: { stuID: stuID, roomID: roomID }
        });
        return prisma.formimpuestodiferido.update({
            where: { impID: report?.impID },
            data: {
                impContent: { ...impuestoDiferido },
            }
        });
    }

    private mapEsfToImpContentCaseOne(content: any, esfValueG: any, esfValueK: any) {
        content.BaseContable = ((esfValueG || 0) - (esfValueK || 0)) < 0 ? (esfValueG || 0) : 0;

        content.BaseFiscal = content.BaseContable > 0 ? (esfValueK || 0) : 0;
    }

    private mapEsfToImpContentCaseTwo(content: any, esfValueG: any, esfValueK: any) {
        content.BaseContable = ((esfValueG || 0) - (esfValueK || 0)) > 0 ? (esfValueG || 0) : 0;

        content.BaseFiscal = content.BaseContable > 0 ? (esfValueK || 0) : 0;
    }

    async calculateReference(stuID: string, roomID: string): Promise<FormImpuestoDiferido | null> {
        const report = await prisma.report.findFirst({
            where: { stuID: stuID, roomID: roomID }
        });
        const impuestoDiferido = await prisma.formimpuestodiferido.findUnique({
            where: { impID: report?.impID }
        });

        const esfPatrimonio = await prisma.formesfpatrimonio.findUnique({
            where: { esfID: report?.esfID }
        });

        const detalleRenglones = await prisma.formdetallerenglones.findUnique({
            where: { detID: report?.detID }
        });

        if (
            esfPatrimonio && detalleRenglones &&
            typeof esfPatrimonio?.esfContent === 'object' &&
            typeof detalleRenglones?.detContent === 'object' &&
            esfPatrimonio.esfContent !== null &&
            detalleRenglones.detContent !== null
        ){
            const esfContent = esfPatrimonio?.esfContent as any;
            const content = impuestoDiferido?.impContent as any;
            const detContent = detalleRenglones?.detContent as any;

            //Aactivo Diferido
            this.mapEsfToImpContentCaseOne(content?.ImpuestosDiferidosProvenientesDeDiferenciasTemporarias?.ActivoDiferidoDiferenciasTemporariasDeducibles?.EfectivoYEquivalentesAlEfectivo, esfContent?.Activos?.ActivosEquivalentesEfectivo?.Total?.ValorContable, esfContent?.Activos?.ActivosEquivalentesEfectivo?.Total?.ValorFiscal);

            this.mapEsfToImpContentCaseOne(content?.ImpuestosDiferidosProvenientesDeDiferenciasTemporarias?.ActivoDiferidoDiferenciasTemporariasDeducibles?.InversionesEInstrumentosDerivados, esfContent?.Activos?.InversionesInstrumentosFinancierosDerivadosVN?.Total?.ValorContable, esfContent?.Activos?.InversionesInstrumentosFinancierosDerivadosVN?.Total?.ValorFiscal);

            this.mapEsfToImpContentCaseOne(content?.ImpuestosDiferidosProvenientesDeDiferenciasTemporarias?.ActivoDiferidoDiferenciasTemporariasDeducibles?.CuentasPorCobrar, esfContent?.Activos?.CuentasComercialesCobrarOtrasPorCobrar?.Total?.ValorContable, esfContent?.Activos?.CuentasComercialesCobrarOtrasPorCobrar?.Total?.ValorFiscal);

            this.mapEsfToImpContentCaseOne(content?.ImpuestosDiferidosProvenientesDeDiferenciasTemporarias?.ActivoDiferidoDiferenciasTemporariasDeducibles?.Inventarios, esfContent?.Activos?.Inventarios?.Total?.ValorContable, esfContent?.Activos?.Inventarios?.Total?.ValorFiscal);

            this.mapEsfToImpContentCaseOne(content?.ImpuestosDiferidosProvenientesDeDiferenciasTemporarias?.ActivoDiferidoDiferenciasTemporariasDeducibles?.PropiedadesPlantaYEquipo, esfContent?.Activos?.PropiedadesPlantaEquipo?.Total?.ValorContable, esfContent?.Activos?.PropiedadesPlantaEquipo?.Total?.ValorFiscal);

            this.mapEsfToImpContentCaseOne(content?.ImpuestosDiferidosProvenientesDeDiferenciasTemporarias?.ActivoDiferidoDiferenciasTemporariasDeducibles?.ActivosIntangibles, esfContent?.Activos?.ActivosIntangibles?.Total?.ValorContable, esfContent?.Activos?.ActivosIntangibles?.Total?.ValorFiscal);

            this.mapEsfToImpContentCaseOne(content?.ImpuestosDiferidosProvenientesDeDiferenciasTemporarias?.ActivoDiferidoDiferenciasTemporariasDeducibles?.PropiedadesDeInversion, esfContent?.Activos?.PropiedadesInversion?.Total?.ValorContable, esfContent?.Activos?.PropiedadesInversion?.Total?.ValorFiscal);

            this.mapEsfToImpContentCaseOne(content?.ImpuestosDiferidosProvenientesDeDiferenciasTemporarias?.ActivoDiferidoDiferenciasTemporariasDeducibles?.ActivosBiologicos, esfContent?.Activos?.ActivosBiologicos?.Total?.ValorContable, esfContent?.Activos?.ActivosBiologicos?.Total?.ValorFiscal);

            this.mapEsfToImpContentCaseOne(content?.ImpuestosDiferidosProvenientesDeDiferenciasTemporarias?.ActivoDiferidoDiferenciasTemporariasDeducibles?.ActivosNoCorrientesMantenidosParaLaVentaEntregarAPropietarios, esfContent?.Activos?.ActivosNoCorrientes?.Total?.ValorContable, esfContent?.Activos?.ActivosNoCorrientes?.Total?.ValorFiscal);

            this.mapEsfToImpContentCaseTwo(content?.ImpuestosDiferidosProvenientesDeDiferenciasTemporarias?.ActivoDiferidoDiferenciasTemporariasDeducibles?.PasivosFinancierosYCuentasPorPagar, esfContent?.Pasivos?.ObligacionesFinancierasCuentasPorPagar?.Total?.ValorContable, esfContent?.Pasivos?.ObligacionesFinancierasCuentasPorPagar?.Total?.ValorFiscal);

            this.mapEsfToImpContentCaseTwo(content?.ImpuestosDiferidosProvenientesDeDiferenciasTemporarias?.ActivoDiferidoDiferenciasTemporariasDeducibles?.ImpuestosGravamenesYTasas, esfContent?.Pasivos?.ImpuestosGravamenesTasasPorPagar?.Total?.ValorContable, esfContent?.Pasivos?.ImpuestosGravamenesTasasPorPagar?.Total?.ValorFiscal);

            this.mapEsfToImpContentCaseOne(content?.ImpuestosDiferidosProvenientesDeDiferenciasTemporarias?.ActivoDiferidoDiferenciasTemporariasDeducibles?.BeneficiosAEmpleados, esfContent?.Pasivos?.PasivosBeneficiosEmpleados?.Total?.ValorContable, esfContent?.Pasivos?.PasivosBeneficiosEmpleados?.Total?.ValorFiscal);

            this.mapEsfToImpContentCaseTwo(content?.ImpuestosDiferidosProvenientesDeDiferenciasTemporarias?.ActivoDiferidoDiferenciasTemporariasDeducibles?.Provisiones, esfContent?.Pasivos?.Provisiones?.Total?.ValorContable, esfContent?.Pasivos?.Provisiones?.Total?.ValorFiscal);

            //Pasivo Diferido:

            this.mapEsfToImpContentCaseTwo(content?.ImpuestosDiferidosProvenientesDeDiferenciasTemporarias?.PasivoDiferidoDiferenciasTemporariasImponibles?.EfectivoYEquivalentesAlEfectivo, esfContent?.Activos?.ActivosEquivalentesEfectivo?.Total?.ValorContable, esfContent?.Activos?.ActivosEquivalentesEfectivo?.Total?.ValorFiscal);

            this.mapEsfToImpContentCaseTwo(content?.ImpuestosDiferidosProvenientesDeDiferenciasTemporarias?.PasivoDiferidoDiferenciasTemporariasImponibles?.InversionesEInstrumentosDerivados, esfContent?.Activos?.InversionesInstrumentosFinancierosDerivadosVN?.Total?.ValorContable, esfContent?.Activos?.InversionesInstrumentosFinancierosDerivadosVN?.Total?.ValorFiscal);

            this.mapEsfToImpContentCaseTwo(content?.ImpuestosDiferidosProvenientesDeDiferenciasTemporarias?.PasivoDiferidoDiferenciasTemporariasImponibles?.CuentasPorCobrar, esfContent?.Activos?.CuentasComercialesCobrarOtrasPorCobrar?.Total?.ValorContable, esfContent?.Activos?.CuentasComercialesCobrarOtrasPorCobrar?.Total?.ValorFiscal);

            this.mapEsfToImpContentCaseTwo(content?.ImpuestosDiferidosProvenientesDeDiferenciasTemporarias?.PasivoDiferidoDiferenciasTemporariasImponibles?.Inventarios, esfContent?.Activos?.Inventarios?.Total?.ValorContable, esfContent?.Activos?.Inventarios?.Total?.ValorFiscal);

            this.mapEsfToImpContentCaseTwo(content?.ImpuestosDiferidosProvenientesDeDiferenciasTemporarias?.PasivoDiferidoDiferenciasTemporariasImponibles?.PropiedadesPlantaYEquipo, esfContent?.Activos?.PropiedadesPlantaEquipo?.Total?.ValorContable, esfContent?.Activos?.PropiedadesPlantaEquipo?.Total?.ValorFiscal);

            this.mapEsfToImpContentCaseTwo(content?.ImpuestosDiferidosProvenientesDeDiferenciasTemporarias?.PasivoDiferidoDiferenciasTemporariasImponibles?.ActivosIntangibles, esfContent?.Activos?.ActivosIntangibles?.Total?.ValorContable, esfContent?.Activos?.ActivosIntangibles?.Total?.ValorFiscal);

            this.mapEsfToImpContentCaseTwo(content?.ImpuestosDiferidosProvenientesDeDiferenciasTemporarias?.PasivoDiferidoDiferenciasTemporariasImponibles?.PropiedadesDeInversion, esfContent?.Activos?.PropiedadesInversion?.Total?.ValorContable, esfContent?.Activos?.PropiedadesInversion?.Total?.ValorFiscal);

            this.mapEsfToImpContentCaseTwo(content?.ImpuestosDiferidosProvenientesDeDiferenciasTemporarias?.PasivoDiferidoDiferenciasTemporariasImponibles?.ActivosBiologicos, esfContent?.Activos?.ActivosBiologicos?.Total?.ValorContable, esfContent?.Activos?.ActivosBiologicos?.Total?.ValorFiscal);

            this.mapEsfToImpContentCaseTwo(content?.ImpuestosDiferidosProvenientesDeDiferenciasTemporarias?.PasivoDiferidoDiferenciasTemporariasImponibles?.ActivosNoCorrientesMantenidosParaLaVentaEntregarAPropietarios, esfContent?.Activos?.ActivosNoCorrientes?.Total?.ValorContable, esfContent?.Activos?.ActivosNoCorrientes?.Total?.ValorFiscal);

            this.mapEsfToImpContentCaseOne(content?.ImpuestosDiferidosProvenientesDeDiferenciasTemporarias?.PasivoDiferidoDiferenciasTemporariasImponibles?.PasivosFinancierosYCuentasPorPagar, esfContent?.Pasivos?.ObligacionesFinancierasCuentasPorPagar?.Total?.ValorContable, esfContent?.Pasivos?.ObligacionesFinancierasCuentasPorPagar?.Total?.ValorFiscal);

            this.mapEsfToImpContentCaseOne(content?.ImpuestosDiferidosProvenientesDeDiferenciasTemporarias?.PasivoDiferidoDiferenciasTemporariasImponibles?.ImpuestosGravamenesYTasas, esfContent?.Pasivos?.ImpuestosGravamenesTasasPorPagar?.Total?.ValorContable, esfContent?.Pasivos?.ImpuestosGravamenesTasasPorPagar?.Total?.ValorFiscal);

            this.mapEsfToImpContentCaseTwo(content?.ImpuestosDiferidosProvenientesDeDiferenciasTemporarias?.PasivoDiferidoDiferenciasTemporariasImponibles?.BeneficiosAEmpleados, esfContent?.Pasivos?.PasivosBeneficiosEmpleados?.Total?.ValorContable, esfContent?.Pasivos?.PasivosBeneficiosEmpleados?.Total?.ValorFiscal);

            this.mapEsfToImpContentCaseOne(content?.ImpuestosDiferidosProvenientesDeDiferenciasTemporarias?.PasivoDiferidoDiferenciasTemporariasImponibles?.Provisiones, esfContent?.Pasivos?.Provisiones?.Total?.ValorContable, esfContent?.Pasivos?.Provisiones?.Total?.ValorFiscal);

            content.ActivosPorCreditosTributariosSaldosAfavorEImpuestosPagadosEnElEsterior.SaldosAFavor.Saldo31VigenciaActual = detContent?.Renglon113?.TotalSaldosFiscalesADiciembre31 || 0;

            content.ActivosPorCreditosTributariosSaldosAfavorEImpuestosPagadosEnElEsterior.SaldosAFavor.Saldo31VigenciaAnterior = detContent?.Renglon102MenosSaldoAFavorRentaSinSolicitudDeDevolucionNiCompensacion?.TotalesSaldosFiscalesADiciembre31 || 0;

            content.DetalleCompensacionPerdidasFiscales.AñoActual.PerdidaFiscalGeneradaEnElPeriodo = detContent?.Renglon73?.TotalPerdidaLiquidaDelEjercicioSaldosFiscalesADiciembre31 || 0;

            content.DetalleCompensacionPerdidasFiscales.AñoActual.PerdidaFiscalCompensadaEnElPeriodo = detContent?.Renglon74?.CompenPerFisc?.SaldosFiscalesADiciembre31Parciales || 0;

            content.DetalleDeLaCompensacionPorExcesoDeRentaPresuntiva.AñoActual.ValorGeneradoEnElPeriodo = ((detContent?.Renglon76?.SaldosFiscalesADiciembre31Parciales || 0) > (detContent?.Renglon75?.TotalRentaLiquidaSaldosFiscalesADiciembre31 || 0) ? ((detContent?.Renglon76?.SaldosFiscalesADiciembre31Parciales || 0) - (detContent?.Renglon75?.TotalRentaLiquidaSaldosFiscalesADiciembre31 || 0)) : 0);
        }

        return impuestoDiferido;
    }
}