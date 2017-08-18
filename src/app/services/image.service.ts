import { Injectable, Inject } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database";
import { User } from '../models/user';
import { Plant } from "../models/plants";
import { FirebaseApp, AngularFireModule } from "angularfire2";
import * as firebase from "firebase/app";
import { FirebaseService } from "./auth.service"
import 'firebase/storage';

@Injectable()
export class ImageService {
  private PlantImage: firebase.storage.Reference;
  private Storage: firebase.storage.Storage;

  constructor(private db: FirebaseApp, private test: AngularFireModule) {
    this.Storage = db.storage();
    this.PlantImage = db.storage().ref('/plantimages/')
    // const atSign = user.email.search('@');
    // const userEmail = user.email.slice(0, atSign);
		// localStorage.setItem('userEmail', userEmail);
    // this.PlantImage = db.storage().ref("/plants/" + userEmail/);

  }
  uploadImage(img:any, id: String, cb?: (snapshot: firebase.storage.UploadTaskSnapshot, err?: Error) => 
    null | void){
      this.Storage.ref('/plantimages/' + id).put(img).then((snap) => { 
        if(cb){
          cb(snap, null)
        }
      }).catch(err => {
        if(cb){
          cb(null, err)
        }
      });
  }
//   uploadPicture(img: any, p: Plant cb?: (snapshot: firebase.storage.UploadTaskSnapshot, err?: Error) => null | void) {
    
    //how Ben and Caitlyn get user

    // const atSign = user.email.search('@');
    //     	const userEmail = user.email.slice(0, atSign);
    //         localStorage.setItem('userEmail', userEmail);
            
//     this.Storage.ref('/plants/' + p.$key).put(img).then((snap) => {//snap is a snapshot
//       if (cb) {
//         cb(snap, null);
//       }
//     }).catch(err => {
//       if (cb)
//         cb(null, err);
//     });
//   }
//   // uploadTrip(img:any,t:Trip,cb?:(snapshot:firebase.storage.UploadTaskSnapshot,err?:Error)=>null|void){
//   //   this.Storage.ref('/tripsImg/'+t.$key).put(img).then((snap)=>{//see above
//   //     if(cb){
//   //       cb(snap,null);
//   //     }
//   //   }).catch(err=>{
//   //     if(cb)
//   //       cb(null,err); 
//   //   });
//   // }
//   uploadTrip(img: any, t: String, cb?: (snapshot: firebase.storage.UploadTaskSnapshot, err?: Error) => null | void) {
//     this.Storage.ref('/tripsImg/' + t).put(img).then((snap) => {//see above
//       if (cb) {
//         console.log('image saved to storage')
//         cb(snap, null);
//       }
//     }).catch(err => {
//       if (cb){
//         console.log('image was not saved to db');
//         cb(null, err);
//       }
//     });
//   }

}