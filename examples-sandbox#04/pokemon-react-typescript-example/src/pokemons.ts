import shuffle from 'lodash.shuffle';
import data from './data';

export type PokemonType = {
  name: string;
  alignment: string;
  intelligence: number;
  strength: number;
  speed: number;
  durability: number;
  power: number;
  combat: number;
  total: number;
};

export const fetchPokemon = (): Promise<PokemonType> => {
  const [pokemon] = shuffle(data);
  return Promise.resolve(pokemon);
};
