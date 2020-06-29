import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { SpeechRecognitionService } from '../speech-recognition.service';
import { Word } from './words.model';

@Component({
  selector: 'app-google-api',
  templateUrl: './google-api.component.html',
  styleUrls: ['./google-api.component.scss']
})
export class GoogleApiComponent implements OnInit {

  showSearchButton: boolean;
  speechData: string;

  text = `
  Car safety systems have come a long way, but he was out to prove they could be outsmarted.
  She wasn't sure whether to be impressed or concerned that he folded shirt in neat little packages.
  Even though he thought the world was flat he didn’t see the irony of wanting to travel around the world.
  8% of 25 is the same as 25% of 8 and one of them is much easier to do in your head.
  I'm a great listener, really good with empathy vs sympathy and all that, but I hate people.
  I'd rather be a bird than a fish.
  The view from the lighthouse excited even the most seasoned traveler.
  The pigs were insulted that they were named hamburgers.
  They did nothing as the raccoon attacked the lady’s bag of food.
  `

  words: Word[] = [];

  wordIndex = 0
  complete = true

  completeWordIndex = 0

  constructor(private speechRecognitionService: SpeechRecognitionService, private changeDetector: ChangeDetectorRef) {
      this.showSearchButton = true;
      this.speechData = "";
  }

  ngOnInit() {

      this.text.trim().split(' ').forEach(
          w => {
            w = w.replace(',', ' ').replace('.', ' ')
            this.words.push({name: w, recognised: false})
          }
      )

      console.log("words ---> ", this.words.length)

  }

  ngOnDestroy() {
      this.speechRecognitionService.DestroySpeechObject();
  }

  activateSpeechSearchMovie(): void {
    this.showSearchButton = false;

    this.speechRecognitionService.record()
        .subscribe(
        //listener
        (value) => {
            this.speechData = value;
            // console.log(value);
            this.compareAndHighlight(value)
        },
        //errror
        (err) => {
            console.log(err);
            if (err.error == "no-speech") {
                console.log("--restatring service--");
                this.activateSpeechSearchMovie();
            }
        },
        //completion
        () => {
            this.showSearchButton = true;
            console.log("--complete--");
            this.activateSpeechSearchMovie();
            this.complete = true
            let localWords = this.speechData.split(' ')
            this.compareTheSentenceAtTheEnd(localWords)
        });
  }

  compareAndHighlight(value: string) {
    value = value.trim()
    console.log('trimmed value --> ', value)
    if(value.includes(' ')) {

        let localWords = value.split(' ')
        
        console.log('localwords ---> ', localWords)

        if(this.complete) {
            this.compareTheSentence(localWords)
            this.complete = false;
        } else {
            value = localWords[localWords.length - 1].trim()
            this.compareLastWord(value)
        }
    } else {
        this.compareLastWord(value)
    }

  }

  compareTheSentence(localWords: string[]) {
    
    for(let i = 0; i < localWords.length; i++) {
        let word = this.words[this.wordIndex]

        if(word.name.trim().length == 0) {
            word.recognised = true
            this.wordIndex++;
        }
        
        console.log('lastValue compare==> ', localWords[i], this.words[this.wordIndex].name, localWords[i].trim().toLowerCase() === this.words[this.wordIndex].name)

        if(word.name.trim().toLowerCase() === localWords[i].trim().toLowerCase()) {
            word.recognised = true;
            this.wordIndex++;
        } else {
            break
        }
        console.log('indexx ==> ', this.wordIndex);

        this.changeDetector.detectChanges()
    }

  }

  compareLastWord(value: string) {
    console.log('lastValue compare==> ', value, this.words[this.wordIndex].name, value.toLowerCase() === this.words[this.wordIndex].name)

    if(value.toLowerCase() === this.words[this.wordIndex].name.trim().toLowerCase()) {
        this.words[this.wordIndex].recognised = true
        this.wordIndex++
    }
    
    console.log('indexx ==> ', this.wordIndex);
  }

  skipWord() {
    console.log(this.words[this.wordIndex])
    this.words[this.wordIndex].recognised = true
    this.wordIndex++
  }

  compareTheSentenceAtTheEnd(localWords: string[]) {
    
    for(let i = 0; i < localWords.length; i++) {
        let word = this.words[this.completeWordIndex]

        if(word.name.trim().length == 0) {
            word.recognised = true
            this.completeWordIndex++;
        }
        
        console.log('lastValue complete compare==> ', localWords[i], this.words[this.completeWordIndex].name, localWords[i].trim().toLowerCase() === this.words[this.wordIndex].name)

        if(word.name.trim().toLowerCase() === localWords[i].trim().toLowerCase()) {
            word.recognised = true;
            this.completeWordIndex++;
        } else {
            break
        }
        console.log('completeWordIndex ==> ', this.completeWordIndex);

        this.changeDetector.detectChanges()
    }

  }

}
