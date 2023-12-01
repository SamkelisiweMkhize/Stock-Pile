import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {
    this.login();
  }
  constructor(private service: AuthService, private router: Router) {}

  form: any = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  })

  login() {
    this.service.loginFn(this.form.value).subscribe((res: any) => {
      console.log(res);
      this.router.navigate(['/home']);
    })
  }
}
