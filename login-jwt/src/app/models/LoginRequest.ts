export class LoginRequest {
    usuario: String;
    pass: String;

    constructor(usuario: String, pass: String) {
        this.usuario = usuario;
        this.pass = pass;
    }
}