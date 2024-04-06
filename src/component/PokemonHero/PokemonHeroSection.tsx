import { FC, memo } from 'react';
import { Box } from '@mui/material';
import { FlexBox } from 'component/BoxLayout/Boxes';
import { PokemonNameBg } from 'component/Pokemon/PokemonNameHeader';
import { PokemonSpriteHeader } from './PokemonSpriteHeader';
import { modules } from 'modules';
import { usePokemonPayload } from 'hook';

const { useGetPokemonDetailsQuery } = modules.pokemonModule;

type Props = {};

const Component: FC<Props> = () => {
  const { pokemonName } = usePokemonPayload();
  const {
    data: pokeDetails,
    isLoading,
    isFetching
  } = useGetPokemonDetailsQuery({
    url: `https://pokeapi.co/api/v2/pokemon/${pokemonName || 'bulbasaur'}/`
  });

  return (
    <FlexBox sx={{ width: '100%', height: '100vh' }}>
      <FlexBox
        position={'relative'}
        style={{
          width: '100%',
          height: '100vh',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Box position={'absolute'} style={{ zIndex: 1, width: '100%' }}>
          <PokemonNameBg pokemonName={pokeDetails?.name} />
        </Box>
        <Box position={'absolute'} style={{ zIndex: 1, width: '100%' }}>
          <PokemonSpriteHeader imgSourceLink={pokeDetails?.sprites} />
        </Box>
      </FlexBox>
    </FlexBox>
  );
};

export const PokemonHeroSection = memo(Component);
