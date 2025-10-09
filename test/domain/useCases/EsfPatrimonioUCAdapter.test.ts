import { EsfPatrimonioUCAdapter } from "../../../src/domain/useCases/EsfPatrimonioUCAdapter";
import { FormsGatewayIntPort } from "../../../src/application/output/FormsGatewayIntPort";
import { ErrorFormatterIntPort } from "../../../src/application/output/ErrorFormaterIntPort";
import { FormEsfPatrimonio } from "../../../src/domain/models/FormEsfPatrimonioModel";

describe("EsfPatrimonioUCAdapter", () => {
  let esfPatrimonioUCAdapter: EsfPatrimonioUCAdapter;
  let mockEsfPatrimonioGateway: jest.Mocked<FormsGatewayIntPort<FormEsfPatrimonio>>;
  let mockErrorFormatter: jest.Mocked<ErrorFormatterIntPort>;

  beforeEach(() => {
    mockEsfPatrimonioGateway = {
      createForm: jest.fn(),
      getIDForm: jest.fn(),
      updateForm: jest.fn(),
      calculateReference: jest.fn(),
    } as jest.Mocked<FormsGatewayIntPort<FormEsfPatrimonio>>;

    mockErrorFormatter = {
      genericError: jest.fn(),
      errorNotFound: jest.fn(),
    } as any;

    esfPatrimonioUCAdapter = new EsfPatrimonioUCAdapter(mockEsfPatrimonioGateway, mockErrorFormatter);
  });

  describe("getIDForm", () => {
    it("debería retornar el formulario calculado cuando existe", async () => {
      // Arrange
      const mockForm: FormEsfPatrimonio = { esfID: "form1" } as FormEsfPatrimonio;
      const mockCalculatedForm: FormEsfPatrimonio = { esfID: "form1", calculated: true } as any;
      mockEsfPatrimonioGateway.getIDForm.mockResolvedValue(mockForm);
      mockEsfPatrimonioGateway.calculateReference.mockResolvedValue(mockCalculatedForm);

      // Act
      const result = await esfPatrimonioUCAdapter.getIDForm("stu1", "room1");

      // Assert
      expect(result).toEqual(mockCalculatedForm);
      expect(mockEsfPatrimonioGateway.calculateReference).toHaveBeenCalledWith("stu1", "room1");
    });

    it("debería lanzar error cuando el formulario no existe", async () => {
      // Arrange
      mockEsfPatrimonioGateway.getIDForm.mockResolvedValue(null);
      mockEsfPatrimonioGateway.calculateReference.mockResolvedValue(null);

      // Act
      const result = await esfPatrimonioUCAdapter.getIDForm("stu999", "room999");

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
      const mockForm: FormEsfPatrimonio = { esfID: "form1" } as FormEsfPatrimonio;
      mockEsfPatrimonioGateway.updateForm.mockResolvedValue(mockForm);

      // Act
      const result = await esfPatrimonioUCAdapter.updateForm("stu1", "room1", mockForm);

      // Assert
      expect(result).toEqual(mockForm);
      expect(mockEsfPatrimonioGateway.updateForm).toHaveBeenCalledWith("stu1", "room1", mockForm);
    });
  });
});
