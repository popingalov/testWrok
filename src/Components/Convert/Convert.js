import { useEffect, useState, useRef } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

import s from './Convert.module.css';
import currencys from './valut.json';
import { takeObj } from 'Api/apiConvert';

import useInput from 'Hooks/useInput';

export default function Convert() {
  const [startValue, setStartValue] = useState(100);
  const [endValue, setEndValue] = useState('');
  const [obj, setObj] = useState();
  const [results, setResults] = useState({ result: '' });

  const startRef = useRef();
  const endRef = useRef();

  const startInp = useInput(startRef, 'USD');
  const endInp = useInput(endRef, 'UAH');

  const round = value => {
    return Number(Math.round(value + 'e' + 3) + 'e-' + 3);
  };

  useEffect(() => {
    // const data = new Date().toISOString().slice(0, 10).replace(/([-])/g, '');
    (async () => {
      const result = await takeObj();

      let st = result[startInp.value];
      let en = result[endInp.value];

      const calc = round(st / en) * startValue;
      setResults({ result: calc });

      setObj(result);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!obj) {
      return;
    }

    let st = obj[startInp.value];
    let en = obj[endInp.value];
    const check = startInp.value.length === 3 && endInp.value.length === 3;

    if (check) {
      if (!st || !en) {
        alert('нет таковой валюты');
        return;
      }
      const calc = round((st / en) * startValue);
      setResults({ result: calc });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startValue, startInp.value, endInp.value]);

  useEffect(() => {
    if (!obj) {
      return;
    }

    let st = obj[startInp.value];
    let en = obj[endInp.value];

    const calc = endValue / (st / en);
    setStartValue(calc);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [endValue]);

  const cc = currencys.map((el, idx) => {
    return (
      <option value={el.cc} key={idx}>
        {el.cc} {el.txt}
      </option>
    );
  });

  return (
    <form className={s.uiPanel}>
      <div className={s.inputContainer}>
        <input
          type="number"
          value={round(startValue)}
          onChange={e => setStartValue(e.target.value)}
        />

        <input
          list="start"
          ref={startRef}
          {...startInp}
          className={s.currency}
        />
        <datalist id="start">{cc}</datalist>
      </div>

      <div className={s.icon}>
        <AiOutlineArrowLeft />
        <AiOutlineArrowRight />
      </div>

      <div className={s.inputContainer}>
        <input
          type="number"
          value={results.result}
          onChange={e => setEndValue(e.target.value)}
        />
        <input list="end" ref={endRef} {...endInp} className={s.currency} />
        <datalist id="end">{cc}</datalist>
      </div>
    </form>
  );
}
