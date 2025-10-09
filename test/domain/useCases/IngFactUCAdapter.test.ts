import { IngFactUCAdapter } from "../../../src/domain/useCases/IngFactUCAdapter";
import { FormsGatewayIntPort } from "../../../src/application/output/FormsGatewayIntPort";
import { ErrorFormatterIntPort } from "../../../src/application/output/ErrorFormaterIntPort";
import { FormIngresosFancturacion } from "../../../src/domain/models/FormIngresosFancturacionModel";

describe("IngFactUCAdapter", () => {
  let ingFactUCAdapter: IngFactUCAdapter;
  let mockIngFactGateway: jest.Mocked<FormsGatewayIntPort<FormIngresosFancturacion>>;
  let mockErrorFormatter: jest.Mocked<ErrorFormatterIntPort>;

  beforeEach(() => {
    mockIngFactGateway = {
      createForm: jest.fn(),
      getIDForm: jest.fn(),
      updateForm: jest.fn(),
      calculateReference: jest.fn(),
    } as jest.Mocked<FormsGatewayIntPort<FormIngresosFancturacion>>;

    mockErrorFormatter = {
      genericError: jest.fn(),
      errorNotFound: jest.fn(),
    } as any;

    ingFactUCAdapter = new IngFactUCAdapter(mockIngFactGateway, mockErrorFormatter);
  });

  describe("getIDForm", () => {
    it("debería retornar el formulario calculado cuando existe", async () => {
      // Arrange
      const mockForm: FormIngresosFancturacion = { ingID: "form1" } as FormIngresosFancturacion;
      const mockCalculatedForm: FormIngresosFancturacion = { ingID: "form1", calculated: true } as any;
      mockIngFactGateway.getIDForm.mockResolvedValue(mockForm);
      mockIngFactGateway.calculateReference.mockResolvedValue(mockCalculatedForm);

      // Act
      const result = await ingFactUCAdapter.getIDForm("stu1", "room1");

      // Assert
      expect(result).toEqual(mockCalculatedForm);
      expect(mockIngFactGateway.calculateReference).toHaveBeenCalledWith("stu1", "room1");
    });

    it("debería lanzar error cuando el formulario no existe", async () => {
      // Arrange
      mockIngFactGateway.getIDForm.mockResolvedValue(null);
      mockIngFactGateway.calculateReference.mockResolvedValue(null);

      // Act
      const result = await ingFactUCAdapter.getIDForm("stu999", "room999");

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
      const mockForm: FormIngresosFancturacion = { ingID: "form1" } as FormIngresosFancturacion;
      mockIngFactGateway.updateForm.mockResolvedValue(mockForm);

      // Act
      const result = await ingFactUCAdapter.updateForm("stu1", "room1", mockForm);

      // Assert
      expect(result).toEqual(mockForm);
      expect(mockIngFactGateway.updateForm).toHaveBeenCalledWith("stu1", "room1", mockForm);
    });
  });
});
