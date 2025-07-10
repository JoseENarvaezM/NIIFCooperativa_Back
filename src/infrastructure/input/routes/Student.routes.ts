import { Router } from "express";
import { StudentGatewayAdapter } from "../../output/persistence/gateway/StudentGatewayAdapter";
import { StudentGatewayIntPort } from "../../../application/output/StudentGatewayIntPort";
import { StudentUCAdapter } from "../../../domain/useCases/StudentUCAdapter";
import { StudentController } from "../controllers/Student.controller";
import { ExceptionHandler } from "../../output/exeptionHandler/exeptionHandler";
import { ErrorFormatterIntPort } from "../../../application/output/ErrorFormaterIntPort";
import { ValidatorMiddleware } from "../middlewares/ValidatorMiddleware";
import { getStudentSchema } from "../schemas/StudentSchema";

export class StudentRoutes {
    static get routes(): Router {
        const router = Router();

        const studentGateway: StudentGatewayIntPort = new StudentGatewayAdapter();
        const exceptionHandler: ErrorFormatterIntPort = new ExceptionHandler();
        const studentUseCases = new StudentUCAdapter(studentGateway, exceptionHandler);
        const studentController: StudentController = new StudentController(studentUseCases);
        const validatorMiddleware = new ValidatorMiddleware(getStudentSchema());

        router.post("/", validatorMiddleware.validate, studentController.postStudent);
        router.get("/", studentController.getStudents);
        router.get("/:stuID", studentController.getStudentById);
        router.put("/:stuID", validatorMiddleware.validate, studentController.putStudent);
        router.delete("/:stuID", studentController.deleteStudent);
        router.get("/search/name", studentController.searchStudentsByCedula);
        router.get("/search/room/:roomID", studentController.searchStudentsByRoom);

        return router;
    }
}