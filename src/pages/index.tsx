import React, { useState } from 'react';
import Head from 'next/head';
import Select from 'react-select';

import LogoTipo from '../assets/logo.svg';
import { Container, ConvertFrame, Box, Ingredient, Main } from '@/styles/pages/Home';
import ingredientsData from '../data/ingredients.json';
import unitsData from '../data/units.json';

import { FiArrowDownCircle } from 'react-icons/fi';

import conversao from '../lib/calculation';

interface Ingredient {
  label: string;
  value: number;
}
interface Units {
  value: string;
  label: string;
}

const Home: React.FC = () => {

  const [ingredient, setIngredient] = useState({} as Ingredient);
  const [measureIn, setMeasureIn] = useState(0);
  const [measureOut, setMeasureOut] = useState(0);
  const [unitIn, setUnitIn] = useState({} as Units);
  const [unitOut, setUnitOut] = useState({} as Units);

  function handleCalcula() {
    try {
      if (ingredient.value === undefined
        || unitIn.value === undefined
        || unitOut.value === undefined) {
          setMeasureOut(0);
          return
      }


      const value = conversao(ingredient.value, unitIn.value, unitOut.value, measureIn);
      return value;
    } catch (err) {
      console.log(err);
      return
    }

  }

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
                instanceId="ingredient"
                options={ingredientsData}
                onChange={setIngredient}
                isSearchable
                placeholder="Escolha na Lista"
              />
            </div>
          <ConvertFrame>
            <Box>
              <span>Escolha a medida:</span>
              <Select
                instanceId="unit1"
                options={unitsData}
                onChange={setUnitIn}
                isSearchable
                placeholder="Escolha na lista"
                className="UnitSelect"
              />
              <input onChange={ e => setMeasureIn(Number(e.target.value))}/>
            </Box>
            <button onClick={() => setMeasureOut(handleCalcula)}>
              <FiArrowDownCircle size={64}/>
            </button>
            <Box>
              <span>Escolha a medida:</span>
              <Select
                instanceId="unit2"
                options={unitsData}
                onChange={setUnitOut}
                isSearchable
                placeholder="Escolha na lista"
                className="UnitSelect"
              />
              <h1>
                {measureOut}
              </h1>

            </Box>
          </ConvertFrame>
        </Ingredient>

      </Main>

    </Container>
)};

export default Home;
