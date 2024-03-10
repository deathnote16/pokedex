import React, { useMemo, useState } from 'react';
import { Box, Card, CardActionArea } from '@mui/material';
import { Pokemon } from 'modules/pokemon/types';
import Image from 'next/image';
import { capitalize } from 'lodash';
import { ResponsiveTypography } from 'component/typography';
import { usePokemonPayload } from 'hook';
import { customColor } from 'component/theme';

type Props = { pokemonList: Pokemon };

const Component: React.FC<Props> = ({ pokemonList }) => {
  const { pokemonName } = usePokemonPayload();

  const pokemonActive = useMemo(() => {
    return pokemonList?.name === pokemonName;
  }, [pokemonList?.name, pokemonName]);

  const activeImg = useMemo(() => {
    if (pokemonList?.name === pokemonName) {
      return `/images/png/open-pokeball.png`;
    } else {
      return `/images/png/game.png`;
    }
  }, [pokemonList?.name, pokemonName]);

  return (
    <Card variant="outlined" sx={{ marginTop: 0.7 }}>
      <CardActionArea>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '1rem',
            background: pokemonActive ? customColor.secondary.main : 'none',
            color: pokemonActive ? 'white' : 'black'
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <Image src={activeImg} width={25} height={25} alt={'poke-ball'} />
            <ResponsiveTypography fontWeight={700} ml={1}>
              {capitalize(pokemonList?.name) || ''}
            </ResponsiveTypography>
          </Box>
        </Box>
      </CardActionArea>
    </Card>
  );
};

export const PokemonListCard = React.memo(Component);
