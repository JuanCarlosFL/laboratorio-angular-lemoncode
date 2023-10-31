import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = false;
  private username = '';

  constructor() { }

  login(username: string, password: string ): Observable<boolean> {
    if(username === 'master@lemoncode.net' && password === '12345678') {
      this.loggedIn = true;
      this.username = username;
      localStorage.setItem('loggedIn', 'true');
      localStorage.setItem('username', username);
      return of(true).pipe(delay(2000));
    } else {
      return of(false).pipe(delay(2000));
    }
  }

  logout(): void {
    this.loggedIn = false;
    this.username = '';
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('username');
  }

  isLogged(): boolean {
    return Boolean(localStorage.getItem('loggedIn'));
  }

  getUsername(): string {
    return localStorage.getItem('username') ?? 'No hay usuario logueado';
  }
}
