import * as React from 'react';

import { PokemonType, fetchPokemon } from './pokemons';

import { Loading } from './Loading';
import { PokemonInformation } from './PokemonInformation';

const withPokemon = (Component: any) => {
  return (props) => {
    const [pokemon, setPokemon] = React.useState<PokemonType | null>(
      null
    );
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
      fetchPokemon().then((c) => {
        setPokemon(c);
        setLoading(false);
      });
    }, []);

    if (loading) return <Loading />;
    return <Component pokemon={pokemon} />;
  };
};

const PokemonInformationWithPokemon = withPokemon(PokemonInformation);

const Application = () => {
  return (
    <main>
      <PokemonInformationWithPokemon />
    </main>
  );
};

export default Application;
