import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AppVersion } from '@ionic-native/app-version';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
   versionNumber: Promise<any>

  constructor(public navCtrl: NavController, private appVersion: AppVersion) {
    this.versionNumber = this.appVersion.getVersionNumber();
  }

}
