import { AuthenticationService } from '../authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';

function comparePasswords(control: AbstractControl): { [key: string]: any } {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');
  return password.value === confirmPassword.value
    ? null
    : { passwordsDiffer: true };
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public admin : FormGroup;
  public errorMsg: string = null;

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private fb: FormBuilder,
    private _snackBar  : MatSnackBar
  ) {}

  ngOnInit() {
    this.admin = this.fb.group({
      username: ['', [Validators.required,Validators.email]],
      password: ['', Validators.required]
    });
  }

  showErrorSnackBar(){
    let config = new MatSnackBarConfig();
    config.duration = 5000;
    this._snackBar.open(this.errorMsg,'Retry',config);
  }

  onSubmit() {
    this.authService
      .login(this.admin.value.username, this.admin.value.password)
      .subscribe(
        val => {
          if (val) {
            
            if (this.authService.redirectUrl) {
              this.router.navigateByUrl(this.authService.redirectUrl);
              this.authService.redirectUrl = undefined;
            } else {
              this.router.navigate(['/admin/editMap']);
            }
          } else {
            this.errorMsg = `Could not login`;
            this.showErrorSnackBar();
          }
        },
        (err: HttpErrorResponse) => {
          console.log(err);
          if (err.error instanceof Error) {
            this.errorMsg = `Error while trying to login`;
            this.showErrorSnackBar();
          } else {
            this.errorMsg = `Error ${err.status} while trying to login`;
            this.showErrorSnackBar();
          }
        }
      );
  }
}