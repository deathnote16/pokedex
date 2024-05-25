import { FC, memo } from 'react';
import { Box, Dialog, Typography } from '@mui/material';
import { FlexBox } from 'component/BoxLayout/Boxes';
import { TitleWithIcon } from 'component/label';
import { usePokemonData, usePokemonPayload } from 'hook';
import { useGlobalEvent } from 'hook/use-global-event';
import { NextLazyImage } from 'component/image/LazyImageNext';
import useWindowSize from 'hook/use-window-size';
import { capitalize } from 'lodash';
import { PokeballLoaders } from 'component/loading/PokeBallLoaders';
import { customColor } from 'component/theme';
import { PokemonTypeEmblem, TypeEmblem } from 'component/Pokemon/PokemonType';
import { getPokemonColorType } from 'utils';

type Props = {};

const Component: FC<Props> = () => {
  const { isMobile } = useWindowSize();
  const { isTypesFetching, isTypesLoading, pokemonTypesName } =
    usePokemonPayload();
  const { pokemonTypesData } = usePokemonData();
  const { isPokemonTypeDialog, onTogglePokemonTypeDialog } = useGlobalEvent();

  return (
    <Dialog
      open={isPokemonTypeDialog}
      maxWidth="md"
      fullWidth
      onClose={() => onTogglePokemonTypeDialog(false)}
    >
      <FlexBox
        sx={{
          padding: '2rem',
          flexDirection: 'column',
          alignItems: 'flex-start',
          width: '100%'
        }}
      >
        <Box
          sx={{
            background: getPokemonColorType(pokemonTypesName),
            width: '100%',
            padding: 1,
            mb: 1
          }}
        >
          <Typography variant="h5" fontWeight={700} color="white">
            {`${pokemonTypesName?.toUpperCase() || ''} TYPE`}
          </Typography>
        </Box>

        {pokemonTypesData.map((types, index) => (
          <Box key={index} my={1}>
            {types?.data && types?.data?.length > 0 && (
              <TitleWithIcon variant="h6" label={types?.label} />
            )}
            <TypeEmblem dataArray={types?.data || []} />
          </Box>
        ))}
      </FlexBox>
    </Dialog>
  );
};

export const PokemonTypeDialog = memo(Component);
