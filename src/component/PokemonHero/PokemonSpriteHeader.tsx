import { FC, memo } from 'react';
import { FlexBox } from 'component/BoxLayout/Boxes';
import Image from 'next/image';
import { Sprites } from 'modules/pokemon/types';
import { Typography, colors } from '@mui/material';
import useWindowSize from 'hook/use-window-size';
import { usePokemonData, usePokemonPayload } from 'hook';
import { customColor } from 'component/theme';
import { PokemonTypeEmblem } from 'component/Pokemon/PokemonType';
import {
  goldShadow,
  shadow,
  violetShadow,
  whiteShadow
} from 'constant/text-shadow';
import { motion } from 'framer-motion';

type Props = { imgSourceLink?: Sprites };

const Component: FC<Props> = ({ imgSourceLink }) => {
  const { isMobile, isTablet } = useWindowSize();
  const { pokemonName, pokeDetails } = usePokemonPayload();
  const { isLegendaryPokemon, isMythicalPokemon, pokemonSprite } =
    usePokemonData();

  return (
    <FlexBox flexDirection={'column'}>
      <FlexBox>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={pokemonSprite || ''}
            alt="pokemon-img"
            width={isMobile ? 300 : isTablet ? 350 : 500}
            height={isMobile ? 300 : isTablet ? 350 : 500}
          />
        </motion.div>
      </FlexBox>
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{
          type: 'spring',
          damping: 10,
          bounce: 0.5,
          duration: 1
        }}
      >
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
                color={colors.purple[50]}
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
      </motion.div>
    </FlexBox>
  );
};

export const PokemonSpriteHeader = memo(Component);
