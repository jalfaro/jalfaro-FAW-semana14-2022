import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ContactosResponse } from '../models/ContactosResponse';
import { LoginRequest } from '../models/LoginRequest';
import { LoginResponse } from '../models/LoginResponse';

const BE_API = environment.backend_url;
const header = {headers: new HttpHeaders().set('Content-Type', 'application/json')}

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) { }

  login(datos: LoginRequest) {
    return this.http.post<LoginResponse>(BE_API + "/login", datos, header);
  }

  getContactos(token: string) {
    return this.http.get<ContactosResponse>(BE_API + "/contactos?token=" + token, header);
  }
}
