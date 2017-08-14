import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { AngularFireAuth } from 'angularfire2/auth';

import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';

import { Plant } from '../models/plants';

@Injectable()
export class PlantsService {
	createPlant(plant: Plant) {
		// this.afd.database.ref("plants/" + plant.common).set(plant)
		this.afd.database.ref("plants/").push(plant)
		.then(() => {
			this.router.navigateByUrl('/my-garden');
		})
		//.then
			//navigate to the url
		//.catch
			//print out the error
	}

updatePlant(plant: Plant) {
		this.afd.database.ref("plants/" + plant.common).update(plant);
		//.then
			//navigate to the url
		//.catch
			//print out the error
	}
	

	onSubmit(user: User){
		this.af.auth.signInWithEmailAndPassword(user.email, user.pass)
		.then(() => {
			this.router.navigateByUrl('/my-garden');
		})
		.catch((e) => {
			console.log(e);
		})
	}

	
	// getPlantInfo(email: string){
	// 	//Returns promise with the snapshot of the user data
	// 	this.afd.database.ref('user/' + email).once('value');
	
	// 		.then(function(s) {
	// 		return s.val();
	// 	});
	getPlantInfo(){
		return this.afd.database.ref('plants/').once('value')
		.then(function(s) {
			return s.val();
		})
	}

	getPlant(s:String){
			this.afd.object('/plant/'+s)
	}
	// updatePlant(p:Plant){
	// 		this.afd.object('/plant/'+p.common).update(p);
	// }

	//Each plant by individual user id.
	//each iitem to populate
	constructor(private afd: AngularFireDatabase, private af: AngularFireAuth, private router: Router){}

}
