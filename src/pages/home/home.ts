import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { NumberProvider } from '../../providers/number/number';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  number = 0;
  type = 'trivia';
  result: any;

  constructor(public navCtrl: NavController, private numberProvider: NumberProvider, public loadingCtrl: LoadingController) {
  }

  getData() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
    });
    loader.present();

    this.numberProvider.getNumberData(this.number, this.type).subscribe(data => {
      loader.dismiss();
      this.result = data.text();
    });
    
  }

}
