import React from 'react';
import { Box, Drawer, Paper } from '@mui/material';
import { styled } from '@mui/system';
import { modules } from 'modules';

import { PokeballLoaders } from 'component/loading/PokeBallLoaders';
import { usePokemonPayload } from 'hook';
import { PokemonListCard } from './PokemonListCard';
import useWindowSize from 'hook/use-window-size';
import { motion } from 'framer-motion';

const { useGetPokemonListQuery } = modules.pokemonModule;

type Props = {
  offset?: number;
  onCloseAfterSelecting: () => void;
};

const Component: React.FC<Props> = ({ offset, onCloseAfterSelecting }) => {
  const customHeight = '80vh';
  const { getPokemonName, getPokemonUrl } = usePokemonPayload();
  const { isMobile } = useWindowSize();
  const { data, isFetching, isLoading, isError } = useGetPokemonListQuery({
    limit: 30,
    offset
  });

  const onHandlePressPokemonCard = (pokeName?: string, pokeUrl?: string) => {
    onCloseAfterSelecting();
    getPokemonUrl(pokeUrl);
    getPokemonName(pokeName);
  };

  return (
    <Paper
      elevation={0}
      sx={{
        padding: 1,
        background: 'none',
        minHeight: customHeight,
        minWidth: isMobile ? '300px' : '500px',
        overflowX: 'hidden'
      }}
    >
      {isFetching || isLoading ? (
        <PokeballLoaders
          imgSrc={`/images/png/game.png`}
          height={customHeight}
          dimension={120}
        />
      ) : (
        data?.results?.map((pokemon, index) => (
          <motion.div
            initial={{ x: 500 }}
            animate={{ x: [500, -100, 0] }}
            transition={{
              stiffness: 3,
              delay: index * 0.1
            }}
            whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
            key={pokemon?.name}
          >
            <Box
              onClick={() =>
                onHandlePressPokemonCard(pokemon?.name, pokemon?.url)
              }
            >
              <PokemonListCard pokemonList={pokemon || {}} />
            </Box>
          </motion.div>
        ))
      )}
    </Paper>
  );
};

export const PokemonList = React.memo(Component);
