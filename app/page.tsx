'use client'

import { Card, Col, Container, Row, StatCard } from './components/index';

import { AppDispatch } from './store/index';
import { endpointEnum } from './enums/index';
import { useEffect } from 'react';

const { CRYPTO } = endpointEnum;

export default function Home() {

  return (
    <main className={'main'}>
      <Container>
        <Row>
          <Col
            lg='6'
            xl='6'
          >
            <StatCard
              crypto='BTC-USD'
            />
          </Col>
          <Col
            lg='6'
            xl='6'
          >
            <StatCard
              crypto='ETH-USD'
            />
          </Col>
        </Row>
      </Container>
    </main>
  )
}
