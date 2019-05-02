import { Component, OnInit,AfterViewInit  } from '@angular/core';
import { ClientService } from '../../shared/client.service';
import { AuthService } from '../../shared/auth.service';
import { Observable } from 'rxjs';
// import { routerTransition } from '../../router.animations';
// import {trigger,query,group,animate,style,transition}from '@angular/animations';

import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
  providers:[ClientService, AuthService],
  // animations: [routerTransition]
  // animations: [
  //   trigger('slideInOut', [
  //     transition('* => *, :enter', [
  //       query(':enter, :leave', style({ position: 'absolute', width: '100%' }), { optional: true }),
  //       query(':enter', style({ transform: 'translateX(-100vw)' }), { optional: true }),
  //       query(':leave', style({ transform: 'translateX(0vw)' }), { optional: true }),

  //       group([
  //         query(':leave', [
  //           animate('500ms ease-in-out', style({
  //             transform: 'translateX(100vw)'
  //           }))
  //         ], { optional: true }),
  //         query(':enter', [
  //           animate('500ms ease-in-out', style({
  //             transform: 'translateX(0)'
  //           }))
  //         ], { optional: true })
  //       ])
  //     ])
  //   ])
  // ]

  
})
export class ContainerComponent {
  showFiller = false;
  profile:any;
  userid:any;
  photo:any;
over;
empty;
  avisosTest :Observable<any>;
  
  constructor(private cli:ClientService,public auth:AuthService,public afauth:AngularFireAuth,private afs: AngularFirestore) { }

  ngOnInit() {
    this.profile = this.auth.users$;
  //   this.userid = this.afauth.auth.currentUser.uid;
  //  this.photo=this.afs.collection<any>('users').doc(this.userid).valueChanges();
    

  }
  logout(){
    this.auth.signOut;
  }
  ngAfterViewInit(){
   
    this.avisosTest =this.auth.clientqueryorderlen();
   }
   signout()
   {
     this.auth.signOut();
   }
  //   public getRouterOutletState(outlet) {
  //    return outlet.isActivated ? outlet.activatedRoute : '';
  //  }
  // triggerAnimation(outlet) {
  //   return outlet.activatedRouteData.animation || null;
  // } 
}
