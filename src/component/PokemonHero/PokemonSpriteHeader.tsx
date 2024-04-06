import { FC, memo } from 'react';
import { FlexBox } from 'component/BoxLayout/Boxes';
import Image from 'next/image';
import { Sprites } from 'modules/pokemon/types';
import { Typography } from '@mui/material';
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

const Component: FC<Props> = ({ imgSourceLink }) => {
  const { isMobile } = useWindowSize();
  const { pokemonName } = usePokemonPayload();

  return (
    <FlexBox flexDirection={'column'}>
      <FlexBox></FlexBox>
      <FlexBox>
        <Image
          src={imgSourceLink?.other?.['official-artwork']?.front_default || ''}
          alt="pokemon-img"
          width={500}
          height={500}
        />
      </FlexBox>
      <FlexBox
        sx={{
          mt: -15,
          justifyContent: 'center',
          width: '100%',
          paddingX: isMobile ? 0 : '10rem',
          flexDirection: 'column'
        }}
      >
        <Typography
          variant="h4"
          fontWeight={900}
          mb={-3}
          style={{
            textShadow: whiteShadow
          }}
          color={customColor.highLight.main}
        >
          {'#100'}
        </Typography>
        <Typography
          variant="h1"
          fontWeight={900}
          fontSize={100}
          color={customColor.highLight.main}
          style={{
            textShadow: `${shadow},${whiteShadow}`
          }}
        >
          {pokemonName?.toUpperCase()}
        </Typography>
        <PokemonTypeEmblem />
      </FlexBox>
    </FlexBox>
  );
};

export const PokemonSpriteHeader = memo(Component);
