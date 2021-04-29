import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent {
@Input() personajes: Personaje[] = []
// tambien se puede asignarle un nuevo nombre al array
//  y nombrarlo asi en el html del component ejemplo:
// @Input('data') personajes: any[] = []

}
