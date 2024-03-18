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