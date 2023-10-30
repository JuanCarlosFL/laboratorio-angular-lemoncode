import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  underConstructionImage = 'assets/under-construction.jpg'

  ngOnInit(): void {
    if (!this.auth.isLogged()) {
      this.router.navigate(['/home'])
    }
  }

}
