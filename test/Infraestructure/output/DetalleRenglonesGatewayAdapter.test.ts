import { DetalleRenglonesGatewayAdapter } from "../../../src/infrastructure/output/persistence/gateway/DetalleRenglonesGatewayAdapter";
import prisma from "../../../src/config/database";
import { FormDetalleRenglones } from "../../../src/domain/models/FormDetallerEnglonesModel";

jest.mock("../../../src/config/database", () => ({
  __esModule: true,
  default: {
    report: {
      findFirst: jest.fn(),
    },
    formdetallerenglones: {
      findUnique: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
    },
    formactivosfijos: {
      findUnique: jest.fn(),
    },
    formimpuestodiferido: {
      findUnique: jest.fn(),
    },
    formingresosfancturacion: {
      findUnique: jest.fn(),
    },
  },
}));

describe("DetalleRenglonesGatewayAdapter", () => {
  let adapter: DetalleRenglonesGatewayAdapter;

  beforeEach(() => {
    adapter = new DetalleRenglonesGatewayAdapter();
    jest.clearAllMocks();
  });

  describe("getIDForm", () => {
    it("debería retornar el formulario de detalle renglones cuando existe", async () => {
      // Arrange
      const mockReport = { detID: "det1" };
      const mockFormDetalleRenglones: FormDetalleRenglones = {
        detID: "det1",
        detContent: { Renglon40: {} },
      } as any;

      (prisma.report.findFirst as jest.Mock).mockResolvedValue(mockReport);
      (prisma.formdetallerenglones.findUnique as jest.Mock).mockResolvedValue(mockFormDetalleRenglones);

      // Act
      const result = await adapter.getIDForm("stu1", "room1");

      // Assert
      expect(result).toEqual(mockFormDetalleRenglones);
      expect(prisma.report.findFirst).toHaveBeenCalledWith({
        where: { stuID: "stu1", roomID: "room1" },
      });
    });

    it("debería retornar null cuando no existe el reporte", async () => {
      // Arrange
      (prisma.report.findFirst as jest.Mock).mockResolvedValue(null);
      (prisma.formdetallerenglones.findUnique as jest.Mock).mockResolvedValue(null);

      // Act
      const result = await adapter.getIDForm("stu1", "room1");

      // Assert
      expect(result).toBeNull();
    });
  });

  describe("createForm", () => {
    it("debería crear un nuevo formulario de detalle renglones", async () => {
      // Arrange
      const mockForm: FormDetalleRenglones = {
        detID: "det1",
        detContent: { Renglon40: {} },
      } as any;

      (prisma.formdetallerenglones.create as jest.Mock).mockResolvedValue(mockForm);

      // Act
      const result = await adapter.createForm(mockForm);

      // Assert
      expect(result).toEqual(mockForm);
      expect(prisma.formdetallerenglones.create).toHaveBeenCalledWith({
        data: {
          detContent: mockForm.detContent,
        },
      });
    });
  });

  describe("updateForm", () => {
    it("debería actualizar el formulario existente", async () => {
      // Arrange
      const mockReport = { detID: "det1" };
      const mockForm: FormDetalleRenglones = {
        detID: "det1",
        detContent: { Renglon40: {} },
      } as any;

      (prisma.report.findFirst as jest.Mock).mockResolvedValue(mockReport);
      (prisma.formdetallerenglones.update as jest.Mock).mockResolvedValue(mockForm);

      // Act
      const result = await adapter.updateForm("stu1", "room1", mockForm);

      // Assert
      expect(result).toEqual(mockForm);
      expect(prisma.formdetallerenglones.update).toHaveBeenCalledWith({
        where: { detID: "det1" },
        data: {
          detContent: mockForm,
        },
      });
    });
  });

  describe("calculateReference", () => {

    it("debería retornar null cuando no existe el formulario", async () => {
      // Arrange
      const mockReport = { detID: "det1" };

      (prisma.report.findFirst as jest.Mock).mockResolvedValue(mockReport);
      (prisma.formdetallerenglones.findUnique as jest.Mock).mockResolvedValue(null);

      // Act
      const result = await adapter.calculateReference("stu1", "room1");

      // Assert
      expect(result).toBeNull();
    });
  });
});
