import { Component, OnInit } from '@angular/core';
import { Jugador } from '../models/jugador';
import { ActivatedRoute, Router } from '@angular/router';
import { JugadorService } from '../services/jugador.service';

@Component({
  selector: 'app-edit-jugador',
  templateUrl: '../add-jugador/add-jugador.component.html',
  styleUrls: ['./edit-jugador.component.css']
})
export class EditJugadorComponent implements OnInit {

  public jugador: Jugador;

  constructor(private activateRoute: ActivatedRoute, private jugadorService: JugadorService, private router: Router) {
    this.jugador = new Jugador('', '', 0);
  }

  ngOnInit() {
    const elId = this.activateRoute.snapshot.params.id;
    this.jugadorService.getJugador(elId).subscribe(
      result => {

        this.jugador = result['datos'];
      },
      err => {
        alert(`Error al cargar el jugador ${err}`)
      }
    )
  }

  onSubmit() {
    const elId = this.activateRoute.snapshot.params.id;
    this.jugadorService.updateJugador(elId, this.jugador).subscribe(
      response =>{
        this.router.navigate(['/listaJugadores']);
      },
      error =>{
        alert('Error al guardar el jugador: ' + error);
      }
    )
  }

}
