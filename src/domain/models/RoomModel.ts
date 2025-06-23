import { User } from "./UserModel";
import { Student } from "./StudentModel";

export class Room {
  constructor(
    public roomID: string,
    public roomName: string,
    public roomPassword: string,
    public roomDate: Date,
    public roomStatus: 'open' | 'closed',
    public roomAnswer: any,
    public usuID: string,
    public user?: User,
    public report: Report[] = [],
    public student: Student[] = []
  ) {}
}