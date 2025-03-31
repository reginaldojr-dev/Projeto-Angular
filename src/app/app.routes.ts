import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NewsSectionComponent } from './components/news-section/news-section.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },  
  { path: 'news', component: NewsSectionComponent }
];
