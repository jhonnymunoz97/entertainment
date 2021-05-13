import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimeViewComponent } from './components/anime-view/anime-view.component';
import { DirectoryComponent } from './components/directory/directory.component';
import { EmisionComponent } from './components/emision/emision.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { RankingComponent } from './components/ranking/ranking.component';
import { RegistroComponent } from './components/registro/registro.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'anime/:title',
    component: AnimeViewComponent
  },
  {
    path:'directorio',
    component: DirectoryComponent,
  },
  {
    path:'ranking',
    component: RankingComponent,
  },
  {
    path:'emision',
    component: EmisionComponent,
  },
  {
    path:'perfil',
    component: PerfilComponent,
  },
  {
    path:'registro',
    component: RegistroComponent,
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
