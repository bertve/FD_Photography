import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  private height: number;
  private width : number;
  constructor() { }

  ngOnInit() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }

  getVideoHeight(){
    
    return this.height * 0.8;
  }

  getVideoWidth(){
    if(600 <= this.width && this.width <820 )
      return this.width * 0.6;
    return this.width * 0.8;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
  this.width = window.innerWidth;
  this.height = window.innerHeight;
}

}
