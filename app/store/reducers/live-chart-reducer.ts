import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type initialStateType = {
    last_updated: Date;
    test_text: string;
};

const initialState: initialStateType = {
    last_updated: new Date(),
    test_text: 'hello',
};
const liveChartSlice = createSlice({
    name: 'liveChart',
    initialState,
    reducers: {
        setLastUpdatedTime: (state: initialStateType, action: PayloadAction<Date>) => {
            return {
                ...state,
                last_updated: action.payload,
            };
        },
        setTestText: (state: initialStateType, action: PayloadAction<string>) => {
            return {
                ...state,
                test_text: action.payload,
            };
        }
    }
});

export const { setLastUpdatedTime, setTestText } = liveChartSlice.actions;

export default liveChartSlice.reducer;