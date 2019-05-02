import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { tap, map, take } from 'rxjs/operators';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private auth:AuthService, private router:Router){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean>  {
    return this.auth.users$.pipe(
        take(1),
      map(user => user && user.roles.admin),
      tap(admin => {
        if (!admin) {
          console.error('Access denied - Admins only');
          // re-route to wherever you want 
          this.router.navigate(['/login']);
        }
        
        })
    );
  }
}
