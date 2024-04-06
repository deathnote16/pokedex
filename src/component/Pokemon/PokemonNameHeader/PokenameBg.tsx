import { Box, Typography } from '@mui/material';
import { FlexBox } from 'component/BoxLayout/Boxes';
import { customColor } from 'component/theme';
import useWindowSize from 'hook/use-window-size';
import { FC, memo } from 'react';
import Marquee from 'react-fast-marquee';

type Props = { pokemonName?: string };

const Component: FC<Props> = ({ pokemonName = 'BULBASAUR' }) => {
  const { isMobile } = useWindowSize();

  return (
    <FlexBox width={'100%'}>
      <Marquee gradient={false} speed={160} direction="left">
        <Box sx={{ mx: 30 }}>
          <Typography
            fontSize={isMobile ? 300 : 500}
            fontWeight={500}
            sx={{
              color: 'white',
              textShadow:
                '-1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black' // Text shadow
            }}
          >
            {pokemonName.toUpperCase()}
          </Typography>
        </Box>
      </Marquee>
    </FlexBox>
  );
};

export const PokemonNameBg = memo(Component);
