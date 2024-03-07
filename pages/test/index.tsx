import { Container, Grid } from '@mui/material';
import { PokeballLoaders } from 'component/loading/PokeBallLoaders';
import { PokemonList } from 'component/Pokemon/PokemonList/PokemonList';

import { FC, useEffect, useState } from 'react';

type Props = {};

const TestPage: FC<Props> = ({}) => {
  const [viewPortHeight, setViewPortHeight] = useState<number>();
  const [viewPortWidth, setViewPortWidth] = useState<number>();

  const targetElement = document.getElementById('div1');

  const handleResize = () => {
    setViewPortHeight(document.documentElement.clientHeight);
    setViewPortWidth(document.documentElement.clientWidth);
  };

  useEffect(() => {
    const targetElement = document.getElementById('div1');
    console.log('target element', targetElement);
  }, []);

  useEffect(() => {
    console.log('windows height', viewPortHeight);
    console.log('windows width', viewPortWidth);

    window.addEventListener('resize', handleResize);
  }, [viewPortHeight, viewPortWidth]);

  return (
    <Container maxWidth="xl" sx={{ mt: 3 }}>
      <Grid container>
        <Grid item md={7}></Grid>
        <Grid item md={5}>
          {/* <PokemonList /> */}
        </Grid>
      </Grid>
    </Container>
  );
};

export default TestPage;
