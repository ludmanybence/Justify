import { Injectable } from '@angular/core';
import { TesseractWorker } from 'tesseract.js';

@Injectable({
  providedIn: 'root'
})
export class OcrService {

  constructor() { 
    this.processImage = this.processImage.bind(this);
  }

  _res : any;
  

  get res(){
    return this._res;
  }
  
  set res(res){
    this._res = res;
  }

  processImage(sourceImageUrl) {
  const worker = new TesseractWorker();

  worker.recognize(sourceImageUrl, 'eng')
  .progress(progress => {
    console.log('progress', progress);
  }).then(result => {
    console.log('result', result);
    this.res = result;
  });


  }
}
