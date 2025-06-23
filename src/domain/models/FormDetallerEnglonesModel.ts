export class FormDetalleRenglones{
  constructor(
    public detID: string,
    public detContent: any,
    public report: Report[] = []
  ) {}
}