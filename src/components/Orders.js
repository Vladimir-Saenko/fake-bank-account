export default function Orders({ dispatch, balance, loan }) {
  const isNotLoan = loan === 0;
  const isNotMoney = balance === 0;
  const isCanClosed = isNotMoney & isNotLoan;
  return (
    <div className="orders">
      <button
        className={isNotMoney ? "btn-disabled" : "btn"}
        disabled={isNotMoney}
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
        className={isNotLoan ? "btn-disabled" : "btn"}
        disabled={isNotLoan}
        onClick={() => dispatch({ type: "order", payload: "payLoan" })}
      >
        Гашение
      </button>
      <button
        className={isCanClosed ? "btn" : "btn-disabled"}
        disabled={!isCanClosed}
        onClick={() => dispatch({ type: "closeAccount" })}
      >
        Закрыть счет
      </button>
    </div>
  );
}
