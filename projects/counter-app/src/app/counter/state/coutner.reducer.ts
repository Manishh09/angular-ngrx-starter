import { createReducer, on } from "@ngrx/store";
import { initialState } from "./counter.state";
import { changeCounterName, decrement, increment, reset, setCounter } from "./coutnter.actions";

export const _counterReducer = createReducer(
  initialState,

  // Add on handlers for actions here

  on(increment, (state, _) => ({
    ...state,
    count: state.count + 1
  })),

  on(decrement, (state, _) => ({
    ...state,
    count: state.count > 0 ? state.count - 1 : 0
  })),

  on(reset, (state, _) => ({
    ...state,
    count: 0
  })),

  on(setCounter, (state, action) => {
    return {
      ...state,
      count: state.count + action.value
    }
  }),

  on(changeCounterName, (state, _) => ({
    ...state,
    counterName: 'The counter name has been changed!'
  })),
);


export function counterReducer(state: any, action: any) {
  return _counterReducer(state, action);
}
