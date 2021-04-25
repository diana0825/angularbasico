import { Component } from '@angular/core';
@Component({
    selector: 'app-contador',
    template: `
        <h1>{{title}}</h1>
        <h3>la base es: <strong>{{base}}</strong></h3>
        <!-- <button (click) = "contador = contador + 1"> +1</button> -->
        <!-- <button (click) = "sumar()"> +1</button> -->
        <!-- <button (click) = "acumular(1)"> +1</button> -->
        <button (click) = "acumular(base)"> +{{base}}</button>
        <span> {{contador}}</span>
        <!-- <button (click) = "contador = contador - 1"> -1</button> -->
        <!-- <button (click) = "restar()"> -1</button> -->
        <!-- <button (click) = "acumular(-1)"> -1</button> -->
        <button (click) = "acumular(-base)"> -{{base}}</button>
    `
})

export class ContadorComponent {
    title: string = 'Contador app';
    contador: number = 0;
    base: number = 5;
    // sumar(){
    //   this.contador += 1
    // }
    // restar(){
    //   this.contador -= 1
    // }
    acumular(valor: number){
      this.contador += valor;
    }
}