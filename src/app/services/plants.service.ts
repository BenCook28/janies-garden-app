import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';

import { Plant } from '../models/plants';

@Injectable()
export class PlantsService {
	createPlant(plant: Plant) {
		this.afd.database.ref("plants/" + plant.common).set(plant);
	}
	constructor(private afd: AngularFireDatabase, private router: Router){}
}
