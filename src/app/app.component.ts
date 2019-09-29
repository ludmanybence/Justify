import { HelpersService } from './utils/helpers.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {OcrService} from './services/ocr.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Justify';

  @ViewChild("video",{static:true}) video : ElementRef;
  @ViewChild("frame",{static:false}) frame : ElementRef;

  public constructor(private ocrs: OcrService, private hs: HelpersService) {
    this.handleVideo = this.handleVideo.bind(this);
  }

  ngOnInit() {

    this.ocrs.results.subscribe((res)=>{
      console.log(res);
    })

    let constraints = { video: {facingMode: {exact:"environment"} }};

      let handleVideo = this.handleVideo;
      if('mediaDevices' in navigator && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia(constraints).then(stream=>handleVideo(stream))
      }
    }

  handleVideo(stream){
    this.video.nativeElement.srcObject = stream;
  }

  videoErr(e){
    console.log(e);
  }

  scan(){
    let context = this.frame.nativeElement.getContext('2d');
    context.drawImage(this.video.nativeElement, 0, 0);
    this.ocrs.processImage(this.hs.makeblob(this.frame.nativeElement.toDataURL("image/jpeg")));
  }
}
