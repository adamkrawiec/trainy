import { Route } from './route';
import { Train } from './train';

export class SearchEngine {
  search(departureName: string, arrivalName: string) {
    const routes = Route.findRoutes(departureName, arrivalName);
    const trains = Train.trains.filter(train => routes.includes(train.route));
    return trains;
  }
}
