export class FormDetalleRenglonesEntity {
  constructor(
    public detID: string,
    public detContent: any,
    public report: Report[] = []
  ) {}
}