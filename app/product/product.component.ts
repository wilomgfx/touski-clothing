import { Component } from 'angular2/core';
import { RouteParams } from 'angular2/router';
import {OnInit} from 'angular2/core';
import {Apparel} from '../models/apparel';
import {ApparelService} from '../services/apparel.service';
import {CurrencyPipe} from 'angular2/common';

@Component({
  selector: 'yaecs-product-detail',
  templateUrl: 'app/product/product.component.html',
  styleUrls:['app/product/product.component.css'],
  pipes:[CurrencyPipe],
  inputs: ['apparel']
})

export class ProductDetailComponent  implements OnInit {

  constructor(private _apparelService: ApparelService,
      private _routeParams: RouteParams) {

  }
  apparel: Apparel;
  ngOnInit() {
    var id = +this._routeParams.get('id');
    this._apparelService.getApparel(id)
      .then(apparel => this.apparel = apparel);
  }
  goBack() {
      window.history.back();
  }
}
