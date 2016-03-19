# SM Date Hijri Picker

Picker are design to be used with Angular Material.

  * for [Demo](http://mominsamir.github.io/smHijriDatePicker/)
  

## Requirements
* [AngularJS](https://angularjs.org/)
* [Angular Material](https://material.angularjs.org/)
* [moment.js](http://momentjs.com/)
* [Material Design Font Icons](http://google.github.io/material-design-icons/#icon-font-for-the-web)

### Feature
* Anuglar Material Theme supported

### Screenshot 
* Date Picker

![Date Picker](https://raw.githubusercontent.com/mominsamir/date-time-picker/master/app/images/date-picker-1.png "Date Picker")


### Installation
```sh
  bower install --save smDateTimeRangePicker
```
```sh
  angular.module('Your App',["ngMaterial","smDateTimeRangePicker"]); 
```

####  Date Picker
```sh

      <div  layout="row"> 
            <sm-date-time-picker 
                fname="field" 
                lable="Date of Birth"
                form="empForm" 
                value="vm.employee.dateOfBirth" 
                flex="50"
                flex-sm="100"
                flex-xs="100"                          
                is-required="{{true}}" 
                format="MM-DD-YYYY HH:mm"
                week-start-day="Monday">
            </sm-date-time-picker>
    </div>
```

###License

The MIT License (MIT)

Copyright (c) 2016

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION  THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
