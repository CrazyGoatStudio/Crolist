import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { IonicAudioModule } from 'ionic-audio/dist';

//Add template pages
import { MusicPlayerPage } from '../pages/music-player/music-player';
import { HomePage } from '../pages/home/home';
import { JoinPartyPage } from '../pages/join-party/join-party';

@NgModule({
  declarations: [
    MyApp,
    MusicPlayerPage,
    HomePage,
    JoinPartyPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    IonicAudioModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MusicPlayerPage,
    HomePage,
    JoinPartyPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
