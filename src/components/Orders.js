export default function Orders({ dispatch }) {
  return (
    <div className="orders">
      <button
        className="btn"
        onClick={() => dispatch({ type: "order", payload: "draw" })}
      >
        Снять
      </button>
      <button
        className="btn"
        onClick={() => dispatch({ type: "order", payload: "deposit" })}
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
