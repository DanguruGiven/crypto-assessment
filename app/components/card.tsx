import { BiBitcoin, BiSolidDownArrow, BiSolidUpArrow } from 'react-icons/bi';
import { Col, Row, Text } from './index';
import { FC, HTMLAttributes, ReactElement, useEffect } from 'react';

import { AiOutlineInfo } from 'react-icons/ai';
import { BsDashLg } from 'react-icons/bs';
import { FaEthereum } from 'react-icons/fa';
import { endpointEnum } from '../enums/index';
import moment from 'moment';
import { useWebsocket } from '../custom-hooks/index';

const { CRYPTO } = endpointEnum;

interface cardPropType extends HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
};

export const Card: FC<cardPropType> = (props) => {
    const { children, className } = props;
    return (
        <div className={`card ${className}`} {...props}>{children}</div>
    );
};

type statCardPropType = {
    crypto: 'ETH-USD' | 'BTC-USD';
};

type cryptoType = {
    p: string;
    q: string;
    dc: string;
    dd: string;
    t: string;
    s: string;
}

export const StatCard: FC<statCardPropType> = (props) => {
    const {
        crypto = 'ETH-USD',
    } = props;

    const [ready, value, send] = useWebsocket(`wss://ws.eodhistoricaldata.com/ws/${CRYPTO}?api_token=demo`);

    let CryptoIcon: ReactElement | null;
    let bgColor: string = '#f5f5f5';
    let color: string = '#9e9e9e';
    let label: string = 'Label';
    // Text color ->  dc: daily change percentage and dd: daily difference price.
    let dColor: string = '#757575';
    let dBgColor: string = '#eeeeee';
    let ProgressIcon: ReactElement | null;

    const data: cryptoType | null = JSON.parse(value);
    const { p, q, dc, dd } = data || {};

    let cryptoPerUsd: number = (Number(p)) / (Number(q));
    cryptoPerUsd = isNaN(cryptoPerUsd) ? 0 : cryptoPerUsd;

    // Switch statement should be used for readability and the ternary has more than one option.
    dColor = Math.sign(Number(dc) || Number(dd)) === 1 ? '#4caf50' : Math.sign(Number(dc) || Number(dd)) === -1 ? '#f44336' : dColor;
    dBgColor = Math.sign(Number(dc) || Number(dd)) === 1 ? '#e8f5e9' : Math.sign(Number(dc) || Number(dd)) === -1 ? '#ffebee' : dBgColor;
    ProgressIcon =
        Math.sign(Number(dc) || Number(dd)) === 1 ? <BiSolidUpArrow color={dColor} size={14} /> :
            Math.sign(Number(dc) || Number(dd)) === -1 ? <BiSolidDownArrow color={dColor} size={14} /> :
                <BsDashLg color={dColor} size={14} />;

    let percentageChange: number = Math.abs(Number(dc));
    percentageChange = isNaN(percentageChange) ? 0 : percentageChange;

    switch (crypto) {
        case 'ETH-USD':
            {
                bgColor = '#e3f2fd';
                color = '#2196f3';
                label = 'Ethereum';
                CryptoIcon = <FaEthereum color={color} size={28} />;
                break;
            }
        case 'BTC-USD':
            {
                bgColor = '#fff8e1';
                color = '#ffc107';
                label = 'Bitcoin';
                CryptoIcon = <BiBitcoin color={color} size={28} />;
                break;
            }
        default:
            {
                CryptoIcon = <AiOutlineInfo color={color} size={28} />;
                break;
            }
    }

    switch (Number(dc) || Number(dd)) {
        case 1:
            {
                dColor = '#4caf50';
                dBgColor = '#e8f5e9';
                break;
            }
        case -1:
            {
                dColor = '#f44336';
                dBgColor = '#ffebee';
                break;
            }
        default:
            break;
    }

    useEffect(() => {
        if (ready) {
            send(JSON.stringify({ 'action': 'subscribe', 'symbols': crypto }));
        }
    }, [ready, send]);

    return (
        <Card>
            <Row className='row justify-content-between'>
                <Col
                    className='p-0 d-flex'
                >
                    <div
                        className='p-1 d-flex justify-content-center align-items-center'
                        style={{
                            backgroundColor: bgColor,
                            borderColor: color,
                            borderWidth: 1,
                            borderRadius: '50%',
                            width: 50,
                            height: 50
                        }}
                    >
                        {CryptoIcon}
                    </div>
                    <div className='pl-3'>
                        <div className='d-flex'>
                            <Text
                                label={label}
                                className='text-size-12'
                            />
                            <div
                                className={ready ? 'bg-green-50' : 'bg-gray-50'}
                            >
                                <Text
                                    label={ready ? 'Live' : 'Offline'}
                                    className={`text-size-10 ml-1 ${ready ? 'text-green' : 'text-gray'}`}
                                />
                            </div>
                        </div>
                        <div className='d-flex align-items-end'>
                            <Text
                                label={ready ? String(cryptoPerUsd?.toFixed(2)) : '0'}
                                className='text-size-32'
                                style={{
                                    fontWeight: 'bold'
                                }}
                            />
                            <Text
                                label='/ USD'
                                className='text-size-12 ml-2'
                                style={{
                                    fontWeight: 'semi-bold'
                                }}
                            />
                        </div>
                    </div>
                </Col>
                <Col
                    className='p-0'
                >
                    <Text
                        label={`${Number(dd ?? 0).toFixed(2)} / usd`}
                        style={{
                            color: dColor
                        }}
                    />
                    <div
                        className='p-1 w-auto d-flex mt-1 justify-content-center align-items-center'
                        style={{
                            backgroundColor: dBgColor,
                            borderRadius: 4
                        }}
                    >
                        {ProgressIcon}
                        <Text
                            label={`${Number(percentageChange).toFixed(2)}%`}
                            style={{
                                color: dColor
                            }}
                        />
                    </div>
                    <Text
                        label={`Last updated at ${moment().format('mm:ss')}`}
                        className='text-size-10 mt-1'
                        style={{
                            fontStyle: 'italic'
                        }}
                    />
                </Col>
            </Row>
        </Card>
    );
}; 