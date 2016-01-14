# An Introduction to React

## Audience

I am assuming familiarity with:

  * HTML
  * CSS
  * JavaScript Fundamentals
  * Another JS framework/library such as jQuery or Angular
 
I am assuming no knowledge of React.
 
I love ES6, but we're not going to use it in this talk.
  
## Justification

  * Managing "state" in a UI is hard

> "Data changing over time is the root of all evil"
> -- <cite>[Pete Hunt][1]</cite>

[1]:https://www.youtube.com/watch?v=x7cQ3mrcKaY&t=15m52s

## Responsibility

  * Not MVC
  * Just the "V" in MVC
  * No presumptions about routing
  * No presumptions about how you're syncing data

## Components

  * Convert data (state) into HTML
  * `props`:
    * Immutable
    * data passed to a component (like parameters to a function)
    * can be used to pass callbacks into a child component
  * `state`: 
    * mutable data, internal to a component.
    * can only be changed with `setState` and `getInitialState`
  * `render` function:
    * Pure JavaScript functions
    * Native DOM nodes
    * Composite Components
    * returns the same result when invoked with the same state
    * Design your components to actually _avoid_ using `state`.
  * One-way data flow
  
### Lifecycle
    
## JSX

  * Other templating languages are limited.
  * React components are plain JavaScript
  * You can `map`, `filter`, `reduce`, whatever...
  * Descriptive declaration of your UI in code
  * Preprocessors translate JSX to plain JS

## Virtual Dom

  * Re-render *everything* on *every* update 
  * Manipulating the DOM slow. Repainting is expensive
  * Manipulating JS Objects is _fast
  * Because the DOM is not being manipulated directly, you can render server-side.

## Workshop

...

## Next Steps

  * Blogs
  * Wes Bos' Course
  * Documentation
  * Front End Masters
  * Flux

## Q&A