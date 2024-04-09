import { Box, Container, Grid } from '@mui/material';
import { MainLayout } from 'component/layout';
import { PokemonDescription } from 'component/Pokemon/PokemonDescription';
import { PokemonHeroSection } from 'component/PokemonHero/PokemonHeroSection';
import { NextPage } from 'next';

const HomePage: NextPage = () => {
  return (
    <MainLayout>
      <Box zIndex={99}>
        <PokemonHeroSection />
      </Box>
      <Container maxWidth={'lg'}>
        <PokemonDescription />
      </Container>
    </MainLayout>
  );
};

export default HomePage;
