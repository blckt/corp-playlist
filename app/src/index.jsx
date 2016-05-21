import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/ExampleReducer.jsx';
import { TodoList } from './containers/ExampleContainer.jsx';

const store = createStore(reducer);

main();
function main() {
    const app = document.createElement('div');
    document.body.appendChild(app);
    render(
      <Provider store={store}>
        <TodoList />
      </Provider>
    , app);
}
