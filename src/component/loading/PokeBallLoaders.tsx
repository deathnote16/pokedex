import { styled } from '@mui/system';
import React from 'react';
import Image from 'next/image';
import pokeballLoading from './pokeballLoading.module.css';

const PokeContainer = styled('div')({
  padding: '1rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
  // maxWidth: '100%',
  // height: 'auto'
});

type Props = { height?: string; dimension?: number; imgSrc?: string };

const component: React.FC<Props> = ({
  imgSrc = '/images/png/pokeballs2.png',
  height,
  dimension
}) => {
  return (
    <PokeContainer sx={{ minHeight: height }}>
      <Image
        // src="/images/png/game.png"
        src={imgSrc}
        alt="pokeball-loading"
        width={dimension || 70}
        height={dimension || 70}
        className={pokeballLoading.spinPokeballEl}
      />
    </PokeContainer>
  );
};

export const PokeballLoaders = React.memo(component);
