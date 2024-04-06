import { FC, memo } from 'react';

type Props = {};

const Component: FC<Props> = () => {
  return <div>test</div>;
};

export const PokemonTypeEmblem = memo(Component);
