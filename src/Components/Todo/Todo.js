import s from './todoClasses.module.css';
console.log([s.colHeader, s.start]);

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
