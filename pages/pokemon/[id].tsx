import { Box, Container, Grid } from '@mui/material';
import { MainLayout } from 'component/layout';
import { PageLoaders } from 'component/loading/PageLoaders';
import { BreedingInfo } from 'component/Pokemon/Breeding';
import { MoveTabs } from 'component/Pokemon/Moves/MoveTabs';
import { PokemonDescription } from 'component/Pokemon/PokemonDescription';
import { PokeDexEntry } from 'component/Pokemon/PokemonDexEntry';
import { PokemonStats } from 'component/Pokemon/PokemonStat';
import { PokemonTrainingInfo } from 'component/Pokemon/PokemonTrainingInfo';
import { PokemonHeroSection } from 'component/PokemonHero/PokemonHeroSection';
import { pokemonDetailUrl } from 'constant/pokemon/pokemonUrl';
import { usePokemonPayload } from 'hook';
import useWindowSize from 'hook/use-window-size';

import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useMemo } from 'react';

const PokemonPage: NextPage = () => {
  const { isMobile } = useWindowSize();
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
      if (pokemonDetailsStatusError?.originalStatus === 404) {
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
    pokemonDetailsStatusError?.originalStatus,
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
          <Grid md={12}>
            <MoveTabs />
          </Grid>
        </Grid>
      </Container>
    </MainLayout>
  );
};

export default PokemonPage;
