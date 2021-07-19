import * as React from "react";
/**
 * Things you could try:
 *
 * JSX.Element;
 * JSX.Element | JSX.Element[];
 * React.ReactNode;
 * React.ReactChildren;
 * React.ReactChild[];
 */

/*
JSX.Element;: 💩 This doesn't account for arrays at all.
JSX.Element | JSX.Element[]; 😕 This doesn't accept strings.
React.ReactChildren;: 🤪 Not at even an appropriate type; it's a utility function.
React.ReactChild[];: 😀 Accepts multiple children, but it doesn't accept a single child.
React.ReactNode;: 🏆 Accepts everything.
*/

type BoxProps = { children: React.ReactNode };

const Box = ({ children }: BoxProps) => {
  return (
    <section style={{ padding: "1em", border: "5px solid purple" }}>
      {children}
    </section>
  );
};

export default function Application() {
  return (
    <Box>
      Just a string.
      <p>Some HTML that is not nested.</p>
      <Box>
        <h2>Another React component with one child.</h2>
      </Box>
      <Box>
        <h2>A nested React component with two children.</h2>
        <p>The second child.</p>
      </Box>
    </Box>
  );
}
