System.register(['angular2/core', '../models/mock-apparel'], function(exports_1, context_1) {
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
    var core_1, mock_apparel_1;
    var ApparelService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (mock_apparel_1_1) {
                mock_apparel_1 = mock_apparel_1_1;
            }],
        execute: function() {
            ApparelService = (function () {
                function ApparelService() {
                }
                ApparelService.prototype.getApparels = function () {
                    return Promise.resolve(mock_apparel_1.APPARELS);
                };
                ApparelService.prototype.getApparel = function (Id) {
                    return Promise.resolve(mock_apparel_1.APPARELS).then(function (heroes) { return heroes.filter(function (apparel) { return apparel.Id === Id; })[0]; });
                };
                ApparelService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], ApparelService);
                return ApparelService;
            }());
            exports_1("ApparelService", ApparelService);
        }
    }
});
//# sourceMappingURL=apparel.service.js.map