import { Route } from './route';


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