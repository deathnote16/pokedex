import { FC, memo } from 'react';
import { Box, Paper, Typography, styled } from '@mui/material';
import { FlexBoxColumn } from 'component/BoxLayout/Boxes';
import SearchIcon from '@mui/icons-material/Search';
import { customColor } from 'component/theme';
import Image from 'next/image';
import { useGlobalEvent } from 'hook/use-global-event';
import CloseIcon from '@mui/icons-material/Close';

const BoxStyle = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  padding: '0.5rem',
  '&:hover': {
    background: customColor.highLight.main,
    color: 'white'
  }
});

type Props = {};

const Component: FC<Props> = () => {
  const {
    isPokemonSearchBar,
    isPokemonList,
    onToggleShowPokemonSearch,
    onToggleShowPokemonList
  } = useGlobalEvent();

  return (
    <Paper
      sx={{
        position: 'fixed',
        top: '30%',
        zIndex: 99,
        background: 'none'
      }}
      elevation={0}
    >
      <FlexBoxColumn>
        <BoxStyle
          sx={{
            borderTopRightRadius: '10px',
            background: customColor.secondary.main
          }}
          onClick={() => onToggleShowPokemonSearch(!isPokemonSearchBar)}
        >
          {isPokemonSearchBar ? (
            <CloseIcon
              sx={{ fontSize: '30px', color: customColor.primary.main }}
            />
          ) : (
            <SearchIcon
              sx={{ fontSize: '30px', color: customColor.primary.main }}
            />
          )}
        </BoxStyle>
        <BoxStyle
          sx={{
            borderBottomRightRadius: '20px',
            background: customColor.primary.main
          }}
          onClick={() => onToggleShowPokemonList(true)}
        >
          <Image
            src={'/images/icon/pokeball3.png'}
            alt="pokemon-img"
            width={20}
            height={20}
          />
          <Typography sx={{ fontSize: '12px' }}>Pokemon</Typography>
        </BoxStyle>
      </FlexBoxColumn>
    </Paper>
  );
};

export const SideNavigationBar = memo(Component);
