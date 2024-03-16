import { FC, memo, useEffect, useMemo, useState } from 'react';
import {
  Autocomplete,
  Box,
  Button,
  IconButton,
  Paper,
  TextField
} from '@mui/material';
import { PokemonListCard } from 'component/Pokemon/PokemonList/PokemonListCard';
import { usePokemonPayload } from 'hook';
import { cloneDeep } from 'lodash';
import { modules } from 'modules';
import { OptionCard } from './OptionCard';

const { useGetPokemonListQuery } = modules.pokemonModule;

type Props = {};

const Component: FC<Props> = () => {
  const { data, isFetching, isLoading, isError } = useGetPokemonListQuery({
    limit: 10000
  });
  const { getPokemonName } = usePokemonPayload();
  const [searchInput, setSearchInput] = useState<string>();
  const [value, setValue] = useState<string | null>();

  const pokemonOptions = useMemo(() => {
    const newPokemonResult = cloneDeep(data?.results);
    const newPokemonOptions = newPokemonResult?.map((item) => item.name);
    return newPokemonOptions;
  }, [data?.results]);

  useEffect(() => {
    if (value) {
      getPokemonName(value);
    }
  }, [getPokemonName, value]);

  return (
    <Box padding={0} sx={{ display: 'flex', flexDirection: 'row' }}>
      <Autocomplete
        sx={{ minWidth: '300px', backgroud: 'red' }}
        id="pokemon-search-box"
        value={value}
        onChange={(event: any, newValue: any) => {
          setValue(newValue);
        }}
        options={pokemonOptions || []}
        renderInput={(params) => (
          <>
            <TextField {...params} variant="outlined" label="Search Pokemon" />
          </>
        )}
      />
    </Box>
  );
};

export const SearchBar = memo(Component);
