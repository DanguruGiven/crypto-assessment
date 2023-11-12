'use client'

import { Card, Col, Container, Row, StatCard } from './components/index';

import { AppDispatch } from './store/index';
import { endpointEnum } from './enums/index';
import { useEffect } from 'react';

export default function Home() {

  const crypto_data: any = ['BTC-USD', 'ETH-USD'];

  return (
    <main className={'main'}>
      <Container>
        <Row>
          {
            crypto_data.map((crypto: 'BTC-USD' | 'ETH-USD', index: number) => (
              <Col
                key={index}
                lg='6'
                xl='6'
              >
                <StatCard
                  crypto={crypto}
                />
              </Col>
            ))
          }
        </Row>
      </Container>
    </main>
  )
}
