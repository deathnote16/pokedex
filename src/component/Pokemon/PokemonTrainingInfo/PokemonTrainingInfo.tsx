import { FC, memo } from 'react';
import { PokemonInfoTableLayout, TableRowDataCard } from 'component/table';
import { usePokemonData } from 'hook';

type Props = {};

const Component: FC<Props> = () => {
  const { pokemonTrainingData } = usePokemonData();

  return (
    <PokemonInfoTableLayout infoHeaderName="Training Info">
      <TableRowDataCard
        rowHeader={pokemonTrainingData?.ev_yield.label}
        rowItem={pokemonTrainingData?.ev_yield?.data}
      />
      <TableRowDataCard
        rowHeader={pokemonTrainingData?.base_exp.label}
        rowItem={pokemonTrainingData?.base_exp?.data}
      />
      <TableRowDataCard
        rowHeader={pokemonTrainingData?.base_happiness.label}
        rowItem={pokemonTrainingData?.base_happiness?.data}
      />
      <TableRowDataCard
        rowHeader={pokemonTrainingData?.capture_rate.label}
        rowItem={pokemonTrainingData?.capture_rate?.data}
      />
      <TableRowDataCard
        rowHeader={pokemonTrainingData?.growth_rate.label}
        rowItem={pokemonTrainingData?.growth_rate?.data}
      />
    </PokemonInfoTableLayout>
  );
};

export const PokemonTrainingInfo = memo(Component);
