import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Tracklist } from '../models/tracklist';
import { Artist } from '../models/artist';

@Injectable({
  providedIn: 'root'
})
export class TracklistService {

  @Input()
  artist: Artist;

  constructor(private http: HttpClient) { }

  getTracklist(): Observable<Tracklist> {
    this.artist = history.state.artist;
    return this.http.get<Tracklist>(`${environment.apiUrl}${this.artist.id}/top?limit=5`);
  }
}
