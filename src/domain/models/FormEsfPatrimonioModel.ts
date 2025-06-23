export class FormEsfPatrimonio{
  constructor(
    public esfID: string,
    public esfContent: any,
    public report: Report[] = []
  ) {}
}