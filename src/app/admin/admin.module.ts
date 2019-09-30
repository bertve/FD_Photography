import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
//import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from'./admin.component';
/*const routes: Routes = [
  { path: 'login', component: LoginComponent },
];
*/
@NgModule({
  declarations: [LoginComponent,AdminComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    //RouterModule.forChild(routes)
  ]
})
export class AdminModule {}
