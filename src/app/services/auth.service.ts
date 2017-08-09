import { Injectable } from '@angular/core';
import { User } from '../models/user';

import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class FirebaseService{
	fbs = this;
	authState;

	signup(user: User){
		console.log(user);
		this.af.auth.createUserWithEmailAndPassword(user.email,user.pass)
		.then((d) => {
			console.log('yo');
			this.router.navigateByUrl('/addplant');
		})
		.catch((e) => {
			console.log(e);
		})
	}
	signin(user: User){
		this.af.auth.signInWithEmailAndPassword(user.email, user.pass)
		.then(() => {
			console.log('yo');
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
	// splash(){
	// 	this.af.auth.splash()
	// 	.then(() => {
	// 		this.router.navigateByUrl('/splash');
	// 	})
	// 	.catch((e) => {
	// 		console.log(e);
	// 	})
	// }
	isAuthed(){
		console.log(this.authState);
		return !!this.authState;
	}
	constructor(private af: AngularFireAuth, private router: Router){
		this.af.authState.subscribe((authState) => {
			this.authState = authState
		})
	}
}