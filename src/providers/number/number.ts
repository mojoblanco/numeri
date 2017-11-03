import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

/*
  Generated class for the NumberProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NumberProvider {
  url = 'http://numbersapi.com/5/math';

  constructor(public http: Http) {
    
  }

  getData() {
    return this.http.get(this.url)
      .map(res => res)
      .do(res => console.log(res.text()));
  }
}
