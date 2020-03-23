import { Component, OnInit } from '@angular/core';
import { ArtistService } from '../services/artist.service';
import { Artists } from '../models/artists';
import { Artist } from '../models/artist';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent implements OnInit {

  artists: Artist[] = new Array();
  artist: Artist;
  artistList: Artists;

  constructor(private artistService: ArtistService) { }

  ngOnInit(): void {
    this.artistList = new Artists();
    for (let artistNo = 2; artistNo <= 11; artistNo++) {
      this.artistService.getArtist(artistNo)
        .subscribe((x) => {
          this.artist = x;
          this.artists.push(this.artist);
        });
    }
    this.artistList.artists = this.artists;

    console.log(this.artists);
  }

}
