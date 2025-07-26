import { Request, Response, NextFunction } from "express";
import { RoomUCIntPort } from "../../../application/input/RoomUCIntPort";

export class RoomController {
    constructor(private readonly roomUseCases: RoomUCIntPort) { }

    postRoom = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const newRoom = req.body;

            newRoom.usuID = req.user.usuID;

            const result = await this.roomUseCases.createRoom(newRoom);
            res.status(201).json(result);
        } catch (error) {
            next(error);
        }
    };
    getRoom = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { roomID } = req.params;
            const result = await this.roomUseCases.obtainRoomByID(roomID);
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    };
    getRoomsByTeacher = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const teaID = req.user.usuID;
            const result = await this.roomUseCases.obtainRoomsByTeacher(teaID);
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    };
    getRoomsByUser = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { usuID } = req.params;
            const result = await this.roomUseCases.obtainRoomsByUser(usuID);
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    };
    putRoom = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { roomID } = req.params;
            const updatedRoom = req.body;
            const result = await this.roomUseCases.uptdateRoom(roomID, updatedRoom);
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    };
    putRoomName = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { roomID } = req.params;
            const { roomName } = req.body;
            const result = await this.roomUseCases.updateRoomName(roomID, roomName);
            res.status(200).json(result);
        }
        catch (error) {
            next(error);
        }
    };
    deleteRoom = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { roomID } = req.params;
            await this.roomUseCases.deleteRoomByID(roomID);
            res.status(204).send();
        } catch (error) {
            next(error);
        }
    };
    validateRoomPassword = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { roomPassword } = req.body;
            const roomID = await this.roomUseCases.validateRoomPassword(roomPassword);
            res.status(200).json({ roomID });
        } catch (error) {
            next(error);
        }
    };
    changeRoomState = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { roomID } = req.params;
            const { roomState } = req.body;
            const result = await this.roomUseCases.changeRoomState(roomID, roomState);
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    };
}

