import { MainLayout } from 'component/layout';
import { PokemonSection } from 'component/sections';
import { NextPage } from 'next';

const PokemonPage: NextPage = () => {
  return (
    <MainLayout>
      <PokemonSection />
    </MainLayout>
  );
};

export default PokemonPage;
