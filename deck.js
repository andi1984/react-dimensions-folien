export { default as theme } from "./theme";
import { slides as einstieg } from "./slides/einstieg.mdx";
import { slides as intro } from "./slides/intro.mdx";
import { slides as react_intro } from "./slides/thinking-react.mdx";
import { slides as links } from "./slides/links.mdx";
import { slides as summary } from "./slides/summary.mdx";

export const slides = [
  ...einstieg,
  ...intro, // Dimensions Intro
  ...react_intro, // Umstieg jQuery --> React Denkweise
  // React Statemanagement
  // Tools: Storybook
  ...summary,
  ...links
];
