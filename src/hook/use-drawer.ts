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

  const onTogglePokemonDrawer = () => {
    dispatch(pokemonDrawerActions.onHandlePokemonDrawerAction());
  };

  return {
    isOpenPokemonDrawer,
    onTogglePokemonDrawer
  };
};
