import { EventEmitter, Injectable, Output } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class ShareDataService {

  id_anime:number = 0

  constructor() { }

  getId = ():number => this.id_anime

  setAnime(id:number):void {
    this.id_anime = id
  }
}
