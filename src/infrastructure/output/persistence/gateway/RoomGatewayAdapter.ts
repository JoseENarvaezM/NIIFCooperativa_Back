import { RoomGatewayIntPort } from "../../../../application/output/RoomGatewayIntPort";
import prisma from "../../../../config/database";
import { Room } from "../../../../domain/models/RoomModel";

export class RoomGatewayAdapter implements RoomGatewayIntPort {
    async createRoom(room: Room): Promise<Room | null> {
        const newRoomData = await prisma.room.create({
            data: {
                roomID: room.roomID,
                roomName: room.roomName,
                roomPassword: room.roomPassword,
                roomDate: room.roomDate,
                roomStatus: room.roomStatus,
                roomAnswer: room.roomAnswer,
                usuID: room.usuID
            }
        })
        return new Room(
            newRoomData.roomID,
            newRoomData.roomName,
            newRoomData.roomPassword,
            new Date(newRoomData.roomDate),
            newRoomData.roomStatus,
            null,
            newRoomData.usuID
        );
    }
    async obtainRoomByID(roomID: string): Promise<Room | null> {
        const roomData = await prisma.room.findUnique({
            where: { roomID }
        });
        if (!roomData) return null;
        return new Room(
            roomData.roomID,
            roomData.roomName,
            roomData.roomPassword,
            new Date(roomData.roomDate),
            roomData.roomStatus,
            null, 
            roomData.usuID
        );
    }
    async obtainRoomsByTeacher(teaID: string): Promise<Room[]> {
        const roomsData = await prisma.room.findMany({
            where: { usuID: teaID }
        });
        return roomsData.map(roomData => new Room(
            roomData.roomID,
            roomData.roomName,
            roomData.roomPassword,
            new Date(roomData.roomDate),
            roomData.roomStatus,
            null, 
            roomData.usuID
        ));
    }
    async obtainRoomsByUser(usuID: string): Promise<Room[]> {
        const roomsData = await prisma.room.findMany({
            where: { usuID }
        });
        return roomsData.map(roomData => new Room(
            roomData.roomID,
            roomData.roomName,
            roomData.roomPassword,
            new Date(roomData.roomDate),
            roomData.roomStatus,
            null, 
            roomData.usuID
        ));
    }
    async uptdateRoom(roomID: string, room: Room): Promise<Room | null> {
        const updatedRoomData = await prisma.room.update({
            where: { roomID },
            data: {
                roomName: room.roomName,
                roomPassword: room.roomPassword,
                roomDate: room.roomDate,
                roomStatus: room.roomStatus
            }
        });
        return new Room(
            updatedRoomData.roomID,
            updatedRoomData.roomName,
            updatedRoomData.roomPassword,
            new Date(updatedRoomData.roomDate),
            updatedRoomData.roomStatus,
            null, 
            updatedRoomData.usuID
        );
    }
    async updateRoomName(roomID: string, roomName: string): Promise<Room | null> {
        const updatedRoomData = await prisma.room.update({
            where: { roomID },
            data: { roomName }
        });
        return new Room(
            updatedRoomData.roomID,
            updatedRoomData.roomName,
            updatedRoomData.roomPassword,
            new Date(updatedRoomData.roomDate),
            updatedRoomData.roomStatus,
            null, 
            updatedRoomData.usuID
        );
    }
    async deleteRoomByID(roomID: string): Promise<void> {
        await prisma.room.delete({
            where: { roomID }
        });
    }
    async validateRoomPassword(roomPassword: string): Promise<Pick<Room, "roomID" | "roomStatus"> | null> {
        const room = await prisma.room.findFirst({
            where: { roomPassword }
        });
        return room ? { roomID: room.roomID, roomStatus: room.roomStatus } : null;
    }
}