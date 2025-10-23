import { Request, Response, NextFunction } from "express";
import { UserUCIntPort } from "../../../application/input/UserUCIntPort";
import { User } from "../../../domain/models/UserModel";
export class UserController {
  constructor(private readonly userUseCases: UserUCIntPort) { }

  postProfessor = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const newUser = req.body;
      const result = await this.userUseCases.createUser({ ...newUser, usuRole: "professor" });
      res.status(201).json(result);
    }
    catch (error) {
      next(error);
    }
  };

  postAdmin = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const newUser = req.body;
      const result = await this.userUseCases.createUser({ ...newUser, usuRole: "admin" });
      res.status(201).json(result);
    }
    catch (error) {
      next(error);
    }
  };

  getProfessors = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await this.userUseCases.listProfessorUsers("professor");
      res.status(200).json(result);
    }
    catch (error) {
      next(error);
    }
  };


  putProfessor = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { usuID } = req.params;
      const { usuName, usuEmail, usuPassword } = req.body;

      const user = { usuID, usuName, usuEmail, usuPassword, usuRole: "professor" };
      const userToCrate = new User(
        user.usuID,
        user.usuName,
        user.usuEmail,
        user.usuPassword,
        "professor"
      );

      const result = await this.userUseCases.updateUser(usuID, userToCrate);


      res.status(200).json(result);
    }
    catch (error) {
      next(error);
    }
  };

  putAdmin = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { usuID } = req.params;
      const { usuName, usuEmail, usuPassword } = req.body;

      const user = { usuID, usuName, usuEmail, usuPassword, usuRole: "admin" };
      const userToCrate = new User(
        user.usuID,
        user.usuName,
        user.usuEmail,
        user.usuPassword,
        "admin"
      );

      const result = await this.userUseCases.updateUser(usuID, userToCrate);

      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }

  getUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { usuID } = req.params;
      const result = await this.userUseCases.getUserById(usuID);
      res.status(200).json(result);
    }
    catch (error) {
      next(error);
    }
  };

  deleteUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { usuID } = req.params;
      const result = await this.userUseCases.deleteUserById(usuID);
      res.status(204).json(result);
    }
    catch (error) {
      next(error);
    }
  };

  changeUserPassword = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const {usuPassword, usuOldPassword } = req.body;
      const { usuID } = req.user; 
      const result = await this.userUseCases.changeUserPassword(usuID, usuPassword, usuOldPassword);

      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }

}