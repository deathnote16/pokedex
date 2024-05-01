import { FC, memo } from 'react';
import { convertDmToFoot, fixKg } from 'utils';
import { usePokemonData } from 'hook';
import { PokemonInfoTableLayout, TableRowDataCard } from 'component/table';

type Props = {};

const Component: FC<Props> = ({}) => {
  const { pokedexData } = usePokemonData();

  return (
    <PokemonInfoTableLayout infoHeaderName="Pokedex Entry">
      <TableRowDataCard
        rowHeader={pokedexData?.national_no?.name}
        rowItem={pokedexData?.national_no?.data}
      />
      <TableRowDataCard
        rowHeader={pokedexData?.height?.name}
        rowItem={`${convertDmToFoot(pokedexData?.height?.data)} ft`}
      />
      <TableRowDataCard
        rowHeader={pokedexData?.weight?.name}
        rowItem={`${fixKg(pokedexData?.weight?.data)} kg`}
      />
      <TableRowDataCard
        rowHeader={pokedexData?.genus?.name}
        rowItem={pokedexData?.genus?.data && pokedexData?.genus?.data[0].genus}
      />
      <TableRowDataCard
        rowHeader={pokedexData?.color?.name}
        rowItem={pokedexData?.color?.data?.name}
      />
      <TableRowDataCard
        rowHeader={pokedexData?.generation?.name}
        rowItem={pokedexData?.generation?.data?.name}
      />
    </PokemonInfoTableLayout>
  );
};

export const PokeDexEntry = memo(Component);
