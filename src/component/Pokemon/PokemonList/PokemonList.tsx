import React from 'react';
import { Box, Paper } from '@mui/material';
import { modules } from 'modules';
import { PokeballLoaders } from 'component/loading/PokeBallLoaders';
import { PokemonListCard } from './PokemonListCard';
import useWindowSize from 'hook/use-window-size';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

const { useGetPokemonListQuery } = modules.pokemonModule;

type Props = {
  offset?: number;
  onCloseAfterSelecting: () => void;
};

const Component: React.FC<Props> = ({ offset, onCloseAfterSelecting }) => {
  const customHeight = '80vh';
  const router = useRouter();
  const { isMobile } = useWindowSize();
  const { data, isFetching, isLoading } = useGetPokemonListQuery({
    limit: 30,
    offset
  });

  const onHandlePressPokemonCard = (pokeName?: string) => {
    onCloseAfterSelecting();
    router.push(`/pokemon/${pokeName}`);
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
            <Box onClick={() => onHandlePressPokemonCard(pokemon?.name)}>
              <PokemonListCard pokemonList={pokemon || {}} />
            </Box>
          </motion.div>
        ))
      )}
    </Paper>
  );
};

export const PokemonList = React.memo(Component);
