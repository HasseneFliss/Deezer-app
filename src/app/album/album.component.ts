import { Component, OnInit, Input } from '@angular/core';
import { Artist } from '../models/artist';
import { AlbumService } from '../services/album.service';
import { Albums } from '../models/albums';
import { Album } from '../models/album';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {

  @Input()
  albumArtist: Artist;
  albums: Album[];
  constructor(private albumService: AlbumService) { }

  ngOnInit(): void {
    this.albumService.getAlbums(this.albumArtist.id)
      .subscribe((x) => {
        if (!('error' in x)) {
          this.albums = x.data;
        }
      });
  }
}
