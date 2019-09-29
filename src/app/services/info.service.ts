import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor() { }

  findProducts(recogResult){
    let titles = [];

    recogResult.lines.foreach((line)=> titles.push(line.text));

    return titles;
    
  }


}
