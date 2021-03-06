import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/auth.service';

import { User } from '../models/user';

@Component({
  selector: 'signin',
  templateUrl: './signin.component.html',
    // (ngSubmit)="onSubmit",
  styleUrls: ['./signin.component.css']
})

export class SigninComponent {

  public errors = {email: "", pass: ""};
  model = {email: "", pass: ""};
  user: User;
  fbs: FirebaseService;

  validate(){
  	this.errors = {email: "", pass: ""};
  	if(!this.model.email)
  		this.errors.email="Please provide a valid email";
  	if(!this.model.pass)
      this.errors.pass="Please provide a valid password";
  	
  	return(this.errors.email || this.errors.pass);

    }
  
   onSubmit(){
  	if(this.validate()){
      console.log('hi');
  		return;
  	}
    console.log('hello');
    const thisSaved = this;
  	this.user = new User(this.model.email,this.model.pass);
  	this.fbs.signin(this.user).then(function(err) {
      if(err !== undefined) {
        thisSaved.errors.pass = 'Email & password combination invalid, or account does not exist';
      }
    })
  }
  constructor(private firebase: FirebaseService) {
    this.fbs = firebase;
   }

}
