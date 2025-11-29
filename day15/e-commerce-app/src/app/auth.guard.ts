import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login/login.service';

export const authGuard: CanActivateFn = (route, state) => {
  const auth = inject(LoginService);
  const router = inject(Router);
  console.log('Auth Guard invoked. Is logged in:', auth.isLoggedIn());  
  if (auth.isLoggedIn()) return true;

  router.navigate(['/login']);
  return true;
};
