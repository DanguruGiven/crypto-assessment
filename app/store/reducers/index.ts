import { combineReducers } from 'redux';
import liveChartReducer from './live-chart-reducer';

const rootReducer = combineReducers({
    liveChartReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;