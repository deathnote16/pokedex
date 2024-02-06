import { Box, Button, Card, CardContent, Typography } from '@mui/material';
import { Pokemon } from 'modules/pokemon/types';
import Image from 'next/image';
import React from 'react';

type Props = { pokemonList: Pokemon; index?: number };

const component: React.FC<Props> = ({ index, pokemonList }) => {
  return (
    <Card variant="outlined" sx={{ marginTop: 1 }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0.8rem'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <Image
            src="/images/png/game.png"
            width={25}
            height={25}
            alt={'poke-ball'}
          />
          <Typography
            marginRight={1}
            fontWeight={'bold'}
            fontSize={'14px'}
            ml={1}
          >
            {index}
          </Typography>
          <Typography fontWeight={'bold'} fontSize={'14px'}>
            {pokemonList?.name.toUpperCase()}
          </Typography>
        </Box>
        <Button variant="contained" color="primary" size="small">
          Details
        </Button>
      </Box>
    </Card>
  );
};

export const PokemonListCard = React.memo(component);
