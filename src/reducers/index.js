import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather';
import NameReducer from './names';

const rootReducer = combineReducers({
  weather: WeatherReducer,
  user:NameReducer
});

export default rootReducer;
