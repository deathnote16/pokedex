import { modules } from 'modules';
import { useAppDispatch } from './use-app-dispatch';
import { useAppSelector } from './use-app-selector';

const { actions: globalEventAction, selector: globalEventSelector } =
  modules.globalEvent;

export const useGlobalEvent = () => {
  const dispatch = useAppDispatch();

  const isPokemonSearchBar = useAppSelector(
    globalEventSelector.selectIsOpenPokemonSearch
  );

  const isPokemonList = useAppSelector(
    globalEventSelector.selectIsOpenPokemonList
  );

  const onToggleShowPokemonSearch = (isOpen: boolean) => {
    dispatch(globalEventAction.togglePokemonSearchAction({ isOpen }));
  };

  const onToggleShowPokemonList = (isOpen: boolean) => {
    dispatch(globalEventAction.togglePokemonListAction({ isOpen }));
  };

  return {
    isPokemonSearchBar,
    isPokemonList,

    onToggleShowPokemonSearch,
    onToggleShowPokemonList
  };
};
