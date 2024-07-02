import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../model/usuario';
import { API_CONFIG } from '../config/api.config';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  create(usuarioRequest: Usuario){
    return this.http.post( `${API_CONFIG.baseUrl}/usuarios`, usuarioRequest, {
      observe:'response',
      responseType: 'text'
    })  
  }
}
