import { Fragment, memo } from 'react';
import { useGlobalEvent } from 'hook/use-global-event';
import { SearchBarDialog } from 'component/SearchBar/SearchBarDialog';
import { PokemonListV2 } from './PokemonListV2';
import { PokemonList, PokemonListDialog } from 'component/Pokemon/PokemonList';
import { Drawer } from '@mui/material';
import { AbilityInfoDialog } from './Dialogs/AbilityInfoDialog';

const Component = () => {
  const { isPokemonSearchBar } = useGlobalEvent();

  return (
    <Fragment>
      <SearchBarDialog isOpen={isPokemonSearchBar} />
      <PokemonListDialog />
      <AbilityInfoDialog />
    </Fragment>
  );
};

export const GlobalDialog = memo(Component);
