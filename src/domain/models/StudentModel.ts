import { Room } from "./RoomModel";

export class Student {
  constructor(
    public stuID: string,
    public stuCedula: string,
    public roomID: string,
    public room?: Room,
    public report: Report[] = []
  ) {}
}