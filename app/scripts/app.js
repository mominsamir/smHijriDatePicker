'use strict';

angular
  .module('smHijriDatePickerDemo', [
    'ngAnimate',
    'ui.router',
    'ngMaterial',
    'ngMessages',
    'smHijriDatePicker'
  ])
  .run(function ($templateCache, $http) {
      $http.get('views/massages.html')
      .then(function(response) {
        $templateCache.put('error-messages', response.data); 
      })
 }).config(function ($stateProvider, $urlRouterProvider,$mdThemingProvider,pickerProvider) {

/*    pickerProvider.setMassagePath("test ddd");*/
    moment.locale('ar');
    pickerProvider.setMassagePath('error-messages');
    pickerProvider.setDayHeader('shortName');
    pickerProvider.setOkLabel('حسنا');
    pickerProvider.setCancelLabel('إلغاء');
    pickerProvider.setMonthNames(['يناير','فبراير','مارس','أبريل','مايو','يونيو','يوليه','أغسطس','سبتمبر','أكتوبر','نوفمبر','ديسمبر']);    


    $urlRouterProvider.otherwise('/home');

    $stateProvider.state('home', {
            url: '/home',  
            templateUrl: 'views/home.html',
            controller: 'MainCtrl',
            controllerAs : 'vm',
            data: {
                title: 'Dashboard',
            }            
    }).state('date-time-picker', {
            url: '/date-time-picker-demo',  
            templateUrl: 'views/date-time-picker-demo.html',
            controller: 'MainCtrl',
            controllerAs : 'vm',
            data: {
                title: 'Date Time Picker Demo',
            }            
    }).state('date-time-picker-api', {
            url: '/date-time-picker-api',  
            templateUrl: 'views/date-time-picker-api.html',
            controller: 'MainCtrl',
            controllerAs : 'vm',
            data: {
                title: 'Date Time Picker API',
            }            
    })/*.state('range-picker-demo', {
            url: '/range-picker-demo',  
            templateUrl: 'views/range-picker-demo.html',
            controller: 'MainCtrl',
            controllerAs : 'vm',
            data: {
                title: 'Range Picker Demo',
            }            
    }).state('range-picker-api', {
            url: '/range-picker-api',  
            templateUrl: 'views/range-picker-api.html',
            controller: 'MainCtrl',
            controllerAs : 'vm',
            data: {
                title: 'Range Picker API',
            }            
    }).state('timepicker', {
            url: '/timepicker',  
            templateUrl: 'views/timepicker.html',
            controller: 'MainCtrl',
            controllerAs : 'vm',
            data: {
                title: 'Range Picker API',
            }            
    }).state('time-picker-demo', {
            url: '/time-picker-demo',  
            templateUrl: 'views/time-picker-demo.html',
            controller: 'MainCtrl',
            controllerAs : 'vm',
            data: {
                title: 'Range Picker API',
            }            
    }).state('time-picker-api', {
            url: '/time-picker-api',  
            templateUrl: 'views/time-picker-api.html',
            controller: 'MainCtrl',
            controllerAs : 'vm',
            data: {
                title: 'Range Picker API',
            }            
    })*/;
   



    $mdThemingProvider.theme('default')
        .primaryPalette('teal');
  });
    