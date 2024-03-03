import React from 'react';
import { Box, Button, Card, CardActionArea, Typography } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { styled } from '@mui/system';
import { Pokemon } from 'modules/pokemon/types';
import Image from 'next/image';
import { capitalize } from 'lodash';
import { ResponsiveTypography } from 'component/typography';

type Props = { pokemonList: Pokemon };

const component: React.FC<Props> = ({ pokemonList }) => {
  return (
    <Card variant="outlined" sx={{ marginTop: 0.7 }}>
      <CardActionArea>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '1rem'
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
            <ResponsiveTypography fontWeight={700} ml={1}>
              {capitalize(pokemonList?.name) || ''}
            </ResponsiveTypography>
          </Box>
          {/* <KeyboardArrowRightIcon /> */}
        </Box>
      </CardActionArea>
    </Card>
  );
};

export const PokemonListCard = React.memo(component);
