import { Button, Typography } from '@mui/material';
import { FlexBox } from 'component/BoxLayout/Boxes';
import { FC, memo } from 'react';
import { usePokemonPayload } from 'hook';
import { getPokemonColorType } from 'utils';
import { customColor } from 'component/theme';
import { useGlobalEvent } from 'hook/use-global-event';

type Props = {
  width?: string;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  noClick: boolean;
};

const Component: FC<Props> = ({
  width = '120px',
  variant = 'h5',
  noClick = false
}) => {
  const { pokeDetails } = usePokemonPayload();
  const { onTogglePokemonTypeDialog } = useGlobalEvent();
  const { getPokemonTypes } = usePokemonPayload();

  const onHandleClickOnType = (typeName?: string) => {
    if (noClick) {
      return;
    }
    onTogglePokemonTypeDialog(true);
    getPokemonTypes(typeName);
  };

  return (
    <FlexBox>
      {pokeDetails?.types?.map((types, index) => (
        <Button
          color="secondary"
          onClick={() => {
            onHandleClickOnType(types.type?.name);
          }}
          key={index}
          sx={{
            background: getPokemonColorType(types?.type?.name),
            mx: '0.1rem',
            py: 0,
            width: width,
            maxWidth: '300px',
            color: 'white',
            '&:hover': { background: customColor.highLight.main }
          }}
        >
          <Typography variant={variant} fontWeight={500}>
            {types?.type?.name}
          </Typography>
        </Button>
      ))}
    </FlexBox>
  );
};

export const PokemonTypeEmblem = memo(Component);
