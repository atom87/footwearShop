import { Component, OnInit } from '@angular/core';
import { ShopService } from '../service/shop.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Log } from '../model/log';

@Component({
  selector: 'fw-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  registerUser: Log;
  customValidator: any;

  constructor(private service: ShopService, private fb: FormBuilder) { 
    this.createForm();
  }

  createForm(){
    this.registerForm = this.fb.group({
      'userName': ["", [Validators.required]],
  		'password': ["", [Validators.required]],
      'repeatPass': ["", [Validators.required]]
    }
  )}

  repeatPassword() : boolean{
    let newPassword : Log = new Log(this.registerForm.value);
    if(newPassword.password !== newPassword.repeatPass){
      return true;
    }
    // alert("Password missmatch!");
  }
  ngOnInit(): void {
  }

  registration(){
    let add : Log = new Log(this.registerForm.value);
    this.service.addUser(add).subscribe( res =>{
      this.registerForm.reset();
      alert("Successful registration!");
    })
  }

}
