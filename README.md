# Intro to React
We are going to make our very own first web application with React.
The theme of our web application is a video game called Final Fantasy VII Remake.

# Goals
 * Design web applications with CSS
 * Learn React main concepts
 * Understand React State and Lifecycle
 * Understand React Components and Props
 * Handling Events

## What is React?
 * React is a javascript library (or a framework)
 * Javascript is the programming language of HTML and the web

If you don't know javascipt, it's okay! This course will only cover the important fundamentals of React.
Main fundamentals of React are Handling Events, State and Life Cycle, Rendering Elements, Components and Props.

## Rendering an Element into the DOM
At our main index.html file in the public folder, there's a `<div>` with "id called root.
```
<!-- /public/index.html -->

<div id="root"></div>
```
This a 'root' DOM node, it's the place where everything appears (or render) managed by React.

## Update the Rendered Element
Every element that has been created and updated will be rendered by `ReactDOM.render()`.
You pass the `<App />` component to `ReactDOM.render()` for elements to render at the 'root' DOM.
`<App />` is the main Parent component.

```
ReactDOM.render(
    <App />,
    document.getElementbyId('root')
)
```

## Rendering Components
Components in React are independent reusable pieces. They are like Javascript functions that have can properties (normally called 'props'). Think of components as lego pieces with 'properties' (or 'props') that you can pass.

You can write components like this:
```
class Welcome extends React.Component {
  render() {
    return <h1>Hello World!</h1>;
  }
}
```
 * We have a component called `Welcome`
 * The `<Welcome />` component has a `render()` method that renders elements

## Component Props
You can give properties aka 'props' to Components that has been created.

For example:
```
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

ReactDOM.render(
  <Welcome name={"Sara"},
  document.getElementById('root')
);
```
Let's explain what's happening:
 1. We call `ReactDOM.render()` with the `<Welcome name="Sara" />` element.
 2. React calls the Welcome component with {name: 'Sara'} as the props.
 4. To get the `name` of the props we use `this.props`
 3. Our `Welcome` component returns a `<h1>Hello, Sara</h1>` element as the result.
 4. React DOM efficiently updates the DOM to match `<h1>Hello, Sara</h1>`.

## Component State
Component's state is plain Javascript object just like props.

Props get `passed` to the component whereas `state` is managed within the component.

```
class Welcome extends React.Component {

    state = {
        name: ""
    }
    
    render() {
        return(
            <div>
                <h1>Hello, {this.state.name}</h1>
                <button></button>
            </div>
        )
    }
}
```
Let explain what's happening:
 1. Our `Welcome` component has a state.
 2. State is plain Javascript object {name: 'Sara'}.
 3. We set the state with `this.setState`inside `componentDidMount()` method.
 3. To get the `name` of the state we use `this.state`.
 4. Our `Welcome` component returns a `<h1>Hello, Sara</h1>` element as the result.
 
## Component Lifecycle
Each component in React has a lifecycle which you can monitor and manipulate during its three main phases.

The three phases are: **Mounting**, **Updating**, and **Unmounting**.
 1. **Mounting means putting elements into the DOM**
    - The `componentDidMount()` is the mounting method
    - This is a method which is invoked immediately after the component did mount on the browser DOM
    - This method is called after the component is rendered.
    
 2. **Updating is the next phase of the lifecycle when a component is updated.**
    - A component is updated whenever there is a change in the component's state or props
    
 3. **Unmounting is the next phase in the lifecycle when a component is removed from the DOM, or unmounting as React likes to call it.**
    - The `componentWillUnmount()` method is called when the component is about to be removed from the DOM.
 
 **Note**: There are many other methods that get called when a component gets mounted or updated such as these:
  * getDerivedStateFromProps()
  * shouldComponentUpdate()
  * getSnapshotBeforeUpdate()
  * componentDidUpdate()
 
We are not going to cover these methods because they are not important to know as of now. In order to keep this course simple, we are only going to use `componentDidMount()`. If you're interested in learning more about React lifecyle methods checkout this [LINK](https://www.w3schools.com/react/react_lifecycle.asp).

