import { Component, OnInit } from '@angular/core';
import { TracklistService } from '../services/tracklist.service';
import { Tracklist } from '../models/tracklist';

@Component({
  selector: 'app-tracklist',
  templateUrl: './tracklist.component.html',
  styleUrls: ['./tracklist.component.css']
})
export class TracklistComponent implements OnInit {

  tracklist: Tracklist;

  constructor(private tracklistService: TracklistService) { }

  ngOnInit(): void {
    this.tracklistService.getTracklist(2)
      .subscribe((x) => {
        this.tracklist = x;
        console.log('Tracklist');
        console.log(this.tracklist);
      });
  }

}
