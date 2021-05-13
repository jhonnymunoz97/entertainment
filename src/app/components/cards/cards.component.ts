import { getUrlScheme } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { ShareDataService } from 'src/app/services/share-data.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input() data: any
  cont:number = 0

  constructor(private service_anime: ShareDataService) {}

  ngOnInit(): void {}

  getUrl = (title:string):string =>{
    let url = title.split(' ').join('-')
    return url.split(':').join('').toLowerCase()
  }
  
  emitirId(id:number){
    this.service_anime.setAnime(id)
    localStorage.setItem('id_anime',JSON.stringify(id))
  }
   
}


