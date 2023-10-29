import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = false;
  private username = '';

  constructor() { }

  login(username: string, password: string): boolean {
    console.log(username, password)
    if (username === 'admin' && password === '1234') {
      this.loggedIn = true;
      this.username = username;
      // Guarda el estado de autenticación en el localstorage aquí si deseas el reto.
      return true;
    }
    return false;
  }

  logout(): void {
    this.loggedIn = false;
    this.username = '';
    // Elimina el estado de autenticación del localstorage si implementaste el reto.
  }

  isLogged(): boolean {
    return this.loggedIn;
  }

  getUsername(): string {
    return this.username;
  }
}
