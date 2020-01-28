import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './modules/material.module';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { MainNavComponent } from './views/main-nav/main-nav.component';
import { AboutComponent } from './views/about/about.component';
import { HomeComponent } from './views/home/home.component';
import { MapComponent } from './views/map/map.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PinComponent } from './views/map/pin/pin.component';
import { ImageUploadComponent } from './views/map/pin/image-upload/image-upload.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PinDeleteComponent } from './views/map/pin/pin-delete/pin-delete.component';
import { AdminModule } from './modules/admin.module';
import { httpInterceptorProviders } from './interceptors';
import { DialogComponent } from './views/dialog/dialog.component';
import { ExploreComponent } from './views/explore/explore.component';
import { ExplorePinComponent } from './views/explore/explore-pin/explore-pin.component';
import { ExternalModule } from './modules/external.module';
import { VideoComponent } from './views/video/video.component';


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
    VideoComponent
  ],
  imports: [
    AdminModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserModule,
    MaterialModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ExternalModule
  ],
  
  entryComponents: [DialogComponent],

  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
