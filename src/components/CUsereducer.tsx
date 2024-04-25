import { useReducer } from "react";
const initialState = {
  count: 0,
};
function reducer(
  state: { count: number },
  action: { type: string; payload: 1 }
) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    default:
      return state;
  }
}
const CUsereducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="flex flex-col w-[300px] items-center m-10">
      <h2 className="font-bold border-[3px] border-dotted border-yellow-400 p-2 rounded-xl">
        useReducer Hook
      </h2>
      <p>
        Count :
        {state.count < 0 ? (
          <span className="font-bold text-red-700">{state.count}</span>
        ) : (
          <span className="font-bold text-green-700">{state.count}</span>
        )}
      </p>
      <div>
        <button
          className="border p-2 m-3 rounded-md bg-slate-900 text-gray-300"
          onClick={() => dispatch({ payload: 1, type: "increment" })}
        >
          Increment
        </button>
        <button
          className="border p-2 m-3 rounded-md bg-slate-900 text-gray-300"
          onClick={() => dispatch({ payload: 1, type: "decrement" })}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default CUsereducer;
