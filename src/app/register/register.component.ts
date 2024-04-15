import { Component } from '@angular/core';
import { FormBuilder, FormControlOptions, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  registerForm : FormGroup ;

   users : any =[]
  constructor(private fb : FormBuilder){
    this.registerForm = this.fb.group({

      userName : ['' , [Validators.required , Validators.minLength(2) ,Validators.maxLength(20)  , Validators.pattern(/^[A-Z]{1}[a-zA-Z0-9]{5,}$/)]],
      email: ['', [Validators.required , Validators.email]],
      password : ['' , [Validators.required , Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/) , Validators.minLength(8)]],
      rePassword : ['' ,],
      phone : ['' , [Validators.required  , Validators.pattern(/^(002)01[0125][0-9]{8}$/)]],
    }
    , {validators:[this.confirmPassword] as FormControlOptions})

  }


  confirmPassword(group:FormGroup) : void{
    const password = group.controls['password'];
    const rePassword = group.controls['rePassword'];

      if(rePassword?.value === ""){
        rePassword?.setErrors({require:true})
      }
      else if(password?.value != rePassword?.value ){

        rePassword?.setErrors({mismatch:true})
    }


  }



  handleregisterForm():void{


    if(this.registerForm.value == ""){
      console.log("empty");

    }else{

      console.log(this.users);
        this.users.push(this.registerForm.value)
        localStorage.setItem( "users", JSON.stringify ( this.registerForm.value))
    }

    }
}
