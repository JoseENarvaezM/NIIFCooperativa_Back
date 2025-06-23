export class FormRentaLiquidaEntity {
  constructor(
    public renID: string,
    public renContent: any,
    public report: Report[] = []
  ) {}
}