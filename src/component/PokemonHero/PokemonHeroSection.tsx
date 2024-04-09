import { FC, memo } from 'react';
import { Box } from '@mui/material';
import { FlexBox } from 'component/BoxLayout/Boxes';
import { PokemonNameBg } from 'component/Pokemon/PokemonNameHeader';
import { PokemonSpriteHeader } from './PokemonSpriteHeader';
import { modules } from 'modules';
import { usePokemonPayload } from 'hook';
import { PokeballLoaders } from 'component/loading/PokeBallLoaders';
import useWindowSize from 'hook/use-window-size';

const { useGetPokemonDetailsQuery } = modules.pokemonModule;

type Props = {};

const Component: FC<Props> = () => {
  const { pokemonName, isLoading, isFetching } = usePokemonPayload();
  const { isMobile } = useWindowSize();

  return (
    <FlexBox
      sx={{
        width: '100%',
        height: isMobile ? '50vh' : '100vh'
      }}
    >
      <FlexBox
        position={'relative'}
        style={{
          width: '100%',
          height: isMobile ? '40vh' : '100vh',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        {isLoading ||
          (isFetching ? (
            <PokeballLoaders
              imgSrc={`/images/png/pokeballs2.png`}
              height={'40vh'}
              dimension={220}
            />
          ) : (
            <>
              <Box position={'absolute'} style={{ zIndex: 1, width: '100%' }}>
                {/* You can change background here */}
                <PokemonNameBg pokemonName={pokemonName} />
              </Box>
              <Box position={'absolute'} style={{ zIndex: 1, width: '100%' }}>
                <PokemonSpriteHeader />
              </Box>
            </>
          ))}
      </FlexBox>
    </FlexBox>
  );
};

export const PokemonHeroSection = memo(Component);
