import { ReportGatewayAdapter } from "../../../src/infrastructure/output/persistence/gateway/ReportGatewayAdapter";
import { Report } from "../../../src/domain/models/ReportModel";
import prisma from "../../../src/config/database";

jest.mock("../../../src/config/database", () => ({
  __esModule: true,
  default: {
    report: {
      findUnique: jest.fn(),
      create: jest.fn(),
    },
  },
}));

describe("ReportGatewayAdapter", () => {
  let reportGatewayAdapter: ReportGatewayAdapter;

  beforeEach(() => {
    reportGatewayAdapter = new ReportGatewayAdapter();
    jest.clearAllMocks();
  });

  describe("getIDReport", () => {
    it("debería retornar el reporte cuando existe", async () => {
      // Arrange
      const mockReport = {
        repID: "rep1",
        stuID: "stu1",
        roomID: "room1",
        carID: "car1",
        detID: "det1",
        esfID: "esf1",
        renID: "ren1",
        impID: "imp1",
        ingID: "ing1",
        actID: "act1",
        resID: "res1",
        r110ID: "r1101",
      };
      (prisma.report.findUnique as jest.Mock).mockResolvedValue(mockReport);

      // Act
      const result = await reportGatewayAdapter.getIDReport("rep1");

      // Assert
      expect(result).toEqual(mockReport);
      expect(prisma.report.findUnique).toHaveBeenCalledWith({
        where: { repID: "rep1" },
      });
    });

    it("debería retornar null cuando el reporte no existe", async () => {
      // Arrange
      (prisma.report.findUnique as jest.Mock).mockResolvedValue(null);

      // Act
      const result = await reportGatewayAdapter.getIDReport("rep999");

      // Assert
      expect(result).toBeNull();
      expect(prisma.report.findUnique).toHaveBeenCalledWith({
        where: { repID: "rep999" },
      });
    });
  });

  describe("createReport", () => {
    it("debería crear un reporte correctamente", async () => {
      // Arrange
      const mockReportInput = new Report(
        "",
        "stu1",
        "room1",
        "car1",
        "det1",
        "esf1",
        "ren1",
        "imp1",
        "ing1",
        "act1",
        "res1",
        "r1101"
      );

      const mockCreatedReport = {
        repID: "rep1",
        stuID: "stu1",
        roomID: "room1",
        carID: "car1",
        detID: "det1",
        esfID: "esf1",
        renID: "ren1",
        impID: "imp1",
        ingID: "ing1",
        actID: "act1",
        resID: "res1",
        r110ID: "r1101",
      };
      (prisma.report.create as jest.Mock).mockResolvedValue(mockCreatedReport);

      // Act
      const result = await reportGatewayAdapter.createReport(mockReportInput);

      // Assert
      expect(result).toBeInstanceOf(Report);
      expect(result.repID).toBe("rep1");
      expect(result.stuID).toBe("stu1");
      expect(result.roomID).toBe("room1");
      expect(result.carID).toBe("car1");
      expect(result.detID).toBe("det1");
      expect(result.esfID).toBe("esf1");
      expect(result.renID).toBe("ren1");
      expect(result.impID).toBe("imp1");
      expect(result.ingID).toBe("ing1");
      expect(result.actID).toBe("act1");
      expect(result.resID).toBe("res1");
      expect(result.r110ID).toBe("r1101");
      expect(prisma.report.create).toHaveBeenCalledWith({
        data: {
          stuID: "stu1",
          roomID: "room1",
          carID: "car1",
          detID: "det1",
          esfID: "esf1",
          renID: "ren1",
          impID: "imp1",
          ingID: "ing1",
          actID: "act1",
          resID: "res1",
          r110ID: "r1101",
        },
      });
    });

    it("debería crear un reporte con todos los IDs de formularios", async () => {
      // Arrange
      const mockReportInput = new Report(
        "",
        "stu2",
        "room2",
        "car2",
        "det2",
        "esf2",
        "ren2",
        "imp2",
        "ing2",
        "act2",
        "res2",
        "r1102"
      );

      const mockCreatedReport = {
        repID: "rep2",
        stuID: "stu2",
        roomID: "room2",
        carID: "car2",
        detID: "det2",
        esfID: "esf2",
        renID: "ren2",
        impID: "imp2",
        ingID: "ing2",
        actID: "act2",
        resID: "res2",
        r110ID: "r1102",
      };
      (prisma.report.create as jest.Mock).mockResolvedValue(mockCreatedReport);

      // Act
      const result = await reportGatewayAdapter.createReport(mockReportInput);

      // Assert
      expect(result).toBeInstanceOf(Report);
      expect(result.repID).toBe("rep2");
      expect(prisma.report.create).toHaveBeenCalledTimes(1);
    });
  });
});
