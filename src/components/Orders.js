export default function Orders({ dispatch }) {
  return (
    <div className="orders">
      <button
        className="btn"
        onClick={() => dispatch({ type: "order", payload: "deposit" })}
      >
        Снять
      </button>
      <button
        className="btn"
        onClick={() => dispatch({ type: "order", payload: "draw" })}
      >
        Положить
      </button>
      <button
        className="btn"
        onClick={() => dispatch({ type: "order", payload: "requestLoan" })}
      >
        Кредит
      </button>
      <button
        className="btn"
        onClick={() => dispatch({ type: "order", payload: "payLoan" })}
      >
        Гашение
      </button>
      <button
        className="btn"
        onClick={() => dispatch({ type: "closeAccount" })}
      >
        Закрыть счет
      </button>
    </div>
  );
}
