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

  const onToggleShowPokemonSearch = (isOpen: boolean) => {
    dispatch(globalEventAction.togglePokemonSearchAction({ isOpen }));
  };

  return {
    isPokemonSearchBar,
    onToggleShowPokemonSearch
  };
};
