import { AppDispatch } from '../index';
import { setTestText } from '../reducers/live-chart-reducer';

export const updateTestText = (text : string) => async (dispatch: AppDispatch) => {
    dispatch(setTestText(text));
};