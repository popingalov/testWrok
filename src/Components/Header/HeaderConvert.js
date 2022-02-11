import { takeObj } from 'Api/apiConvert';
import { useEffect, useState } from 'react';
import s from './Header.module.css';

export default function HeaderConvert() {
  const [obj, setObj] = useState();
  useEffect(() => {
    // const data = new Date().toISOString().slice(0, 10).replace(/([-])/g, '');
    (async () => {
      const result = await takeObj();

      const newResult = [
        { text: 'USD', cc: result.USD },
        { text: 'EUR', cc: result.EUR },
        { text: 'RUB', cc: result.RUB },
      ];

      setObj(newResult);
    })();
  }, []);
  const cc = obj?.map(el => {
    return (
      <li key={el.text}>
        <p>{el.text}</p>
        <p>{el.cc}</p>
      </li>
    );
  });

  return <ul className={s.headerConv}>{cc}</ul>;
}
