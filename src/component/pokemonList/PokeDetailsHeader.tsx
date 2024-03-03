import React from 'react';
import { Avatar, Box, Card, Typography } from '@mui/material';
import { ResponsiveTitle, ResponsiveTypography } from 'component/typography';
import Image from 'next/image';

const backgroundStyle = {
  backgroundImage: `url(/images/icon/pokeball_icon2.png)`,
  backgroundSize: 'cover',
  backgroundPosition: 'center'
};

type Props = {
  pokemonSpriteIcon?: string;
  pokeId?: number;
  pokeName?: string;
  isLoading?: boolean;
};

const Component: React.FC<Props> = ({
  pokeId,
  pokeName,
  pokemonSpriteIcon,
  isLoading
}) => {
  return (
    <Card sx={{ p: 1 }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        {pokemonSpriteIcon && !isLoading ? (
          <Avatar
            alt="pokemon-icon"
            src={pokemonSpriteIcon}
            sx={{ ...backgroundStyle, mr: 1, width: 50, height: 50 }}
          />
        ) : (
          <Box sx={{ ...backgroundStyle, width: 50, height: 50, mr: 1 }} />
        )}
        {isLoading ? (
          <Image
            src={`/images/gif/running-pikachu.gif`}
            width={65}
            height={65}
            alt={'running-pikachu'}
          />
        ) : (
          <>
            <ResponsiveTitle mr={1}>
              {pokeId ? `#${pokeId}` : '--'}
            </ResponsiveTitle>
            <ResponsiveTitle>{pokeName?.toUpperCase() || '--'}</ResponsiveTitle>
          </>
        )}
      </Box>
    </Card>
  );
};

export const PokeHeader = React.memo(Component);
