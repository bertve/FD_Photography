import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../views/admin/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from'../views/admin/admin.component';

@NgModule({
  declarations: [LoginComponent,AdminComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
  ]
})
export class AdminModule {}
