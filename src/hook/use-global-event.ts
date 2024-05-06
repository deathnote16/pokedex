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

  const isPokemonAbilityDialog = useAppSelector(
    globalEventSelector.selecctIsOpenPokemonAbilityDialog
  );

  const onToggleShowPokemonSearch = (isOpen: boolean) => {
    dispatch(globalEventAction.togglePokemonSearchAction({ isOpen }));
  };

  const onToggleShowPokemonList = (isOpen: boolean) => {
    dispatch(globalEventAction.togglePokemonListAction({ isOpen }));
  };

  const onTogglePokemonAbilityDialog = (isOpen: boolean) => {
    dispatch(globalEventAction.togglePokemonAbilityDialogAction({ isOpen }));
  };

  return {
    isPokemonSearchBar,
    onToggleShowPokemonSearch,

    isPokemonList,
    onToggleShowPokemonList,

    isPokemonAbilityDialog,
    onTogglePokemonAbilityDialog
  };
};
