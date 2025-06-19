export interface ActivosFijos {
    id: string;
    nombre: string;
    descripcion: string;
    fechaAdquisicion: Date;
    valorAdquisicion: number;
    vidaUtil: number;
    ubicacion: string;
}
export interface ActivosFijosUCIntPort {
    listActivosFijos(): Promise<ActivosFijos[]>;
    getIDActivosFijos(id:string): Promise<ActivosFijos>;
    createActivoFijo(activo: ActivosFijos): Promise<ActivosFijos>;
    updateActivoFijo(id: string, activo: ActivosFijos): Promise<ActivosFijos>;
};