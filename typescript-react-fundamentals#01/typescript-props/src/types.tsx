import * as PropTypes from "prop-types";
/*
const Greeting = ({ name }) => <h1>Hello {name}!</h1>;

Greeting.propTypes = {
  name: PropTypes.string
};
// There is no need for PropTypes in TypeScript as that's pretty much a large part of what TypeScript does on our behalf.
 */
type GreetingProps = { name: string };
// const Greeting1: ({ name }: GreetingProps) => JSX.Element;

const Greetings = ({ name }: GreetingProps) => <h1>Hello {name}!</h1>;

/****************************** */

const GreetingExample = ({ name }) => <h1>Hello {name}!</h1>;

GreetingExample.propTypes = {
  name: PropTypes.string
};
