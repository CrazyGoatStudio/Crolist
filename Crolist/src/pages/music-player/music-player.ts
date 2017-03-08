import { Component } from '@angular/core';
import { NavController, NavParams, Tabs } from 'ionic-angular';

//Ionic native plugins
import { FileChooser, MediaPlugin } from 'ionic-native';

//Added pluggins
import { AudioProvider } from 'ionic-audio/dist';

/*
  Generated class for the MusicPlayer page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-music-player',
  templateUrl: 'music-player.html'
})

export class MusicPlayerPage {
  nativepath: string;
  file;
  // myTracks: any[];
  // singleTrack: any;
  // allTracks: any[];
  // selectedTrack: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, private _audioProvider: AudioProvider) {
    // this.myTracks = [{
    //   src: 'http://soundcloud.com/forss/flickermood',
    //   artist: 'John Mayer',
    //   title: 'Why Georgia',
    //   art: 'img/johnmayer.jpg',
    //   preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
    // },
    // {
    //   src: 'https://archive.org/download/JM2013-10-05.flac16/V0/jm2013-10-05-t30-MP3-V0.mp3',
    //   artist: 'John Mayer',
    //   title: 'Who Says',
    //   art: 'img/johnmayer.jpg',
    //   preload: 'metadata' // tell the plugin to preload metadata such as duration for this track,  set to 'none' to turn off
    // }];  
  }
  filechooser() {
    FileChooser.open()
  .then(uri => {
    (<any>window).FilePath.resolveNativePath(uri, (result) => {
      this.nativepath = result;
      this.audioplay();
    }, (err) => {
      alert(err);
    })
  }) 
  .catch(e => console.log(e));
  }
  
  audioplay() {
    var pathalone = this.nativepath.substring(8);
    this.file = new MediaPlugin(pathalone, (status) => {
      
    });
    this.file.play();
  }

  // ngAfterContentInit() {     
  //   // get all tracks managed by AudioProvider so we can control playback via the API
  //   this.allTracks = this._audioProvider.tracks; 
  // }
  
  // playSelectedTrack() {
  //   // use AudioProvider to control selected track 
  //   this._audioProvider.play(this.selectedTrack);
  // }
  
  // pauseSelectedTrack() {
  //    // use AudioProvider to control selected track 
  //    this._audioProvider.pause(this.selectedTrack);
  // }
         
  // onTrackFinished(track: any) {
  //   console.log('Track finished', track)
  // } 

  ionViewDidLoad() {
    console.log('ionViewDidLoad MusicPlayerPage');
  }
  selectTab(index: number) {
    var t: Tabs = this.navCtrl.parent;
    t.select(index);
  }
}
