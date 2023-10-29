import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
  }

  login(): void {
    if (this.authService.login(this.username, this.password)) {
      console.log('login')
      this.router.navigate(['/dashboard'])
    } else {
      console.log('na de na')
    }
  }
}
