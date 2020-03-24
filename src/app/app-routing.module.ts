import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtistComponent } from './artist/artist.component';
import { ArtistDetailsComponent } from './artist-details/artist-details.component';
import { ArtistsComponent } from './artists/artists.component';
import { AlbumComponent } from './album/album.component';

const routes: Routes = [
  {
    path: 'artist',
    component: ArtistsComponent
  },
  {
    path: 'album',
    component: AlbumComponent
  },
  {
    path: 'details',
    component: ArtistDetailsComponent,
    children: [
      {
        path: ':id',
        component: ArtistDetailsComponent
      }
    ]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'artist'
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'artist'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
