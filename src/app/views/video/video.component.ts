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
    return this.height * 0.91;
  }

  getVideoWidth(){
    return this.width * 0.9;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
  this.width = window.innerWidth;
  this.height = window.innerHeight;
}

}
