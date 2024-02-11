import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Typography
} from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { styled } from '@mui/system';
import { Pokemon } from 'modules/pokemon/types';
import Image from 'next/image';
import React from 'react';

const ResponsiveButton = styled(Button)(({ theme }) => ({
  fontSize: '14px',
  [theme.breakpoints.up('xs')]: {
    fontSize: '10px'
  }
}));

const ResponsiveTypography = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    fontSize: '12px'
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '16px'
  }
}));

type Props = { pokemonList?: Pokemon };

const component: React.FC<Props> = ({ pokemonList }) => {
  return (
    <Card variant="outlined" sx={{ marginTop: 0.7 }}>
      <CardActionArea>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0.6rem'
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
            <ResponsiveTypography fontWeight={'bold'} ml={1}>
              {pokemonList?.name.toUpperCase()}
            </ResponsiveTypography>
          </Box>
          <KeyboardArrowRightIcon />
        </Box>
      </CardActionArea>
    </Card>
  );
};

export const PokemonListCard = React.memo(component);
