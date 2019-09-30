import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Pin } from 'src/app/pin.model';
import { FormGroup, FormControl,Validators,FormBuilder} from '@angular/forms';
import { Photo } from 'src/app/photo.model';
@Component(
  {
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
  }
)
export class ImageUploadComponent implements OnInit {
  @Input() public inputPin : Pin;
  @Output() public updatedPin = new EventEmitter<Pin>();

  public pin: FormGroup;
  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.pin = this.fb.group({
      name : [this.inputPin.name,[Validators.required]],
      link : ['https://live.staticflickr.com/65535/40904704463_f6d3778e5f_k.jpg',[Validators.required]]
    })
  }


  onSubmit(){
    this.inputPin.name = this.pin.value.name;
    this.inputPin.addImage(new Photo(this.pin.value.link));
    this.updatedPin.emit(this.inputPin);
  }
  
}
