import { combineReducers } from 'redux';
import discover from 'src/features/discover/slices';
import theme from 'src/lib/theme/slices';
import user from 'src/lib/user/slices';

const rootReducer = combineReducers({
  theme,
  user,
  discover,
});


export default rootReducer;
