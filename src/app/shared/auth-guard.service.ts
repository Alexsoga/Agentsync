import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';

import { AngularFireAuth } from '@angular/fire/auth';

import { tap, map, take } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor( private router: Router, private afAuth:AngularFireAuth) { }
  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
   return this.afAuth.authState.pipe(
     take(1),
     map(user=> !! user),
     tap(loggedIn => {
       if(!loggedIn)
       {
        console.log("Access Denied from Authguard login")
        this.router.navigate(['/login'])
       }
     })
   )
  
   

  }
     
}
