import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideoListComponent } from './video-list/video-list.component';
import { CommonModule } from '@angular/common';
import { VideoViewerComponent } from './video-viewer/video-viewer.component';
import { StatFiltersComponent } from './stat-filters/stat-filters.component';
import { StatGraphsComponent } from './stat-graphs/stat-graphs.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  imports: [
  	CommonModule,
  	RouterModule.forRoot(routes)],
  exports: [
  	RouterModule],
  declarations: [
    DashboardComponent,
    VideoListComponent,
    VideoViewerComponent,
    StatFiltersComponent,
    StatGraphsComponent,
  ],
})
export class AppRoutingModule { }
