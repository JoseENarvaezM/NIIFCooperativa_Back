export class FormImpuestoDiferidoEntity {
  constructor(
    public impID: string,
    public impContent: any,
    public report: Report[] = []
  ) {}
}