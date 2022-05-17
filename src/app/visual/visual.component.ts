import { Component, OnInit } from '@angular/core';
import { ConService } from '../con.service';
import { PrewInfo } from '../interfaces';

@Component({
  selector: 'app-visual',
  templateUrl: './visual.component.html',
  styleUrls: ['./visual.component.scss'],
})
export class VisualComponent implements OnInit {
  condit: boolean = true;
  mainInfo!: PrewInfo;

  constructor(private con: ConService) {}

  ngOnInit(): void {
    this.con.getDataForPreviewInfo().subscribe((data) => {
      this.mainInfo = data;
    });
    setTimeout(() => {
      this.condit = false;
    }, 20);
  }
}
