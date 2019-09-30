import { Component, OnInit,Output,Input,EventEmitter} from '@angular/core';
import { Pin } from 'src/app/pin.model';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DialogComponent } from 'src/app/dialog/dialog.component';

export interface DialogData {
  title: string;
  question: string;
}


@Component({
  selector: 'app-pin-delete',
  templateUrl: './pin-delete.component.html',
  styleUrls: ['./pin-delete.component.css']
})
export class PinDeleteComponent implements OnInit {
  @Input() public inputPin : Pin;
  @Output() public deletedPin = new EventEmitter<Pin>();
  @Output() public updatedPin = new EventEmitter<Pin>();
  @Output() public deleteImages = new EventEmitter<Pin>();
  @Output() public deletePins = new EventEmitter();
  constructor(public dialog: MatDialog) { }
  title :string;
  question:string;
  item:string;
  ngOnInit() {
  }

  deletePin(){
    this.title='Delete pin'
    this.question= `Are you certain you want to delete?`;
    this.item=`${this.inputPin.toString()}`;

    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: {title: this.title, question: this.question,item: this.item}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      if(result){
        this.deletedPin.emit(this.inputPin);
      }
    });
  }

  deleteAllImages(){
    this.title='Delete all images of pin'
    this.question= 'Are you certain you want to delete all the images of the selected pin?';
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '20em',
      data: {title: this.title, question: this.question,item:""}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      if(result){
        this.inputPin.removeAllImages();
        this.updatedPin.emit(this.inputPin);
        this.deleteImages.emit(this.inputPin);
      }
    });

  }

  deleteAllPins(){
    this.title='Delete all pins'
    this.question= 'Are you certain you want to delete on the map?';
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '20em',
      data: {title: this.title, question: this.question,item:""}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      if(result){
        this.deletePins.emit();
      }
    });

  }
}
