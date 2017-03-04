import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

//Added pluggins
import { YoutubeVideoPlayer } from 'ionic-native';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  playVideo(videoId) {
    YoutubeVideoPlayer.openVideo(videoId);
  }

  ionViewDidLoad() {
    
    console.log('ionViewDidLoad MusicPlayerPage');
  }
}
