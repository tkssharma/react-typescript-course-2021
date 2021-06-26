import * as React from "react";

type NameTagProps2 = {
  // Does not take any arguments. Does not return anything.
  onHover: () => void;
  // Takes a number. Returns nothing (e.g. undefined).
  onChange: (id: number) => void;
  // Takes an event that is based on clicking on a button.
  // Returns nothing.
  onClick(event: React.MouseEvent<HTMLButtonElement>): void;
};
type NameTagProps1 = {
  anObject: object; // Useful as a placeholder.
  anotherObject: {}; // Can have any properties and values.
  item: {
    id: string;
    title: string;
  };
  items: {
    id: string;
    title: string;
  }[]; // An array of objects of a certain shape.
};

type NameTagProps = {
  name: string;
  greeting?: string;
};

const NameTag = ({ name, greeting = "Hello" }: NameTagProps) => {
  return (
    <main>
      <header>
        <h1>{greeting}</h1>
        <p>My Name Is</p>
      </header>
      <section className="display-name">
        <p>{name}</p>
      </section>
      <footer />
    </main>
  );
};

const Application = () => <NameTag name="Steve" greeting="Salutations" />;

export default Application;
