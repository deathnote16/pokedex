import { Box, Container, Grid } from '@mui/material';
import { MainLayout } from 'component/layout';
import { PageLoaders } from 'component/loading/PageLoaders';
import { PokemonSummarySection } from 'component/sections';
import { PokemonDescriptionSection } from 'component/sections/pokemon/pokemonDescriptionSection';
import { PokemonHeroSection } from 'component/sections/pokemon/pokemonHeroSection';
import { pokemonDetailUrl } from 'constant/pokemon/pokemonUrl';
import { usePokemonPayload } from 'hook';

import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useMemo } from 'react';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query/react'; // Assuming you have this in your project

const PokemonPage: NextPage = () => {
  const router = useRouter();
  const memoRouter = useMemo(() => router.query.id, [router.query.id]);

  const {
    isPokemonDetailsLoading,
    isPokemonDetailFetching,
    pokemonDetailsStatusError,
    getPokemonUrl,
    getPokemonName
  } = usePokemonPayload();

  useEffect(() => {
    if (memoRouter) {
      // Check if the error is a FetchBaseQueryError and if the status is 404
      if (
        pokemonDetailsStatusError &&
        'status' in pokemonDetailsStatusError &&
        (pokemonDetailsStatusError as FetchBaseQueryError).status === 404
      ) {
        router.push('/pokemon-not-found');
        return;
      }
      getPokemonUrl(`${pokemonDetailUrl}${memoRouter}`);
      getPokemonName(memoRouter.toString());
    }
  }, [
    getPokemonName,
    getPokemonUrl,
    memoRouter,
    pokemonDetailsStatusError,
    router
  ]);

  if (isPokemonDetailFetching || isPokemonDetailsLoading) {
    return <PageLoaders />;
  }

  return (
    <MainLayout>
      <Box zIndex={99}>
        <PokemonHeroSection />
      </Box>
      <Container maxWidth={'lg'}>
        <Box mt={1}>
          <PokemonDescriptionSection />
        </Box>
        <PokemonSummarySection />
      </Container>
    </MainLayout>
  );
};

export default PokemonPage;
