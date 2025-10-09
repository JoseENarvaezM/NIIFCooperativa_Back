import { Form110GatewayAdapter } from "../../../src/infrastructure/output/persistence/gateway/Form110GatewayAdapter";
import prisma from "../../../src/config/database";

jest.mock("../../../src/config/database", () => ({
  __esModule: true,
  default: {
    report: {
      findFirst: jest.fn(),
    },
    formr110: {
      findUnique: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
    },
    formdetallerenglones: {
      findUnique: jest.fn(),
    },
    formcaratula: {
      findUnique: jest.fn(),
    },
  },
}));

describe("Form110GatewayAdapter", () => {
  let adapter: Form110GatewayAdapter;

  beforeEach(() => {
    adapter = new Form110GatewayAdapter();
    jest.clearAllMocks();
  });

  describe("getIDForm", () => {
    it("debería retornar el formulario 110 cuando existe", async () => {
      // Arrange
      const mockReport = { reportID: "rep1", r110ID: "r110-1", stuID: "stu1", roomID: "room1" };
      const mockForm110 = { r110ID: "r110-1", r110Content: { DeclaracionDeRentaYComplementarioParaPersonasJuridicasYAsimiladas: {} } };

      (prisma.report.findFirst as jest.Mock).mockResolvedValue(mockReport);
      (prisma.formr110.findUnique as jest.Mock).mockResolvedValue(mockForm110);

      // Act
      const result = await adapter.getIDForm("stu1", "room1");

      // Assert
      expect(result).toEqual(mockForm110);
      expect(prisma.report.findFirst).toHaveBeenCalledWith({
        where: { stuID: "stu1", roomID: "room1" },
      });
      expect(prisma.formr110.findUnique).toHaveBeenCalledWith({
        where: { r110ID: "r110-1" },
      });
    });

    it("debería retornar null cuando no existe el formulario 110", async () => {
      // Arrange
      const mockReport = { reportID: "rep1", r110ID: "r110-1", stuID: "stu1", roomID: "room1" };

      (prisma.report.findFirst as jest.Mock).mockResolvedValue(mockReport);
      (prisma.formr110.findUnique as jest.Mock).mockResolvedValue(null);

      // Act
      const result = await adapter.getIDForm("stu1", "room1");

      // Assert
      expect(result).toBeNull();
    });

  });

  describe("createForm", () => {
    it("debería crear un formulario 110 exitosamente", async () => {
      // Arrange
      const mockFormData = {
        r110Content: {
          DeclaracionDeRentaYComplementarioParaPersonasJuridicasYAsimiladas: {
            Año: 2024,
            DatosDelDeclarante: { NIT: "900123456", DV: 7 },
          },
        },
      };
      const mockCreatedForm = { r110ID: "r110-1", ...mockFormData };

      (prisma.formr110.create as jest.Mock).mockResolvedValue(mockCreatedForm);

      // Act
      const result = await adapter.createForm(mockFormData as any);

      // Assert
      expect(result).toEqual(mockCreatedForm);
      expect(prisma.formr110.create).toHaveBeenCalledWith({
        data: {
          r110Content: mockFormData.r110Content,
        },
      });
    });

    it("debería crear un formulario con contenido vacío", async () => {
      // Arrange
      const mockFormData = { r110Content: {} };
      const mockCreatedForm = { r110ID: "r110-1", r110Content: {} };

      (prisma.formr110.create as jest.Mock).mockResolvedValue(mockCreatedForm);

      // Act
      const result = await adapter.createForm(mockFormData as any);

      // Assert
      expect(result).toEqual(mockCreatedForm);
    });

    it("debería crear formulario con todos los datos informativos", async () => {
      // Arrange
      const mockFormData = {
        r110Content: {
          DatosResumen: {
            DatosInformativos: {
              TotalCostosGastosDeNomina: 50000000,
              AportesAlSistemaDeSeguridadSocial: 10000000,
              AportacionesSENAICBFCajasCompensacion: 2000000,
            },
          },
        },
      };
      const mockCreatedForm = { r110ID: "r110-1", ...mockFormData };

      (prisma.formr110.create as jest.Mock).mockResolvedValue(mockCreatedForm);

      // Act
      const result = await adapter.createForm(mockFormData as any);

      // Assert
      expect(result).toEqual(mockCreatedForm);
    });
  });

  describe("updateForm", () => {
    it("debería actualizar el formulario 110 exitosamente", async () => {
      // Arrange
      const mockReport = { reportID: "rep1", r110ID: "r110-1", stuID: "stu1", roomID: "room1" };
      const mockFormData = {
        r110Content: {
          DatosResumen: { Patromonio: { TotalPatrimonioBruto: 100000000 } },
        },
      };
      const mockUpdatedForm = { r110ID: "r110-1", ...mockFormData };

      (prisma.report.findFirst as jest.Mock).mockResolvedValue(mockReport);
      (prisma.formr110.update as jest.Mock).mockResolvedValue(mockUpdatedForm);

      // Act
      const result = await adapter.updateForm("stu1", "room1", mockFormData as any);

      // Assert
      expect(result).toEqual(mockUpdatedForm);
      expect(prisma.formr110.update).toHaveBeenCalledWith({
        where: { r110ID: "r110-1" },
        data: {
          r110Content: mockFormData,
        },
      });
    });

    it("debería manejar actualización cuando el reporte no existe", async () => {
      // Arrange
      (prisma.report.findFirst as jest.Mock).mockResolvedValue(null);
      (prisma.formr110.update as jest.Mock).mockResolvedValue(null);

      // Act
      const result = await adapter.updateForm("stu999", "room999", { r110Content: {} } as any);

      // Assert
      expect(prisma.formr110.update).toHaveBeenCalledWith({
        where: { r110ID: undefined },
        data: { r110Content: { r110Content: {} } },
      });
    });

    it("debería actualizar formulario con cambios parciales en liquidación", async () => {
      // Arrange
      const mockReport = { reportID: "rep1", r110ID: "r110-1", stuID: "stu1", roomID: "room1" };
      const mockFormData = {
        r110Content: {
          DatosResumen: {
            LiquidacionPrivada: {
              TotalImpuestoACargo: 15000000,
              Sanciones: 500000,
            },
          },
        },
      };
      const mockUpdatedForm = { r110ID: "r110-1", ...mockFormData };

      (prisma.report.findFirst as jest.Mock).mockResolvedValue(mockReport);
      (prisma.formr110.update as jest.Mock).mockResolvedValue(mockUpdatedForm);

      // Act
      const result = await adapter.updateForm("stu1", "room1", mockFormData as any);

      // Assert
      expect(result).toEqual(mockUpdatedForm);
    });
  });

  describe("calculateReference", () => {
    it("debería retornar el formulario sin cambios cuando no hay contenido", async () => {
      // Arrange
      const mockReport = { reportID: "rep1", r110ID: "r110-1", stuID: "stu1", roomID: "room1" };
      const mockForm110 = { r110ID: "r110-1", r110Content: null };

      (prisma.report.findFirst as jest.Mock).mockResolvedValue(mockReport);
      (prisma.formr110.findUnique as jest.Mock).mockResolvedValue(mockForm110);

      // Act
      const result = await adapter.calculateReference("stu1", "room1");

      // Assert
      expect(result).toEqual(mockForm110);
    });
    it("debería retornar null cuando no existe el formulario", async () => {
      // Arrange
      const mockReport = { reportID: "rep1", r110ID: "r110-1", stuID: "stu1", roomID: "room1" };

      (prisma.report.findFirst as jest.Mock).mockResolvedValue(mockReport);
      (prisma.formr110.findUnique as jest.Mock).mockResolvedValue(null);

      // Act
      const result = await adapter.calculateReference("stu1", "room1");

      // Assert
      expect(result).toBeNull();
    });
  });
});
