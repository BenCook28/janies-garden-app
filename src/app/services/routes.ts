import { SigninComponent } from '../signin/signin.component';
import { SignupComponent } from '../signup/signup.component';
import { SplashComponent } from '../splash/splash.component';
import { MyGardenComponent } from '../my-garden/my-garden.component';
import { AddPlantComponent } from '../addplant/addplant.component';
import { UpdateComponent } from '../update/update.component';
import { AuthGuard } from './auth-guard.service';
// import { AuthGuard } from '../guards/auth.guards';

export const routes = [
      // {
      //   path: '',
      //   canActivateChild: [AuthGuard],
      //   children: [
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
        path: 'my-garden',
        component: MyGardenComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'addplant',
        component: AddPlantComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'updatePlant/:id',
        component: UpdateComponent,
        canActivate: [AuthGuard]
      }
    // ]
  // }

]