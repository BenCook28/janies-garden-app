import { Injectable } from '@angular/core';
import { User } from '../models/user';

import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class FirebaseService{
	authState;

	signup(user: User){
		//Creating a new user using firebase authentication
		this.af.auth.createUserWithEmailAndPassword(user.email,user.pass)
		.then(() => {
			//Promise that gets fulfilled when the request is completed
			this.router.navigateByUrl('/addplant');
		})
		.catch((error) => {
			//Catches any errors that might pop up
			console.log(error);
		})
	}
	signin(user: User){
		this.af.auth.signInWithEmailAndPassword(user.email, user.pass)
		.then(() => {
			this.router.navigateByUrl('/my-garden');
		})
		.catch((e) => {
			console.log(e);
		})
	}
	signout(){
		this.af.auth.signOut()
		.then(() => {
			this.router.navigateByUrl('/signin');
		})
		.catch((e) => {
			console.log(e);
		})
	}
	isAuthed(){
		//Return the boolean value of the authstate
		//false->true->false
		//true->false->true
		//null->true->false
		//something->false->true
		return !!this.authState;
	}
	constructor(private af: AngularFireAuth, private router: Router){
		this.af.authState.subscribe((authState) => {
			//Set our authstate to be that of firebase's
			this.authState = authState
		})
	}
}