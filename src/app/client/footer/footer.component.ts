import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, style,state } from '@angular/animations';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate(0,-750px)'
      })),
      state('out', style({
        transform: 'translate(0,0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  priceStatus:string = 'out';
  eventText:any='';
  onSwipe(evt:any)
  {
    console.log("work");
    this.priceStatus = this.priceStatus === 'out' ? 'in' : 'out';
   
    const x = Math.abs(evt.deltaX) > 40 ? (evt.deltaX > 0 ? 'right' : 'left'):'';
    const y = Math.abs(evt.deltaY) > 40 ? (evt.deltaY > 0 ? 'down' : 'up') : '';
    console.log("y "+evt.deltaY);

    this.eventText += '${x} ${y}<br/>'; 
   
  }
}


