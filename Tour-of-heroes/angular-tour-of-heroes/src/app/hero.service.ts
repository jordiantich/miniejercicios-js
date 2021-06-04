import { Injectable } from '@angular/core';
import {Hero} from './heroe';
import { HEROES } from './heroes/mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})


export class HeroService {

  constructor(private messageService:MessageService) {}

  getHeroes():Observable<any[]>{
    this.messageService.add(`HeroService:Fetched Heroes`);
    return of(HEROES);
  }

  getHero(id:any):Observable<any>{
    this.messageService.add(`HeroService:Fetched with id:${id}`);
    let heroi = HEROES.find(hero => hero.id === id);
    /*HEROES.forEach(hero => {
      if (id == hero.id){
      heroi = hero;
    }
    })*/

    return of(heroi);

    }

}
