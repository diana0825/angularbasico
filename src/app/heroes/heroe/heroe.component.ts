import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: './heroe.component.html'
})
export class HeroeComponent {
    nombre: string= "Iroman"
    edad: number = 55

    get nombrecapitalizado(): string {
        return this.nombre.toUpperCase()
    }

    obtenernombre(): string{
        return `${this.nombre} - ${this.edad}`
    }

    cambiarheroe(): void{
        this.nombre = 'Spiderman'; 
    }
    cambiaredad():void{
        this.edad = 34
    }
}