import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  choseItem: number = 0;

  bgColor: string = '#5967E8';
  shadow: string = 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))';

  retItem(i: number){
    this.choseItem = i;
  }

  check(num: number) {
    return this.choseItem === num;
  }
}
