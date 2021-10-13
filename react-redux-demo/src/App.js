import './App.css';
import { Provider } from 'react-redux'

import store from './redux/store'

import CakeContainer from './comp/CakeContainer'
import IceCreamContainer from './comp/IceCreamContainer'
import HooksCakeContainer from './comp/HooksCakeContainer'
import NewCakeContainer from './comp/NewCakeContainer'
import ItemContainer from './comp/ItemContainer'
import UserContainer from './comp/UserContainer'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserContainer />
        ---------------
        <ItemContainer cake />
        <ItemContainer />
        ---------------
        <NewCakeContainer />
        <CakeContainer />
        <HooksCakeContainer />
        <IceCreamContainer />
      </div>
    </Provider>
  );
}

export default App;
