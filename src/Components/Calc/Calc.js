import opc from './convertoptionc.json';
import { useState, useEffect } from 'react';
const optionc = opc[0];
export default function Calc({ arg }) {
  const [state, setstate] = useState();
  const [togle, settogle] = useState(false);
  const [startMetr, setstartMetr] = useState('m');
  const [endtMetr, setEndMetr] = useState('m');
  const [valueStart, setValueStart] = useState(1);
  const [valueEnd, setValueEnd] = useState(1);
  const [result, setResult] = useState({ unit: 'm', value: 1 });
  const [rounding, setrounding] = useState(2);

  useEffect(() => {
    const whot = optionc[startMetr];
    const to = whot[endtMetr];
    const convertValue = valueStart * to;

    setResult({ unit: endtMetr, value: round(convertValue) });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [valueStart, endtMetr, startMetr]);

  useEffect(() => {
    const whot = optionc[startMetr];
    const to = whot[endtMetr];
    const convertValue = valueEnd / to;
    setValueStart(round(convertValue));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [valueEnd]);

  const round = value => {
    return Number(Math.round(value + 'e' + rounding) + 'e-' + rounding);
  };

  const changeEndMetric = e => {
    setEndMetr(e);
    settogle(!togle);
  };

  const changeStartMetric = e => {
    setstartMetr(e);
    settogle(!togle);
  };

  const open = () => {
    settogle(!togle);
    const metric = Object.keys(opc[0]);
    return setstate(metric);
  };

  return (
    <>
      <label>
        rounding
        <input
          type="number"
          value={rounding}
          onChange={e => setrounding(e.target.value)}
        />
      </label>
      <div>
        <button onClick={open}>{startMetr}</button>
        <input
          type="number"
          value={valueStart}
          onChange={e => setValueStart(e.target.value)}
        />
        {togle &&
          state.map(e => (
            <button
              key={e}
              onClick={e => changeStartMetric(e.target.innerText)}
            >
              {e}
            </button>
          ))}
      </div>
      <div>
        <button onClick={open}>{endtMetr}</button>
        <input
          type="number"
          value={result.value}
          onChange={e => setValueEnd(e.target.value)}
        />
        {togle &&
          state.map(e => (
            <button key={e} onClick={e => changeEndMetric(e.target.innerText)}>
              {e}
            </button>
          ))}
      </div>
    </>
  );
}
