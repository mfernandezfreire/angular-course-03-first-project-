import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  placeholder: string = 'Buscar país....';
  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];

  constructor(private PaisService: PaisService) { }

  buscar(termino: string) {
    console.log(this.termino);
    this.hayError = false;
    this.termino = termino;

    /**
     * New way to use subscribe => 
     * 
     * Example
     * 
     * of([1,2,3]).subscribe({next: (v) => console.log(v),error: (e) => console.error(e),complete: () => console.info('complete') })
     * 
     */

    this.PaisService.buscarPais(this.termino)
      .subscribe({
        next: (paises) => {
          this.paises = paises;
          console.log(paises)
        },
        error: (e) => {
          this.hayError = true;
          this.paises = [];
          console.log(e);
        },
        complete: () => {
          console.log('complete');
        }
      });
  }

  sugerencias(termino: string) {
    this.hayError = false;
    console.log('entra en sugerencias', termino)
  }

}
