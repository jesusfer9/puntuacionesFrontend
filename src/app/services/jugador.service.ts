import { Injectable } from '@angular/core';
import { Jugador } from '../models/jugador';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class JugadorService {

  url: string;

  constructor(private httpClient: HttpClient) {
    this.url = 'http://localhost:5200/';
   }

  getAllJugadores(): Observable<any>{
    return this.httpClient.get(this.url + 'puntuaciones');
  }

  //TODO borrar, insertar, nuevo, update


}
