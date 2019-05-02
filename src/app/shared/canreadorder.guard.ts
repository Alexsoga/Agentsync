import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { tap, map, take } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CanreadorderGuard implements CanActivate {

  constructor(private auth: AuthService){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.auth.users$.pipe(
      take(1),
      map(user => user && this.auth.canReadOrder(user) ? true : false),
      tap(canView =>{
        if (!canView)
        {
          console.error('Access Denied')
        }
      })

    );
  }

}
