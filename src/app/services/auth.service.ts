import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isCredential : boolean;
  constructor(private _router : Router) {
    this.isCredential = false;
   }
  login() {
    let value = prompt("Enter the Word 'User' for load the module of todo-list");
    if (value == "User") {
      localStorage.setItem('User', value);
      this.isCredential = true;
    }
    else if (value == null){
      this.isCredential = null;
    }
    else {
      this.isCredential = false;
    }
  }
}
