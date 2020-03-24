import { Component, OnInit, Input } from '@angular/core';
import { Artist } from '../models/artist';

@Component({
  selector: 'app-artist-details',
  templateUrl: './artist-details.component.html',
  styleUrls: ['./artist-details.component.scss']
})
export class ArtistDetailsComponent implements OnInit {

  @Input()
  artist: Artist;

  constructor() {
    this.artist = history.state.artist;
  }

  ngOnInit(): void { }

}
