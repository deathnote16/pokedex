import { FC, memo } from 'react';
import { Box, Dialog, IconButton, Typography } from '@mui/material';
import { TitleWithIcon } from 'component/label';
import { usePokemonData, usePokemonPayload } from 'hook';
import { useGlobalEvent } from 'hook/use-global-event';
import useWindowSize from 'hook/use-window-size';
import { TypeEmblem } from 'component/Pokemon/PokemonType';
import { getPokemonColorType } from 'utils';
import DisabledByDefaultRoundedIcon from '@mui/icons-material/DisabledByDefaultRounded';
import { PokeballLoaders } from 'component/loading/PokeBallLoaders';

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
      maxWidth="sm"
      fullWidth
      onClose={() => onTogglePokemonTypeDialog(false)}
    >
      {isTypesFetching || isTypesLoading ? (
        <Box justifyContent={'center'} alignItems={'center'} py={10}>
          <PokeballLoaders dimension={150} />
        </Box>
      ) : (
        <Box
          sx={{
            padding: '2rem',
            flexDirection: 'column',
            position: 'relative'
          }}
        >
          <IconButton
            sx={{
              position: 'absolute',
              top: 0,
              right: 0
            }}
            onClick={() => onTogglePokemonTypeDialog(false)}
          >
            <DisabledByDefaultRoundedIcon />
          </IconButton>
          <Box
            sx={{
              background: getPokemonColorType(pokemonTypesName),
              padding: 1,
              mt: 1,
              mb: 1
            }}
          >
            <Typography variant="h5" fontWeight={700} color="white">
              {`${pokemonTypesName?.toUpperCase() || ''} TYPE`}
            </Typography>
          </Box>

          {pokemonTypesData.map((types, index) => (
            <Box key={index} my={2}>
              {types?.data && types?.data?.length > 0 && (
                <TitleWithIcon variant="h6" label={types?.label} />
              )}
              <TypeEmblem dataArray={types?.data || []} variant="h6" />
            </Box>
          ))}
        </Box>
      )}
    </Dialog>
  );
};

export const PokemonTypeDialog = memo(Component);
