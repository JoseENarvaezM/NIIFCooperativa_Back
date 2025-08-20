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

            //Quedo en G18 de ESF patrimonio
        }
        return esfPatrimonio;
    }
}