import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-loading-screen',
  templateUrl: './loading-screen.component.html',
  styleUrls: ['./loading-screen.component.css']
})
export class LoadingScreenComponent implements OnInit {

  loading = true;
  enabled = true;
  logo = "/assets/logo.png";

  constructor() { }

  ngOnInit() {
  } 

  enter(){
    this.loading = false;
    setTimeout(()=>{
      this.enabled = false;
    },1000);
  }
}
