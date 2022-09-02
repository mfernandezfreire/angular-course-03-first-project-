import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators'

import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interfaces';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
  ) { }

  ngOnInit(): void {


    // Largest Way
    // this.activatedRoute.params
    //   .subscribe(({ id }) => {
    //     this.paisService
    //       .getPaisPorCodigo(id)
    //       .subscribe((pais) => {
    //         console.log(pais);
    //       })
    //   })


    // switchMap Mode
    // switchMap get an observable & returns another observable
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.paisService.getPaisPorCodigo(id)),
        // Tap short access to console the results
        tap(console.log)
      )
      .subscribe(pais => this.pais = pais[0])
  }

}
