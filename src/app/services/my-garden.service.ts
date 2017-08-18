import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Plant } from '../models/plants'

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class MyGardenService{
	createPlant(p: Plant){
		const userEmail = localStorage.getItem('userEmail');
		this.afd.database.ref('plants/' + userEmail).set(p)
	}
	
	delete(key: String){
		const userEmail = localStorage.getItem('userEmail');
		this.afd.database.ref('plants/' + userEmail + '/' + key).set(null).then((e)=>{
			console.log(e, "In the callback")
		})

	}

	updatePlant(p: Plant, id: String){
		const userEmail = localStorage.getItem('userEmail');
		this.afd.database.ref('plants/' + userEmail + '/' + id).update(p)
		.then(() => {
            this.router.navigateByUrl('/my-garden');
        })
	}

	getPlant(id: string){
		const userEmail = localStorage.getItem('userEmail');
		return this.afd.database.ref('plants/' + userEmail + '/' + id).once('value')
        .then(function(s) {
			console.log(s.val());
            return s.val();
        })
    }
        constructor(private afd: AngularFireDatabase, private afa: AngularFireAuth, private route: ActivatedRoute, private router: Router){
			
		}

	}
	
