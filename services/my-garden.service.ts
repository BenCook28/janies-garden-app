import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Plant } from '../models/plants'

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class MyGardenService{
	createPlant(p: Plant){
		this.afd.database.ref('plant/' + p.common).set(p)
	}
	
	delete(key: String){
		console.log("Hi, we're in the delete function :) ")
		this.afd.database.ref('plants/' + key ).set(null).then((e)=>{
			console.log(e, "In the callback");
			window.location.reload();
		})

	}

        constructor(private afd: AngularFireDatabase, private route: ActivatedRoute, private router: Router){
			
		}

	}
	
