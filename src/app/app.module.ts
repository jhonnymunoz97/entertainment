import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsComponent } from './components/cards/cards.component';
import { HomeComponent } from './components/home/home.component';
//import { HttpRequestService } from './services/http-request.service';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { AnimeViewComponent } from './components/anime-view/anime-view.component';
import { DirectoryComponent } from './components/directory/directory.component';
import { RankingComponent } from './components/ranking/ranking.component';
import { EmisionComponent } from './components/emision/emision.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { RegistroComponent } from './components/registro/registro.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    HomeComponent,
    LoginComponent,
    NavComponent,
    FooterComponent,
    AnimeViewComponent,
    DirectoryComponent,
    RankingComponent,
    EmisionComponent,
    PerfilComponent,
    RegistroComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //HttpRequestService,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
