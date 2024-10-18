import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { of, switchMap, take, tap } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.isUserLoggedIn.pipe(
    take(1),
    switchMap((isUserLoggedIn: boolean) => {
      if (isUserLoggedIn) {
        return of(true);
      } else {
        return authService.isTokenInStorage();
        return of(
          router.createUrlTree(['/auth'], {
            queryParams: { returnUrl: state.url },
          })
        );
      }
    })
  );
};
