import { FC, memo } from 'react';
import { Box, Button, ButtonGroup, Drawer } from '@mui/material';
import { PokemonList } from '.';
import { useGlobalEvent } from 'hook/use-global-event';

type Props = {};

const Component: FC<Props> = () => {
  const { isPokemonList, onToggleShowPokemonList } = useGlobalEvent();

  return (
    <Drawer
      open={isPokemonList}
      onClose={() => onToggleShowPokemonList(false)}
      anchor="right"
      elevation={0}
      PaperProps={{
        sx: {
          overflowX: 'visible'
        }
      }}
    >
      <Box sx={{ width: '100%' }}>
        <ButtonGroup variant="outlined" aria-label="Basic button group">
          <Button fullWidth>All</Button>
          <Button fullWidth>Favorites</Button>
        </ButtonGroup>
      </Box>
      <PokemonList
        onCloseAfterSelecting={() => onToggleShowPokemonList(false)}
      />
    </Drawer>
  );
};

export const PokemonListDialog = memo(Component);
