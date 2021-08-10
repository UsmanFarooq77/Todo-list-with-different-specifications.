import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'todo-list';
  constructor(private _authService: AuthService) { }
  ngOnInit() {
    localStorage.removeItem('User');
  }
  login() {
    this._authService.login();
  }
}
