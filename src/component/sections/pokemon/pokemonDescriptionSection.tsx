import { PokemonDescription } from 'component/Pokemon/PokemonDescription';
import { FC, memo } from 'react';

type Props = {};

const Component: FC<Props> = () => {
  return <PokemonDescription />;
};

export const PokemonDescriptionSection = memo(Component);
