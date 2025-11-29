import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { tap } from 'rxjs/operators';
import { LoginService } from './login/login.service';
export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
  const auth = inject(LoginService);
  const token = auth.getToken();

  console.log('JWT Interceptor invoked. Token:', token);
  if (token) {
    req = req.clone({
      setHeaders: { Authorization: `Bearer ${token}` }
    });
  }

  return next(req).pipe(
    tap((event: any) => {
      // Capture token from login API response
      if (event?.body?.token) {
        auth.setToken(event.body.token);
      }
    })
  );
};
