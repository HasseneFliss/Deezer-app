import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
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
}
