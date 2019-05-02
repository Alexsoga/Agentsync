import { Component, OnInit } from '@angular/core';
import {trigger,query,group,animate,style,transition}from '@angular/animations';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
   animations: [
    
    trigger('slideInOut', [
      transition('* => *, :enter', [
        query(':enter, :leave', style({ position: 'absolute', width: '100%' }), { optional: true }),
        query(':enter', style({ transform: 'translateX(-100vw)' }), { optional: true }),
        query(':leave', style({ transform: 'translateX(0vw)' }), { optional: true }),

        group([
          query(':leave', [
            animate('0.4s ease-out', style({
              transform: 'translateX(100vw)'
            }))
          ], { optional: true }),
          query(':enter', [
            animate('0.4s ease-out', style({
              transform: 'translateX(0)'
            }))
          ], { optional: true })
        ])
      ])
    ])
    
  ]
})
export class OrderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  triggerAnimation(outlet) {
    return outlet.activatedRouteData.animation || null;
  } 
}
