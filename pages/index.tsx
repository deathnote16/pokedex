import { modules } from 'modules';
import { NextPage } from 'next';
import { stringify } from 'querystring';

const { useGetPokemonListQuery } = modules.pokemonModule;

const HomePage: NextPage = () => {
  const { data, isSuccess, isFetching, isLoading, isError } =
    useGetPokemonListQuery({ limit: 20 });
  return (
    <div>
      <div>{JSON.stringify(data)}</div>
    </div>
  );
};

export default HomePage;
