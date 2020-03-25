import { Component, OnInit, Input } from '@angular/core';
import { Artist } from '../models/artist';
import { ActivatedRoute } from '@angular/router';
import { ArtistService } from '../services/artist.service';

@Component({
  selector: 'app-artist-details',
  templateUrl: './artist-details.component.html',
  styleUrls: ['./artist-details.component.scss']
})
export class ArtistDetailsComponent implements OnInit {

  @Input()
  artist: Artist;
  artistId: number;

  constructor(private activatedroute: ActivatedRoute, private artistService: ArtistService) {
  }

  ngOnInit(): void {
    this.activatedroute.paramMap.subscribe(params => {
      this.artistId = Number(params.get('id'));
      console.log(this.artistId);

      this.artistService.getArtist(this.artistId)
        .subscribe((x) => {
          if (!('error' in x)) {
            this.artist = x;
          }

        });

    });
  }

}
