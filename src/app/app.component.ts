import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {OcrService} from './services/ocr.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'justify';

  @ViewChild("video",{static:true}) video : ElementRef;

    public constructor(private ocrs: OcrService) {
      this.handleVideo = this.handleVideo.bind(this);
    }

    n : any = navigator;


    ngOnInit() {
      let constraints = { video: {facingMode: {exact:"environment"} }};


      if(this.n.getUserMedia){                    // Standard
        this.n.getUserMedia(constraints, this.handleVideo, this.videoErr);
    }else if(this.n.webkitGetUserMedia){        // WebKit
        this.n.webkitGetUserMedia(constraints, this.handleVideo, this.videoErr);
    }else if(this.n.mozGetUserMedia){        // Firefox
        this.n.mozGetUserMedia(constraints, this.handleVideo  , this.videoErr);
    };
      let handleVideo = this.handleVideo;
        if('mediaDevices' in this.n && this.n.mediaDevices.getUserMedia) {
          this.n.mediaDevices.getUserMedia(constraints).then(stream=>handleVideo(stream))
        }
    }

    handleVideo(stream){
      this.video.nativeElement.srcObject = stream;
    }

    videoErr(e){
      console.log(e);
    }
}
