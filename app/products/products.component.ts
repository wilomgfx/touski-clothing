import { Component }       from 'angular2/core';
import { Router } from 'angular2/router';
import {OnInit} from 'angular2/core';
import {Apparel} from '../models/apparel';
import {ApparelService} from '../services/apparel.service';
import {CurrencyPipe} from 'angular2/common';

@Component({
  selector: 'yaecs-products',
  templateUrl: 'app/products/products.component.html',
  styleUrls:['app/products/products.component.css'],
  pipes:[CurrencyPipe]
})

export class ProductsComponent  implements OnInit {

     public apparels: Apparel[];

     selectedApparel: Apparel;

     onSelect(apparel: Apparel) {
       this.selectedApparel = apparel;
     }

     constructor(private _apparelService: ApparelService,private _router: Router) { }

     getApparels() {
       // => syntax is equivalent to function(heroes) return this.heroes
       this._apparelService.getApparels().then(apparels => this.apparels = apparels);
     }

     ngOnInit() {
       this.getApparels();
     }

     gotoDetail(apparel: Apparel) {
       var link = ['ProductDetail', { id: apparel.Id }];
       this._router.navigate(link);
   }
}
