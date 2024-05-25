import { FC, memo } from 'react';
import { Box } from '@mui/material';
import { FlexBox } from 'component/BoxLayout/Boxes';
import { PokemonNameBg } from 'component/Pokemon/PokemonNameHeader';
import { PokemonSpriteHeader } from './PokemonSpriteHeader';
import { modules } from 'modules';
import { usePokemonPayload } from 'hook';
import { PokeballLoaders } from 'component/loading/PokeBallLoaders';
import useWindowSize from 'hook/use-window-size';

type Props = {};

const Component: FC<Props> = () => {
  const { pokemonName, isPokemonDetailsLoading, isPokemonDetailFetching } =
    usePokemonPayload();
  const { isMobile, isTablet } = useWindowSize();

  return (
    <FlexBox
      mt={5}
      sx={{
        width: '100%',
        height: isMobile ? 'auto' : isTablet ? '50vh' : '100vh'
      }}
    >
      <FlexBox
        position={'relative'}
        style={{
          width: '100%',
          height: '50vh',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        {isPokemonDetailsLoading ||
          (isPokemonDetailFetching ? (
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
