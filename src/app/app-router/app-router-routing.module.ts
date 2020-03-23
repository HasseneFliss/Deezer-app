import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtistComponent } from '../artist/artist.component';


const routes: Routes = [
  {
    path: '/artist',
    children: [
      {
        path: '',
        component: ArtistComponent
      }
    ]
  },
  {
    path: '/',
    redirectTo: "artist"
  },
  {
    path: '**',
    redirectTo: "artist"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRouterRoutingModule { }
