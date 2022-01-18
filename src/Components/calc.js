import opc from './optionc.json';
import { useState, useEffect } from 'react';
import { lab } from 'color-convert/conversions';
const optionc = opc[0];

export default function Calc({ arg }) {
  const { distance, convert_to } = arg;
  const [state, setstate] = useState();
  const [togle, settogle] = useState(false);
  const [startMetr, setstartMetr] = useState('m');
  const [endtMetr, setEndMetr] = useState('m');
  const [valueStart, setValueStart] = useState(1);
  const [valueEnd, setValueEnd] = useState(1);
  const [result, setResult] = useState({ unit: 'm', value: 1 });
  const [rounding, setrounding] = useState(2);
  /* const convert = (w, to) => {
    const { unit, value } = w;
    const toConvert = optionc[unit];
    const whot = toConvert[to];
    const convertValue = value * whot;
    setResult({ unit: to, value: convertValue });
  }; */

  useEffect(() => {
    const whot = optionc[startMetr];
    const to = whot[endtMetr];
    const convertValue = valueStart * to;

    setResult({ unit: endtMetr, value: round(convertValue) });
  }, [valueStart, endtMetr, startMetr]);

  useEffect(() => {
    const whot = optionc[startMetr];
    const to = whot[endtMetr];
    const convertValue = valueEnd / to;
    setValueStart(round(convertValue));
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
      <lable>
        Rounding
        <input
          type="number"
          value={rounding}
          onChange={e => setrounding(e.target.value)}
        />
      </lable>
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
