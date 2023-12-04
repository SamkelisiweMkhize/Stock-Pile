import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import { User, UserRequest } from 'src/app/interface/user';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {

  }
  constructor(private service: AuthService, private router: Router, private alertService: AlertService) {}

  form: any = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  })

  login() {
    this.service.loginFn(this.form.value).subscribe((res: UserRequest) => {
      console.log(res);
      let user: User = res.user

      localStorage.setItem('user', JSON.stringify(user))

      this.alertService.success('Login successfully')

      this.router.navigate(['/home']);
    }, error => {
      this.alertService.error(error.error.message)
    })
  }



}
