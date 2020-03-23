import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Tracklist } from '../models/tracklist';

@Injectable({
  providedIn: 'root'
})
export class TracklistService {
  constructor(private http: HttpClient) { }
  getTracklist(query?: number): Observable<Tracklist> {
    return this.http.get<Tracklist>(`${environment.apiUrl}${query}/top?limit=5`);
  }
}
