/**
 * Created by yangwei on 10/3/15.
 */
var app = angular.module('locationsApp', []);

/**
 * controller
 */
app.controller('locationsController',[ '$http', 'pageservice', function($http, pageservice){

    var ds = this;
    ds.contacts = [];
    ds.recordLength = 0;

    ds.pages = [];
    ds.limit = 15;
    ds.begin = 0;
    ds.currentPageNumber = 1;

    $http.get("http://localhost:8080/ssmtutorial/salesman")
        .success(function(data) {
            if(data != "null") {
                ds.contacts = data;
                ds.pages = pageservice.pagenate(ds.contacts, ds.limit);
            }
        });
}]);



