export default function Status({ balance, loan }) {
  return (
    <div className="status">
      <span>
        Баланс счёта:
        <label className="output" style={{ color: "darkgreen" }}>
          {balance}
        </label>
        руб.
      </span>

      <span>
        Кредит:
        <label className="output" style={{ color: "darkred" }}>
          {loan}
        </label>
        руб.
      </span>
    </div>
  );
}
