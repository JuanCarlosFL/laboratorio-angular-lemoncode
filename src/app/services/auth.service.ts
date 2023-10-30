import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = false;
  private username = '';

  constructor() { }

  login(username: string, password: string): boolean {
    if (username === 'master@lemoncode.net' && password === '12345678') {
      this.loggedIn = true;
      this.username = username;
      localStorage.setItem('loggedIn', 'true');
      localStorage.setItem('username', username);
      return true;
    }
    return false;
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
