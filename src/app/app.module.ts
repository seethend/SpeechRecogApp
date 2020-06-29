import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoogleApiComponent } from './google-api/google-api.component';
import { SpeechRecognitionService } from './speech-recognition.service';

@NgModule({
  declarations: [
    AppComponent,
    GoogleApiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [SpeechRecognitionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
