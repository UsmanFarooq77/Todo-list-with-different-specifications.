import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanLoad, Route, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad, CanActivate {
  value: string = "User"
  constructor(private _authService: AuthService) {

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (this._authService.isCredential) {
      return true;
    }
    else if (this._authService.isCredential == null) {
      return false;
    }
    else {
      alert('You enter the incorrect user name. Try Again please!');
      return false;
    }
  }
  canLoad(route: Route, segments: UrlSegment[]): boolean | Observable<boolean> | Promise<boolean> {
    if (this._authService.isCredential) {
      return true;
    }
    else if (this._authService.isCredential == null) {
      return false;
    }
    else {
      alert('You enter the incorrect user name. Try Again please!');
    }
  }
}
