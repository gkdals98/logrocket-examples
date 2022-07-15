import type { Component } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';

//index.tsx에 랜더링 될 우리의 app.
const App: Component = () => {
  return (
    <div class="containter mt-5 text-center">
      <h1 class="md-4">What to do!</h1>
      <form class="mb-5 row row-cols-2 justify-content-center">
        <input type="text" class="input-group-text p-1 w-25" placeholder="Add task here..." id="taskInput" required />
        <button class="btn btn-primary ms-3 w-auto" type="submit">
          Add task
        </button>
      </form>
      <div>
        <h4 class="text-muted mb-4">Tasks</h4>
        <div class="row row-cols-3 mb-3 justify-content-center">
          <button class="btn btn-danger w-auto">X</button>
        </div>
      </div>
    </div>
  );
};

export default App;
