import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ArtistComponent } from './artist/artist.component';
import { ArtistsComponent } from './artists/artists.component';
import { HttpClientModule } from '@angular/common/http';
import { FanFormatterPipe } from './pipes/fan-formatter.pipe';
import { ArtistDetailsComponent } from './artist-details/artist-details.component';
import { TracklistComponent } from './tracklist/tracklist.component';
import { TrackComponent } from './track/track.component';
import { DurationFormatterPipe } from './pipes/duration-formatter.pipe';
import { FormsModule } from '@angular/forms';
import { AlbumComponent } from './album/album.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtistComponent,
    ArtistsComponent,
    FanFormatterPipe,
    ArtistDetailsComponent,
    TracklistComponent,
    TrackComponent,
    DurationFormatterPipe,
    AlbumComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
