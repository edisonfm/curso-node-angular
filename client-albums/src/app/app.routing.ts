import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlbumsListComponent } from './components/albums-list/albums-list.component';
import { AlbumAddComponent } from './components/album-add/album-add.component';

const appRoutes: Routes = [
  { path: '', component: AlbumsListComponent },
  { path: 'crear-album', component: AlbumAddComponent },
  { path: '**', component: AlbumsListComponent }
]

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);