import { EsfPatrimonioGatewayAdapter } from "../../../src/infrastructure/output/persistence/gateway/EsfPatrimonioGatewayAdapter";
import prisma from "../../../src/config/database";

jest.mock("../../../src/config/database", () => ({
  __esModule: true,
  default: {
    report: {
      findFirst: jest.fn(),
    },
    formesfpatrimonio: {
      findUnique: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
    },
    formdetallerenglones: {
      findUnique: jest.fn(),
    },
    formactivosfijos: {
      findUnique: jest.fn(),
    },
  },
}));

describe("EsfPatrimonioGatewayAdapter", () => {
  let adapter: EsfPatrimonioGatewayAdapter;

  beforeEach(() => {
    adapter = new EsfPatrimonioGatewayAdapter();
    jest.clearAllMocks();
  });

  describe("getIDForm", () => {
    it("debería retornar el formulario de patrimonio cuando existe", async () => {
      // Arrange
      const mockReport = { reportID: "rep1", esfID: "esf1", stuID: "stu1", roomID: "room1" };
      const mockFormEsf = { esfID: "esf1", esfContent: { data: "test" } };

      (prisma.report.findFirst as jest.Mock).mockResolvedValue(mockReport);
      (prisma.formesfpatrimonio.findUnique as jest.Mock).mockResolvedValue(mockFormEsf);

      // Act
      const result = await adapter.getIDForm("stu1", "room1");

      // Assert
      expect(result).toEqual(mockFormEsf);
      expect(prisma.report.findFirst).toHaveBeenCalledWith({
        where: { stuID: "stu1", roomID: "room1" },
      });
      expect(prisma.formesfpatrimonio.findUnique).toHaveBeenCalledWith({
        where: { esfID: "esf1" },
      });
    });

    it("debería retornar null cuando no existe el formulario", async () => {
      // Arrange
      const mockReport = { reportID: "rep1", esfID: "esf1", stuID: "stu1", roomID: "room1" };

      (prisma.report.findFirst as jest.Mock).mockResolvedValue(mockReport);
      (prisma.formesfpatrimonio.findUnique as jest.Mock).mockResolvedValue(null);

      // Act
      const result = await adapter.getIDForm("stu1", "room1");

      // Assert
      expect(result).toBeNull();
    });

  });

  describe("createForm", () => {
    it("debería crear un formulario de patrimonio exitosamente", async () => {
      // Arrange
      const mockFormData = {
        esfContent: {
          Activos: { Total: 1000000 },
          Pasivos: { Total: 500000 },
        },
      };
      const mockCreatedForm = { esfID: "esf1", ...mockFormData };

      (prisma.formesfpatrimonio.create as jest.Mock).mockResolvedValue(mockCreatedForm);

      // Act
      const result = await adapter.createForm(mockFormData as any);

      // Assert
      expect(result).toEqual(mockCreatedForm);
      expect(prisma.formesfpatrimonio.create).toHaveBeenCalledWith({
        data: {
          esfContent: mockFormData.esfContent,
        },
      });
    });

    it("debería crear un formulario con contenido vacío", async () => {
      // Arrange
      const mockFormData = { esfContent: {} };
      const mockCreatedForm = { esfID: "esf1", esfContent: {} };

      (prisma.formesfpatrimonio.create as jest.Mock).mockResolvedValue(mockCreatedForm);

      // Act
      const result = await adapter.createForm(mockFormData as any);

      // Assert
      expect(result).toEqual(mockCreatedForm);
    });

    it("debería crear un formulario con valores límite grandes", async () => {
      // Arrange
      const mockFormData = {
        esfContent: {
          Activos: { Total: Number.MAX_SAFE_INTEGER },
        },
      };
      const mockCreatedForm = { esfID: "esf1", ...mockFormData };

      (prisma.formesfpatrimonio.create as jest.Mock).mockResolvedValue(mockCreatedForm);

      // Act
      const result = await adapter.createForm(mockFormData as any);

      // Assert
      expect(result).toEqual(mockCreatedForm);
    });
  });

  describe("updateForm", () => {
    it("debería actualizar el formulario exitosamente", async () => {
      // Arrange
      const mockReport = { reportID: "rep1", esfID: "esf1", stuID: "stu1", roomID: "room1" };
      const mockFormData = {
        esfContent: {
          Activos: { Total: 2000000 },
        },
      };
      const mockUpdatedForm = { esfID: "esf1", ...mockFormData };

      (prisma.report.findFirst as jest.Mock).mockResolvedValue(mockReport);
      (prisma.formesfpatrimonio.update as jest.Mock).mockResolvedValue(mockUpdatedForm);

      // Act
      const result = await adapter.updateForm("stu1", "room1", mockFormData as any);

      // Assert
      expect(result).toEqual(mockUpdatedForm);
      expect(prisma.formesfpatrimonio.update).toHaveBeenCalledWith({
        where: { esfID: "esf1" },
        data: {
          esfContent: mockFormData,
        },
      });
    });

    it("debería manejar actualización cuando el reporte no existe", async () => {
      // Arrange
      (prisma.report.findFirst as jest.Mock).mockResolvedValue(null);
      (prisma.formesfpatrimonio.update as jest.Mock).mockResolvedValue(null);

      // Act
      const result = await adapter.updateForm("stu999", "room999", { esfContent: {} } as any);

      // Assert
      expect(prisma.formesfpatrimonio.update).toHaveBeenCalledWith({
        where: { esfID: undefined },
        data: { esfContent: { esfContent: {} } },
      });
    });

    it("debería actualizar formulario con cambios parciales", async () => {
      // Arrange
      const mockReport = { reportID: "rep1", esfID: "esf1", stuID: "stu1", roomID: "room1" };
      const mockFormData = {
        esfContent: {
          Activos: { ActivosEquivalentesEfectivo: { Efectivo: { ValorContable: 50000 } } },
        },
      };
      const mockUpdatedForm = { esfID: "esf1", ...mockFormData };

      (prisma.report.findFirst as jest.Mock).mockResolvedValue(mockReport);
      (prisma.formesfpatrimonio.update as jest.Mock).mockResolvedValue(mockUpdatedForm);

      // Act
      const result = await adapter.updateForm("stu1", "room1", mockFormData as any);

      // Assert
      expect(result).toEqual(mockUpdatedForm);
    });
  });

  describe("calculateReference", () => {
    it("debería retornar null cuando faltan datos requeridos", async () => {
      // Arrange
      const mockReport = { reportID: "rep1", esfID: "esf1", detID: "det1", actID: "act1", stuID: "stu1", roomID: "room1" };

      (prisma.report.findFirst as jest.Mock).mockResolvedValue(mockReport);
      (prisma.formesfpatrimonio.findUnique as jest.Mock).mockResolvedValue(null);

      // Act
      const result = await adapter.calculateReference("stu1", "room1");

      // Assert
      expect(result).toBeNull();
    });
    it("debería manejar contenido null en detalle renglones", async () => {
      // Arrange
      const mockReport = { reportID: "rep1", esfID: "esf1", detID: "det1", actID: "act1", stuID: "stu1", roomID: "room1" };
      const mockFormEsf = { esfID: "esf1", esfContent: { Activos: {} } };
      const mockDetalleRenglones = { detID: "det1", detContent: null };

      (prisma.report.findFirst as jest.Mock).mockResolvedValue(mockReport);
      (prisma.formesfpatrimonio.findUnique as jest.Mock).mockResolvedValue(mockFormEsf);
      (prisma.formdetallerenglones.findUnique as jest.Mock).mockResolvedValue(mockDetalleRenglones);

      // Act
      const result = await adapter.calculateReference("stu1", "room1");

      // Assert
      expect(result).toEqual(mockFormEsf);
    });

  });
});
