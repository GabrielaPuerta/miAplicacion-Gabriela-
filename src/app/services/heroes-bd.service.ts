import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Heroe } from '../interfaces/heroes.interface';
import { URL_SERVICIO_HEROES } from 'src/config/url.servicios';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroesBDService {

  constructor(private http:HttpClient) { }

  getHeroes(){
    return this.http.get(`${URL_SERVICIO_HEROES}/heroes`, {}).pipe(
        map((res:any) => {
            console.log('HEROES',res);
            return res;
        })
    );
  }
  getUnHeroe(idHeroe: string){
    return this.http.get(`${URL_SERVICIO_HEROES}/heroes/${idHeroe}`, {}).pipe(
        map((res:any) => {
            console.log('HEROES',res);
            return res;
        })
    );
  }
}