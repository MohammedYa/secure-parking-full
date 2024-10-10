import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core'; // Use inject for dependency injection
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const _AuthInstService = inject(AuthService); // Inject the service
  const _Router = inject(Router); // Inject the router

  if (_AuthInstService.UserData.getValue()==null) {
    _Router.navigateByUrl('/home');
    return false;
  } else {
   return true;
  }
};
