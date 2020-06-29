import { Component, NgZone, OnInit } from '@angular/core';

declare const annyang: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'SpeachRegonizationApp';

  voiceActiveSectionDisabled: boolean = true;
  voiceActiveSectionError: boolean = false;
  voiceActiveSectionSuccess: boolean = false;
  voiceActiveSectionListening: boolean = false;
  voiceText: string[] = [];

  words: {name: string, recognized: boolean}[] = []
  index = 0;
  highlight  = ''

  constructor(private ngZone: NgZone) {}

  ngOnInit() {
    let text = `
    He wondered if it could be called a beach if there was no sand.
    Car safety systems have come a long way, but he was out to prove they could be outsmarted.
    She wasn't sure whether to be impressed or concerned that he folded underwear in neat little packages.
    Even though he thought the world was flat he didn’t see the irony of wanting to travel around the world.
    8% of 25 is the same as 25% of 8 and one of them is much easier to do in your head.
    I'm a great listener, really good with empathy vs sympathy and all that, but I hate people.
    I'd rather be a bird than a fish.
    The view from the lighthouse excited even the most seasoned traveler.
    The pigs were insulted that they were named hamburgers.
    They did nothing as the raccoon attacked the lady’s bag of food.
    `

    text.split(" ").forEach(
      w => this.words.push({name: w, recognized: false})
    )

  }

  initializeVoiceRecognitionCallback(): void {
		annyang.addCallback('error', (err) => {
      if(err.error === 'network'){
        this.voiceText = ["Internet is require"];
        annyang.abort();
        this.ngZone.run(() => this.voiceActiveSectionSuccess = true);
      } else if (this.voiceText === undefined) {
				this.ngZone.run(() => this.voiceActiveSectionError = true);
				annyang.abort();
			}
		});

		annyang.addCallback('soundstart', (res) => {
      console.log("soundstart --> ", res);
      this.ngZone.run(() => this.voiceActiveSectionListening = true);
		});

		annyang.addCallback('end', () => {
      console.log("end --> ", this.voiceText);
      if (this.voiceText === undefined) {
        this.ngZone.run(() => this.voiceActiveSectionError = true);
				annyang.abort();
			}
		});

		annyang.addCallback('result', (userSaid) => {
      console.log("result --> ", userSaid);
			this.ngZone.run(() => this.voiceActiveSectionError = false);

			// let queryText: any = userSaid[0];

			// annyang.abort();

      this.voiceText = userSaid;

      this.checkToHighLight()

			this.ngZone.run(() => this.voiceActiveSectionListening = false);
      this.ngZone.run(() => this.voiceActiveSectionSuccess = true);
		});
	}

	startVoiceRecognition(): void {
    this.voiceActiveSectionDisabled = false;
		this.voiceActiveSectionError = false;
		this.voiceActiveSectionSuccess = false;
    this.voiceText = undefined;

		if (annyang) {
			let commands = {
				'hello': () => {
          alert("Hello User!!!")
         }
			};

			annyang.addCommands(commands);

      this.initializeVoiceRecognitionCallback();

			annyang.start({ autoRestart: false });
		}
	}

	closeVoiceRecognition(): void {
    this.voiceActiveSectionDisabled = true;
		this.voiceActiveSectionError = false;
		this.voiceActiveSectionSuccess = false;
		this.voiceActiveSectionListening = false;
		this.voiceText = undefined;

		if(annyang){
      annyang.abort();
    }
  }
  
  checkToHighLight() {
    console.log("checked")

    if(this.voiceText == null)
      this.voiceText = []

    console.log(this.voiceText)

    for(var i = 0; i < this.voiceText.length; i++) {
     
      for(var j = this.index; j < this.words.length; j++) {
        let item = this.words[j]
        if(item.name.trim().toLowerCase() === this.voiceText[i].trim().toLowerCase() && !item.recognized) {
          this.index++;
          this.highlight = item.name;
          item.recognized = true;
          break;
        }
      }

    }

    console.log(this.words)

    return false;
  }

}
