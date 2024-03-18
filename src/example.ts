export class Station {
  static stations: Station[] = [];
  name: string;

  public static findStation(name: string) {
    return Station.stations.find(station => station.name === name);
  }

  constructor(name: string) {
    this.name = name;
    Station.stations.push(this);
  }
}

export class Route {
  static routes: Route[] = [];

  departureStation: Station;
  departureTime: Date;
  arrivalStation: Station;
  arrivalTime: Date;

  constructor(departureStation: Station, departureTime: Date, arrivalStation: Station, arrivalTime: Date) {
    this.departureStation = departureStation;
    this.departureTime = departureTime;
    this.arrivalStation = arrivalStation;
    this.arrivalTime = arrivalTime;
    Route.routes.push(this);
  }

  public static findRoutes(departureName: string, arrivalName: string, departureTime?: Date) {
    const departureStation = Station.findStation(departureName);
    const arrivalStation = Station.findStation(arrivalName);

    const routes = Route.routes.filter(route => route.departureStation === departureStation && route.arrivalStation === arrivalStation);

    if(departureTime) {
      return routes.filter(route => route.departureTime > departureTime);
    }

    return routes
  }
}

export class Train {
  static trains: Train[] = [];

  name: string;
  route: Route;

  constructor(name: string, route: Route) {
    this.name = name;
    this.route = route;
    Train.trains.push(this);
  }
}

export class SearchEngine {
  search(departureName: string, arrivalName: string) {
    const routes = Route.findRoutes(departureName, arrivalName);
    const trains = Train.trains.filter(train => routes.includes(train.route));
    return trains;
  }
}
