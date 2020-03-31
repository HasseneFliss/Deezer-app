import { Component, OnInit } from '@angular/core';
import { ArtistService } from '../services/artist.service';
import { Artist } from '../models/artist';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent implements OnInit {

  searchInput: string;
  artists: Artist[] = new Array();
  artists_list: Artist[] = new Array();
  constructor(private artistService: ArtistService) { }

  ngOnInit(): void {
    this.searchArtist();
  }

  searchArtist(): void {
    this.artists = new Array();
    const numbers = this.artistRandomTwenty(10);
    console.log(numbers[0] + ' ' + numbers[1]);

    if (this.searchInput === '') {
      this.artistService.getArtists(numbers[0], numbers[1])
        .subscribe((artist_x) => {
          this.artists_list = artist_x;
          this.artists_list.forEach(artist_each => {
            if (!('error' in artist_each)) {
              this.artists.push(artist_each);
            }
          });
        });
    } else {
      this.artistService.searchArtist(this.searchInput).subscribe((searchResult) => {
        searchResult.data.forEach(searchArtist => {
          this.artists.push(searchArtist);
        });
      });
    }
  }

  artistRandomTwenty(additionalArtists: number): number[] {
    const number = Math.round(Math.random() * 1000);
    return [number, (number + additionalArtists)];
  }

}
