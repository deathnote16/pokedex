import { FC, memo } from 'react';
import { FlexBox } from 'component/BoxLayout/Boxes';
import Image from 'next/image';
import { Sprites } from 'modules/pokemon/types';
import { Typography, colors } from '@mui/material';
import useWindowSize from 'hook/use-window-size';
import { usePokemonPayload } from 'hook';
import { customColor } from 'component/theme';
import { PokemonTypeEmblem } from 'component/Pokemon/PokemonType';

type Props = { imgSourceLink?: Sprites };

const whiteShadow = `
-1px -1px 0 #fff,
1px -1px 0 #fff,
-1px 1px 0 #fff,
1px 1px 0 #fff,
0px 0px 5px #fff
`;

const shadow = `0px 14px 10px rgba(0,0,0,0.15),
0px 24px 2px rgba(0,0,0,0.1),
0px 34px 30px rgba(0,0,0,0.1)`;

const goldShadow = `
-1px -1px 0 #ffd700,
1px -1px 0 #ffd700,
-1px 1px 0 #ffd700,
1px 1px 0 #ffd700,
0px 0px 5px #ffd700
`;

const violetShadow = `
-1px -1px 0 #8a2be2,
1px -1px 0 #8a2be2,
-1px 1px 0 #8a2be2,
1px 1px 0 #8a2be2,
0px 0px 5px #8a2be2
`;

const Component: FC<Props> = ({ imgSourceLink }) => {
  const { isMobile, isTablet } = useWindowSize();
  const {
    pokemonName,
    pokemonSprite,
    pokeDetails,
    isLegendaryPokemon,
    isMythicalPokemon
  } = usePokemonPayload();

  return (
    <FlexBox flexDirection={'column'}>
      <FlexBox>
        <Image
          src={pokemonSprite || ''}
          alt="pokemon-img"
          width={isMobile ? 300 : isTablet ? 350 : 500}
          height={isMobile ? 300 : isTablet ? 350 : 500}
        />
      </FlexBox>
      <FlexBox
        sx={{
          mt: isMobile ? -10 : -15,
          justifyContent: 'center',
          width: '100%',
          paddingX: isMobile ? 0 : '10rem',
          flexDirection: 'column'
        }}
      >
        <Typography
          variant={isMobile ? 'h6' : 'h4'}
          fontWeight={900}
          style={{
            textShadow: whiteShadow
          }}
          color={customColor.highLight.main}
        >
          {`#${pokeDetails?.id}`}
        </Typography>
        <FlexBox
          flexDirection={'column'}
          style={{
            backgroundImage:
              isLegendaryPokemon || isMythicalPokemon
                ? 'url(/images/gif/shining_effect.gif)'
                : ''
          }}
        >
          <Typography
            variant="h1"
            fontWeight={900}
            fontSize={isMobile ? 50 : isTablet ? 60 : 100}
            color={customColor.highLight.main}
            textAlign={'center'}
            lineHeight={0.8}
            style={{
              textShadow: `${shadow},${whiteShadow}`
            }}
          >
            {pokemonName?.toUpperCase()}
          </Typography>
          {isLegendaryPokemon && (
            <Typography
              mt={-2}
              variant="h6"
              color={colors.yellow[50]}
              sx={{
                textShadow: goldShadow
              }}
            >
              LEGENDARY
            </Typography>
          )}
          {isMythicalPokemon && (
            <Typography
              mt={-2}
              variant="h6"
              color={colors.yellow[50]}
              sx={{
                textShadow: violetShadow
              }}
            >
              MYTHICAL
            </Typography>
          )}
        </FlexBox>
        <PokemonTypeEmblem />
      </FlexBox>
    </FlexBox>
  );
};

export const PokemonSpriteHeader = memo(Component);
