import { Route, Routes } from 'react-router-dom';
import { createContext, useState } from 'react';
import Nav from './components/nav/Nav';
import GlobalStyle from './GrobalStyle';
import GraphScreen from './pages/GraphScreen';
import SensorList from './pages/SensorList';

const Context = createContext({
  checkedArray: {},
  setCheckedArray: () => {},
});

function App() {
  const [checkedArray, setCheckedArray] = useState({});

  return (
    <>
      <Context.Provider value={{ checkedArray, setCheckedArray }}>
        <GlobalStyle />
        <Nav />
        <Routes>
          <Route path='/' element={<SensorList />} />
          <Route path='/graph/target' element={<GraphScreen />} />
        </Routes>
      </Context.Provider>
    </>
  );
}

export default App;
export const CheckboxContext = Context;
