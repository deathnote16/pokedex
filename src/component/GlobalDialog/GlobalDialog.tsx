import { Fragment, memo } from 'react';
import { useGlobalEvent } from 'hook/use-global-event';
import { SearchBarDialog } from 'component/SearchBar/SearchBarDialog';

const Component = () => {
  const { isPokemonSearchBar } = useGlobalEvent();

  return (
    <Fragment>
      <SearchBarDialog isOpen={isPokemonSearchBar} />
    </Fragment>
  );
};

export const GlobalDialog = memo(Component);
