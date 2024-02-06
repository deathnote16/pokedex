import React from 'react';
import { Box, Card, Container, Paper } from '@mui/material';
import { styled } from '@mui/system';
import { modules } from 'modules';
import { PokemonListCard } from './PokemonListCard';
import Link from 'next/link';
import { PokeballLoaders } from 'component/loading/PokeBallLoaders';

const { useGetPokemonListQuery } = modules.pokemonModule;

const FlexBox = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row',
  flexWrap: 'wrap'
});

type Props = {};

const Component: React.FC<Props> = () => {
  const { data, isSuccess, isFetching, isLoading, isError } =
    useGetPokemonListQuery({ limit: 10000 });

  return (
    <Paper
      sx={{
        padding: 1,
        background: 'rgba(240, 240, 240, 0.5)',
        border: '10px solid black',
        maxHeight: '90vh',
        overflowY: 'scroll'
      }}
    >
      {isFetching || isLoading ? <PokeballLoaders /> : null}
      {data?.results?.map((pokemon: any, index: number) => (
        <Link key={index} href={''}>
          <PokemonListCard index={index + 1} pokemonList={pokemon} />
        </Link>
      ))}
    </Paper>
  );
};

export const PokemonList = React.memo(Component);
