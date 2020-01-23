import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { MainNavComponent } from './main-nav/main-nav.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { MapComponent } from './map/map.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PinComponent } from './map/pin/pin.component';
import { ImageUploadComponent } from './map/pin/image-upload/image-upload.component';
import { AgmCoreModule } from '@agm/core';
import { ReactiveFormsModule } from '@angular/forms';
import { PinDeleteComponent } from './map/pin/pin-delete/pin-delete.component';
import { AdminModule } from './admin/admin.module';
import { httpInterceptorProviders } from './interceptors';
import { DialogComponent } from './dialog/dialog.component';
import { MatDialogModule } from '@angular/material';
import { ExploreComponent } from './explore/explore.component';
import { ExplorePinComponent } from './explore/explore-pin/explore-pin.component';
import { ImageViewerModule } from "ngx-image-viewer";
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    MainNavComponent,
    AboutComponent,
    HomeComponent,
    MapComponent,
    PinComponent,
    ImageUploadComponent,
    PinDeleteComponent,
    DialogComponent,
    ExploreComponent,
    ExplorePinComponent,
  ],
  imports: [
    AdminModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserModule,
    MaterialModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAcLM1K4XFwZkRfFtDjiBciLKrfevqbO1E'
    }),
    AdminModule,
    MatDialogModule,
    ImageViewerModule.forRoot(),
    AngularFontAwesomeModule
  ],
  
  entryComponents: [DialogComponent],

  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
