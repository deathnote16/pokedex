import { FC, memo } from 'react';
import { convertDmToFoot, fixKg } from 'utils';
import { usePokemonData } from 'hook';
import { PokemonInfoTableLayout, TableRowDataCard } from 'component/table';

type Props = {};

const Component: FC<Props> = ({}) => {
  const { pokeBreedingData } = usePokemonData();

  return (
    <PokemonInfoTableLayout infoHeaderName="Breeding Info">
      {pokeBreedingData?.map((breeding, index) => (
        <TableRowDataCard
          key={index}
          rowHeader={breeding?.label}
          rowItem={breeding?.data}
        />
      ))}
    </PokemonInfoTableLayout>
  );
};

export const BreedingInfo = memo(Component);
