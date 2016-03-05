angular.module('TouskiClothingApp', [
    'ui.router',
    'TouskiClothingApp.headerNav',
    'TouskiClothingApp.footerNav',
    'TouskiClothingApp.products',
])
.config(function($locationProvider,$stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /
  $urlRouterProvider.otherwise("/");
  // Now set up the states
  $stateProvider
    .state('index', {
      url: "",
    })
    .state('products', {
      url: "/products",
      templateUrl: "public/products/productslist.html"
    })
    .state('contact', {
      url: "/contact",
      templateUrl: "public/contact/contact.html"
    })

    //Removing # from urls
    //$locationProvider.html5Mode(true);
});
