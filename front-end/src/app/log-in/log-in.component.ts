import { Component, OnInit } from '@angular/core';
import { ShopService } from '../service/shop.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Log } from '../model/log';

@Component({
  selector: 'fw-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  log: Log;
  logs: Log[];
  formLogin: FormGroup;

  constructor(private service: ShopService, private fb: FormBuilder, private router: Router) { 
    this.createForm();
  }

  ngOnInit() {
    this.updateLogs();
  }

  createForm(){
    this.formLogin = this.fb.group({
      'userName': '',
      'password': ''
    })
  }

  updateLogs(){
    this.service.getLogs().subscribe(res => {
      this.logs =  res.results;
    })
  }
logIn(){
  let check : Log = new Log(this.formLogin.value);
  for(let i=0; i<this.logs.length; i++){
    if(check.userName === this.logs[i].userName && check.password === this.logs[i].password){
      this.router.navigate(['/shop']);
      return;
    }
  }
  alert("Username or password isn't correct!");

}

}
