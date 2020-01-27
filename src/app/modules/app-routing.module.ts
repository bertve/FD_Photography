import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { AdminComponent } from '../views/admin/admin.component';
import { AboutComponent } from '../views/about/about.component';
import { HomeComponent } from '../views/home/home.component';
import { MapComponent } from '../views/map/map.component';
import { PageNotFoundComponent } from '../views/page-not-found/page-not-found.component';
import { AuthGuard } from '../views/admin/auth.guard';
import { ExploreComponent } from '../views/explore/explore.component';
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
