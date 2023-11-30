import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/interface/user';


@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {
  name: string = '';
  email: string = '';
  password: string = '';

  items: User[] = [];

  constructor(
    private service: AuthService,
  ) {}

}


