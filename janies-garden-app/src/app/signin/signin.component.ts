import { Component } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})

export class SigninComponent {

  constructor(
  	public email: string,
  	public password: string
  	) { }
  ngOnInit() {
  }

}
