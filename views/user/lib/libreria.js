'use strict';
var appDemoCrud = angular.module('appDemoCrud', []);//user angular
appDemoCrud.controller('UserListCtrl', function UserListCtrl($scope) {
  $scope.users = [
    {'id':'0001',
     'name': 'name1',
     'email': 'email1'},
    {'id':'0002',
    'name': 'name2',
     'email': 'email2'},
    {'id':'0003',
    'name': 'name3',
     'email': 'email3'}
  ];
});