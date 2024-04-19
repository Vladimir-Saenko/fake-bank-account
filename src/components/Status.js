export default function Status() {
  const balance = 5000;
  const loan = 0;

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
