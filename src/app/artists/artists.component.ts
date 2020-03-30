import { Component, OnInit } from '@angular/core';
import { ArtistService } from '../services/artist.service';
import { Artist } from '../models/artist';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent implements OnInit {

  artists: Artist[];
  artists_list: Artist[] = new Array();
  
  constructor(private artistService: ArtistService) { }

  ngOnInit(): void {
    this.artistService.getArtists(2, 22)
      .subscribe((artist_x) => {
        this.artists = new Array();
        this.artists_list = artist_x;
        this.artists_list.forEach(artist_each => {
          if (!('error' in artist_each)) {
            this.artists.push(artist_each);
          }
        });
      });
  }

}
