import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User, UserRequest } from 'src/app/interface/user';
import { AlertService } from 'src/app/services/alert.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css'],
})
export class RegisterPageComponent {
  // name: string = '';
  // email: string = '';
  // password: string = '';

  items: User[] = [];

  constructor(private service: AuthService, private router: Router, private alertService: AlertService) {}

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });

  ngOnInit(): void {
  }

  register() {

    const {username, email, password} = this.form.value

    if(!username || !email ||  !password) {
      this.alertService.error("All fields are required in order to register!!!")
      return;
    }

    this.service.registerFn(this.form.value).subscribe((res: UserRequest) => {
      console.log(res);
      this.alertService.success(res.message)
      this.router.navigate(['login']);
    }, error => {
      this.alertService.error(error.error.message)
    });
  }
}
