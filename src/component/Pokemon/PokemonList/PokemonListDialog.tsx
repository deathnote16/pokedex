import { FC, memo, useState } from 'react';
import { Box, Button, ButtonGroup, Drawer, Tab, Tabs } from '@mui/material';
import { PokemonList } from '.';
import { useGlobalEvent } from 'hook/use-global-event';

import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { customColor } from 'component/theme';
import { PaginationPage } from 'component/pagination';
import { usePagination } from 'hook';

type Props = {};

const Component: FC<Props> = () => {
  const { isPokemonList, onToggleShowPokemonList } = useGlobalEvent();
  const { currentPage, nextPage, prevPage } = usePagination();

  const [tabView, setTabView] = useState('all-pokemon');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setTabView(newValue);
  };

  const RenderListView = () => {
    switch (tabView) {
      case 'all-pokemon':
        return (
          <PokemonList
            offset={currentPage}
            onCloseAfterSelecting={() => onToggleShowPokemonList(false)}
          />
        );
      case 'all-favorites':
        return <Box>Test</Box>;
    }
  };

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
      <Tabs
        value={tabView}
        onChange={handleChange}
        aria-label="list-tabs"
        indicatorColor="primary"
      >
        <Tab
          value="all-pokemon"
          color={customColor.secondary.main}
          icon={
            <FormatListBulletedIcon
              style={{ color: customColor.secondary.main, fontSize: 24 }}
            />
          }
        />
        <Tab
          value="all-favorites"
          icon={
            <FavoriteBorderIcon
              style={{ color: customColor.secondary.main, fontSize: 24 }}
            />
          }
        />
      </Tabs>
      <RenderListView />
      <PaginationPage nextPage={nextPage} prevPage={prevPage} />
    </Drawer>
  );
};

export const PokemonListDialog = memo(Component);
