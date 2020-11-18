import React from 'react';
import Head from 'next/head';

import LogoTipo from '../assets/logotipo.svg';
import { Container } from '@/styles/pages/Home';


const Home: React.FC = () => (
  <Container>
    <Head>
      <title>NextJS</title>
    </Head>

    <LogoTipo height={96}/>
    <h1>Boiler.JS</h1>
    <p>My NextJS Boilerplate!!</p>

  </Container>
);

export default Home;
