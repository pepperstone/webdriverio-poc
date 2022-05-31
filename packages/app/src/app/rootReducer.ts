import { combineReducers } from 'redux';
import theme from '../lib/theme/slices';
import user from '../lib/user/slices';

const rootReducer = combineReducers({
  theme,
  user,
});


export default rootReducer;
