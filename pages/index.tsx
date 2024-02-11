import { Box, Container, Grid } from '@mui/material';
import { PaginationPage } from 'component/pagination';
import { PokemonList } from 'component/pokemonList/PokemonList';
import { usePagination } from 'hook';
import useWindowSize from 'hook/use-window-size';
import { modules } from 'modules';
import { NextPage } from 'next';

const HomePage: NextPage = () => {
  const { currentPage, nextPage, prevPage } = usePagination();

  return (
    <Container maxWidth="xl">
      <Grid container spacing={3}>
        <Grid item xs={4}></Grid>
        <Grid item xs={12}>
          <PokemonList offset={currentPage} />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              mt: 1
            }}
          >
            <PaginationPage nextPage={nextPage} prevPage={prevPage} />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;
