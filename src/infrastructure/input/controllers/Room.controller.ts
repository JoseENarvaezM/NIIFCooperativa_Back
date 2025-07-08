import { Request, Response, NextFunction } from "express";
import { RoomUCIntPort } from "../../../application/input/RoomUCIntPort";
import { Room } from "../../../domain/models/RoomModel";

export class RoomController {
    constructor(private readonly roomUseCases: RoomUCIntPort) { }

    postRoom = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const newRoom = req.body;
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
            if (!result) {
                return res.status(404).json({ error: "Room not found" });
            }
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    };
    getRoomsByTeacher = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { teaID } = req.params;
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
            if (!result) {
                return res.status(404).json({ error: "Room not found" });
            }
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
            if (!result) {
                return res.status(404).json({ error: "Room not found" });
            }
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
    deleteRoomByDate = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { roomDate } = req.body;
            await this.roomUseCases.deleteRoomByDate(new Date(roomDate));
            res.status(204).send();
        } catch (error) {
            next(error);
        }
    };
    validateRoomPassword = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { roomID, roomPassword } = req.body;
            const isValid = await this.roomUseCases.validateRoomPassword(roomID, roomPassword);
            res.status(200).json({ isValid });
        } catch (error) {
            next(error);
        }
    };
}

