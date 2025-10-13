import { IngFactGatewayAdapter } from "../../../src/infrastructure/output/persistence/gateway/IngFactGatewayAdapter";
import prisma from "../../../src/config/database";

jest.mock("../../../src/config/database", () => ({
  __esModule: true,
  default: {
    report: {
      findFirst: jest.fn(),
    },
    formingresosfancturacion: {
      findUnique: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
    },
    formdetallerenglones: {
      findUnique: jest.fn(),
    },
  },
}));

describe("IngFactGatewayAdapter", () => {
  let adapter: IngFactGatewayAdapter;

  beforeEach(() => {
    adapter = new IngFactGatewayAdapter();
    jest.clearAllMocks();
  });

  describe("getIDForm", () => {
    it("debería retornar el formulario cuando existe", async () => {
      // Arrange
      const mockReport = { ingID: "ing1" };
      const mockFormIng = { ingID: "ing1", ingContent: {} };

      (prisma.report.findFirst as jest.Mock).mockResolvedValue(mockReport);
      (prisma.formingresosfancturacion.findUnique as jest.Mock).mockResolvedValue(mockFormIng);

      // Act
      const result = await adapter.getIDForm("stu1", "room1");

      // Assert
      expect(result).toEqual(mockFormIng);
    });

    it("debería retornar null cuando no existe el reporte", async () => {
      // Arrange
      (prisma.report.findFirst as jest.Mock).mockResolvedValue(null);
      (prisma.formingresosfancturacion.findUnique as jest.Mock).mockResolvedValue(null);

      // Act
      const result = await adapter.getIDForm("stu1", "room1");

      // Assert
      expect(result).toBeNull();
    });
  });

  describe("createForm", () => {
    it("debería crear un nuevo formulario", async () => {
      // Arrange
      const mockForm = { ingID: "ing1", ingContent: {} } as any;

      (prisma.formingresosfancturacion.create as jest.Mock).mockResolvedValue(mockForm);

      // Act
      const result = await adapter.createForm(mockForm);

      // Assert
      expect(result).toEqual(mockForm);
    });
  });

  describe("updateForm", () => {
    it("debería actualizar el formulario existente", async () => {
      // Arrange
      const mockReport = { ingID: "ing1" };
      const mockForm = { ingID: "ing1", ingContent: {} } as any;

      (prisma.report.findFirst as jest.Mock).mockResolvedValue(mockReport);
      (prisma.formingresosfancturacion.update as jest.Mock).mockResolvedValue(mockForm);

      // Act
      const result = await adapter.updateForm("stu1", "room1", mockForm);

      // Assert
      expect(result).toEqual(mockForm);
    });
  });

  describe("calculateReference", () => {

    it("debería retornar null cuando no existe el formulario", async () => {
      // Arrange
      const mockReport = { ingID: "ing1" };

      (prisma.report.findFirst as jest.Mock).mockResolvedValue(mockReport);
      (prisma.formingresosfancturacion.findUnique as jest.Mock).mockResolvedValue(null);

      // Act
      const result = await adapter.calculateReference("stu1", "room1");

      // Assert
      expect(result).toBeNull();
    });
  });
});
