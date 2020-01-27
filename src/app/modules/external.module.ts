import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageViewerModule } from "ngx-image-viewer";
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAcLM1K4XFwZkRfFtDjiBciLKrfevqbO1E'
    }),
    ImageViewerModule.forRoot(),
    AngularFontAwesomeModule,
    YouTubePlayerModule
  ],
  exports: [
    AgmCoreModule,
    ImageViewerModule,
    AngularFontAwesomeModule,
    YouTubePlayerModule
  ]
})
export class ExternalModule { }
