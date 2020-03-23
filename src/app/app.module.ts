import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ArtistComponent } from './artist/artist.component';
import { ArtistsComponent } from './artists/artists.component';
import { HttpClientModule } from '@angular/common/http';
import { FanFormatterPipe } from './pipes/fan-formatter.pipe';
import { ArtistDetailsComponent } from './artist-details/artist-details.component';
import { TracklistComponent } from './tracklist/tracklist.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtistComponent,
    ArtistsComponent,
    FanFormatterPipe,
    ArtistDetailsComponent,
    TracklistComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
