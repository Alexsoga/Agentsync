import { Component, NgModule } from '@angular/core';
import {trigger,query,group,animate,style,transition}from '@angular/animations';
import {MessagingService} from './shared/messaging.service';
@NgModule()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('slideInOut', [
      transition('* => *, :enter', [
        query(':enter, :leave', style({ position: 'fixed', width: '100%',height:'100%' }), { optional: true }),
        query(':enter', style({ transform: 'translateX(-100vw)' }), { optional: true }),
        query(':leave', style({ transform: 'translateX(0vw)' }), { optional: true }),

        group([
          query(':leave', [
            animate('500ms ease-in-out', style({
              transform: 'translateX(100vw)'
            }))
          ], { optional: true }),
          query(':enter', [
            animate('500ms ease-in-out', style({
              transform: 'translateX(0)'
            }))
          ], { optional: true })
        ])
      ])
    ])
    // trigger('fadeAnimation', [

    //   transition( '* => *', [
  
    //       query(':enter', 
    //           [
    //               style({ opacity: 0 })
    //           ], 
    //           { optional: true }
    //       ),
  
    //       query(':leave', 
    //           [
    //               style({ opacity: 1 }),
    //               animate('0.4s ', style({ opacity: 0 }))
    //           ], 
    //           { optional: true }
    //       ),
  
    //       query(':enter', 
    //           [
    //               style({ opacity: 0 }),
    //               animate('0.4s', style({ opacity: 1 }))
    //           ], 
    //           { optional: true }
    //       )
  
    //   ])
    // ])
  ]
})
export class AppComponent {
  title = 'agent-sync';
  message;

  constructor(private msgService: MessagingService) {}

  ngOnInit() {
    this.msgService.getPermission()
    this.msgService.receiveMessage()
    this.message = this.msgService.currentMessage
  }
  triggerAnimation(outlet) {
    return outlet.activatedRouteData.animation || null;
  } 
}
