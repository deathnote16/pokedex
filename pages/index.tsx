import { Box, Container, Grid } from '@mui/material';
import { MainLayout } from 'component/layout';
import { PaginationPage } from 'component/pagination';
import { PokemonList } from 'component/Pokemon/PokemonList/PokemonList';
import { PokemonHeroSection } from 'component/PokemonHero/PokemonHeroSection';
import { PokemonSection } from 'component/sections';
import { usePagination } from 'hook';
import useWindowSize from 'hook/use-window-size';
import { modules } from 'modules';
import { NextPage } from 'next';

const HomePage: NextPage = () => {
  return (
    <MainLayout>
      <Box zIndex={99}>
        <PokemonHeroSection />
      </Box>
      <Container maxWidth={'lg'}>
        <PokemonSection />
      </Container>
    </MainLayout>
  );
};

export default HomePage;
