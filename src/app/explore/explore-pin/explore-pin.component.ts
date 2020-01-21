import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Pin } from 'src/app/pin.model';

@Component({
  selector: 'app-explore-pin',
  templateUrl: './explore-pin.component.html',
  styleUrls: ['./explore-pin.component.css']
})
export class ExplorePinComponent implements OnInit {


  @Input() public pin : Pin ;
  public images : String[] = new Array<String>();
  @Input() public imageViewer : Boolean = false;
  @Output() public ImageViewerOutput = new EventEmitter<Boolean>();

  public imageViewerIndex = 0;
  constructor() { 
  }
  
  ngOnInit() {
    
  }

  showImageViewer(index){
    this.scrollToBottom();
    this.images = new Array<String>();
    this.pin.images.forEach(p => this.images.push(p.src));
    this.imageViewer = true;
    this.imageViewerIndex = index;
    this.ImageViewerOutput.emit(true);
  }

  hideImageViewer(){
    this.imageViewer=false;
    this.images = new Array<String>();
    this.imageViewerIndex=0;
  }

  private scrollToBottom(){
    window.scrollTo(0,document.body.scrollHeight);
  }

  handleEvent(event) {
    console.log(event);
 
    switch (event.name) {
      case 'close':
        this.hideImageViewer();
        console.log('imageviewer closed');
        break;
    }
  }
 
}
