export default function Welcome({ dispatch }) {
  return (
    <div className="welcome">
      <p>Добро пожаловать! Хотите открыть счёт в нашем банке?</p>
      <img src="welcome.jpg" alt="Welcome!" />
      <p>
        <button
          className="btn welcome-btn"
          onClick={() => dispatch({ type: "openAccount" })}
        >
          ХОЧУ!
        </button>
      </p>
    </div>
  );
}
