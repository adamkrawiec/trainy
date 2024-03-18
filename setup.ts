// dummy file with some vars setup for repl testing
import { Train, Route, Station, SearchEngine } from './src/'

const katowice = new Station('Katowice');
const gliwice = new Station('Gliwice');
const warsaw = new Station('Warsaw');
const gdansk = new Station('Gdansk');

const katowiceToWarsaw = new Route(katowice, new Date(1970,1,1,8,0), warsaw, new Date(1970,1,1,11,0))
const GliwiceToGdansk = new Route(gliwice, new Date(1970,1,1,8,0), gdansk, new Date(1970,1,1,11,0))
const katowiceToGliwice = new Route(katowice, new Date(1970,1,1,9,0), gliwice, new Date(1970,1,1,9,30))

const katowiceToWarsawTrain = new Train('TLK', katowiceToWarsaw)
const gliwiceToGdankTrain = new Train('IC', GliwiceToGdansk)
const katowiceToGliwiceTrain = new Train('S1', katowiceToGliwice)

const searchEngine = new SearchEngine();

export { 
  katowiceToWarsawTrain,
  gliwiceToGdankTrain,
  katowiceToGliwiceTrain,
  searchEngine,
  Train,
  Route,
  Station,
  SearchEngine
}