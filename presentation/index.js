// Import React
import React from "react";
// import { render } from "react-dom";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Code,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

import ToggleSwitch from "../assets/toggleswitch.js";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
  sdg: require("../assets/sdg.svg"),
  tiy: require("../assets/tiy.svg"),
  comp0: require("../assets/comp_0.png"),
  comp1: require("../assets/comp_1.png"),
  ambethia: require("../assets/ambethia.svg")
};

preloader(images);

const theme = createTheme({
  primary: "#40afff"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["fade"]} transitionDuration={500}>

          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} fit caps textColor="rgba(0, 0, 0, 0.5)">
              An introduction to
            </Heading>
            <Heading size={1} fit caps lineHeight={1}>
              React
            </Heading>
            <Heading size={1} fit caps textColor="rgba(0, 0, 0, 0.5)">
              A JAVASCRIPT LIBRARY FOR BUILDING USER INTERFACES
            </Heading>
          </Slide>

          <Slide bgColor="secondary" textColor="primary">
            <Heading size={2} textColor="primary">
              Audience
            </Heading>
            <List>
              <Appear><ListItem>HTML</ListItem></Appear>
              <Appear><ListItem>CSS</ListItem></Appear>
              <Appear><ListItem>Fundamental JavaScript</ListItem></Appear>
              <Appear><ListItem>Another JS framework/library</ListItem></Appear>
              <Appear><ListItem>New to React</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={["slide"]}>
            <Heading size={1} fit caps textColor="rgba(0, 0, 0, 0.5)">Part I</Heading>
            <Heading size={1} fit caps>Justification</Heading>
          </Slide>

          <Slide bgColor="secondary">
            <Heading size={1} caps>Managing "state" in a UI is hard</Heading>
          </Slide>

          <Slide bgColor="secondary">
            <BlockQuote>
              <Quote>Data changing over time is the root of all evil.</Quote>
              <Cite><Link textColor="tertiary" href="https://www.youtube.com/watch?v=x7cQ3mrcKaY&t=15m52s">Pete Hunt</Link></Cite>
            </BlockQuote>
          </Slide>

          <Slide bgColor="secondary">
            <Heading size={4} textColor="tertiary">We should be able to just declare how our app should look at any given point in time.</Heading>
          </Slide>

          <Slide transition={["slide"]}>
            <Heading size={1} fit caps textColor="rgba(0, 0, 0, 0.5)">Part II</Heading>
            <Heading size={1} fit caps>Responsibility</Heading>
          </Slide>

          <Slide bgColor="secondary">
            <Heading size={1} caps>React is not MVC</Heading>
            <Appear><Heading size={1}>It's just the "V"</Heading></Appear>
          </Slide>

          <Slide bgColor="secondary">
            <Heading size={1} fit textColor="tertiary">React makes no presumptions about routing.</Heading>
          </Slide>

          <Slide bgColor="secondary">
            <Heading size={1} fit textColor="tertiary">React doesn't care how you fetch or sync data.</Heading>
          </Slide>

          <Slide transition={["slide"]}>
            <Heading size={1} fit caps textColor="rgba(0, 0, 0, 0.5)">Part III</Heading>
            <Heading size={1} fit caps>Components</Heading>
          </Slide>

          <Slide>
              <Image src={images.comp0} width="100%" />
          </Slide>

          <Slide>
            <Image src={images.comp1} width="100%"/>
          </Slide>


          <Slide bgColor="secondary">
            <Heading size={1} fit textColor="tertiary">Convert data (state) into UI (HTML).</Heading>
          </Slide>

          <Slide bgColor="#2D2D2D">
            <CodePane lang="jsx" source={require("!raw!../assets/examples/create_component.jsx")} textSize="largest" />
          </Slide>

          <Slide bgColor="#2D2D2D">
            <CodePane lang="jsx" source={require("!raw!../assets/examples/create_component.js")} textSize="largest" />
          </Slide>

          <Slide>
            <Heading size={1} fit><Code>render</Code></Heading>
            <List>
              <Appear><ListItem>Pure JavaScript fuctions</ListItem></Appear>
              <Appear><ListItem>Native DOM nodes</ListItem></Appear>
              <Appear><ListItem>Composite Components</ListItem></Appear>
            </List>
          </Slide>

          <Slide bgColor="secondary">
            <BlockQuote>
              <Quote>A pure function is a function where the return value is only determined by its input values, without observable side effects.</Quote>
            </BlockQuote>
          </Slide>

          <Slide bgColor="#2D2D2D">
            <CodePane lang="jsx" source={require("!raw!../assets/examples/simple_component.jsx")} textSize="large" />
            <Appear>
              <CodePane lang="jsx" source={require("!raw!../assets/examples/simple_component.html")} textSize="large" />
            </Appear>
          </Slide>

          <Slide bgColor="#2D2D2D">
            <CodePane lang="jsx" source={require("!raw!../assets/examples/simple_component.js")} textSize="large" />
            <Appear>
              <CodePane lang="jsx" source={require("!raw!../assets/examples/simple_component.html")} textSize="large" />
            </Appear>
          </Slide>

          <Slide bgColor="#2D2D2D">
            <CodePane lang="jsx" source={require("!raw!../assets/examples/render_component.html")} textSize="large" />
            <Appear>
              <CodePane lang="jsx" source={require("!raw!../assets/examples/render_component.jsx")} textSize="large" />
            </Appear>
          </Slide>

          <Slide bgColor="#2D2D2D">
            <CodePane lang="jsx" source={require("!raw!../assets/examples/render_component.html")} textSize="large" />
            <CodePane lang="jsx" source={require("!raw!../assets/examples/render_component.js")} textSize="large" />
          </Slide>

          <Slide note="like parameters to a function, can be used to pass callbacks into a child component">
            <Heading size={1} fit><Code>props</Code></Heading>
            <List>
              <Appear><ListItem>Immutable</ListItem></Appear>
              <Appear><ListItem>Data passed to a component</ListItem></Appear>
            </List>
          </Slide>

          <Slide note="">
            <Heading size={1} fit><Code>state</Code></Heading>
            <List>
              <Appear><ListItem>Mutable</ListItem></Appear>
              <Appear><ListItem>Internal to a component</ListItem></Appear>
            </List>
          </Slide>

          <Slide bgColor="#2D2D2D">
            <CodePane lang="jsx" source={require("!raw!../assets/examples/props_component.jsx")} textSize="large" />
            <Appear>
              <CodePane lang="jsx" source={require("!raw!../assets/examples/simple_component.html")} textSize="large" />
            </Appear>
          </Slide>

          <Slide bgColor="#2D2D2D">
            <CodePane lang="jsx" source={require("!raw!../assets/examples/props_component.js")} textSize="large" />
            <CodePane lang="jsx" source={require("!raw!../assets/examples/simple_component.html")} textSize="large" />
          </Slide>

          <Slide transition={["slide"]}>
            <Heading size={1} fit caps textColor="rgba(0, 0, 0, 0.5)">Part IV</Heading>
            <Heading size={1} fit caps>JSX Syntax</Heading>
          </Slide>

          <Slide bgColor="#2D2D2D">
            <CodePane lang="jsx" source={require("!raw!../assets/examples/jsx_component.jsx")} textSize="large" />
          </Slide>

          <Slide bgColor="#2D2D2D">
            <CodePane lang="jsx" source={require("!raw!../assets/examples/jsx_component.js")} textSize="large" />
          </Slide>

          <Slide>
            <Heading size={2}>Why JSX?</Heading>
            <List>
              <Appear><ListItem>Not limited like a templating language</ListItem></Appear>
              <Appear><ListItem>React components, including JSX are plain JavaScript</ListItem></Appear>
              <Appear><ListItem><Code>map()</Code></ListItem></Appear>
              <Appear><ListItem><Code>filter()</Code></ListItem></Appear>
              <Appear><ListItem><Code>reduce()</Code></ListItem></Appear>
              <Appear><ListItem>Descriptive declaration of your UI in code</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={["slide"]}>
            <Heading size={1} fit caps textColor="rgba(0, 0, 0, 0.5)">Part V</Heading>
            <Heading size={1} fit caps>State</Heading>
          </Slide>

          <Slide bgColor="secondary">
            <Heading size={1} fit caps>One-way data flow</Heading>
          </Slide>

          <Slide bgColor="#2D2D2D">
            <CodePane lang="jsx" source={require("!raw!../assets/examples/state_component.jsx")} textSize="medium" />
          </Slide>

          <Slide bgColor="#2D2D2D">
            <CodePane lang="jsx" source={require("!raw!../assets/examples/state_component.js")} textSize="medium" />
          </Slide>

          <Slide bgColor="primary">
            <ToggleSwitch/>
          </Slide>

          <Slide bgColor="secondary">
            <Heading size={1} fit caps>One-way data flow</Heading>
          </Slide>

          <Slide>
            <Markdown># Re-render *everything* on *every* update</Markdown>
          </Slide>

          <Slide transition={["slide"]}>
            <Heading size={1} fit caps textColor="rgba(0, 0, 0, 0.5)">Part VI</Heading>
            <Heading size={1} fit caps>Virtual DOM</Heading>
          </Slide>

          <Slide bgColor="secondary">
            <Heading size={1} fit caps>Manipulating the DOM slow.</Heading>
          </Slide>

          <Slide bgColor="secondary">
            <Heading size={1} fit caps>Manipulating JS Objects is _fast.</Heading>
          </Slide>

          <Slide bgColor="secondary" note="Because the DOM is not being manipulated directly, you can render server-side.">
            <Heading size={1} fit caps textColor="primary">Server Side Rendering</Heading>
          </Slide>

          <Slide transition={["slide"]}>
            <Heading size={1} fit caps textColor="rgba(0, 0, 0, 0.5)">Part VII</Heading>
            <Heading size={1} fit caps>Lifecycle</Heading>
          </Slide>

          <Slide note="Invoked once immediately before the initial rendering.">
            <Heading size={1} fit><Code>componentWillMount</Code></Heading>
          </Slide>

          <Slide note="Invoked once immediately after the initial rendering.">
            <Heading size={1} fit><Code>componentDidMount</Code></Heading>
          </Slide>

          <Slide bgColor="#2D2D2D">
            <CodePane lang="jsx" source={require("!raw!../assets/examples/ajax_component_a.jsx")} textSize="medium" />
          </Slide>

          <Slide bgColor="#2D2D2D">
            <CodePane lang="jsx" source={require("!raw!../assets/examples/ajax_component_a.js")} textSize="medium" />
          </Slide>

          <Slide bgColor="#2D2D2D">
            <CodePane lang="jsx" source={require("!raw!../assets/examples/ajax_component_b.jsx")} textSize="medium" />
          </Slide>

          <Slide bgColor="#2D2D2D">
            <CodePane lang="jsx" source={require("!raw!../assets/examples/ajax_component_b.js")} textSize="medium" />
          </Slide>

          <Slide note="">
            <List>
              <Appear><ListItem>componentWillReceiveProps</ListItem></Appear>
              <Appear><ListItem>shouldComponentUpdate</ListItem></Appear>
              <Appear><ListItem>componentWillUpdate</ListItem></Appear>
              <Appear><ListItem>componentDidUpdate</ListItem></Appear>
              <Appear><ListItem>componentWillUnmount</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={["slide"]}>
            <Heading size={1} fit caps textColor="rgba(0, 0, 0, 0.5)">Part VIII</Heading>
            <Heading size={1} fit caps>Q&A</Heading>
          </Slide>

          <Slide bgColor="#39474e">
            <Link href="http://www.theironyard.com">
              <Image width="50%" src={images.tiy}/>
            </Link>
          </Slide>

          <Slide>
            <Link href="http://suncoast.io">
              <Image width="60%" src={images.sdg}/>
            </Link>
            <Heading lineHeight={0.25} textColor="#F7F2DA">
              suncoast.io
            </Heading>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}

// * Convert data (state) into HTML
// * `props`:
//   * Immutable
//   * data passed to a component (like parameters to a function)
//   * can be used to pass callbacks into a child component
// * `state`:
//   * mutable data, internal to a component.
//   * can only be changed with `setState` and `getInitialState`
// * `render` function:
//   * Pure JavaScript functions
//   * Native DOM nodes
//   * Composite Components
//   * returns the same result when invoked with the same state
//   * Design your components to actually _avoid_ using `state`.
// * One-way data flow
