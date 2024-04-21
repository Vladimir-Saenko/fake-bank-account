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
    case "ordered":
      if (state.orderType === "deposit")
        return {
          ...state,
          status: "ready",
          balance: state.balance + action.payload,
        };
      if (state.orderType === "draw")
        return {
          ...state,
          status: "ready",
          balance: state.balance - action.payload,
        };
      if (state.orderType === "requestLoan")
        return {
          ...state,
          status: "ready",
          balance: state.balance + action.payload,
          loan: state.loan + action.payload,
        };
      if (state.orderType === "payLoan")
        return {
          ...state,
          status: "ready",
          balance: state.balance - action.payload,
          loan: state.loan - action.payload,
        };
      break;

    case "closeAccount":
      return initState;
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
          <Orders dispatch={dispatch} balance={balance} loan={loan} />
          {status === "order" && (
            <HowMuchForm
              dispatch={dispatch}
              balance={balance}
              loan={loan}
              loanLimit={LOAN_LIMIT}
              orderType={orderType}
            />
          )}
        </>
      ) : (
        <Welcome dispatch={dispatch} />
      )}
    </div>
  );
}
