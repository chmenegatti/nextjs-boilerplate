import React, { useState } from 'react';
import Head from 'next/head';
import Select from 'react-select';

import LogoTipo from '../assets/logo.svg';
import { Container, ConvertFrame, Box, Ingredient, Main } from '@/styles/pages/Home';
import ingredientsData from '../data/ingredients.json';
import unitsData from '../data/units.json';
import weightData from '../data/weights.json';

import { FiArrowRightCircle } from 'react-icons/fi';

import calcula from '../lib/calculation';

interface Ingredient {
  value: string;
  label: string;
}
interface Units {
  value: string;
  label: string;
}

const Home: React.FC = () => {

  const [measureIn, setMeasureIn] = useState(0);
  const [measureOut, setMeasureOut] = useState(0);
  const [ingredient, setIngredient] = useState({} as Ingredient);
  const [unitIn, setUnitIn] = useState({} as Units);
  const [unitOut, setUnitOut] = useState({} as Units);

  const medida = weightData.filter(item => item.id === ingredient.value);

  if (!medida[0].value) {
    throw new Error;
  }

  const valor = calcula(medida[0].value, unitIn.value, unitOut.value, measureIn);
  console.log(valor);

  return (
    <Container>
      <Head>
        <title>Conversor de Medidas</title>
      </Head>
      <Main>
        <div>
          <LogoTipo/>
        </div>
        <Ingredient>
          <p>Escolha o Ingrediente:</p>
            <div>
              <Select
                onChange={setIngredient}
                options={ingredientsData}
                defaultValue={ingredientsData[0]}
                autoFocus
                isSearchable
                placeholder="Escolha na lista"
              />
            </div>
          <ConvertFrame>
            <Box>
              <span>Escolha a medida:</span>
              <Select
                options={unitsData}
                onChange={setUnitIn}
                defaultValue={unitsData[1]}
                autoFocus
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
            <button onClick={() => setMeasureOut(Number(valor))}>
              <FiArrowRightCircle size={64}/>
            </button>
            <Box>
              <span>Escolha a medida:</span>
              <Select
                options={unitsData}
                defaultValue={unitsData[1]}
                onChange={setUnitOut}
                autoFocus
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
