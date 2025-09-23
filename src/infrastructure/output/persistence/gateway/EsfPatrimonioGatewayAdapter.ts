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

        const activosFijos = await prisma.formactivosfijos.findUnique({
            where: { actID: report?.actID }
        });

        if (
            detalleRenglones && activosFijos &&
            typeof detalleRenglones?.detContent === 'object' &&
            typeof activosFijos?.actContent === 'object' &&
            detalleRenglones.detContent !== null 
            && activosFijos.actContent !== null            
        ) {
            const detContent = detalleRenglones?.detContent as any;
            const content = esfPatrimonio?.esfContent as any;
            const actContent = activosFijos?.actContent as any;

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

            content.Activos.InversionesInstrumentosFinancierosDerivadosVN.InversionesInstrumentosFinancierosDerivados.InversionesSubsidiariasAsociadasNegociosConjuntos.AlCosto.ValorContable = (detContent?.Renglon37?.["1205InversionesEnAsociadasYSubsidiariasAccionesYAportesEnSociedades"]?.MedidasAlCosto?.ValorDelCosto?.SaldosContablesADiciembre31Parciales || 0);

            content.Activos.InversionesInstrumentosFinancierosDerivadosVN.InversionesInstrumentosFinancierosDerivados.InversionesSubsidiariasAsociadasNegociosConjuntos.AlCosto.MenorValorFiscal = (detContent?.Renglon37?.["1205InversionesEnAsociadasYSubsidiariasAccionesYAportesEnSociedades"]?.MedidasAlCosto?.ValorDelCosto?.AjustesParaLlegarASaldosFiscales3 || 0);

            content.Activos.InversionesInstrumentosFinancierosDerivadosVN.InversionesInstrumentosFinancierosDerivados.InversionesSubsidiariasAsociadasNegociosConjuntos.AlCosto.MayorValorFiscal = (detContent?.Renglon37?.["1205InversionesEnAsociadasYSubsidiariasAccionesYAportesEnSociedades"]?.MedidasAlCosto?.ValorDelCosto?.AjustesParaLlegarASaldosFiscales1 || 0);

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

            content.Activos.InversionesInstrumentosFinancierosDerivadosVN.DeterioroAcumuladoInversiones.InversionesSubsidiariasAsociadasNegociosConjuntos.Metodo.MenorValorFiscal = (detContent?.Renglon37?.["1205InversionesEnAsociadasYSubsidiariasAccionesYAportesEnSociedades"]?.MedidasConMetodoDeParticipacion?.DetrioroDelValor?.AjustesParaLlegarASaldosFiscales3 || 0);

            content.Activos.InversionesInstrumentosFinancierosDerivadosVN.DeterioroAcumuladoInversiones.InversionesSubsidiariasAsociadasNegociosConjuntos.Metodo.MayorValorFiscal = (detContent?.Renglon37?.["1205InversionesEnAsociadasYSubsidiariasAccionesYAportesEnSociedades"]?.MedidasConMetodoDeParticipacion?.DetrioroDelValor?.AjustesParaLlegarASaldosFiscales1 || 0);

            // Activos - Inversiones Instrumentos Financieros Derivados - DeterioroAcumuladoInversiones - InversionesSubsidiariasAsociadasNegociosConjuntos - Costo

            content.Activos.InversionesInstrumentosFinancierosDerivadosVN.DeterioroAcumuladoInversiones.InversionesSubsidiariasAsociadasNegociosConjuntos.Costo.ValorContable = (detContent?.Renglon37?.["1205InversionesEnAsociadasYSubsidiariasAccionesYAportesEnSociedades"]?.MedidasAlCosto?.DetrioroDelValor?.SaldosContablesADiciembre31Parciales || 0);

            content.Activos.InversionesInstrumentosFinancierosDerivadosVN.DeterioroAcumuladoInversiones.InversionesSubsidiariasAsociadasNegociosConjuntos.Costo.MenorValorFiscal = (detContent?.Renglon37?.["1205InversionesEnAsociadasYSubsidiariasAccionesYAportesEnSociedades"]?.MedidasAlCosto?.DetrioroDelValor?.AjustesParaLlegarASaldosFiscales3 || 0);

            content.Activos.InversionesInstrumentosFinancierosDerivadosVN.DeterioroAcumuladoInversiones.InversionesSubsidiariasAsociadasNegociosConjuntos.Costo.MayorValorFiscal = (detContent?.Renglon37?.["1205InversionesEnAsociadasYSubsidiariasAccionesYAportesEnSociedades"]?.MedidasAlCosto?.DetrioroDelValor?.AjustesParaLlegarASaldosFiscales1 || 0);

            // Activos - Inversiones Instrumentos Financieros Derivados - DeterioroAcumuladoInversiones - InstrumentosDeudaPatrimoniooCosto

            content.Activos.InversionesInstrumentosFinancierosDerivadosVN.DeterioroAcumuladoInversiones.InstrumentosDeudaPatrimoniooCosto.ValorContable = (detContent?.Renglon37?.["1210BonosYOtrosInstrumentosDeDeudaOPatrimonio"]?.MedidasAlCosto?.DetrioroDelValor?.SaldosContablesADiciembre31Parciales || 0);

            content.Activos.InversionesInstrumentosFinancierosDerivadosVN.DeterioroAcumuladoInversiones.InstrumentosDeudaPatrimoniooCosto.MenorValorFiscal = (detContent?.Renglon37?.["1210BonosYOtrosInstrumentosDeDeudaOPatrimonio"]?.MedidasAlCosto?.DetrioroDelValor?.AjustesParaLlegarASaldosFiscales3 || 0);

            content.Activos.InversionesInstrumentosFinancierosDerivadosVN.DeterioroAcumuladoInversiones.InstrumentosDeudaPatrimoniooCosto.MayorValorFiscal = (detContent?.Renglon37?.["1210BonosYOtrosInstrumentosDeDeudaOPatrimonio"]?.MedidasAlCosto?.DetrioroDelValor?.AjustesParaLlegarASaldosFiscales1 || 0);

            // Activos - Inversiones Instrumentos Financieros Derivados - DeterioroAcumuladoInversiones - DerechosFiduciarios

            content.Activos.InversionesInstrumentosFinancierosDerivadosVN.DeterioroAcumuladoInversiones.DerechosFiduciarios.ValorContable = (detContent?.Renglon37?.["1210BonosYOtrosInstrumentosDeDeudaOPatrimonio"]?.MedidasAlCosto?.DetrioroDelValor?.SaldosContablesADiciembre31Parciales || 0);

            content.Activos.InversionesInstrumentosFinancierosDerivadosVN.DeterioroAcumuladoInversiones.DerechosFiduciarios.MenorValorFiscal = (detContent?.Renglon37?.["1210BonosYOtrosInstrumentosDeDeudaOPatrimonio"]?.MedidasAlCosto?.DetrioroDelValor?.AjustesParaLlegarASaldosFiscales3 || 0);

            content.Activos.InversionesInstrumentosFinancierosDerivadosVN.DeterioroAcumuladoInversiones.DerechosFiduciarios.MayorValorFiscal = (detContent?.Renglon37?.["1210BonosYOtrosInstrumentosDeDeudaOPatrimonio"]?.MedidasAlCosto?.DetrioroDelValor?.AjustesParaLlegarASaldosFiscales1 || 0);

            // Activos - Inversiones Instrumentos Financieros Derivados - DeterioroAcumuladoInversiones - Otros

            content.Activos.InversionesInstrumentosFinancierosDerivadosVN.DeterioroAcumuladoInversiones.Otros.ValorContable = (detContent?.Renglon37?.["1215InstrumentosFinancierosDerivadosConFinesDeNegociacion"]?.MedidasAlCosto?.DetrioroDelValor?.SaldosContablesADiciembre31Parciales || 0) - (detContent?.Renglon37?.["1215InstrumentosFinancierosDerivadosConFinesDeNegociacion"]?.InstrumentosFinancierosDerivadosConFinesDeCobertura?.DetrioroDelValor?.SaldosContablesADiciembre31Parciales || 0);

            content.Activos.InversionesInstrumentosFinancierosDerivadosVN.DeterioroAcumuladoInversiones.Otros.MenorValorFiscal = (detContent?.Renglon37?.["1215InstrumentosFinancierosDerivadosConFinesDeNegociacion"]?.MedidasAlCosto?.DetrioroDelValor?.AjustesParaLlegarASaldosFiscales3 || 0) - (detContent?.Renglon37?.["1215InstrumentosFinancierosDerivadosConFinesDeNegociacion"]?.InstrumentosFinancierosDerivadosConFinesDeCobertura?.DetrioroDelValor?.AjustesParaLlegarASaldosFiscales3 || 0);

            content.Activos.InversionesInstrumentosFinancierosDerivadosVN.DeterioroAcumuladoInversiones.Otros.MayorValorFiscal = (detContent?.Renglon37?.["1215InstrumentosFinancierosDerivadosConFinesDeNegociacion"]?.MedidasAlCosto?.DetrioroDelValor?.AjustesParaLlegarASaldosFiscales1 || 0) - (detContent?.Renglon37?.["1215InstrumentosFinancierosDerivadosConFinesDeNegociacion"]?.InstrumentosFinancierosDerivadosConFinesDeCobertura?.DetrioroDelValor?.AjustesParaLlegarASaldosFiscales1 || 0);

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

            // Activos - GastosPagadosPorAnticipado - Publicidad

            content.Activos.GastosPagadosPorAnticipado.Publicidad.ValorContable = (detContent?.Renglon43?.["1810GastosPagadosPorAnticipado"]?.Publicidad?.SaldosContablesADiciembre31Parciales || 0);

            content.Activos.GastosPagadosPorAnticipado.Publicidad.MenorValorFiscal = (detContent?.Renglon43?.["1810GastosPagadosPorAnticipado"]?.Publicidad?.AjustesParaLlegarASaldosFiscales3 || 0);

            content.Activos.GastosPagadosPorAnticipado.Publicidad.MayorValorFiscal = (detContent?.Renglon43?.["1810GastosPagadosPorAnticipado"]?.Publicidad?.AjustesParaLlegarASaldosFiscales1 || 0);

            // Activos - GastosPagadosPorAnticipado - PrimasSeguros

            content.Activos.GastosPagadosPorAnticipado.PrimasSeguros.ValorContable = (detContent?.Renglon43?.["1810GastosPagadosPorAnticipado"]?.PrimasDeSegunos?.SaldosContablesADiciembre31Parciales || 0);

            content.Activos.GastosPagadosPorAnticipado.PrimasSeguros.MenorValorFiscal = (detContent?.Renglon43?.["1810GastosPagadosPorAnticipado"]?.PrimasDeSegunos?.AjustesParaLlegarASaldosFiscales3 || 0);

            content.Activos.GastosPagadosPorAnticipado.PrimasSeguros.MayorValorFiscal = (detContent?.Renglon43?.["1810GastosPagadosPorAnticipado"]?.PrimasDeSegunos?.AjustesParaLlegarASaldosFiscales1 || 0);

            // Activos - GastosPagadosPorAnticipado - Arrendamientos

            content.Activos.GastosPagadosPorAnticipado.Arrendamientos.ValorContable = (detContent?.Renglon43?.["1810GastosPagadosPorAnticipado"]?.Arrendamientos?.SaldosContablesADiciembre31Parciales || 0);

            content.Activos.GastosPagadosPorAnticipado.Arrendamientos.MenorValorFiscal = (detContent?.Renglon43?.["1810GastosPagadosPorAnticipado"]?.Arrendamientos?.AjustesParaLlegarASaldosFiscales3 || 0);

            content.Activos.GastosPagadosPorAnticipado.Arrendamientos.MayorValorFiscal = (detContent?.Renglon43?.["1810GastosPagadosPorAnticipado"]?.Arrendamientos?.AjustesParaLlegarASaldosFiscales1 || 0);

            // Activos - GastosPagadosPorAnticipado - Otros

            content.Activos.GastosPagadosPorAnticipado.Otros.ValorContable = (detContent?.Renglon43?.["1810GastosPagadosPorAnticipado"]?.Otros?.SaldosContablesADiciembre31Parciales || 0);

            content.Activos.GastosPagadosPorAnticipado.Otros.MenorValorFiscal = (detContent?.Renglon43?.["1810GastosPagadosPorAnticipado"]?.Otros?.AjustesParaLlegarASaldosFiscales3 || 0);

            content.Activos.GastosPagadosPorAnticipado.Otros.MayorValorFiscal = (detContent?.Renglon43?.["1810GastosPagadosPorAnticipado"]?.Otros?.AjustesParaLlegarASaldosFiscales1 || 0);

            // Activos - ActivosImpuestosCorrientes - SaldosaFavor

            content.Activos.ActivosImpuestosCorrientes.SaldosaFavor.ValorContable = (detContent?.Renglon43?.["1805AnticiposPorImpuestosCorrientes"]?.SaldoAFavorRenta?.SaldosContablesADiciembre31Parciales || 0);

            content.Activos.ActivosImpuestosCorrientes.SaldosaFavor.MenorValorFiscal = (detContent?.Renglon43?.["1805AnticiposPorImpuestosCorrientes"]?.SaldoAFavorRenta?.AjustesParaLlegarASaldosFiscales3 || 0);

            content.Activos.ActivosImpuestosCorrientes.SaldosaFavor.MayorValorFiscal = (detContent?.Renglon43?.["1805AnticiposPorImpuestosCorrientes"]?.SaldoAFavorRenta?.AjustesParaLlegarASaldosFiscales1 || 0);

            // Activos - ActivosImpuestosCorrientes - SaldosaFavorOtrosImpuestos

            content.Activos.ActivosImpuestosCorrientes.SaldosaFavorOtrosImpuestos.ValorContable = (detContent?.Renglon43?.["1805AnticiposPorImpuestosCorrientes"]?.SaldosAFavorIVA?.SaldosContablesADiciembre31Parciales || 0) + (detContent?.Renglon43?.["1805AnticiposPorImpuestosCorrientes"]?.SaldoAFavorICA?.SaldosContablesADiciembre31Parciales || 0);

            content.Activos.ActivosImpuestosCorrientes.SaldosaFavorOtrosImpuestos.MenorValorFiscal = (detContent?.Renglon43?.["1805AnticiposPorImpuestosCorrientes"]?.SaldosAFavorIVA?.AjustesParaLlegarASaldosFiscales3 || 0) + (detContent?.Renglon43?.["1805AnticiposPorImpuestosCorrientes"]?.SaldoAFavorICA?.AjustesParaLlegarASaldosFiscales3 || 0);

            content.Activos.ActivosImpuestosCorrientes.SaldosaFavorOtrosImpuestos.MayorValorFiscal = (detContent?.Renglon43?.["1805AnticiposPorImpuestosCorrientes"]?.SaldosAFavorIVA?.AjustesParaLlegarASaldosFiscales1 || 0) + (detContent?.Renglon43?.["1805AnticiposPorImpuestosCorrientes"]?.SaldoAFavorICA?.AjustesParaLlegarASaldosFiscales1 || 0);

            // Activos - ActivosImpuestosCorrientes - AnticiposyOtros

            content.Activos.ActivosImpuestosCorrientes.AnticiposyOtros.ValorContable = (detContent?.Renglon43?.["1805AnticiposPorImpuestosCorrientes"]?.AnticipoDelImpuestoDeRentaYDeSobretasa?.SaldosContablesADiciembre31Parciales || 0) + (detContent?.Renglon43?.["1805AnticiposPorImpuestosCorrientes"]?.RetencionesYAutorretencionesEnLaFuente?.SaldosContablesADiciembre31Parciales || 0) + (detContent?.Renglon43?.["1805AnticiposPorImpuestosCorrientes"]?.RetencionesDeIVA?.SaldosContablesADiciembre31Parciales || 0) + (detContent?.Renglon43?.["1805AnticiposPorImpuestosCorrientes"]?.RetencionesDeICA?.SaldosContablesADiciembre31Parciales || 0);

            content.Activos.ActivosImpuestosCorrientes.AnticiposyOtros.MenorValorFiscal = (detContent?.Renglon43?.["1805AnticiposPorImpuestosCorrientes"]?.AnticipoDelImpuestoDeRentaYDeSobretasa?.AjustesParaLlegarASaldosFiscales3 || 0) + (detContent?.Renglon43?.["1805AnticiposPorImpuestosCorrientes"]?.RetencionesYAutorretencionesEnLaFuente?.AjustesParaLlegarASaldosFiscales3 || 0) + (detContent?.Renglon43?.["1805AnticiposPorImpuestosCorrientes"]?.RetencionesDeIVA?.AjustesParaLlegarASaldosFiscales3 || 0) + (detContent?.Renglon43?.["1805AnticiposPorImpuestosCorrientes"]?.RetencionesDeICA?.AjustesParaLlegarASaldosFiscales3 || 0);

            content.Activos.ActivosImpuestosCorrientes.AnticiposyOtros.MayorValorFiscal = (detContent?.Renglon43?.["1805AnticiposPorImpuestosCorrientes"]?.AnticipoDelImpuestoDeRentaYDeSobretasa?.AjustesParaLlegarASaldosFiscales1 || 0) + (detContent?.Renglon43?.["1805AnticiposPorImpuestosCorrientes"]?.RetencionesYAutorretencionesEnLaFuente?.AjustesParaLlegarASaldosFiscales1 || 0) + (detContent?.Renglon43?.["1805AnticiposPorImpuestosCorrientes"]?.RetencionesDeIVA?.AjustesParaLlegarASaldosFiscales1 || 0) + (detContent?.Renglon43?.["1805AnticiposPorImpuestosCorrientes"]?.RetencionesDeICA?.AjustesParaLlegarASaldosFiscales1 || 0);

            // Activos - ActivosImpuestosDiferidos

            content.Activos.ActivosImpuestosDiferidos.ValorContable = (detContent?.Renglon33?.["720539Vacaciones"]?.AjustesParaLlegarASaldosFiscales1 || 0);

            // Activos - PropiedadesPlantaEquipo - Terrenos

            content.Activos.PropiedadesPlantaEquipo.Terrenos.ValorContable = (actContent?.PropiedadesPlantasYEquipos?.Terrenos?.DatosContables?.ImporteAlComienzoDelPeriodo?.Costo || 0) + (actContent?.PropiedadesPlantasYEquipos?.Terrenos?.DatosContables?.ImporteAlComienzoDelPeriodo?.AjustePorRevaluacionesOReExpresiones || 0) + (actContent?.PropiedadesPlantasYEquipos?.Terrenos?.DatosContables?.Incrementos?.TransferenciasAdquisiciones || 0) + (actContent?.PropiedadesPlantasYEquipos?.Terrenos?.DatosContables?.Incrementos?.o || 0) - (actContent?.PropiedadesPlantasYEquipos?.Terrenos?.DatosContables?.Disminuciones?.TransferenciasEliminaciones || 0) - (actContent?.PropiedadesPlantasYEquipos?.Terrenos?.DatosContables?.Disminuciones?.CambiosEnValorRazonable || 0);

            content.Activos.PropiedadesPlantaEquipo.Terrenos.MenorValorFiscal = (detContent?.Renglon42?.["1704Terrenos"]?.AjustesParaLlegarASaldosFiscales3AjustesParaLlegarASaldosFiscales3 || 0);

            content.Activos.PropiedadesPlantaEquipo.Terrenos.MayorValorFiscal = (detContent?.Renglon42?.["1704Terrenos"]?.AjustesParaLlegarASaldosFiscales1 || 0);

            // Activos - PropiedadesPlantaEquipo - ConstruccionesEnProceso

            content.Activos.PropiedadesPlantaEquipo.ConstruccionesEnProceso.ValorContable = (actContent?.PropiedadesPlantasYEquipos?.ConstruccionesEnProceso?.DatosContables?.ImporteAlComienzoDelPeriodo?.Costo || 0) + (actContent?.PropiedadesPlantasYEquipos?.ConstruccionesEnProceso?.DatosContables?.ImporteAlComienzoDelPeriodo?.AjustePorRevaluacionesOReExpresiones || 0) + (actContent?.PropiedadesPlantasYEquipos?.ConstruccionesEnProceso?.DatosContables?.Incrementos?.TransferenciasAdquisiciones || 0) + (actContent?.PropiedadesPlantasYEquipos?.ConstruccionesEnProceso?.DatosContables?.Incrementos?.o || 0) - (actContent?.PropiedadesPlantasYEquipos?.ConstruccionesEnProceso?.DatosContables?.Disminuciones?.TransferenciasEliminaciones || 0) - (actContent?.PropiedadesPlantasYEquipos?.ConstruccionesEnProceso?.DatosContables?.Disminuciones?.CambiosEnValorRazonable || 0);

            content.Activos.PropiedadesPlantaEquipo.ConstruccionesEnProceso.MenorValorFiscal = (detContent?.Renglon42?.["1708ConstruccionesEnCurso"]?.AjustesParaLlegarASaldosFiscales3AjustesParaLlegarASaldosFiscales3 || 0);

            content.Activos.PropiedadesPlantaEquipo.ConstruccionesEnProceso.MayorValorFiscal = (detContent?.Renglon42?.["1708ConstruccionesEnCurso"]?.AjustesParaLlegarASaldosFiscales1 || 0);

            // Activos -  PropiedadesPlantaEquipo - Edificios - Costo

            content.Activos.PropiedadesPlantaEquipo.Edificios.Costo.ValorContable = (actContent?.PropiedadesPlantasYEquipos?.Edificios?.DatosContables?.ImporteAlComienzoDelPeriodo?.Costo || 0) + (actContent?.PropiedadesPlantasYEquipos?.Edificios?.DatosContables?.Incrementos?.TransferenciasAdquisiciones || 0) - (actContent?.PropiedadesPlantasYEquipos?.Edificios?.DatosContables?.Disminuciones?.TransferenciasEliminaciones || 0);

            content.Activos.PropiedadesPlantaEquipo.Edificios.Costo.MayorValorFiscal = (detContent?.Renglon42?.["1716Edificaciones"]?.AjustesParaLlegarASaldosFiscales1 || 0) - content.Activos.PropiedadesPlantaEquipo.Edificios.Costo.ValorContable;

            // Activos - PropiedadesPlantaEquipo - Edificios - AjusteAcumuladoRevaluacionesReexpresiones

            content.Activos.PropiedadesPlantaEquipo.Edificios.AjusteAcumuladoRevaluacionesReexpresiones.ValorContable = (actContent?.PropiedadesPlantasYEquipos?.Edificios?.DatosContables?.ImporteAlComienzoDelPeriodo?.AjustePorRevaluacionesOReExpresiones || 0) + (actContent?.PropiedadesPlantasYEquipos?.Edificios?.DatosContables?.Incrementos?.o || 0) - (actContent?.PropiedadesPlantasYEquipos?.Edificios?.DatosContables?.Disminuciones?.CambiosEnValorRazonable || 0);

             // Activos - PropiedadesPlantaEquipo - ActivosTangiblesExploracionEvaluacionRecursosMinerales

            content.Activos.PropiedadesPlantaEquipo.ActivosTangiblesExploracionEvaluacionRecursosMinerales.ValorContable = (actContent?.PropiedadesPlantasYEquipos?.ActivosTangiblesDeExploracionYEvaluacion?.DatosContables?.ImporteAlComienzoDelPeriodo?.Costo || 0) + (actContent?.PropiedadesPlantasYEquipos?.ActivosTangiblesDeExploracionYEvaluacion?.DatosContables?.ImporteAlComienzoDelPeriodo?.AjustePorRevaluacionesOReExpresiones || 0) + (actContent?.PropiedadesPlantasYEquipos?.ActivosTangiblesDeExploracionYEvaluacion?.DatosContables?.Incrementos?.TransferenciasAdquisiciones || 0) + (actContent?.PropiedadesPlantasYEquipos?.ActivosTangiblesDeExploracionYEvaluacion?.DatosContables?.Incrementos?.o || 0) - (actContent?.PropiedadesPlantasYEquipos?.ActivosTangiblesDeExploracionYEvaluacion?.DatosContables?.Disminuciones?.TransferenciasEliminaciones || 0) - (actContent?.PropiedadesPlantasYEquipos?.ActivosTangiblesDeExploracionYEvaluacion?.DatosContables?.Disminuciones?.CambiosEnValorRazonable || 0);

            // Activos - PropiedadesPlantaEquipo - DepreciacionAcumuladaPropiedadesPlantaEquipo - va antes ya que dependen los iguientes

            content.Activos.PropiedadesPlantaEquipo.DepreciacionAcumuladaPropiedadesPlantaEquipo.ValorContable = (actContent?.PropiedadesPlantasYEquipos?.TotalPropiedadesPlantasEquipo?.Depreciacion?.PorCosto || 0) + (actContent?.PropiedadesPlantasYEquipos?.TotalPropiedadesPlantasEquipo?.Depreciacion?.EfectoDeConversion || 0) + (actContent?.PropiedadesPlantasYEquipos?.TotalPropiedadesPlantasEquipo?.Depreciacion?.AjustePorRevaluacionesOReExpresiones || 0);

            content.Activos.PropiedadesPlantaEquipo.DepreciacionAcumuladaPropiedadesPlantaEquipo.MenorValorFiscal = (detContent?.Renglon42?.["1768DepreciacionAcumulada"]?.AjustesParaLlegarASaldosFiscales3 || 0);

            content.Activos.PropiedadesPlantaEquipo.DepreciacionAcumuladaPropiedadesPlantaEquipo.MayorValorFiscal = (detContent?.Renglon42?.["1768DepreciacionAcumulada"]?.AjustesParaLlegarASaldosFiscales1 || 0);

            // Activos - PropiedadesPlantaEquipo - DeterioroAcumuladoPropiedadesPlantaEquipo - va antes ya que dependen los iguientes

            content.Activos.PropiedadesPlantaEquipo.DeterioroAcumuladoPropiedadesPlantaEquipo.ValorContable = (actContent?.PropiedadesPlantasYEquipos?.TotalPropiedadesPlantasEquipo?.DeterioroAcumuladoAlFinalDelPeriodo || 0);

            // Activos - PropiedadesPlantaEquipo - OtrasPropiedadesPlantaEquipo - Costo
            content.Activos.PropiedadesPlantaEquipo.OtrasPropiedadesPlantaEquipo.Costo.ValorContable = (actContent?.PropiedadesPlantasYEquipos?.TotalPropiedadesPlantasEquipo?.DatosContables?.ImporteNetoAlFinalDelPeriodo?.Costo || 0) + (actContent?.PropiedadesPlantasYEquipos?.TotalPropiedadesPlantasEquipo?.DatosContables?.ImporteNetoAlFinalDelPeriodo?.AjustePorRevaluacionesOReExpresiones || 0) - (content?.Activos?.PropiedadesPlantaEquipo?.Terrenos?.ValorContable || 0) - (content?.Activos?.PropiedadesPlantaEquipo?.ConstruccionesEnProceso?.ValorContable || 0) - (content?.Activos?.PropiedadesPlantaEquipo?.Edificios?.Costo?.ValorContable || 0) - (content?.Activos?.PropiedadesPlantaEquipo?.Edificios?.AjusteAcumuladoRevaluacionesReexpresiones?.ValorContable || 0) - (content?.Activos?.PropiedadesPlantaEquipo?.ActivosTangiblesExploracionEvaluacionRecursosMinerales?.ValorContable || 0) + (content?.Activos?.PropiedadesPlantaEquipo?.DepreciacionAcumuladaPropiedadesPlantaEquipo?.ValorContable || 0) + (content?.Activos?.PropiedadesPlantaEquipo?.DeterioroAcumuladoPropiedadesPlantaEquipo?.ValorContable || 0);

            content.Activos.PropiedadesPlantaEquipo.OtrasPropiedadesPlantaEquipo.Costo.MenorValorFiscal = (detContent?.Renglon42?.["1720MaquinariaYEquipo"]?.AjustesParaLlegarASaldosFiscales3 || 0) - (detContent?.Renglon42?.["1740FlotaYEquipoDeTransporte"]?.AjustesParaLlegarASaldosFiscales3 || 0);

            content.Activos.PropiedadesPlantaEquipo.OtrasPropiedadesPlantaEquipo.Costo.MayorValorFiscal = (detContent?.Renglon42?.["1720MaquinariaYEquipo"]?.AjustesParaLlegarASaldosFiscales1 || 0) - (detContent?.Renglon42?.["1740FlotaYEquipoDeTransporte"]?.AjustesParaLlegarASaldosFiscales1 || 0);

            // Activos - PropiedadesPlantaEquipo - OtrasPropiedadesPlantaEquipo - AjusteAcumuladoRevaluacionesReexpresiones
            content.Activos.PropiedadesPlantaEquipo.OtrasPropiedadesPlantaEquipo.AjusteAcumuladoRevaluacionesReexpresiones.ValorContable = ((actContent?.PropiedadesPlantasYEquipos?.TotalPropiedadesPlantasEquipo?.DatosContables?.ImporteAlComienzoDelPeriodo?.AjustePorRevaluacionesOReExpresiones || 0) + (actContent?.PropiedadesPlantasYEquipos?.TotalPropiedadesPlantasEquipo?.DatosContables?.Incrementos?.CambiosEnValorRazonable || 0) - (actContent?.PropiedadesPlantasYEquipos?.TotalPropiedadesPlantasEquipo?.DatosContables?.Disminuciones?.CambiosEnValorRazonable || 0)) - (content?.Activos?.PropiedadesPlantaEquipo?.Edificios?.AjusteAcumuladoRevaluacionesReexpresiones?.ValorContable || 0);

            // Activos - ActivosIntangibles - ActivosIntangiblesDistintosPlusvalia - ActivosIntangiblesExploracionEvaluacionRecursosMinerales

            content.Activos.ActivosIntangibles.ActivosIntangiblesDistintosPlusvalia.ActivosIntangiblesExploracionEvaluacionRecursosMinerales.ValorContable = (actContent?.ActivosIntangibles?.ActivosIntangiblesDeExploracionYEvaluacion?.DatosContables?.ImporteAlComienzoDelPeriodo?.Costo || 0) + (actContent?.ActivosIntangibles?.ActivosIntangiblesDeExploracionYEvaluacion?.DatosContables?.ImporteAlComienzoDelPeriodo?.AjustePorRevaluacionesOReExpresiones || 0) + (actContent?.ActivosIntangibles?.ActivosIntangiblesDeExploracionYEvaluacion?.DatosContables?.Incrementos?.TransferenciasAdquisiciones || 0) + (actContent?.ActivosIntangibles?.ActivosIntangiblesDeExploracionYEvaluacion?.DatosContables?.Incrementos?.o || 0) - (actContent?.ActivosIntangibles?.ConstruccionesEnProceso?.DatosContables?.Disminuciones?.TransferenciasEliminaciones || 0) - (actContent?.ActivosIntangibles?.ActivosIntangiblesDeExploracionYEvaluacion?.DatosContables?.Disminuciones?.CambiosEnValorRazonable || 0);

            content.Activos.ActivosIntangibles.ActivosIntangiblesDistintosPlusvalia.ActivosIntangiblesExploracionEvaluacionRecursosMinerales.MenorValorFiscal = (detContent?.Renglon40?.["1507ActivosIntangiblesExploracionYEvaluacionDeRecursosMinerales"]?.AjustesParaLlegarASaldosFiscales3AjustesParaLlegarASaldosFiscales3 || 0);

            content.Activos.ActivosIntangibles.ActivosIntangiblesDistintosPlusvalia.ActivosIntangiblesExploracionEvaluacionRecursosMinerales.MayorValorFiscal = (detContent?.Renglon40?.["1507ActivosIntangiblesExploracionYEvaluacionDeRecursosMinerales"]?.AjustesParaLlegarASaldosFiscales1 || 0);

            // Activos - ActivosIntangibles - ActivosIntangiblesDistintosPlusvalia - MarcasPatentesLicenciasOtrosDerechos - Costo

            content.Activos.ActivosIntangibles.ActivosIntangiblesDistintosPlusvalia.MarcasPatentesLicenciasOtrosDerechos.Costo.ValorContable = (actContent?.ActivosIntangibles?.MarcasComerciales?.DatosContables?.ImporteAlComienzoDelPeriodo?.Costo || 0) + (actContent?.ActivosIntangibles?.LicenciasYFranquicias?.DatosContables?.ImporteAlComienzoDelPeriodo?.Costo || 0) + (actContent?.ActivosIntangibles?.MarcasComerciales?.DatosContables?.Incrementos?.TransferenciasAdquisiciones || 0) + (actContent?.ActivosIntangibles?.LicenciasYFranquicias?.DatosContables?.Incrementos?.TransferenciasAdquisiciones || 0) - (actContent?.ActivosIntangibles?.MarcasComerciales?.DatosContables?.Disminuciones?.TransferenciasEliminaciones || 0) - (actContent?.ActivosIntangibles?.LicenciasYFranquicias?.DatosContables?.Disminuciones?.TransferenciasEliminaciones || 0);

            content.Activos.ActivosIntangibles.ActivosIntangiblesDistintosPlusvalia.MarcasPatentesLicenciasOtrosDerechos.Costo.MenorValorFiscal = (detContent?.Renglon40?.["1510MarcasPatentesYLicencias"]?.AjustesParaLlegarASaldosFiscales3 || 0);

            content.Activos.ActivosIntangibles.ActivosIntangiblesDistintosPlusvalia.MarcasPatentesLicenciasOtrosDerechos.Costo.MayorValorFiscal = (detContent?.Renglon40?.["1510MarcasPatentesYLicencias"]?.AjustesParaLlegarASaldosFiscales1 || 0);

            // Activos - ActivosIntangibles - ActivosIntangiblesDistintosPlusvalia - MarcasPatentesLicenciasOtrosDerechos - AjusteAcumuladoRevaluacionesReexpresiones

            content.Activos.ActivosIntangibles.ActivosIntangiblesDistintosPlusvalia.MarcasPatentesLicenciasOtrosDerechos.AjusteAcumuladoRevaluacionesReexpresiones.ValorContable = (actContent?.ActivosIntangibles?.MarcasComerciales?.DatosContables?.ImporteAlComienzoDelPeriodo?.AjustePorRevaluacionesOReExpresiones || 0) + (actContent?.ActivosIntangibles?.LicenciasYFranquicias?.DatosContables?.ImporteAlComienzoDelPeriodo?.AjustePorRevaluacionesOReExpresiones || 0) + (actContent?.ActivosIntangibles?.MarcasComerciales?.DatosContables?.Incrementos?.CambiosEnValorRazonable || 0) + (actContent?.ActivosIntangibles?.LicenciasYFranquicias?.DatosContables?.Incrementos?.CambiosEnValorRazonable || 0) - (actContent?.ActivosIntangibles?.MarcasComerciales?.DatosContables?.Disminuciones?.CambiosEnValorRazonable || 0) - (actContent?.ActivosIntangibles?.LicenciasYFranquicias?.DatosContables?.Disminuciones?.CambiosEnValorRazonable || 0);

            // Activos - ActivosIntangibles - ActivosIntangiblesDistintosPlusvalia - AmortizacionAcumuladaActivosIntangiblesDistintosPlusvalia

            content.Activos.ActivosIntangibles.ActivosIntangiblesDistintosPlusvalia.AmortizacionAcumuladaActivosIntangiblesDistintosPlusvalia.ValorContable = (actContent?.ActivosIntangibles?.TotalActivosIntangibles?.DatosContables?.Depreciacion?.PorCosto || 0) + (actContent?.ActivosIntangibles?.TotalActivosIntangibles?.DatosContables?.Depreciacion?.AjustePorRevaluacionesOReExpresiones || 0);

            content.Activos.ActivosIntangibles.ActivosIntangiblesDistintosPlusvalia.AmortizacionAcumuladaActivosIntangiblesDistintosPlusvalia.MenorValorFiscal = (detContent?.Renglon40?.["1558AmortizacionAcumulada"]?.AjustesParaLlegarASaldosFiscales3 || 0);

            content.Activos.ActivosIntangibles.ActivosIntangiblesDistintosPlusvalia.AmortizacionAcumuladaActivosIntangiblesDistintosPlusvalia.MayorValorFiscal = (detContent?.Renglon40?.["1558AmortizacionAcumulada"]?.AjustesParaLlegarASaldosFiscales1 || 0);

            // Activos - ActivosIntangibles - ActivosIntangiblesDistintosPlusvalia - DeterioroAcumuladoActivosIntangiblesDistintosPlusvalia

            content.Activos.ActivosIntangibles.ActivosIntangiblesDistintosPlusvalia.DeterioroAcumuladoActivosIntangiblesDistintosPlusvalia.ValorContable = (actContent?.ActivosIntangibles?.TotalActivosIntangibles?.DatosContables?.DeterioroAcumuladoAlFinalDelPeriodo || 0);

            // Activos - ActivosIntangibles - ActivosIntangiblesDistintosPlusvalia - OtrosActivosIntangibles - AjusteAcumuladoRevaluacionesReexpresiones

            content.Activos.ActivosIntangibles.ActivosIntangiblesDistintosPlusvalia.OtrosActivosIntangibles.AjusteAcumuladoRevaluacionesReexpresiones.ValorContable = ((actContent?.ActivosIntangibles?.TotalActivosIntangibles?.DatosContables?.ImporteAlComienzoDelPeriodo?.AjustePorRevaluacionesOReExpresiones || 0) + (actContent?.ActivosIntangibles?.TotalActivosIntangibles?.DatosContables?.Incrementos?.CambiosEnValorRazonable || 0) - (actContent?.ActivosIntangibles?.TotalActivosIntangibles?.DatosContables?.Disminuciones?.CambiosEnValorRazonable || 0)) - (content?.Activos?.ActivosIntangibles?.ActivosIntangiblesDistintosPlusvalia?.AmortizacionAcumuladaActivosIntangiblesDistintosPlusvalia?.ValorContable || 0) - (content?.Activos?.ActivosIntangibles?.ActivosIntangiblesDistintosPlusvalia?.DeterioroAcumuladoActivosIntangiblesDistintosPlusvalia?.ValorContable || 0); 

            // Activos - ActivosIntangibles - ActivosIntangiblesDistintosPlusvalia - OtrosActivosIntangibles - Costo

            content.Activos.ActivosIntangibles.ActivosIntangiblesDistintosPlusvalia.OtrosActivosIntangibles.Costo.ValorContable = ((actContent?.ActivosIntangibles?.TotalActivosIntangibles?.DatosContables?.ImporteNetoAlFinalDelPeriodo?.Costo || 0) + (actContent?.ActivosIntangibles?.TotalActivosIntangibles?.DatosContables?.ImporteNetoAlFinalDelPeriodo?.AjustePorRevaluacionesOReExpresiones || 0)) - ((content?.Activos?.ActivosIntangibles?.ActivosIntangiblesDistintosPlusvalia?.AcuerdosConcesionActivoIntangible?.ValorContable || 0) + (content?.Activos?.ActivosIntangibles?.ActivosIntangiblesDistintosPlusvalia?.ActivosIntangiblesExploracionEvaluacionRecursosMinerales?.ValorContable || 0) + (content?.Activos?.ActivosIntangibles?.ActivosIntangiblesDistintosPlusvalia?.MarcasPatentesLicenciasOtrosDerechos?.Costo?.ValorContable || 0) + (content?.Activos?.ActivosIntangibles?.ActivosIntangiblesDistintosPlusvalia?.MarcasPatentesLicenciasOtrosDerechos?.AjusteAcumuladoRevaluacionesReexpresiones?.ValorContable || 0) + (content?.Activos?.ActivosIntangibles?.ActivosIntangiblesDistintosPlusvalia?.ArrendamientoFinanciero?.Costo?.ValorContable || 0) + (content?.Activos?.ActivosIntangibles?.ActivosIntangiblesDistintosPlusvalia?.ArrendamientoFinanciero?.Costo?.ValorContable || 0)) - (content?.Activos?.ActivosIntangibles?.ActivosIntangiblesDistintosPlusvalia?.OtrosActivosIntangibles?.AjusteAcumuladoRevaluacionesReexpresiones?.ValorContable || 0) - (content?.Activos?.ActivosIntangibles?.ActivosIntangiblesDistintosPlusvalia?.AmortizacionAcumuladaActivosIntangiblesDistintosPlusvalia?.ValorContable || 0) - (content?.Activos?.ActivosIntangibles?.ActivosIntangiblesDistintosPlusvalia?.DeterioroAcumuladoActivosIntangiblesDistintosPlusvalia?.ValorContable || 0);

            content.Activos.ActivosIntangibles.ActivosIntangiblesDistintosPlusvalia.OtrosActivosIntangibles.Costo.MenorValorFiscal = (detContent?.Renglon40?.["1520OtrosActivosIntangibles"]?.AjustesParaLlegarASaldosFiscales3 || 0);

            content.Activos.ActivosIntangibles.ActivosIntangiblesDistintosPlusvalia.OtrosActivosIntangibles.Costo.MayorValorFiscal = (detContent?.Renglon40?.["1520OtrosActivosIntangibles"]?.AjustesParaLlegarASaldosFiscales1 || 0);

            // Activos - ActivosIntangibles - PlusvaliaGoodwill - PlusvaliaGoodwill - AdquisicionEstablecimientoComercio

            content.Activos.ActivosIntangibles.PlusvaliaGoodwill.PlusvaliaGoodwill.AdquisicionEstablecimientoComercio.ValorContable = (detContent?.Renglon40?.["1570PlusvaliaOGoodWill"]?.AdquisicionDeEstablecimientoDeComercio?.SaldosContablesADiciembre31Parciales || 0);

            content.Activos.ActivosIntangibles.PlusvaliaGoodwill.PlusvaliaGoodwill.AdquisicionEstablecimientoComercio.MenorValorFiscal = (detContent?.Renglon40?.["1570PlusvaliaOGoodWill"]?.AdquisicionDeEstablecimientoDeComercio?.AjustesParaLlegarASaldosFiscales3 || 0);

            content.Activos.ActivosIntangibles.PlusvaliaGoodwill.PlusvaliaGoodwill.AdquisicionEstablecimientoComercio.MayorValorFiscal = (detContent?.Renglon40?.["1570PlusvaliaOGoodWill"]?.AdquisicionDeEstablecimientoDeComercio?.AjustesParaLlegarASaldosFiscales1 || 0);

            // Activos - ActivosIntangibles - PlusvaliaGoodwill - PlusvaliaGoodwill - Fusiones

            content.Activos.ActivosIntangibles.PlusvaliaGoodwill.PlusvaliaGoodwill.Fusiones.ValorContable = (detContent?.Renglon40?.["1570PlusvaliaOGoodWill"]?.Fusiones?.SaldosContablesADiciembre31Parciales || 0);

            content.Activos.ActivosIntangibles.PlusvaliaGoodwill.PlusvaliaGoodwill.Fusiones.MenorValorFiscal = (detContent?.Renglon40?.["1570PlusvaliaOGoodWill"]?.Fusiones?.AjustesParaLlegarASaldosFiscales3 || 0);

            content.Activos.ActivosIntangibles.PlusvaliaGoodwill.PlusvaliaGoodwill.Fusiones.MayorValorFiscal = (detContent?.Renglon40?.["1570PlusvaliaOGoodWill"]?.Fusiones?.AjustesParaLlegarASaldosFiscales1 || 0);

            // Activos - ActivosIntangibles - PlusvaliaGoodwill - PlusvaliaGoodwill - Escisiones

            content.Activos.ActivosIntangibles.PlusvaliaGoodwill.PlusvaliaGoodwill.Escisiones.ValorContable = (detContent?.Renglon40?.["1570PlusvaliaOGoodWill"]?.Escisiones?.SaldosContablesADiciembre31Parciales || 0);

            content.Activos.ActivosIntangibles.PlusvaliaGoodwill.PlusvaliaGoodwill.Escisiones.MenorValorFiscal = (detContent?.Renglon40?.["1570PlusvaliaOGoodWill"]?.Escisiones?.AjustesParaLlegarASaldosFiscales3 || 0);

            content.Activos.ActivosIntangibles.PlusvaliaGoodwill.PlusvaliaGoodwill.Escisiones.MayorValorFiscal = (detContent?.Renglon40?.["1570PlusvaliaOGoodWill"]?.Escisiones?.AjustesParaLlegarASaldosFiscales1 || 0);

            // Activos - ActivosIntangibles - PlusvaliaGoodwill - PlusvaliaGoodwill - CompraAcciones

            content.Activos.ActivosIntangibles.PlusvaliaGoodwill.PlusvaliaGoodwill.CompraAcciones.ValorContable = (detContent?.Renglon40?.["1570PlusvaliaOGoodWill"]?.CompraDeAcciones?.SaldosContablesADiciembre31Parciales || 0);

            content.Activos.ActivosIntangibles.PlusvaliaGoodwill.PlusvaliaGoodwill.CompraAcciones.MenorValorFiscal = (detContent?.Renglon40?.["1570PlusvaliaOGoodWill"]?.CompraDeAcciones?.AjustesParaLlegarASaldosFiscales3 || 0);

            content.Activos.ActivosIntangibles.PlusvaliaGoodwill.PlusvaliaGoodwill.CompraAcciones.MayorValorFiscal = (detContent?.Renglon40?.["1570PlusvaliaOGoodWill"]?.CompraDeAcciones?.AjustesParaLlegarASaldosFiscales1 || 0);

            // Activos - ActivosIntangibles - PlusvaliaGoodwill - AmortizacionAcumuladaPlusvaliaGoodwill

            content.Activos.ActivosIntangibles.PlusvaliaGoodwill.AmortizacionAcumuladaPlusvaliaGoodwill.ValorContable = (detContent?.Renglon40?.["1578AmortizacionAcumuladaDeLaPlusvaliaOGoodWill"]?.SaldosContablesADiciembre31Parciales || 0);

            content.Activos.ActivosIntangibles.PlusvaliaGoodwill.AmortizacionAcumuladaPlusvaliaGoodwill.MenorValorFiscal = (detContent?.Renglon40?.["1578AmortizacionAcumuladaDeLaPlusvaliaOGoodWill"]?.AjustesParaLlegarASaldosFiscales3 || 0);

            content.Activos.ActivosIntangibles.PlusvaliaGoodwill.AmortizacionAcumuladaPlusvaliaGoodwill.MayorValorFiscal = (detContent?.Renglon40?.["1578AmortizacionAcumuladaDeLaPlusvaliaOGoodWill"]?.AjustesParaLlegarASaldosFiscales1 || 0);

            // Activos - ActivosIntangibles - PlusvaliaGoodwill - DeterioroAcumuladoPlusvaliaGoodwill

            content.Activos.ActivosIntangibles.PlusvaliaGoodwill.DeterioroAcumuladoPlusvaliaGoodwill.ValorContable = (detContent?.Renglon40?.["1579DeterioroAcumuladoDeLaPlusvaliaOGoodWill"]?.SaldosContablesADiciembre31Parciales || 0);

            content.Activos.ActivosIntangibles.PlusvaliaGoodwill.DeterioroAcumuladoPlusvaliaGoodwill.MenorValorFiscal = (detContent?.Renglon40?.["1579DeterioroAcumuladoDeLaPlusvaliaOGoodWill"]?.AjustesParaLlegarASaldosFiscales3 || 0);

            content.Activos.ActivosIntangibles.PlusvaliaGoodwill.DeterioroAcumuladoPlusvaliaGoodwill.MayorValorFiscal = (detContent?.Renglon40?.["1579DeterioroAcumuladoDeLaPlusvaliaOGoodWill"]?.AjustesParaLlegarASaldosFiscales1 || 0);

            // Activos - PropiedadesInversion - TerrenoEdificios - AlCosto

            content.Activos.PropiedadesInversion.TerrenoEdificios.AlCosto.ValorContable = (detContent?.Renglon42?.["1779PropiedadesDeInversionTerrenos"]?.ValorDelCosto?.SaldosContablesADiciembre31Parciales || 0) + (detContent?.Renglon42?.["1780PropiedadesDeInversionEdificaciones"]?.ValorDelCosto?.SaldosContablesADiciembre31Parciales || 0);

            content.Activos.PropiedadesInversion.TerrenoEdificios.AlCosto.MenorValorFiscal = (detContent?.Renglon42?.["1779PropiedadesDeInversionTerrenos"]?.ValorDelCosto?.AjustesParaLlegarASaldosFiscales3 || 0) + (detContent?.Renglon42?.["1780PropiedadesDeInversionEdificaciones"]?.ValorDelCosto?.AjustesParaLlegarASaldosFiscales3 || 0);

            content.Activos.PropiedadesInversion.TerrenoEdificios.AlCosto.MayorValorFiscal = (detContent?.Renglon42?.["1779PropiedadesDeInversionTerrenos"]?.ValorDelCosto?.AjustesParaLlegarASaldosFiscales1 || 0) + (detContent?.Renglon42?.["1780PropiedadesDeInversionEdificaciones"]?.ValorDelCosto?.AjustesParaLlegarASaldosFiscales1 || 0);

            // Activos - PropiedadesInversion - TerrenoEdificios - AlValorRazonable

            content.Activos.PropiedadesInversion.TerrenoEdificios.AlValorRazonable.ValorContable = (detContent?.Renglon42?.["1779PropiedadesDeInversionTerrenos"]?.Revaluaciones?.SaldosContablesADiciembre31Parciales || 0) + (detContent?.Renglon42?.["1780PropiedadesDeInversionEdificaciones"]?.Revaluaciones?.SaldosContablesADiciembre31Parciales || 0);

            content.Activos.PropiedadesInversion.TerrenoEdificios.AlValorRazonable.MenorValorFiscal = (detContent?.Renglon42?.["1779PropiedadesDeInversionTerrenos"]?.Revaluaciones?.AjustesParaLlegarASaldosFiscales3 || 0) + (detContent?.Renglon42?.["1780PropiedadesDeInversionEdificaciones"]?.Revaluaciones?.AjustesParaLlegarASaldosFiscales3 || 0);

            content.Activos.PropiedadesInversion.TerrenoEdificios.AlValorRazonable.MayorValorFiscal = (detContent?.Renglon42?.["1779PropiedadesDeInversionTerrenos"]?.Revaluaciones?.AjustesParaLlegarASaldosFiscales1 || 0) + (detContent?.Renglon42?.["1780PropiedadesDeInversionEdificaciones"]?.Revaluaciones?.AjustesParaLlegarASaldosFiscales1 || 0);

            // Activos - PropiedadesInversion - DepreciacionAcumuladaPropiedadesInversion

            content.Activos.PropiedadesInversion.DepreciacionAcumuladaPropiedadesInversion.ValorContable = (actContent?.PropiedadesDeInversión?.TotalPorpiedadesDeInversion?.DatosContables?.Depreciacion?.PorCosto || 0) + (actContent?.PropiedadesDeInversión?.TotalPorpiedadesDeInversion?.DatosContables?.Depreciacion?.EfectoDeConversion || 0) + (actContent?.PropiedadesDeInversión?.TotalPorpiedadesDeInversion?.DatosContables?.Depreciacion?.AjustePorRevaluacionesOReExpresiones || 0);

            content.Activos.PropiedadesInversion.DepreciacionAcumuladaPropiedadesInversion.MenorValorFiscal = (detContent?.Renglon42?.["1788PropDeInversiDepreciacionAcumulada"]?.DelCosto?.AjustesParaLlegarASaldosFiscales3 || 0) + (detContent?.Renglon42?.["1788PropDeInversiDepreciacionAcumulada"]?.DeLasRevaluaciones?.AjustesParaLlegarASaldosFiscales3 || 0);

            content.Activos.PropiedadesInversion.DepreciacionAcumuladaPropiedadesInversion.MayorValorFiscal = (detContent?.Renglon42?.["1788PropDeInversiDepreciacionAcumulada"]?.DelCosto?.AjustesParaLlegarASaldosFiscales1 || 0) + (detContent?.Renglon42?.["1788PropDeInversiDepreciacionAcumulada"]?.DeLasRevaluaciones?.AjustesParaLlegarASaldosFiscales1 || 0);

            // Activos - PropiedadesInversion - DeterioroAcumuladoPropiedadesInversion

            content.Activos.PropiedadesInversion.DeterioroAcumuladoPropiedadesInversion.ValorContable = (actContent?.PropiedadesDeInversión?.TotalPorpiedadesDeInversion?.DatosContables?.DeterioroAcumuladoAlFinalDelPeriodo || 0);

            // Activos - ActivosNoCorrientes - MantenidosParaVenta

            content.Activos.ActivosNoCorrientes.MantenidosParaVenta.ValorContable = (actContent?.ANCMV?.DatosContables?.ImporteNetoAlFinalDelPeriodo?.Costo || 0) + (actContent?.ANCMV?.DatosContables?.DeterioroAcumuladoAlFinalDelPeriodo || 0);

            content.Activos.ActivosNoCorrientes.MantenidosParaVenta.MenorValorFiscal = detContent?.Renglon42?.["1790ActivosNoCorrientesMantenidosParaLaVenta"]?.ValorDelCosto?.AjustesParaLlegarASaldosFiscales3 || 0;

            content.Activos.ActivosNoCorrientes.MantenidosParaVenta.MenorValorFiscal = detContent?.Renglon42?.["1790ActivosNoCorrientesMantenidosParaLaVenta"]?.ValorDelCosto?.AjustesParaLlegarASaldosFiscales1 || 0;

            // Activos - ActivosNoCorrientes - DeterioroAcumuladoActivosCorrientesMantenidosParaVenta

            content.Activos.ActivosNoCorrientes.DeterioroAcumuladoActivosCorrientesMantenidosParaVenta.ValorContable = (actContent?.ANCMV?.DatosContables?.DeterioroAcumuladoAlFinalDelPeriodo || 0);

            // Activos - ActivosBiologicos - AnimalesVivos - AnimalesProductoresMedidosAlCosto

            content.Activos.ActivosBiologicos.AnimalesVivos.AnimalesProductoresMedidosAlCosto.ValorContable = detContent?.Renglon41?.["1605AnimalesProductoresMedidosAlCosto"]?.AnimalesProductoresMedidosAlCosto?.ValorDelCosto?.SaldosContablesADiciembre31Parciales || 0;

            content.Activos.ActivosBiologicos.AnimalesVivos.AnimalesProductoresMedidosAlCosto.MenorValorFiscal = detContent?.Renglon41?.["1605AnimalesProductoresMedidosAlCosto"]?.AnimalesProductoresMedidosAlCosto?.ValorDelCosto?.AjustesParaLlegarASaldosFiscales3 || 0;

            content.Activos.ActivosBiologicos.AnimalesVivos.AnimalesProductoresMedidosAlCosto.MenorValorFiscal = detContent?.Renglon41?.["1605AnimalesProductoresMedidosAlCosto"]?.AnimalesProductoresMedidosAlCosto?.ValorDelCosto?.AjustesParaLlegarASaldosFiscales1 || 0;

            // Activos - ActivosBiologicos - AnimalesVivos - DepreciacionAcumuladaDeAnimalesProductoresMedidosAlCosto

            content.Activos.ActivosBiologicos.AnimalesVivos.DepreciacionAcumuladaDeAnimalesProductoresMedidosAlCosto.ValorContable = detContent?.Renglon41?.["1605AnimalesProductoresMedidosAlCosto"]?.AnimalesProductoresMedidosAlCosto?.DepreciacionAcumulada?.SaldosContablesADiciembre31Parciales || 0;

            content.Activos.ActivosBiologicos.AnimalesVivos.DepreciacionAcumuladaDeAnimalesProductoresMedidosAlCosto.MenorValorFiscal = detContent?.Renglon41?.["1605AnimalesProductoresMedidosAlCosto"]?.AnimalesProductoresMedidosAlCosto?.DepreciacionAcumulada?.AjustesParaLlegarASaldosFiscales3 || 0;

            content.Activos.ActivosBiologicos.AnimalesVivos.DepreciacionAcumuladaDeAnimalesProductoresMedidosAlCosto.MenorValorFiscal = detContent?.Renglon41?.["1605AnimalesProductoresMedidosAlCosto"]?.AnimalesProductoresMedidosAlCosto?.DepreciacionAcumulada?.AjustesParaLlegarASaldosFiscales1 || 0;

            // Activos - ActivosBiologicos - AnimalesVivos - DeterioroAcumuladoDeAnimalesProductoresMedidosAlCosto

            content.Activos.ActivosBiologicos.AnimalesVivos.DeterioroAcumuladoDeAnimalesProductoresMedidosAlCosto.ValorContable = detContent?.Renglon41?.["1605AnimalesProductoresMedidosAlCosto"]?.AnimalesProductoresMedidosAlCosto?.DeterioroAcumulado?.SaldosContablesADiciembre31Parciales || 0;

            content.Activos.ActivosBiologicos.AnimalesVivos.DeterioroAcumuladoDeAnimalesProductoresMedidosAlCosto.MenorValorFiscal = detContent?.Renglon41?.["1605AnimalesProductoresMedidosAlCosto"]?.AnimalesProductoresMedidosAlCosto?.DeterioroAcumulado?.AjustesParaLlegarASaldosFiscales3 || 0;

            content.Activos.ActivosBiologicos.AnimalesVivos.DeterioroAcumuladoDeAnimalesProductoresMedidosAlCosto.MenorValorFiscal = detContent?.Renglon41?.["1605AnimalesProductoresMedidosAlCosto"]?.AnimalesProductoresMedidosAlCosto?.DeterioroAcumulado?.AjustesParaLlegarASaldosFiscales1 || 0;

            // Activos - ActivosBiologicos - AnimalesVivos - AnimalesProductoresMedidosAlValorRazonableMenosCostosDeVenta

            content.Activos.ActivosBiologicos.AnimalesVivos.AnimalesProductoresMedidosAlValorRazonableMenosCostosDeVenta.ValorContable = (detContent?.Renglon41?.["1605AnimalesProductoresMedidosAlCosto"]?.AnimalesProductoresMedidosAlValorRazonable?.ValorDelCosto?.SaldosContablesADiciembre31Parciales || 0) + (detContent?.Renglon41?.["1605AnimalesProductoresMedidosAlCosto"]?.AnimalesProductoresMedidosAlValorRazonable?.Revaluaciones?.SaldosContablesADiciembre31Parciales || 0);

            content.Activos.ActivosBiologicos.AnimalesVivos.AnimalesProductoresMedidosAlValorRazonableMenosCostosDeVenta.MenorValorFiscal = (detContent?.Renglon41?.["1605AnimalesProductoresMedidosAlCosto"]?.AnimalesProductoresMedidosAlValorRazonable?.ValorDelCosto?.AjustesParaLlegarASaldosFiscales3 || 0) + (detContent?.Renglon41?.["1605AnimalesProductoresMedidosAlCosto"]?.AnimalesProductoresMedidosAlValorRazonable?.Revaluaciones?.AjustesParaLlegarASaldosFiscales3 || 0);

            content.Activos.ActivosBiologicos.AnimalesVivos.AnimalesProductoresMedidosAlValorRazonableMenosCostosDeVenta.MenorValorFiscal = (detContent?.Renglon41?.["1605AnimalesProductoresMedidosAlCosto"]?.AnimalesProductoresMedidosAlValorRazonable?.ValorDelCosto?.AjustesParaLlegarASaldosFiscales1 || 0) + (detContent?.Renglon41?.["1605AnimalesProductoresMedidosAlCosto"]?.AnimalesProductoresMedidosAlValorRazonable?.Revaluaciones?.AjustesParaLlegarASaldosFiscales1 || 0);

            // Activos - ActivosBiologicos - AnimalesVivos - AnimalesConsumiblesMedidosAlCosto

            content.Activos.ActivosBiologicos.AnimalesVivos.AnimalesConsumiblesMedidosAlCosto.ValorContable = (detContent?.Renglon41?.["1610AnimalesConsumiblesMedidosAlCosto"]?.AnimalesConsumiblesMedidosAlCosto?.ValorDelCosto?.SaldosContablesADiciembre31Parciales || 0);

            content.Activos.ActivosBiologicos.AnimalesVivos.AnimalesConsumiblesMedidosAlCosto.MenorValorFiscal = (detContent?.Renglon41?.["1610AnimalesConsumiblesMedidosAlCosto"]?.AnimalesConsumiblesMedidosAlCosto?.ValorDelCosto?.AjustesParaLlegarASaldosFiscales3 || 0);

            content.Activos.ActivosBiologicos.AnimalesVivos.AnimalesConsumiblesMedidosAlCosto.MenorValorFiscal = (detContent?.Renglon41?.["1610AnimalesConsumiblesMedidosAlCosto"]?.AnimalesConsumiblesMedidosAlCosto?.ValorDelCosto?.AjustesParaLlegarASaldosFiscales1 || 0);

            // Activos - ActivosBiologicos - AnimalesVivos - DeterioroAcumuladoAnimalesConsumiblesMedidosAlCosto

            content.Activos.ActivosBiologicos.AnimalesVivos.DeterioroAcumuladoAnimalesConsumiblesMedidosAlCosto.ValorContable = (detContent?.Renglon41?.["1610AnimalesConsumiblesMedidosAlCosto"]?.AnimalesConsumiblesMedidosAlCosto?.DeterioroDeAnimalesConsumiblesMedidosAlCosto?.SaldosContablesADiciembre31Parciales || 0);

            content.Activos.ActivosBiologicos.AnimalesVivos.DeterioroAcumuladoAnimalesConsumiblesMedidosAlCosto.MenorValorFiscal = (detContent?.Renglon41?.["1610AnimalesConsumiblesMedidosAlCosto"]?.AnimalesConsumiblesMedidosAlCosto?.DeterioroDeAnimalesConsumiblesMedidosAlCosto?.AjustesParaLlegarASaldosFiscales3 || 0);

            content.Activos.ActivosBiologicos.AnimalesVivos.DeterioroAcumuladoAnimalesConsumiblesMedidosAlCosto.MenorValorFiscal = (detContent?.Renglon41?.["1610AnimalesConsumiblesMedidosAlCosto"]?.AnimalesConsumiblesMedidosAlCosto?.DeterioroDeAnimalesConsumiblesMedidosAlCosto?.AjustesParaLlegarASaldosFiscales1 || 0);

            // Activos - ActivosBiologicos - AnimalesVivos - AnimalesConsumiblesMedidosAlValorRazonableMenosCostosDeVenta

            content.Activos.ActivosBiologicos.AnimalesVivos.AnimalesConsumiblesMedidosAlValorRazonableMenosCostosDeVenta.ValorContable = (detContent?.Renglon41?.["1610AnimalesConsumiblesMedidosAlCosto"]?.AnimalesConsumiblesMedidosAlValorRazonable?.ValorDelCosto?.SaldosContablesADiciembre31Parciales || 0) + (detContent?.Renglon41?.["1610AnimalesConsumiblesMedidosAlCosto"]?.AnimalesConsumiblesMedidosAlValorRazonable?.Revaluaciones?.SaldosContablesADiciembre31Parciales || 0);

            content.Activos.ActivosBiologicos.AnimalesVivos.AnimalesConsumiblesMedidosAlValorRazonableMenosCostosDeVenta.MenorValorFiscal = (detContent?.Renglon41?.["1610AnimalesConsumiblesMedidosAlCosto"]?.AnimalesConsumiblesMedidosAlValorRazonable?.ValorDelCosto?.AjustesParaLlegarASaldosFiscales3 || 0) + (detContent?.Renglon41?.["1610AnimalesConsumiblesMedidosAlCosto"]?.AnimalesConsumiblesMedidosAlValorRazonable?.Revaluaciones?.AjustesParaLlegarASaldosFiscales3 || 0);

            content.Activos.ActivosBiologicos.AnimalesVivos.AnimalesConsumiblesMedidosAlValorRazonableMenosCostosDeVenta.MenorValorFiscal = (detContent?.Renglon41?.["1610AnimalesConsumiblesMedidosAlCosto"]?.AnimalesConsumiblesMedidosAlValorRazonable?.ValorDelCosto?.AjustesParaLlegarASaldosFiscales1 || 0) + (detContent?.Renglon41?.["1610AnimalesConsumiblesMedidosAlCosto"]?.AnimalesConsumiblesMedidosAlValorRazonable?.Revaluaciones?.AjustesParaLlegarASaldosFiscales1 || 0);

            // Activos - ActivosBiologicos - PlantasProductorasCultivosConsumibles - PlantasProductorasMedidasAlCosto

            content.Activos.ActivosBiologicos.PlantasProductorasCultivosConsumibles.PlantasProductorasMedidasAlCosto.ValorContable = (detContent?.Renglon41?.["1615PlantasProductorasMedidasAlCosto"]?.PlantasProductorasMedidasAlCosto?.ValorDelCosto?.SaldosContablesADiciembre31Parciales || 0);

            content.Activos.ActivosBiologicos.PlantasProductorasCultivosConsumibles.PlantasProductorasMedidasAlCosto.MenorValorFiscal = (detContent?.Renglon41?.["1615PlantasProductorasMedidasAlCosto"]?.PlantasProductorasMedidasAlCosto?.ValorDelCosto?.AjustesParaLlegarASaldosFiscales3 || 0);

            content.Activos.ActivosBiologicos.PlantasProductorasCultivosConsumibles.PlantasProductorasMedidasAlCosto.MenorValorFiscal = (detContent?.Renglon41?.["1615PlantasProductorasMedidasAlCosto"]?.PlantasProductorasMedidasAlCosto?.ValorDelCosto?.AjustesParaLlegarASaldosFiscales1 || 0);

            // Activos - ActivosBiologicos - PlantasProductorasCultivosConsumibles - DepreciacionAcumuladaDePlantasProductoras

            content.Activos.ActivosBiologicos.PlantasProductorasCultivosConsumibles.DepreciacionAcumuladaDePlantasProductoras.ValorContable = (detContent?.Renglon41?.["1615PlantasProductorasMedidasAlCosto"]?.PlantasProductorasMedidasAlCosto?.DepreciacionAcumulada?.SaldosContablesADiciembre31Parciales || 0);

            content.Activos.ActivosBiologicos.PlantasProductorasCultivosConsumibles.DepreciacionAcumuladaDePlantasProductoras.MenorValorFiscal = (detContent?.Renglon41?.["1615PlantasProductorasMedidasAlCosto"]?.PlantasProductorasMedidasAlCosto?.DepreciacionAcumulada?.AjustesParaLlegarASaldosFiscales3 || 0);

            content.Activos.ActivosBiologicos.PlantasProductorasCultivosConsumibles.DepreciacionAcumuladaDePlantasProductoras.MenorValorFiscal = (detContent?.Renglon41?.["1615PlantasProductorasMedidasAlCosto"]?.PlantasProductorasMedidasAlCosto?.DepreciacionAcumulada?.AjustesParaLlegarASaldosFiscales1 || 0);

            // Activos - ActivosBiologicos - PlantasProductorasCultivosConsumibles - DeterioroAcumuladoDePlantasProductoras

            content.Activos.ActivosBiologicos.PlantasProductorasCultivosConsumibles.DeterioroAcumuladoDePlantasProductoras.ValorContable = (detContent?.Renglon41?.["1615PlantasProductorasMedidasAlCosto"]?.PlantasProductorasMedidasAlCosto?.DeterioroAcumulado?.SaldosContablesADiciembre31Parciales || 0);

            content.Activos.ActivosBiologicos.PlantasProductorasCultivosConsumibles.DeterioroAcumuladoDePlantasProductoras.MenorValorFiscal = (detContent?.Renglon41?.["1615PlantasProductorasMedidasAlCosto"]?.PlantasProductorasMedidasAlCosto?.DeterioroAcumulado?.AjustesParaLlegarASaldosFiscales3 || 0);

            content.Activos.ActivosBiologicos.PlantasProductorasCultivosConsumibles.DeterioroAcumuladoDePlantasProductoras.MenorValorFiscal = (detContent?.Renglon41?.["1615PlantasProductorasMedidasAlCosto"]?.PlantasProductorasMedidasAlCosto?.DeterioroAcumulado?.AjustesParaLlegarASaldosFiscales1 || 0);

            // Activos - ActivosBiologicos - PlantasProductorasCultivosConsumibles - PlantasProductorasMedidasAlValorRazonable

            content.Activos.ActivosBiologicos.PlantasProductorasCultivosConsumibles.PlantasProductorasMedidasAlValorRazonable.ValorContable = (detContent?.Renglon41?.["1615PlantasProductorasMedidasAlCosto"]?.PlantasProductorasMedidasAlValorRazonable?.ValorDelCosto?.SaldosContablesADiciembre31Parciales || 0) + (detContent?.Renglon41?.["1615PlantasProductorasMedidasAlCosto"]?.PlantasProductorasMedidasAlValorRazonable?.Revaluaciones?.SaldosContablesADiciembre31Parciales || 0);

            content.Activos.ActivosBiologicos.PlantasProductorasCultivosConsumibles.PlantasProductorasMedidasAlValorRazonable.MenorValorFiscal = (detContent?.Renglon41?.["1615PlantasProductorasMedidasAlCosto"]?.PlantasProductorasMedidasAlValorRazonable?.ValorDelCosto?.AjustesParaLlegarASaldosFiscales3 || 0) + (detContent?.Renglon41?.["1615PlantasProductorasMedidasAlCosto"]?.PlantasProductorasMedidasAlValorRazonable?.Revaluaciones?.AjustesParaLlegarASaldosFiscales3 || 0);

            content.Activos.ActivosBiologicos.PlantasProductorasCultivosConsumibles.PlantasProductorasMedidasAlValorRazonable.MenorValorFiscal = (detContent?.Renglon41?.["1615PlantasProductorasMedidasAlCosto"]?.PlantasProductorasMedidasAlValorRazonable?.ValorDelCosto?.AjustesParaLlegarASaldosFiscales1 || 0) + (detContent?.Renglon41?.["1615PlantasProductorasMedidasAlCosto"]?.PlantasProductorasMedidasAlValorRazonable?.Revaluaciones?.AjustesParaLlegarASaldosFiscales1 || 0);

            // Activos - ActivosBiologicos - PlantasProductorasCultivosConsumibles - CultivosConsumiblesMedidosAlCosto

            content.Activos.ActivosBiologicos.PlantasProductorasCultivosConsumibles.CultivosConsumiblesMedidosAlCosto.ValorContable = (detContent?.Renglon41?.["1620PlantasConsumiblesMedidosAlCosto"]?.PlantasConsumiblesMedidosAlCosto?.ValorDelCosto?.SaldosContablesADiciembre31Parciales || 0);

            content.Activos.ActivosBiologicos.PlantasProductorasCultivosConsumibles.CultivosConsumiblesMedidosAlCosto.MenorValorFiscal = (detContent?.Renglon41?.["1620PlantasConsumiblesMedidosAlCosto"]?.PlantasConsumiblesMedidosAlCosto?.ValorDelCosto?.AjustesParaLlegarASaldosFiscales3 || 0);

            content.Activos.ActivosBiologicos.PlantasProductorasCultivosConsumibles.CultivosConsumiblesMedidosAlCosto.MenorValorFiscal = (detContent?.Renglon41?.["1620PlantasConsumiblesMedidosAlCosto"]?.PlantasConsumiblesMedidosAlCosto?.ValorDelCosto?.AjustesParaLlegarASaldosFiscales1 || 0);

            // Activos - ActivosBiologicos - PlantasProductorasCultivosConsumibles - DeterioroAcumuladoCultivosConsumiblesMedidosAlCosto

            content.Activos.ActivosBiologicos.PlantasProductorasCultivosConsumibles.DeterioroAcumuladoCultivosConsumiblesMedidosAlCosto.ValorContable = (detContent?.Renglon41?.["1620PlantasConsumiblesMedidosAlCosto"]?.PlantasConsumiblesMedidosAlCosto?.DeterioroDeConsumiblesMedidosAlCosto?.SaldosContablesADiciembre31Parciales || 0);

            content.Activos.ActivosBiologicos.PlantasProductorasCultivosConsumibles.DeterioroAcumuladoCultivosConsumiblesMedidosAlCosto.MenorValorFiscal = (detContent?.Renglon41?.["1620PlantasConsumiblesMedidosAlCosto"]?.PlantasConsumiblesMedidosAlCosto?.DeterioroDeConsumiblesMedidosAlCosto?.AjustesParaLlegarASaldosFiscales3 || 0);

            content.Activos.ActivosBiologicos.PlantasProductorasCultivosConsumibles.DeterioroAcumuladoCultivosConsumiblesMedidosAlCosto.MenorValorFiscal = (detContent?.Renglon41?.["1620PlantasConsumiblesMedidosAlCosto"]?.PlantasConsumiblesMedidosAlCosto?.DeterioroDeConsumiblesMedidosAlCosto?.AjustesParaLlegarASaldosFiscales1 || 0);

            // Activos - ActivosBiologicos - PlantasProductorasCultivosConsumibles - CultivosConsumiblesMedidosAlValorRazonableMenosCostosDeVenta

            content.Activos.ActivosBiologicos.PlantasProductorasCultivosConsumibles.CultivosConsumiblesMedidosAlValorRazonableMenosCostosDeVenta.ValorContable = (detContent?.Renglon41?.["1620PlantasConsumiblesMedidosAlCosto"]?.PlantasConsumiblesMedidosAlValorRazonable?.ValorDelCosto?.SaldosContablesADiciembre31Parciales || 0) + (detContent?.Renglon41?.["1620PlantasConsumiblesMedidosAlCosto"]?.PlantasConsumiblesMedidosAlValorRazonable?.Revaluaciones?.SaldosContablesADiciembre31Parciales || 0);

            content.Activos.ActivosBiologicos.PlantasProductorasCultivosConsumibles.CultivosConsumiblesMedidosAlValorRazonableMenosCostosDeVenta.MenorValorFiscal = (detContent?.Renglon41?.["1620PlantasConsumiblesMedidosAlCosto"]?.PlantasConsumiblesMedidosAlValorRazonable?.ValorDelCosto?.AjustesParaLlegarASaldosFiscales3 || 0) + (detContent?.Renglon41?.["1620PlantasConsumiblesMedidosAlCosto"]?.PlantasConsumiblesMedidosAlValorRazonable?.Revaluaciones?.AjustesParaLlegarASaldosFiscales3 || 0);

            content.Activos.ActivosBiologicos.PlantasProductorasCultivosConsumibles.CultivosConsumiblesMedidosAlValorRazonableMenosCostosDeVenta.MenorValorFiscal = (detContent?.Renglon41?.["1620PlantasConsumiblesMedidosAlCosto"]?.PlantasConsumiblesMedidosAlValorRazonable?.ValorDelCosto?.AjustesParaLlegarASaldosFiscales1 || 0) + (detContent?.Renglon41?.["1620PlantasConsumiblesMedidosAlCosto"]?.PlantasConsumiblesMedidosAlValorRazonable?.Revaluaciones?.AjustesParaLlegarASaldosFiscales1 || 0);

            // Activos - OtrosActivos - ActivosPlanBeneficiosEmpleados

            content.Activos.OtrosActivos.ActivosPlanBeneficiosEmpleados.ValorContable = (detContent?.Renglon43?.["1850OtrosActivosPlanDeBeneficiosAEmpleados"]?.SaldosContablesADiciembre31Parciales || 0);

            content.Activos.OtrosActivos.ActivosPlanBeneficiosEmpleados.MenorValorFiscal = (detContent?.Renglon43?.["1850OtrosActivosPlanDeBeneficiosAEmpleados"]?.AjustesParaLlegarASaldosFiscales3 || 0);

            content.Activos.OtrosActivos.ActivosPlanBeneficiosEmpleados.MenorValorFiscal = (detContent?.Renglon43?.["1850OtrosActivosPlanDeBeneficiosAEmpleados"]?.AjustesParaLlegarASaldosFiscales1 || 0);

            // Activos - OtrosActivos - ActivosReconocidosSolamenteFinesFiscales

            content.Activos.OtrosActivos.ActivosReconocidosSolamenteFinesFiscales.MenorValorFiscal = (detContent?.Renglon43?.CargosDiferidosEIntangiblesQueSoloSonFiscales?.ValorDelCosto?.SaldosFiscales || 0) + (detContent?.Renglon43?.CargosDiferidosEIntangiblesQueSoloSonFiscales?.AmortizacionAcumulada?.SaldosFiscales || 0);

            // Pasivos - ObligacionesFinancierasCuentasPorPagar - ObligacionesFinancierasEnMonedaLocal

            content.Pasivos.ObligacionesFinancierasCuentasPorPagar.ObligacionesFinancierasEnMonedaLocal.ValorContable = (detContent?.Renglon45?.["2105BancosNacionales"]?.SaldosContablesADiciembre31Parciales || 0) - (detContent?.Renglon45?.["2115CorporacionesFinancieras"]?.EnColombia?.AjustesParaLlegarASaldosFiscales1 || 0);

            content.Pasivos.ObligacionesFinancierasCuentasPorPagar.ObligacionesFinancierasEnMonedaLocal.MenorValorFiscal = (detContent?.Renglon45?.["2105BancosNacionales"]?.AjustesParaLlegarASaldosFiscales3 || 0) - (detContent?.Renglon45?.["2115CorporacionesFinancieras"]?.EnColombia?.AjustesParaLlegarASaldosFiscales3 || 0);

            content.Pasivos.ObligacionesFinancierasCuentasPorPagar.ObligacionesFinancierasEnMonedaLocal.MenorValorFiscal = (detContent?.Renglon45?.["2105BancosNacionales"]?.AjustesParaLlegarASaldosFiscales1 || 0) - (detContent?.Renglon45?.["2115CorporacionesFinancieras"]?.EnColombia?.AjustesParaLlegarASaldosFiscales1 || 0);

            // Pasivos - ObligacionesFinancierasCuentasPorPagar - ObligacionesFinancierasEnMonedaExtranjera

            content.Pasivos.ObligacionesFinancierasCuentasPorPagar.ObligacionesFinancierasEnMonedaExtranjera.ValorContable = (detContent?.Renglon45?.["2110BancosDelExterior"]?.SaldosContablesADiciembre31Parciales || 0);

            content.Pasivos.ObligacionesFinancierasCuentasPorPagar.ObligacionesFinancierasEnMonedaExtranjera.MenorValorFiscal = (detContent?.Renglon45?.["2110BancosDelExterior"]?.AjustesParaLlegarASaldosFiscales3 || 0);

            content.Pasivos.ObligacionesFinancierasCuentasPorPagar.ObligacionesFinancierasEnMonedaExtranjera.MenorValorFiscal = (detContent?.Renglon45?.["2110BancosDelExterior"]?.AjustesParaLlegarASaldosFiscales1 || 0);

            // Pasivos - ObligacionesFinancierasCuentasPorPagar - CuentasPorPagarASociosAccionistasOParticipes

            content.Pasivos.ObligacionesFinancierasCuentasPorPagar.CuentasPorPagarASociosAccionistasOParticipes.MenorValorFiscal = (detContent?.Renglon45?.["2355DeudasConSociedadesDondeSeSocioOAccionista"]?.AjustesParaLlegarASaldosFiscales3 || 0);

            content.Pasivos.ObligacionesFinancierasCuentasPorPagar.CuentasPorPagarASociosAccionistasOParticipes.MenorValorFiscal = (detContent?.Renglon45?.["2355DeudasConSociedadesDondeSeSocioOAccionista"]?.AjustesParaLlegarASaldosFiscales1 || 0);

            // Pasivos - ObligacionesFinancierasCuentasPorPagar - RecaudoAFavorDeTerceros

            content.Pasivos.ObligacionesFinancierasCuentasPorPagar.RecaudoAFavorDeTerceros.ValorContable = (detContent?.Renglon45?.["2815IngresosRecibidosParaTerceros"]?.SaldosContablesADiciembre31Parciales || 0);

            content.Pasivos.ObligacionesFinancierasCuentasPorPagar.RecaudoAFavorDeTerceros.MenorValorFiscal = (detContent?.Renglon45?.["2815IngresosRecibidosParaTerceros"]?.AjustesParaLlegarASaldosFiscales3 || 0);

            content.Pasivos.ObligacionesFinancierasCuentasPorPagar.RecaudoAFavorDeTerceros.MenorValorFiscal = (detContent?.Renglon45?.["2815IngresosRecibidosParaTerceros"]?.AjustesParaLlegarASaldosFiscales1 || 0);

            // Pasivos - ObligacionesFinancierasCuentasPorPagar - OtrasCuentasYDocumentosPorPagarEnMonedaLocal

            content.Pasivos.ObligacionesFinancierasCuentasPorPagar.OtrasCuentasYDocumentosPorPagarEnMonedaLocal.ValorContable = (detContent?.Renglon45?.["2355DeudasConSociedadesDondeSeSocioOAccionista"]?.SaldosContablesADiciembre31Parciales || 0);

            content.Pasivos.ObligacionesFinancierasCuentasPorPagar.OtrasCuentasYDocumentosPorPagarEnMonedaLocal.MenorValorFiscal = (detContent?.Renglon45?.["2355DeudasConSociedadesDondeSeSocioOAccionista"]?.AjustesParaLlegarASaldosFiscales3 || 0);

            content.Pasivos.ObligacionesFinancierasCuentasPorPagar.OtrasCuentasYDocumentosPorPagarEnMonedaLocal.MenorValorFiscal = (detContent?.Renglon45?.["2355DeudasConSociedadesDondeSeSocioOAccionista"]?.AjustesParaLlegarASaldosFiscales1 || 0);

            // Pasivos - ImpuestosGravamenesTasasPorPagar - ImpuestoRenta

            content.Pasivos.ImpuestosGravamenesTasasPorPagar.ImpuestoRenta.ValorContable = (detContent?.Renglon45?.["2404ImpuestoPorPagarDeRentaYComplementarios"]?.SaldosContablesADiciembre31Parciales || 0);

            content.Pasivos.ImpuestosGravamenesTasasPorPagar.ImpuestoRenta.MenorValorFiscal = (detContent?.Renglon45?.["2404ImpuestoPorPagarDeRentaYComplementarios"]?.AjustesParaLlegarASaldosFiscales3 || 0);

            content.Pasivos.ImpuestosGravamenesTasasPorPagar.ImpuestoRenta.MenorValorFiscal = (detContent?.Renglon45?.["2404ImpuestoPorPagarDeRentaYComplementarios"]?.AjustesParaLlegarASaldosFiscales1 || 0);

            // Pasivos - ImpuestosGravamenesTasasPorPagar - IVA

            content.Pasivos.ImpuestosGravamenesTasasPorPagar.IVA.ValorContable = (detContent?.Renglon45?.["2408ImpuestosSobreLasVentas"]?.SaldosContablesADiciembre31Parciales || 0);

            content.Pasivos.ImpuestosGravamenesTasasPorPagar.IVA.MenorValorFiscal = (detContent?.Renglon45?.["2408ImpuestosSobreLasVentas"]?.AjustesParaLlegarASaldosFiscales3 || 0);

            content.Pasivos.ImpuestosGravamenesTasasPorPagar.IVA.MenorValorFiscal = (detContent?.Renglon45?.["2408ImpuestosSobreLasVentas"]?.AjustesParaLlegarASaldosFiscales1 || 0);

            // Pasivos - ImpuestosGravamenesTasasPorPagar - Otrosimpuestos

            content.Pasivos.ImpuestosGravamenesTasasPorPagar.Otrosimpuestos.ValorContable = (detContent?.Renglon45?.["2412OtrosImpuestosPorPagar"]?.SaldosContablesADiciembre31Parciales || 0);

            content.Pasivos.ImpuestosGravamenesTasasPorPagar.Otrosimpuestos.MenorValorFiscal = (detContent?.Renglon45?.["2412OtrosImpuestosPorPagar"]?.AjustesParaLlegarASaldosFiscales3 || 0);

            content.Pasivos.ImpuestosGravamenesTasasPorPagar.Otrosimpuestos.MenorValorFiscal = (detContent?.Renglon45?.["2412OtrosImpuestosPorPagar"]?.AjustesParaLlegarASaldosFiscales1 || 0);

            // Pasivos - PasivosImpuestosDiferidos

            content.Pasivos.PasivosImpuestosDiferidos.ValorContable = (detContent?.Renglon35?.["520578SENA"]?.SaldosContablesADiciembre31Parciales || 0);

            // Pasivos - PasivosBeneficiosEmpleados - CortoPlazo

            content.Pasivos.PasivosBeneficiosEmpleados.CortoPlazo.ValorContable = (detContent?.Renglon45?.["2505SalariosPorPagar"]?.SaldosContablesADiciembre31Parciales || 0) + (detContent?.Renglon45?.["2510CesantiasConsolidadas"]?.SaldosContablesADiciembre31Parciales || 0) + (detContent?.Renglon45?.["2515InteresdeCesantias"]?.SaldosContablesADiciembre31Parciales || 0) + (detContent?.Renglon45?.["2525VacacionesConsolidadas"]?.SaldosContablesADiciembre31Parciales || 0) + (detContent?.Renglon45?.["2530PrestacionesExtralegales"]?.SaldosContablesADiciembre31Parciales || 0);

            content.Pasivos.PasivosBeneficiosEmpleados.CortoPlazo.MenorValorFiscal = (detContent?.Renglon45?.["2505SalariosPorPagar"]?.AjustesParaLlegarASaldosFiscales3 || 0) + (detContent?.Renglon45?.["2510CesantiasConsolidadas"]?.AjustesParaLlegarASaldosFiscales3 || 0) + (detContent?.Renglon45?.["2515InteresdeCesantias"]?.AjustesParaLlegarASaldosFiscales3 || 0) + (detContent?.Renglon45?.["2525VacacionesConsolidadas"]?.AjustesParaLlegarASaldosFiscales3 || 0) + (detContent?.Renglon45?.["2530PrestacionesExtralegales"]?.AjustesParaLlegarASaldosFiscales3 || 0);

            content.Pasivos.PasivosBeneficiosEmpleados.CortoPlazo.MenorValorFiscal = (detContent?.Renglon45?.["2505SalariosPorPagar"]?.AjustesParaLlegarASaldosFiscales1 || 0) + (detContent?.Renglon45?.["2510CesantiasConsolidadas"]?.AjustesParaLlegarASaldosFiscales1 || 0) + (detContent?.Renglon45?.["2515InteresdeCesantias"]?.AjustesParaLlegarASaldosFiscales1 || 0) + (detContent?.Renglon45?.["2525VacacionesConsolidadas"]?.AjustesParaLlegarASaldosFiscales1 || 0) + (detContent?.Renglon45?.["2530PrestacionesExtralegales"]?.AjustesParaLlegarASaldosFiscales1 || 0);

            // Pasivos - Provisiones - mantenimientoYReparaciones

            content.Pasivos.Provisiones.mantenimientoYReparaciones.ValorContable = (detContent?.Renglon45?.["2605ProvisionParaCostosYGastos"]?.SaldosContablesADiciembre31Parciales || 0);

            // Pasivos - PasivosIngresosDiferidos - AnticiposYAvancesRecibidosDeClientes

            content.Pasivos.PasivosIngresosDiferidos.AnticiposYAvancesRecibidosDeClientes.ValorContable = (detContent?.Renglon45?.["2805AnticiposYAvancesRecibidos"]?.SaldosContablesADiciembre31Parciales || 0);

            content.Pasivos.PasivosIngresosDiferidos.AnticiposYAvancesRecibidosDeClientes.MenorValorFiscal = (detContent?.Renglon45?.["2805AnticiposYAvancesRecibidos"]?.AjustesParaLlegarASaldosFiscales3 || 0);

            content.Pasivos.PasivosIngresosDiferidos.AnticiposYAvancesRecibidosDeClientes.MenorValorFiscal = (detContent?.Renglon45?.["2805AnticiposYAvancesRecibidos"]?.AjustesParaLlegarASaldosFiscales1 || 0);

            // Pasivos - PasivosIngresosDiferidos - OtrosPasivosPorIngresosDiferidos

            content.Pasivos.PasivosIngresosDiferidos.OtrosPasivosPorIngresosDiferidos.MenorValorFiscal = (detContent?.Renglon45?.["2816PasivoPorIngresoDiferido"]?.AjustesParaLlegarASaldosFiscales3 || 0);

            content.Pasivos.PasivosIngresosDiferidos.OtrosPasivosPorIngresosDiferidos.MenorValorFiscal = (detContent?.Renglon45?.["2816PasivoPorIngresoDiferido"]?.AjustesParaLlegarASaldosFiscales1 || 0);

            // Pasivos - OtrosPasivos - DepositosRecibidos

            content.Pasivos.OtrosPasivos.DepositosRecibidos.ValorContable = (detContent?.Renglon45?.["2810DepositosRecibidos"]?.SaldosContablesADiciembre31Parciales || 0);

            content.Pasivos.OtrosPasivos.DepositosRecibidos.MenorValorFiscal = (detContent?.Renglon45?.["2810DepositosRecibidos"]?.AjustesParaLlegarASaldosFiscales3 || 0);

            content.Pasivos.OtrosPasivos.DepositosRecibidos.MenorValorFiscal = (detContent?.Renglon45?.["2810DepositosRecibidos"]?.AjustesParaLlegarASaldosFiscales1 || 0);

            // Pasivos - OtrosPasivos - RetencionesATercerosSobreContratos

            content.Pasivos.OtrosPasivos.RetencionesATercerosSobreContratos.ValorContable = (detContent?.Renglon45?.["2825RetencionesATercerosContratos"]?.SaldosContablesADiciembre31Parciales || 0);

            content.Pasivos.OtrosPasivos.RetencionesATercerosSobreContratos.MenorValorFiscal = (detContent?.Renglon45?.["2825RetencionesATercerosContratos"]?.AjustesParaLlegarASaldosFiscales3 || 0);

            content.Pasivos.OtrosPasivos.RetencionesATercerosSobreContratos.MenorValorFiscal = (detContent?.Renglon45?.["2825RetencionesATercerosContratos"]?.AjustesParaLlegarASaldosFiscales1 || 0);

            // Pasivos - OtrosPasivos - CuentasEnParticipacion

            content.Pasivos.OtrosPasivos.CuentasEnParticipacion.ValorContable = (detContent?.Renglon45?.["2840CuentasEnParticipacion"]?.SaldosContablesADiciembre31Parciales || 0);

            content.Pasivos.OtrosPasivos.CuentasEnParticipacion.MenorValorFiscal = (detContent?.Renglon45?.["2840CuentasEnParticipacion"]?.AjustesParaLlegarASaldosFiscales3 || 0);

            content.Pasivos.OtrosPasivos.CuentasEnParticipacion.MenorValorFiscal = (detContent?.Renglon45?.["2840CuentasEnParticipacion"]?.AjustesParaLlegarASaldosFiscales1 || 0);

            // Pasivos - OtrosPasivos - OtrosPasivos
            //TODO: revisar bien esta despues cuando se pruebe

            content.Pasivos.OtrosPasivos.OtrosPasivos.ValorContable = (detContent?.Renglon45?.TotalPasivosSaldosContablesADiciembre31 || 0) - (content?.Pasivos?.ObligacionesFinancierasCuentasPorPagar?.Total?.ValorContable || 0) - (content?.Pasivos?.ArrendamientosPorPagar?.Total?.ValorContable || 0) - (content?.Pasivos?.OtrosPasivosFinancieros?.Total?.ValorContable || 0) - (content?.Pasivos?.ImpuestosGravamenesTasasPorPagar?.Total?.ValorContable || 0) - (content?.Pasivos?.PasivosImpuestosDiferidos?.Total?.ValorContable || 0) - (content?.Pasivos?.PasivosBeneficiosEmpleados?.Total?.ValorContable || 0) - (content?.Pasivos?.Provisiones?.Total?.ValorContable || 0) - (content?.Pasivos?.PasivosIngresosDiferidos?.Total?.ValorContable || 0) - (content?.Pasivos?.OtrosPasivos?.DepositosRecibidos?.ValorContable || 0) - (content?.Pasivos?.OtrosPasivos?.RetencionesATercerosSobreContratos?.ValorContable || 0) - (content?.Pasivos?.OtrosPasivos?.EmbargosJudiciales?.ValorContable || 0) - (content?.Pasivos?.OtrosPasivos?.CuentasEnParticipacion?.ValorContable || 0) - (content?.Pasivos?.OtrosPasivos?.PasivoParaEjecucionDeExcedentesESAL?.ValorContable || 0) - (content?.Pasivos?.OtrosPasivos?.FondosSocialesMutualesYOtros?.ValorContable || 0);

            content.Pasivos.OtrosPasivos.OtrosPasivos.ValorFiscal = (detContent?.Renglon45?.TotalPasivosSaldosFiscalesADiciembre31 || 0) - (content?.Pasivos?.ObligacionesFinancierasCuentasPorPagar?.Total?.ValorFiscal || 0) - (content?.Pasivos?.ArrendamientosPorPagar?.Total?.ValorFiscal || 0) - (content?.Pasivos?.OtrosPasivosFinancieros?.Total?.ValorFiscal || 0) - (content?.Pasivos?.ImpuestosGravamenesTasasPorPagar?.Total?.ValorFiscal || 0) - (content?.Pasivos?.PasivosImpuestosDiferidos?.Total?.ValorFiscal || 0) - (content?.Pasivos?.PasivosBeneficiosEmpleados?.Total?.ValorFiscal || 0) - (content?.Pasivos?.Provisiones?.Total?.ValorFiscal || 0) - (content?.Pasivos?.PasivosIngresosDiferidos?.Total?.ValorFiscal || 0) - (content?.Pasivos?.OtrosPasivos?.DepositosRecibidos?.ValorFiscal || 0) - (content?.Pasivos?.OtrosPasivos?.RetencionesATercerosSobreContratos?.ValorFiscal || 0) - (content?.Pasivos?.OtrosPasivos?.EmbargosJudiciales?.ValorFiscal || 0) - (content?.Pasivos?.OtrosPasivos?.CuentasEnParticipacion?.ValorFiscal || 0) - (content?.Pasivos?.OtrosPasivos?.PasivoParaEjecucionDeExcedentesESAL?.ValorFiscal || 0) - (content?.Pasivos?.OtrosPasivos?.FondosSocialesMutualesYOtros?.ValorFiscal || 0);

            // PatrimonioContable - CapitalSocialReservas - CapitalPagado

            content.PatrimonioContable.CapitalSocialReservas.CapitalPagado.ValorContable = (detContent?.Renglon46?.["3130CapitalDePersonasNaturales"]?.SaldosContablesADiciembre31Parciales || 0);

            // PatrimonioContable - CapitalSocialReservas - SuperavitRevaluaciones

            content.PatrimonioContable.CapitalSocialReservas.SuperavitRevaluaciones.ValorContable = (detContent?.Renglon46?.["3805Superavit"]?.PorRevaluaciones?.SaldosContablesADiciembre31Parciales || 0);

            // PatrimonioContable - CapitalSocialReservas - SuperavitMetodoParticipacion

            content.PatrimonioContable.CapitalSocialReservas.SuperavitMetodoParticipacion.ValorContable = (detContent?.Renglon46?.["3805Superavit"]?.PorMetodoDeParticipacion?.SaldosContablesADiciembre31Parciales || 0);

            // PatrimonioContable - ResultadoEjercicio - UtilidadOExcedenteDelEjercicioEnOperacionesContinuadas

            content.PatrimonioContable.ResultadoEjercicio.UtilidadOExcedenteDelEjercicioEnOperacionesContinuadas.ValorContable = (detContent?.Renglon46?.["3605ResultadoDelEjercicio"]?.UtilidadDespuesDeImpuestos?.SaldosContablesADiciembre31Parciales || 0);

            // PatrimonioContable - ResultadoEjercicio - PerdidaODeficitDelEjercicioEnOperacionesContinuadas

            content.PatrimonioContable.ResultadoEjercicio.PerdidaODeficitDelEjercicioEnOperacionesContinuadas.ValorContable = (-detContent?.Renglon46?.["3605ResultadoDelEjercicio"]?.PerdidaDespuesDeImpuestos?.SaldosContablesADiciembre31Parciales || 0);

            // PatrimonioContable - ResultadosAcumulados - UtilidadesOExcedentesAcumuladosSusceptiblesDeDistribucionATituloDeNoConstitutivoDeRentaNiGananciaOcasional

            content.PatrimonioContable.ResultadosAcumulados.UtilidadesOExcedentesAcumuladosSusceptiblesDeDistribucionATituloDeNoConstitutivoDeRentaNiGananciaOcasional.ValorContable = (detContent?.Renglon46?.["3705UtilidadesDePeriodosAnteriores"]?.SaldosContablesADiciembre31Parciales || 0);

            // PatrimonioContable - ResultadosAcumulados - PerdidasODeficitAcumulados

            content.PatrimonioContable.ResultadosAcumulados.PerdidasODeficitAcumulados.ValorContable = (-detContent?.Renglon46?.["3710PerdidasDeEjerciciosAnteriores"]?.SaldosContablesADiciembre31Parciales || 0);

            // PatrimonioContable - GananciasPerdidasAcumuladasRetenidasAdopcionPrimera - GananciasPrimeraVez

            content.PatrimonioContable.GananciasPerdidasAcumuladasRetenidasAdopcionPrimera.GananciasPrimeraVez.ValorContable = (detContent?.Renglon46?.["3715GananciasPerdidasAcumuladasORetenidasPorLaAdopcionPorPrimera"]?.GananciasAcumuladas?.SaldosContablesADiciembre31Parciales || 0);

            // PatrimonioContable - GananciasPerdidasAcumuladasRetenidasAdopcionPrimera - PerdidasPrimeraVez

            content.PatrimonioContable.GananciasPerdidasAcumuladasRetenidasAdopcionPrimera.PerdidasPrimeraVez.ValorContable = (detContent?.Renglon46?.["3715GananciasPerdidasAcumuladasORetenidasPorLaAdopcionPorPrimera"]?.PerdidasAcumuladas?.SaldosContablesADiciembre31Parciales || 0);

            // PatrimonioContable - OtroResultadoIntegralAcumulado - GananciasAcomuladasORI

            content.PatrimonioContable.OtroResultadoIntegralAcumulado.GananciasAcomuladasORI.ValorContable = (detContent?.Renglon46?.["3720OtroResultadoIntegralAcumulado"]?.GananciasAcumuladasORI?.SaldosContablesADiciembre31Parciales || 0);

            // PatrimonioContable - OtroResultadoIntegralAcumulado - PerdidasAcumuladasORI

            content.PatrimonioContable.OtroResultadoIntegralAcumulado.PerdidasAcumuladasORI.ValorContable = (-detContent?.Renglon46?.["3720OtroResultadoIntegralAcumulado"]?.PerdidasAcumuladasORI?.SaldosContablesADiciembre31Parciales || 0);

        }
        return esfPatrimonio;
    }
}