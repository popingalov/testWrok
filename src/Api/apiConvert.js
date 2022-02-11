import axios from 'axios';

export async function takeObj() {
  const data = await axios.get(
    `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json`,
  );

  const result = data.data.reduce((acc, el) => {
    if (el === undefined) {
      return acc;
    }
    let rate = el.rate;
    let mony = el.cc;
    acc[mony] = rate;

    return acc;
  }, {});

  result.UAH = 1;

  return result;
}
