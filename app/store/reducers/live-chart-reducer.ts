import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { cryptoType, liveChartInitialStateType } from '@/app/types/index';

const initialState: liveChartInitialStateType = {
    bitcoin: null,
    bitcoin_last_updated: null,
    ethereum: null,
    ethereum_last_updated: null,
};
const liveChartSlice = createSlice({
    name: 'liveChart',
    initialState,
    reducers: {
        setBitcoin: (state: liveChartInitialStateType, action: PayloadAction<cryptoType>) => {
            return {
                ...state,
                bitcoin: action.payload,
            };
        },
        setBitcoinUpdatedTime: (state: liveChartInitialStateType, action: PayloadAction<Date>) => {
            return {
                ...state,
                bitcoin_last_updated: action.payload,
            };
        },
        setEthereum: (state: liveChartInitialStateType, action: PayloadAction<cryptoType>) => {
            return {
                ...state,
                ethereum: action.payload,
            };
        },
        setEthereumUpdatedTime: (state: liveChartInitialStateType, action: PayloadAction<Date>) => {
            return {
                ...state,
                ethereum_last_updated: action.payload,
            };
        },
    }
});

export const {
    setBitcoin,
    setBitcoinUpdatedTime,
    setEthereum,
    setEthereumUpdatedTime
} = liveChartSlice.actions;

export default liveChartSlice.reducer;