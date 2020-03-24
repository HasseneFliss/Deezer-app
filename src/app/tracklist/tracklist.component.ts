import { Component, OnInit } from '@angular/core';
import { TracklistService } from '../services/tracklist.service';
import { Tracklist } from '../models/tracklist';
import { Track } from '../models/track';

@Component({
  selector: 'app-tracklist',
  templateUrl: './tracklist.component.html',
  styleUrls: ['./tracklist.component.scss']
})
export class TracklistComponent implements OnInit {

  tracklist: Tracklist;
  tracks: Track[];

  constructor(private tracklistService: TracklistService) { }

  ngOnInit(): void {
    console.log("Reading tracklist data");
    this.tracklistService.getTracklist()
      .subscribe((x) => {
        this.tracklist = x;
        this.tracks = this.tracklist.data;
        console.log(this.tracks);
      });
    
    console.log("Done reading data");
  }

}
