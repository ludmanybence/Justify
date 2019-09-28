import { Injectable } from '@angular/core';

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

  }
}
