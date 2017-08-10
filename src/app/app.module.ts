import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { NgModule } from '@angular/core';
import { KeysPipe } from './pipes/objects.keys';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AddPlantComponent } from './addplant/addplant.component';
// import { ImageContainerComponent } from './addplant/image-container/image-container.component';
// import { FileUploaderModule } from '@uniprank/ngx-file-uploader';

import { FirebaseService } from './services/auth.service';
import { PlantsService } from './services/plants.service';
// New imports to update based on AngularFire2 version 4
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { SplashComponent } from './splash/splash.component';
import { MyGardenComponent } from './my-garden/my-garden.component';

import { routes } from './services/routes';
import { UpdateComponent } from './update/update.component';

export const firebaseConfig = {
    apiKey: "AIzaSyCITF5P0jG-DokP636CZqQj0e3HpYIF3s0",
    authDomain: "janies-garden-app.firebaseapp.com",
    databaseURL: "https://janies-garden-app.firebaseio.com",
    projectId: "janies-garden-app",
    storageBucket: "",
    messagingSenderId: "337108773371"
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SigninComponent,
    SignupComponent,
    AddPlantComponent,
    SplashComponent,
    MyGardenComponent,
    KeysPipe,
    UpdateComponent
    // ImageContainerComponent/*,*/
    // FileUploaderModule
  ],
  imports: [
    // FileUploaderModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
         path: 'signin',
         component: SigninComponent
      },
      {
        path: 'signup',
        component: SignupComponent
      },
      {
        path: 'splash',
        component: SplashComponent
      },      
      {
        path: 'addplant',
        component: AddPlantComponent
      }
    ]),
    RouterModule.forRoot(routes)
    // AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [
    FirebaseService,
    AngularFireAuth,
    PlantsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
