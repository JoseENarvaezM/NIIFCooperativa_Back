import { CaratulaGatewayAdapter } from "../../../src/infrastructure/output/persistence/gateway/CaratulaGatewayAdapter";
import prisma from "../../../src/config/database";
import { FormCaratula } from "../../../src/domain/models/FormCaratulaModel";

jest.mock("../../../src/config/database", () => ({
  __esModule: true,
  default: {
    report: {
      findFirst: jest.fn(),
    },
    formcaratula: {
      findUnique: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
    },
  },
}));

describe("CaratulaGatewayAdapter", () => {
  let adapter: CaratulaGatewayAdapter;

  beforeEach(() => {
    adapter = new CaratulaGatewayAdapter();
    jest.clearAllMocks();
  });

  describe("getIDForm", () => {
    it("debería retornar el formulario de carátula cuando existe", async () => {
      // Arrange
      const mockReport = { carID: "car1" };
      const mockFormCaratula: FormCaratula = {
        carID: "car1",
        carContent: { datos: "test" },
      } as any;

      (prisma.report.findFirst as jest.Mock).mockResolvedValue(mockReport);
      (prisma.formcaratula.findUnique as jest.Mock).mockResolvedValue(mockFormCaratula);

      // Act
      const result = await adapter.getIDForm("stu1", "room1");

      // Assert
      expect(result).toEqual(mockFormCaratula);
      expect(prisma.report.findFirst).toHaveBeenCalledWith({
        where: { stuID: "stu1", roomID: "room1" },
      });
    });

    it("debería retornar null cuando no existe el reporte", async () => {
      // Arrange
      (prisma.report.findFirst as jest.Mock).mockResolvedValue(null);
      (prisma.formcaratula.findUnique as jest.Mock).mockResolvedValue(null);

      // Act
      const result = await adapter.getIDForm("stu1", "room1");

      // Assert
      expect(result).toBeNull();
    });
  });

  describe("createForm", () => {
    it("debería crear un nuevo formulario de carátula", async () => {
      // Arrange
      const mockForm: FormCaratula = {
        carID: "car1",
        carContent: { datos: "test" },
      } as any;

      (prisma.formcaratula.create as jest.Mock).mockResolvedValue(mockForm);

      // Act
      const result = await adapter.createForm(mockForm);

      // Assert
      expect(result).toEqual(mockForm);
      expect(prisma.formcaratula.create).toHaveBeenCalledWith({
        data: {
          carContent: mockForm.carContent,
        },
      });
    });
  });

  describe("updateForm", () => {
    it("debería actualizar el formulario existente", async () => {
      // Arrange
      const mockReport = { carID: "car1" };
      const mockForm: FormCaratula = {
        carID: "car1",
        carContent: { datos: "actualizado" },
      } as any;

      (prisma.report.findFirst as jest.Mock).mockResolvedValue(mockReport);
      (prisma.formcaratula.update as jest.Mock).mockResolvedValue(mockForm);

      // Act
      const result = await adapter.updateForm("stu1", "room1", mockForm);

      // Assert
      expect(result).toEqual(mockForm);
      expect(prisma.formcaratula.update).toHaveBeenCalledWith({
        where: { carID: "car1" },
        data: {
          carContent: mockForm,
        },
      });
    });
  });

  describe("calculateReference", () => {
    it("debería retornar el formulario sin modificaciones", async () => {
      // Arrange
      const mockReport = { carID: "car1" };
      const mockFormCaratula: FormCaratula = {
        carID: "car1",
        carContent: { datos: "test" },
      } as any;

      (prisma.report.findFirst as jest.Mock).mockResolvedValue(mockReport);
      (prisma.formcaratula.findUnique as jest.Mock).mockResolvedValue(mockFormCaratula);

      // Act
      const result = await adapter.calculateReference("stu1", "room1");

      // Assert
      expect(result).toEqual(mockFormCaratula);
    });

    it("debería retornar null cuando no existe el formulario", async () => {
      // Arrange
      const mockReport = { carID: "car1" };

      (prisma.report.findFirst as jest.Mock).mockResolvedValue(mockReport);
      (prisma.formcaratula.findUnique as jest.Mock).mockResolvedValue(null);

      // Act
      const result = await adapter.calculateReference("stu1", "room1");

      // Assert
      expect(result).toBeNull();
    });
  });
});
