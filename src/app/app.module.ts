import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {OcrService} from './services/ocr.service';

import { AppComponent } from './app.component';
import { LoadingScreenComponent } from './loading-screen/loading-screen.component';
import { ScanSpinnerComponent } from './shared/spinners/scan-spinner/scan-spinner.component';
import { InfoComponent } from './components/info/info.component';

@NgModule({
  declarations: [
    AppComponent,
    LoadingScreenComponent,
    ScanSpinnerComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [OcrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
