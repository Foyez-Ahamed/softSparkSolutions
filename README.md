# React Basics and Fundamental Concepts

React is a JavaScript library for building user interfaces. Its core concept revolves around efficiently creating and updating interactive user interfaces by breaking them into reusable components.

## Fundamental Concepts of React

### 1. Components
Components are the building blocks of a React application. A component is a JavaScript function or class that returns a piece of the UI.

#### Types of Components:
- **Functional Components:** JavaScript functions that use hooks.
- **Class Components:** ES6 classes that extend `React.Component`.

#### Example:
```javascript
function Greeting() {
  return <h1>Hello, World!</h1>;
}
```

### 2. JSX (JavaScript XML)
React uses JSX, a syntax extension that allows mixing HTML with JavaScript. JSX makes it easy to create templates but is transformed into JavaScript under the hood.

#### Example:
```javascript
const element = <h1>Welcome to React!</h1>;
```

### 3. State
State is a built-in object that allows components to manage and react to dynamic data. State is mutable and typically used with hooks (e.g., `useState`).

#### Example:
```javascript
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

### 4. Props (Properties)
Props are inputs to components, allowing data to be passed from parent to child components. Props are immutable (read-only).

#### Example:
```javascript
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Usage
<Welcome name="Farhan" />
```

### 5. Virtual DOM
React uses a Virtual DOM to optimize updates to the real DOM. Changes are made in the virtual DOM, and only the differences are updated in the actual DOM.

### 6. Hooks
Introduced in React 16.8, hooks allow functional components to use state and lifecycle methods.

#### Common Hooks:
- `useState`: Manage state.
- `useEffect`: Perform side effects (e.g., API calls, subscriptions).
- `useContext`: Access context values.

#### Example of `useEffect`:
```javascript
import { useEffect } from "react";

function App() {
  useEffect(() => {
    console.log("Component mounted!");
  }, []); // Empty dependency array runs it only once

  return <div>React App</div>;
}
```

### 7. Lifecycle Methods
Class components have lifecycle methods for different phases (mounting, updating, unmounting).

#### Examples:
- `componentDidMount`
- `componentDidUpdate`
- `componentWillUnmount`

### 8. React Router
A library used for handling routing in a React application. Enables navigation between pages without a full page reload.

#### Example:
```javascript
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
```

### 9. Context API
Provides a way to pass data through the component tree without manually passing props at every level.

#### Example:
```javascript
import { createContext, useContext } from "react";

const UserContext = createContext();

function App() {
  return (
    <UserContext.Provider value="Farhan">
      <Profile />
    </UserContext.Provider>
  );
}

function Profile() {
  const user = useContext(UserContext);
  return <h1>User: {user}</h1>;
}
```

### 10. Handling Events
React uses camelCase for event names (e.g., `onClick`, `onChange`). Event handlers are passed as functions.

#### Example:
```javascript
function ClickMe() {
  const handleClick = () => alert("Button clicked!");

  return <button onClick={handleClick}>Click Me</button>;
}
```

### 11. Conditional Rendering
Render different components or elements based on conditions.

#### Example:
```javascript
function Greeting({ isLoggedIn }) {
  return isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please sign in.</h1>;
}
```

### 12. Lists and Keys
Use the `map` method to render lists dynamically. Use a unique `key` prop for better performance.

#### Example:
```javascript
function NameList() {
  const names = ["Alice", "Bob", "Charlie"];

  return (
    <ul>
      {names.map((name, index) => (
        <li key={index}>{name}</li>
      ))}
    </ul>
  );
}
```

### 13. One-Way Data Binding
React's data flow is unidirectional (from parent to child components via props).

### 14. Redux (State Management)
Redux or similar libraries like MobX and Zustand are used for managing complex application states.

---
These concepts form the foundation of React development. Mastering them will help you build dynamic and scalable applications.