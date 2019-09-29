import { Injectable } from '@angular/core';

import * as $ from 'jquery';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OcrService {

  constructor() { 
    this.processImage = this.processImage.bind(this);
  }

  resultSubject : Subject<any> = new Subject();

  public get results() : Observable<any>{   
    return this.resultSubject;
  }

  processImage(sourceImage) {
        let subscriptionKey = "c7fc33e4aaee4ea1863227ff796f6ba8";
        let endpoint = "https://northeurope.api.cognitive.microsoft.com/";
        if (!subscriptionKey) { throw new Error('Set your environment variables for your subscription key and endpoint.'); }
        
        var uriBase = endpoint + "vision/v2.0/ocr";
        // Request parameters.
        var params = {
            "language": "unk",
            "detectOrientation": "true",
        };
        // Perform the REST API call.
        $.ajax({
            url: uriBase + "?" + $.param(params),
            processData:false,
            // Request headers.
            beforeSend: function(jqXHR){
                jqXHR.setRequestHeader("Content-Type","application/octet-stream");
                jqXHR.setRequestHeader("Ocp-Apim-Subscription-Key", subscriptionKey);
            },
            type: "POST",
            // Request body.
            data: sourceImage
        })
        .done(function(data) {
            console.log("wowe");
            console.log(data);
            data = data || "";
            this.resultSubject.next(data);
        })
        .fail(function(jqXHR, textStatus, errorThrown) {
            // Display error message.
            var errorString = (errorThrown === "") ?
                "Error. " : errorThrown + " (" + jqXHR.status + "): ";
            errorString += (jqXHR.responseText === "") ? "" :
                (jQuery.parseJSON(jqXHR.responseText).message) ?
                    jQuery.parseJSON(jqXHR.responseText).message :
                    jQuery.parseJSON(jqXHR.responseText).error.message;
            alert(errorString);
        });
    };

    findProduct(data)
    {
        
    };

  }
