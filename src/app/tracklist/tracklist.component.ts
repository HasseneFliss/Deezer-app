import { Component, OnInit } from '@angular/core';
import { TracklistService } from '../services/tracklist.service';
import { Tracklist } from '../models/tracklist';
import { Track } from '../models/track';

@Component({
  selector: 'app-tracklist',
  templateUrl: './tracklist.component.html',
  styleUrls: ['./tracklist.component.css']
})
export class TracklistComponent implements OnInit {

  tracklist: Tracklist;
  tracks: Track[];

  constructor(private tracklistService: TracklistService) { }

  ngOnInit(): void {
    this.tracklistService.getTracklist(2)
      .subscribe((x) => {
        this.tracklist = x;
        this.tracks = this.tracklist.data;
      });
      
  }

}
