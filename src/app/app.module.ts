import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { CoreModule } from './core/core.module';
import { UiModule } from './ui/ui/ui.module';

const firebaseConfig = {
  // apiKey: "<Firebase API key>",
  // authDomain: "<Firebase auth domain>",
  // databaseURL: "<Firebase database URL>",
  // projectId: "<Firebase project ID>",
  // storageBucket: "<Firebase storage bucket>",
  // messagingSenderId: "<Firebase messaging sender ID>",
  apiKey: "AIzaSyBAv0VLADqpJXf3LZnI5OmDeHsy-teWpBw",
  authDomain: "hellowechat-b26dd.firebaseapp.com",
  databaseURL: "https://hellowechat-b26dd.firebaseio.com",
  projectId: "hellowechat-b26dd",
  storageBucket: "",
  messagingSenderId: "259430050677",
  appId: "1:259430050677:web:7ba2323c861b4666"
};
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    CoreModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
