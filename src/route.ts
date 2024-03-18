import { Station } from './station';

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

    const routes = Route.routes.filter(
      route => route.departureStation === departureStation && route.arrivalStation === arrivalStation
    );

    if(departureTime) {
      return routes.filter(route => route.departureTime > departureTime);
    }

    return routes
  }
}