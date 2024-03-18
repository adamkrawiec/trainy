"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchEngine = exports.Train = exports.Route = exports.Station = void 0;
var Station = /** @class */ (function () {
    function Station(name) {
        this.name = name;
        Station.stations.push(this);
    }
    Station.findStation = function (name) {
        return Station.stations.find(function (station) { return station.name === name; });
    };
    Station.stations = [];
    return Station;
}());
exports.Station = Station;
var Route = /** @class */ (function () {
    function Route(departureStation, departureTime, arrivalStation, arrivalTime) {
        this.departureStation = departureStation;
        this.departureTime = departureTime;
        this.arrivalStation = arrivalStation;
        this.arrivalTime = arrivalTime;
        Route.routes.push(this);
    }
    Route.findRoutes = function (departureName, arrivalName, departureTime) {
        var departureStation = Station.findStation(departureName);
        var arrivalStation = Station.findStation(arrivalName);
        var routes = Route.routes.filter(function (route) { return route.departureStation === departureStation && route.arrivalStation === arrivalStation; });
        if (departureTime) {
            return routes.filter(function (route) { return route.departureTime > departureTime; });
        }
        return routes;
    };
    Route.routes = [];
    return Route;
}());
exports.Route = Route;
var Train = /** @class */ (function () {
    function Train(name, route) {
        this.name = name;
        this.route = route;
        Train.trains.push(this);
    }
    Train.trains = [];
    return Train;
}());
exports.Train = Train;
var SearchEngine = /** @class */ (function () {
    function SearchEngine() {
    }
    SearchEngine.prototype.search = function (departureName, arrivalName) {
        var routes = Route.findRoutes(departureName, arrivalName);
        var trains = Train.trains.filter(function (train) { return routes.includes(train.route); });
        return trains;
    };
    return SearchEngine;
}());
exports.SearchEngine = SearchEngine;
