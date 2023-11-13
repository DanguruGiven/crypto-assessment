import { setBitcoin, setEthereum } from '../reducers/live-chart-reducer';

import { AppDispatch } from '../index';
import { cryptoType } from '@/app/types/index';

export const updateCryptoData = (crypto: 'BTC-USD' | 'ETH-USD', data: cryptoType | null) => async (dispatch: AppDispatch) => {
    switch (crypto) {
        case 'BTC-USD':
            {
                dispatch(setBitcoin(data));
                break;
            }
        case 'ETH-USD':
            {
                dispatch(setEthereum(data));
                break;
            }
        default:
            break;
    }
};