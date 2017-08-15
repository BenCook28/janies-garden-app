import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { AngularFireAuth } from 'angularfire2/auth';

import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';

import { Plant } from '../models/plants';

@Injectable()
export class PlantsService {
    createPlant(plant: Plant) {
		const userEmail = localStorage.getItem('userEmail');
        // this.afd.database.ref("plants/" + plant.common).set(plant)
        this.afd.database.ref("plants/" + userEmail).push(plant)
        .then(() => {
            this.router.navigateByUrl('/my-garden');
        })
        //.then
            //navigate to the url
        //.catch
            //print out the error
    }

    updatePlant(plant: Plant) {
        const userEmail = localStorage.getItem('userEmail');
        this.afd.database.ref("plants/" + userEmail).update(plant)
        .then(() => {
            this.router.navigateByUrl('/my-garden');
        })

        //.then
            //navigate to the url
        //.catch
            //print out the error
    }
    

    onSubmit(user: User){
        this.afa.auth.signInWithEmailAndPassword(user.email, user.pass)
        .then(() => {
        	const atSign = user.email.search('@');
        	const userEmail = user.email.slice(0, atSign);
			localStorage.setItem('userEmail', userEmail);
            this.router.navigateByUrl('/my-garden');
        })
        .catch((e) => {
            console.log(e);
        })
    }

    
    // getPlantInfo(email: string){
    //     //Returns promise with the snapshot of the user data
    //     this.afd.database.ref('user/' + email).once('value');
    
    //         .then(function(s) {
    //         return s.val();
    //     });
    getPlantInfo(){
		const userEmail = localStorage.getItem('userEmail');
        return this.afd.database.ref('plants/' + userEmail).once('value')
        .then(function(s) {
            return s.val();
        })
    }

    getPlant(s:String){
            this.afd.object('/plant/'+s)
    }
    // updatePlant(p:Plant){
    //         this.afd.object('/plant/'+p.common).update(p);
    // }

    //Each plant by individual user id.
    //each iitem to populate
    constructor(private afd: AngularFireDatabase, private afa: AngularFireAuth, private router: Router){}

}
