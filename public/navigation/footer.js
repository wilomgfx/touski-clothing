  angular.module('TouskiClothingApp.footerNav', [])
  .controller('FooterNavController', FooterNavController)
  .directive('footernav', FooterNav);


  function FooterNavController($scope) {


  };

  function FooterNav () {

      return {

          restrict: "E",
          templateUrl: "public/navigation/footer.html",
          controller: 'FooterNavController'
      };
  };
