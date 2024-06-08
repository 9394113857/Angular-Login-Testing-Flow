import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  login(): void {
    this.authService.login(this.username, this.password).subscribe((res: any) => {
      this.authService.setToken(res.access_token);
      this.router.navigate(['dashboard']);
    }, (err) => {
      console.error(err);
    });
  }
}
