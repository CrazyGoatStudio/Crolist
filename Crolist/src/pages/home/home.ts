import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { MusicPlayerPage } from '../music-player/music-player';
import { JoinPartyPage } from '../join-party/join-party';

/*
  Generated class for the Home page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tab1Root: any = JoinPartyPage;
  tab2Root: any = MusicPlayerPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // this.tab1Root = JoinPartyPage;
    // this.tab2Root = MusicPlayerPage;
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad HomePage');
  // }
}
