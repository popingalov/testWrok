import Calc from './Components/calc';
const test = { distance: { unit: 'cm', value: 1 }, convert_to: 'm' };
function App() {
  return (
    <>
      <Calc arg={test} />
    </>
  );
}

export default App;
