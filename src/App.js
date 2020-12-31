import { Provider } from 'react-redux';
import './App.scss';
import { Admin } from './layouts/Admin';
import { store } from './redux/store/store';

function App() {
  return (
    <>
      <Provider store={ store }>
        <Admin/>
      </Provider>
    </>
  );
}

export default App;
