import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { MoviesComponent } from './movies/movies.component';
import { CinemasComponent } from './cinemas/cinemas.component';
import { DetailsComponent } from './details/details.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'gallery', component: GalleryComponent },
    { path: 'movies', component: MoviesComponent },
    { path: 'cinemas', component: CinemasComponent },
    { path: 'details/:id', component: DetailsComponent },
    { path: '**', redirectTo: '' }
];
