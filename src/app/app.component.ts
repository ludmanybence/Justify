import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'justify';

  @ViewChild("video",{static:true}) video : ElementRef;

    public constructor() {
      this.handleVideo = this.handleVideo.bind(this);
    }

    public async ngOnInit() {
      let constraints = { video: {facingMode:{ exact: "environment" }}};
        if('mediaDevices' in navigator && navigator.mediaDevices.getUserMedia) {
          const stream = await navigator.mediaDevices.getUserMedia(constraints);
          this.handleVideo(stream);
        }
    }

    handleVideo(stream){
      this.video.nativeElement.srcObject = stream;
      console.log(stream);
    }

    videoError(){
      //
    }
}