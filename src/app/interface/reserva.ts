export interface Reserva {
    id?: number,
    direccion: string,
    fecha: Date,
    hora: number,
    aceptada: boolean // aceptada true, rechazada false
}
