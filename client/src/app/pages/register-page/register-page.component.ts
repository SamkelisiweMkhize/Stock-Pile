import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interface/user';
import { AuthService } from 'src/app/services/auth.service';



@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {
    // name: string = '';
    // email: string = '';
    // password: string = '';
  
    items: User[] = [];
  router: any;

    constructor(private service:AuthService){
    }


form: FormGroup = new FormGroup({

  username: new FormControl(''),
  email: new FormControl(''),
  password: new FormControl(''),

})

ngOnInit(): void {
  this.register();
  }


register(){

  this.service.registerFn(this.form.value).subscribe((res:any)=> {
    console.log(res);

    this.router.navigate(['loginpage'])
  })
}

}
