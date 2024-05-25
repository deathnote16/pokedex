import { Button, Typography } from '@mui/material';
import { FlexBox } from 'component/BoxLayout/Boxes';
import { FC, memo } from 'react';
import { usePokemonPayload } from 'hook';
import { getPokemonColorType } from 'utils';
import { customColor } from 'component/theme';
import { useGlobalEvent } from 'hook/use-global-event';
import { CommonTypeDamage } from 'modules/pokemon/types/pokemonType';

type Props = {
  width?: string;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  pokeType?: string;
  dataArray?: CommonTypeDamage[];
};

const Component: FC<Props> = ({
  width = '120px',
  variant = 'h6',
  pokeType,
  dataArray
}) => {
  return (
    <FlexBox>
      {dataArray && dataArray?.length > 0 ? (
        <>
          {dataArray?.map((type, index) => (
            <Button
              key={index}
              color="secondary"
              sx={{
                background: getPokemonColorType(type.name),
                mx: '0.1rem',
                py: 0,
                width: width,
                maxWidth: '300px',
                color: 'white',
                my: 0.5,
                '&:hover': { background: customColor.highLight.main }
              }}
            >
              <Typography variant={variant} fontWeight={500}>
                {type.name}
              </Typography>
            </Button>
          ))}
        </>
      ) : (
        <Button
          color="secondary"
          sx={{
            background: getPokemonColorType(pokeType),
            mx: '0.1rem',
            py: 0,
            width: width,
            maxWidth: '300px',
            color: 'white',
            '&:hover': { background: customColor.highLight.main }
          }}
        >
          <Typography variant={variant} fontWeight={500}>
            {pokeType}
          </Typography>
        </Button>
      )}
    </FlexBox>
  );
};

export const TypeEmblem = memo(Component);
