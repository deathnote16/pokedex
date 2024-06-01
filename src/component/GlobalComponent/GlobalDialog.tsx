import { Fragment, memo } from 'react';
import { useGlobalEvent } from 'hook/use-global-event';
import { SearchBarDialog } from 'component/SearchBar/SearchBarDialog';
import { PokemonListDialog } from 'component/Pokemon/PokemonList';
import { AbilityInfoDialog } from './Dialogs/AbilityInfoDialog';
import { PokemonTypeDialog } from './Dialogs/PokemonTypeDialog';

const Component = () => {
  const { isPokemonSearchBar } = useGlobalEvent();

  return (
    <Fragment>
      <SearchBarDialog isOpen={isPokemonSearchBar} />
      <PokemonListDialog />
      <AbilityInfoDialog />
      <PokemonTypeDialog />
    </Fragment>
  );
};

export const GlobalDialog = memo(Component);
