import './App.css';
import { Provider } from 'react-redux'

import store from './redux/store'

import CakeContainer from './comp/CakeContainer'
import IceCreamContainer from './comp/IceCreamContainer'
import HooksCakeContainer from './comp/HooksCakeContainer'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <HooksCakeContainer />
        <IceCreamContainer />
      </div>
    </Provider>
  );
}

export default App;
