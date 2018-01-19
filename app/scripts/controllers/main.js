'use strict';

/**
 * @ngdoc function
 * @name bookingsAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bookingsAppApp
 */
angular.module('bookingsAppApp')
  .controller('MainCtrl', function () {
    this.paymentItems = [
      {id:1,
    label: 'Select Payment Type'},
    {
      id: 2,
      label: 'Credit Card'
    },
    {
      id: 3,
      label: 'EFT'
    }
    ];
    this.creditCardTypes = [
       {
        id: 0,
        label: 'Select Credit Card Type'
      },
      {
        id: 1,
        label: 'Visa'
      },
      {
        id: 2,
        label: 'MasterCard'
      }
    ]
    this.isCreditCard = false;
    this.selectedCreditCard = this.creditCardTypes[0];
    this.selected = this.paymentItems[0];
    
  });
