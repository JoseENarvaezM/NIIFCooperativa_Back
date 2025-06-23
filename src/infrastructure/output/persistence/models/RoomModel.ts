import { UserEntity } from "./Usermodel";
import { StudentEntity } from "./StudentModel";

export class RoomEntity {
  constructor(
    public roomID: string,
    public roomName: string,
    public roomPassword: string,
    public roomDate: Date,
    public roomStatus: 'open' | 'closed',
    public roomAnswer: any,
    public usuID: string,
    public user?: UserEntity,
    public report: Report[] = [],
    public student: StudentEntity[] = []
  ) {}
}