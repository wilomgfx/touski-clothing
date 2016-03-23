System.register(['angular2/core', 'angular2/router', '../services/apparel.service', 'angular2/common'], function(exports_1, context_1) {
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
    var core_1, router_1, apparel_service_1, common_1;
    var ProductDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (apparel_service_1_1) {
                apparel_service_1 = apparel_service_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            ProductDetailComponent = (function () {
                function ProductDetailComponent(_apparelService, _routeParams) {
                    this._apparelService = _apparelService;
                    this._routeParams = _routeParams;
                }
                ProductDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = +this._routeParams.get('id');
                    this._apparelService.getApparel(id)
                        .then(function (apparel) { return _this.apparel = apparel; });
                };
                ProductDetailComponent.prototype.goBack = function () {
                    window.history.back();
                };
                ProductDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'yaecs-product-detail',
                        templateUrl: 'app/product/product.component.html',
                        styleUrls: ['app/product/product.component.css'],
                        pipes: [common_1.CurrencyPipe],
                        inputs: ['apparel']
                    }), 
                    __metadata('design:paramtypes', [apparel_service_1.ApparelService, router_1.RouteParams])
                ], ProductDetailComponent);
                return ProductDetailComponent;
            }());
            exports_1("ProductDetailComponent", ProductDetailComponent);
        }
    }
});
//# sourceMappingURL=product.component.js.map