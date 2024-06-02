import { FC, memo } from 'react';
import { PokemonHero } from 'component/PokemonHero';

type Props = {};

const Component: FC<Props> = () => {
  return <PokemonHero />;
};

export const PokemonHeroSection = memo(Component);
