import { combineReducers } from 'redux';
import theme from '../lib/theme/slices';
import user from '../lib/user/slices';
import discover from '../features/discover/slices';

const rootReducer = combineReducers({
  theme,
  user,
  discover,
});


export default rootReducer;
