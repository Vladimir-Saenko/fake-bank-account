import { useReducer } from "react";
import Header from "./Header";
import Status from "./Status";
import Welcome from "./Welcome";
import Orders from "./Orders";
import HowMuchForm from "./HowMuchForm";

const LOAN_LIMIT = 10000;

const initState = {
  balance: 0,
  loan: 0,
  isClient: false,
  status: "none",
  orderType: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "openAccount":
      return { ...state, status: "ready", isClient: true };
    case "order":
      return { ...state, status: "order", orderType: action.payload };

    case "closeAccount":
      return { initState };
    default:
      throw new Error("Неизвестная операция");
  }
}

export default function App() {
  const [{ balance, loan, isClient, status, orderType }, dispatch] = useReducer(
    reducer,
    initState
  );

  return (
    <div className="app">
      <Header />
      {isClient ? (
        <>
          <Status balance={balance} loan={loan} />
          <Orders dispatch={dispatch} />
          {status === "order" && <HowMuchForm orderType={orderType} />}
        </>
      ) : (
        <Welcome dispatch={dispatch} />
      )}
    </div>
  );
}
