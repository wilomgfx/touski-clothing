angular.module('TouskiClothingApp.product', [])
.controller('ProductController', ProductController);

function ProductController($scope,$stateParams,$filter)
{
  var product = {Id:1,name:'Chandail',price:55,description:'Un chandail la',image:'public/content/images/IMG_6433.JPG'};
  var product2 = {Id:2,name:'Chandail2',price:34,description:'Ben oui un autre osti de chandail',image:'public/content/images/IMG_6434.jpg'};
  var product3 = {Id:3,name:'Chandail3',price:22,description:'Lui ye noir',image:'public/content/images/IMG_6437.jpg'};
  var product4 = {Id:4,name:'Chandail4',price:35,description:'Devine quoi ? un autre criss de chandail',image:'public/content/images/IMG_6444.jpg'};
  var product5 = {Id:5,name:'Chandail5',price:58,description:'Un autre fou chandail',image:'public/content/images/IMG_6451.jpg'};
  var product6 = {Id:6,name:'Chandail6',price:12,description:'Le plus beau',image:'public/content/images/IMG_6542.jpg'};
  var products = [product,product2,product3,product4,product5,product6];

  $scope.product = $filter('filter')(products, {Id:$stateParams.productId})[0];
}
