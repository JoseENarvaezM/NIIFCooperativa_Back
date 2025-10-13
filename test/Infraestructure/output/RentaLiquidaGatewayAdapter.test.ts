import { RentaLiquidaGatewayAdapter } from "../../../src/infrastructure/output/persistence/gateway/RentaLiquidaGatewayAdapter";
import prisma from "../../../src/config/database";
import { FormRentaLiquida } from "../../../src/domain/models/FormRentaLiquidaModel";

jest.mock("../../../src/config/database", () => ({
  __esModule: true,
  default: {
    report: {
      findFirst: jest.fn(),
    },
    formrentaliquida: {
      findUnique: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
    },
    formdetallerenglones: {
      findUnique: jest.fn(),
    },
  },
}));

describe("RentaLiquidaGatewayAdapter", () => {
  let adapter: RentaLiquidaGatewayAdapter;

  beforeEach(() => {
    adapter = new RentaLiquidaGatewayAdapter();
    jest.clearAllMocks();
  });

  describe("getIDForm", () => {
    it("debería retornar el formulario de renta líquida cuando existe", async () => {
      // Arrange
      const mockReport = { renID: "ren1" };
      const mockFormRentaLiquida: FormRentaLiquida = {
        renID: "ren1",
        renContent: { Ingresos: {} },
      } as any;

      (prisma.report.findFirst as jest.Mock).mockResolvedValue(mockReport);
      (prisma.formrentaliquida.findUnique as jest.Mock).mockResolvedValue(mockFormRentaLiquida);

      // Act
      const result = await adapter.getIDForm("stu1", "room1");

      // Assert
      expect(result).toEqual(mockFormRentaLiquida);
      expect(prisma.report.findFirst).toHaveBeenCalledWith({
        where: { stuID: "stu1", roomID: "room1" },
      });
    });

    it("debería retornar null cuando no existe el reporte", async () => {
      // Arrange
      (prisma.report.findFirst as jest.Mock).mockResolvedValue(null);
      (prisma.formrentaliquida.findUnique as jest.Mock).mockResolvedValue(null);

      // Act
      const result = await adapter.getIDForm("stu1", "room1");

      // Assert
      expect(result).toBeNull();
    });
  });

  describe("createForm", () => {
    it("debería crear un nuevo formulario de renta líquida", async () => {
      // Arrange
      const mockForm: FormRentaLiquida = {
        renID: "ren1",
        renContent: { Ingresos: {} },
      } as any;

      (prisma.formrentaliquida.create as jest.Mock).mockResolvedValue(mockForm);

      // Act
      const result = await adapter.createForm(mockForm);

      // Assert
      expect(result).toEqual(mockForm);
      expect(prisma.formrentaliquida.create).toHaveBeenCalledWith({
        data: {
          renContent: mockForm.renContent,
        },
      });
    });
  });

  describe("updateForm", () => {
    it("debería actualizar el formulario existente", async () => {
      // Arrange
      const mockReport = { renID: "ren1" };
      const mockForm: FormRentaLiquida = {
        renID: "ren1",
        renContent: { Ingresos: {} },
      } as any;

      (prisma.report.findFirst as jest.Mock).mockResolvedValue(mockReport);
      (prisma.formrentaliquida.update as jest.Mock).mockResolvedValue(mockForm);

      // Act
      const result = await adapter.updateForm("stu1", "room1", mockForm);

      // Assert
      expect(result).toEqual(mockForm);
      expect(prisma.formrentaliquida.update).toHaveBeenCalledWith({
        where: { renID: "ren1" },
        data: {
          renContent: mockForm,
        },
      });
    });
  });

  describe("calculateReference", () => {


    it("debería retornar null cuando no existe el formulario", async () => {
      // Arrange
      const mockReport = { renID: "ren1" };

      (prisma.report.findFirst as jest.Mock).mockResolvedValue(mockReport);
      (prisma.formrentaliquida.findUnique as jest.Mock).mockResolvedValue(null);

      // Act
      const result = await adapter.calculateReference("stu1", "room1");

      // Assert
      expect(result).toBeNull();
    });
  });
});
