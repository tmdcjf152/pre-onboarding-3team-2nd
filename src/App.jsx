import { Route, Routes } from 'react-router-dom';
import GraphScreen from './pages/GraphScreen';
import SensorList from './pages/SensorList';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<SensorList />} />
        <Route path='/graph' element={<GraphScreen />} />
      </Routes>
    </>
  );
}

export default App;
