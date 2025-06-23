export class FormImpuestoDiferido {
  constructor(
    public impID: string,
    public impContent: any,
    public report: Report[] = []
  ) {}
}