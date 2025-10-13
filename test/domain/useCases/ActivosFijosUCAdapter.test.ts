import { ActivosFijosUCAdapter } from "../../../src/domain/useCases/ActivosFijosUCAdapter";
import { FormsGatewayIntPort } from "../../../src/application/output/FormsGatewayIntPort";
import { ErrorFormatterIntPort } from "../../../src/application/output/ErrorFormaterIntPort";
import { FormActivosFijos } from "../../../src/domain/models/FormActivosFijosModel";

describe("ActivosFijosUCAdapter", () => {
  let activosFijosUCAdapter: ActivosFijosUCAdapter;
  let mockActivosFijosGateway: jest.Mocked<FormsGatewayIntPort<FormActivosFijos>>;
  let mockErrorFormatter: jest.Mocked<ErrorFormatterIntPort>;

  beforeEach(() => {
    mockActivosFijosGateway = {
      createForm: jest.fn(),
      getIDForm: jest.fn(),
      updateForm: jest.fn(),
      calculateReference: jest.fn(),
    } as jest.Mocked<FormsGatewayIntPort<FormActivosFijos>>;

    mockErrorFormatter = {
      genericError: jest.fn(),
      errorNotFound: jest.fn(),
    } as any;

    activosFijosUCAdapter = new ActivosFijosUCAdapter(mockActivosFijosGateway, mockErrorFormatter);
  });

  describe("getIDForm", () => {
    it("debería retornar el formulario calculado cuando existe", async () => {
      // Arrange
      const mockForm: FormActivosFijos = { actID: "form1" } as FormActivosFijos;
      const mockCalculatedForm: FormActivosFijos = { actID: "form1", calculated: true } as any;
      mockActivosFijosGateway.getIDForm.mockResolvedValue(mockForm);
      mockActivosFijosGateway.calculateReference.mockResolvedValue(mockCalculatedForm);

      // Act
      const result = await activosFijosUCAdapter.getIDForm("stu1", "room1");

      // Assert
      expect(result).toEqual(mockCalculatedForm);
      expect(mockActivosFijosGateway.calculateReference).toHaveBeenCalledWith("stu1", "room1");
    });

    it("debería lanzar error cuando el formulario no existe", async () => {
      // Arrange
      mockActivosFijosGateway.getIDForm.mockResolvedValue(null);
      mockActivosFijosGateway.calculateReference.mockResolvedValue(null);

      // Act
      const result = await activosFijosUCAdapter.getIDForm("stu999", "room999");

      // Assert
      expect(result).toBeNull();
      expect(mockErrorFormatter.errorNotFound).toHaveBeenCalledWith(
        "Formulario con stuID stu999 y roomID room999 no se encontró."
      );
    });
  });

  describe("updateForm", () => {
    it("debería actualizar el formulario correctamente", async () => {
      // Arrange
      const mockForm: FormActivosFijos = { actID: "form1" } as FormActivosFijos;
      mockActivosFijosGateway.updateForm.mockResolvedValue(mockForm);

      // Act
      const result = await activosFijosUCAdapter.updateForm("stu1", "room1", mockForm);

      // Assert
      expect(result).toEqual(mockForm);
      expect(mockActivosFijosGateway.updateForm).toHaveBeenCalledWith("stu1", "room1", mockForm);
    });
  });
});
