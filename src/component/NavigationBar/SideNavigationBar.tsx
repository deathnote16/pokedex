import { FC, memo } from 'react';
import { Box, Paper, styled } from '@mui/material';
import { FlexBoxColumn } from 'component/BoxLayout/Boxes';
import { Small } from 'component/typography';
import SearchIcon from '@mui/icons-material/Search';
import { customColor } from 'component/theme';
import Image from 'next/image';

const BoxStyle = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  padding: '1rem',
  '&:hover': {
    background: customColor.highLight.main
  }
});

type Props = {};

const Component: FC<Props> = () => {
  return (
    <Paper
      sx={{
        position: 'fixed',
        top: '30%'
      }}
      elevation={0}
    >
      <FlexBoxColumn>
        <BoxStyle
          sx={{
            borderTopRightRadius: '10px',
            background: customColor.secondary.main
          }}
        >
          <SearchIcon
            sx={{ fontSize: '50px', color: customColor.primary.main }}
          />
        </BoxStyle>
        <BoxStyle
          sx={{
            borderBottomRightRadius: '30px',
            background: customColor.primary.main
          }}
        >
          <Image
            src={'/images/icon/pokeball3.png' || ''}
            alt="pokemon-img"
            width={40}
            height={40}
          />
          <Small>Pokemon</Small>
        </BoxStyle>
      </FlexBoxColumn>
    </Paper>
  );
};

export const SideNavigationBar = memo(Component);
