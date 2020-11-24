import React, { useState } from 'react';
import Head from 'next/head';
import Select from 'react-select';

import LogoTipo from '../assets/logo.svg';
import { Container, ConvertFrame, Box, Ingredient, Main } from '@/styles/pages/Home';
import ingredients from '../data/ingredients.json';

import { FiArrowRightCircle } from 'react-icons/fi';

const Home: React.FC = () => {

  const [measureIn, setMeasureIn] = useState(0);
  const [measureOut, setMeasureOut] = useState(0);

  const calculado = measureIn * 10;

  return (
    <Container>
      <Head>
        <title>NextJS</title>
      </Head>
      <Main>
        <div>
          <LogoTipo/>
        </div>
        <Ingredient>
          <p>Escolha o Ingrediente:</p>
            <div>
              <Select
                options={ingredients}
                autoFocus
                isClearable
                isSearchable
                placeholder="Escolha na lista"
              />
            </div>
          <ConvertFrame>
            <Box>
              <span>Escolha a medida:</span>
              <Select
                autoFocus
                isClearable
                isSearchable
                placeholder="Escolha na lista"
                className="UnitSelect"
              />
              <input
                type="text"
                name="mesureFrom"
                id="mesureFrom"
                onChange={ e => setMeasureIn(Number(e.target.value))}/>
            </Box>
            <a href="#" onClick={ () => setMeasureOut(calculado)}>
              <FiArrowRightCircle size={64}/>
            </a>
            <Box>
              <span>Escolha a medida:</span>
              <Select
                autoFocus
                isClearable
                isSearchable
                placeholder="Escolha na lista"
                className="UnitSelect"
              />
              <input
                type="text"
                name="mesureTo"
                id="mesureFrom"
                value={measureOut}
              />
            </Box>
          </ConvertFrame>
        </Ingredient>

      </Main>

    </Container>
)};

export default Home;
