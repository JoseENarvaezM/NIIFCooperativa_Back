export class FormIngresosFancturacion {
  constructor(
    public ingID: string,
    public ingContent: any,
    public report: Report[] = []
  ) {}
}