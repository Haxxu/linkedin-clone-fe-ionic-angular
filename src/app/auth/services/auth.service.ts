import { UserResponse } from './../models/user-response.model';
import { inject, Injectable } from '@angular/core';
import { NewUser } from '../models/new-user.model';
import {
  BehaviorSubject,
  from,
  map,
  Observable,
  of,
  switchMap,
  take,
  tap,
} from 'rxjs';
import { Role, User } from '../models/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { jwtDecode } from 'jwt-decode';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user$ = new BehaviorSubject<User | null>(null);

  private apiUrl = environment.baseApiUrl;
  private httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  private http = inject(HttpClient);
  private router = inject(Router);

  get isUserLoggedIn(): Observable<boolean> {
    return this.user$.asObservable().pipe(
      switchMap((user: User | null) => {
        const isUserAuthenticated = user !== null;
        return of(isUserAuthenticated);
      })
    );
  }

  getUserRole(): Observable<Role | null> {
    return this.user$.asObservable().pipe(
      switchMap((user: User | null) => {
        return of(user?.role || null);
      })
    );
  }

  register(newUser: NewUser): Observable<User> {
    return this.http
      .post<User>(`${this.apiUrl}/auth/register`, newUser, this.httpOptions)
      .pipe(take(1));
  }

  login(email: string, password: string): Observable<{ token: string }> {
    return this.http
      .post<{ token: string }>(
        `${this.apiUrl}/auth/login`,
        { email, password },
        this.httpOptions
      )
      .pipe(
        take(1),
        tap((res: { token: string }) => {
          Preferences.set({
            key: 'token',
            value: res.token,
          });

          const decodedToken: UserResponse = jwtDecode(res.token);
          this.user$.next(decodedToken.user);
        })
      );
  }

  isTokenInStorage(): Observable<boolean> {
    return from(Preferences.get({ key: 'token' })).pipe(
      map((data) => {
        if (!data || !data.value) {
          return false;
        }

        try {
          const decodedToken: UserResponse = jwtDecode(data.value);
          const jwtExpirationInMsSinceUnixEpoch = decodedToken.exp * 1000;
          const isExpired =
            new Date() > new Date(jwtExpirationInMsSinceUnixEpoch);

          if (isExpired) {
            return false;
          }

          if (decodedToken.user) {
            this.user$.next(decodedToken.user);
            return true;
          }

          return false;
        } catch (error) {
          return false;
        }
      })
    );
  }

  logout(): void {
    this.user$.next(null);
    Preferences.remove({ key: 'token' });
    this.router.navigateByUrl('/auth');
  }
}
