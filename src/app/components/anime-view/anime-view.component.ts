import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ShareDataService } from 'src/app/services/share-data.service';
//import {ShareDataService} from '../../services/share-data.service'

@Component({
  selector: 'app-anime-view',
  templateUrl: './anime-view.component.html',
  styleUrls: ['./anime-view.component.css']
})
export class AnimeViewComponent implements OnInit {

  base_url: string = 'https://api.jikan.moe/v3/anime/'
  private id: number = 0
  status: any = {
    airing: false,
    finish: false,
    next: false,
    value: ''
  }

  @Input() anime: any =''

  constructor(private service_anime: ShareDataService, private http: HttpClient) { }

  ngOnInit(): void {
    this.getAnime()    
  }
  
  getAnime():void{
    if(this.service_anime.getId() === 0) {
      let id: any = localStorage.getItem('id_anime')
      this.service_anime.setAnime(JSON.parse(id));
    }
    this.http.get(this.base_url + this.service_anime.getId())
    .subscribe(
      resp => {
        this.anime = resp
        localStorage.setItem('anime',JSON.stringify(this.anime))
        if(this.anime.status === 'Currently Airing') {this.status.airing = true;this.status.value = 'EN EMISIÓN';}
        if(this.anime.status === 'Finished Airing')  {this.status.finish = true;this.status.value = 'FINALIZADO';}
        if(this.anime.status === 'Not yet aired')  {this.status.next = true;this.status.value = 'PROXIMAMETE';}
      },
      err => console.error(err),
      () => console.log('Petición Finaizada')
    )
  }
}
