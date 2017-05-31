import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes,RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import {JsonpModule} from '@angular/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import {MovieService} from './service/movies.service';
import { MoviesComponent } from './movies/movies.component';
import {GenreService} from './service/genre.service';
import { FavouritesListComponent } from './favourites-list/favourites-list.component'

const appRoutes: Routes = [
  { path: '', component: MoviesComponent},
  { path: 'favourites-list', component: FavouritesListComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    FavouritesListComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    InfiniteScrollModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [MovieService,GenreService],
  bootstrap: [AppComponent]
})
export class AppModule {}


