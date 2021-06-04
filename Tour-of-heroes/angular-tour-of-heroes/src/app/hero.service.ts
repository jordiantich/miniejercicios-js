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

  getHeroes():Observable<Hero[]>{
    this.messageService.add(`HeroService:Fetched Heroes`);
    return of(HEROES);
  }

  getHero(id:any):Observable<Hero>{
    this.messageService.add(`HeroService:Fetched with id:${id}`);
    let heroi:Hero;
    /*HEROES.forEach(hero => {
      if (id == hero.id){
      heroi = hero;
    }
    })*/

    heroi = HEROES.find(hero => hero.id === id)
    
    return heroi;
    }

}
