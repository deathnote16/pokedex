import { modules } from 'modules';
import { useAppDispatch } from './use-app-dispatch';
import { useAppSelector } from './use-app-selector';

const { actions: pokemonDrawerActions, selectors: pokemonDrawerSelectors } =
  modules.drawer;

export const useDrawer = () => {
  const dispatch = useAppDispatch();

  const isOpenPokemonDrawer = useAppSelector(
    pokemonDrawerSelectors.selectIsOpenPokemonDrawer
  );

  const isOpenSubNavigationBar = useAppSelector(
    pokemonDrawerSelectors.selectSubNavigationBar
  );

  const onTogglePokemonDrawer = () => {
    dispatch(pokemonDrawerActions.onTogglePokemonDrawerAction());
  };

  const onToggleSubNavigationDrawer = () => {
    dispatch(pokemonDrawerActions.onToggleSubNavigationAction());
  };

  return {
    isOpenPokemonDrawer,
    isOpenSubNavigationBar,

    onTogglePokemonDrawer,
    onToggleSubNavigationDrawer
  };
};
