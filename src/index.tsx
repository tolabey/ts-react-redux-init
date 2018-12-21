import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Hello from './containers/HelloC';
import Todo from './containers/TodoC';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {store} from "./Store/types";
import {enthusiasm} from "./Store/reducers";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {storeActions} from "./Store/actions"

const store = createStore<store, storeActions, any, any>(enthusiasm, { enthusiasmLevel: 1,languageName: 'TypeScript', todos:[]});
ReactDOM.render(
  <Provider store={store}>
      <div>
          <Hello />
          <Todo />
      </div>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
