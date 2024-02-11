import { Box, Button, Card, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { Pokemon } from 'modules/pokemon/types';
import Image from 'next/image';
import React from 'react';

const ResponsiveButton = styled(Button)(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    fontSize: '10px'
  }
}));

const ResponsiveTypography = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    fontSize: '12px'
  }
}));

type Props = { pokemonList?: Pokemon };

const component: React.FC<Props> = ({ pokemonList }) => {
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
          <ResponsiveTypography fontWeight={'bold'} fontSize={'14px'} ml={1}>
            {pokemonList?.name.toUpperCase()}
          </ResponsiveTypography>
        </Box>
        <ResponsiveButton variant="contained" color="primary" size="small">
          Details
        </ResponsiveButton>
      </Box>
    </Card>
  );
};

export const PokemonListCard = React.memo(component);
