import { Box, Container, Grid } from '@mui/material';
import { MainLayout } from 'component/layout';
import { PaginationPage } from 'component/pagination';
import { PokemonList } from 'component/Pokemon/PokemonList/PokemonList';
import { PokemonSection } from 'component/sections';
import { usePagination } from 'hook';
import useWindowSize from 'hook/use-window-size';
import { modules } from 'modules';
import { NextPage } from 'next';

const HomePage: NextPage = () => {
  return (
    <MainLayout>
      <PokemonSection />
    </MainLayout>
  );
};

export default HomePage;
