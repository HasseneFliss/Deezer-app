import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, range, observable } from 'rxjs';
import { map, mergeMap, toArray } from 'rxjs/operators';
import { Artist } from '../models/artist';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {
  constructor(private http: HttpClient) { }
  getArtist(query?: number): Observable<Artist> {
    return this.http.get<Artist>(`${environment.apiUrl}${query}`);
  }

  getArtists(limit_lower: number, limit_count: number): Observable<Artist[]> {
    return range(limit_lower, limit_count)
      .pipe(
        map(x => this.getArtist(x)),
        mergeMap(x => x),
        toArray());
  }

}