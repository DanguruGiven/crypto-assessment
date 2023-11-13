export type cryptoType = {
    p: string;
    q: string;
    dc: string;
    dd: string;
    t: string;
    s: string;
}

export type liveChartInitialStateType = {
    bitcoin: cryptoType | null;
    bitcoin_last_updated: Date | null;
    ethereum: cryptoType | null,
    ethereum_last_updated: Date | null,
};