import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { AngularFireAuth } from 'angularfire2/auth';

import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';

import { Plant } from '../models/plants';

@Injectable()
export class PlantsService {
	createPlant(plant: Plant) {
		this.afd.database.ref("plants/" + plant.common).set(plant);
	}
	constructor(private afd: AngularFireDatabase, private af: AngularFireAuth, private router: Router){}

	onSubmit(user: User){
		this.af.auth.signInWithEmailAndPassword(user.email, user.pass)
		.then(() => {
			this.router.navigateByUrl('/my-garden');
		})
		.catch((e) => {
			console.log(e);
		})
	}
}
