import { Card } from '@mui/material';
import { FlexBoxRow } from 'component/BoxLayout/Boxes';
import { usePokemonPayload } from 'hook';
import { Pokemon } from 'modules/pokemon/types';
import { FC, memo, useMemo } from 'react';

type Props = { pokemonList: Pokemon };

const Component: FC<Props> = ({ pokemonList }) => {
  const { pokemonName } = usePokemonPayload();

  const activeImg = useMemo(() => {
    if (pokemonList?.name === pokemonName) {
      return `/images/png/open-pokeball.png`;
    } else {
      return `/images/png/game.png`;
    }
  }, [pokemonList?.name, pokemonName]);

  return (
    <Card variant="outlined" sx={{ marginTop: 0.7 }}>
      <CardActionArea>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '1rem',
            background: pokemonActive ? customColor.secondary.main : 'none',
            color: pokemonActive ? 'white' : 'black'
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <Image src={activeImg} width={25} height={25} alt={'poke-ball'} />
            <ResponsiveTypography fontWeight={700} ml={1}>
              {capitalize(pokemonList?.name) || ''}
            </ResponsiveTypography>
          </Box>
        </Box>
      </CardActionArea>
    </Card>
  );
};

export const ComponentName = memo(Component);
