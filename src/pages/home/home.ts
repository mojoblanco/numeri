import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NumberProvider } from '../../providers/number/number';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  number = 4;
  result: any;

  constructor(public navCtrl: NavController, private numberProvider: NumberProvider) {
    this.numberProvider.getData();
  }

  getData() {
    this.numberProvider.getData().subscribe(data => {
      this.result = data.text();
      console.log(this.result);
    });
    
  }

}
