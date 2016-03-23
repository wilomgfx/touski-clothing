import { Component }       from 'angular2/core';
import { Router } from 'angular2/router';
import {OnInit} from 'angular2/core';
import {Apparel} from '../models/apparel';
import {ApparelService} from '../services/apparel.service';

@Component({
  selector: 'yaecs-products',
  templateUrl: 'app/products/products.component.html'
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

    //  gotoDetail() {
    //    this._router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
    //  }
}
