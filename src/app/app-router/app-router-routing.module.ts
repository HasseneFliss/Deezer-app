import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtistComponent } from '../artist/artist.component';
import { ArtistDetailsComponent } from '../artist-details/artist-details.component';


const routes: Routes = [
  {
    path: 'artist',
    children: [
      {
        path: '',
        component: ArtistComponent
      }
    ]
  },
  {
    path: 'details',
    component: ArtistDetailsComponent
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
