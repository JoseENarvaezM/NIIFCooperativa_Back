import { z } from "zod";

export const ReportSchema = z.object({
  repID: z.string().cuid(), 

  stuID: z.string().max(255),
  roomID: z.string().max(255),
  carID: z.string().max(255),
  detID: z.string().max(255),
  esfID: z.string().max(255),
  renID: z.string().max(255),
  impID: z.string().max(255),
  ingID: z.string().max(255),
  actID: z.string().max(255),
  resID: z.string().max(255),
  r110ID: z.string().max(255),

  formactivosfijos: z.any().optional(),
  formcaratula: z.any().optional(),
  formdetallerenglones: z.any().optional(),
  formesfpatrimonio: z.any().optional(),
  formimpuestodiferido: z.any().optional(),
  formingresosfancturacion: z.any().optional(),
  formr110: z.any().optional(),
  formrentaliquida: z.any().optional(),
  formresumenesferi: z.any().optional(),
  room: z.any().optional(),
  student: z.any().optional(),
});