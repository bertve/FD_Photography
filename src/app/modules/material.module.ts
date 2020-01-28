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
  MatDialogModule,
  MatSnackBarModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LayoutModule } from '@angular/cdk/layout';
import { MatJumbotronModule } from '@angular-material-extensions/jumbotron';
import { YouTubePlayerModule } from '@angular/youtube-player';

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
    MatDialogModule,
    YouTubePlayerModule,
    MatSnackBarModule
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
    MatDialogModule,
    YouTubePlayerModule,
    MatSnackBarModule
  ],
})
export class MaterialModule {}
