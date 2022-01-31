import Calc from './Components/Calc/Calc';
import CssFoto from './Components/CssFoto/CssFoto';
import Todo from './Components/Todo/Todo';
import { Routes, Route } from 'react-router-dom';
import Navigation from './Components/Navigation';
const test = { distance: { unit: 'cm', value: 1 }, convert_to: 'm' };
function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/Convert" element={<Calc arg={test} />} />
        <Route path="/CssFoto" element={<CssFoto />} />
        <Route path="/Todo" element={<Todo />} />
      </Routes>
    </>
  );
}

export default App;
