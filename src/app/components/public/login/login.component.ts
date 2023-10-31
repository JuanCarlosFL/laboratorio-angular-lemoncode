import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  passwordError: boolean = false;
  loading = false;
  spinner = 'assets/loading.webp';

  constructor(
    private authService: AuthService, 
    private router: Router) {}

  ngOnInit(): void {
  }

  login(): void {
    this.loading = true;

    this.authService.login(this.username, this.password).subscribe({
      next: (loggedIn) => {
        if(loggedIn) {
          this.loading = false
          this.router.navigate(['/dashboard'])
        } else {
          this.passwordError = true;
        }
      },
      error: (error) => {
        console.error('Error al realizar la petición', error);
      },
      complete: () => {
        this.loading = false;
      }
    });
  }
}
