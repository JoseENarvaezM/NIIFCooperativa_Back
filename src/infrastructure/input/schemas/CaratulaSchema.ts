import { z } from "zod";

export const CaratulaSchema = z.object({
  Año: z.number(),
  DatosDelDeclante: z.object({
    NumeroDeIdentificacionTributariaNIT: z.number(),
    DV: z.number(),
    PrimerApellido: z.string(),
    SegundoApellido: z.string(),
    PrimerNombre: z.string(),
    OtrosNombres: z.string(),
    RazonSocial: z.string(),
    CodigoDireccion: z.string()
  }),
  Tarifas: z.object({
    "Art240(Paragrafos1,2,4)": z.number(),
    Art2401ZonaFranca: z.number(),
    Art194240360: z.number(),
    MegainversionesHoteleras: z.number(),
    Megainversiones: z.number(),
    TarifGen: z.number(),
    Otra: z.number()
  }),
  DatosInformativos: z.object({
    PersonaNaturalSinResidencia: z.boolean(),
    ContribuyenteDelRegimenTributarioEspecial: z.boolean(),
    EntidadCooperativaArticulo19EstatutoTributario: z.boolean(),
    EntidadDelSectorFinanciero: z.boolean(),
    NuevaSociedadZOMAC: z.boolean(),
    ObrasPorImpuestos: z.boolean(),
    ProgramaDeReorganizacionEmpresarialDuranteElAñoGravable: z.boolean(),
    SociedadExternaQuePrestaServicioDeTransporteEntreLugaresColombianosYExtranjeros: z.boolean(),
    ObligadoAAplicarSistemasEspecialesDeCaloracionDeInversiones: z.boolean(),
    CostoDeLosInventariosEstablecidosPorElSistemaDeJuegoDeInventarios: z.boolean(),
    CostoDeLosInventariosEstablecidoSimultaneamentePorElJuegoDeInventariosYPorElSistemaDeJuegoDeInventarioPermanente: z.boolean(),
    ProgresividadDeLaTaridaDeImpuestoDeRentaOSociedadExtranjeraOEntidadExtranjeraSinSucursalOEstablecimientoPermanente: z.boolean(),
    ContratoDeEstabilidadJuridica: z.boolean(),
    MonedaFuncionalDiferenteAlPesoColombiano: z.boolean(),
    Megainversiones: z.boolean(),
    EmpresaDeEconomíaNaranja: z.boolean(),
    CompañiaHoldingColombiana: z.boolean(),
    ZonaEconomicaYSocialEspecial: z.boolean()
  }),
  NoIdentificacionSignatario: z.number(),
  CodigoRepresentacion: z.number(),
  CodigoContadorORevisorFiscal: z.number(),
  ConSalvedad: z.boolean(),
  NumeroDeTarjetaProfesional: z.number()
})

