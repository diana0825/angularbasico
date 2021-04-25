import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ['spiderman', 'Iroman', 'Hulk', 'Thor']
  elemento: string = ''
  borrarheroe(){
    this.elemento = this.heroes.shift() || '';
  }
}
