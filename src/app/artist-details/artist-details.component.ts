import { Component, OnInit, Input } from '@angular/core';
import { Artist } from '../models/artist';
import { ArtistService } from '../services/artist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artist-details',
  templateUrl: './artist-details.component.html',
  styleUrls: ['./artist-details.component.scss']
})
export class ArtistDetailsComponent implements OnInit {

  @Input()
  artist: Artist;
  router: Router;

  constructor() {
    this.artist = history.state.artist;
  }

  ngOnInit(): void { }

}
