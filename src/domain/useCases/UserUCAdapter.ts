import { UserUCIntPort } from "../../application/input/UserUCIntPort";
import { UserGatewayIntPort } from "../../application/output/UserGatewayIntPort";
import { RoomGatewayIntPort } from "../../application/output/RoomGatewayIntPort";
import { ErrorFormatterIntPort } from "../../application/output/ErrorFormaterIntPort";
import { User } from "../models/UserModel";
import { Room } from "../models/RoomModel";
import { EncryptIntPort } from "../../application/output/EncryptIntPort";
export class UserUCAdapter implements UserUCIntPort {
  constructor(
    private userGateway: UserGatewayIntPort,
    private roomGateway: RoomGatewayIntPort,
    private errorFormatter: ErrorFormatterIntPort,
    private Encrypt: EncryptIntPort
  ) {}

  async getUserById(id: string): Promise<User | null> {
    const user = await this.userGateway.getUserById(id);

    if (user != null) {
      user.usuPassword = "";
      return user;
    }
    this.errorFormatter.errorNotFound(`Usuario con id ${id} no existe.`);
    return null;
  }

  async deleteUserById(id: string): Promise<void> {
    const user: User | null = await this.userGateway.getUserById(id);

    if (user === null) {
      this.errorFormatter.errorNotFound(`Usuario con id ${id} no existe.`);
      return;
    }

    if (user.usuRole === "professor") {
      const rooms: Room[] = await this.roomGateway.obtainRoomsByTeacher(id);

      if (rooms.length > 0) {
        const hasOpenRooms = rooms.some((room) => room.roomStatus === "open");

        if (hasOpenRooms) {
          this.errorFormatter.genericError(
            "No se puede eliminar el profesor porque tiene salas abiertas."
          );
        }
      }
    }

    await this.userGateway.deleteUserById(id);
    return;
  }

  async changeUserPassword(
    id: string,
    newPassword: string,
    usuOldPassword: string
  ): Promise<void> {
    const user = await this.userGateway.getUserById(id);
    if (!user) {
      this.errorFormatter.errorNotFound(`Usuario con id ${id} no existe.`);
      return;
    }
    if (await this.Encrypt.comparePassword(usuOldPassword, user.usuPassword)) {
      user.usuPassword = await this.Encrypt.hashPassword(newPassword);
      await this.userGateway.updateUser(id, user);
      return;
    }
    this.errorFormatter.genericError("La contraseña vieja es incorrecta.");
  }

  async createUser(user: User): Promise<User | null> {
    const exists = await this.userGateway.existByEmail(user.usuEmail);
    if (exists === false) {
      user.usuPassword = await this.Encrypt.hashPassword(user.usuPassword);
      return this.userGateway.createUser(user);
    }
    this.errorFormatter.errorExistsEntity(
      `Usuario con email ${user.usuEmail} ya existe.`
    );
    return null;
  }
  async updateUser(id: string, user: User): Promise<User | null> {
    const data = await this.userGateway.getUserById(id);
    if (!data) {
      this.errorFormatter.errorNotFound(`Usuario con id ${id} no existe.`);
      return null;
    }
    if (data.usuEmail !== user.usuEmail) {
      const exists = await this.userGateway.existByEmail(user.usuEmail);
      if (exists) {
        this.errorFormatter.errorExistsEntity(
          `Usuario con email ${user.usuEmail} ya existe.`
        );
        return null;
      }
    }
    if (user.usuPassword) {
      user.usuPassword = await this.Encrypt.hashPassword(user.usuPassword);
    } else {
      user.usuPassword = data.usuPassword;
    }
    return this.userGateway.updateUser(id, user);
  }

  //professor only
  listProfessorUsers(role: string): Promise<User[]> {
    if (role === "professor") {
      return this.userGateway.listProfessorUsers(role);
    }
    throw new Error(`Usuario con rol ${role} no es un profesor.`);
  }
}
