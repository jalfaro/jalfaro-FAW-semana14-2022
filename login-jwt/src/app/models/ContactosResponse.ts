export class ContactosResponse {
    status: number;
    mensaje: string;
    data: Array<Contacto>;

    constructor(status: number, mensaje: string, data: Array<Contacto>) {
        this.status = status;
        this.mensaje = mensaje;
        this.data = data;
    }
}

export class Contacto {
    id: number;
    nombre: string;
    telefono: string;

    constructor(id: number, nombre: string, telefono: string) {
        this.id = id;
        this.nombre = nombre;
        this.telefono = telefono;
    }
}