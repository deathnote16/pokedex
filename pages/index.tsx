import { Box, Container, Grid } from '@mui/material';
import { MainLayout } from 'component/layout';
import { BreedingInfo } from 'component/Pokemon/Breeding';
import { PokemonDescription } from 'component/Pokemon/PokemonDescription';
import { PokeDexEntry } from 'component/Pokemon/PokemonDexEntry';
import { PokemonStats } from 'component/Pokemon/PokemonStat';
import { PokemonTrainingInfo } from 'component/Pokemon/PokemonTrainingInfo';
import { PokemonHeroSection } from 'component/PokemonHero/PokemonHeroSection';
import useWindowSize from 'hook/use-window-size';
import { NextPage } from 'next';

const HomePage: NextPage = () => {
  const { isMobile } = useWindowSize();
  return (
    <MainLayout>
      <Box zIndex={99}>
        <PokemonHeroSection />
      </Box>
      <Container maxWidth={'lg'}>
        <Box mt={1}>
          <PokemonDescription />
        </Box>
        <Grid container spacing={1} rowSpacing={{ lg: 1 }}>
          <Grid item xs={12} md={12} lg={6}>
            <PokeDexEntry />
            <Box mt={1}>
              <PokemonTrainingInfo />
            </Box>
          </Grid>
          <Grid item xs={12} md={12} lg={6}>
            <Box mt={isMobile ? 1 : 0}>
              <PokemonStats />
            </Box>

            <Box mt={1}>
              <BreedingInfo />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </MainLayout>
  );
};

export default HomePage;
