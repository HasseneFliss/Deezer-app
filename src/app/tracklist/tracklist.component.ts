import { Component, OnInit } from '@angular/core';
import { TracklistService } from '../services/tracklist.service';
import { Tracklist } from '../models/tracklist';
import { Track } from '../models/track';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tracklist',
  templateUrl: './tracklist.component.html',
  styleUrls: ['./tracklist.component.scss']
})
export class TracklistComponent implements OnInit {

  tracklist: Tracklist;
  tracks: Track[];
  artistId: number;

  constructor(private Activatedroute: ActivatedRoute, private tracklistService: TracklistService) { }

  ngOnInit(): void {

    this.Activatedroute.paramMap.subscribe(params => {
      this.artistId = Number(params.get('id'));
      console.log(this.artistId);
    });

    this.tracklistService.getTracklist(this.artistId)
      .subscribe((x) => {
        this.tracklist = x;
        this.tracks = this.tracklist.data;
      });

  }
}

