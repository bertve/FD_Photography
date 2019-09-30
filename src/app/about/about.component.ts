import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators,FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public contact: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.contact = this.fb.group({
      firstname : [,[Validators.required]],
      name: [,[Validators.required]],
      email: [,[Validators.required,Validators.email]],
      message: [,[Validators.required]]
    })
  }
  onSubmit(){
    window.open(`mailto:frederic.dhondt@hotmail.com?subject=contact message photography blog from ${this.contact.value.firstname} ${this.contact.value.name}&body=${this.contact.value.message}`);
  }


}
