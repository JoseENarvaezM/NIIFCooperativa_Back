import { ResumenEsfUCAdapter } from "../../../src/domain/useCases/ResumenEsfUCAdapter";
import { FormsGatewayIntPort } from "../../../src/application/output/FormsGatewayIntPort";
import { ErrorFormatterIntPort } from "../../../src/application/output/ErrorFormaterIntPort";
import { FormResumenEsferi } from "../../../src/domain/models/FormResumenEsferiModel";

describe("ResumenEsfUCAdapter", () => {
  let resumenEsfUCAdapter: ResumenEsfUCAdapter;
  let mockResumenEsfGateway: jest.Mocked<FormsGatewayIntPort<FormResumenEsferi>>;
  let mockErrorFormatter: jest.Mocked<ErrorFormatterIntPort>;

  beforeEach(() => {
    mockResumenEsfGateway = {
      createForm: jest.fn(),
      getIDForm: jest.fn(),
      updateForm: jest.fn(),
      calculateReference: jest.fn(),
    } as jest.Mocked<FormsGatewayIntPort<FormResumenEsferi>>;

    mockErrorFormatter = {
      genericError: jest.fn(),
      errorNotFound: jest.fn(),
    } as any;

    resumenEsfUCAdapter = new ResumenEsfUCAdapter(mockResumenEsfGateway, mockErrorFormatter);
  });

  describe("getIDForm", () => {
    it("debería retornar el formulario calculado cuando existe", async () => {
      // Arrange
      const mockForm: FormResumenEsferi = { resID: "form1" } as FormResumenEsferi;
      const mockCalculatedForm: FormResumenEsferi = { resID: "form1", calculated: true } as any;
      mockResumenEsfGateway.getIDForm.mockResolvedValue(mockForm);
      mockResumenEsfGateway.calculateReference.mockResolvedValue(mockCalculatedForm);

      // Act
      const result = await resumenEsfUCAdapter.getIDForm("stu1", "room1");

      // Assert
      expect(result).toEqual(mockCalculatedForm);
      expect(mockResumenEsfGateway.calculateReference).toHaveBeenCalledWith("stu1", "room1");
    });

    it("debería lanzar error cuando el formulario no existe", async () => {
      // Arrange
      mockResumenEsfGateway.getIDForm.mockResolvedValue(null);
      mockResumenEsfGateway.calculateReference.mockResolvedValue(null);

      // Act
      const result = await resumenEsfUCAdapter.getIDForm("stu999", "room999");

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
      const mockForm: FormResumenEsferi = { resID: "form1" } as FormResumenEsferi;
      mockResumenEsfGateway.updateForm.mockResolvedValue(mockForm);

      // Act
      const result = await resumenEsfUCAdapter.updateForm("stu1", "room1", mockForm);

      // Assert
      expect(result).toEqual(mockForm);
      expect(mockResumenEsfGateway.updateForm).toHaveBeenCalledWith("stu1", "room1", mockForm);
    });
  });
});
