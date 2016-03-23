import { Component }  from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS , Router} from 'angular2/router';
import {ProductsComponent} from '../products/products.component';
import {ApparelService} from '../services/apparel.service';
import {HomeComponent} from '../home/home.component';
import {ProductDetailComponent} from '../product/product.component';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app/app.component.html',
  styleUrls : ['app/app/app.component.css'],
  directives: [ROUTER_DIRECTIVES, ProductsComponent],
  providers: [
    ROUTER_PROVIDERS,
    ApparelService
  ]
})

@RouteConfig([
        { path : '/',name : 'Home',component : HomeComponent,useAsDefault : true },
        { path: '/apparels',name: 'Apparels',component: ProductsComponent },
        { path: '/product/detail/:id',name: 'ProductDetail',component: ProductDetailComponent},
        // {
        //     path: '/about',
        //     name: 'About',
        //     component: AboutComponent
        // },
])

export class AppComponent {
  title = 'Touski Clothing';
  constructor(public _router: Router)
  {

  }
  isActive(instruction: any[]): boolean {
    return this._router.isRouteActive(this._router.generate(instruction));
  }
}
