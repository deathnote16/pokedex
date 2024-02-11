import React from 'react';
import { Box, Card, Container, Paper } from '@mui/material';
import { styled } from '@mui/system';
import { modules } from 'modules';
import { PokemonListCard } from './PokemonListCard';
import Link from 'next/link';
import { PokeballLoaders } from 'component/loading/PokeBallLoaders';
import { PaginationPage } from 'component/pagination';

const { useGetPokemonListQuery } = modules.pokemonModule;

const FlexBox = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row',
  flexWrap: 'wrap'
});

type Props = {
  offset?: number;
};

const Component: React.FC<Props> = ({ offset }) => {
  const customHeight = '90vh';
  const { data, isSuccess, isFetching, isLoading, isError } =
    useGetPokemonListQuery({ limit: 30, offset });

  return (
    <Paper
      sx={{
        padding: 1,
        background: 'rgba(240, 240, 240, 0.5)',
        border: '10px solid black',
        minHeight: customHeight,
        maxHeight: '90vh',
        overflowY: 'scroll'
      }}
    >
      {isFetching || isLoading ? (
        <PokeballLoaders height={customHeight} />
      ) : (
        data?.results?.map((pokemon, index) => (
          <Link key={index} href={''}>
            <PokemonListCard pokemonList={pokemon} />
          </Link>
        ))
      )}
    </Paper>
  );
};

export const PokemonList = React.memo(Component);
