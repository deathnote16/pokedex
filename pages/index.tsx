import { Box, Container, Grid } from '@mui/material';
import { MainLayout } from 'component/layout';
import { PokemonDescription } from 'component/Pokemon/PokemonDescription';
import { PokeDexEntry } from 'component/Pokemon/PokemonDexEntry';
import { PokemonStats } from 'component/Pokemon/PokemonStat';
import { PokemonTrainingInfo } from 'component/Pokemon/PokemonTrainingInfo';
import { PokemonHeroSection } from 'component/PokemonHero/PokemonHeroSection';
import { NextPage } from 'next';

const HomePage: NextPage = () => {
  return (
    <MainLayout>
      <Box zIndex={99}>
        <PokemonHeroSection />
      </Box>
      <Container maxWidth={'lg'}>
        <Box mt={3}>
          <PokemonDescription />
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={6}>
            <PokeDexEntry />
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <PokemonTrainingInfo />
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <PokemonStats />
          </Grid>
        </Grid>
      </Container>
    </MainLayout>
  );
};

export default HomePage;
