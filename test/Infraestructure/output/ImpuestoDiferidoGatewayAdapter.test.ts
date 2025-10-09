import { ImpuestoDiferidoGatewayAdapter } from "../../../src/infrastructure/output/persistence/gateway/ImpuestoDiferidoGatewayAdapter";
import prisma from "../../../src/config/database";
import { FormImpuestoDiferido } from "../../../src/domain/models/FormImpuestoDiferidoModel";

jest.mock("../../../src/config/database", () => ({
  __esModule: true,
  default: {
    report: {
      findFirst: jest.fn(),
    },
    formimpuestodiferido: {
      findUnique: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
    },
    formesfpatrimonio: {
      findUnique: jest.fn(),
    },
  },
}));

describe("ImpuestoDiferidoGatewayAdapter", () => {
  let adapter: ImpuestoDiferidoGatewayAdapter;

  beforeEach(() => {
    adapter = new ImpuestoDiferidoGatewayAdapter();
    jest.clearAllMocks();
  });

  describe("getIDForm", () => {
    it("debería retornar el formulario cuando existe", async () => {
      // Arrange
      const mockReport = { impID: "imp1" };
      const mockFormImpuesto: FormImpuestoDiferido = {
        impID: "imp1",
        impContent: {},
      } as any;

      (prisma.report.findFirst as jest.Mock).mockResolvedValue(mockReport);
      (prisma.formimpuestodiferido.findUnique as jest.Mock).mockResolvedValue(mockFormImpuesto);

      // Act
      const result = await adapter.getIDForm("stu1", "room1");

      // Assert
      expect(result).toEqual(mockFormImpuesto);
    });

    it("debería retornar null cuando no existe el reporte", async () => {
      // Arrange
      (prisma.report.findFirst as jest.Mock).mockResolvedValue(null);
      (prisma.formimpuestodiferido.findUnique as jest.Mock).mockResolvedValue(null);

      // Act
      const result = await adapter.getIDForm("stu1", "room1");

      // Assert
      expect(result).toBeNull();
    });
  });

  describe("createForm", () => {
    it("debería crear un nuevo formulario", async () => {
      // Arrange
      const mockForm: FormImpuestoDiferido = {
        impID: "imp1",
        impContent: {},
      } as any;

      (prisma.formimpuestodiferido.create as jest.Mock).mockResolvedValue(mockForm);

      // Act
      const result = await adapter.createForm(mockForm);

      // Assert
      expect(result).toEqual(mockForm);
    });
  });

  describe("updateForm", () => {
    it("debería actualizar el formulario existente", async () => {
      // Arrange
      const mockReport = { impID: "imp1" };
      const mockForm: FormImpuestoDiferido = {
        impID: "imp1",
        impContent: {},
      } as any;

      (prisma.report.findFirst as jest.Mock).mockResolvedValue(mockReport);
      (prisma.formimpuestodiferido.update as jest.Mock).mockResolvedValue(mockForm);

      // Act
      const result = await adapter.updateForm("stu1", "room1", mockForm);

      // Assert
      expect(result).toEqual(mockForm);
    });
  });
});
