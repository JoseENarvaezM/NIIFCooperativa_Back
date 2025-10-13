import { ActivosFijosGatewayAdapter } from "../../../src/infrastructure/output/persistence/gateway/ActivosFijosGatewayAdapter";
import { FormActivosFijos } from "../../../src/domain/models/FormActivosFijosModel";
import prisma from "../../../src/config/database";

jest.mock("../../../src/config/database", () => ({
    __esModule: true,
    default: {
        report: {
            findFirst: jest.fn(),
        },
        formactivosfijos: {
            findUnique: jest.fn(),
            create: jest.fn(),
            update: jest.fn(),
        },
    },
}));

describe("ActivosFijosGatewayAdapter", () => {
    let adapter: ActivosFijosGatewayAdapter;
    const mockReport = { repID: "rep1", stuID: "stu1", roomID: "room1", actID: "act1" };
    const mockActivosFijos: FormActivosFijos = {
        actID: "act1",
        actContent: { /* structure */ },
    };

    beforeEach(() => {
        adapter = new ActivosFijosGatewayAdapter();
        jest.clearAllMocks();
    });

    describe("getIDForm", () => {
        it("debe retornar el formulario de activos fijos cuando existe", async () => {
            (prisma.report.findFirst as jest.Mock).mockResolvedValue(mockReport);
            (prisma.formactivosfijos.findUnique as jest.Mock).mockResolvedValue(mockActivosFijos);

            const result = await adapter.getIDForm("stu1", "room1");

            expect(result).toEqual(mockActivosFijos);
            expect(prisma.report.findFirst).toHaveBeenCalledWith({
                where: { stuID: "stu1", roomID: "room1" }
            });
            expect(prisma.formactivosfijos.findUnique).toHaveBeenCalledWith({
                where: { actID: "act1" }
            });
        });

        it("debe retornar null cuando no existe el formulario", async () => {
            (prisma.report.findFirst as jest.Mock).mockResolvedValue(mockReport);
            (prisma.formactivosfijos.findUnique as jest.Mock).mockResolvedValue(null);

            const result = await adapter.getIDForm("stu1", "room1");

            expect(result).toBeNull();
        });

        it("debe manejar IDs vacíos correctamente", async () => {
            const reportWithoutActID = { ...mockReport, actID: undefined };
            (prisma.report.findFirst as jest.Mock).mockResolvedValue(reportWithoutActID);
            (prisma.formactivosfijos.findUnique as jest.Mock).mockResolvedValue(null);

            const result = await adapter.getIDForm("stu1", "room1");

            expect(result).toBeNull();
            expect(prisma.formactivosfijos.findUnique).toHaveBeenCalledWith({
                where: { actID: undefined }
            });
        });
    });

    describe("createForm", () => {
        it("debe crear un formulario de activos fijos exitosamente", async () => {
            const newFormData: FormActivosFijos = {
                actContent: { PropiedadesPlantaYEquipo: { Terrenos: {} } },
            };
            (prisma.formactivosfijos.create as jest.Mock).mockResolvedValue(mockActivosFijos);

            const result = await adapter.createForm(newFormData);

            expect(result).toEqual(mockActivosFijos);
            expect(prisma.formactivosfijos.create).toHaveBeenCalledWith({
                data: { actContent: { ...newFormData.actContent } }
            });
        });

        it("debe crear un formulario con contenido vacío", async () => {
            const emptyForm: FormActivosFijos = { actContent: {} };
            (prisma.formactivosfijos.create as jest.Mock).mockResolvedValue({ actID: "new1", actContent: {} });

            const result = await adapter.createForm(emptyForm);

            expect(result.actContent).toEqual({});
            expect(prisma.formactivosfijos.create).toHaveBeenCalled();
        });

        it("debe crear un formulario con datos completos", async () => {
            const fullForm: FormActivosFijos = {
                actContent: {
                    PropiedadesPlantaYEquipo: { Terrenos: {}, Edificios: {}, Vehiculos: {} }
                },
            };
            (prisma.formactivosfijos.create as jest.Mock).mockResolvedValue(fullForm);

            const result = await adapter.createForm(fullForm);

            expect(result).toEqual(fullForm);
        });
    });

    describe("updateForm", () => {
        it("debe actualizar un formulario de activos fijos exitosamente", async () => {
            const updateData: FormActivosFijos = { actContent: { PropiedadesPlantaYEquipo: {} } };
            (prisma.report.findFirst as jest.Mock).mockResolvedValue(mockReport);
            (prisma.formactivosfijos.update as jest.Mock).mockResolvedValue({ ...mockActivosFijos, ...updateData });

            const result = await adapter.updateForm("stu1", "room1", updateData);

            expect(result).toEqual({ ...mockActivosFijos, ...updateData });
            expect(prisma.formactivosfijos.update).toHaveBeenCalledWith({
                where: { actID: "act1" },
                data: { actContent: { ...updateData } }
            });
        });

        it("debe manejar actualización cuando no existe reporte", async () => {
            const updateData: FormActivosFijos = { actContent: {} };
            (prisma.report.findFirst as jest.Mock).mockResolvedValue(null);
            (prisma.formactivosfijos.update as jest.Mock).mockRejectedValue(new Error("Record not found"));

            await expect(adapter.updateForm("stu1", "room1", updateData)).rejects.toThrow();
        });

        it("debe actualizar parcialmente el contenido", async () => {
            const partialUpdate: FormActivosFijos = { actContent: { PropiedadesDeInversión: {} } };
            (prisma.report.findFirst as jest.Mock).mockResolvedValue(mockReport);
            (prisma.formactivosfijos.update as jest.Mock).mockResolvedValue(partialUpdate);

            const result = await adapter.updateForm("stu1", "room1", partialUpdate);

            expect(result).toEqual(partialUpdate);
        });
    });

    describe("calculateReference", () => {
        it("debe retornar el formulario sin cambios (no hay cálculo)", async () => {
            (prisma.report.findFirst as jest.Mock).mockResolvedValue(mockReport);
            (prisma.formactivosfijos.findUnique as jest.Mock).mockResolvedValue(mockActivosFijos);

            const result = await adapter.calculateReference("stu1", "room1");

            expect(result).toEqual(mockActivosFijos);
            expect(result).toBe(mockActivosFijos);
        });

        it("debe retornar null cuando no existe el reporte", async () => {
            (prisma.report.findFirst as jest.Mock).mockResolvedValue(null);
            (prisma.formactivosfijos.findUnique as jest.Mock).mockResolvedValue(null);

            const result = await adapter.calculateReference("stu1", "room1");

            expect(result).toBeNull();
        });

        it("debe retornar el formulario completo sin transformaciones", async () => {
            const complexForm = {
                ...mockActivosFijos,
                actContent: { PropiedadesPlantaYEquipo: { /* datos extensos */ } }
            };
            (prisma.report.findFirst as jest.Mock).mockResolvedValue(mockReport);
            (prisma.formactivosfijos.findUnique as jest.Mock).mockResolvedValue(complexForm);

            const result = await adapter.calculateReference("stu1", "room1");

            expect(result).toEqual(complexForm);
        });
    });
});
