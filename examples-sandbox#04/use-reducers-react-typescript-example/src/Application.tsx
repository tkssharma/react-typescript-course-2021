import { Dispatch, useReducer } from "react";

type PizzaData = {
  numberOfPeople: number;
  slicePerPerson: number;
  slicesPerPie: number;
};

type PizzaState = PizzaData & { pizzasNeeded: number };

const initialState: PizzaState = {
  numberOfPeople: 8,
  slicePerPerson: 2,
  slicesPerPie: 8,
  pizzasNeeded: 2
};

type PizzaAction = {
  type:
    | "UPDATE_NUMBER_OF_PEOPLE"
    | "UPDATE_SLICE_PER_PERSON"
    | "UPDATE_SLICES_PER_PIE";
  payload: number;
};

const calculatePizzaNeeded = ({
  numberOfPeople,
  slicePerPerson,
  slicesPerPie
}: PizzaData): number => {
  return Math.ceil((numberOfPeople * slicePerPerson) / slicesPerPie);
};

const addPizzaNeededToPizzaData = (data: PizzaData): PizzaState => {
  return { ...data, pizzasNeeded: calculatePizzaNeeded(data) };
};

const reducer = (state: PizzaState, action: PizzaAction) => {
  if (action.type === "UPDATE_NUMBER_OF_PEOPLE") {
    return addPizzaNeededToPizzaData({
      ...state,
      numberOfPeople: action.payload
    });
  }
  if (action.type === "UPDATE_SLICE_PER_PERSON") {
    return addPizzaNeededToPizzaData({
      ...state,
      slicePerPerson: action.payload
    });
  }
  if (action.type === "UPDATE_SLICES_PER_PIE") {
    return addPizzaNeededToPizzaData({
      ...state,
      slicesPerPie: action.payload
    });
  }
  return state;
};
const Calculation = ({ count }: { count: any }) => {
  return (
    <section className="calculation">
      <p className="count">{count}</p>
      <p className="caption">Pizzas Needed</p>
    </section>
  );
};

const Calculator = ({
  dispatch,
  state
}: {
  state: PizzaState;
  dispatch: Dispatch<PizzaAction>;
}) => {
  return (
    <form>
      <input
        type="number"
        placeholder="numberOfPeople"
        value={state.numberOfPeople}
        onChange={(event) => {
          dispatch({
            type: "UPDATE_NUMBER_OF_PEOPLE",
            payload: +event.target.value
          });
        }}
      />
      <input
        type="number"
        placeholder="slicePerPerson"
        value={state.slicePerPerson}
        onChange={(event) => {
          dispatch({
            type: "UPDATE_SLICE_PER_PERSON",
            payload: +event.target.value
          });
        }}
      />

      <input
        type="number"
        value={state.slicesPerPie}
        onChange={(event) => {
          dispatch({
            type: "UPDATE_SLICES_PER_PIE",
            payload: +event.target.value
          });
        }}
      />
    </form>
  );
};

const Application = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="container">
      <Calculation count={state.pizzasNeeded} />
      <Calculator state={state} dispatch={dispatch} />
    </div>
  );
};

export default Application;
