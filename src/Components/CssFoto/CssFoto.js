import './cssFoto.css';
const backImg = [
  'https://media.istockphoto.com/photos/camogli-liguria-italy-april-13-2016-ferrari-california-t-picture-id528418730?k=20&m=528418730&s=612x612&w=0&h=94D1eeiZmgAEFR8Fj3sfYVjV2rvuYHgUYOdYo8A8-Cw=',
  'https://media.istockphoto.com/photos/lamborghini-aventador-picture-id522310912?k=20&m=522310912&s=612x612&w=0&h=RDkmLxozCf0i5f9Z6jX-s6RSwkX3QHWugG426NcW5rs=',
  'https://media.istockphoto.com/photos/chevrolet-camaro-zl1-the-exorcist-street-drift-picture-id1273520124?k=20&m=1273520124&s=612x612&w=0&h=E9d7bG19Nru_qAAqHDjlC2XmlUWYmWVEs-6dlHUUdvM=',
  'https://media.istockphoto.com/photos/model-aston-martin-db5-in-atmospheric-garage-picture-id1139491166?k=20&m=1139491166&s=612x612&w=0&h=UhdV1A0EF86Xwb_X6N3ILmy4u8nar1d1kM0rOhxTF2A=',
  'https://media.istockphoto.com/photos/tesla-model-s-driving-across-a-bridge-picture-id1278562091?k=20&m=1278562091&s=612x612&w=0&h=Zahztl3vBY1tYh1fmA4jOhtmDa5nR-kBCWP84oAZQD0=',
];
const nameCar = ['Ferrari', 'Lamborghini', 'Camaro', 'Tesla'];

const CssFoto = () => {
  function toggle(_, ind) {
    if (test === ind) return;
    const slides = document.querySelectorAll('.container');
    const element = slides[0].children[ind];
    const preElement = slides[0].children[test];
    element.classList.add('active');
    preElement.classList.remove('active');
    test = ind;
  }
  let test = 0;
  return (
    <div className="container">
      {backImg.map((e, ind) => {
        return (
          <div
            key={e}
            className={ind === 0 ? 'slide active' : 'slide'}
            style={{ backgroundImage: 'url' + `( ${e})` }}
            onClick={es => {
              toggle(es, ind);
            }}
          >
            {nameCar[ind]}
          </div>
        );
      })}
    </div>
  );
};
export default CssFoto;
