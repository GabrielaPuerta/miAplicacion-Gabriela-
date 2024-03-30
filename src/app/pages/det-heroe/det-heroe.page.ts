import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe, HeroeBD } from 'src/app/interfaces/heroes.interface';
import { HeroesBDService } from 'src/app/services/heroes-bd.service';
import { HeroesServiceService } from 'src/app/services/heroes-service.service';

@Component({
  selector: 'app-det-heroe',
  templateUrl: './det-heroe.page.html',
  styleUrls: ['./det-heroe.page.scss'],
})
export class DetHeroePage implements OnInit {
  mostrarFotos(arg0: number|undefined) {
  throw new Error('Method not implemented.');
  }

  unId!:any;
  unHeroe!:HeroeBD;

  constructor(route: ActivatedRoute, 

     //data:HeroesServiceService) 
     private databd:HeroesBDService){ 
    this.unId = route.snapshot.params["id"];
    console.log('MONGOID',this.unId);

    //this.unHeroe = data.getUnHeroe(this.unId);
    //console.log(this.unHeroe)

    this.getUnHeroesBD(this.unId);
  }

  async getUnHeroesBD(unIdHeroe: string){
    await this.databd
    .getUnHeroe(unIdHeroe)
    .toPromise()
    .then((data: any) => {
      this.unHeroe = data.resp;
      console.log(this.unHeroe);
    });
  }

  ngOnInit() {
  }

}
