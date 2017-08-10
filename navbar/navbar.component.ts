import { Component } from '@angular/core';
import { FirebaseService } from '../services/auth.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
	title = "Janie's Garden App";
	authed(){
		return this.fbs.isAuthed();
	}
	signout(){
		this.fbs.signout();
	}
	constructor(private fbs: FirebaseService){

	}
}
