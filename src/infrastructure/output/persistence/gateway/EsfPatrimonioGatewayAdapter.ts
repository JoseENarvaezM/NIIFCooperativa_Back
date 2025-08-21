import prisma from "../../../../config/database";
import { FormEsfPatrimonio } from "../../../../domain/models/FormEsfPatrimonioModel";
import { FormsGatewayIntPort } from "../../../../application/output/FormsGatewayIntPort";

export class EsfPatrimonioGatewayAdapter implements FormsGatewayIntPort<FormEsfPatrimonio> {

    async getIDForm(stuID: string, roomID: string): Promise<FormEsfPatrimonio | null> {
        const report = await prisma.report.findFirst({
            where: { stuID: stuID, roomID: roomID }
        });
        const esfPatrimonio = await prisma.formesfpatrimonio.findUnique({
            where: { esfID: report?.esfID }
        });
        return esfPatrimonio;
    }

    async createForm(esfPatrimonio: FormEsfPatrimonio): Promise<FormEsfPatrimonio> {
        return prisma.formesfpatrimonio.create({
            data: {
                esfContent: { ...esfPatrimonio.esfContent },
            }
        });
    }

    async updateForm(stuID: string, roomID: string, esfPatrimonio: FormEsfPatrimonio): Promise<FormEsfPatrimonio> {
        const report = await prisma.report.findFirst({
            where: { stuID: stuID, roomID: roomID }
        });
        return prisma.formesfpatrimonio.update({
            where: { esfID: report?.esfID },
            data: {
                esfContent: { ...esfPatrimonio },
            }
        });
    }
    async calculateReference(stuID: string, roomID: string): Promise<FormEsfPatrimonio | null> {
        const report = await prisma.report.findFirst({
            where: { stuID: stuID, roomID: roomID }
        });
        const esfPatrimonio = await prisma.formesfpatrimonio.findUnique({
            where: { esfID: report?.esfID }
        });
        const detalleRenglones = await prisma.formdetallerenglones.findUnique({
            where: { detID: report?.detID }
        });

        if (
            detalleRenglones &&
            typeof detalleRenglones.detContent === 'object' &&
            detalleRenglones.detContent !== null 
            
        ) {
            const detContent = detalleRenglones?.detContent as any;
            const content = esfPatrimonio?.esfContent as any;

            // ACtivos - Activos Equivalentes Al Efectivo - Efectivo
            content.Activos.ActivosEquivalentesEfectivo.Efectivo.ValorContable = (detContent?.Renglon36?.TotalEfectivoYEquivalentesDeEfectivoSaldosContablesADiciembre31 || 0) - (detContent?.Renglon36?.["1140CertificadoDeDepositoATermino"]?.SaldosContablesADiciembre31Parciales || 0);

            content.Activos.ActivosEquivalentesEfectivo.Efectivo.MenorValorFiscal = (detContent?.Renglon36?.["1105CajaGeneral"]?.AjustesParaLlegarASaldosFiscales3 || 0) + (detContent?.Renglon36?.["1110Bancos"]?.AjustesParaLlegarASaldosFiscales3 || 0) + (detContent?.Renglon36?.["1115RemesasEnTransito"]?.AjustesParaLlegarASaldosFiscales3 || 0) + (detContent?.Renglon36?.["1120CuentasDeAhorro"]?.AjustesParaLlegarASaldosFiscales3 || 0);

            content.Activos.ActivosEquivalentesEfectivo.Efectivo.MayorValorFiscal = (detContent?.Renglon36?.["1105CajaGeneral"]?.AjustesParaLlegarASaldosFiscales1 || 0) + (detContent?.Renglon36?.["1110Bancos"]?.AjustesParaLlegarASaldosFiscales1 || 0) + (detContent?.Renglon36?.["1115RemesasEnTransito"]?.AjustesParaLlegarASaldosFiscales1 || 0) + (detContent?.Renglon36?.["1120CuentasDeAhorro"]?.AjustesParaLlegarASaldosFiscales1 || 0);

            // ACtivos - Activos Equivalentes Al Efectivo - Equivalentes De Efectivo
            content.Activos.ActivosEquivalentesEfectivo.EquivalentesEfectivo.ValorContable = (detContent?.Renglon36?.["1140CertificadoDeDepositoATermino"]?.SaldosContablesADiciembre31Parciales || 0);

            content.Activos.ActivosEquivalentesEfectivo.EquivalentesEfectivo.MenorValorFiscal = (detContent?.Renglon36?.["1140CertificadoDeDepositoATermino"]?.AjustesParaLlegarASaldosFiscales3 || 0);

            content.Activos.ActivosEquivalentesEfectivo.EquivalentesEfectivo.MayorValorFiscal = (detContent?.Renglon36?.["1140CertificadoDeDepositoATermino"]?.AjustesParaLlegarASaldosFiscales1 || 0);

            // Activos - Inversiones Instrumentos Financieros Derivados - Inversiones Instrumentos Financieros Derivados - Derechos Recompra Inversiones
            
            content.Activos.InversionesInstrumentosFinancierosDerivadosVN.InversionesInstrumentosFinancierosDerivados.DerechosRecompraInversiones.ValorContable = (detContent?.Renglon37?.["1216DerechosDeRecompraDeInversiones"]?.MedidasAlCosto?.ValorDeAdquisicion?.SaldosContablesADiciembre31Parciales || 0);

            content.Activos.InversionesInstrumentosFinancierosDerivadosVN.InversionesInstrumentosFinancierosDerivados.DerechosRecompraInversiones.MenorValorFiscal = (detContent?.Renglon37?.["1216DerechosDeRecompraDeInversiones"]?.MedidasAlCosto?.ValorDeAdquisicion?.AjustesParaLlegarASaldosFiscales3 || 0);

            content.Activos.InversionesInstrumentosFinancierosDerivadosVN.InversionesInstrumentosFinancierosDerivados.DerechosRecompraInversiones.MayorValorFiscal = (detContent?.Renglon37?.["1216DerechosDeRecompraDeInversiones"]?.MedidasAlCosto?.ValorDeAdquisicion?.AjustesParaLlegarASaldosFiscales1 || 0);

            // Activos - Inversiones Instrumentos Financieros Derivados - Inversiones Instrumentos Financieros Derivados - Valor razonable con cambios en resultados

            content.Activos.InversionesInstrumentosFinancierosDerivadosVN.InversionesInstrumentosFinancierosDerivados.InversionesSubsidiariasAsociadasNegociosConjuntos.ValorRazonableCambiosResultados.ValorContable = (detContent?.Renglon37?.["1205InversionesEnAsociadasYSubsidiariasAccionesYAportesEnSociedades"]?.MedidasAlValorRazonableConCambiosEnResultados?.ValorDeAdquisicion?.SaldosContablesADiciembre31Parciales || 0) + (detContent?.Renglon37?.["1205InversionesEnAsociadasYSubsidiariasAccionesYAportesEnSociedades"]?.MedidasAlValorRazonableConCambiosEnResultados?.EfectosPorMedicionesAlValorDeMercado?.SaldosContablesADiciembre31Parciales || 0);

            content.Activos.InversionesInstrumentosFinancierosDerivadosVN.InversionesInstrumentosFinancierosDerivados.InversionesSubsidiariasAsociadasNegociosConjuntos.ValorRazonableCambiosResultados.MenorValorFiscal = (detContent?.Renglon37?.["1205InversionesEnAsociadasYSubsidiariasAccionesYAportesEnSociedades"]?.MedidasAlValorRazonableConCambiosEnResultados?.ValorDeAdquisicion?.AjustesParaLlegarASaldosFiscales3 || 0) + (detContent?.Renglon37?.["1205InversionesEnAsociadasYSubsidiariasAccionesYAportesEnSociedades"]?.MedidasAlValorRazonableConCambiosEnResultados?.EfectosPorMedicionesAlValorDeMercado?.AjustesParaLlegarASaldosFiscales3 || 0);

            content.Activos.InversionesInstrumentosFinancierosDerivadosVN.InversionesInstrumentosFinancierosDerivados.InversionesSubsidiariasAsociadasNegociosConjuntos.ValorRazonableCambiosResultados.MayorValorFiscal = (detContent?.Renglon37?.["1205InversionesEnAsociadasYSubsidiariasAccionesYAportesEnSociedades"]?.MedidasAlValorRazonableConCambiosEnResultados?.ValorDeAdquisicion?.AjustesParaLlegarASaldosFiscales1 || 0) + (detContent?.Renglon37?.["1205InversionesEnAsociadasYSubsidiariasAccionesYAportesEnSociedades"]?.MedidasAlValorRazonableConCambiosEnResultados?.EfectosPorMedicionesAlValorDeMercado?.AjustesParaLlegarASaldosFiscales1 || 0);

            // Activos - Inversiones Instrumentos Financieros Derivados - Inversiones Instrumentos Financieros Derivados - Valor razonable con cambios en el ORI

            content.Activos.InversionesInstrumentosFinancierosDerivadosVN.InversionesInstrumentosFinancierosDerivados.InversionesSubsidiariasAsociadasNegociosConjuntos.ValorRazonableCambiosORI.ValorContable = (detContent?.Renglon37?.["1205InversionesEnAsociadasYSubsidiariasAccionesYAportesEnSociedades"]?.MedidasAlValorRazonableConCambiosEnElORI?.ValorDeAdquisicion?.SaldosContablesADiciembre31Parciales || 0) + (detContent?.Renglon37?.["1205InversionesEnAsociadasYSubsidiariasAccionesYAportesEnSociedades"]?.MedidasAlValorRazonableConCambiosEnElORI?.EfectosPorMedicionesAlValorDeMercado?.SaldosContablesADiciembre31Parciales || 0);

            content.Activos.InversionesInstrumentosFinancierosDerivadosVN.InversionesInstrumentosFinancierosDerivados.InversionesSubsidiariasAsociadasNegociosConjuntos.ValorRazonableCambiosORI.MenorValorFiscal = (detContent?.Renglon37?.["1205InversionesEnAsociadasYSubsidiariasAccionesYAportesEnSociedades"]?.MedidasAlValorRazonableConCambiosEnElORI?.ValorDeAdquisicion?.AjustesParaLlegarASaldosFiscales3 || 0) + (detContent?.Renglon37?.["1205InversionesEnAsociadasYSubsidiariasAccionesYAportesEnSociedades"]?.MedidasAlValorRazonableConCambiosEnElORI?.EfectosPorMedicionesAlValorDeMercado?.AjustesParaLlegarASaldosFiscales3 || 0);

            content.Activos.InversionesInstrumentosFinancierosDerivadosVN.InversionesInstrumentosFinancierosDerivados.InversionesSubsidiariasAsociadasNegociosConjuntos.ValorRazonableCambiosORI.MayorValorFiscal = (detContent?.Renglon37?.["1205InversionesEnAsociadasYSubsidiariasAccionesYAportesEnSociedades"]?.MedidasAlValorRazonableConCambiosEnElORI?.ValorDeAdquisicion?.AjustesParaLlegarASaldosFiscales1 || 0) + (detContent?.Renglon37?.["1205InversionesEnAsociadasYSubsidiariasAccionesYAportesEnSociedades"]?.MedidasAlValorRazonableConCambiosEnElORI?.EfectosPorMedicionesAlValorDeMercado?.AjustesParaLlegarASaldosFiscales1 || 0);

            // Activos - Inversiones Instrumentos Financieros Derivados - Inversiones Instrumentos Financieros Derivados - Metodo de la participacion

            content.Activos.InversionesInstrumentosFinancierosDerivadosVN.InversionesInstrumentosFinancierosDerivados.InversionesSubsidiariasAsociadasNegociosConjuntos.MetodoParticipacion.ValorContable = (detContent?.Renglon37?.["1205InversionesEnAsociadasYSubsidiariasAccionesYAportesEnSociedades"]?.MedidasConMetodoDeParticipacion?.ValorDeAdquisicion?.SaldosContablesADiciembre31Parciales || 0) + (detContent?.Renglon37?.["1205InversionesEnAsociadasYSubsidiariasAccionesYAportesEnSociedades"]?.MedidasConMetodoDeParticipacion?.EfectosDeAplicacionDelMetodoDeParticipacion?.SaldosContablesADiciembre31Parciales || 0);

            content.Activos.InversionesInstrumentosFinancierosDerivadosVN.InversionesInstrumentosFinancierosDerivados.InversionesSubsidiariasAsociadasNegociosConjuntos.MetodoParticipacion.MenorValorFiscal = (detContent?.Renglon37?.["1205InversionesEnAsociadasYSubsidiariasAccionesYAportesEnSociedades"]?.MedidasConMetodoDeParticipacion?.ValorDeAdquisicion?.AjustesParaLlegarASaldosFiscales3 || 0) + (detContent?.Renglon37?.["1205InversionesEnAsociadasYSubsidiariasAccionesYAportesEnSociedades"]?.MedidasConMetodoDeParticipacion?.EfectosDeAplicacionDelMetodoDeParticipacion?.AjustesParaLlegarASaldosFiscales3 || 0);

            content.Activos.InversionesInstrumentosFinancierosDerivadosVN.InversionesInstrumentosFinancierosDerivados.InversionesSubsidiariasAsociadasNegociosConjuntos.MetodoParticipacion.MayorValorFiscal = (detContent?.Renglon37?.["1205InversionesEnAsociadasYSubsidiariasAccionesYAportesEnSociedades"]?.MedidasConMetodoDeParticipacion?.ValorDeAdquisicion?.AjustesParaLlegarASaldosFiscales1 || 0) + (detContent?.Renglon37?.["1205InversionesEnAsociadasYSubsidiariasAccionesYAportesEnSociedades"]?.MedidasConMetodoDeParticipacion?.EfectosDeAplicacionDelMetodoDeParticipacion?.AjustesParaLlegarASaldosFiscales1 || 0);

            // Activos - Inversiones Instrumentos Financieros Derivados - Inversiones Instrumentos Financieros Derivados - Al Costo

            content.Activos.InversionesInstrumentosFinancierosDerivadosVN.InversionesInstrumentosFinancierosDerivados.InversionesSubsidiariasAsociadasNegociosConjuntos.AlCosto.ValorContable = (detContent?.Renglon37?.["1205InversionesEnAsociadasYSubsidiariasAccionesYAportesEnSociedades"]?.MedidasConMetodoDeParticipacion?.ValorDeAdquisicion?.SaldosContablesADiciembre31Parciales || 0);

            content.Activos.InversionesInstrumentosFinancierosDerivadosVN.InversionesInstrumentosFinancierosDerivados.InversionesSubsidiariasAsociadasNegociosConjuntos.AlCosto.MenorValorFiscal = (detContent?.Renglon37?.["1205InversionesEnAsociadasYSubsidiariasAccionesYAportesEnSociedades"]?.MedidasConMetodoDeParticipacion?.ValorDeAdquisicion?.AjustesParaLlegarASaldosFiscales3 || 0);

            content.Activos.InversionesInstrumentosFinancierosDerivadosVN.InversionesInstrumentosFinancierosDerivados.InversionesSubsidiariasAsociadasNegociosConjuntos.AlCosto.MayorValorFiscal = (detContent?.Renglon37?.["1205InversionesEnAsociadasYSubsidiariasAccionesYAportesEnSociedades"]?.MedidasConMetodoDeParticipacion?.ValorDeAdquisicion?.AjustesParaLlegarASaldosFiscales1 || 0);

            // Activos - Inversiones Instrumentos Financieros Derivados - Inversiones Instrumentos Financieros Derivados - Instrumentos de deuda o patrimonio al costo

            content.Activos.InversionesInstrumentosFinancierosDerivadosVN.InversionesInstrumentosFinancierosDerivados.InstrumentosDeudaPatrimonioCosto.ValorContable = (detContent?.Renglon37?.["1210BonosYOtrosInstrumentosDeDeudaOPatrimonio"]?.MedidasAlCosto?.ValorDeAdquisicion?.SaldosContablesADiciembre31Parciales || 0);

            content.Activos.InversionesInstrumentosFinancierosDerivadosVN.InversionesInstrumentosFinancierosDerivados.InstrumentosDeudaPatrimonioCosto.MenorValorFiscal = (detContent?.Renglon37?.["1210BonosYOtrosInstrumentosDeDeudaOPatrimonio"]?.MedidasAlCosto?.ValorDeAdquisicion?.AjustesParaLlegarASaldosFiscales3 || 0);

            content.Activos.InversionesInstrumentosFinancierosDerivadosVN.InversionesInstrumentosFinancierosDerivados.InstrumentosDeudaPatrimonioCosto.MayorValorFiscal = (detContent?.Renglon37?.["1210BonosYOtrosInstrumentosDeDeudaOPatrimonio"]?.MedidasAlCosto?.ValorDeAdquisicion?.AjustesParaLlegarASaldosFiscales1 || 0);

            // Activos - Inversiones Instrumentos Financieros Derivados - Inversiones Instrumentos Financieros Derivados - InstrumentosDeudaPatrimonioValorRazonableResultados

            content.Activos.InversionesInstrumentosFinancierosDerivadosVN.InversionesInstrumentosFinancierosDerivados.InstrumentosDeudaPatrimonioValorRazonableResultados.ValorContable = (detContent?.Renglon37?.["1210BonosYOtrosInstrumentosDeDeudaOPatrimonio"]?.MedidasAlValorRazonableConCambiosEnResultados?.ValorDeAdquisicion?.SaldosContablesADiciembre31Parciales || 0) + (detContent?.Renglon37?.["1210BonosYOtrosInstrumentosDeDeudaOPatrimonio"]?.MedidasAlValorRazonableConCambiosEnResultados?.EfectosPorMedicionesAlValorDeMercado?.SaldosContablesADiciembre31Parciales || 0);

            content.Activos.InversionesInstrumentosFinancierosDerivadosVN.InversionesInstrumentosFinancierosDerivados.InstrumentosDeudaPatrimonioValorRazonableResultados.MenorValorFiscal = (detContent?.Renglon37?.["1210BonosYOtrosInstrumentosDeDeudaOPatrimonio"]?.MedidasAlValorRazonableConCambiosEnResultados?.ValorDeAdquisicion?.AjustesParaLlegarASaldosFiscales3 || 0) + (detContent?.Renglon37?.["1210BonosYOtrosInstrumentosDeDeudaOPatrimonio"]?.MedidasAlValorRazonableConCambiosEnResultados?.EfectosPorMedicionesAlValorDeMercado?.AjustesParaLlegarASaldosFiscales3 || 0);

            content.Activos.InversionesInstrumentosFinancierosDerivadosVN.InversionesInstrumentosFinancierosDerivados.InstrumentosDeudaPatrimonioValorRazonableResultados.MayorValorFiscal = (detContent?.Renglon37?.["1210BonosYOtrosInstrumentosDeDeudaOPatrimonio"]?.MedidasAlValorRazonableConCambiosEnResultados?.ValorDeAdquisicion?.AjustesParaLlegarASaldosFiscales1 || 0) + (detContent?.Renglon37?.["1210BonosYOtrosInstrumentosDeDeudaOPatrimonio"]?.MedidasAlValorRazonableConCambiosEnResultados?.EfectosPorMedicionesAlValorDeMercado?.AjustesParaLlegarASaldosFiscales1 || 0);

            // Activos - Inversiones Instrumentos Financieros Derivados - Inversiones Instrumentos Financieros Derivados - InstrumentosDeudaPatrimonioValorRazonableORI

            content.Activos.InversionesInstrumentosFinancierosDerivadosVN.InversionesInstrumentosFinancierosDerivados.InstrumentosDeudaPatrimonioValorRazonableORI.ValorContable = (detContent?.Renglon37?.["1210BonosYOtrosInstrumentosDeDeudaOPatrimonio"]?.MedidasAlValorRazonableConCambiosEnElORI?.ValorDeAdquisicion?.SaldosContablesADiciembre31Parciales || 0) + (detContent?.Renglon37?.["1210BonosYOtrosInstrumentosDeDeudaOPatrimonio"]?.MedidasAlValorRazonableConCambiosEnElORI?.EfectosPorMedicionesAlValorDeMercado?.SaldosContablesADiciembre31Parciales || 0);

            content.Activos.InversionesInstrumentosFinancierosDerivadosVN.InversionesInstrumentosFinancierosDerivados.InstrumentosDeudaPatrimonioValorRazonableORI.MenorValorFiscal = (detContent?.Renglon37?.["1210BonosYOtrosInstrumentosDeDeudaOPatrimonio"]?.MedidasAlValorRazonableConCambiosEnElORI?.ValorDeAdquisicion?.AjustesParaLlegarASaldosFiscales3 || 0) + (detContent?.Renglon37?.["1210BonosYOtrosInstrumentosDeDeudaOPatrimonio"]?.MedidasAlValorRazonableConCambiosEnElORI?.EfectosPorMedicionesAlValorDeMercado?.AjustesParaLlegarASaldosFiscales3 || 0);

            content.Activos.InversionesInstrumentosFinancierosDerivadosVN.InversionesInstrumentosFinancierosDerivados.InstrumentosDeudaPatrimonioValorRazonableORI.MayorValorFiscal = (detContent?.Renglon37?.["1210BonosYOtrosInstrumentosDeDeudaOPatrimonio"]?.MedidasAlValorRazonableConCambiosEnElORI?.ValorDeAdquisicion?.AjustesParaLlegarASaldosFiscales1 || 0) + (detContent?.Renglon37?.["1210BonosYOtrosInstrumentosDeDeudaOPatrimonio"]?.MedidasAlValorRazonableConCambiosEnElORI?.EfectosPorMedicionesAlValorDeMercado?.AjustesParaLlegarASaldosFiscales1 || 0);

            // Activos - Inversiones Instrumentos Financieros Derivados - Inversiones Instrumentos Financieros Derivados - InstrumentosFinancierosDerivadosNegociación

            content.Activos.InversionesInstrumentosFinancierosDerivadosVN.InversionesInstrumentosFinancierosDerivados.InstrumentosFinancierosDerivadosNegociación.ValorContable = (detContent?.Renglon37?.["1215InstrumentosFinancierosDerivadosConFinesDeNegociacion"]?.MedidasAlCosto?.ValorDeAdquisicion?.SaldosContablesADiciembre31Parciales || 0);

            content.Activos.InversionesInstrumentosFinancierosDerivadosVN.InversionesInstrumentosFinancierosDerivados.InstrumentosFinancierosDerivadosNegociación.MenorValorFiscal = (detContent?.Renglon37?.["1215InstrumentosFinancierosDerivadosConFinesDeNegociacion"]?.MedidasAlCosto?.ValorDeAdquisicion?.AjustesParaLlegarASaldosFiscales3 || 0);

            content.Activos.InversionesInstrumentosFinancierosDerivadosVN.InversionesInstrumentosFinancierosDerivados.InstrumentosFinancierosDerivadosNegociación.MayorValorFiscal = (detContent?.Renglon37?.["1215InstrumentosFinancierosDerivadosConFinesDeNegociacion"]?.MedidasAlCosto?.ValorDeAdquisicion?.AjustesParaLlegarASaldosFiscales1 || 0);

            // Activos - Inversiones Instrumentos Financieros Derivados - Inversiones Instrumentos Financieros Derivados - InstrumentosFinancierosDerivadosCobertura

            content.Activos.InversionesInstrumentosFinancierosDerivadosVN.InversionesInstrumentosFinancierosDerivados.InstrumentosFinancierosDerivadosCobertura.ValorContable = (detContent?.Renglon37?.["1215InstrumentosFinancierosDerivadosConFinesDeNegociacion"]?.InstrumentosFinancierosDerivadosConFinesDeCobertura?.MedidasAlCosto?.ValorDeAdquisicion?.SaldosContablesADiciembre31Parciales || 0);

            content.Activos.InversionesInstrumentosFinancierosDerivadosVN.InversionesInstrumentosFinancierosDerivados.InstrumentosFinancierosDerivadosCobertura.MenorValorFiscal = (detContent?.Renglon37?.["1215InstrumentosFinancierosDerivadosConFinesDeNegociacion"]?.InstrumentosFinancierosDerivadosConFinesDeCobertura?.MedidasAlCosto?.ValorDeAdquisicion?.AjustesParaLlegarASaldosFiscales3 || 0);

            content.Activos.InversionesInstrumentosFinancierosDerivadosVN.InversionesInstrumentosFinancierosDerivados.InstrumentosFinancierosDerivadosCobertura.MayorValorFiscal = (detContent?.Renglon37?.["1215InstrumentosFinancierosDerivadosConFinesDeNegociacion"]?.InstrumentosFinancierosDerivadosConFinesDeCobertura?.MedidasAlCosto?.ValorDeAdquisicion?.AjustesParaLlegarASaldosFiscales1 || 0);

            // Activos - Inversiones Instrumentos Financieros Derivados - Inversiones Instrumentos Financieros Derivados - DerechosFiduciarios

            content.Activos.InversionesInstrumentosFinancierosDerivadosVN.InversionesInstrumentosFinancierosDerivados.DerechosFiduciarios.ValorContable = (detContent?.Renglon37?.["1215DerechosFiduciarios"]?.MedidasAlCosto?.ValorDeAdquisicion?.SaldosContablesADiciembre31Parciales || 0);

            content.Activos.InversionesInstrumentosFinancierosDerivadosVN.InversionesInstrumentosFinancierosDerivados.DerechosFiduciarios.MenorValorFiscal = (detContent?.Renglon37?.["1215DerechosFiduciarios"]?.MedidasAlCosto?.ValorDeAdquisicion?.AjustesParaLlegarASaldosFiscales3 || 0);

            content.Activos.InversionesInstrumentosFinancierosDerivadosVN.InversionesInstrumentosFinancierosDerivados.DerechosFiduciarios.MayorValorFiscal = (detContent?.Renglon37?.["1215DerechosFiduciarios"]?.MedidasAlCosto?.ValorDeAdquisicion?.AjustesParaLlegarASaldosFiscales1 || 0);

            // Activos - Inversiones Instrumentos Financieros Derivados - DeterioroAcumuladoInversiones - InversionesSubsidiariasAsociadasNegociosConjuntos - Metodo

            content.Activos.InversionesInstrumentosFinancierosDerivadosVN.DeterioroAcumuladoInversiones.InversionesSubsidiariasAsociadasNegociosConjuntos.Metodo.ValorContable = (detContent?.Renglon37?.["1205InversionesEnAsociadasYSubsidiariasAccionesYAportesEnSociedades"]?.MedidasConMetodoDeParticipacion?.DetrioroDelValor?.SaldosContablesADiciembre31Parciales || 0);

            content.Activos.InversionesInstrumentosFinancierosDerivadosVN.InversionesInstrumentosFinancierosDerivados.InversionesSubsidiariasAsociadasNegociosConjuntos.Metodo.MenorValorFiscal = (detContent?.Renglon37?.["1205InversionesEnAsociadasYSubsidiariasAccionesYAportesEnSociedades"]?.MedidasConMetodoDeParticipacion?.DetrioroDelValor?.AjustesParaLlegarASaldosFiscales3 || 0);

            content.Activos.InversionesInstrumentosFinancierosDerivadosVN.InversionesInstrumentosFinancierosDerivados.InversionesSubsidiariasAsociadasNegociosConjuntos.Metodo.MayorValorFiscal = (detContent?.Renglon37?.["1205InversionesEnAsociadasYSubsidiariasAccionesYAportesEnSociedades"]?.MedidasConMetodoDeParticipacion?.DetrioroDelValor?.AjustesParaLlegarASaldosFiscales1 || 0);

            // Activos - Inversiones Instrumentos Financieros Derivados - DeterioroAcumuladoInversiones - InversionesSubsidiariasAsociadasNegociosConjuntos - Costo

            content.Activos.InversionesInstrumentosFinancierosDerivadosVN.DeterioroAcumuladoInversiones.InversionesSubsidiariasAsociadasNegociosConjuntos.Costo.ValorContable = (detContent?.Renglon37?.["1205InversionesEnAsociadasYSubsidiariasAccionesYAportesEnSociedades"]?.MedidasAlCosto?.DetrioroDelValor?.SaldosContablesADiciembre31Parciales || 0);

            content.Activos.InversionesInstrumentosFinancierosDerivadosVN.InversionesInstrumentosFinancierosDerivados.InversionesSubsidiariasAsociadasNegociosConjuntos.Costo.MenorValorFiscal = (detContent?.Renglon37?.["1205InversionesEnAsociadasYSubsidiariasAccionesYAportesEnSociedades"]?.MedidasAlCosto?.DetrioroDelValor?.AjustesParaLlegarASaldosFiscales3 || 0);

            content.Activos.InversionesInstrumentosFinancierosDerivadosVN.InversionesInstrumentosFinancierosDerivados.InversionesSubsidiariasAsociadasNegociosConjuntos.Costo.MayorValorFiscal = (detContent?.Renglon37?.["1205InversionesEnAsociadasYSubsidiariasAccionesYAportesEnSociedades"]?.MedidasAlCosto?.DetrioroDelValor?.AjustesParaLlegarASaldosFiscales1 || 0);

            // Activos - Inversiones Instrumentos Financieros Derivados - DeterioroAcumuladoInversiones - InstrumentosDeudaPatrimoniooCosto

            content.Activos.InversionesInstrumentosFinancierosDerivadosVN.DeterioroAcumuladoInversiones.InstrumentosDeudaPatrimoniooCosto.ValorContable = (detContent?.Renglon37?.["1210BonosYOtrosInstrumentosDeDeudaOPatrimonio"]?.MedidasAlCosto?.DetrioroDelValor?.SaldosContablesADiciembre31Parciales || 0);

            content.Activos.InversionesInstrumentosFinancierosDerivadosVN.InversionesInstrumentosFinancierosDerivados.InstrumentosDeudaPatrimoniooCosto.MenorValorFiscal = (detContent?.Renglon37?.["1210BonosYOtrosInstrumentosDeDeudaOPatrimonio"]?.MedidasAlCosto?.DetrioroDelValor?.AjustesParaLlegarASaldosFiscales3 || 0);

            content.Activos.InversionesInstrumentosFinancierosDerivadosVN.InversionesInstrumentosFinancierosDerivados.InstrumentosDeudaPatrimoniooCosto.MayorValorFiscal = (detContent?.Renglon37?.["1210BonosYOtrosInstrumentosDeDeudaOPatrimonio"]?.MedidasAlCosto?.DetrioroDelValor?.AjustesParaLlegarASaldosFiscales1 || 0);

            // Activos - Inversiones Instrumentos Financieros Derivados - DeterioroAcumuladoInversiones - DerechosFiduciarios

            content.Activos.InversionesInstrumentosFinancierosDerivadosVN.DeterioroAcumuladoInversiones.DerechosFiduciarios.ValorContable = (detContent?.Renglon37?.["1210BonosYOtrosInstrumentosDeDeudaOPatrimonio"]?.MedidasAlCosto?.DetrioroDelValor?.SaldosContablesADiciembre31Parciales || 0);

            content.Activos.InversionesInstrumentosFinancierosDerivadosVN.InversionesInstrumentosFinancierosDerivados.DerechosFiduciarios.MenorValorFiscal = (detContent?.Renglon37?.["1210BonosYOtrosInstrumentosDeDeudaOPatrimonio"]?.MedidasAlCosto?.DetrioroDelValor?.AjustesParaLlegarASaldosFiscales3 || 0);

            content.Activos.InversionesInstrumentosFinancierosDerivadosVN.InversionesInstrumentosFinancierosDerivados.DerechosFiduciarios.MayorValorFiscal = (detContent?.Renglon37?.["1210BonosYOtrosInstrumentosDeDeudaOPatrimonio"]?.MedidasAlCosto?.DetrioroDelValor?.AjustesParaLlegarASaldosFiscales1 || 0);

            // Activos - Inversiones Instrumentos Financieros Derivados - DeterioroAcumuladoInversiones - Otros

            content.Activos.InversionesInstrumentosFinancierosDerivadosVN.DeterioroAcumuladoInversiones.Otros.ValorContable = (detContent?.Renglon37?.["1215InstrumentosFinancierosDerivadosConFinesDeNegociacion"]?.MedidasAlCosto?.DetrioroDelValor?.SaldosContablesADiciembre31Parciales || 0) - (detContent?.Renglon37?.["1215InstrumentosFinancierosDerivadosConFinesDeNegociacion"]?.InstrumentosFinancierosDerivadosConFinesDeCobertura?.DetrioroDelValor?.SaldosContablesADiciembre31Parciales || 0);

            content.Activos.InversionesInstrumentosFinancierosDerivadosVN.InversionesInstrumentosFinancierosDerivados.Otros.MenorValorFiscal = (detContent?.Renglon37?.["1215InstrumentosFinancierosDerivadosConFinesDeNegociacion"]?.MedidasAlCosto?.DetrioroDelValor?.AjustesParaLlegarASaldosFiscales3 || 0) - (detContent?.Renglon37?.["1215InstrumentosFinancierosDerivadosConFinesDeNegociacion"]?.InstrumentosFinancierosDerivadosConFinesDeCobertura?.DetrioroDelValor?.AjustesParaLlegarASaldosFiscales3 || 0);

            content.Activos.InversionesInstrumentosFinancierosDerivadosVN.InversionesInstrumentosFinancierosDerivados.Otros.MayorValorFiscal = (detContent?.Renglon37?.["1215InstrumentosFinancierosDerivadosConFinesDeNegociacion"]?.MedidasAlCosto?.DetrioroDelValor?.AjustesParaLlegarASaldosFiscales1 || 0) - (detContent?.Renglon37?.["1215InstrumentosFinancierosDerivadosConFinesDeNegociacion"]?.InstrumentosFinancierosDerivadosConFinesDeCobertura?.DetrioroDelValor?.AjustesParaLlegarASaldosFiscales1 || 0);

            // Activos - CuentasComercialesCobrarOtrasPorCobrar - CuentasDocumentosPorCobrar - CuentasComercialesPorCobrar

            content.Activos.CuentasComercialesCobrarOtrasPorCobrar.CuentasDocumentosPorCobrar.CuentasComercialesPorCobrar.ValorContable = (detContent?.Renglon38?.["1305Clientes"]?.SaldosContablesADiciembre31Parciales || 0);

            content.Activos.CuentasComercialesCobrarOtrasPorCobrar.CuentasDocumentosPorCobrar.CuentasComercialesPorCobrar.MenorValorFiscal = (detContent?.Renglon38?.["1305Clientes"]?.AjustesParaLlegarASaldosFiscales3 || 0);

            content.Activos.CuentasComercialesCobrarOtrasPorCobrar.CuentasDocumentosPorCobrar.CuentasComercialesPorCobrar.MayorValorFiscal = (detContent?.Renglon38?.["1305Clientes"]?.AjustesParaLlegarASaldosFiscales1 || 0);

            // Activos - CuentasComercialesCobrarOtrasPorCobrar - CuentasDocumentosPorCobrar - CuentasPorCobrarSociosAccionistasParticipes

            content.Activos.CuentasComercialesCobrarOtrasPorCobrar.CuentasDocumentosPorCobrar.CuentasPorCobrarSociosAccionistasParticipes.ValorContable = (detContent?.Renglon38?.["1325CuentasPorCobrarASociosOAccionistas"]?.SaldosContablesADiciembre31Parciales || 0);

            content.Activos.CuentasComercialesCobrarOtrasPorCobrar.CuentasDocumentosPorCobrar.CuentasPorCobrarSociosAccionistasParticipes.MenorValorFiscal = (detContent?.Renglon38?.["1325CuentasPorCobrarASociosOAccionistas"]?.AjustesParaLlegarASaldosFiscales3 || 0);

            content.Activos.CuentasComercialesCobrarOtrasPorCobrar.CuentasDocumentosPorCobrar.CuentasPorCobrarSociosAccionistasParticipes.MayorValorFiscal = (detContent?.Renglon38?.["1325CuentasPorCobrarASociosOAccionistas"]?.AjustesParaLlegarASaldosFiscales1 || 0);

            // Activos - CuentasComercialesCobrarOtrasPorCobrar - CuentasDocumentosPorCobrar - CuentasDocumentosPorCobrarOtrasPartesRelacionadasAsociadas

            content.Activos.CuentasComercialesCobrarOtrasPorCobrar.CuentasDocumentosPorCobrar.CuentasDocumentosPorCobrarOtrasPartesRelacionadasAsociadas.ValorContable = (detContent?.Renglon38?.["1310ACompaniasVinculadas"]?.SaldosContablesADiciembre31Parciales || 0) + (detContent?.Renglon38?.["1315CuentaPorCobrarACasaMatriz"]?.SaldosContablesADiciembre31Parciales || 0) + (detContent?.Renglon38?.["1320CuentasPorCobrarAVinculadosEconomicos"]?.SaldosContablesADiciembre31Parciales || 0);

            content.Activos.CuentasComercialesCobrarOtrasPorCobrar.CuentasDocumentosPorCobrar.CuentasDocumentosPorCobrarOtrasPartesRelacionadasAsociadas.MenorValorFiscal = (detContent?.Renglon38?.["1310ACompaniasVinculadas"]?.AjustesParaLlegarASaldosFiscales3 || 0) + (detContent?.Renglon38?.["1315CuentaPorCobrarACasaMatriz"]?.AjustesParaLlegarASaldosFiscales3 || 0) + (detContent?.Renglon38?.["1320CuentasPorCobrarAVinculadosEconomicos"]?.AjustesParaLlegarASaldosFiscales3 || 0);

            content.Activos.CuentasComercialesCobrarOtrasPorCobrar.CuentasDocumentosPorCobrar.CuentasDocumentosPorCobrarOtrasPartesRelacionadasAsociadas.MayorValorFiscal = (detContent?.Renglon38?.["1310ACompaniasVinculadas"]?.AjustesParaLlegarASaldosFiscales1 || 0) + (detContent?.Renglon38?.["1315CuentaPorCobrarACasaMatriz"]?.AjustesParaLlegarASaldosFiscales1 || 0) + (detContent?.Renglon38?.["1320CuentasPorCobrarAVinculadosEconomicos"]?.AjustesParaLlegarASaldosFiscales1 || 0);

            // Activos - CuentasComercialesCobrarOtrasPorCobrar - CuentasDocumentosPorCobrar - ReclamacionesPorCobrar

            content.Activos.CuentasComercialesCobrarOtrasPorCobrar.CuentasDocumentosPorCobrar.ReclamacionesPorCobrar.ValorContable = (detContent?.Renglon38?.["1360Reclamaciones"]?.SaldosContablesADiciembre31Parciales || 0);

            content.Activos.CuentasComercialesCobrarOtrasPorCobrar.CuentasDocumentosPorCobrar.ReclamacionesPorCobrar.MenorValorFiscal = (detContent?.Renglon38?.["1360Reclamaciones"]?.AjustesParaLlegarASaldosFiscales3 || 0);

            content.Activos.CuentasComercialesCobrarOtrasPorCobrar.CuentasDocumentosPorCobrar.ReclamacionesPorCobrar.MayorValorFiscal = (detContent?.Renglon38?.["1360Reclamaciones"]?.AjustesParaLlegarASaldosFiscales1 || 0);

            // Activos - CuentasComercialesCobrarOtrasPorCobrar - CuentasDocumentosPorCobrar - AnticiposPagos

            content.Activos.CuentasComercialesCobrarOtrasPorCobrar.CuentasDocumentosPorCobrar.AnticiposPagos.ValorContable = (detContent?.Renglon38?.["1330AnticiposYAvances"]?.SaldosContablesADiciembre31Parciales || 0);

            content.Activos.CuentasComercialesCobrarOtrasPorCobrar.CuentasDocumentosPorCobrar.AnticiposPagos.MenorValorFiscal = (detContent?.Renglon38?.["1330AnticiposYAvances"]?.AjustesParaLlegarASaldosFiscales3 || 0);

            content.Activos.CuentasComercialesCobrarOtrasPorCobrar.CuentasDocumentosPorCobrar.AnticiposPagos.MayorValorFiscal = (detContent?.Renglon38?.["1330AnticiposYAvances"]?.AjustesParaLlegarASaldosFiscales1 || 0);

            // Activos - CuentasComercialesCobrarOtrasPorCobrar - CuentasDocumentosPorCobrar - OtrasCuentasDocumentosPorCobrar

            content.Activos.CuentasComercialesCobrarOtrasPorCobrar.CuentasDocumentosPorCobrar.OtrasCuentasDocumentosPorCobrar.ValorContable = (detContent?.Renglon38?.["1335Depositos"]?.SaldosContablesADiciembre31Parciales || 0) + (detContent?.Renglon38?.["1340PromesasDeCompraventa"]?.SaldosContablesADiciembre31Parciales || 0) + (detContent?.Renglon38?.["1345IngresosPorCobrar"]?.SaldosContablesADiciembre31Parciales || 0) + (detContent?.Renglon38?.["1350RetencionesSebreContratos"]?.SaldosContablesADiciembre31Parciales || 0) + (detContent?.Renglon38?.["1365CuentasPorCobrarATrabajadores"]?.SaldosContablesADiciembre31Parciales || 0) + (detContent?.Renglon38?.["1380DeudoresVarios"]?.SaldosContablesADiciembre31Parciales || 0);

            content.Activos.CuentasComercialesCobrarOtrasPorCobrar.CuentasDocumentosPorCobrar.OtrasCuentasDocumentosPorCobrar.MenorValorFiscal = (detContent?.Renglon38?.["1335Depositos"]?.AjustesParaLlegarASaldosFiscales3 || 0) + (detContent?.Renglon38?.["1340PromesasDeCompraventa"]?.AjustesParaLlegarASaldosFiscales3 || 0) + (detContent?.Renglon38?.["1345IngresosPorCobrar"]?.AjustesParaLlegarASaldosFiscales3 || 0) + (detContent?.Renglon38?.["1350RetencionesSebreContratos"]?.AjustesParaLlegarASaldosFiscales3 || 0) + (detContent?.Renglon38?.["1365CuentasPorCobrarATrabajadores"]?.AjustesParaLlegarASaldosFiscales3 || 0) + (detContent?.Renglon38?.["1380DeudoresVarios"]?.AjustesParaLlegarASaldosFiscales3 || 0);

            content.Activos.CuentasComercialesCobrarOtrasPorCobrar.CuentasDocumentosPorCobrar.OtrasCuentasDocumentosPorCobrar.MayorValorFiscal = (detContent?.Renglon38?.["1335Depositos"]?.AjustesParaLlegarASaldosFiscales1 || 0) + (detContent?.Renglon38?.["1340PromesasDeCompraventa"]?.AjustesParaLlegarASaldosFiscales1 || 0) + (detContent?.Renglon38?.["1345IngresosPorCobrar"]?.AjustesParaLlegarASaldosFiscales1 || 0) + (detContent?.Renglon38?.["1350RetencionesSebreContratos"]?.AjustesParaLlegarASaldosFiscales1 || 0) + (detContent?.Renglon38?.["1365CuentasPorCobrarATrabajadores"]?.AjustesParaLlegarASaldosFiscales1 || 0) + (detContent?.Renglon38?.["1380DeudoresVarios"]?.AjustesParaLlegarASaldosFiscales1 || 0);

            // Activos - CuentasComercialesCobrarOtrasPorCobrar - DeterioroAcumuladoValorCuentasDocumentosCobrar - CarteraDeCredito

            content.Activos.CuentasComercialesCobrarOtrasPorCobrar.DeterioroAcumuladoValorCuentasDocumentosCobrar.CarteraDeCredito.ValorContable = (detContent?.Renglon38?.["1399DeterioroSobreClientesYOtrasCuentasQueSiTuvieronEnEsteAnioOEnLosAnterioresUnaContrapartidaEnElIngresoYSinIncluirLasCuentasPorCobrarQueSeamConVinculadosEconomicos"]?.SaldosContablesADiciembre31Parciales || 0);

            content.Activos.CuentasComercialesCobrarOtrasPorCobrar.DeterioroAcumuladoValorCuentasDocumentosCobrar.CarteraDeCredito.MenorValorFiscal = (detContent?.Renglon38?.["1399DeterioroSobreClientesYOtrasCuentasQueSiTuvieronEnEsteAnioOEnLosAnterioresUnaContrapartidaEnElIngresoYSinIncluirLasCuentasPorCobrarQueSeamConVinculadosEconomicos"]?.AjustesParaLlegarASaldosFiscales3 || 0);

            content.Activos.CuentasComercialesCobrarOtrasPorCobrar.DeterioroAcumuladoValorCuentasDocumentosCobrar.CarteraDeCredito.MayorValorFiscal = (detContent?.Renglon38?.["1399DeterioroSobreClientesYOtrasCuentasQueSiTuvieronEnEsteAnioOEnLosAnterioresUnaContrapartidaEnElIngresoYSinIncluirLasCuentasPorCobrarQueSeamConVinculadosEconomicos"]?.AjustesParaLlegarASaldosFiscales1 || 0);

            // Activos - CuentasComercialesCobrarOtrasPorCobrar - DeterioroAcumuladoValorCuentasDocumentosCobrar - OtrasCuentasPorCobrar

            content.Activos.CuentasComercialesCobrarOtrasPorCobrar.DeterioroAcumuladoValorCuentasDocumentosCobrar.OtrasCuentasPorCobrar.ValorContable = (detContent?.Renglon38?.["1399DeterioroSobreLasDemasCtasPorCobrar"]?.SaldosContablesADiciembre31Parciales || 0);

            content.Activos.CuentasComercialesCobrarOtrasPorCobrar.DeterioroAcumuladoValorCuentasDocumentosCobrar.OtrasCuentasPorCobrar.MenorValorFiscal = (detContent?.Renglon38?.["1399DeterioroSobreLasDemasCtasPorCobrar"]?.AjustesParaLlegarASaldosFiscales3 || 0);

            content.Activos.CuentasComercialesCobrarOtrasPorCobrar.DeterioroAcumuladoValorCuentasDocumentosCobrar.OtrasCuentasPorCobrar.MayorValorFiscal = (detContent?.Renglon38?.["1399DeterioroSobreLasDemasCtasPorCobrar"]?.AjustesParaLlegarASaldosFiscales1 || 0);

            // Activos - Inventarios - ParaLaVentaNoProducidosPorLaEmpresa

            content.Activos.Inventarios.ParaLaVentaNoProducidosPorLaEmpresa.ValorContable = (detContent?.Renglon39?.["1435MercanciasNoFabricadasPorLaEmpresa"]?.SaldosContablesADiciembre31Parciales || 0);

            content.Activos.Inventarios.ParaLaVentaNoProducidosPorLaEmpresa.MenorValorFiscal = (detContent?.Renglon39?.["1435MercanciasNoFabricadasPorLaEmpresa"]?.AjustesParaLlegarASaldosFiscales3 || 0);

            content.Activos.Inventarios.ParaLaVentaNoProducidosPorLaEmpresa.MayorValorFiscal = (detContent?.Renglon39?.["1435MercanciasNoFabricadasPorLaEmpresa"]?.AjustesParaLlegarASaldosFiscales1 || 0);

            // Activos - Inventarios - EnTransito

            content.Activos.Inventarios.EnTransito.ValorContable = (detContent?.Renglon39?.["1465InventariosEnTransito"]?.SaldosContablesADiciembre31Parciales || 0);

            content.Activos.Inventarios.EnTransito.MenorValorFiscal = (detContent?.Renglon39?.["1465InventariosEnTransito"]?.AjustesParaLlegarASaldosFiscales3 || 0);

            content.Activos.Inventarios.EnTransito.MayorValorFiscal = (detContent?.Renglon39?.["1465InventariosEnTransito"]?.AjustesParaLlegarASaldosFiscales1 || 0);

            // Activos - Inventarios - MateriasPrimasSuministrosMateriales

            content.Activos.Inventarios.MateriasPrimasSuministrosMateriales.ValorContable = (detContent?.Renglon39?.["1405MateriasPrimas"]?.SaldosContablesADiciembre31Parciales || 0);

            content.Activos.Inventarios.MateriasPrimasSuministrosMateriales.MenorValorFiscal = (detContent?.Renglon39?.["1405MateriasPrimas"]?.AjustesParaLlegarASaldosFiscales3 || 0);

            content.Activos.Inventarios.MateriasPrimasSuministrosMateriales.MayorValorFiscal = (detContent?.Renglon39?.["1405MateriasPrimas"]?.AjustesParaLlegarASaldosFiscales1 || 0);

            // Activos - Inventarios - EnProcesoDiferentesDeObrasInmueblesEnConstruccionParaVenta

            content.Activos.Inventarios.EnProcesoDiferentesDeObrasInmueblesEnConstruccionParaVenta.ValorContable = (detContent?.Renglon39?.["1410ProductosEnProceso"]?.SaldosContablesADiciembre31Parciales || 0);

            content.Activos.Inventarios.EnProcesoDiferentesDeObrasInmueblesEnConstruccionParaVenta.MenorValorFiscal = (detContent?.Renglon39?.["1410ProductosEnProceso"]?.AjustesParaLlegarASaldosFiscales3 || 0);

            content.Activos.Inventarios.EnProcesoDiferentesDeObrasInmueblesEnConstruccionParaVenta.MayorValorFiscal = (detContent?.Renglon39?.["1410ProductosEnProceso"]?.AjustesParaLlegarASaldosFiscales1 || 0);

            // Activos - Inventarios - CostosPrestadoresServicios

            content.Activos.Inventarios.CostosPrestadoresServicios.ValorContable = (detContent?.Renglon39?.["1415ObrasDeConstriccionEnCurso"]?.SaldosContablesADiciembre31Parciales || 0);

            content.Activos.Inventarios.CostosPrestadoresServicios.MenorValorFiscal = (detContent?.Renglon39?.["1415ObrasDeConstriccionEnCurso"]?.AjustesParaLlegarASaldosFiscales3 || 0);

            content.Activos.Inventarios.CostosPrestadoresServicios.MayorValorFiscal = (detContent?.Renglon39?.["1415ObrasDeConstriccionEnCurso"]?.AjustesParaLlegarASaldosFiscales1 || 0);

            // Activos - Inventarios - ProductoTerminadoDiferentesObrasInmueblesTerminadosParaVenta

            content.Activos.Inventarios.ProductoTerminadoDiferentesObrasInmueblesTerminadosParaVenta.ValorContable = (detContent?.Renglon39?.["1430ProductosTerminados"]?.SaldosContablesADiciembre31Parciales || 0);

            content.Activos.Inventarios.ProductoTerminadoDiferentesObrasInmueblesTerminadosParaVenta.MenorValorFiscal = (detContent?.Renglon39?.["1430ProductosTerminados"]?.AjustesParaLlegarASaldosFiscales3 || 0);

            content.Activos.Inventarios.ProductoTerminadoDiferentesObrasInmueblesTerminadosParaVenta.MayorValorFiscal = (detContent?.Renglon39?.["1430ProductosTerminados"]?.AjustesParaLlegarASaldosFiscales1 || 0);

            // Activos - Inventarios - ObrasInmueblesConstruccionParaVenta
            //TODO: hay algo raro aqui con referencia a costos prestadores de servicios

            content.Activos.Inventarios.ObrasInmueblesConstruccionParaVenta.ValorContable = (detContent?.Renglon39?.["1415ObrasDeConstriccionEnCurso"]?.SaldosContablesADiciembre31Parciales || 0);

            content.Activos.Inventarios.ObrasInmueblesConstruccionParaVenta.MenorValorFiscal = (detContent?.Renglon39?.["1415ObrasDeConstriccionEnCurso"]?.AjustesParaLlegarASaldosFiscales3 || 0);

            content.Activos.Inventarios.ObrasInmueblesConstruccionParaVenta.MayorValorFiscal = (detContent?.Renglon39?.["1415ObrasDeConstriccionEnCurso"]?.AjustesParaLlegarASaldosFiscales1 || 0);

            // Activos - Inventarios - ObrasInmueblesTerminadosParaVenta

            content.Activos.Inventarios.ObrasInmueblesTerminadosParaVenta.ValorContable = (detContent?.Renglon39?.["1440BienesRaicesParaLaVenta"]?.SaldosContablesADiciembre31Parciales || 0);

            content.Activos.Inventarios.ObrasInmueblesTerminadosParaVenta.MenorValorFiscal = (detContent?.Renglon39?.["1440BienesRaicesParaLaVenta"]?.AjustesParaLlegarASaldosFiscales3 || 0);

            content.Activos.Inventarios.ObrasInmueblesTerminadosParaVenta.MayorValorFiscal = (detContent?.Renglon39?.["1440BienesRaicesParaLaVenta"]?.AjustesParaLlegarASaldosFiscales1 || 0);

            // Activos - Inventarios - PiezasRepuestoEquipoAuxiliarClasificadosComoInventarios

            content.Activos.Inventarios.PiezasRepuestoEquipoAuxiliarClasificadosComoInventarios.ValorContable = (detContent?.Renglon39?.["1455MaterialesRepuestosYAccesorios"]?.SaldosContablesADiciembre31Parciales || 0) + (detContent?.Renglon39?.["1460EnvasesYEmpaques"]?.SaldosContablesADiciembre31Parciales || 0);

            content.Activos.Inventarios.PiezasRepuestoEquipoAuxiliarClasificadosComoInventarios.MenorValorFiscal = (detContent?.Renglon39?.["1440BienesRaicesParaLaVenta"]?.AjustesParaLlegarASaldosFiscales3 || 0) + (detContent?.Renglon39?.["1460EnvasesYEmpaques"]?.AjustesParaLlegarASaldosFiscales3 || 0);

            content.Activos.Inventarios.PiezasRepuestoEquipoAuxiliarClasificadosComoInventarios.MayorValorFiscal = (detContent?.Renglon39?.["1440BienesRaicesParaLaVenta"]?.AjustesParaLlegarASaldosFiscales1 || 0) + (detContent?.Renglon39?.["1460EnvasesYEmpaques"]?.AjustesParaLlegarASaldosFiscales1 || 0);

            // Activos - Inventarios - DeterioroAcumuladoValorInventarios

            content.Activos.Inventarios.DeterioroAcumuladoValorInventarios.ValorContable = (detContent?.Renglon39?.["1499DeterioroDeInventarios"]?.SaldosContablesADiciembre31Parciales || 0);

            content.Activos.Inventarios.DeterioroAcumuladoValorInventarios.MenorValorFiscal = (detContent?.Renglon39?.["1499DeterioroDeInventarios"]?.AjustesParaLlegarASaldosFiscales3 || 0);

            content.Activos.Inventarios.DeterioroAcumuladoValorInventarios.MayorValorFiscal = (detContent?.Renglon39?.["1499DeterioroDeInventarios"]?.AjustesParaLlegarASaldosFiscales1 || 0);

            //Quedo en G74
        }
        return esfPatrimonio;
    }
}