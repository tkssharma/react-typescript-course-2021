import * as React from 'react';
import { PokemonType } from './pokemons';

type TableProps = { children: React.ReactNode };
type TableRowProps = {
  heading: Capitalize<keyof PokemonType>;
  value: PokemonType[keyof PokemonType];
};

export const Table = ({ children }: TableProps) => {
  return (
    <table>
      <tbody>{children}</tbody>
    </table>
  );
};

export const TableRow = ({ heading, value }: TableRowProps) => {
  return (
    <tr>
      <th>{heading}</th>
      <td>{value}</td>
    </tr>
  );
};
