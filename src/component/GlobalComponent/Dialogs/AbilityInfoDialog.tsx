import { FC, memo } from 'react';
import { Dialog, Typography } from '@mui/material';
import { FlexBox } from 'component/BoxLayout/Boxes';
import { TitleWithIcon } from 'component/label';
import { usePokemonData, usePokemonPayload } from 'hook';
import { useGlobalEvent } from 'hook/use-global-event';
import { NextLazyImage } from 'component/image/LazyImageNext';
import useWindowSize from 'hook/use-window-size';
import { capitalize } from 'lodash';
import { PokeballLoaders } from 'component/loading/PokeBallLoaders';

type Props = {};

const Component: FC<Props> = () => {
  const { isMobile } = useWindowSize();
  const { isFetchingAbilities, isLoadingAbilities } = usePokemonPayload();
  const { pokeAbilitiesData } = usePokemonData();
  const { isPokemonAbilityDialog, onTogglePokemonAbilityDialog } =
    useGlobalEvent();

  return (
    <Dialog
      open={isPokemonAbilityDialog}
      maxWidth="sm"
      fullWidth
      onClose={() => onTogglePokemonAbilityDialog(false)}
    >
      <FlexBox
        display={'flex'}
        justifyContent={'center'}
        flexDirection={'row'}
        p={3}
        maxWidth={'100%'}
      >
        <FlexBox>
          <NextLazyImage
            imgSrc={'/images/png/detective pikachu1.png'}
            width={isMobile ? 150 : 250}
            height={isMobile ? 150 : 250}
          />
        </FlexBox>
        <FlexBox
          sx={{
            padding: 3,
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            width: '100%',
            maxWidth: isMobile ? '100%' : '50%'
          }}
          flexDirection={'column'}
        >
          {isLoadingAbilities || isFetchingAbilities ? (
            <FlexBox
              justifyContent={'center'}
              alignItems={'center'}
              minWidth="100%"
            >
              <PokeballLoaders dimension={150} />
            </FlexBox>
          ) : (
            <>
              <TitleWithIcon label={capitalize(pokeAbilitiesData?.name)} />
              <Typography textOverflow={'ellipsis'} mt={1}>
                {pokeAbilitiesData?.data?.effect}
              </Typography>
            </>
          )}
        </FlexBox>
      </FlexBox>
    </Dialog>
  );
};

export const AbilityInfoDialog = memo(Component);
