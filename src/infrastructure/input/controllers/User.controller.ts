import { Request, Response, NextFunction } from "express";
import { UserUCIntPort } from "../../../application/input/UserUCIntPort";
import { User } from "../../../domain/models/UserModel";
export class UserController {
  constructor(private readonly userUseCases: UserUCIntPort) { }

  postProfessor = async (req: Request, res: Response, next: NextFunction) => {
    const newUser = req.body;

    const result = await this.userUseCases.createUser({ ...newUser, usuRole: "profesor" });

    res.status(200).json(result);
  };

  postAdmin = async (req: Request, res: Response, next: NextFunction) => {
    const newUser = req.body;

    const result = await this.userUseCases.createUser({ ...newUser, usuRole: "admin" });

    res.status(200).json(result);
  };

  getProfessors = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await this.userUseCases.listProfessorUsers("profesor");
      res.status(200).json(result);
    }
    catch (error) {
      console.error("Error fetching professors:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };

  getAdmins = async (req: Request, res: Response, next: NextFunction) => {
    const result = await this.userUseCases.listAdminUsers("admin");

    res.status(200).json(result);
  }

  putProfessor = async (req: Request, res: Response, next: NextFunction) => {
    const { usuID } = req.params;
    const { usuName, usuEmail, usuPassword } = req.body;

    const user = { usuID, usuName, usuEmail, usuPassword, usuRole: "profesor" };
    const userToCrate = new User(
      user.usuID,
      user.usuName,
      user.usuEmail,
      user.usuPassword,
      "profesor"
    );

    const result = await this.userUseCases.updateUser(usuID, userToCrate);


    console.log(result)
    res.status(200).json(result);
  };

  putAdmin = async (req: Request, res: Response, next: NextFunction) => {
    console.log(req.body)
    const { usuID } = req.body.user;
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
  }

  getUser = async (req: Request, res: Response, next: NextFunction) => {
    const { usuID } = req.params;

    const result = await this.userUseCases.getUserById(usuID);

    res.status(200).json(result);
  };

  deleteUser = async (req: Request, res: Response, next: NextFunction) => {
    const { usuID } = req.params;
    const result = await this.userUseCases.deleteUserById(usuID);
    res.status(200).json(result);
  };

  changeUserPassword = async (req: Request, res: Response, next: NextFunction) => {
    const user = { usuOldPassword: req.body.usuOldPassword, usuPassword: req.body.usuPassword, usuID: req.body.user.usuID };

    const result = await this.userUseCases.changeUserPassword(user.usuID, user.usuPassword);

    res.status(200).json(result);
  }

}