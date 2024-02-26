import React from 'react';
import { Avatar, Box, Card, Typography } from '@mui/material';
import { ResponsiveTitle, ResponsiveTypography } from 'component/typography';

const backgroundStyle = {
  backgroundImage: `url(/images/icon/pokeball_icon2.png)`,
  backgroundSize: 'cover',
  backgroundPosition: 'center'
};

type Props = {
  pokemonSpriteIcon?: string;
  pokeId?: number;
  pokeName?: string;
};

const Component: React.FC<Props> = ({
  pokeId,
  pokeName,
  pokemonSpriteIcon
}) => {
  return (
    <Card sx={{ p: 1 }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        {pokemonSpriteIcon ? (
          <Avatar
            alt="pokemon-icon"
            src={pokemonSpriteIcon}
            sx={{ ...backgroundStyle, mr: 1, width: 50, height: 50 }}
          />
        ) : (
          <Box sx={{ ...backgroundStyle, width: 50, height: 50, mr: 1 }} />
        )}

        <ResponsiveTitle mr={1}>{pokeId ? `#${pokeId}` : '--'}</ResponsiveTitle>
        <ResponsiveTitle>{pokeName?.toUpperCase() || '--'}</ResponsiveTitle>
      </Box>
    </Card>
  );
};

export const PokeHeader = React.memo(Component);
