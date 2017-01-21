describe('ContactController', function () {
  var $controller;

  beforeEach(module('app'));

  beforeEach(inject(function (_$controller_) {
    $controller = _$controller_;
  }));

  it('should filter all females', function () {
    var $scope = {};
    $controller('ContactController as vm', {$scope: $scope});

    $scope.vm.search = 'female';

    $scope.vm.changeFilter();

    // expect($scope.vm.filteredList.length).toEqual(71);
    expect($scope.vm.filteredList.length).toBe(71);
  });

  it('should filter by geographical location', function () {
    var $scope = {};
    $controller('ContactController as vm', {$scope: $scope});
 
    $scope.vm.search = 'manchester';
 
    $scope.vm.changeFilter();
 
    expect($scope.vm.filteredList.length).toEqual(8);
  });
});