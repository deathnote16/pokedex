import React from 'react';
import { capitalize } from 'lodash';
import { usePokemonPayload } from 'hook';
import { BaseStat } from '.';
import { PokemonInfoTableLayout } from 'component/table';

type Props = {};

const Component: React.FC<Props> = () => {
  const { pokemonName } = usePokemonPayload();

  return (
    <PokemonInfoTableLayout
      infoHeaderName={`${capitalize(pokemonName)} Base Stats`}
    >
      <BaseStat />
    </PokemonInfoTableLayout>
  );
};

export const PokemonStats = React.memo(Component);
