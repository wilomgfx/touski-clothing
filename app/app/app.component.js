System.register(['angular2/core', 'angular2/router', '../products/products.component', '../services/apparel.service', '../home/home.component', '../product/product.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, products_component_1, apparel_service_1, home_component_1, product_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (products_component_1_1) {
                products_component_1 = products_component_1_1;
            },
            function (apparel_service_1_1) {
                apparel_service_1 = apparel_service_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (product_component_1_1) {
                product_component_1 = product_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_router) {
                    this._router = _router;
                    this.title = 'Touski Clothing';
                }
                AppComponent.prototype.isActive = function (instruction) {
                    return this._router.isRouteActive(this._router.generate(instruction));
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/app/app.component.html',
                        styleUrls: ['app/app/app.component.css'],
                        directives: [router_1.ROUTER_DIRECTIVES, products_component_1.ProductsComponent],
                        providers: [
                            router_1.ROUTER_PROVIDERS,
                            apparel_service_1.ApparelService
                        ]
                    }),
                    router_1.RouteConfig([
                        { path: '/', name: 'Home', component: home_component_1.HomeComponent, useAsDefault: true },
                        { path: '/apparels', name: 'Apparels', component: products_component_1.ProductsComponent },
                        { path: '/product/detail/:id', name: 'ProductDetail', component: product_component_1.ProductDetailComponent },
                    ]),
                    __metadata('design:paramtypes', [router_1.Router])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map
