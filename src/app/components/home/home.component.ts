import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  url_base:string = 'https://api.jikan.moe/v3/'
  url_search:string = 'search/anime?q='
  data:any = null

  anime:string=''
  status:boolean = false
  animes :any = []
  

  constructor(private http: HttpClient) { 
  }

  ngOnInit(): void {

    
  }

  searchAnime(cadena:string):any{
    if(this.status) this.animes = []
    this.http.get(this.getUrlBase() + this.getSearch() + cadena)
    .subscribe(
      response => {
        this.data = response
        this.status = true
        this.filter()
      },
      err => console.log(err),
      () => console.log('Petición finalizada')
    )
  }


  filter = ():void => {
    for (const anime of this.data.results) {
      if(anime.title.toUpperCase().includes(this.anime.toUpperCase())){
        this.animes.push(anime)
      }
    }
   }

  getUrlBase = ():string => this.url_base
  getSearch = ():string => this.url_search
  getAnimes = ():string => this.data.results

}
