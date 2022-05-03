import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visual',
  templateUrl: './visual.component.html',
  styleUrls: ['./visual.component.scss']
})
export class VisualComponent implements OnInit {
  condit: boolean = true;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {this.condit = false} , 2000);
  }

}
