import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'justify';

  @ViewChild("video",{static:true}) video : ElementRef;

    public constructor() {
      this.handleVideo = this.handleVideo.bind(this);
    }

    public async ngAfterViewInit() {
        if('mediaDevices' in navigator && navigator.mediaDevices.getUserMedia) {
          const stream = await navigator.mediaDevices.getUserMedia({ video: {facingMode:{ exact: "environment" }}});
          this.handleVideo(stream);
        }
    }

    handleVideo(stream){
      this.video.nativeElement.srcObject = stream;
    }
}
