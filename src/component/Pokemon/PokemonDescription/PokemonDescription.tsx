import { FC, memo, useEffect, useState } from 'react';
import { FlexBox } from 'component/BoxLayout/Boxes';
import { Card, CardContent, Tooltip, Typography } from '@mui/material';
import { usePokemonPayload } from 'hook';
import { removeEscapeSequence } from 'utils';
import { ResponsiveTypography } from 'component/typography';
import { NextLazyImage } from 'component/image/LazyImageNext';
import { customColor } from 'component/theme';
import { motion } from 'framer-motion';

type Props = {};

const Component: FC<Props> = () => {
  const {
    pokeSpeciesFlavorText,
    isPokeSpeciesLoading,
    isPokeSpeciesFetching,
    pokemonName,
    pokeSpeciesError
  } = usePokemonPayload();
  const [descriptionIndex, setDescriptionIndex] = useState<number>(0);

  const onHandleSelectedVersion = (index: number, version?: string) => {
    setDescriptionIndex(index);
  };

  useEffect(() => {
    setDescriptionIndex(0);
  }, [pokemonName]);

  const PokemonDescriptionButton = () => (
    <FlexBox flexDirection={'row'}>
      {pokeSpeciesFlavorText?.map((species, index) => (
        <Tooltip
          key={index}
          title={
            `Pokemon ${species?.version?.name?.toUpperCase()}` || 'pokemon'
          }
          sx={{ cursor: 'pointer' }}
        >
          <FlexBox
            mx={'5px'}
            onClick={() =>
              onHandleSelectedVersion(index || 0, species?.version?.name)
            }
          >
            <NextLazyImage
              imgSrc={
                index === descriptionIndex
                  ? '/images/png/game.png'
                  : '/images/png/pokeball_2.png'
              }
              width={index === descriptionIndex ? 20 : 16}
              height={index === descriptionIndex ? 20 : 16}
            />
          </FlexBox>
        </Tooltip>
      ))}
    </FlexBox>
  );

  const CardDescription = () => (
    <Card sx={{ width: '100%' }} elevation={0}>
      <CardContent>
        {pokeSpeciesFlavorText?.map((pokeSpecies, index) => (
          <FlexBox key={index} justifyContent={'center'} textAlign={'center'}>
            {index === descriptionIndex && (
              <div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ stiffness: 100, duration: 1 }}
                >
                  <Typography fontSize={'24px'}>
                    {removeEscapeSequence(pokeSpecies?.flavor_text)}
                  </Typography>
                  <Typography variant="subtitle1" color={customColor.grey[400]}>
                    {`(Pokemon Version ${pokeSpecies?.version?.name?.toUpperCase()})`}
                  </Typography>
                </motion.div>
              </div>
            )}
          </FlexBox>
        ))}
      </CardContent>
    </Card>
  );

  return (
    <FlexBox>
      {(!isPokeSpeciesLoading || !isPokeSpeciesFetching) &&
        !pokeSpeciesError && (
          <FlexBox
            justifyContent={'center'}
            flexDirection={'column'}
            sx={{ mt: 1, mb: 10, width: '100%' }}
          >
            <Typography variant="h4" sx={{ fontWeight: 600 }}>
              Description
            </Typography>
            <CardDescription />
            <PokemonDescriptionButton />
          </FlexBox>
        )}
    </FlexBox>
  );
};

export const PokemonDescription = memo(Component);
