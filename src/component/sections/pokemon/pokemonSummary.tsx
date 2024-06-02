import { FC, memo } from 'react';
import { Box, Grid } from '@mui/material';
import { BreedingInfo } from 'component/Pokemon/Breeding';
import { MoveTabs } from 'component/Pokemon/Moves/MoveTabs';
import { PokeDexEntry } from 'component/Pokemon/PokemonDexEntry';
import { PokemonStats } from 'component/Pokemon/PokemonStat';
import { PokemonTrainingInfo } from 'component/Pokemon/PokemonTrainingInfo';
import useWindowSize from 'hook/use-window-size';

type Props = {};

const Component: FC<Props> = () => {
  const { isMobile } = useWindowSize();

  return (
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
  );
};

export const PokemonSummarySection = memo(Component);
