import { Component, OnInit } from '@angular/core';
//para utilizar el servicio
import { HeroesService,Heroe } from '../../servicios/heroes.service';

import { Router } from '@angular/router';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {


heroes:Heroe[]=[];

  constructor(private _heroesService:HeroesService,
              private router:Router) {
       //console.log("es primero el constructor"); 
   }

  ngOnInit() {
       this.heroes=this._heroesService.getHeroes();
       
      // console.log(this.heroes);
  }

verHeroe(idx:number){
      //console.log(idx);
      this.router.navigate(['/heroe',idx]);
   }
}
