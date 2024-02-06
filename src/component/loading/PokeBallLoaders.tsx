import { styled } from '@mui/system';
import React from 'react';
type Props = {};
import Image from 'next/image';
import pokeballLoading from './pokeballLoading.module.css';

const PokeContainer = styled('div')({
  padding: '1rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
});

const component: React.FC<Props> = ({}) => {
  return (
    <PokeContainer>
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
