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
    ];
    this.numberOfNights = [{
      id: 0,
      label: '0'
    },{
      id: 1,
      label: '1'
    },{
      id: 2,
      label: '2'
    },{
      id: 3,
      label: '3'
    },{
      id: 4,
      label: '4'
    },{
      id: 5,
      label: '5'
    },{
      id: 6,
      label: '6'
    },{
      id: 7,
      label: '7'
    },{
      id: 8,
      label: '8'
    },{
      id: 9,
      label: '9'
    },{
      id: 10,
      label: '10'
    },{
      id: 11,
      label: '11'
    },{
      id: 12,
      label: '12'
    }]
    this.isCreditCard = false;
    this.selectNumberOfNights = this.numberOfNights[0];
    this.selectedCreditCard = this.creditCardTypes[0];
    this.selected = this.paymentItems[0];
  });
