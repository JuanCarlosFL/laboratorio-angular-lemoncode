import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  photoPath = 'assets/photo.jpeg';
  logoLinkedin = 'assets/linkedin.jpg';
  
  ngOnInit(): void {
    if (!this.auth.isLogged()) {
      this.router.navigate(['/home'])
    }
  }

}
