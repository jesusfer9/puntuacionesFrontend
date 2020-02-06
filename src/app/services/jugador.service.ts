import { Injectable } from '@angular/core';
import { Jugador } from '../models/jugador';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class JugadorService {
  url: String
  constructor(private httpClient: HttpClient) {
    this.url = 'http://localhost:5200/';
  }

  getAllJugadores(): Observable<any> {
    //Para el get no haria falta usar el header es mas bien para el put y el post
   // const headers = new HttpHeaders({'Content-Type' : 'application/json'})
    return this.httpClient.get(this.url + 'puntuacion' );
  }

  getJugador(id: string) {
    return this.httpClient.get(this.url + '/' + id);
  }

  addJugador(jugador: Jugador) {
    const body = JSON.stringify(jugador);
    const headers = new HttpHeaders({'Content-Type' : 'application/json'});
    return this.httpClient.post(this.url + 'puntuacion' , body , {headers});
  }

  removeJugador(id: string) {
    return this.httpClient.delete(this.url + 'puntuacion/' + id);
  }

  updateJugador(id: string, jugador: Jugador){
    const body = JSON.stringify(jugador);
    const headers = new HttpHeaders({'Content-Type' : 'application/json'});
    return this.httpClient.put(this.url + '/' + id , body , {headers});
  }

}
