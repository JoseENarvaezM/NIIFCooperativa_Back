export class FormIngresosFancturacionEntity {
  constructor(
    public ingID: string,
    public ingContent: any,
    public report: Report[] = []
  ) {}
}