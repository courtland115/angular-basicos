import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent{

  heroes: string[] = ['Spiderman', 'Iroman', 'Goku', 'Thoer'];
  heroeBorrado: string = '';

  borrarHeroe() {
    console.log('Borrando....');
    
    //this.heroes.splice(3,1)
    this.heroeBorrado  =  this.heroes.shift() || ''; //elimina el primer dato del arreglo y lo almacena

  }
  
}
