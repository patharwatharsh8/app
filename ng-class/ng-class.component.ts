import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
    
  public issucces=true;
  public isError=true;
  public isInfodata=true;
  public dynamicstyle={'backGround-color-success':this.issucces,'backGround-color-error':this.isError,'backGround-color-info':this.isInfodata};
}
