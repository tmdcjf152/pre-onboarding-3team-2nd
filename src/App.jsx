import { Route, Routes } from 'react-router-dom';
import GlobalStyle from './GrobalStyle';
import GraphScreen from './pages/GraphScreen';
import SensorList from './pages/SensorList';

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<SensorList />} />
        <Route path='/graph' element={<GraphScreen />} />
      </Routes>
    </>
  );
}

export default App;
