import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { AlbumService } from './../../services/album.service';
import { Album } from './../../models/album';

@Component({
  selector: 'album-add',
  templateUrl: './album-add.component.html',
  styleUrls: ['./album-add.component.css'],
  providers: [
    AlbumService
  ]
})
export class AlbumAddComponent implements OnInit {
  public titulo: string;
  public album: Album
  public errorMessage: any;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _albumService: AlbumService
  ) {
    this.titulo = 'Crear nuevo album';
  }

  ngOnInit() {
    this.album = new Album("", "");
  }

  onSubmit() {
    this._albumService.addAlbum(this.album).subscribe(
      response => {
        this.album = response.album;

        if (!response.album) {
          alert('Error en el servidor');
        } else {
          this._router.navigate(['/']);
        }
      },
      error => {
        this.errorMessage = <any>error;

        if (this.errorMessage != null) {
          console.log(this.errorMessage);
        }
      }
    )
  }

}
