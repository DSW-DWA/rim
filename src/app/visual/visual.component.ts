import { Component, OnInit } from '@angular/core';
import { ConService } from '../con.service';
import { PreviewInfo } from '../interfaces';

@Component({
  selector: 'app-visual',
  templateUrl: './visual.component.html',
  styleUrls: ['./visual.component.scss'],
})
export class VisualComponent implements OnInit {
  condition: boolean = true;
  mainInfo!: PreviewInfo;

  constructor(private con: ConService) {}

  ngOnInit(): void {
    this.con.getDataForPreviewInfo().subscribe((data) => {
      this.mainInfo = data;
      this.condition = false;
    });
  }
}
