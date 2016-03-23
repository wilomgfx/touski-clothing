import { Component }  from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import {ProductsComponent} from '../products/products.component';
import {ApparelService} from '../services/apparel.service';

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

])

export class AppComponent {
  title = 'Touski Clothing';
}
