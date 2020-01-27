import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatInputModule,
  MatListModule,
  MatOptionModule,
  MatSelectModule,
  MatGridListModule,
  MatCardModule,
  MatIconModule,
  MatFormFieldModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatSidenavModule,
  MatDialogModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LayoutModule } from '@angular/cdk/layout';
import { MatJumbotronModule } from '@angular-material-extensions/jumbotron';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FlexLayoutModule,
    LayoutModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    MatOptionModule,
    MatSelectModule,
    MatGridListModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatSidenavModule,
    MatJumbotronModule.forRoot(),
    MatDialogModule
  ],
  exports: [
    MatButtonModule,
    FlexLayoutModule,
    LayoutModule,
    MatInputModule,
    MatListModule,
    MatOptionModule,
    MatSelectModule,
    MatGridListModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatSidenavModule,
    MatJumbotronModule,
    MatDialogModule
  ],
})
export class MaterialModule {}
