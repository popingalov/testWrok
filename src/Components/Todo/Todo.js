import s from './todoClasses.module.css';
const words = ['banana', 'ping', 'grapp', 'banana', 'grapp', 'banana'];

function summ(a, b) {
  return a + b;
}

function calc(func) {
  return a => {
    return b => func(a, b);
  };
}
console.log(calc(summ)(3)(11));
const Todo = () => {
  return (
    <div className={s.todo}>
      <div className={s.row}>
        <div className={s.colHeader + ' ' + s.start}>Начать</div>
        <div className={s.colHeader + ' ' + s.progress}>В процессе</div>
        <div className={s.colHeader + ' ' + s.done}>Готовы</div>
      </div>

      <div className={s.row}>
        <div className={s.placeholder}>
          <div className={s.item}>Перетащи меня</div>
        </div>
        <div className={s.placeholder}></div>
        <div className={s.placeholder}></div>
      </div>
    </div>
  );
};
export default Todo;
