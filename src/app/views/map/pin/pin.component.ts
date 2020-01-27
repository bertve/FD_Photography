import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';
import { Pin } from 'src/app/models/pin.model';
import { Photo } from 'src/app/models/photo.model';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DialogComponent } from 'src/app/views/dialog/dialog.component';

export interface DialogData {
  title: string;
  question: string;
}

@Component({
  selector: 'app-pin',
  templateUrl: './pin.component.html',
  styleUrls: ['./pin.component.css']
})

export class PinComponent implements OnInit {
  @Input() public pin : Pin ;
  @Output() public updatedPin = new EventEmitter<Pin>();
  @Output() public removeImg = new EventEmitter<Photo>();

  constructor(public dialog: MatDialog) { }
  title :string;
  question :string;
  item :string;
  ngOnInit() {
  }

  openDialog(photo :Photo):void{
    this.title='Delete image'
    this.question= `Are you sure you want to delete?`;
    this.item=`${photo.toString()}`;
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '20em',
      data: {title: this.title, question: this.question,item:this.item}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.deleteImage(photo);
        
      }
    });
    
  }

  deleteImage(photo){
      this.pin.removeImage(photo);
      this.updatedPin.emit(this.pin);
      this.removeImg.emit(photo);
  }

}
