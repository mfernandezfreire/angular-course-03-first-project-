import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent {

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  paisesRegionActiva: Country[] = [];


  constructor(private paisService: PaisService) { }

  getClaseCSS(region: string) {
    return (region === this.regionActiva)
      ? 'btn btn-primary mr-1'
      : 'btn btn-outline-primary mr-1'
  }

  activarRegion(region: string) {

    if (region === this.regionActiva) return;

    this.regionActiva = region;
    this.paisesRegionActiva = [];

    this.paisService
      .getPaisPorRegion(region)
      .subscribe((paises) => {
        this.paisesRegionActiva = paises;
        console.log(paises)
      });
      
  }


}
