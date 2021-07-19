import { PokemonType } from './pokemons';
import { Table, TableRow } from './Table';

export const PokemonInformation = ({
  pokemon
}: {
  pokemon: PokemonType;
}) => {
  return (
    <article>
      <header>
        <h1>{pokemon.name}</h1>
      </header>
      <Table>
        <TableRow heading="Alignment" value={pokemon.alignment} />
        <TableRow heading="Intelligence" value={pokemon.intelligence} />
        <TableRow heading="Strength" value={pokemon.strength} />
        <TableRow heading="Speed" value={pokemon.speed} />
        <TableRow heading="Durability" value={pokemon.durability} />
        <TableRow heading="Power" value={pokemon.power} />
        <TableRow heading="Combat" value={pokemon.combat} />
        <TableRow heading="Total" value={pokemon.total} />
      </Table>
    </article>
  );
};
