import { HttpInterceptorFn } from '@angular/common/http';
import { AuthServiceService } from '../authenticationService/auth-service.service';
import { inject } from '@angular/core';

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {

  const authService = inject(AuthServiceService);
  console.log(`IN interceptor ${authService.getToken()}`);
  const token = authService.getToken();

  if (token) {
    console.log(`Interceptor - Token found: ${token}`);
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  } else {
    console.log('Interceptor - No token found');
  }

  return next(req);

};