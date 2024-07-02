import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../model/usuario';
import { API_CONFIG } from '../config/api.config';
import { Observable } from 'rxjs';

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

  findAll(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${API_CONFIG.baseUrl}/usuarios`);
  }

  delete(id: string){
    return this.http.delete(`${API_CONFIG.baseUrl}/usuarios/${id}`, {
      observe:'response',
      responseType: 'text'
    })
  }

  findById(id: any) :Observable<Usuario>{
    return this.http.get<Usuario>(`${API_CONFIG.baseUrl}/usuarios/${id}`);
  }

  update(usuarioRequest: Usuario){
    return this.http.put( `${API_CONFIG.baseUrl}/usuarios/${usuarioRequest.id}`, usuarioRequest, {
      observe:'response',
      responseType: 'text'
    })  
  }
}
