import { FC, memo, useEffect, useMemo, useState } from 'react';
import { Autocomplete, Box, TextField } from '@mui/material';
import { usePokemonPayload } from 'hook';
import { cloneDeep } from 'lodash';
import { modules } from 'modules';
import SearchIcon from '@mui/icons-material/Search';
import useWindowSize from 'hook/use-window-size';
import { useGlobalEvent } from 'hook/use-global-event';
import { useRouter } from 'next/router';

const { useGetPokemonListQuery } = modules.pokemonModule;

type Props = {};

const Component: FC<Props> = () => {
  const router = useRouter();
  const { data } = useGetPokemonListQuery({
    limit: 10000
  });
  const { getPokemonName, getPokemonUrl } = usePokemonPayload();
  const { isMobile } = useWindowSize();
  const { isPokemonSearchBar, onToggleShowPokemonSearch } = useGlobalEvent();
  const [value, setValue] = useState<string | null>();

  const pokemonOptions = useMemo(() => {
    const newPokemonResult = cloneDeep(data?.results);
    const newPokemonOptions = newPokemonResult?.map((item) => item.name);
    return newPokemonOptions;
  }, [data?.results]);

  const onHandlePokemonChange = (newVal: any) => {
    setValue(newVal);

    //close search bar in desktop after selecting pokemon
    if (!isMobile && newVal) {
      onToggleShowPokemonSearch(!isPokemonSearchBar);
    }
  };

  useEffect(() => {
    if (value) {
      router.replace(`/pokemon/${value}`);
      getPokemonName(value);
      setValue('');
    }
  }, [getPokemonName, router, value]);

  return (
    <Box
      padding={0}
      sx={{
        display: 'flex',
        flexDirection: 'row'
      }}
    >
      <Autocomplete
        sx={{
          minWidth: isMobile ? '300px' : '600px',
          zIndex: 1
        }}
        id="pokemon-search-box"
        autoHighlight
        openOnFocus
        value={value}
        onChange={(event: any, newValue: any) =>
          onHandlePokemonChange(newValue)
        }
        options={pokemonOptions || []}
        renderInput={(params) => (
          <>
            <TextField
              {...params}
              variant="outlined"
              placeholder="Search Pokemon"
              InputProps={{
                ...params.InputProps, // Include existing InputProps
                startAdornment: <SearchIcon />
              }}
              sx={{ background: 'white' }}
            />
          </>
        )}
      />
    </Box>
  );
};

export const SearchBar = memo(Component);
