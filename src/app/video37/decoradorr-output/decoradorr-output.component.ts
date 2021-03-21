import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-decoradorr-output',
  templateUrl: './decoradorr-output.component.html',
  styleUrls: ['./decoradorr-output.component.css']
})
export class DecoradorrOutputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onAlertaPulsada($event){
    console.log($event);
    
  }

}
