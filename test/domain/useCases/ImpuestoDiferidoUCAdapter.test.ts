import { ImpuestoDiferidoUCAdapter } from "../../../src/domain/useCases/ImpuestoDiferidoUCAdapter";
import { FormsGatewayIntPort } from "../../../src/application/output/FormsGatewayIntPort";
import { ErrorFormatterIntPort } from "../../../src/application/output/ErrorFormaterIntPort";
import { FormImpuestoDiferido } from "../../../src/domain/models/FormImpuestoDiferidoModel";

describe("ImpuestoDiferidoUCAdapter", () => {
  let impuestoDiferidoUCAdapter: ImpuestoDiferidoUCAdapter;
  let mockImpuestoDiferidoGateway: jest.Mocked<FormsGatewayIntPort<FormImpuestoDiferido>>;
  let mockErrorFormatter: jest.Mocked<ErrorFormatterIntPort>;

  beforeEach(() => {
    mockImpuestoDiferidoGateway = {
      createForm: jest.fn(),
      getIDForm: jest.fn(),
      updateForm: jest.fn(),
      calculateReference: jest.fn(),
    } as jest.Mocked<FormsGatewayIntPort<FormImpuestoDiferido>>;

    mockErrorFormatter = {
      genericError: jest.fn(),
      errorNotFound: jest.fn(),
    } as any;

    impuestoDiferidoUCAdapter = new ImpuestoDiferidoUCAdapter(mockImpuestoDiferidoGateway, mockErrorFormatter);
  });

  describe("getIDForm", () => {
    it("debería retornar el formulario calculado cuando existe", async () => {
      // Arrange
      const mockForm: FormImpuestoDiferido = { impID: "form1" } as FormImpuestoDiferido;
      const mockCalculatedForm: FormImpuestoDiferido = { impID: "form1", calculated: true } as any;
      mockImpuestoDiferidoGateway.getIDForm.mockResolvedValue(mockForm);
      mockImpuestoDiferidoGateway.calculateReference.mockResolvedValue(mockCalculatedForm);

      // Act
      const result = await impuestoDiferidoUCAdapter.getIDForm("stu1", "room1");

      // Assert
      expect(result).toEqual(mockCalculatedForm);
      expect(mockImpuestoDiferidoGateway.calculateReference).toHaveBeenCalledWith("stu1", "room1");
    });

    it("debería lanzar error cuando el formulario no existe", async () => {
      // Arrange
      mockImpuestoDiferidoGateway.getIDForm.mockResolvedValue(null);
      mockImpuestoDiferidoGateway.calculateReference.mockResolvedValue(null);

      // Act
      const result = await impuestoDiferidoUCAdapter.getIDForm("stu999", "room999");

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
      const mockForm: FormImpuestoDiferido = { impID: "form1" } as FormImpuestoDiferido;
      mockImpuestoDiferidoGateway.updateForm.mockResolvedValue(mockForm);

      // Act
      const result = await impuestoDiferidoUCAdapter.updateForm("stu1", "room1", mockForm);

      // Assert
      expect(result).toEqual(mockForm);
      expect(mockImpuestoDiferidoGateway.updateForm).toHaveBeenCalledWith("stu1", "room1", mockForm);
    });
  });
});
