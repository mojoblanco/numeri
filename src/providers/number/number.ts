import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

/*
  Generated class for the NumberProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NumberProvider {
  base_url = 'http://numbersapi.com/';

  constructor(public http: Http) {
    
  }

  getNumberData(number, type) {
    return this.http.get(this.base_url + number + '/' + type)
      .map(res => res)
      .do(res => console.log(res.text()));
  }
}
