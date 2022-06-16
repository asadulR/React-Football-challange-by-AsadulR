import { Route, Routes } from 'react-router-dom';
import FormationOverview from './Components/FormationOverview/FormationOverview';
import Home from './Components/Home/Home';
import RoasterDetails from './Components/RoasterDetails/RoasterDetails';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route index element={<RoasterDetails />}></Route>
          <Route path='FormationOverview' element={<FormationOverview />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
