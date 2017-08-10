import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';

import { Plant } from '../models/plants';

@Injectable()
export class PlantsService {
	createPlant(plant: Plant) {
		this.afd.database.ref("plants/" + plant.common).set(plant);
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
	
	constructor(private afd: AngularFireDatabase, private router: Router){}
}
