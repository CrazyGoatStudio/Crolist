import { Component, ViewChild } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { MenuController, Nav } from 'ionic-angular';

import { MusicPlayerPage } from '../pages/music-player/music-player';
import { HomePage } from '../pages/home/home';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage = HomePage;
  pages: Array<{title: string, component: any}>;

  constructor(platform: Platform, public menuCtrl: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might +-need.
      this.pages = [
        { title: 'Pagina principal', component: HomePage },
        { title: 'Reproducir musica', component: MusicPlayerPage },     
      ];

      StatusBar.styleDefault();
      Splashscreen.hide();

    });
  }

  openPage(pages) {
    this.menuCtrl.close();
    this.nav.setRoot(pages.component);
  }
}
