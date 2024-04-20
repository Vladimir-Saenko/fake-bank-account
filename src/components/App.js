import { useReducer } from "react";
import Header from "./Header";
import Status from "./Status";
import Welcome from "./Welcome";

const LOAN_LIMIT = 10000;

const initState = {
  balance: 0,
  loan: 0,
  isClient: false,
  status: "none",
};

function reducer(state, action) {
  switch (action.type) {
    case "openAccount":
      return { ...state, isClient: true };

    case "closeAccount":
      return { initState };
    default:
      throw new Error("Неизвестная операция");
  }
}

export default function App() {
  const [{ balance, loan, isClient }, dispatch] = useReducer(
    reducer,
    initState
  );

  return (
    <div className="app">
      <Header />
      {isClient ? (
        <>
          <Status balance={balance} loan={loan} />
        </>
      ) : (
        <Welcome dispatch={dispatch} />
      )}
    </div>
  );
}
