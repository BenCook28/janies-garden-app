import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AddPlantComponent } from './addplant/addplant.component';
import { ImageContainerComponent } from './addplant/image-container/image-container.component';
import { FileUploaderModule } from '@uniprank/ngx-file-uploader';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SigninComponent,
    SignupComponent,
    AddPlantComponent,
    ImageContainerComponent/*,*/
    // FileUploaderModule
  ],
  imports: [
    FileUploaderModule,
    BrowserModule,
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
        path: 'addplant',
        component: AddPlantComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
