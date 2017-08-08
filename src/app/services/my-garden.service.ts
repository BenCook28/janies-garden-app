import { Injectable } from '@angular/core';
import { User } from '../models/user';

import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class MyGardenService{

	onClick(){
		console.log("banana");
			this.router.navigateByUrl('/addplant');
        }
        constructor(private router: Router){}
	}
