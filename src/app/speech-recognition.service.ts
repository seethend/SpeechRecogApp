import { Injectable, NgZone } from '@angular/core';
import * as _ from "lodash";
import { Observable } from 'rxjs';

interface IWindow extends Window {
    webkitSpeechRecognition: any;
    SpeechRecognition: any;
}

@Injectable()
export class SpeechRecognitionService {
    speechRecognition: any;

    constructor(private zone: NgZone) {
    }

    record(): Observable<string> {

        return Observable.create(observer => {
            const { webkitSpeechRecognition }: IWindow = <IWindow> <unknown> window;
            this.speechRecognition = new webkitSpeechRecognition();

            // const { webkitSpeechGrammarList }: IWindow = <IWindow> <unknown> window;

            // var speechRecognitionList = new webkitSpeechGrammarList();

            // var colors = [ 'aqua' , 'azure' , 'beige', 'bisque', 'black', 'blue', 'brown', 'chocolate', 'coral'];
            // var grammar = '#JSGF V1.0; grammar colors; public <color> = ' + colors.join(' | ') + ' ;'

            // speechRecognitionList.addFromString(grammar, 1);

            // this.speechRecognition.grammars = speechRecognitionList;
            this.speechRecognition.continuous = false;
            this.speechRecognition.interimResults = true;
            this.speechRecognition.lang = 'en-us';
            this.speechRecognition.maxAlternatives = 5;

            this.speechRecognition.onresult = speech => {
                let term: string = "";
                if (speech.results) {
                    console.log(speech)
                    var result = speech.results[speech.resultIndex];
                    var transcript = result[0].transcript;
                    // if (result.isFinal) {
                        if (result[0].confidence < 0.3) {
                            // console.log("Unrecognized result - Please try again");
                        }
                        else {
                            term = _.trim(transcript);
                            console.log("Did you said? -> " + term + " , If not then say something else...");
                        }
                    // }
                }
                this.zone.run(() => {
                    observer.next(term);
                });
            };

            this.speechRecognition.onerror = error => {
                observer.error(error);
            };

            this.speechRecognition.onend = () => {
                observer.complete();
            };

            this.speechRecognition.start();
            console.log("Say something - We are listening !!!");
        });
    }

    DestroySpeechObject() {
        if (this.speechRecognition)
            this.speechRecognition.stop();
    }

}