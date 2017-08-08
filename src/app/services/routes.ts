import { SigninComponent } from '../signin/signin.component';
import { SignupComponent } from '../signup/signup.component';
import { SplashComponent } from '../splash/splash.component';
import { MyGardenComponent } from '../my-garden/my-garden.component';
import { AddPlantComponent } from '../addplant/addplant.component';

export const routes = [
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
        path: 'my-garden',
        component: MyGardenComponent
      },
      {
        path: 'addplant',
        component: AddPlantComponent
      }
]