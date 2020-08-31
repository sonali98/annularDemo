import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {trigger, state, style, animate, transition} from '@angular/animations';


@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css'],
  animations: [
    trigger('rotatedState', [
      state('default', style({ transform: 'rotate(0)' })),
      state('rotated', style({ transform: 'rotate(180deg)' })),
      transition('rotated => default', animate('400ms ease-out')),
      transition('default => rotated', animate('400ms ease-in'))
  ])
]
})
export class MainNavComponent {


  constructor() {
  }

  imgurl = "assets/images/sonali.jpeg";
  logoUrl = "assets/images/logo.png";
  opened :boolean = true;
  state: string = 'default';
  isPin = false;
  isFullScreen = true;

    rotate() {
        this.state = (this.state === 'default' ? 'rotated' : 'default');
    }
}
