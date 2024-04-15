import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginFormControls = {
    email : '',
    password: ''
  }


  handleSubmitForm(form : any){
    console.log(form)
    // console.log(form.value)
    if(form.valid) {
      console.log(this.loginFormControls)
      // API CALL
    }
  }
}
