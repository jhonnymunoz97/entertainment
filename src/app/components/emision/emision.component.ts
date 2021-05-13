import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emision',
  templateUrl: './emision.component.html',
  styleUrls: ['./emision.component.css']
})
export class EmisionComponent implements OnInit {

  /* url_base:string = 'https://api.jikan.moe/v3/'
  url_status:string = 'status=airing' */
  status:boolean = false
  animes :any = []
  data:any = null

  constructor(private http: HttpClient) { }



  ngOnInit(): void {
    this.searchAnime()
  }

  searchAnime():any{
    if(this.status) this.animes = []
    this.http.get('https://api.jikan.moe/v3/search/anime?status=airing')
    .subscribe(
      response => {
        console.log(response)
        this.data = response
        console.log(this.data)
        this.status = true
        this.filter()
      },
      err => console.log(err),
      () => console.log('Petición finalizada')
    )
  }

  filter = ():void => {
    for (const anime of this.data.results) {
        this.animes.push(anime)
    }
   }

}
