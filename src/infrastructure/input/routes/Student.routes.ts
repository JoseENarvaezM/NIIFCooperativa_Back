import { Router } from "express";
import { StudentGatewayAdapter } from "../../output/persistence/gateway/StudentGatewayAdapter";
import { StudentGatewayIntPort } from "../../../application/output/StudentGatewayIntPort";
import { StudentUCAdapter } from "../../../domain/useCases/StudentUCAdapter";
import { StudentController } from "../controllers/Student.controller";
import { ExceptionHandler } from "../../output/exeptionHandler/exeptionHandler";
import { ErrorFormatterIntPort } from "../../../application/output/ErrorFormaterIntPort";
import { ValidatorMiddleware } from "../middlewares/ValidatorMiddleware";
import { StudentSchema } from "../schemas/StudentSchema";

import { ActivosFijosGatewayAdapter } from "../../output/persistence/gateway/ActivosFijosGatewayAdapter";
import { CaratulaGatewayAdapter } from "../../output/persistence/gateway/CaratulaGatewayAdapter";
import { DetalleRenglonesGatewayAdapter } from "../../output/persistence/gateway/DetalleRenglonesGatewayAdapter";
import { EsfPatrimonioGatewayAdapter } from "../../output/persistence/gateway/EsfPatrimonioGatewayAdapter";
import { Form110GatewayAdapter } from "../../output/persistence/gateway/Form110GatewayAdapter";
import { IngFactGatewayAdapter } from "../../output/persistence/gateway/IngFactGatewayAdapter";
import { ImpuestoDiferidoGatewayAdapter } from "../../output/persistence/gateway/ImpuestoDiferidoGatewayAdapter";
import { RentaLiquidaGatewayAdapter } from "../../output/persistence/gateway/RentaLiquidaGatewayAdapter";
import { ResumenEsfGatewayAdapter } from "../../output/persistence/gateway/ResumenEsfGatewayAdapter";
import { ReportGatewayAdapter } from "../../output/persistence/gateway/ReportGatewayAdapter";

import { AuthMiddleware } from "../middlewares/AuthMiddleware";
import { AuthUCAdapter } from "../../../domain/useCases/AuthUCAdapter";
import { UserGatewayAdapter } from "../../output/persistence/gateway/UserGatewayAdapter";

import { RoomGatewayIntPort } from "../../../application/output/RoomGatewayIntPort";
import { RoomGatewayAdapter } from "../../output/persistence/gateway/RoomGatewayAdapter";

import { AuthAdapter } from "../../output/auth/AuthAdapter";
import { EncryptAdapter } from "../../output/auth/EncryptAdapter";

export class StudentRoutes {
    static get routes(): Router {
        const router = Router();

        const studentGateway: StudentGatewayIntPort = new StudentGatewayAdapter();
        const exceptionHandler: ErrorFormatterIntPort = new ExceptionHandler();
        const roomGateway: RoomGatewayIntPort = new RoomGatewayAdapter();
        const studentUseCases = new StudentUCAdapter(
            roomGateway,
            studentGateway,
            new ReportGatewayAdapter(),
            new ActivosFijosGatewayAdapter(),
            new CaratulaGatewayAdapter(),
            new DetalleRenglonesGatewayAdapter(),
            new EsfPatrimonioGatewayAdapter(),
            new Form110GatewayAdapter(),
            new ImpuestoDiferidoGatewayAdapter(),
            new IngFactGatewayAdapter(),
            new RentaLiquidaGatewayAdapter(),
            new ResumenEsfGatewayAdapter(),
            exceptionHandler,
            new AuthAdapter()
        );

        const studentController: StudentController = new StudentController(studentUseCases);
        const validatorMiddleware = new ValidatorMiddleware(StudentSchema);
        const authMiddleware = new AuthMiddleware(new AuthUCAdapter(new UserGatewayAdapter(), exceptionHandler, new EncryptAdapter(), new AuthAdapter()));

        router.post("/", validatorMiddleware.validate, studentController.postStudent);
        router.get("/", authMiddleware.authenticate("professor"), studentController.getStudents);
        router.get("/:stuID", authMiddleware.authenticate("professor"), studentController.getStudentById);
        router.put("/:stuID", validatorMiddleware.validate, studentController.putStudent);
        router.delete("/:stuID", studentController.deleteStudent);
        router.get("/search/:cedula/:roomID", studentController.searchStudentsByCedula);
        router.get("/room/:roomID", authMiddleware.authenticate("professor"), studentController.searchStudentsByRoom);

        return router;
    }
}