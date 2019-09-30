import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes,Router } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { MapComponent } from './map/map.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './admin/auth.guard';
import { ExploreComponent } from './explore/explore.component';
const appRoutes: Routes = [
  {path:'home',component: HomeComponent},
  {path:'explore', component: ExploreComponent},
  {path:'about',component: AboutComponent},
  {path:'admin',component: AdminComponent},
  {path:'admin/editMap',canActivate: [AuthGuard],component:MapComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,    
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
