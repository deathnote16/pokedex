import { styled } from '@mui/system';
import React from 'react';
import Image from 'next/image';
import pokeballLoading from './pokeballLoading.module.css';

const PokeContainer = styled('div')({
  padding: '1rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
});

type Props = { height?: string };

const component: React.FC<Props> = ({ height }) => {
  return (
    <PokeContainer sx={{ minHeight: height }}>
      <Image
        src="/images/png/game.png"
        alt="pokeball-loading"
        width={70}
        height={70}
        className={pokeballLoading.spinPokeballEl}
      />
    </PokeContainer>
  );
};

export const PokeballLoaders = React.memo(component);
