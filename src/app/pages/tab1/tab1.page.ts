import { Component } from '@angular/core';
import { Heroe, HeroeBD } from 'src/app/interfaces/heroes.interface';
import { HeroesBDService } from 'src/app/services/heroes-bd.service';
import { HeroesServiceService } from 'src/app/services/heroes-service.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  unosHeroes: Heroe[] = [];
  unTipo:string ='lista';

  //Nuevos datos BD
  misDatosHeroesBD: HeroeBD[] = [];

  constructor(//private data:HeroesServiceService,
    //Inyecto nuevo servicio para una BD
    private databd:HeroesBDService){

    //this.unosHeroes = data.getHeroes();

    console.log("DATOS",this.unosHeroes);

    this.getHeroesBD();
  }

  async getHeroesBD(){
    await this.databd
    .getHeroes()
    .toPromise()
    .then((data: any) => {
      this.misDatosHeroesBD = data.resp;
      console.log(this.misDatosHeroesBD);
    });
  }

  cambiarEvento(event:any){
    const botonActivado = event.detail.checked;
    if (botonActivado){
      this.unTipo = 'detalle';
    }
    else{
      this.unTipo = 'lista';
  }
}
}
