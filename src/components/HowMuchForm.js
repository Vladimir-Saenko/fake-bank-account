import { useState } from "react";

export default function HowMuchForm({
  dispatch,
  balance,
  loan,
  loanLimit,
  orderType,
}) {
  const [howValue, setHowValue] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    switch (orderType) {
      case "draw":
        if (howValue > balance) {
          alert("Сумма на счету меньше запрашиваемой!");
          return;
        }
        dispatch({ type: "ordered", payload: howValue });
        break;
      case "deposit":
        dispatch({ type: "ordered", payload: howValue });
        break;
      case "requestLoan":
        if (howValue + loan > loanLimit) {
          alert("Вы превышаете лимит кредита!");
          return;
        }
        dispatch({ type: "ordered", payload: howValue });
        break;
      case "payLoan":
        if (howValue > loan) {
          alert("Сумма больше необходимой для погашения кредита!");
          return;
        }
        if (howValue > balance) {
          alert("У Вас нет столько средств на счету!");
          return;
        }
        dispatch({ type: "ordered", payload: howValue });
        break;
      default:
        return;
    }
  }
  const orderText =
    orderType === "draw"
      ? "Снять"
      : orderType === "deposit"
      ? "Положить"
      : orderType === "requestLoan"
      ? "Кредит"
      : "Гашение";

  return (
    <form className="how-much" onSubmit={handleSubmit}>
      <p>
        <label>{orderText}</label>
        <input
          type="text"
          value={howValue}
          placeholder="Введите сумму"
          onChange={(e) => setHowValue(Number(e.target.value))}
        />
        <button className="btn btn-ok">ОК</button>
      </p>
    </form>
  );
}
