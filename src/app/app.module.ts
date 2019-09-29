import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {OcrService} from './services/ocr.service';

import { AppComponent } from './app.component';
import { LoadingScreenComponent } from './loading-screen/loading-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    LoadingScreenComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [OcrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
