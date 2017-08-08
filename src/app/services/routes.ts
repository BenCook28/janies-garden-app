import { SigninComponent } from '../signin/signin.component';
import { SignupComponent } from '../signup/signup.component';
import { SplashComponent } from '../splash/splash.component';

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
  }
]