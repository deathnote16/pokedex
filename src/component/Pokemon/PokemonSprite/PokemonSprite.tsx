import { Box, Card } from '@mui/material';
import { LazyImage } from 'component/image';
import { Sprites } from 'modules/pokemon/types';
import React from 'react';
import Image from 'next/image';
import { PokeballLoaders } from 'component/loading/PokeBallLoaders';

type Props = {
  imgSourceLink?: Sprites;
  loading?: boolean;
};

const boxStyle = {
  backgroundImage: `url(/images/png/pokemon_bg3.jpg)`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  width: '100%',
  height: 'auto',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

const Component: React.FC<Props> = ({ imgSourceLink, loading }) => {
  return (
    <Card
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '5px solid gray'
      }}
      elevation={1}
    >
      <Box sx={boxStyle}>
        {imgSourceLink && !loading ? (
          <Image
            src={
              imgSourceLink?.other?.['official-artwork']?.front_default || ''
            }
            alt="pokemon-img"
            width={500}
            height={500}
          />
        ) : (
          <Box sx={{ ...boxStyle, height: 300 }}>
            {loading ? (
              <PokeballLoaders
                imgSrc={`/images/icon/pokeball_icon.png`}
                height={'500'}
                dimension={200}
              />
            ) : null}
          </Box>
        )}
      </Box>
    </Card>
  );
};

export const PokemonSprite = React.memo(Component);
