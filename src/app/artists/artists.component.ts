import { Component, OnInit } from '@angular/core';
import { ArtistService } from '../services/artist.service';
import { Artist } from '../models/artist';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent implements OnInit {

  artists: Artist[] = new Array();
  artist: Artist;

  constructor(private artistService: ArtistService) { }

  ngOnInit(): void {
    for (let artistNo = 2; artistNo <= 22; artistNo++) {
      this.artistService.getArtist(artistNo)
        .subscribe((x) => {
          if (!('error' in x)) {
            this.artists.push(x);
          }

        });
    }
  }

}
